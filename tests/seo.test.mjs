// Check published build artifacts so crawler access and public-content boundaries cannot silently regress.
import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = process.env.SEO_DIST ?? join(root, "dist");
const origin = "https://livytech.space";
const ids = ["geniehr", "insight-genie", "aded", "ai-matching-platform", "voice-insight", "wellbeing-platform", "data-collection", "scientific-research-platform", "ptbn", "personalized-book"];
const routes = ["/", "/experience/", ...ids.map((id) => `/projects/${id}/`)];
const read = (path) => readFile(join(dist, path), "utf8");
const htmlFor = (route) => read(`${route.slice(1)}index.html`);
const captures = (text, expression) => [...text.matchAll(expression)].map((match) => match[1]);

// This fails against the previous client-only build even though a browser could render it.
test("every selected page has complete readable content before JavaScript executes", async () => {
  for (const route of routes) {
    const html = await htmlFor(route);
    assert.match(html, /<div id="root">[\s\S]*<main/);
    assert.equal(captures(html, /<h1\b([^>]*)>/g).length, 1, route);
    assert.match(html, /<nav\b/);
    if (route === "/") {
      assert.match(html, /I turn real business processes into reliable AI pipelines/);
      for (const id of ids) assert.ok(html.includes(`href="/projects/${id}/"`), id);
    } else if (route === "/experience/") {
      for (const heading of ["PROFESSIONAL EXPERIENCE", "CORE EXPERTISE", "PROJECT EVIDENCE", "EDUCATION AND LANGUAGES", "EXPERIENCE SCOPE"]) assert.ok(html.includes(heading), heading);
    } else {
      for (const heading of ["MY CONTRIBUTION", "THE HARD PART", "WHAT SHIPPED", "TECHNICAL DETAILS", "TECHNOLOGY"]) assert.ok(html.includes(heading), `${route}: ${heading}`);
    }
    // All local scripts, styles, and images referenced by the built HTML must exist.
    const assetPaths = captures(html, /(?:src|href)="(\/[^"#?]+)"/g).filter((path) => /\.(?:js|css|webp|png|svg|md)$/.test(path));
    for (const path of assetPaths) await access(join(dist, path.slice(1)));
  }
});

test("canonical, sharing, and structured metadata identify the correct individual page", async () => {
  const descriptions = new Set();
  for (const route of routes) {
    const html = await htmlFor(route);
    assert.equal(captures(html, /<title>(.*?)<\/title>/g).length, 1);
    assert.deepEqual(captures(html, /<link rel="canonical" href="([^"]+)"/g), [`${origin}${route}`]);
    const pageDescriptions = captures(html, /<meta name="description" content="([^"]+)"/g);
    assert.equal(pageDescriptions.length, 1);
    assert.ok(pageDescriptions[0].length > 60);
    descriptions.add(pageDescriptions[0]);
    assert.ok(html.includes(`<meta property="og:url" content="${origin}${route}"`));
    assert.match(html, /<meta property="og:image" content="https:\/\/livytech.space\//);
    const json = captures(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    assert.equal(json.length, 1);
    const graph = JSON.parse(json[0])["@graph"];
    assert.equal(graph[0].name, "Eugene Livschitz");
    assert.equal(graph[1].url, `${origin}${route}`);
    assert.equal(graph[1]["@type"], route.startsWith("/projects/") ? "WebPage" : "ProfilePage");
    assert.equal(graph[0].sameAs.length, 3);
  }
  assert.equal(descriptions.size, routes.length);
});

test("sitemap and robots expose the canonical public route set without changing training policy", async () => {
  const sitemap = await read("sitemap.xml");
  assert.deepEqual(captures(sitemap, /<loc>(.*?)<\/loc>/g), routes.map((route) => `${origin}${route}`));
  const robots = await read("robots.txt");
  assert.match(robots, /User-agent: \*\nAllow: \/\n/);
  assert.match(robots, /User-agent: OAI-SearchBot\nAllow: \/\n/);
  assert.match(robots, /Sitemap: https:\/\/livytech.space\/sitemap.xml/);
  assert.doesNotMatch(robots, /GPTBot|Google-Extended|Disallow:/);
});

test("Markdown discovery resolves to complete public records and preserves status qualifiers", async () => {
  const llms = await read("llms.txt");
  const markdownLinks = captures(llms, /\]\(https:\/\/livytech.space(\/[^)]+\.md)\)/g);
  assert.equal(markdownLinks.length, ids.length + 1);
  for (const path of markdownLinks) {
    const markdown = await read(path.slice(1));
    assert.match(markdown, /^# /);
    assert.match(markdown, /Canonical page: https:\/\/livytech.space\//);
    assert.doesNotMatch(markdown, /ORCCA|ToTwo|Randomize Medicine|\bNAGI\b/i);
    if (path !== "/profile.md") {
      for (const heading of ["My contribution", "The hard part", "What shipped", "Technical details", "Technology"]) assert.ok(markdown.includes(`## ${heading}`));
    }
  }
  const research = await read("projects/scientific-research-platform/index.md");
  assert.match(research, /active development/);
  const profile = await read("profile.md");
  assert.match(profile, /5\+ years/);
  assert.match(profile, /mailto:yo.livy7@gmail.com/);
});

test("excluded project records stay out of discovery and legacy routes remain available", async () => {
  const discovery = [await htmlFor("/"), await read("profile.md"), await read("llms.txt"), await read("sitemap.xml")].join("\n");
  for (const id of ["nuggets", "smilefit"]) {
    assert.ok(!discovery.includes(`/projects/${id}/`));
    await assert.rejects(access(join(dist, `projects/${id}/index.md`)));
    assert.match(await htmlFor(`/projects/${id}/`), /<meta name="robots" content="noindex, follow"/);
  }
  for (const route of ["nuggets/index.html", "smilefit/index.html", "privacy/index.html"]) await access(join(dist, route));
});

// Independent confirmed facts protect the public publication boundary across both formats.
test("expanded public experience is consistent, evidenced, and discoverable", async () => {
  const html = await htmlFor("/experience/");
  const markdown = await read("profile.md");
  const body = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)[1]
    .replace(/<[^>]*>/g, " ").replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
  const facts = [
    "Insightgenie", "Lead Developer / Full-Stack Engineer", "Jan 2023 - Present",
    "Glance Tech", "Full-Stack Developer", "Mar 2020 - Sep 2022",
    "CampusFlow", "Co-Founder / Implementation Engineer", "Jan 2015 - Mar 2020",
    "Financial University", "Master's Degree in Economics - Financial Engineering and Financial Markets",
    "English - Fluent", "Hebrew - Beginner", "Russian - Native",
    "Python experience is integration", "primary backend ownership is in Node.js",
    "Scientific Research Platform remains in active development",
  ];
  for (const fact of facts) {
    assert.ok(body.includes(fact), `Missing visible fact: ${fact}`);
    assert.ok(markdown.includes(fact), `Missing Markdown fact: ${fact}`);
  }
  assert.match(html, /Glance Tech<\/h3><p[^>]*>Full-Stack Developer<\/p>/);
  assert.match(markdown, /### Glance Tech\n\nFull-Stack Developer\n\nMar 2020 - Sep 2022/);
  for (const id of ["geniehr", "aded", "voice-insight", "data-collection", "ptbn"]) {
    assert.ok(html.includes(`href="/projects/${id}/"`), id);
    assert.ok(markdown.includes(`${origin}/projects/${id}/`), id);
  }
  assert.match(markdown, /Canonical page: https:\/\/livytech.space\/experience\//);
  assert.ok((await htmlFor("/")).includes('href="/experience/"'));
  const guide = await read("llms.txt");
  assert.match(guide, /## Evidence by capability/);
  assert.ok(guide.includes(`${origin}/experience/`));
  for (const text of [body, markdown, guide]) {
    assert.doesNotMatch(text, /ORCCA|ToTwo|Randomize Medicine|\bNAGI\b|CV_PROJECT_CONTEXT|\/Users\/|USD 10,000|no live coding|application_status/i);
  }
});
