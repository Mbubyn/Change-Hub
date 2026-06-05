/**
 * parse-scorm.js
 *
 * Decodes the Rise SCORM export and writes structured JSON content files.
 *
 * Usage:  node scripts/parse-scorm.js
 *         node scripts/parse-scorm.js --force   (overwrite existing files)
 *
 * Output: content/pages/<slug>.json  (one per content page)
 *         content/config.json        (course-level settings, if not already present)
 */

const fs   = require('fs');
const path = require('path');

const SCORM_SRC = path.join(__dirname, '../the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js');
const PAGES_DIR = path.join(__dirname, '../content/pages');
const CONFIG_PATH = path.join(__dirname, '../content/config.json');
const FORCE = process.argv.includes('--force');

// ============================================================
// 1. Decode runtime-data.js
// ============================================================
function loadCourseData() {
  const raw = fs.readFileSync(SCORM_SRC, 'utf8');
  const match = raw.match(/__jsonp\("runtime-data\.js","([^"]+)"\)/);
  if (!match) throw new Error('Could not find __jsonp(...) call in runtime-data.js');
  const json = Buffer.from(match[1], 'base64').toString('utf8');
  return JSON.parse(json);
}

// ============================================================
// 2. HTML cleaning — strip Rise-specific cruft
// ============================================================

// Remove the outer <div data-editor-id="..."> wrapper that Rise wraps every field in
function unwrapEditorDiv(html) {
  if (!html) return '';
  return html
    .replace(/^<div[^>]*data-editor-id="[^"]*"[^>]*>/i, '')
    .replace(/<\/div>$/i, '')
    .trim();
}

// Strip inline color/font-size styles — Rise uses these for its dark-background theme
// Our CSS will handle styling; we keep structural HTML (bold, italic, links, lists)
function stripInlineStyles(html) {
  if (!html) return '';
  return html
    // Remove style attributes entirely from spans
    .replace(/<span\s+style="[^"]*">/gi, '<span>')
    // Clean up empty spans left behind
    .replace(/<span><\/span>/gi, '')
    // Remove style attributes on paragraphs and other block elements
    .replace(/(<(?:p|div|ul|ol|li)[^>]*?)\s+style="[^"]*"/gi, '$1')
    // Remove Rise's trailing-break brs
    .replace(/<br\s+class="break-when-trailing"\s*\/?>/gi, '')
    // Clean empty paragraphs that just held a trailing br
    .replace(/<p>\s*<\/p>/gi, '')
    .trim();
}

function cleanHtml(html) {
  return stripInlineStyles(unwrapEditorDiv(html));
}

// For heading fields: strip outer <p> wrapper and leftover bare <span> tags
// so the text can safely be set as innerHTML of an <h2>/<h3>
function cleanHeading(html) {
  if (!html) return '';
  let s = cleanHtml(html);
  // Strip single outer <p>...</p>
  s = s.replace(/^<p>([\s\S]*)<\/p>$/i, '$1').trim();
  // Strip bare <span> wrappers (no attributes)
  s = s.replace(/<span>([\s\S]*?)<\/span>/gi, '$1');
  return s.trim();
}

// Extract iframe URL from Rise's embed HTML string
function extractIframeUrl(embedHtml) {
  if (!embedHtml) return null;
  const match = embedHtml.match(/src="([^"]+)"/);
  return match ? match[1] : null;
}

// Resolve a media image object to a local asset path (or null)
function resolveImage(mediaImage) {
  if (!mediaImage) return null;
  // USER-uploaded assets have a crushedKey that matches the bundled filename
  if (mediaImage.useCrushedKey && mediaImage.crushedKey) {
    return `assets/${mediaImage.crushedKey}`;
  }
  // DEFAULT Rise assets (e.g., mountains.jpg) may also have crushedKey
  if (mediaImage.crushedKey) {
    return `assets/${mediaImage.crushedKey}`;
  }
  return null;
}

// ============================================================
// 3. Block parsers — one per family/variant
// ============================================================

function parseTextBlock(block) {
  const item = block.items && block.items[0];
  if (!item) return null;
  const result = { type: 'text' };
  if (item.heading) result.heading = cleanHeading(item.heading);
  if (item.paragraph) result.body = cleanHtml(item.paragraph);
  const bgImg = block.background && block.background.media && block.background.media.image;
  if (bgImg) result.backgroundImage = resolveImage(bgImg);
  return result;
}

function parseQuoteBlock(block) {
  const item = block.items && block.items[0];
  if (!item) return null;
  const result = { type: 'quote' };
  if (item.paragraph) result.text = cleanHtml(item.paragraph);
  if (item.name) result.attribution = cleanHtml(item.name);
  const img = item.avatar && item.avatar.media && item.avatar.media.image;
  if (img) result.image = resolveImage(img);
  return result;
}

