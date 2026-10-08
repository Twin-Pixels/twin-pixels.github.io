# Twin Pixels

The studio's single-page teaser, built with Astro and deployed to GitHub Pages at
[twinpixels.gg](https://twinpixels.gg). Pushing to `main` runs the existing deployment workflow.

```sh
yarn install --frozen-lockfile
yarn dev
yarn build
yarn preview
```

The page uses the Twin Pixels splash mark and Kindred's fonts. The silent background
is an in-engine capture of Kindred's title meadow, without people or HUD. Its JPEG
poster also serves visitors with reduced motion, data saving, disabled JavaScript,
or unavailable video. Motion and data-saving preferences skip the video download
unless the visitor chooses Play scenery. A play/pause control appears when video
is available; playback pauses while the page is hidden.

Teaser copy and presentation live in `src/pages/index.astro`; metadata lives in
`src/layouts/Layout.astro`. Media is in `public/media/`, fonts and their SIL Open Font
Licenses in `public/fonts/`. The logo uses the splash colors `#00E676` and `#00B0FF`.
