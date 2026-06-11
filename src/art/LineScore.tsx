export function LineScore({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Abstract drawing of layered fine lines and colored marks"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="score-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#1b1d23" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="420" height="420" fill="#f6f1e7" />

      <g fill="none" stroke="#1b1d23" opacity="0.8">
        <path d="M20 340 C120 250 210 300 400 120" strokeWidth="1.2" />
        <path d="M0 260 C140 240 260 140 420 180" strokeWidth="0.9" />
        <path d="M40 400 C160 300 240 320 410 210" strokeWidth="1.4" />
        <path d="M0 160 C90 200 220 90 420 60" strokeWidth="1" />
        <path d="M30 60 C150 140 260 40 400 150" strokeWidth="0.8" />
        <path d="M0 320 C100 330 320 250 420 300" strokeWidth="1.1" />
        <path d="M60 0 C100 120 220 180 380 250" strokeWidth="0.9" />
        <path d="M160 420 C190 300 280 240 420 230" strokeWidth="1.2" />
        <path d="M0 90 C170 110 230 230 300 420" strokeWidth="0.8" />
        <path d="M250 0 C230 130 160 220 40 260" strokeWidth="1" />
        <circle cx="206" cy="216" r="74" strokeWidth="1.1" />
        <circle cx="206" cy="216" r="108" strokeWidth="0.7" strokeDasharray="6 5" />
      </g>

      <rect x="238" y="238" width="92" height="62" fill="url(#score-hatch)" opacity="0.75" transform="rotate(-8 284 269)" />

      <g strokeLinecap="round">
        <line x1="120" y1="212" x2="162" y2="196" stroke="#f4571f" strokeWidth="9" />
        <line x1="228" y1="148" x2="262" y2="170" stroke="#2746df" strokeWidth="9" />
        <line x1="170" y1="290" x2="200" y2="304" stroke="#f7c52e" strokeWidth="8" />
        <line x1="298" y1="116" x2="318" y2="100" stroke="#0f9e76" strokeWidth="7" />
      </g>

      <g fill="#1b1d23">
        <polygon points="150,200 182,190 172,216" />
        <polygon points="248,330 270,322 264,346" />
        <polygon points="96,118 116,110 112,132" />
      </g>
      <polygon points="318,196 340,188 334,212" fill="#ec4d8b" />
    </svg>
  );
}
