# Design QA — Eugene Livschitz portfolio

## History

- Reference captured from the unmodified source project at `/Users/yo.livy/Desktop/Stack/langy+livytech/happynuggetshome` on 2026-08-25.
- Reference viewports: desktop `1440×900`, mobile `390×844`.
- Reference evidence: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-reference/` (canonical files are the `*-viewport.jpg` captures and `reference-manifest.md`).
- Implementation under test: `/Users/yo.livy/Desktop/Stack/langy+livytech/happynuggetshome`, initial implementation commit `9e39e73` (`Build Eugene Livschitz hiring portfolio`).

## Non-browser checks completed

- `npm run build`: passed; TypeScript and Vite build completed and emitted all expected static entry pages, including home, ten project pages, `/nuggets/`, `/smilefit/`, and `/privacy/`.
- Implementation worktree was clean before QA.

## Chrome QA evidence

After the in-app Browser outage was established, Chrome was authorized as the fallback. The local preview ran at `http://127.0.0.1:5174/`.

- Evidence directory: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/`.
- Captured home, all ten project detail routes, `/nuggets/`, `/smilefit/`, and `/privacy/` at both `1440×900` and `390×844`.
- Combined reference-versus-implementation comparisons are under the evidence directory's `comparisons/` folder.
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
- Post-fix evidence: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/post-fix/`.
- Revised combined comparisons: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/comparisons/post-fix-*.jpg`.
- Chrome post-fix checks used the same `1440×900` and `390×844` viewports. Home and all ten project routes rendered with no duplicate IDs, no horizontal overflow, and no browser warn/error logs. The legacy `/nuggets/`, `/smilefit/`, and `/privacy/` routes also rendered without duplicate IDs, overflow, or console issues; `/privacy/` still redirects to `/nuggets/#privacy` as designed.
- Direct Chrome navigation confirmed `/favicon.svg` loads as `image/svg+xml` and `/favicon.png` loads as `image/png`. Root/project HTML references the SVG favicon and legacy HTML references the PNG favicon. The revised home and project artwork remained visually intact in the same-state comparisons.
- No actionable P0, P1, or P2 issues remain.

## 2026-08-25 floating-glasses addition

- Source visual truth: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/hero-glasses/reference-before-glasses.png` (`928×992`), showing the original abstract face before the requested glasses.
- Implementation under test: local `eugene-hero-glasses` worktree at `http://127.0.0.1:5174/`, normal home-page state with the existing SVG motion active.
- Browser-rendered evidence: `hero-glasses-desktop-final.png` (`1440×900`) and `hero-glasses-mobile-art-final.png` (`390×844`) under the same `hero-glasses/` evidence directory. Captures used CSS viewports matching their pixel dimensions at device scale `1`.
- Combined focused comparison: `hero-glasses-comparison.png` (`928×496`). The source and implementation art regions were each normalized to `464×496` before being placed side by side. The source crop and rendered crop are not the same page viewport, so the comparison is used for face, frame, palette, and compositional fit rather than pixel-level layout parity.
- Full-view comparison: the desktop capture confirms that the added frame remains a small secondary accent within the hero and does not alter the headline, CTA hierarchy, hero spacing, marquee, or first project-section reveal. The mobile capture confirms that the face remains legible in the stacked hero and the new frame stays inside the artwork without introducing horizontal overflow.
- Focused-region comparison: the combined image makes the requested change readable at useful scale. The dark, thick panto lenses, keyhole-style bridge, and short temples align around the existing cobalt eyes; the transparent lenses preserve the eyes and the triangle/smile remain unchanged.
- Fonts and typography: unchanged; the glasses do not affect type size, weight, wrapping, or hierarchy.
- Spacing and layout rhythm: unchanged outside the SVG. Within the face, the lenses remain centered on the two existing eyes, maintain clear separation from the smile, and visually connect to the triangle without covering it.
- Colors and visual tokens: the frame reuses the existing ink token `#1b1d23`; no new palette value or gradient was introduced.
- Image quality and asset fidelity: the frame remains crisp at both viewports because it extends the existing editable SVG illustration system. Its rounded stroke language matches the smile, rainbow arcs, and card outline rather than introducing a mismatched raster treatment or brand logo.
- Copy and content: unchanged. The SVG accessible label now mentions the smiling face with glasses.
- Responsive and accessibility checks: desktop and mobile both reported `documentElement.scrollWidth === innerWidth`; no browser warning/error logs were present; reduced-motion behavior remains inherited from the existing animated parent group.
- Primary interactions checked: the home-page navigation and CTA layout remained visible and unchanged. The glasses are decorative and add no interaction target.
- Comparison history: the first mobile inspection placed the right temple too close to the SVG boundary. Its endpoint was moved from `x=557` to `x=553`; the revised desktop and mobile captures show the complete temple inside the artwork with no clipping. No actionable P0, P1, or P2 findings remain after this fix.

