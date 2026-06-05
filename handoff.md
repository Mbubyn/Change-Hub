# Handoff — Change Hub
_Last updated: 2026-06-05 · Current stage: Stage 6 complete — project at v1.0_

## 🎯 Goals
All 6 stages complete. The site is a fully functional, white-label-ready static rebuild of the Rise course. Next: GitHub setup and first real deployment.

## 📍 Current State
**The site is complete and working at `http://localhost:3000`.**

- 14 pages, all content, all interactions, all images
- Config-driven branding: org name, logo, colors all driven by `content/config.json`
- Airtable + Qualtrics iframes verified working
- 96 toolkit documents as download buttons
- `DEPLOYING.md` written for non-technical forkers
- No hardcoded GoC strings in HTML or JS

**GitHub remote is NOT yet set up** — see `help.md` for setup steps.

## 📂 Key files
- `index.html` — app shell
- `css/main.css` — design system + all component styles
- `js/config.js` — loads config.json, applies branding to DOM
- `js/app.js` — router + sidebar nav
- `js/renderer.js` — all block renderers
- `scripts/parse-scorm.js` — SCORM decoder (dev-time only)
- `content/config.json` — the one file deployers edit
- `content/pages/*.json` — 14 page content files
- `DEPLOYING.md` — step-by-step forker guide

## ✅ Complete — all stages

| Stage | What was built |
|---|---|
| 1 — Foundation | App shell, sidebar nav, hash routing, 14 placeholder pages |
| 2 — SCORM parse | `parse-scorm.js` decodes Rise export → 14 page JSONs + config |
| 3 — Interactions | `renderer.js` with all 8 block types; full component CSS |
| 4 — Content | Verified all 163 assets, fixed heading HTML, table CSS, image paths |
| 5 — Toolkit | Verified Airtable/Qualtrics iframes; styled toolkit category labels |
| 6 — White-label | `config.js` branding loader; `DEPLOYING.md` deployer guide |

## ❌ Known issues / deferred
- Sidebar nav is hardcoded in `app.js` (NAV array). For a true white-label, section/page titles should come from `content/config.json`. Deferred to post-v1.
- No `toolkit.csv` yet — toolkit data lives in JSON. CSV export would help deployers edit their resource list. Deferred.
- Self-hosted CSV dashboard (replacement for Airtable) — roadmap item, deferred.
- Sidebar nav is hardcoded in `app.js` (NAV array). For a true white-label, section/page titles should come from `content/config.json`. Deferred to post-v1.

## ➡️ Next Up — pre-release checklist

1. **GitHub setup** (see `help.md`): install `gh`, `gh auth login`, `gh repo create`
2. **Test a fork simulation**: change `org.name` and `primaryColor` in `config.json`, verify the whole site rebrands
4. **First commit + push to GitHub**
5. **Enable GitHub Pages** and verify the live URL works

## 🔗 Pointer
→ All 6 stages complete. Next: pre-release tasks in `help.md`.
