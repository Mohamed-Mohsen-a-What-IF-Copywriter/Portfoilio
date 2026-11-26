# Mohamed Mohsen: portfolio site

Static, dependency-free, bilingual (EN / عربي with full RTL). No build step.

## Files
- `index.html`: shell, SEO tags, fonts
- `styles.css`: design (palette tokens at the top)
- `content.js`: **all text lives here**
- `app.js`: rendering, hash routing, language toggle (rarely needs edits)
- `favicon.svg`, `og-image.svg`

## Edit text
Open `content.js`. Each field is `en('…')`, `ar('…')` or `bi('English','عربي')`. If a language is missing for a field, the other language is shown (never silently translated). Search for `DRAFT` to find text that was not in your Slides deck.

Cases are `cases[] → sections[] → blocks[]`. Block types: `lead, sub, p, note, tags, cards, swot, segments, steps, bigidea, lines, pairs, posts, script, video`. A section with no content (or a role/status you did not supply) is simply left out.

## Add the Himalaya video
In `content.js`, find `t: 'video', src: ''` and paste either:
- a Google Drive link (the file must be shared as "Anyone with the link"; it plays through Drive's own player),
- a YouTube or Vimeo link (it is converted to the privacy-friendly `youtube-nocookie` / `vimeo ?dnt=1` embed), or
- a self-hosted file, e.g. `src: 'himalaya-neem.mp4'` (upload it next to `index.html`; add `poster: 'poster.jpg'` if you like).

Until `src` is filled, the video block is hidden.

## Images
Pictures live in the `images/` folder and are declared at the top of `content.js` in the `IMG` list: `img('file.jpg', width, height, alt text, caption)`. Alt text describes the picture for screen readers; the caption shows under it. To add a picture: put the file in `images/` (lowercase, no spaces), add one line to `IMG`, then use it as `img: IMG.name` on a work item, `cover: IMG.name` on a work card, or `{ t: 'gallery', items: [IMG.name] }` inside a case. Clicking a picture opens a full-screen view with next/previous.
- **OG image:** social sites need PNG/JPG. Export `og-image.svg` to a 1200×630 `og-image.png` (open in a browser/Figma/Canva and export), then set the real domain in the `og:` and `canonical` tags in `index.html`.

## PDF button
`pdf` in `content.js` currently points at the Google Slides PDF export (works while the deck is link-viewable). For a self-hosted file, drop `mohamed-mohsen-portfolio.pdf` next to `index.html` and set `pdf: 'mohamed-mohsen-portfolio.pdf'`.

## Fonts and privacy
Gelasio and Cairo load from Google Fonts (a third-party request). To remove it: download both families (e.g. from google-webfonts-helper), place the `.woff2` files in a `fonts/` folder, replace the Google `<link>` in `index.html` with `@font-face` rules in `styles.css`. Body text uses Calibri / system sans (no download). Cairo can be swapped for IBM Plex Sans Arabic in the `--arabic` variable.

## Colour and contrast
Brand colours are kept. Because `#E8512B` on bone is only ~2.9:1, it is used for shapes, fills and rules; **text** uses a darker `#B73A18` (4.5:1), and the muted gray `#A2A79F` is decorative only. Buttons use ink text on orange.

## Deploy
Any static host: Netlify / Cloudflare Pages / Vercel (drag the folder in), GitHub Pages (push, enable Pages), or any web server. Hash routing (`#/case/jamieson`) needs no server config.

## Routes
`#/case/jamieson`, `#/case/ladyy`, `#/case/himalaya`, `#/work/eveline`, `#/work/seif`, `#/work/blackfriday`, `#/work/takeoff`.

## Accessibility and motion
Semantic landmarks, skip link, visible focus, `aria-pressed` language toggle, focus moves to the content on route change, and `prefers-reduced-motion` disables reveals and hover motion.
