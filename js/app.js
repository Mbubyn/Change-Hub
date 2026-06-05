/**
 * Change Hub — App entry point
 * Combines: nav data, sidebar rendering, and hash-based routing
 */

// ============================================================
// Nav data — matches course.lessons[] array order
// Sections contain their child pages; standalone pages sit at root
// ============================================================
const NAV = [
  {
    type: 'standalone',
    title: 'How this Hub Works',
    slug: 'how-this-hub-works',
    interactions: ['hotspot', 'airtable']
  },
  {
    type: 'section',
    title: 'Part 1: Foundations in Change',
    pages: [
      { title: 'The World of Change',            slug: 'world-of-change',       interactions: ['tabs', 'flipcard', 'accordion', 'hotspot', 'carousel'] },
      { title: 'Contexts of Change',             slug: 'contexts-of-change',    interactions: ['accordion', 'hotspot'] },
      { title: 'Change Roles',                   slug: 'change-roles',          interactions: ['tabs', 'hotspot', 'airtable'] },
      { title: 'The Change Hub Framework (CHF)', slug: 'change-hub-framework',  interactions: ['accordion', 'tabs', 'hotspot', 'carousel'] }
    ]
  },
  {
    type: 'section',
    title: 'Part 2: Learning the Framework',
    pages: [
      { title: 'Phase 1: Understanding the Change', slug: 'phase-1', interactions: ['hotspot', 'accordion'] },
      { title: 'Phase 2: Preparing for Change',     slug: 'phase-2', interactions: ['hotspot', 'accordion'] },
      { title: 'Phase 3: Implementing The Change',  slug: 'phase-3', interactions: ['hotspot', 'accordion'] },
      { title: 'Phase 4: Adapting to the Change',   slug: 'phase-4', interactions: ['hotspot', 'accordion'] },
      { title: 'Phase 5: Solidifying the Change',   slug: 'phase-5', interactions: ['hotspot', 'accordion'] }
    ]
  },
  {
    type: 'section',
    title: 'Part 3: Next Steps',
    pages: [
      { title: 'Conclusion',                      slug: 'conclusion',         interactions: [] },
      { title: 'Sources',                         slug: 'sources',            interactions: [] },
      { title: 'Change Hub Toolkit: Documents',   slug: 'toolkit-documents',  interactions: ['airtable'] },
      { title: 'Lexicon',                         slug: 'lexicon',            interactions: [] }
    ]
  }
];

// ============================================================
// Flat page registry (slug → page info) for routing lookups
// ============================================================
const PAGES = {};
function buildPageRegistry() {
  for (const entry of NAV) {
    if (entry.type === 'standalone') {
      PAGES[entry.slug] = entry;
    } else if (entry.type === 'section') {
      for (const page of entry.pages) {
        PAGES[page.slug] = page;
      }
    }
  }
}

// ============================================================
// Sidebar rendering
// ============================================================
function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  if (!nav) return;

  const fragments = [];

  for (const entry of NAV) {
    if (entry.type === 'standalone') {
      fragments.push(`
        <button class="nav-standalone" data-slug="${entry.slug}" role="menuitem">
          ${escHtml(entry.title)}
        </button>
      `);
    } else if (entry.type === 'section') {
      const items = entry.pages.map(page => `
        <button class="nav-link" data-slug="${page.slug}" role="menuitem">
          ${escHtml(page.title)}
        </button>
      `).join('');

      fragments.push(`
        <div class="nav-section" data-section="${escHtml(entry.title)}">
          <div class="nav-section-header" role="button" tabindex="0" aria-expanded="true">
            <span>${escHtml(entry.title)}</span>
            <svg class="nav-section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <div class="nav-section-items">
            ${items}
          </div>
        </div>
      `);
    }
  }

  nav.innerHTML = fragments.join('');
  bindNavEvents();
}

function bindNavEvents() {
  // Nav link clicks
  document.querySelectorAll('[data-slug]').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.slug));
  });

  // Section collapse/expand
  document.querySelectorAll('.nav-section-header').forEach(header => {
    header.addEventListener('click', () => toggleSection(header.closest('.nav-section')));
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSection(header.closest('.nav-section'));
      }
    });
  });

  // Sidebar toggle button
  const toggleBtn = document.getElementById('sidebarToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
  }

  restoreSectionState();
}

