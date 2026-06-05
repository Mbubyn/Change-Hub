# Feature: Toolkit Document Download Page

## Stage
Stage 5 — Toolkit

## What it is
The "Change Hub Toolkit: Documents" page — a list of 96 downloadable resources rendered from `toolkit.csv`. Each item shows the document name, description, type badge, and a download/link button.

## Data source
`toolkit.csv` — populated in Stage 2 from the Rise course or Airtable export.

## Design considerations
96 items is a lot for a flat list. Even without full search, basic grouping or a type filter would dramatically improve usability. Options:
- **Flat list** — simplest, v1 acceptable if Airtable iframe does the filtering
- **Phase grouping** — group by CHF phase (Phase 1–5 + General), with headers
- **Client-side filter** — simple JS dropdown filter by phase and/or role, no server needed

**Recommendation for v1:** Phase-grouped list (matches the course structure, no JS complexity). Full filter is Stage 6 roadmap item for the self-hosted dashboard.

## Data format (toolkit.csv columns)
```
id, title, description, url, type, phase, role, tags
```

## Tasks
- [ ] Confirm `toolkit.csv` is populated with all 96 resources
- [ ] Build JS function that reads CSV (or pre-parsed JSON) and renders the download list
- [ ] Group items by phase
- [ ] Style each item: title, description, type badge (PDF/DOCX/etc.), download button
- [ ] Ensure all download URLs are working
- [ ] Visual check against Rise original toolkit page

## Open Questions
- Are the 96 documents hosted externally (GoC SharePoint, etc.) or do we bundle them in the repo? (See help.md — decision needed)
- Does the original Rise toolkit page have any filtering/search UI beyond the Airtable iframe? (If not, flat list or phase grouping matches the original)
- Should the download button open in a new tab or trigger a file download? (New tab for external links, download attribute for local files)
- For white-label deployers: should `toolkit.csv` include a `featured` flag so deployers can highlight their top resources at the top of the list?
