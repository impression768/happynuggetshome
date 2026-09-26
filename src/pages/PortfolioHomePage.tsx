import { HeroComposition } from "../art/HeroComposition";
import { AgamKinetics } from "../art/AgamKinetics";
import { NikelGesture } from "../art/NikelGesture";
import { RileyWaves } from "../art/RileyWaves";
import { ScullyBlocks } from "../art/ScullyBlocks";
import { ArtFrame } from "../components/ArtFrame";
import { Marquee } from "../components/Marquee";
import { PortfolioContactWidget } from "../components/PortfolioContactWidget";
import { ProductCard } from "../components/ProductCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../data/profile";
import { visibleProjects } from "../data/projects";
import { button, sticker } from "../lib/ui";

const WALL = [
  { artist: "Sean Scully", sourceTitle: "Backs and Fronts", year: "1981", rotate: "rotate-[-1.25deg]", Art: ScullyBlocks },
  { artist: "Yaacov Agam", sourceTitle: "Double Metamorphosis, II", year: "1964", rotate: "rotate-[1deg]", Art: AgamKinetics },
  { artist: "Lea Nikel", sourceTitle: "Untitled", year: "1986", rotate: "rotate-[-0.75deg]", Art: NikelGesture },
  { artist: "Bridget Riley", sourceTitle: "Cataract 3", year: "1967", rotate: "rotate-[1.25deg]", Art: RileyWaves },
];
const CARD_COLORS = ["bg-tangerine text-cream", "bg-cobalt text-cream", "bg-jade text-cream", "bg-rose text-cream", "bg-lilac text-cream"];
const CARD_ROTATIONS = ["md:-rotate-1", "md:rotate-1", "md:rotate-[0.5deg]", "md:-rotate-[0.5deg]"];

export function PortfolioHomePage() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-sun focus:px-4 focus:py-2 focus:font-bold" href="#main-content">Skip to content</a>
      <SiteHeader current="home" />
      <main id="main-content">
        <section className="overflow-hidden"><div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20"><div>
          <p className={`${sticker} -rotate-2 bg-sun`}>Applied AI / Product Engineer</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"><span className="block">EUGENE</span><span className="block text-outline">LIVSCHITZ</span></h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">{profile.introduction[0]}</p>
          <p className="mt-4 max-w-md leading-relaxed text-ink/70">{profile.introduction[1]}</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#projects" className={`${button} bg-tangerine text-cream`}>Selected projects</a><a href="#about" className={`${button} bg-cobalt text-cream`}>About</a><a href="#contact" className={`${button} bg-cream`}>Contact</a></div>
        </div><HeroComposition className="mx-auto w-full max-w-md lg:max-w-none" /></div></section>

        <Marquee items={["Applied AI", "Product systems", "Web", "Mobile", "Backend", "Integrations", "Validation", "Human control"]} />

        <section id="projects" className="scroll-mt-20 border-b-2 border-ink bg-cream"><div className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className={`${sticker} rotate-1 bg-rose text-cream`}>Selected work</p><h2 className="mt-4 font-display text-3xl sm:text-4xl">PROJECTS</h2></div><p className="max-w-sm text-ink/70">Selected public project records - from product workflow and AI integration through web, mobile, backend, and operational tooling.</p></div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">{visibleProjects.map((project, index) => <ProductCard key={project.id} title={project.title} href={`/projects/${project.id}/`} imageSrc={`/images/projects/${project.id}.webp`} imageAlt={project.coverAlt} imageLoading={index < 2 ? "eager" : "lazy"} context={project.context} description={project.summary} ctaClass={CARD_COLORS[index % CARD_COLORS.length]} rotate={CARD_ROTATIONS[index % CARD_ROTATIONS.length]} />)}</div>
        </div></section>

        <section id="about" className="scroll-mt-20 border-b-2 border-ink bg-paper"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]"><div><p className={`${sticker} -rotate-1 bg-jade text-cream`}>About</p><h2 className="mt-5 font-display text-3xl sm:text-4xl">ABOUT</h2></div><div className="border-2 border-ink bg-cream p-6 shadow-hard sm:p-8"><p className="text-lg leading-relaxed text-ink/85">{profile.about[0]}</p><p className="mt-5 leading-relaxed text-ink/75">{profile.about[1]}</p><p className="mt-5 leading-relaxed text-ink/75">{profile.about[2]}</p><p className="mt-5 leading-relaxed text-ink/75">{profile.about[3]}</p><p className="mt-5 font-semibold leading-relaxed text-ink/85">{profile.about[4]}</p></div></div></section>

        <section id="art" className="scroll-mt-20 bg-ink text-paper"><div className="mx-auto max-w-6xl px-6 py-16 sm:py-20"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className={`${sticker} -rotate-1 bg-jade text-cream`}>The wall</p><h2 className="mt-4 font-display text-3xl sm:text-4xl">ABSTRACTIONS</h2></div><p className="max-w-sm text-paper/70">Curiosity at play.</p></div><div className="mt-10 grid gap-6 text-ink sm:grid-cols-2 lg:grid-cols-4">{WALL.map(({ artist, sourceTitle, year, rotate, Art }) => <ArtFrame key={`${artist}-${year}`} artist={artist} sourceTitle={sourceTitle} year={year} rotate={rotate}><Art className="block h-auto w-full" /></ArtFrame>)}</div></div></section>

        <section id="contact" className="scroll-mt-20 border-t-2 border-ink bg-cream"><div className="mx-auto max-w-3xl px-6 py-16 text-center"><p className={`${sticker} rotate-1 bg-lilac text-cream`}>Contact</p><h2 className="mt-5 font-display text-2xl sm:text-3xl">LET'S TALK</h2><p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/75">For a role, product problem, or engineering conversation, email me or find me on LinkedIn, GitHub, and GitLab.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a className={`${button} bg-tangerine text-cream`} href="mailto:yo.livy7@gmail.com">Email Eugene</a><a className={`${button} bg-cream`} href="https://www.linkedin.com/in/livschitz" target="_blank" rel="noreferrer">LinkedIn</a><a className={`${button} bg-cream`} href="https://github.com/yo-livy" target="_blank" rel="noreferrer">GitHub</a><a className={`${button} bg-cream`} href="https://gitlab.com/yo-livy" target="_blank" rel="noreferrer">GitLab</a></div></div></section>
      </main>
      <SiteFooter />
      <PortfolioContactWidget />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
