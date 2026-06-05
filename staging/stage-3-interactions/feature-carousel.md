# Feature: Carousel Interaction

## Stage
Stage 3 — Interactions

## Pages that use it
- The World of Change
- The Change Hub Framework (CHF)

## What it is
A slideshow-style component where content is presented one slide at a time with previous/next navigation. May have dot indicators. Content per slide can be text, image, or mixed.

## Data format (input)
```json
{
  "type": "carousel",
  "items": [
    { "content": "<p>Slide 1 content</p>", "image": "assets/slide1.png" },
    { "content": "<p>Slide 2 content</p>", "image": null }
  ]
}
```

## Tasks
- [ ] Build `js/interactions/carousel.js` — `renderCarousel(data, container)` function
- [ ] CSS for slide container, prev/next buttons, dot indicators
- [ ] Transition animation between slides (fade or slide)
- [ ] Handle keyboard (arrow keys)
- [ ] Wire up on one real page

## Open Questions
- Does the Rise original carousel auto-advance, or is it manual-only? (Almost certainly manual — match Rise)
- Are there dot indicators below the slide? (Check Rise original)
- Does each slide have a fixed height, or does height adjust to content? (Fixed height avoids layout jumps; check Rise)
- In the CHF carousel specifically: are the slides showing the 5 phases in sequence? (Likely — this is a common Rise pattern for framework overviews)
