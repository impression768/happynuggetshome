// Present the verified public profile in HTML using the same data as the Markdown export.
import { profile } from "../data/profile";
import { professionalProfile } from "../data/professionalProfile";
import { visibleProjects } from "../data/projects";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { button, sticker } from "../lib/ui";

const sectionClass = "border-t-2 border-ink py-8 sm:py-12";
const headingClass = "font-display text-xl sm:text-2xl";

export function ExperiencePage() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-sun focus:px-4 focus:py-2 focus:font-bold" href="#main-content">Skip to experience</a>
      <SiteHeader />
      <main id="main-content" className="bg-paper">
        <article className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <header className="pb-10">
            <p className={`${sticker} -rotate-1 bg-sun`}>{profile.name}</p>
            <h1 className="mt-6 font-display text-3xl sm:text-5xl">EXPERIENCE</h1>
            <p className="mt-5 text-lg font-semibold">{profile.role} · {professionalProfile.location}</p>
            <p className="mt-5 leading-relaxed text-ink/80">{professionalProfile.summary}</p>
          </header>
          <section className={sectionClass} aria-labelledby="employment">
            <h2 id="employment" className={headingClass}>PROFESSIONAL EXPERIENCE</h2>
            <div className="mt-8 space-y-10">
              {professionalProfile.experience.map((job) => <div key={job.employer}>
                <h3 className="text-xl font-bold">{job.employer}</h3>
                <p className="mt-2 font-semibold">{job.role}</p>
                <p className="mt-2 text-sm text-ink/70">{job.period} · {job.location}</p>
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-ink/80">{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>)}
            </div>
          </section>
          <section className={sectionClass} aria-labelledby="expertise">
            <h2 id="expertise" className={headingClass}>CORE EXPERTISE</h2>
            <dl className="mt-6 space-y-5">{professionalProfile.skills.map((group) => <div key={group.area}>
              <dt className="font-bold">{group.area}</dt><dd className="mt-2 leading-relaxed text-ink/80">{group.items.join(", ")}</dd>
            </div>)}</dl>
          </section>
          <section className={sectionClass} aria-labelledby="evidence">
            <h2 id="evidence" className={headingClass}>PROJECT EVIDENCE</h2>
            <div className="mt-6 space-y-8">{professionalProfile.capabilities.map((capability) => <div key={capability.title}>
              <h3 className="text-lg font-bold">{capability.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/80">{capability.description}</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">{capability.projectIds.map((id) => {
                const project = visibleProjects.find((item) => item.id === id);
                if (!project) throw new Error(`Profile evidence must reference a selected public project: ${id}`);
                return <li key={id}><a className="font-semibold text-cobalt underline underline-offset-4" href={`/projects/${id}/`}>{project.title}</a></li>;
              })}</ul>
            </div>)}</div>
          </section>
          <section className={sectionClass} aria-labelledby="approach">
            <h2 id="approach" className={headingClass}>ENGINEERING APPROACH</h2>
            {professionalProfile.approach.map((paragraph) => <p key={paragraph} className="mt-5 leading-relaxed text-ink/80">{paragraph}</p>)}
          </section>
          <section className={sectionClass} aria-labelledby="education">
            <h2 id="education" className={headingClass}>EDUCATION AND LANGUAGES</h2>
            <p className="mt-5 font-bold">{professionalProfile.education.institution}</p>
            <p className="mt-2 leading-relaxed text-ink/80">{professionalProfile.education.degree}</p>
            <ul className="mt-5 space-y-2 text-ink/80">{professionalProfile.languages.map((item) => <li key={item.language}>{item.language} - {item.level}</li>)}</ul>
          </section>
          <section className={sectionClass} aria-labelledby="scope">
            <h2 id="scope" className={headingClass}>EXPERIENCE SCOPE</h2>
            {professionalProfile.boundaries.map((paragraph) => <p key={paragraph} className="mt-5 leading-relaxed text-ink/80">{paragraph}</p>)}
          </section>
          <section className={sectionClass} aria-labelledby="contact">
            <h2 id="contact" className={headingClass}>CONTACT</h2>
            <div className="mt-6 flex flex-wrap gap-4"><a className={`${button} bg-tangerine text-cream`} href={`mailto:${profile.email}`}>Email Eugene</a>{profile.links.map((link) => <a key={link.label} className={`${button} bg-cream`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
            <p className="mt-6"><a className="font-semibold text-cobalt underline underline-offset-4" href="/profile.md">Read this profile as Markdown</a></p>
          </section>
        </article>
      </main>
      <SiteFooter />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
