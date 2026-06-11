# LivyTech site

Marketing + legal site for LivyTech apps (Nuggets, SmileFit), served at https://livytech.space.

React 19 + TypeScript + Vite 7 + Tailwind CSS 4, built as a multi-page app so
`/`, `/nuggets/`, `/smilefit/`, and `/privacy/` are real static pages on GitHub Pages
(no SPA routing hacks — deep links and `#terms` / `#privacy` anchors always work).

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # type-checks, then outputs static site to dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages. The repo's Pages settings must use **Source: GitHub Actions**.
The custom-domain `CNAME` file lives in `public/` so it lands in every build.
