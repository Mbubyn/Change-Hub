# Feature: Airtable Iframe Embeds

## Stage
Stage 5 — Toolkit

## Where it appears
- "How this Hub Works" page — main toolkit dashboard iframe
- "Change Roles" page — roles-filtered resource view

## What it is
Airtable iframes embedded in the page. The embed URL comes from `content/config.json` so deployers can swap in their own Airtable base without touching HTML.

## Data format (config)
```json
"toolkit": {
  "airtableEmbedUrl": "https://airtable.com/embed/...",
  "airtableChangeRolesUrl": "https://airtable.com/embed/..."
}
```

## Tasks
- [ ] Confirm both Airtable embed URLs from the original Rise course (see help.md)
- [ ] Add URLs to `content/config.json`
- [ ] Render iframes in the appropriate page templates, reading URL from config
- [ ] Test that iframes load without login prompt
- [ ] Add graceful fallback if iframe fails to load (message + link to toolkit CSV download)

## Open Questions
- Are the Airtable bases publicly accessible (no Airtable login required to view)? This is critical — if they require login, the embed is broken for most users. (Needs verification — see help.md)
- Do the embed URLs have expiry or rate-limiting behavior?
- For white-label deployers who don't have Airtable: should the page automatically fall back to the CSV-rendered download list, or show a "configure your Airtable" message? (Auto-fallback to CSV is better UX)
- Can we detect iframe load failure in JS to trigger the fallback? (Yes, via `iframe.onerror` or `postMessage` — but cross-origin iframes are tricky)
