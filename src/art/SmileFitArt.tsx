export function SmileFitArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Abstract composition of a smiling face made of circles and arcs"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="480" height="480" fill="#f6f1e7" />

      <path
        d="M250 90 C370 60 460 140 450 250 C440 360 350 430 240 420 C140 410 100 330 120 240 C140 150 160 112 250 90 Z"
        fill="#6cc6e8"
        opacity="0.55"
      />

      <g className="art-anim animate-float-slower motion-reduce:animate-none">
        <circle cx="210" cy="240" r="128" fill="#2746df" />
        <circle cx="166" cy="206" r="12" fill="#f7c52e" />
        <circle cx="252" cy="206" r="12" fill="#f7c52e" />
        <path d="M152 268 q58 72 116 0" fill="none" stroke="#ec4d8b" strokeWidth="16" strokeLinecap="round" />
      </g>

      <g fill="none" strokeLinecap="round" className="art-anim animate-sway motion-reduce:animate-none">
        <path d="M352 96 A104 104 0 0 1 444 200" stroke="#ec4d8b" strokeWidth="11" />
        <path d="M372 72 A132 132 0 0 1 470 186" stroke="#f7c52e" strokeWidth="8" />
        <path d="M392 48 A160 160 0 0 1 478 132" stroke="#6cc6e8" strokeWidth="6" />
      </g>

      <polygon
        points="70,372 130,444 36,452"
        fill="#0f9e76"
        className="art-anim animate-float-slow motion-reduce:animate-none"
      />

      <path d="M250 420 q22 -34 44 0 t44 0" fill="none" stroke="#f4571f" strokeWidth="9" strokeLinecap="round" />

      <path
        d="M404 320 q6 22 28 28 q-22 6 -28 28 q-6 -22 -28 -28 q22 -6 28 -28 Z"
        fill="#7c5cf6"
        className="art-anim animate-sway motion-reduce:animate-none"
        style={{ animationDelay: "-4s" }}
      />

      <g fill="#1b1d23">
        <circle cx="80" cy="100" r="4" />
        <circle cx="108" cy="76" r="3" />
        <circle cx="60" cy="140" r="3" />
        <circle cx="420" cy="420" r="4" />
        <circle cx="448" cy="396" r="3" />
      </g>
    </svg>
  );
}
