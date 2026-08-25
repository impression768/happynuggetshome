# Eugene Livschitz portfolio

Hiring portfolio for Eugene Livschitz, Applied AI / Product Engineer in Tel Aviv.

React 19 + TypeScript + Vite 7 + Tailwind CSS 4, built as a multi-page app so
the home page, all `/projects/<id>/` detail pages, and legacy `/nuggets/`,
`/smilefit/`, and `/privacy/` policy routes are real static pages on GitHub Pages.
Project content is shared typed data in `src/data/projects.ts`; no project detail
route relies on an SPA fallback.

## Develop

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build   # type-checks, then outputs static site to dist/
```

## Hosting

The build outputs `dist/` for GitHub Pages. `public/CNAME` remains `livytech.space`
for the existing custom domain. This repository does not deploy as part of local development.
