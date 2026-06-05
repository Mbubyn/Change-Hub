# Feature: Content Population — Part 1 Pages

## Stage
Stage 4 — Content Population

## Pages covered
- How this Hub Works
- The World of Change
- Contexts of Change
- Change Roles
- The Change Hub Framework (CHF)

## What this means
Wire each page's content JSON (produced in Stage 2) to the interaction components (built in Stage 3). The page renderer reads the blocks array and calls the appropriate `render*()` function for each block type.

## Interactions per page

| Page | Interactions |
|---|---|
| How this Hub Works | Airtable iframe |
| The World of Change | Tabs, Flip card, Accordion, Carousel |
| Contexts of Change | Accordion |
| Change Roles | Tabs (4×), Airtable iframes (2), Quotes (6) |
| The Change Hub Framework (CHF) | Accordion, Tabs, Carousel |

## Tasks
- [x] Build page renderer function: reads page JSON, iterates blocks, dispatches to correct renderer
- [x] Wire "How this Hub Works" — Airtable iframe embed from config
- [x] Wire "The World of Change" — all 4 interaction types
- [x] Wire "Contexts of Change" — Accordion
- [x] Wire "Change Roles" — 4 tabs groups + 2 Airtable iframes (Airtable + Qualtrics)
- [x] Wire "The Change Hub Framework" — Accordion + Tabs + Carousel
- [ ] Visual check each page against Rise original (needs browser)

## Resolved questions
- Single renderer from JSON — confirmed correct for white-label
- Blocks array handles mixed text + interactions in sequence
- Quote blocks on Change Roles are role-persona introductions (not traditional quotes) — renders correctly with existing quote component

## Notes
- Change Roles Airtable URL: `https://airtable.com/embed/appYREIl6r0cHYr3H/shrM2SYQwhrkgChRX`
- Change Roles Qualtrics survey URL: `https://ircc.qualtrics.com/jfe/form/SV_1FEBRUq67WUP6Rg` (rendered as iframe via airtable block type)
- Both URLs baked into content JSON and also added to `content/config.json`
