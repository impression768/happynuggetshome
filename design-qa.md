# Design QA — Eugene Livschitz portfolio

## History

- Reference captured from the unmodified source project at `/Users/yo.livy/Desktop/Stack/langy+livytech/happynuggetshome` on 2026-08-25.
- Reference viewports: desktop `1440×900`, mobile `390×844`.
- Reference evidence: `/private/tmp/eugene-portfolio-reference/` (canonical files are the `*-viewport.jpg` captures and `reference-manifest.md`).
- Implementation under test: `/private/tmp/eugene-livschitz-portfolio`, commit `9e39e73` (`Build Eugene Livschitz hiring portfolio`).

## Non-browser checks completed

- `npm run build`: passed; TypeScript and Vite build completed and emitted all expected static entry pages, including home, ten project pages, `/nuggets/`, `/smilefit/`, and `/privacy/`.
- Implementation worktree was clean before QA.

## Chrome QA evidence

After the in-app Browser outage was established, Chrome was authorized as the fallback. The local preview ran at `http://127.0.0.1:5174/`.

- Evidence directory: `/private/tmp/eugene-livschitz-portfolio/qa-evidence/`.
- Captured home, all ten project detail routes, `/nuggets/`, `/smilefit/`, and `/privacy/` at both `1440×900` and `390×844`.
- Combined reference-versus-implementation comparisons are under `qa-evidence/comparisons/`.
- `npm run build` passed.
- All ten project cards navigated to the expected `/projects/<id>/` route; every detail page's `Back to projects` link returned to `/#projects`.
- Home `Projects`, `About`, and `Contact` navigation updated the expected hash and scrolled to the section.
- Verified public external links: LinkedIn, GitHub, GitLab, GenieHR, Insight Genie, and ADED.
- `/nuggets/`, `/smilefit/`, and `/privacy/` rendered. `/privacy/` intentionally redirects to `/nuggets/#privacy`.
- At both viewports, every checked route had `documentElement.scrollWidth === innerWidth` and no browser `warn`/`error` console entries.
- Visual review found the expected paper/ink palette, Rubik Mono headings, hard shadows, abstract SVG artwork, marquee strips, stacked mobile layout, and responsive detail pages. No P0/P1 visual or interaction issue was found.

## Post-fix history

- Previous result at `9e39e73`: `[P2]` duplicate SVG definition IDs on the home page. `LineScore` used `score-hatch` and `SprayBloom` used `bloom-blur` in multiple rendered instances.
- Fix commit under test: `9ed288e` (`Fix portfolio SVG IDs and favicons`). The art components now scope IDs per instance with React `useId`; root/project HTML uses the personal `favicon.svg`, while legacy app routes retain `favicon.png`.
- Post-fix evidence: `/private/tmp/eugene-livschitz-portfolio/qa-evidence/post-fix/`.
- Revised combined comparisons: `/private/tmp/eugene-livschitz-portfolio/qa-evidence/comparisons/post-fix-*.jpg`.
- Chrome post-fix checks used the same `1440×900` and `390×844` viewports. Home and all ten project routes rendered with no duplicate IDs, no horizontal overflow, and no browser warn/error logs. The legacy `/nuggets/`, `/smilefit/`, and `/privacy/` routes also rendered without duplicate IDs, overflow, or console issues; `/privacy/` still redirects to `/nuggets/#privacy` as designed.
- Direct Chrome navigation confirmed `/favicon.svg` loads as `image/svg+xml` and `/favicon.png` loads as `image/png`. Root/project HTML references the SVG favicon and legacy HTML references the PNG favicon. The revised home and project artwork remained visually intact in the same-state comparisons.
- No actionable P0, P1, or P2 issues remain.

final result: passed
