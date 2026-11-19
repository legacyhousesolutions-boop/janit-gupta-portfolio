# Janit Gupta — The Career Archive

A static, Vercel-ready personal portfolio website.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/portrait.png`

## Deploy on Vercel
1. Upload this folder or connect the extracted folder to Vercel.
2. Set framework preset to **Other** / static site.
3. No build command is required.
4. Output directory: `.`

## Notes
- Designed to match the editorial “Career Archive” presentation deck.
- Includes click-based chapter navigation, smooth scrolling, keyboard navigation, and reveal animations.

## New additions
- Clickable LinkedIn and WhatsApp links.
- Yawn Club image gallery using project-verified production paths; visit-site buttons link to `https://www.yawnclub.in/`.
- MDI Gurgaon campus photograph and Hero FinCorp logo loaded from external websites.

**Image hosting note:** The branded imagery loads from third-party/public hosts at runtime, because the supplied original portfolio package did not include those image files. Internet access and image hotlinking permissions affect visibility. If images do not load, the site keeps its layout and shows visual fallbacks. For a fully self-contained site, replace remote image `src` attributes with approved local images in `assets/`.
