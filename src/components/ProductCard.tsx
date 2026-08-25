import type { ReactNode } from "react";
import { button, pill } from "../lib/ui";

export function ProductCard({
  title,
  href,
  art,
  context,
  description,
  cta = "View project",
  ctaClass,
  rotate,
}: {
  title: string;
  href: string;
  art: ReactNode;
  context: string;
  description: string;
  cta?: string;
  ctaClass: string;
  rotate: string;
}) {
  return (
    <article
      className={`flex flex-col border-2 border-ink bg-cream shadow-hard transition-transform duration-200 hover:rotate-0 ${rotate}`}
    >
      <a href={href} className="block h-44 overflow-hidden border-b-2 border-ink" tabIndex={-1} aria-hidden="true">
        {art}
      </a>
      <div className="flex grow flex-col gap-3 p-6">
        <span className={`${pill} w-fit bg-sun`}>{context}</span>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="text-ink/80">{description}</p>
        <div className="mt-auto pt-2">
          <a href={href} className={`${button} ${ctaClass}`}>
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}
