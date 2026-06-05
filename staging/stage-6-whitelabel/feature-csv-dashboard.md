# Feature: Self-Hosted CSV Dashboard (Roadmap)

## Stage
Stage 6 — White-Label Kit (roadmap item — may slip to post-v1)

## What it is
A vanilla JS table/filter component that replaces the Airtable iframes. Reads `toolkit.csv` directly, renders a sortable + filterable table, with no external SaaS dependency. This is the long-term replacement for Airtable — it makes the toolkit fully self-hosted and offline-capable.

## Why it matters
- Airtable is an external dependency. If Airtable goes down, changes pricing, or blocks the embed, the toolkit breaks.
- White-label deployers may not have Airtable accounts or may be behind firewalls that block external iframes.
- A CSV-driven component is fully self-contained and works offline.

## Design
- Read `toolkit.csv` (or pre-parsed JSON) on page load
- Render as a filterable table or card grid
- Filter controls: Phase dropdown, Role dropdown, Type dropdown, text search
- Sort by: Title, Phase, Type
- Must match the Airtable embed's visual capabilities closely enough that it's a drop-in replacement

## Tasks
- [ ] Decide v1 scope: full filterable table, or phase-grouped list with basic type filter?
- [ ] Build `js/toolkit-dashboard.js` with CSV parsing (PapaParse or hand-rolled)
- [ ] Build filter UI (dropdowns + search input)
- [ ] Style to match overall design system
- [ ] Swap out Airtable iframes for this component on "How this Hub Works" and "Change Roles" pages
- [ ] Update `content/config.json` to flag which mode is active (airtable vs. local)

## Open Questions
- Should this be built in Stage 6 or deferred to a post-v1 release? (Current plan: include in Stage 6 scope if time allows; otherwise document as next milestone)
- Should we use a small CSV parsing library (PapaParse — 28KB, MIT) or hand-roll a parser? (PapaParse is the safe choice; hand-rolled works if CSV is simple/clean)
- Should the dashboard be a full page replacement for the Airtable iframe, or a side-by-side option? (Full replacement — simpler)
- Filter UX: dropdowns or tag chips? (Dropdowns for v1 — simpler; chips are a nice v2 upgrade)
