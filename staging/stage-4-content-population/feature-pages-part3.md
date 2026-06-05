# Feature: Content Population — Part 3 Pages

## Stage
Stage 4 — Content Population

## Pages covered
- Conclusion
- Sources
- Change Hub Toolkit: Documents (main toolkit page — Stage 5 handles the download list)
- Lexicon

## Notes
- **Conclusion** and **Sources** are likely text-only pages — no interaction components needed
- **Toolkit: Documents** page structure is built here; the 96-item download list is Stage 5's `feature-toolkit-downloads.md`
- **Lexicon** renders from `lexicon.json` — alphabetical list of terms with definitions

## Tasks
- [ ] Wire Conclusion page (text content from JSON)
- [ ] Wire Sources page (text/link list from JSON)
- [ ] Wire Lexicon page — render alphabetical glossary from `lexicon.json`
- [ ] Wire Toolkit page shell (intro text, Airtable iframe placeholder, download section placeholder)

## Open Questions
- Does the Lexicon have category groupings, or is it a flat A–Z list? (Check Rise original)
- Does the Sources page use footnote-style citations or a bibliography format?
- Is there a "Back to top" button on long pages like the Lexicon? (Good UX addition — add if Rise has it)
- Should the Lexicon entries be linkable (anchor tags per term) so other pages can deep-link to a definition? (Nice future feature; document as open question for Stage 6)
