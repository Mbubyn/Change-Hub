/**
 * renderer.js — renders page content blocks into the DOM
 *
 * Each renderXxx(block) function returns an HTMLElement.
 * renderPageContent(pageData, container) is the main entry point.
 */

// ============================================================
// Main dispatcher
// ============================================================
function renderPageContent(pageData, container) {
  container.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'page-header';
  header.innerHTML = `<h1 class="page-title">${escHtml(pageData.title)}</h1>`;
  container.appendChild(header);

  const content = document.createElement('div');
  content.className = 'page-content';
  container.appendChild(content);

  for (const block of pageData.blocks || []) {
    const el = renderBlock(block);
    if (el) content.appendChild(el);
  }
}

function renderBlock(block) {
  switch (block.type) {
    case 'text':       return renderTextBlock(block);
    case 'quote':      return renderQuoteBlock(block);
    case 'image':      return renderImageBlock(block);
    case 'list':       return renderListBlock(block);
    case 'divider':    return renderDividerBlock();
    case 'attachment': return renderAttachmentBlock(block);
    case 'airtable':   return renderAirtableBlock(block);
    case 'tabs':       return renderTabsBlock(block);
    case 'accordion':  return renderAccordionBlock(block);
    case 'flashcard':  return renderFlashcardBlock(block);
    case 'carousel':   return renderCarouselBlock(block);
    case 'hotspot':    return renderHotspotBlock(block);
    default:           return null;
  }
}

// ============================================================
// Text
// ============================================================
function renderTextBlock(block) {
  const el = document.createElement('div');
  el.className = 'block-text';
  if (block.backgroundImage) {
    el.style.backgroundImage = `url(${block.backgroundImage})`;
    el.classList.add('block-text--has-bg');
  }
  if (block.heading) {
    const h = document.createElement('h2');
    h.className = 'block-heading';
    h.innerHTML = block.heading;
    el.appendChild(h);
  }
  if (block.body) {
    const p = document.createElement('div');
    p.className = 'block-body';
    p.innerHTML = block.body;
    el.appendChild(p);
  }
  return el.children.length ? el : null;
}

// ============================================================
// Quote
// ============================================================
function renderQuoteBlock(block) {
  const el = document.createElement('blockquote');
  el.className = 'block-quote';
  if (block.image) {
    const img = document.createElement('img');
    img.src = block.image;
    img.className = 'block-quote__avatar';
    img.alt = '';
    el.appendChild(img);
  }
  if (block.text) {
    const q = document.createElement('div');
    q.className = 'block-quote__text';
    q.innerHTML = block.text;
    el.appendChild(q);
  }
  if (block.attribution) {
    const cite = document.createElement('cite');
    cite.className = 'block-quote__attribution';
    cite.innerHTML = block.attribution;
    el.appendChild(cite);
  }
  return el;
}

// ============================================================
// Image
// ============================================================
function renderImageBlock(block) {
  if (!block.src) return null;
  const wrapper = document.createElement('figure');
  wrapper.className = 'block-image';
  const img = document.createElement('img');
  img.src = block.src;
  img.alt = block.alt || '';
  if (block.width) img.width = block.width;
  if (block.height) img.height = block.height;
  img.loading = 'lazy';
  wrapper.appendChild(img);
  if (block.caption) {
    const cap = document.createElement('figcaption');
    cap.innerHTML = block.caption;
    wrapper.appendChild(cap);
  }
  return wrapper;
}

// ============================================================
// List
// ============================================================
function renderListBlock(block) {
  const tag = block.variant === 'numbered' ? 'ol' : 'ul';
  const el = document.createElement(tag);
  el.className = `block-list block-list--${block.variant || 'bulleted'}`;
  for (const item of block.items || []) {
    const li = document.createElement('li');
    li.innerHTML = item;
    el.appendChild(li);
  }
  return el;
}

// ============================================================
// Divider
// ============================================================
function renderDividerBlock() {
  const el = document.createElement('hr');
  el.className = 'block-divider';
  return el;
}

// ============================================================
// Attachment (download button)
// ============================================================
function renderAttachmentBlock(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'block-attachment';
  for (const item of block.items || []) {
    const ext = item.filename.split('.').pop().toUpperCase();
    const a = document.createElement('a');
    a.href = item.src;
    a.download = item.filename;
    a.className = 'attachment-btn';
    a.innerHTML = `
      <span class="attachment-btn__icon">${escHtml(ext)}</span>
      <span class="attachment-btn__name">${escHtml(item.filename)}</span>
      <svg class="attachment-btn__dl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    `;
    wrapper.appendChild(a);
  }
  return wrapper;
}

// ============================================================
// Airtable iframe
// ============================================================
function renderAirtableBlock(block) {
  if (!block.url) return null;
  const wrapper = document.createElement('div');
  wrapper.className = 'block-airtable';
  const iframe = document.createElement('iframe');
  iframe.src = block.url;
  iframe.frameBorder = '0';
  iframe.width = '100%';
  iframe.height = '533';
  iframe.setAttribute('allowfullscreen', '');
  wrapper.appendChild(iframe);
  return wrapper;
}

