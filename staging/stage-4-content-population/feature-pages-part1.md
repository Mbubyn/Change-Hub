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
| Change Roles | Tabs, Airtable iframe |
| The Change Hub Framework (CHF) | Accordion, Tabs, Carousel |

## Tasks
- [ ] Build page renderer function: reads page JSON, iterates blocks, dispatches to correct renderer
- [ ] Wire "How this Hub Works" — Airtable iframe embed from config
- [ ] Wire "The World of Change" — all 4 interaction types
- [ ] Wire "Contexts of Change" — Accordion
- [ ] Wire "Change Roles" — Tabs + Airtable iframe
- [ ] Wire "The Change Hub Framework" — Accordion + Tabs + Carousel
- [ ] Visual check each page against Rise original

## Open Questions
- Should the page renderer be a single `renderPage(slug)` function, or should each page have a hand-authored HTML fragment? (Single renderer from JSON — required for white-label)
- How do we handle pages with mixed text blocks and interactions in sequence? (The blocks array handles this — text blocks render as `<p>`, interaction blocks call the renderer)
- Are there any pages in Part 1 with instructional intro text above the interactions that needs special styling (e.g., a hero section)? (Check Rise original)
