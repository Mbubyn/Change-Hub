# Feature: Content Population — Part 3 Pages

## Stage
Stage 4 — Content Population

## Pages covered
- Conclusion
- Sources
- Change Hub Toolkit: Documents (main toolkit page)
- Lexicon

## Notes
- **Conclusion** — 3 blocks: 2 text + 1 list. Renders as text-only page. ✓
- **Sources** — 2 text blocks with attribution/license text. ✓
- **Toolkit: Documents** — 145 blocks: 49 text (category headings) + 96 attachment blocks (one per document). All 96 files confirmed present in `assets/`. ✓
- **Lexicon** — 1 text block. The entire 30-term glossary is stored as a `<ul>` inside a single Rise `text/paragraph` block. Renders as a bulleted list with bold terms. ✓

## Tasks
- [x] Wire Conclusion page
- [x] Wire Sources page
- [x] Wire Toolkit page — 96 attachment download buttons grouped by category headings
- [x] Wire Lexicon page — 30 terms rendered as styled list
- [ ] Visual check in browser

## Resolved questions
- Lexicon format: flat `<ul>` with 30 terms, each `<li>` has `<strong>Term: </strong>definition`
- Sources: 2 text blocks (origin story + licensing/gifting statement)
- No "Back to top" button on lexicon in Rise original — add in future UX pass if needed
- Lexicon is NOT a separate JSON format — it's inline HTML in a text block body

## Open
- Should Toolkit headings act as section dividers between groups of download buttons? Currently they render as `.block-text` headings — may need a lighter visual treatment (e.g., smaller, muted, uppercase)
