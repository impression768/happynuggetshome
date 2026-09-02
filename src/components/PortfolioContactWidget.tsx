import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { button } from "../lib/ui";

const FEEDBACK_ENDPOINT = "https://api.livytech.space/feedback";
const INSTALLATION_ID_KEY = "portfolio-feedback-installation-id";
const MAX_WHATSAPP_CHARS = 32;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_PATTERN = /^\+?[0-9 ()-]+$/;

type Contact = { email: string; whatsapp: string };
type Status = "idle" | "sending" | "sent" | "error";

function parseContact(value: string): Contact | null {
  const contact = value.trim();

  if (EMAIL_PATTERN.test(contact)) {
    return { email: contact, whatsapp: "" };
  }

  const digitCount = contact.replace(/\D/g, "").length;
  if (
    contact.length <= MAX_WHATSAPP_CHARS
    && WHATSAPP_PATTERN.test(contact)
    && digitCount >= 7
    && digitCount <= 15
  ) {
    return { email: "", whatsapp: contact };
  }

  return null;
}

function createInstallationId() {
  if (typeof crypto.randomUUID === "function") {
    return `portfolio_${crypto.randomUUID()}`;
  }

  return `portfolio_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 14)}`;
}

function getOrCreateInstallationId() {
  try {
    const stored = window.localStorage.getItem(INSTALLATION_ID_KEY);
    if (stored) {
      return stored;
    }

    const created = createInstallationId();
    window.localStorage.setItem(INSTALLATION_ID_KEY, created);
    return created;
  } catch {
    return createInstallationId();
  }
}

export function PortfolioContactWidget() {
  const panelId = useId();
  const contactInputRef = useRef<HTMLInputElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const [message, setMessage] = useState("");
  const [contactTouched, setContactTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const parsedContact = parseContact(contactValue);
  const trimmedMessage = message.trim();
  const canSend = Boolean(parsedContact && trimmedMessage) && status !== "sending";
  const showContactError = contactTouched && contactValue.trim().length > 0 && !parsedContact;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    contactInputRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function updateContact(value: string) {
    setContactValue(value);
    setStatus("idle");
  }

  function updateMessage(value: string) {
    setMessage(value);
    setStatus("idle");
  }

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactTouched(true);

    if (!parsedContact || !trimmedMessage || status === "sending") {
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        body: JSON.stringify({
          email: parsedContact.email || null,
          installationId: getOrCreateInstallationId(),
          message: trimmedMessage,
          platform: "web",
          sentAt: new Date().toISOString(),
          source: "portfolio_web_contact",
          topic: "portfolio_message",
          whatsapp: parsedContact.whatsapp || null,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Message failed with ${response.status}`);
      }

      setContactValue("");
      setMessage("");
      setContactTouched(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <aside className="fixed bottom-4 right-4 z-[90] flex w-[calc(100vw-2rem)] max-w-sm flex-col items-end sm:bottom-6 sm:right-6" aria-label="Contact Eugene">
      {isOpen ? (
        <section
          aria-labelledby={`${panelId}-title`}
          className="mb-4 max-h-[calc(100vh-7rem)] w-full overflow-y-auto border-2 border-ink bg-cream p-5 shadow-hard sm:p-6"
          id={panelId}
          role="dialog"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-[10px] uppercase tracking-wide text-cobalt">Direct message</p>
              <h2 className="mt-2 font-display text-lg leading-tight" id={`${panelId}-title`}>LET'S TALK</h2>
            </div>
            <button
              aria-label="Close message form"
              className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-paper text-xl font-bold leading-none shadow-hard-sm transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
              onClick={() => {
                setIsOpen(false);
                toggleButtonRef.current?.focus();
              }}
              type="button"
            >
              ×
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/70">Leave your email or WhatsApp number and a message. It will go directly to Eugene.</p>

          <form className="mt-5 space-y-4" onSubmit={(event) => void sendMessage(event)}>
            <label className="block" htmlFor={`${panelId}-contact`}>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Email or WhatsApp</span>
              <input
                aria-describedby={showContactError ? `${panelId}-contact-error` : undefined}
                aria-invalid={showContactError || undefined}
                autoComplete="email"
                className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 font-semibold outline-none shadow-hard-sm transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-hard"
                id={`${panelId}-contact`}
                maxLength={254}
                onBlur={() => setContactTouched(true)}
                onChange={(event) => updateContact(event.target.value)}
                placeholder="you@example.com or +972..."
                ref={contactInputRef}
                required
                type="text"
                value={contactValue}
              />
              {showContactError ? (
                <span className="mt-2 block text-sm font-semibold text-tangerine" id={`${panelId}-contact-error`}>
                  Enter a valid email or WhatsApp number.
                </span>
              ) : null}
            </label>

            <label className="block" htmlFor={`${panelId}-message`}>
              <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Message</span>
              <textarea
                className="mt-2 min-h-32 w-full resize-y border-2 border-ink bg-paper px-4 py-3 font-semibold leading-relaxed outline-none shadow-hard-sm transition focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-hard"
                id={`${panelId}-message`}
                maxLength={3000}
                onChange={(event) => updateMessage(event.target.value)}
                placeholder="What would you like to discuss?"
                required
                value={message}
              />
            </label>

            <button
              className={`${button} w-full bg-cobalt text-cream disabled:cursor-not-allowed disabled:opacity-50`}
              disabled={!canSend}
              type="submit"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <p className="min-h-6 text-sm font-semibold text-ink/70" role="status">
              {status === "sent"
                ? "Message sent. Eugene will get back to you."
                : status === "error"
                  ? "The message could not be sent. Please try again or use email."
                  : ""}
            </p>
            <p className="text-xs leading-relaxed text-ink/60">Your contact details will only be used to reply to your message.</p>
          </form>
        </section>
      ) : null}

      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={`${button} bg-tangerine text-cream`}
        onClick={() => setIsOpen((current) => !current)}
        ref={toggleButtonRef}
        type="button"
      >
        <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path d="M5 18.5 3.5 21l4-1.2A9 9 0 1 0 5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
        {isOpen ? "Close" : "Message me"}
      </button>
    </aside>
  );
}
