export function HeroComposition({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 600"
      role="img"
      aria-label="Abstract composition of colorful floating shapes and a smiling face with glasses"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="art-anim animate-float-slower motion-reduce:animate-none">
        <circle cx="424" cy="128" r="92" fill="#f7c52e" />
        <circle
          cx="424"
          cy="128"
          r="112"
          fill="none"
          stroke="#1b1d23"
          strokeWidth="2.5"
          strokeDasharray="1 12"
          strokeLinecap="round"
        />
      </g>

      <path
        d="M118 268 C96 176 196 118 288 142 C374 164 426 248 392 336 C356 428 214 452 144 388 C96 344 134 332 118 268 Z"
        fill="#f4571f"
        opacity="0.92"
      />

      <g fill="none" strokeLinecap="round">
        <path d="M64 470 A124 124 0 0 1 312 470" stroke="#2746df" strokeWidth="16" />
        <path d="M100 470 A88 88 0 0 1 276 470" stroke="#6cc6e8" strokeWidth="12" />
        <path d="M136 470 A52 52 0 0 1 240 470" stroke="#2746df" strokeWidth="10" />
      </g>

      <path
        d="M36 96 q28 -44 56 0 t56 0 t56 0 t56 0"
        fill="none"
        stroke="#ec4d8b"
        strokeWidth="10"
        strokeLinecap="round"
        className="art-anim animate-sway motion-reduce:animate-none"
      />

      <g transform="rotate(-7 290 300)" className="art-anim animate-float-slow motion-reduce:animate-none">
        <rect x="206" y="246" width="168" height="112" rx="12" fill="#fffdf6" stroke="#1b1d23" strokeWidth="3.5" />
        <rect x="226" y="272" width="104" height="12" rx="6" fill="#f7c52e" />
        <rect x="226" y="296" width="76" height="12" rx="6" fill="#6cc6e8" />
        <circle cx="346" cy="330" r="9" fill="#f4571f" />
      </g>

      <g className="art-anim animate-float-slow motion-reduce:animate-none" style={{ animationDelay: "-3s" }}>
        <circle cx="446" cy="436" r="9" fill="#2746df" />
        <circle cx="514" cy="436" r="9" fill="#2746df" />
        <g
          transform="rotate(-2 480 435)"
          fill="none"
          stroke="#1b1d23"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M414 419 C423 410 448 410 459 416 C468 421 470 432 467 443 C463 454 454 460 442 459 C428 458 419 451 416 440 C414 433 411 424 414 419 Z" />
          <path d="M501 416 C512 410 537 410 546 419 C549 424 546 433 544 440 C541 451 532 458 518 459 C506 460 497 454 493 443 C490 432 492 421 501 416 Z" />
          <path d="M468 426 C473 419 478 420 480 427 C482 420 487 419 492 426" />
          <path d="M414 424 L402 420" />
          <path d="M546 424 L553 421" />
        </g>
        <path d="M428 462 q52 64 104 0" fill="none" stroke="#ec4d8b" strokeWidth="13" strokeLinecap="round" />
      </g>

      <polygon
        points="468,308 540,398 432,402"
        fill="#0f9e76"
        className="art-anim animate-float-slower motion-reduce:animate-none"
        style={{ animationDelay: "-5s" }}
      />

      <path
        d="M84 524 q6 22 28 28 q-22 6 -28 28 q-6 -22 -28 -28 q22 -6 28 -28 Z"
        fill="#7c5cf6"
        className="art-anim animate-sway motion-reduce:animate-none"
        style={{ animationDelay: "-2s" }}
      />

      <g fill="#1b1d23">
        <circle cx="370" cy="60" r="5" />
        <circle cx="396" cy="84" r="3.5" />
        <circle cx="350" cy="92" r="3" />
        <circle cx="60" cy="200" r="4" />
        <circle cx="40" cy="232" r="3" />
        <circle cx="330" cy="560" r="4" />
        <circle cx="360" cy="540" r="3" />
        <circle cx="300" cy="576" r="3" />
      </g>
    </svg>
  );
}
