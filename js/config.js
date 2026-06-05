/**
 * config.js — loads content/config.json and applies branding to the DOM
 *
 * Called once at app init. Falls back to hardcoded defaults if fetch fails
 * (e.g. when opened as a file:// URL without a server).
 */

const CONFIG_DEFAULTS = {
  org: {
    name: 'The Change Hub',
    logo: null,
    primaryColor: '#1c4f52',
    primaryColorDark: '#163d40',
    primaryColorLight: '#e8f0f0',
    fontBody: 'Poppins',
    fontHeading: 'Poppins'
  },
  site: {
    title: 'The Change Hub',
    subtitle: 'Change Management Learning Platform',
    favicon: null
  },
  toolkit: {
    airtableEmbedUrl: '',
    airtableChangeRolesUrl: '',
    qualtricsFormUrl: ''
  },
  framework: {
    name: 'Change Hub Framework',
    abbreviation: 'CHF',
    phases: 5
  }
};

async function loadConfig() {
  try {
    const r = await fetch('content/config.json');
    if (!r.ok) throw new Error(r.status);
    const data = await r.json();
    // Deep merge with defaults so missing keys always have fallback values
    return deepMerge(CONFIG_DEFAULTS, data);
  } catch (_) {
    return CONFIG_DEFAULTS;
  }
}

function deepMerge(defaults, overrides) {
  const result = Object.assign({}, defaults);
  for (const key of Object.keys(overrides || {})) {
    if (overrides[key] !== null && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
      result[key] = deepMerge(defaults[key] || {}, overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

function applyConfig(config) {
  const org  = config.org  || {};
  const site = config.site || {};

  // Page title
  if (site.title) document.title = site.title;

  // Favicon
  if (site.favicon) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = site.favicon;
  }

  // Sidebar org name
  const orgNameEl = document.getElementById('sidebarOrgName');
  if (orgNameEl && org.name) orgNameEl.textContent = org.name;

  // Sidebar logo
  const logoImg = document.getElementById('sidebarLogoImg');
  if (logoImg) {
    if (org.logo) {
      logoImg.src = org.logo;
      logoImg.hidden = false;
    } else {
      logoImg.hidden = true;
    }
  }

  // Brand color CSS custom property overrides — injected as a <style> block
  // so deployers only need to edit config.json, not touch CSS
  const overrides = [];
  if (org.primaryColor)      overrides.push(`--color-accent: ${org.primaryColor}`);
  if (org.primaryColorDark)  overrides.push(`--color-accent-dark: ${org.primaryColorDark}`);
  if (org.primaryColorLight) overrides.push(`--color-accent-light: ${org.primaryColorLight}`);
  if (org.fontBody)          overrides.push(`--font-body: '${org.fontBody}', system-ui, sans-serif`);
  if (org.fontHeading)       overrides.push(`--font-heading: '${org.fontHeading}', system-ui, sans-serif`);

  if (overrides.length) {
    const style = document.createElement('style');
    style.id = 'ch-brand-overrides';
    style.textContent = `:root { ${overrides.join('; ')} }`;
    document.head.appendChild(style);
  }
}
