import { SmileFitArt } from "../art/SmileFitArt";
import { LegalDoc } from "../components/LegalDoc";
import { Marquee } from "../components/Marquee";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { smilefitPrivacy, smilefitTerms } from "../content/smilefitLegal";
import { button, pill, sticker } from "../lib/ui";
import { useHashScroll } from "../lib/useHashScroll";

export function SmileFitPage() {
  useHashScroll();

  return (
    <>
      <SiteHeader current="smilefit" />
      <main>
        <section className="overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
            <div>
              <p className={`${sticker} -rotate-2 bg-sky`}>LivyTech product</p>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                <span className="text-cobalt">SMILE</span>
                <span className="text-outline">FIT</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
                A personal wellness app with short guided smile and facial exercise sessions — simple routines,
                repeatable practice, progress at your own pace.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className={`${pill} bg-sky`}>Personal wellness</span>
                <span className={`${pill} bg-rose text-cream`}>Guided sessions</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:support@livytech.space" className={`${button} bg-cobalt text-cream`}>
                  Email support
                </a>
                <a href="#terms" className={`${button} bg-cream`}>
                  Terms
                </a>
                <a href="#privacy" className={`${button} bg-cream`}>
                  Privacy
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md -rotate-1 border-2 border-ink shadow-hard lg:max-w-none">
              <SmileFitArt className="block h-auto w-full" />
            </div>
          </div>
        </section>

        <Marquee items={["Smile", "Breathe", "Hold", "Release", "Repeat", "Glow", "Easy does it"]} />

        <section className="border-b-2 border-ink bg-cream">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-3">
            <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm md:-rotate-1">
              <h2 className="font-display text-base">ABOUT</h2>
              <p className="mt-3 text-ink/80">
                SmileFit helps you follow short guided routines for smile and facial exercise practice.
              </p>
            </div>
            <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm">
              <h2 className="font-display text-base">SUPPORT</h2>
              <p className="mt-3 text-ink/80">
                For support, account questions, deletion requests, or privacy requests, email{" "}
                <a
                  className="font-semibold underline decoration-cobalt decoration-2 underline-offset-2"
                  href="mailto:support@livytech.space"
                >
                  support@livytech.space
                </a>
                .
              </p>
            </div>
            <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm md:rotate-1">
              <h2 className="font-display text-base">LEGAL</h2>
              <nav className="mt-3 flex gap-3" aria-label="SmileFit legal links">
                <a href="#terms" className={`${button} bg-sky px-4 py-1.5`}>
                  Terms
                </a>
                <a href="#privacy" className={`${button} bg-rose px-4 py-1.5 text-cream`}>
                  Privacy
                </a>
              </nav>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-4xl space-y-16 px-6 py-16">
            <LegalDoc doc={smilefitTerms} />
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-3 w-16 bg-cobalt" />
              <span className="h-3 w-10 bg-sky" />
              <span className="h-3 w-24 bg-rose" />
              <span className="h-3 w-8 bg-sun" />
              <span className="h-3 w-14 bg-jade" />
            </div>
            <LegalDoc doc={smilefitPrivacy} />
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
