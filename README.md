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
is an in-engine capture of Kindred's title meadow, without people or HUD. It autoplays
muted and loops, with a small Pause scenery button and no native video controls.
Playback pauses while the page is hidden; a visitor's manual pause is preserved.
If autoplay is blocked, the button offers Play scenery. The JPEG poster remains
visible while video loads or if video is unavailable.

The fixed-camera loop runs for 1 minute 28 seconds at 1280 × 800 and 30 fps, graded brighter. A stag
and two does walk through the background meadow, pause to graze and look around,
then leave naturally. Loop transitions blend only empty scenery, never the herd.
The phone crop follows their grazing spot and keeps all three above the headline.

Teaser copy and presentation live in `src/pages/index.astro`; metadata lives in
`src/layouts/Layout.astro`. Media is in `public/media/`, fonts and their SIL Open Font
Licenses in `public/fonts/`. The logo uses the splash colors `#00E676` and `#00B0FF`.
