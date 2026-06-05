# Feature: Tabs Interaction

## Stage
Stage 3 — Interactions

## Pages that use it
- The World of Change
- Change Roles
- The Change Hub Framework (CHF)

## What it is
A tabbed panel where clicking a tab label reveals its associated content. Only one tab is active at a time. Content can include text, images, and nested elements.

## Data format (input)
```json
{
  "type": "tabs",
  "items": [
    { "label": "Tab One", "content": "<p>HTML content here</p>" },
    { "label": "Tab Two", "content": "<p>More content</p>" }
  ]
}
```

## Tasks
- [ ] Build `js/interactions/tabs.js` — `renderTabs(data, container)` function
- [ ] Write CSS for tab bar, active tab, content panel
- [ ] Handle keyboard navigation (arrow keys to move between tabs)
- [ ] Wire up on 1 real page to validate

## Open Questions
- Does the Rise original use animated transitions between tabs, or instant swap? (Check Rise original)
- Can tab content contain other nested interactions (e.g., an accordion inside a tab)? (Probably not in v1 — flag if discovered during content extraction)
- Should the active tab index persist across page navigation, or always reset to tab 1? (Reset to tab 1 — simpler)