## 2026-08-25 realistic project covers

- Source visual truth: the pre-change project grid and GenieHR detail page captured from local `main` before cover integration. Grid references are `reference-project-grid-desktop.png` (`1280×720`) and `reference-project-grid-mobile.png` (`390×844`); detail references are `reference-detail-desktop.png` (`1440×900`) and `reference-detail-mobile.png` (`390×844`).
- Implementation under test: commit `da57200` (`Add editorial project covers to portfolio`) in the isolated `eugene-project-realistic-covers` worktree, served locally at `http://127.0.0.1:5175/`.
- Evidence directory: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-project-covers/`. It contains the ten-master and wide-crop contact sheets, matched source/implementation captures, all desktop card-pair captures, representative mobile captures, and four labeled before/after comparison images.
- Image generation and subject accuracy: ten square editorial masters were generated with the built-in ImageGen model from the confirmed public project goals, visually inspected individually and as a set, and then optimized to `1200×1200` WebP files. The scenes cover hiring, assessment analytics, second-hand marketplace listing, audio processing, non-contact wellbeing, voice-dataset review, business networking, personalized books, daily smile practice, and language learning. They contain no readable product claims, logos, watermarks, medical framing, or stealth-project material.
- Layout and spacing: the existing `h-44` card media slot, card grid, hard border and shadow, card rotation, typography, label placement, copy density, button treatment, and section rhythm are unchanged. Detail covers use the previous art frame's position, border, rotation, and shadow with an intentional square crop. The hero and artist wall remain unchanged.
- Responsive image quality: the central subject in every cover remains readable in the shallow desktop card crop and the approximately 2:1 mobile crop. The full square composition is preserved on detail pages. The generated assets remain sharp without stretching, haloing, transparency artifacts, or visible compression damage.
- Viewport checks: all ten cards were inspected across the desktop grid and representative mobile captures at `390×844`. All ten `/projects/<id>/` routes were loaded in the in-app browser; each reported a complete `1200×1200` image, the expected project-specific source and descriptive alt text, and `documentElement.scrollWidth === innerWidth`.
- Accessibility and behavior: project media is rendered as semantic `<img>` content with descriptive editorial-representation alt text, async decoding, and eager loading only where useful. Existing project links, detail pages, header navigation, marquee, and back navigation remain intact. Browser diagnostics found no warning or error entries for the implementation origin.
- Combined comparison result: the labeled desktop/mobile grid and detail composites place the source and implementation in one input at the same viewport and state. They confirm that the requested imagery is the only material visual change and that the preserved LivyTech poster-art system still frames the new photography coherently.
- Verification: `npm ci`, `npm run build`, and `git diff --check` passed. No actionable P0, P1, or P2 findings remain.

## 2026-08-25 hero-glasses removal

- User decision: the Lemtosh-inspired glasses were removed from the small abstract hero face. The two cobalt eyes, green triangle, rose smile, surrounding shapes, and existing motion remain unchanged.
- Implementation: removed only the glasses-frame group from `src/art/HeroComposition.tsx` and updated the SVG accessible label from `smiling face with glasses` to `smiling face`.
- Evidence directory: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/hero-glasses-removal/`.
- Combined comparisons: `comparison-desktop.jpg` uses matched `1440×900` before/after captures; `comparison-mobile.jpg` uses matched `390×844` captures scrolled to the face. Both confirm that the frame is gone without altering the face placement, SVG composition, hero layout, navigation, CTA hierarchy, marquee, or project-section reveal.
- Responsive and accessibility checks: both viewports reported `documentElement.scrollWidth === innerWidth`; the hero SVG exposes the updated label; browser diagnostics contained no warnings or errors for the implementation origin.
- Verification: `npm ci`, `npm run build`, and `git diff --check` passed. No actionable P0, P1, or P2 findings remain.

