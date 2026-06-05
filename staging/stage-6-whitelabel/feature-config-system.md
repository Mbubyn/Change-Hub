# Feature: White-Label Config System

## Stage
Stage 6 — White-Label Kit

## What it is
The complete configuration system that lets a non-technical content owner fork the repo and customize everything — org name, logo, colors, content, toolkit data — by editing `content/config.json` and the content files in `content/pages/`.

## The deployer experience goal
> "Fork the repo, edit `content/config.json`, replace content files, push to GitHub Pages. Done in under 30 minutes."

## What's configurable

| What | Where | Effort for deployer |
|---|---|---|
| Org name, logo, favicon | `content/config.json` | Trivial |
| Brand colors | `content/config.json` | Trivial |
| Site title and subtitle | `content/config.json` | Trivial |
| Framework name and phase count | `content/config.json` | Easy |
| Airtable embed URLs | `content/config.json` | Easy (if they have Airtable) |
| Page content (text, interactions) | `content/pages/*.json` | Moderate — structured JSON |
| Toolkit resources | `toolkit.csv` | Easy (spreadsheet) |
| Lexicon | `lexicon.json` | Easy |
| Sidebar section names | `content/config.json` | Easy |

## Tasks
- [ ] Ensure all hardcoded GoC strings are replaced with config reads
- [ ] Build config loader: reads `config.json` on startup, applies to DOM (title, logo, colors)
- [ ] Generate inline CSS custom properties from config colors/fonts
- [ ] Test a "fork simulation" — change org name and color to verify everything updates
- [ ] Write `DEPLOYING.md` (see `feature-deployer-docs.md`)

## Open Questions
- Should config be loaded via `fetch('content/config.json')` (requires a server or GitHub Pages) or inlined into a JS file (works fully offline as a file:// URL)? This matters for the "works inside a firewall" requirement.
- How do we handle the logo? A file path in config is easy, but the deployer needs to also add their logo file to the `assets/` folder. Document this clearly.
- Should there be a config validation step that warns deployers about missing required fields?
