import type { ReactNode } from "react";

export function ArtFrame({
  artist,
  sourceTitle,
  year,
  rotate = "",
  children,
}: {
  artist: string;
  sourceTitle: string;
  year: string;
  rotate?: string;
  children: ReactNode;
}) {
  return (
    <figure
      aria-label={`Study after ${artist}, ${sourceTitle}, ${year}`}
      className={`border-2 border-ink bg-cream p-3 shadow-hard transition-transform duration-200 hover:-translate-y-1.5 ${rotate}`}
    >
      <div className="border-2 border-ink">{children}</div>
      <figcaption className="pt-3">
        <p className="font-display text-[11px] uppercase text-ink/70">{artist} · {year}</p>
      </figcaption>
    </figure>
  );
}
