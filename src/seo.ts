// Describe the existing public pages consistently for search engines and text readers.
import { profile } from "./data/profile";
import type { Project } from "./data/projects";

export const siteUrl = "https://livytech.space";
export const absoluteUrl = (path: string) => `${siteUrl}${path}`;

// Escape metadata separately from JSON so future copy cannot break the document head.
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]!);
const safeJson = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export function pageHead(project?: Project) {
  const path = project ? `/projects/${project.id}/` : "/";
  const canonical = absoluteUrl(path);
  const title = project ? `${project.title} | ${profile.name}` : `${profile.name} | ${profile.role}`;
  const description = project ? `${project.context}. ${project.summary}` : profile.description;
  const image = absoluteUrl(project ? `/images/projects/${project.id}.webp` : "/livy-logo.png");
  const imageAlt = project?.coverAlt ?? "LivyTech logo";
  const markdown = absoluteUrl(project ? `${path}index.md` : "/profile.md");
  const person = {
    "@type": "Person", "@id": absoluteUrl("/#person"), name: profile.name,
    url: absoluteUrl("/"), jobTitle: profile.role, sameAs: profile.links.map((link) => link.url),
  };
  const page = project ? {
    "@type": "WebPage", "@id": `${canonical}#page`, url: canonical, name: title,
    description, inLanguage: "en", author: { "@id": person["@id"] },
    mainEntity: {
      "@type": "CreativeWork", name: project.title, description: project.summary,
      url: canonical, keywords: project.techStack.join(", "), image,
    },
  } : {
    "@type": "ProfilePage", "@id": `${canonical}#page`, url: canonical, name: title,
    description, inLanguage: "en", mainEntity: { "@id": person["@id"] },
  };

  // Search and sharing metadata describe the same content that readers see on the page.
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" type="text/markdown" href="${markdown}" title="Markdown version" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(profile.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
    `<meta name="twitter:card" content="${project ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`,
    `<script type="application/ld+json">${safeJson({ "@context": "https://schema.org", "@graph": [person, page] })}</script>`,
  ].join("\n  ");
}

export function projectMarkdown(project: Project) {
  return [
    `# ${project.title}`, `Portfolio record by ${profile.name}`, `Canonical page: ${absoluteUrl(`/projects/${project.id}/`)}`,
    project.context, project.summary, "## My contribution", project.contribution,
    "## The hard part", project.challenge, "## What shipped", project.highlights.map((item) => `- ${item}`).join("\n"),
    "## Technical details", project.technical.map((item) => `- ${item}`).join("\n"),
    "## Technology", project.techStack.join(", "),
    ...(project.url ? [`[${project.linkLabel ?? "Public website"}](${project.url})`] : []),
  ].join("\n\n") + "\n";
}

export function profileMarkdown(projects: Project[]) {
  return [
    `# ${profile.name}`, profile.role, `Canonical page: ${absoluteUrl("/")}`,
    ...profile.introduction, "## About", ...profile.about, "## Selected projects",
    projects.map((project) => `- [${project.title}](${absoluteUrl(`/projects/${project.id}/`)}): ${project.context}`).join("\n"),
    "## Contact", `[Email ${profile.name}](mailto:${profile.email})`,
    ...profile.links.map((link) => `[${link.label}](${link.url})`),
  ].join("\n\n") + "\n";
}
