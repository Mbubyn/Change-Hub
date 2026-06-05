# Stage 2 — Content Extraction

## Goal
Build the data layer. Parse the SCORM `runtime-data.js` and produce the content config files that every page and interaction will read from. After this stage, all GoC content exists in editable JSON/CSV files — not locked inside Rise.

## Features in this stage
- `feature-parse-scorm.md` — Node.js script that reads `runtime-data.js` and outputs structured JSON per page
- `feature-image-map.md` — CDN-to-local image lookup table, audit of bundled vs. missing assets
- `feature-content-schema.md` — define and document the content config format (the "one file" contract)

## Definition of done
- [ ] `scripts/parse-scorm.js` runs without errors and produces output files in `content/pages/`
- [ ] All 14 pages have a populated content JSON file with accurate text
- [ ] Every image referenced in content has a local path (or a flagged gap in `help.md`)
- [ ] `content/config.json` schema is documented and contains GoC defaults
- [ ] `toolkit.csv` exists with all 96+ resources
- [ ] `lexicon.json` exists with all glossary entries
