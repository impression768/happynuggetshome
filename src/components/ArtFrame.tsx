import type { ReactNode } from "react";

export function ArtFrame({
  title,
  after,
  rotate = "",
  children,
}: {
  title: string;
  after: string;
  rotate?: string;
  children: ReactNode;
}) {
  return (
    <figure
      className={`border-2 border-ink bg-cream p-3 shadow-hard transition-transform duration-200 hover:-translate-y-1.5 ${rotate}`}
    >
      <div className="border-2 border-ink">{children}</div>
      <figcaption className="pt-3">
        <p className="font-display text-[11px] uppercase">{title}</p>
        <p className="mt-1 text-xs text-ink/60">after {after} · SVG on paper, 2026</p>
      </figcaption>
    </figure>
  );
}
