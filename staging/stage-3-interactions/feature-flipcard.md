# Feature: Flip Card Interaction

## Stage
Stage 3 — Interactions

## Pages that use it
- The World of Change

## What it is
Cards that flip on click (or tap) to reveal content on the back. Front shows a label/image; back shows fuller explanation. May appear in a grid of multiple cards.

## Data format (input)
```json
{
  "type": "flipcard",
  "items": [
    { "front": "Card label or image", "back": "<p>Explanation text</p>" },
    { "front": "Another card", "back": "<p>More explanation</p>" }
  ]
}
```

## Tasks
- [ ] Build `js/interactions/flipcard.js` — `renderFlipCards(data, container)` function
- [ ] CSS 3D flip animation (transform: rotateY)
- [ ] Handle touch events (tap to flip on mobile)
- [ ] Handle keyboard (Enter/Space to flip when focused)
- [ ] Wire up on World of Change page

## Open Questions
- How many flip cards appear on the World of Change page? (Need to extract from runtime-data.js)
- Are flip cards arranged in a grid (multiple columns) or a single row? (Check Rise original)
- Does the back of the card have a "click to flip back" affordance, or does clicking anywhere on the back flip it back? (Clicking anywhere = simpler, consistent with Rise)
- Is there a "reveal all" button, or must each card be flipped individually? (Check Rise original)