function toggleSection(section) {
  if (!section) return;
  const isCollapsed = section.classList.contains('collapsed');
  const items = section.querySelector('.nav-section-items');
  const header = section.querySelector('.nav-section-header');

  if (isCollapsed) {
    section.classList.remove('collapsed');
    items.style.maxHeight = items.scrollHeight + 'px';
    if (header) header.setAttribute('aria-expanded', 'true');
  } else {
    items.style.maxHeight = items.scrollHeight + 'px';
    requestAnimationFrame(() => {
      items.style.maxHeight = '0';
    });
    section.classList.add('collapsed');
    if (header) header.setAttribute('aria-expanded', 'false');
  }
  saveSectionState();
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const isCollapsed = sidebar.classList.contains('collapsed');
  sidebar.classList.toggle('collapsed');
  const toggleBtn = document.getElementById('sidebarToggle');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', String(isCollapsed));
  setSidebarOpenBtn(!isCollapsed);
  localStorage.setItem('ch-sidebar-open', String(isCollapsed));
}

function setSidebarOpenBtn(sidebarIsCollapsed) {
  const btn = document.getElementById('sidebarOpenBtn');
  if (!btn) return;
  if (sidebarIsCollapsed) {
    btn.classList.add('visible');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    btn.classList.remove('visible');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function saveSectionState() {
  const state = {};
  document.querySelectorAll('.nav-section[data-section]').forEach(section => {
    state[section.dataset.section] = !section.classList.contains('collapsed');
  });
  localStorage.setItem('ch-section-state', JSON.stringify(state));
}

function restoreSectionState() {
  let state = {};
  try { state = JSON.parse(localStorage.getItem('ch-section-state') || '{}'); } catch (_) {}

  document.querySelectorAll('.nav-section[data-section]').forEach(section => {
    const title = section.dataset.section;
    const items = section.querySelector('.nav-section-items');
    // Default: open. Only collapse if explicitly saved as collapsed.
    if (state[title] === false) {
      section.classList.add('collapsed');
      if (items) items.style.maxHeight = '0';
    } else {
      section.classList.remove('collapsed');
      if (items) items.style.maxHeight = 'none';
    }
  });

  // Restore sidebar open state
  const sidebarOpen = localStorage.getItem('ch-sidebar-open');
  const sidebarShouldBeCollapsed = sidebarOpen === 'false';
  if (sidebarShouldBeCollapsed) {
    document.getElementById('sidebar')?.classList.add('collapsed');
  }
  setSidebarOpenBtn(sidebarShouldBeCollapsed);

  // Wire floating open button
  const openBtn = document.getElementById('sidebarOpenBtn');
  if (openBtn) {
    openBtn.addEventListener('click', toggleSidebar);
  }
}

// ============================================================
// Router — hash-based
// ============================================================
const DEFAULT_SLUG = 'how-this-hub-works';

function navigate(slug) {
  window.location.hash = slug;
}

function handleRoute() {
  const slug = window.location.hash.replace('#', '') || DEFAULT_SLUG;
  const page = PAGES[slug];

  updateActiveNav(slug);

  const pane = document.getElementById('contentPane');

  if (!page) {
    if (pane) pane.innerHTML = '<div class="page-placeholder"><h2>Page not found</h2><p>Try navigating using the sidebar.</p></div>';
    return;
  }

  if (pane) pane.innerHTML = '<div class="content-loading">Loading…</div>';

  fetch(`content/pages/${slug}.json`)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(data => {
      if (pane) renderPageContent(data, pane);
      document.getElementById('contentArea')?.scrollTo(0, 0);
    })
    .catch(() => {
      // Fallback if fetch fails (e.g. opened as file://)
      if (pane) pane.innerHTML = `
        <div class="page-header"><h1 class="page-title">${escHtml(page.title)}</h1></div>
        <div class="page-content"><div class="page-placeholder">
          <h2>Run via a local server to load content</h2>
          <p>Open a terminal in the project root and run:<br><code>npx serve .</code> or <code>python -m http.server</code></p>
        </div></div>`;
    });
}

function updateActiveNav(slug) {
  document.querySelectorAll('[data-slug]').forEach(el => {
    el.classList.toggle('active', el.dataset.slug === slug);
  });
}

// ============================================================
// Init
// ============================================================
function init() {
  buildPageRegistry();
  renderSidebar();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
