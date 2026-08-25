const NAV = [
  { key: "home", href: "/", label: "Home", accent: "decoration-rose" },
  { key: "projects", href: "/#projects", label: "Projects", accent: "decoration-tangerine" },
  { key: "about", href: "/#about", label: "About", accent: "decoration-cobalt" },
  { key: "contact", href: "/#contact", label: "Contact", accent: "decoration-jade" },
] as const;

export type PageKey = (typeof NAV)[number]["key"];

export function SiteHeader({ current }: { current?: PageKey }) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Eugene Livschitz home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-cream font-display text-[10px] leading-none">EL</span>
          <span className="hidden font-display text-xs leading-tight sm:text-sm md:block">EUGENE LIVSCHITZ</span>
          <span className="hidden items-center gap-1 md:flex" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-tangerine" />
            <span className="h-2.5 w-2.5 rounded-full bg-cobalt" />
            <span className="h-2.5 w-2.5 rounded-full bg-sun" />
          </span>
        </a>
        <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 sm:gap-x-6" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
              className={`text-[10px] font-bold uppercase tracking-[0.08em] underline-offset-4 hover:underline hover:decoration-4 sm:text-sm sm:tracking-widest ${item.accent} ${
                current === item.key ? "underline decoration-4" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
