// Render only approved portfolio records using the same components as the interactive site.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { PortfolioHomePage } from "./pages/PortfolioHomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { projects, visibleProjects } from "./data/projects";
import { profile } from "./data/profile";
import { absoluteUrl, pageHead, profileMarkdown, projectMarkdown } from "./seo";

export function renderPortfolio() {
  // Matching StrictMode trees preserve React IDs when the browser hydrates the HTML.
  const pages = [
    { path: "/", file: "index.html", head: pageHead(), html: renderToString(<StrictMode><PortfolioHomePage /></StrictMode>), markdownFile: "profile.md", markdown: profileMarkdown(visibleProjects) },
    ...visibleProjects.map((project) => ({
      path: `/projects/${project.id}/`, file: `projects/${project.id}/index.html`, head: pageHead(project),
      html: renderToString(<StrictMode><ProjectPage project={project} /></StrictMode>),
      markdownFile: `projects/${project.id}/index.md`, markdown: projectMarkdown(project),
    })),
  ];

  // All discovery outputs use the same public selection; hidden records stay out.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((page) => `  <url><loc>${absoluteUrl(page.path)}</loc></url>`).join("\n")}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`;
  const llms = [
    `# ${profile.name}`, `> ${profile.role}. Public professional profile and selected project records.`,
    "## Profile", `- [Profile](${absoluteUrl("/profile.md")}): Biography, professional links, and project index.`,
    "## Selected projects", ...visibleProjects.map((project) => `- [${project.title}](${absoluteUrl(`/projects/${project.id}/index.md`)}): ${project.context}.`),
    "## Website", `- [Portfolio](${absoluteUrl("/")}): Canonical HTML pages and contact links.`,
  ].join("\n\n") + "\n";
  return { pages, sitemap, robots, llms, hiddenPaths: projects.filter((project) => project.isVisible === false).map((project) => `projects/${project.id}/index.html`) };
}