// ============================================================
// Tabs
// ============================================================
function renderTabsBlock(block) {
  const items = block.items || [];
  if (!items.length) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'block-tabs';

  const tabBar = document.createElement('div');
  tabBar.className = 'tabs-bar';
  tabBar.setAttribute('role', 'tablist');

  const panels = document.createElement('div');
  panels.className = 'tabs-panels';

  items.forEach((item, i) => {
    const tabId  = `tab-${Math.random().toString(36).slice(2)}-${i}`;
    const panelId = `panel-${tabId}`;

    const btn = document.createElement('button');
    btn.className = 'tabs-tab' + (i === 0 ? ' active' : '');
    btn.textContent = item.label;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-controls', panelId);
    btn.id = tabId;
    btn.addEventListener('click', () => activateTab(wrapper, btn, panel));
    btn.addEventListener('keydown', e => handleTabKeydown(e, tabBar));
    tabBar.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'tabs-panel' + (i === 0 ? ' active' : '');
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    panel.id = panelId;
    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.className = 'tabs-panel__image';
      img.alt = '';
      panel.appendChild(img);
    }
    if (item.content) {
      const body = document.createElement('div');
      body.className = 'tabs-panel__body';
      body.innerHTML = item.content;
      panel.appendChild(body);
    }
    panels.appendChild(panel);
  });

  wrapper.appendChild(tabBar);
  wrapper.appendChild(panels);
  return wrapper;
}

function activateTab(wrapper, clickedBtn, clickedPanel) {
  wrapper.querySelectorAll('.tabs-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  wrapper.querySelectorAll('.tabs-panel').forEach(p => p.classList.remove('active'));
  clickedBtn.classList.add('active');
  clickedBtn.setAttribute('aria-selected', 'true');
  clickedPanel.classList.add('active');
}

function handleTabKeydown(e, tabBar) {
  const tabs = [...tabBar.querySelectorAll('.tabs-tab')];
  const idx  = tabs.indexOf(document.activeElement);
  if (e.key === 'ArrowRight') { e.preventDefault(); tabs[(idx + 1) % tabs.length].focus(); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); tabs[(idx - 1 + tabs.length) % tabs.length].focus(); }
}

// ============================================================
// Accordion
// ============================================================
function renderAccordionBlock(block) {
  const items = block.items || [];
  if (!items.length) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'block-accordion';

  items.forEach((item, i) => {
    const entry = document.createElement('div');
    entry.className = 'accordion-item';

    const trigger = document.createElement('button');
    trigger.className = 'accordion-trigger';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `
      <span class="accordion-trigger__label">${escHtml(item.heading)}</span>
      <svg class="accordion-trigger__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    `;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = item.body || '';
    body.style.maxHeight = '0';
    body.style.overflow = 'hidden';

    trigger.addEventListener('click', () => toggleAccordionItem(trigger, body));
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAccordionItem(trigger, body); }
    });

    entry.appendChild(trigger);
    entry.appendChild(body);
    wrapper.appendChild(entry);
  });

  return wrapper;
}

function toggleAccordionItem(trigger, body) {
  const isOpen = trigger.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    body.style.maxHeight = '0';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.closest('.accordion-item').classList.remove('open');
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    trigger.setAttribute('aria-expanded', 'true');
    trigger.closest('.accordion-item').classList.add('open');
  }
}

// ============================================================
// Flashcard
// ============================================================
function renderFlashcardBlock(block) {
  const items = block.items || [];
  if (!items.length) return null;

  const grid = document.createElement('div');
  grid.className = 'block-flashcards';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Flip card');

    const inner = document.createElement('div');
    inner.className = 'flashcard__inner';

    const front = document.createElement('div');
    front.className = 'flashcard__face flashcard__face--front';
    if (item.frontImage) {
      front.style.backgroundImage = `url(${item.frontImage})`;
    }
    if (item.front) {
      const t = document.createElement('div');
      t.className = 'flashcard__text';
      t.innerHTML = item.front;
      front.appendChild(t);
    }

    const back = document.createElement('div');
    back.className = 'flashcard__face flashcard__face--back';
    if (item.backImage) {
      back.style.backgroundImage = `url(${item.backImage})`;
    }
    if (item.back) {
      const t = document.createElement('div');
      t.className = 'flashcard__text';
      t.innerHTML = item.back;
      back.appendChild(t);
    }

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener('click', () => card.classList.toggle('flipped'));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); }
    });

    grid.appendChild(card);
  });

  return grid;
}

