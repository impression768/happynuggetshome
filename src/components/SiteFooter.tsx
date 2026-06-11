export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-display text-3xl leading-none sm:text-5xl">
          <span className="text-tangerine">LIVY</span>
          <span className="text-outline-paper">TECH</span>
        </p>
        <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider"
            aria-label="Footer"
          >
            <a className="transition-colors hover:text-sun" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-tangerine" href="/nuggets/">
              Nuggets
            </a>
            <a className="transition-colors hover:text-sky" href="/smilefit/">
              SmileFit
            </a>
            <a className="transition-colors hover:text-rose" href="/nuggets/#privacy">
              Nuggets Privacy
            </a>
            <a className="transition-colors hover:text-jade" href="/smilefit/#privacy">
              SmileFit Privacy
            </a>
          </nav>
          <p className="text-sm text-paper/70">© 2026 LivyTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
