# Deploying Your Own Change Hub

This guide is for content owners who want to fork the Change Hub and run it under their own branding — no coding required.

**What you're getting:** A complete, self-hosted web version of a change management learning course. It runs as a static site (plain HTML/CSS/JS) that works on GitHub Pages, any web server, or even inside a firewall.

**Time required:** 15–30 minutes for a basic branded deployment.

---

## Prerequisites

- A free GitHub account (https://github.com)
- A text editor (Notepad, TextEdit, VS Code, or any editor you already use)
- Optional: your organization's logo as a PNG or SVG file

---

## Step 1 — Fork the repository

1. Open the Change Hub repository on GitHub
2. Click the **Fork** button (top-right corner)
3. Choose your GitHub account as the destination
4. Click **Create fork**

You now have your own copy at `https://github.com/YOUR-USERNAME/change-hub`

---

## Step 2 — Enable GitHub Pages

1. In your forked repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Set branch to `main`, folder to `/ (root)`
4. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/change-hub/`

> It may take 1–2 minutes for GitHub Pages to build the first time.

---

## Step 3 — Customize branding

Open `content/config.json` in your repo. This is the one file you edit to rebrand the site.

```json
{
  "org": {
    "name": "Your Organization Name",
    "logo": "assets/your-logo.png",
    "primaryColor": "#1c4f52",
    "primaryColorDark": "#163d40",
    "primaryColorLight": "#e8f0f0",
    "fontBody": "Poppins",
    "fontHeading": "Poppins"
  },
  "site": {
    "title": "Your Site Title",
    "subtitle": "Your subtitle here"
  }
}
```

**What each field does:**

| Field | Effect |
|---|---|
| `org.name` | Appears in the sidebar header |
| `org.logo` | Logo image shown in the sidebar (optional — set to `null` to hide) |
| `org.primaryColor` | Main brand color (buttons, active nav, headings, hotspot pins) |
| `org.primaryColorDark` | Darker shade used for hover states |
| `org.primaryColorLight` | Light tint used for quote backgrounds and hover fills |
| `site.title` | Browser tab title |

**To add your logo:**
1. Upload your logo file to the `assets/` folder in your repo
2. Set `org.logo` to `"assets/your-logo-filename.png"`

---

## Step 4 — Replace content

All page content lives in `content/pages/` as JSON files — one file per page. Each file has the same structure:

```json
{
  "slug": "page-slug",
  "title": "Page Title",
  "blocks": [ ... ]
}
```

The `blocks` array contains the content in order. Each block has a `type` (text, image, accordion, tabs, etc.) and type-specific fields. See `content/pages/how-this-hub-works.json` as a simple example to start from.

> **For the GoC reference deployment:** the content files are pre-generated from the original Rise course and should not need editing.

---

## Step 5 — Update toolkit resources

The 96 toolkit documents are defined in `content/pages/toolkit-documents.json`. Each download button is an `attachment` block:

```json
{ "type": "attachment", "items": [{ "filename": "My Document.docx", "src": "assets/My Document.docx" }] }
```

To replace resources:
1. Add your document files to the `assets/` folder
2. Edit the corresponding blocks in `toolkit-documents.json`

---

## Step 6 — Airtable (optional)

The toolkit dashboard pages embed Airtable iframes. To use your own Airtable base:

1. Create an Airtable base with your resource metadata
2. Share it publicly and get the embed URL (Share → Embed → Copy iframe src)
3. Add the URL to `content/config.json` under `toolkit.airtableEmbedUrl`

If you don't use Airtable, remove or leave blank the embed URL fields — pages will skip the iframe and show only the download list.

---

## Step 7 — Push and verify

After editing files in the GitHub web editor, commit your changes with the green **Commit changes** button. GitHub Pages rebuilds automatically within ~1 minute.

Visit `https://YOUR-USERNAME.github.io/change-hub/` to verify.

**To test locally before pushing:**
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## Troubleshooting

**Images not loading**
- Make sure image files are in the `assets/` folder and the path in the JSON matches exactly (case-sensitive on Linux/GitHub Pages)

**Airtable iframe shows a login prompt**
- Your Airtable base is not publicly shared. In Airtable: Share → Enable public access → Copy embed URL

**Site looks unstyled / layout broken**
- Check that `css/main.css` is present and the path in `index.html` matches

**Changes not showing after commit**
- GitHub Pages can take up to 2 minutes to rebuild. Hard-refresh your browser (Ctrl+Shift+R)

**Works locally but not on GitHub Pages**
- Make sure all file paths in JSON are relative (no leading `/`) and match the exact filename including capitalization
