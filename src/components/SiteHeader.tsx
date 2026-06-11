const NAV = [
  { key: "home", href: "/", label: "Home", accent: "decoration-rose" },
  { key: "nuggets", href: "/nuggets/", label: "Nuggets", accent: "decoration-tangerine" },
  { key: "smilefit", href: "/smilefit/", label: "SmileFit", accent: "decoration-cobalt" },
] as const;

export type PageKey = (typeof NAV)[number]["key"];

export function SiteHeader({ current }: { current: PageKey }) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2.5" aria-label="LivyTech home">
          <img
            src="/livy-logo.png"
            alt=""
            className="h-9 w-9 rounded-full border-2 border-ink bg-cream object-contain"
          />
          <span className="font-display text-sm sm:text-base">LIVYTECH</span>
          <span className="hidden items-center gap-1 sm:flex" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-tangerine" />
            <span className="h-2.5 w-2.5 rounded-full bg-cobalt" />
            <span className="h-2.5 w-2.5 rounded-full bg-sun" />
          </span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={current === item.key ? "page" : undefined}
              className={`text-xs font-bold uppercase tracking-widest underline-offset-4 hover:underline hover:decoration-4 sm:text-sm ${item.accent} ${
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
