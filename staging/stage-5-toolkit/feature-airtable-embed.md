# Feature: Airtable Iframe Embeds

## Stage
Stage 5 — Toolkit

## Where it appears
- "How this Hub Works" — main toolkit dashboard (`?layout=card`)
- "Change Roles" — role-filtered Airtable view + Qualtrics survey form

## URLs (extracted from runtime-data.js, 2026-06-05)
| Page | URL |
|---|---|
| How this Hub Works | `https://airtable.com/embed/appYREIl6r0cHYr3H/shrM2SYQwhrkgChRX?layout=card` |
| Change Roles (Airtable) | `https://airtable.com/embed/appYREIl6r0cHYr3H/shrM2SYQwhrkgChRX` |
| Change Roles (Qualtrics) | `https://ircc.qualtrics.com/jfe/form/SV_1FEBRUq67WUP6Rg` |

All three URLs are baked into the block JSON and also stored in `content/config.json`.

## Tasks
- [x] Extract embed URLs from SCORM source
- [x] Add URLs to `content/config.json`
- [x] Iframes render via `renderAirtableBlock()` in renderer.js
- [ ] **Verify in browser**: do iframes load without a login prompt?
- [ ] Add graceful fallback if Airtable iframe is blocked/empty

## Fallback plan (if Airtable requires login)
If the Airtable iframes prompt for login, we have two options:
- A) Replace with a link to open Airtable in a new tab (quick fix)
- B) Build the self-hosted CSV dashboard (Stage 6 roadmap)

## Open Questions
- Are Airtable bases publicly accessible without login?
- Do embed URLs expire or rate-limit?
- For white-label deployers without Airtable: should iframe be hidden if `airtableEmbedUrl` is empty in config? (Yes — renderer should return null if no URL)