// ============================================================
// Carousel (process)
// ============================================================
function renderCarouselBlock(block) {
  const items = block.items || [];
  if (!items.length) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'block-carousel';

  const track = document.createElement('div');
  track.className = 'carousel-track';

  items.forEach((item, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false');

    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.className = 'carousel-slide__image';
      img.alt = '';
      slide.appendChild(img);
    }
    if (item.title) {
      const h = document.createElement('h3');
      h.className = 'carousel-slide__title';
      h.textContent = item.title;
      slide.appendChild(h);
    }
    if (item.content) {
      const body = document.createElement('div');
      body.className = 'carousel-slide__body';
      body.innerHTML = item.content;
      slide.appendChild(body);
    }
    track.appendChild(slide);
  });

  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  controls.innerHTML = `
    <button class="carousel-btn carousel-btn--prev" aria-label="Previous slide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <div class="carousel-dots"></div>
    <button class="carousel-btn carousel-btn--next" aria-label="Next slide">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  `;

  const dots = controls.querySelector('.carousel-dots');
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(wrapper, i));
    dots.appendChild(dot);
  });

  controls.querySelector('.carousel-btn--prev').addEventListener('click', () => {
    const cur = getCurrentSlide(wrapper);
    goToSlide(wrapper, (cur - 1 + items.length) % items.length);
  });
  controls.querySelector('.carousel-btn--next').addEventListener('click', () => {
    const cur = getCurrentSlide(wrapper);
    goToSlide(wrapper, (cur + 1) % items.length);
  });

  wrapper.appendChild(track);
  wrapper.appendChild(controls);

  const counter = document.createElement('div');
  counter.className = 'carousel-counter';
  counter.textContent = `1 / ${items.length}`;
  wrapper.appendChild(counter);

  return wrapper;
}

function getCurrentSlide(wrapper) {
  const slides = wrapper.querySelectorAll('.carousel-slide');
  return [...slides].findIndex(s => s.classList.contains('active'));
}

function goToSlide(wrapper, idx) {
  const slides = wrapper.querySelectorAll('.carousel-slide');
  const dots   = wrapper.querySelectorAll('.carousel-dot');
  const counter = wrapper.querySelector('.carousel-counter');
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
    s.setAttribute('aria-hidden', i !== idx ? 'true' : 'false');
  });
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;
}

// ============================================================
// Hotspot map
// ============================================================
function renderHotspotBlock(block) {
  if (!block.image) return null;

  const wrapper = document.createElement('div');
  wrapper.className = 'block-hotspot';

  const imgWrap = document.createElement('div');
  imgWrap.className = 'hotspot-image-wrap';

  const img = document.createElement('img');
  img.src = block.image;
  img.className = 'hotspot-image';
  img.alt = '';
  imgWrap.appendChild(img);

  (block.spots || []).forEach(spot => {
    const pin = document.createElement('button');
    pin.className = 'hotspot-pin';
    pin.style.left = `${spot.x}%`;
    pin.style.top  = `${spot.y}%`;
    pin.setAttribute('aria-label', `Hotspot: ${spot.title}`);
    pin.textContent = spot.icon || '+';

    const popup = document.createElement('div');
    popup.className = 'hotspot-popup';
    popup.setAttribute('role', 'tooltip');
    popup.innerHTML = `
      <div class="hotspot-popup__header">
        <strong>${escHtml(spot.title)}</strong>
        <button class="hotspot-popup__close" aria-label="Close">×</button>
      </div>
      <div class="hotspot-popup__body">${spot.content || ''}</div>
    `;

    pin.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = pin.classList.contains('active');
      // Close all others
      wrapper.querySelectorAll('.hotspot-pin.active').forEach(p => {
        p.classList.remove('active');
        p.nextElementSibling.hidden = true;
      });
      if (!isOpen) {
        pin.classList.add('active');
        popup.hidden = false;
        positionPopup(popup, pin, imgWrap);
      }
    });

    popup.querySelector('.hotspot-popup__close').addEventListener('click', e => {
      e.stopPropagation();
      pin.classList.remove('active');
      popup.hidden = true;
    });

    popup.hidden = true;
    imgWrap.appendChild(pin);
    imgWrap.appendChild(popup);
  });

  // Close popups when clicking outside
  document.addEventListener('click', () => {
    wrapper.querySelectorAll('.hotspot-pin.active').forEach(p => {
      p.classList.remove('active');
      p.nextElementSibling.hidden = true;
    });
  });

  wrapper.appendChild(imgWrap);
  return wrapper;
}

function positionPopup(popup, pin, container) {
  // Show briefly to measure, then position
  popup.style.visibility = 'hidden';
  popup.hidden = false;
  const pinRect = pin.getBoundingClientRect();
  const wrapRect = container.getBoundingClientRect();
  const spaceRight = wrapRect.right - pinRect.right;
  const spaceLeft  = pinRect.left - wrapRect.left;
  popup.classList.toggle('popup--left', spaceRight < 240 && spaceLeft > spaceRight);
  popup.style.visibility = '';
}

// ============================================================
// Utility (shared with app.js via global scope)
// ============================================================
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
