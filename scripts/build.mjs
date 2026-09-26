// Build the existing site, then add static portfolio content and discovery files to dist.
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import react from "@vitejs/plugin-react";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

// Vite retains the existing multi-page routes and hashed client assets.
await build({ root });
const temporary = await mkdtemp(join(root, ".prerender-"));
try {
  // A temporary server bundle uses existing dependencies and is never published.
  await build({
    root, configFile: false, publicDir: false, plugins: [react()],
    build: { ssr: "src/prerender.tsx", outDir: temporary, emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "render.mjs" } } },
  });
  const { renderPortfolio } = await import(pathToFileURL(join(temporary, "render.mjs")).href);
  const { pages, sitemap, robots, llms, hiddenPaths } = renderPortfolio();
  for (const page of pages) {
    const target = join(dist, page.file);
    const shell = await readFile(target, "utf8");
    if (!shell.includes('<div id="root"></div>')) throw new Error(`Missing empty page root: ${page.file}`);
    const html = shell
      .replace(/<title>[\s\S]*?<\/title>/i, "")
      .replace(/<meta\s+name="description"[^>]*>/i, "")
      .replace("</head>", () => `  ${page.head}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${page.html}</div>`);
    await writeFile(target, html);
    await writeFile(join(dist, page.markdownFile), page.markdown);
  }
  // Keep legacy project URLs functional without promoting excluded portfolio records.
  for (const path of hiddenPaths) {
    const target = join(dist, path);
    const html = await readFile(target, "utf8");
    await writeFile(target, html.replace("</head>", '<meta name="robots" content="noindex, follow" /></head>'));
  }
  await Promise.all([
    writeFile(join(dist, "sitemap.xml"), sitemap),
    writeFile(join(dist, "robots.txt"), robots),
    writeFile(join(dist, "llms.txt"), llms),
  ]);
  console.log(`Prerendered ${pages.length} portfolio pages with matching Markdown and discovery files.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
