export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-display text-3xl leading-none sm:text-5xl">
          <span className="text-tangerine">EUGENE</span>
          <span className="text-outline-paper"> LIVSCHITZ</span>
        </p>
        <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-wider"
            aria-label="Footer"
          >
            <a className="transition-colors hover:text-sun" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-tangerine" href="/#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-sky" href="/experience/" title="Experience and professional profile">
              About
            </a>
            <a className="transition-colors hover:text-rose" href="/#contact">
              Contact
            </a>
            <a className="transition-colors hover:text-jade" href="mailto:yo.livy7@gmail.com">
              Email
            </a>
          </nav>
          <p className="text-sm text-paper/70">© 2026 Eugene Livschitz.</p>
        </div>
      </div>
    </footer>
  );
}
