export function SprayBloom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Abstract painting of overlapping sprayed color blooms"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="bloom-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>

      <rect width="420" height="420" fill="#f8f4ec" />

      <g filter="url(#bloom-blur)">
        <ellipse cx="150" cy="148" rx="128" ry="110" fill="#ec4d8b" opacity="0.85" />
        <ellipse cx="292" cy="118" rx="110" ry="95" fill="#f4571f" opacity="0.8" />
        <ellipse cx="252" cy="292" rx="140" ry="112" fill="#2746df" opacity="0.75" />
        <ellipse cx="106" cy="304" rx="100" ry="92" fill="#f7c52e" opacity="0.85" />
        <ellipse cx="334" cy="334" rx="72" ry="72" fill="#0f9e76" opacity="0.7" />
      </g>

      <polygon points="0,420 172,0 216,0 58,420" fill="#f8f4ec" opacity="0.92" />

      <g>
        <circle cx="86" cy="80" r="3.5" fill="#2746df" />
        <circle cx="330" cy="64" r="3" fill="#1b1d23" />
        <circle cx="376" cy="180" r="4" fill="#ec4d8b" />
        <circle cx="44" cy="220" r="3" fill="#f4571f" />
        <circle cx="208" cy="396" r="3.5" fill="#0f9e76" />
        <circle cx="300" cy="222" r="3" fill="#f7c52e" />
        <circle cx="148" cy="252" r="2.5" fill="#1b1d23" />
        <circle cx="388" cy="392" r="3" fill="#7c5cf6" />
      </g>
    </svg>
  );
}
