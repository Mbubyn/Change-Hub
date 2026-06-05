# Feature: Hotspot Map Interaction

## Stage
Stage 3 — Interactions

## Pages that use it
**9 out of 14 pages** — more widespread than originally mapped:
- How this Hub Works
- The World of Change
- Contexts of Change
- Change Roles
- The Change Hub Framework (CHF)
- Phase 1–5 (all 5 phase pages)

## Rise family/variant
`interactive-fullscreen/labeledgraphic`

## What it is
An image with clickable/tappable "hotspot" markers at specific pixel coordinates. Clicking a marker reveals a popup or panel with content about that point. Each phase page likely uses a diagram of the CHF with hotspots pointing to key elements.

## Data format (input)
```json
{
  "type": "hotspot",
  "image": "assets/phase-1-diagram.png",
  "imageAlt": "Phase 1 diagram description",
  "spots": [
    {
      "id": "spot-1",
      "x": 245,
      "y": 180,
      "label": "Stakeholder Analysis",
      "content": "<p>Description of this element</p>"
    }
  ]
}
```

## The white-label challenge
Hotspot coordinates are pixel-based and tied to the specific image dimensions. If a deployer swaps the image, coordinates break. Options for v1:
- Accept this limitation and document it in deployer docs
- Store coordinates as percentages of image width/height (more robust)
- Provide a visual hotspot editor (Stage 6+ roadmap item)

**Decision for v1:** Use percentage-based coordinates so the component is at least responsive.

## Tasks
- [ ] Build `js/interactions/hotspot.js` — `renderHotspot(data, container)` function
- [ ] CSS for image container, hotspot marker (pulsing dot), popup/panel
- [ ] Calculate marker position from percentage-based x/y coordinates
- [ ] Popup behavior: click to open, click elsewhere to close; only one open at a time
- [ ] Handle keyboard (Tab to each hotspot, Enter to open popup)
- [ ] Ensure image is responsive (scales with container, markers scale proportionally)
- [ ] Wire up on Phase 1 page

## Open Questions
- Are hotspot coordinates in the Rise export pixel-based or percentage-based? (This determines how much work the coordinate extraction is)
- Do the 5 phase pages use the same diagram/image with different hotspots, or different images per phase? (Likely different — need to confirm from runtime-data.js)
- Does the popup appear inline (shifts layout) or as an overlay (position absolute)? (Check Rise original)
- Is there a "view all" mode that shows all hotspot content at once? (Some Rise courses have this — check)
- How many hotspots per phase page approximately? (Need to extract from runtime-data.js)
