const SHAPES = ["✶", "●", "◆", "▲"];
const SHAPE_COLORS = ["text-sun", "text-rose", "text-sky", "text-jade"];

function Row({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <span aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-5 font-display text-xs sm:text-sm">{item}</span>
          <span className={`${SHAPE_COLORS[i % SHAPE_COLORS.length]} text-base`} aria-hidden="true">
            {SHAPES[i % SHAPES.length]}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-paper">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
