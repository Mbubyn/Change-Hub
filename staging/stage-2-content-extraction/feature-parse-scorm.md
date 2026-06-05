# Feature: Parse SCORM Script

## Stage
Stage 2 — Content Extraction

## What it is
A Node.js script (`scripts/parse-scorm.js`) that reads `the-change-hub-raw-XI9Ex8Dq/content/runtime-data.js`, extracts all page content and interaction data, and writes structured JSON files to `content/pages/`. This is run once (or whenever the source course is updated) — deployers never need to run it.

## What the script must produce
For each of the 14 pages, a JSON file like `content/pages/world-of-change.json` containing:
- Page title and intro text
- An ordered list of content blocks, each with a `type` field:
  - `{ type: "text", body: "..." }`
  - `{ type: "tabs", items: [{ label, content }] }`
  - `{ type: "flipcard", items: [{ front, back }] }`
  - `{ type: "accordion", items: [{ heading, body }] }`
  - `{ type: "carousel", items: [{ content }] }`
  - `{ type: "hotspot", image: "...", spots: [{ x, y, label, content }] }`
  - `{ type: "airtable", url: "..." }`

## Tasks
- [ ] Read first 200 lines of `runtime-data.js` to understand its top-level structure
- [ ] Map how Rise stores page content (by lesson ID, by slug, etc.)
- [ ] Write a parser that extracts text blocks per page
- [ ] Extend parser for each interaction type (tabs, accordion, etc.)
- [ ] Write output files to `content/pages/<slug>.json`
- [ ] Validate output — check all 14 pages have content

## Open Questions
- What is the actual structure of `runtime-data.js`? This is the biggest unknown in Stage 2. Rise may use a flat array of lesson objects, a nested tree, or a lookup table keyed by GUID. Need to inspect the file before estimating effort.
- Does Rise store interaction data inline with content, or in separate data structures within the file?
- Are image references in `runtime-data.js` CDN URLs or relative paths? (Expected: CDN URLs that need remapping)
- Should the script be destructive (overwrite existing content files) or safe (only write if file doesn't exist)? (Destructive with a `--force` flag is cleanest)
