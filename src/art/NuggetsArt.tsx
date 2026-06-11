export function NuggetsArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Abstract composition of phrase cards with greetings in different languages"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="480" height="480" fill="#f6f1e7" />

      <path
        d="M70 220 C60 110 180 60 300 90 C420 120 440 250 380 350 C320 450 140 460 90 370 C50 300 80 300 70 220 Z"
        fill="#f7c52e"
        opacity="0.9"
      />

      <g fill="none" strokeLinecap="round">
        <path d="M330 60 A96 96 0 0 1 426 156" stroke="#0f9e76" strokeWidth="11" />
        <path d="M350 36 A124 124 0 0 1 452 148" stroke="#ec4d8b" strokeWidth="8" />
      </g>

      <g transform="rotate(-8 220 175)" className="art-anim animate-float-slower motion-reduce:animate-none">
        <rect x="120" y="110" width="200" height="120" rx="14" fill="#fffdf6" stroke="#1b1d23" strokeWidth="3.5" />
        <text x="150" y="186" fontFamily="'Rubik Mono One', monospace" fontSize="36" fill="#2746df">
          HOLA
        </text>
      </g>

      <g transform="rotate(6 290 262)" className="art-anim animate-float-slow motion-reduce:animate-none">
        <rect x="190" y="202" width="200" height="120" rx="14" fill="#fffdf6" stroke="#1b1d23" strokeWidth="3.5" />
        <text x="220" y="278" fontFamily="'Rubik Mono One', monospace" fontSize="36" fill="#f4571f">
          CIAO
        </text>
      </g>

      <g transform="rotate(-3 220 365)" className="art-anim animate-float-slow motion-reduce:animate-none" style={{ animationDelay: "-3.5s" }}>
        <rect x="120" y="305" width="200" height="120" rx="14" fill="#fffdf6" stroke="#1b1d23" strokeWidth="3.5" />
        <text x="158" y="382" fontFamily="'Rubik Mono One', monospace" fontSize="36" fill="#ec4d8b">
          HEJ!
        </text>
      </g>

      <path
        d="M408 330 q6 22 28 28 q-22 6 -28 28 q-6 -22 -28 -28 q22 -6 28 -28 Z"
        fill="#7c5cf6"
        className="art-anim animate-sway motion-reduce:animate-none"
      />

      <path d="M50 440 q22 -34 44 0 t44 0" fill="none" stroke="#f4571f" strokeWidth="9" strokeLinecap="round" />

      <g fill="#1b1d23">
        <circle cx="68" cy="84" r="4" />
        <circle cx="94" cy="62" r="3" />
        <circle cx="420" cy="248" r="4" />
        <circle cx="442" cy="278" r="3" />
        <circle cx="370" cy="440" r="4" />
        <circle cx="398" cy="420" r="3" />
      </g>
    </svg>
  );
}