## 2026-08-25 PrimeTime Business Network cover correction

- User-reported issue: the original card crop placed the phone awkwardly near the lower edge and did not make the two foreground eye lines read as one shared interaction.
- Image correction: built-in ImageGen regenerated the foreground phone exchange while preserving the professional networking event, people, clothing, warm editorial lighting, softly defocused attendees, floral detail, square framing, and non-readable abstract screen. A focused second pass moved the complete phone and connected hands higher into the center crop band.
- Final asset: `public/images/projects/ptbn.webp`, optimized to `1200×1200` WebP at `122,872` bytes.
- Evidence directory: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/ptbn-cover-fix/`.
- Combined comparisons: `comparison-card-desktop.jpg` and `comparison-card-mobile.jpg` use matched source/implementation viewports and scroll positions. The revised crop keeps the complete upright phone between the two people, gives both faces a clear downward eye line to the same screen, and preserves the existing card dimensions, border, rotation, typography, copy, CTA, grid spacing, and adjacent covers.
- Detail-page and responsive checks: `/projects/ptbn/` loads the complete `1200×1200` image and existing descriptive alt text. Desktop and `390×844` mobile checks reported `documentElement.scrollWidth === innerWidth`, and browser diagnostics contained no warnings or errors for the implementation origin.
- Verification: `npm ci`, `npm run build`, and `git diff --check` passed. No actionable P0, P1, or P2 findings remain.

## 2026-08-25 Personalized Book Platform cover correction

- User-reported issues: the original scene did not match the requested European family representation, and the printed illustrations faced the camera rather than the readers, making the physical book orientation feel inverted for the father and child.
- Image correction: the built-in ImageGen model was used in two edit passes. The first replaced the subjects with a European father and young child, aligned both eye lines with the open book, and oriented the printed pages upright from the readers' side (therefore upside-down from the camera's opposing viewpoint). The second extended the accepted scene to a true square master while preserving the reader-correct central composition, warm kitchen, tablet thumbnails, print proofs, and natural hands.
- Final asset: `public/images/projects/personalized-book.webp`, optimized to `1200×1200` WebP at `145,778` bytes.
- Evidence directory: `/Users/yo.livy/.codex/visualizations/2026/08/25/01a0385a-93ee-7143-bfd1-81514d0b7b13/eugene-portfolio-qa-evidence/personalized-book-cover-fix/`.
- Combined comparisons: `comparison-card-desktop.jpg` and `comparison-card-mobile.jpg` use matched source/implementation viewports and scroll positions. The new central crop keeps the father and child visibly engaged with the same correctly oriented book while retaining the tablet and print proofs that communicate the personalized-commerce workflow. Existing card dimensions, border, rotation, typography, copy, CTA, grid spacing, and adjacent covers remain unchanged.
- Detail-page and responsive checks: `/projects/personalized-book/` loads the complete `1200×1200` image and existing descriptive alt text. Desktop `1440×900` and mobile `390×844` checks reported `documentElement.scrollWidth === innerWidth`, and browser diagnostics contained no warnings or errors for the implementation origin.
- Verification: `npm ci`, `npm run build`, and `git diff --check` passed. No actionable P0, P1, or P2 findings remain.

final result: passed
