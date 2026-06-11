export function ScullyBlocks({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Abstract painting of stacked color blocks"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="420" height="420" fill="#f6f1e7" />

      <g transform="rotate(-0.4 210 70)">
        <rect x="20" y="20" width="128" height="100" fill="#2746df" />
        <rect x="152" y="20" width="92" height="100" fill="#f4571f" />
        <rect x="248" y="20" width="72" height="100" fill="#0f9e76" />
        <rect x="324" y="20" width="76" height="100" fill="#f7c52e" />
      </g>

      <rect x="20" y="128" width="380" height="12" fill="#1b1d23" opacity="0.9" />

      <g transform="rotate(0.3 210 208)">
        <rect x="20" y="148" width="96" height="120" fill="#ec4d8b" />
        <rect x="120" y="148" width="150" height="120" fill="#f7c52e" />
        <rect x="274" y="148" width="60" height="120" fill="#7c5cf6" />
        <rect x="338" y="148" width="62" height="120" fill="#2746df" />
      </g>

      <rect x="20" y="276" width="380" height="12" fill="#f4571f" />

      <g transform="rotate(-0.3 210 348)">
        <rect x="20" y="296" width="170" height="104" fill="#0f9e76" />
        <rect x="194" y="296" width="86" height="104" fill="#1b1d23" />
        <rect x="284" y="296" width="116" height="104" fill="#ec4d8b" />
      </g>
    </svg>
  );
}