function parseImageBlock(block) {
  // image/image — image is at block.media
  const img = block.media && block.media.image;
  if (img && img.crushedKey) {
    return {
      type: 'image',
      src: resolveImage(img),
      alt: img.alt || '',
      width: img.dimensions && img.dimensions.originalWidth,
      height: img.dimensions && img.dimensions.originalHeight
    };
  }
  // image/text overlay, image/text aside — image is at items[0].media
  const item = block.items && block.items[0];
  const itemImg = item && item.media && item.media.image;
  if (itemImg) {
    return {
      type: 'image',
      src: resolveImage(itemImg),
      alt: itemImg.alt || '',
      width: itemImg.dimensions && itemImg.dimensions.originalWidth,
      height: itemImg.dimensions && itemImg.dimensions.originalHeight,
      caption: item.paragraph ? cleanHtml(item.paragraph) : undefined
    };
  }
  return null;
}

function parseAttachmentBlock(block) {
  const items = (block.items || []).map(item => {
    const att = item.media && item.media.attachment;
    if (!att) return null;
    return {
      filename: att.key || att.originalUrl,
      src: `assets/${att.key || att.originalUrl}`,
      mimeType: att.mimeType || '',
      size: att.size || 0
    };
  }).filter(Boolean);
  if (items.length === 0) return null;
  return { type: 'attachment', items };
}

function parseListBlock(block) {
  const items = (block.items || []).map(i => cleanHtml(i.paragraph)).filter(Boolean);
  return { type: 'list', variant: block.variant || 'bulleted', items };
}

function parseDividerBlock() {
  return { type: 'divider' };
}

function parseMultimediaBlock(block) {
  const item = block.items && block.items[0];
  if (!item) return null;
  const embedSrc = item.media && item.media.embed && item.media.embed.src;
  const url = extractIframeUrl(embedSrc);
  return { type: 'airtable', url };
}

function parseTabsBlock(block) {
  const items = (block.items || []).map(item => {
    const tab = { label: item.title || '' };
    if (item.description) tab.content = cleanHtml(item.description);
    const img = item.media && item.media.image;
    if (img) tab.image = resolveImage(img);
    return tab;
  });
  return { type: 'tabs', items };
}

function parseAccordionBlock(block) {
  const items = (block.items || []).map(item => ({
    heading: item.title || '',
    body: item.description ? cleanHtml(item.description) : ''
  }));
  return { type: 'accordion', items };
}

function parseFlashcardBlock(block) {
  const items = (block.items || []).map(item => {
    const card = {};
    if (item.front) {
      card.front = item.front.description ? cleanHtml(item.front.description) : '';
      const fImg = item.front.media && item.front.media.image;
      if (fImg) card.frontImage = resolveImage(fImg);
    }
    if (item.back) {
      card.back = item.back.description ? cleanHtml(item.back.description) : '';
      const bImg = item.back.media && item.back.media.image;
      if (bImg) card.backImage = resolveImage(bImg);
    }
    return card;
  });
  return { type: 'flashcard', items };
}

function parseCarouselBlock(block) {
  const items = (block.items || [])
    .filter(item => !item.isHidden)
    .map(item => {
      const slide = {};
      if (item.title) slide.title = item.title;
      if (item.description) slide.content = cleanHtml(item.description);
      const img = item.media && item.media.image;
      if (img) slide.image = resolveImage(img);
      return slide;
    });
  return { type: 'carousel', items };
}

function parseHotspotBlock(block) {
  const img = block.media && block.media.image;
  const spots = (block.items || []).map(item => ({
    id: item.id,
    x: parseFloat(item.x),
    y: parseFloat(item.y),
    title: item.title || '',
    content: item.description ? cleanHtml(item.description) : '',
    icon: item.icon || ''
  }));
  return {
    type: 'hotspot',
    image: resolveImage(img),
    imageWidth: img && img.dimensions && img.dimensions.originalWidth,
    imageHeight: img && img.dimensions && img.dimensions.originalHeight,
    spots
  };
}

