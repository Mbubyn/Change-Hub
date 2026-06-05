# Feature: Content Population — Part 2 Phase Pages

## Stage
Stage 4 — Content Population

## Pages covered
- Phase 1: Understanding the Change
- Phase 2: Preparing for Change
- Phase 3: Implementing the Change
- Phase 4: Adapting to the Change
- Phase 5: Solidifying the Change

## Interactions per page
All 5 phase pages share the same interaction pattern: **Hotspot map + Accordion**. This makes them the most structurally consistent section and a good test of the component system.

## Tasks
- [x] Wire Phase 1 (reference implementation — hotspot + accordion)
- [x] Wire Phases 2–5 (same pattern, confirmed)
- [x] Verify hotspot images resolve correctly
- [x] Confirm accordion content is complete for each phase
- [ ] Visual check in browser

## Resolved questions
- Each phase uses a DIFFERENT image (`role 2_1@4x-8.png`, `role 2_1@4x-8-1.png`, etc.) — not the same base diagram
- All 5 phase images have exactly 4 hotspot spots with the same initial coordinates (same base positions, different image context)
- All phase images are local in `assets/` — no CDN dependency
- Phase navigation: sidebar only (no prev/next at bottom of pages)
- Phases are reference material — users jump in at any point, not sequential

## Notes
- Phase hotspot images: `assets/role 2_1@4x-8.png` through `assets/role 2_1@4x-8-4.png`
- All 4 spots per phase have percentage-based coordinates — responsive without any conversion
- Each phase also has text blocks, an image block, and a list block alongside the main hotspot + accordion
