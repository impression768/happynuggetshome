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
npm run build      # type-checks, builds assets, then prerenders portfolio HTML
npm run test:seo   # checks the generated content and discovery contracts
```

## Hosting

The build outputs `dist/` for GitHub Pages. `public/CNAME` remains `livytech.space`
for the existing custom domain. This repository does not deploy as part of local development.

## Search and AI-readable content

The homepage, experience page, and the ten selected project routes are rendered to complete HTML at
build time using the same React components as the browser. React hydrates this HTML
for interactions; development and legacy project pages still support client rendering.
The design, styles, contact endpoint, and existing route paths are unchanged.

`src/data/profile.ts` holds the unchanged homepage copy and public contact links.
`src/data/professionalProfile.ts` holds the curated public experience shared by
`/experience/` and `/profile.md`; it contains no private job-search notes. The footer
About link opens the experience page without changing the homepage layout.
`src/data/projects.ts` remains the source for project pages and their `index.md`
exports. Only `visibleProjects` enter `/sitemap.xml`, `/llms.txt`, and Markdown
exports. Hidden portfolio project routes remain functional with `noindex, follow`;
standalone product and policy pages retain their existing behavior.

`src/seo.ts` generates canonical URLs, descriptions, social cards and JSON-LD.
The build never reads the private CV workspace. Use only approved public copy in
these data files; metadata and exports must not disclose additional project details.
Existing project covers and the existing site logo provide social preview images.

`robots.txt` permits public crawling and explicitly allows OAI-SearchBot. Its wildcard
policy preserves the previous unrestricted training-crawler behavior; it does not
introduce a separate GPTBot opt-in or opt-out. A future training-policy choice can be
made independently from search discovery. `llms.txt` is an optional reading aid, not
a promise of search placement or AI citations.

The deployment workflow runs the generated-output checks before uploading `dist/`.
The temporary server renderer is removed after building and is not part of `dist/`.

## Release verification

After an authorized release, check the raw HTML of `/` and a project URL for visible
content, fetch `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and `/profile.md`, and confirm
canonical URLs and Markdown links resolve. Use Search Console's sitemap submission
and URL Inspection with the site owner's account to check indexing separately from
successful deployment. Do not claim indexing or AI citations from build success.

For a visual comparison, preview the production build and check desktop/mobile
homepage and project layouts against the baseline, with fonts loaded and animations
held still. Check the console for hydration errors and test navigation and contact
interactions. Contact tests must intercept the feedback endpoint rather than send
real messages. Reverting the implementation commit and redeploying restores the
previous rendering path if a production regression is found.
