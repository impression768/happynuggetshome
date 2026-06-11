import { HeroComposition } from "../art/HeroComposition";
import { LineScore } from "../art/LineScore";
import { NuggetsArt } from "../art/NuggetsArt";
import { RileyWaves } from "../art/RileyWaves";
import { ScullyBlocks } from "../art/ScullyBlocks";
import { SmileFitArt } from "../art/SmileFitArt";
import { SprayBloom } from "../art/SprayBloom";
import { ArtFrame } from "../components/ArtFrame";
import { Marquee } from "../components/Marquee";
import { ProductCard } from "../components/ProductCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { button, sticker } from "../lib/ui";

const WALL = [
  { title: "Stacked Weather", after: "Sean Scully", rotate: "rotate-[-1.25deg]", Art: ScullyBlocks },
  { title: "Loud Bloom", after: "Katharina Grosse", rotate: "rotate-[1deg]", Art: SprayBloom },
  { title: "City Score", after: "Julie Mehretu", rotate: "rotate-[-0.75deg]", Art: LineScore },
  { title: "Current No. 2", after: "Bridget Riley", rotate: "rotate-[1.25deg]", Art: RileyWaves },
];

export function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <main>
        <section className="overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
            <div>
              <p className={`${sticker} -rotate-2 bg-sun`}>Independent app studio</p>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                <span className="block">LIVY</span>
                <span className="block text-outline">TECH</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
                We build focused mobile products for learning, wellness, and everyday routines — simple, practical,
                and painted in loud color.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/nuggets/" className={`${button} bg-tangerine text-cream`}>
                  Nuggets
                </a>
                <a href="/smilefit/" className={`${button} bg-cobalt text-cream`}>
                  SmileFit
                </a>
                <a href="#art" className={`${button} bg-cream`}>
                  The wall
                </a>
              </div>
            </div>
            <HeroComposition className="mx-auto w-full max-w-md lg:max-w-none" />
          </div>
        </section>

        <Marquee
          items={["Nuggets", "Phrase cards", "SmileFit", "Guided sessions", "Learn", "Smile", "Repeat", "LivyTech"]}
        />

        <section id="products" className="scroll-mt-20 border-b-2 border-ink bg-cream">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={`${sticker} rotate-1 bg-rose text-cream`}>Products</p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">APPS BY LIVYTECH</h2>
              </div>
              <p className="max-w-sm text-ink/70">
                Each product page includes a short description, a support email, Terms of Service, and a Privacy
                Policy.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <ProductCard
                title="NUGGETS"
                href="/nuggets/"
                art={<NuggetsArt className="h-full w-full" />}
                pills={[{ label: "Language learning", className: "bg-sun" }]}
                description="Create, save, and review useful phrase cards for everyday language practice."
                supportEmail="nuggets@livytech.space"
                cta="Open Nuggets"
                ctaClass="bg-tangerine text-cream"
                rotate="md:-rotate-1"
              />
              <ProductCard
                title="SMILEFIT"
                href="/smilefit/"
                art={<SmileFitArt className="h-full w-full" />}
                pills={[{ label: "Personal wellness", className: "bg-sky" }]}
                description="Short guided smile and facial exercise sessions for personal wellness routines."
                supportEmail="smilfit@livytech.space"
                cta="Open SmileFit"
                ctaClass="bg-cobalt text-cream"
                rotate="md:rotate-1"
              />
            </div>
          </div>
        </section>

        <section id="art" className="scroll-mt-20 bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={`${sticker} -rotate-1 bg-jade text-cream`}>The studio wall</p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                  ABSTRACTIONS <span className="text-outline-paper">WE LIVE WITH</span>
                </h2>
              </div>
              <p className="max-w-sm text-paper/70">
                Four studies in color we keep around the studio — small homages to the abstract painters we look at
                while we build.
              </p>
            </div>

            <div className="mt-10 grid gap-6 text-ink sm:grid-cols-2 lg:grid-cols-4">
              {WALL.map(({ title, after, rotate, Art }) => (
                <ArtFrame key={title} title={title} after={after} rotate={rotate}>
                  <Art className="block h-auto w-full" />
                </ArtFrame>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-2 border-ink bg-cream">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <p className={`${sticker} rotate-1 bg-lilac text-cream`}>The studio</p>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl">SMALL TOOLS, LOUD COLOR.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/75">
              LivyTech is a one-room studio shipping small, honest apps: clear support paths, transparent policies,
              and products designed to stay easy to return to.
            </p>
            <div className="mt-8 flex justify-center gap-3" aria-hidden="true">
              <span className="h-4 w-4 rounded-full bg-tangerine" />
              <span className="h-4 w-4 rounded-full bg-sun" />
              <span className="h-4 w-4 rounded-full bg-jade" />
              <span className="h-4 w-4 rounded-full bg-cobalt" />
              <span className="h-4 w-4 rounded-full bg-rose" />
              <span className="h-4 w-4 rounded-full bg-lilac" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