// ============================================================
// 4. Block dispatcher
// ============================================================
function parseBlock(block) {
  const family  = block.family  || block.type;
  const variant = block.variant || '';

  switch (`${family}/${variant}`) {
    // Text variants
    case 'text/heading paragraph':
    case 'text/heading':
    case 'text/paragraph':
    case 'text/subheading paragraph':
    case 'text/subheading':
    case 'impact/note':
    case 'text/':
      return parseTextBlock(block);
    // Table — treat as text (heading + HTML table in paragraph)
    case 'text/table':
      return parseTextBlock(block);
    // Quote variants
    case 'quote/d':
    case 'quote/c':
    case 'quote/':
      return parseQuoteBlock(block);
    // Image variants
    case 'image/':
    case 'image/image':
    case 'image/text overlay':
    case 'image/text aside':
    case 'image/hero':
      return parseImageBlock(block);
    // List variants
    case 'list/bulleted':
    case 'list/numbered':
    case 'list/checkboxes':
    case 'list/':
      return parseListBlock(block);
    // Divider variants
    case 'divider/':
    case 'divider/divider':
    case 'divider/numbered divider':
      return parseDividerBlock();
    // Multimedia
    case 'multimedia/embed':
      return parseMultimediaBlock(block);
    case 'multimedia/attachment':
      return parseAttachmentBlock(block);
    // Interactive components
    case 'interactive/tabs':
      return parseTabsBlock(block);
    case 'interactive/accordion':
      return parseAccordionBlock(block);
    case 'flashcard/flashcard':
      return parseFlashcardBlock(block);
    case 'interactive-fullscreen/process':
      return parseCarouselBlock(block);
    case 'interactive-fullscreen/labeledgraphic':
      return parseHotspotBlock(block);
    default:
      console.warn(`  ⚠ Unknown block type: ${family}/${variant} — skipping`);
      return null;
  }
}

// ============================================================
// 5. Slug generation
// ============================================================
const SLUG_MAP = {
  'How this Hub works':                 'how-this-hub-works',
  'The World of Change':                'world-of-change',
  'Contexts of Change':                 'contexts-of-change',
  'Change Roles':                       'change-roles',
  'The Change Hub Framework (CHF)':     'change-hub-framework',
  'Phase 1: Understanding the Change':  'phase-1',
  'Phase 2: Preparing for Change':      'phase-2',
  'Phase 3: Implementing The Change':   'phase-3',
  'Phase 4: Adapting to the Change':    'phase-4',
  'Phase 5: Solidifying the Change':    'phase-5',
  'Conclusion':                         'conclusion',
  'Sources':                            'sources',
  'Change Hub Toolkit: Documents':      'toolkit-documents',
  'Lexicon':                            'lexicon'
};

// ============================================================
// 6. Main
// ============================================================
function run() {
  console.log('Loading runtime-data.js…');
  const data = loadCourseData();
  const course = data.course;

  // Ensure output dir exists
  fs.mkdirSync(PAGES_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });

  // Write config.json if it doesn't already exist
  if (!fs.existsSync(CONFIG_PATH) || FORCE) {
    const config = {
      org: {
        name: course.title,
        logo: 'assets/logo.png',
        primaryColor: course.theme.colorAccent || '#1c4f52',
        accentColor: course.theme.colorAccent || '#1c4f52',
        fontBody: 'Poppins',
        fontHeading: 'Poppins'
      },
      site: {
        title: course.title,
        subtitle: 'Change Management Learning Platform',
        favicon: 'assets/favicon.ico'
      },
      toolkit: {
        airtableEmbedUrl: '',
        airtableChangeRolesUrl: ''
      },
      framework: {
        name: 'Change Hub Framework',
        abbreviation: 'CHF',
        phases: 5
      }
    };
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8');
    console.log('✓ Wrote content/config.json');
  }

  let written = 0;
  let skipped = 0;

  for (const lesson of course.lessons) {
    if (lesson.type !== 'blocks') continue;

    const slug = SLUG_MAP[lesson.title];
    if (!slug) {
      console.warn(`  ⚠ No slug mapping for lesson: "${lesson.title}" — skipping`);
      continue;
    }

    const outPath = path.join(PAGES_DIR, `${slug}.json`);
    if (fs.existsSync(outPath) && !FORCE) {
      console.log(`  ~ Skipping ${slug}.json (already exists — use --force to overwrite)`);
      skipped++;
      continue;
    }

    console.log(`  Parsing: ${lesson.title} → ${slug}.json`);

    const blocks = [];
    for (const block of lesson.items || []) {
      const parsed = parseBlock(block);
      if (parsed) blocks.push(parsed);
    }

    const pageData = {
      slug,
      title: lesson.title,
      lessonId: lesson.id,
      blocks
    };

    fs.writeFileSync(outPath, JSON.stringify(pageData, null, 2), 'utf8');
    written++;
  }

  console.log(`\nDone. ${written} pages written, ${skipped} skipped.`);
  if (skipped > 0) console.log('Run with --force to overwrite skipped files.');
}

run();
