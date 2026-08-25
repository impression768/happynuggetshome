import { useId } from "react";

export function NikelGesture({ className = "" }: { className?: string }) {
  const textureId = `nikel-texture-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Colorful gestural abstraction with playful sweeping marks"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={textureId} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="12" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect width="420" height="420" fill="#f8f4ec" />
      <g filter={`url(#${textureId})`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-28 114C63 27 134 155 214 84s125-8 235-74" stroke="#f7c52e" strokeWidth="39" />
        <path d="M-12 317C62 231 112 330 178 280c71-55 89-112 252-96" stroke="#ec4d8b" strokeWidth="32" />
        <path d="M70 420c-16-95 44-177 132-166 60 8 80 79 166 49" stroke="#2746df" strokeWidth="27" />
        <path d="M60 52c84 55 31 140 112 150 58 7 70-75 138-65" stroke="#0f9e76" strokeWidth="22" />
        <path d="M300 8c-50 80 52 102 22 177-21 51-86 63-72 139" stroke="#f4571f" strokeWidth="18" />
        <path d="M8 220c51-17 85-4 122 24" stroke="#1b1d23" strokeWidth="10" />
        <path d="M256 355c35-13 76-6 120 22" stroke="#1b1d23" strokeWidth="9" />
      </g>
      <g fill="#1b1d23">
        <circle cx="88" cy="128" r="9" />
        <circle cx="212" cy="88" r="7" />
        <circle cx="355" cy="139" r="10" />
        <circle cx="151" cy="344" r="8" />
      </g>
      <g fill="none" stroke="#1b1d23" strokeLinecap="round">
        <path d="M64 163l27-37 14 39 34-16" strokeWidth="6" />
        <path d="M282 228l19 24 21-30 31 28" strokeWidth="7" />
        <path d="M104 382c17-19 35-21 54-5" strokeWidth="5" />
      </g>
      <path d="M365 38l22 22-22 22-22-22z" fill="#7c5cf6" stroke="#1b1d23" strokeWidth="4" />
    </svg>
  );
}
