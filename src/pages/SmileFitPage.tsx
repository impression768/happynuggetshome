import { type FormEvent, useState } from "react";
import { SmileFitArt } from "../art/SmileFitArt";
import { LegalDoc } from "../components/LegalDoc";
import { Marquee } from "../components/Marquee";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { smilefitPrivacy, smilefitTerms } from "../content/smilefitLegal";
import { button, pill, sticker } from "../lib/ui";
import { useHashScroll } from "../lib/useHashScroll";

const FEEDBACK_ENDPOINT = "https://api.livytech.space/feedback";
const WEB_INSTALLATION_ID_KEY = "smilefit-web-feedback-installation-id";

function createWebInstallationId() {
  if (typeof crypto.randomUUID === "function") {
    return `sfw_${crypto.randomUUID()}`;
  }

  return `sfw_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 14)}`;
}

function getOrCreateWebInstallationId() {
  if (typeof window === "undefined") {
    return createWebInstallationId();
  }

  try {
    const existingInstallationId = window.localStorage.getItem(WEB_INSTALLATION_ID_KEY);
    if (existingInstallationId) {
      return existingInstallationId;
    }

    const installationId = createWebInstallationId();
    window.localStorage.setItem(WEB_INSTALLATION_ID_KEY, installationId);
    return installationId;
  } catch {
    return createWebInstallationId();
  }
}

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
                <a href="#support" className={`${button} bg-cobalt text-cream`}>
                  Send feedback
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

        <section id="support" className="scroll-mt-20 border-b-2 border-ink bg-cream">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
            <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm md:-rotate-1">
              <h2 className="font-display text-base">ABOUT</h2>
              <p className="mt-3 text-ink/80">
                SmileFit helps you follow short guided routines for smile and facial exercise practice.
              </p>
            </div>
            <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm">
              <h2 className="font-display text-base">SUPPORT</h2>
              <p className="mt-3 text-ink/80">
                Send SmileFit support questions, deletion requests, privacy requests, or product feedback here, or
                email{" "}
                <a
                  className="font-semibold underline decoration-cobalt decoration-2 underline-offset-2"
                  href="mailto:support@livytech.space"
                >
                  support@livytech.space
                </a>
                .
              </p>
              <SmileFitFeedbackForm />
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

function SmileFitFeedbackForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const canSend = trimmedMessage.length > 0 && status !== "sending";

  async function sendFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSend) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        body: JSON.stringify({
          app: "SmileFit",
          email: trimmedEmail || null,
          installationId: getOrCreateWebInstallationId(),
          message: trimmedMessage,
          platform: "web",
          sentAt: new Date().toISOString(),
          source: "smilefit_web_support",
          topic: "web_feedback",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`Feedback failed with ${response.status}`);
      }

      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={(event) => void sendFeedback(event)}>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Email optional</span>
        <input
          className="mt-2 w-full border-2 border-ink bg-cream px-4 py-3 font-semibold outline-none shadow-hard-sm transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-hard"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={email}
        />
      </label>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Message</span>
        <textarea
          className="mt-2 min-h-32 w-full resize-y border-2 border-ink bg-cream px-4 py-3 font-semibold leading-relaxed outline-none shadow-hard-sm transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-hard"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What should we improve?"
          required
          value={message}
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          className={`${button} bg-cobalt text-cream disabled:cursor-not-allowed disabled:opacity-50`}
          disabled={!canSend}
          type="submit"
        >
          {status === "sending" ? "Sending..." : "Send feedback"}
        </button>
        <p className="min-h-6 text-sm font-semibold text-ink/70" role="status">
          {status === "sent"
            ? "Sent. Thank you."
            : status === "error"
              ? "Could not send. Please try again."
              : ""}
        </p>
      </div>
    </form>
  );
}
