import { useEffect, useRef, useState } from "react";

const NAV = [
  { key: "home", href: "/", label: "Home", accent: "decoration-rose" },
  { key: "projects", href: "/#projects", label: "Projects", accent: "decoration-tangerine" },
  { key: "about", href: "/#about", label: "About", accent: "decoration-cobalt" },
  { key: "contact", href: "/#contact", label: "Contact", accent: "decoration-jade" },
] as const;

export type PageKey = (typeof NAV)[number]["key"];

export function SiteHeader({ current, trackSections = false }: { current?: PageKey; trackSections?: boolean }) {
  const headerRef = useRef<HTMLElement>(null);
  const [visibleSection, setVisibleSection] = useState<PageKey>(current ?? "home");
  const active = trackSections ? visibleSection : current;

  // On the homepage, follow the section below the sticky menu as the visitor scrolls.
  // Other pages keep their explicit page selection and do not track local headings.
  useEffect(() => {
    if (!trackSections) return;
    const sections = NAV.flatMap(({ key }) => {
      const element = document.getElementById(key);
      return element ? [{ key, element }] : [];
    });
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      let next: PageKey = "home";
      for (const { key, element } of sections) {
        // Match native anchor spacing so clicking a section selects it at its landing point.
        const anchorMargin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
        if (element.getBoundingClientRect().top <= Math.max(headerBottom, anchorMargin) + 1) next = key;
      }
      // A short final section can be visible at the bottom without reaching the menu.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        next = sections.at(-1)?.key ?? next;
      }
      setVisibleSection(next);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);

    // Images, fonts, and responsive wrapping can move sections without a scroll event.
    const observer = new ResizeObserver(scheduleUpdate);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    if (headerRef.current) observer.observe(headerRef.current);
    scheduleUpdate();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
    };
  }, [trackSections]);
  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
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
              aria-current={active === item.key ? (trackSections ? "location" : "page") : undefined}
              className={`text-[10px] font-bold uppercase tracking-[0.08em] underline-offset-4 hover:underline hover:decoration-4 sm:text-sm sm:tracking-widest ${item.accent} ${
                active === item.key ? "underline decoration-4" : ""
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
