# Feature: Content Config Schema

## Stage
Stage 2 — Content Extraction

## What it is
The formal definition of `content/config.json` — the "one file" that white-label deployers edit to make the site their own. Also documents the page content JSON format and `toolkit.csv` column spec.

## `content/config.json` schema

```json
{
  "org": {
    "name": "Government of Canada",
    "logo": "assets/logo.png",
    "primaryColor": "#1A5276",
    "accentColor": "#2E86C1",
    "fontBody": "Inter",
    "fontHeading": "Poppins"
  },
  "site": {
    "title": "The Change Hub",
    "subtitle": "Change Management Learning Platform",
    "favicon": "assets/favicon.ico"
  },
  "toolkit": {
    "airtableEmbedUrl": "https://airtable.com/embed/...",
    "airtableChangeRolesUrl": "https://airtable.com/embed/..."
  },
  "framework": {
    "name": "Change Hub Framework",
    "abbreviation": "CHF",
    "phases": 5
  }
}
```

## `toolkit.csv` column spec

| Column | Description | Required |
|---|---|---|
| `id` | Unique identifier | Yes |
| `title` | Document name | Yes |
| `description` | Short description | Yes |
| `url` | Download/link URL | Yes |
| `type` | File type (PDF, DOCX, XLSX…) | Yes |
| `phase` | Phase number(s) (comma-separated) | No |
| `role` | Target role(s) (comma-separated) | No |
| `tags` | Additional filter tags | No |

## Tasks
- [ ] Draft `content/config.json` with GoC defaults
- [ ] Write schema documentation in `content/README.md` (deployer-facing)
- [ ] Define and document page content JSON format (blocks array spec)
- [ ] Create `toolkit.csv` with GoC resource data (or placeholder structure)
- [ ] Create `lexicon.json` with GoC glossary entries

## Open Questions
- Should colors in config be hex codes (easy for non-technical users) or CSS custom property names (more flexible)? (Hex codes — deployers can understand them without CSS knowledge)
- Should `content/config.json` also control sidebar section names (e.g., "Part 1: Foundations"), or are those hardcoded? (Config — a deployer might rename sections)
- How do we handle the case where a deployer doesn't have an Airtable? Should the toolkit page fall back gracefully to a static list from `toolkit.csv`? (Yes — the CSV is the fallback)
- Is `lexicon.json` an array of `{ term, definition }` or does it need richer structure (categories, related terms)?
