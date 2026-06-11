import type { ReactNode } from "react";
import type { LegalDocData } from "../content/types";

const EMAIL_RE = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

function linkify(text: string): ReactNode {
  const parts = text.split(EMAIL_RE);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-semibold underline decoration-tangerine decoration-2 underline-offset-2 hover:bg-sun/50"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export function LegalDoc({ doc }: { doc: LegalDocData }) {
  return (
    <article id={doc.id} className="scroll-mt-24">
      <h2 className="font-display text-xl sm:text-2xl">{doc.title}</h2>
      <p className="mt-3 inline-block border-2 border-ink bg-sun px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
        Last updated: {doc.updated}
      </p>
      <p className="mt-5 max-w-3xl leading-relaxed text-ink/85">{linkify(doc.intro)}</p>
      {doc.sections.map((section) => (
        <section key={section.heading} className="mt-7">
          <h3 className="text-base font-extrabold uppercase tracking-wide">{section.heading}</h3>
          {section.paragraphs?.map((paragraph, i) => (
            <p key={i} className="mt-2 max-w-3xl leading-relaxed text-ink/85">
              {linkify(paragraph)}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-2 max-w-3xl list-disc space-y-1.5 pl-5 marker:text-tangerine">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed text-ink/85">
                  {linkify(bullet)}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
