# Feature: Accordion Interaction

## Stage
Stage 3 — Interactions

## Pages that use it
The World of Change, Contexts of Change, The Change Hub Framework (CHF), and all 5 Phase pages (9 pages total — the most-used interaction type).

## What it is
Collapsible sections with a clickable heading that expands/collapses the body content. Can operate in "single open" mode (only one item open at a time) or "multi open" mode.

## Data format (input)
```json
{
  "type": "accordion",
  "items": [
    { "heading": "Section Title", "body": "<p>Content here</p>" },
    { "heading": "Another Section", "body": "<p>More content</p>" }
  ]
}
```

## Tasks
- [ ] Build `js/interactions/accordion.js` — `renderAccordion(data, container)` function
- [ ] CSS for heading, chevron icon, expand/collapse animation (max-height transition)
- [ ] Support both single-open and multi-open modes (config flag)
- [ ] Handle keyboard (Enter/Space to toggle)
- [ ] Wire up on at least one Phase page and one Part 1 page

## Open Questions
- Does the Rise original use single-open or multi-open mode? (Check — this matters for content that references "see above")
- Does the accordion animate open/close, or is it instant? (Rise likely animates — use CSS max-height transition)
- Can accordion body content include rich HTML (images, lists, nested elements)? (Yes — body is HTML string)
- Are accordion items ever pre-expanded (open by default)? (Check Rise original)
