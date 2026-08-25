import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Marquee } from "../components/Marquee";
import type { Project } from "../data/projects";
import { button, sticker } from "../lib/ui";

function DetailList({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-3 pl-5 leading-relaxed marker:text-tangerine">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-sun focus:px-4 focus:py-2 focus:font-bold" href="#main-content">Skip to project details</a>
      <SiteHeader current="projects" />
      <main id="main-content">
        <article className="overflow-hidden border-b-2 border-ink bg-cream"><div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"><header>
          <p className={`${sticker} -rotate-1 bg-sun`}>{project.context}</p>
          <h1 className="mt-6 font-display text-4xl leading-[0.98] sm:text-6xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink/80 sm:text-xl">{project.summary}</p>
          {project.url && <a className={`${button} mt-8 bg-tangerine text-cream`} href={project.url} target="_blank" rel="noreferrer">{project.linkLabel || "Visit public website"}</a>}
        </header><div className="mx-auto aspect-square w-full max-w-md rotate-1 overflow-hidden border-2 border-ink shadow-hard lg:max-w-none"><img src={`/images/projects/${project.id}.webp`} alt={project.coverAlt} className="h-full w-full object-cover" loading="eager" decoding="async" /></div></div></article>
        <Marquee items={[project.title, project.context, "Product systems", "Applied AI", "Implementation"]} />
        <article className="bg-paper"><div className="mx-auto max-w-4xl px-6 py-12 sm:py-16"><div className="divide-y-2 divide-ink border-y-2 border-ink">
          <section className="grid gap-4 py-8 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"><h2 className="font-display text-sm">MY CONTRIBUTION</h2><p className="leading-relaxed text-ink/80">{project.contribution}</p></section>
          <section className="grid gap-4 py-8 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"><h2 className="font-display text-sm">THE HARD PART</h2><p className="leading-relaxed text-ink/80">{project.challenge}</p></section>
          <section className="grid gap-4 py-8 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"><h2 className="font-display text-sm">WHAT SHIPPED</h2><DetailList items={project.highlights} /></section>
          <section className="grid gap-4 py-8 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"><h2 className="font-display text-sm">TECHNICAL DETAILS</h2><DetailList items={project.technical} /></section>
          <section className="grid gap-4 py-8 sm:grid-cols-[0.32fr_0.68fr] sm:gap-10"><h2 className="font-display text-sm">TECHNOLOGY</h2><p className="leading-relaxed text-ink/80">{project.techStack.join(" · ")}</p></section>
        </div><a className={`${button} mt-10 bg-cobalt text-cream`} href="/#projects">Back to projects</a></div></article>
      </main>
      <SiteFooter />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
