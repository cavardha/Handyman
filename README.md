# Handyman FixSmart Website

A mobile-first, desktop-ready static website for **Handyman FixSmart** serving **Philadelphia & South New Jersey**.

## What is included

- `index.html` — main website file
- `css/styles.css` — full responsive styling
- `js/app.js` — menu, hero image slider, testimonial slider and SMS estimate form
- `assets/handyman-fixsmart-logo.png` — logo extracted from the screenshots provided
- `assets/favicon.png` — browser icon
- `assets/preview.jpg` — social preview image
- `IMAGE_SOURCES.md` — sample photo source list
- `EXTRACTED_INFO.md` — text/details extracted from the screenshots

## Contact details used

Phone used in CTA buttons: **(267) 597-4084**

Please verify this number with the client before publishing. If you need to change it, open `index.html` and `js/app.js` and replace:

```text
+12675974084
(267) 597-4084
```

## GitHub Pages setup

Do not upload the zip file directly.

1. Extract the zip.
2. Open the extracted folder.
3. Upload the files inside this folder directly to the GitHub repository root.
4. Your repository should look like this:

```text
your-repo/
├── index.html
├── css/
├── js/
├── assets/
├── README.md
├── IMAGE_SOURCES.md
└── EXTRACTED_INFO.md
```

5. Go to GitHub repository → Settings → Pages.
6. Select:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / root
7. Save and wait 1–3 minutes.

## Replace sample photos later

The current project photos are online sample images. For the final client version, replace them with real work photos from the client’s Instagram or job gallery.

Search in `index.html` for:

```text
https://images.unsplash.com
```

Replace each URL with your own image path like:

```text
assets/tv-mounting.jpg
assets/drywall-repair.jpg
```

Then place those images inside the `assets` folder.

## Best next improvements

- Add real client project photos.
- Add verified Google review screenshots.
- Add a proper domain.
- Connect the estimate form to Formspree, Netlify Forms, EmailJS or a backend later.
- Add Google Business Profile link when available.
