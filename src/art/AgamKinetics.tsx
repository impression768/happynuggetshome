import { useId } from "react";

export function AgamKinetics({ className = "" }: { className?: string }) {
  const lightId = `agam-light-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Bright kinetic geometric abstraction with shifting vertical chevron bands"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={lightId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff9e6" stopOpacity="0.96" />
          <stop offset="0.5" stopColor="#fff9e6" stopOpacity="0" />
          <stop offset="1" stopColor="#1b1d23" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="420" height="420" fill="#f8f4ec" />
      <g stroke="#1b1d23" strokeWidth="2" strokeLinejoin="round">
        <path d="M0 0h42l34 56-34 56H0l34-56zM0 112h42l34 56-34 56H0l34-56zM0 224h42l34 56-34 56H0l34-56zM0 336h42l34 56-17 28H0z" fill="#f4571f" />
        <path d="M42 0h42l34 56-34 56H42l34-56zM42 112h42l34 56-34 56H42l34-56zM42 224h42l34 56-34 56H42l34-56zM42 336h42l34 56-17 28H42z" fill="#f7c52e" />
        <path d="M84 0h42l34 56-34 56H84l34-56zM84 112h42l34 56-34 56H84l34-56zM84 224h42l34 56-34 56H84l34-56zM84 336h42l34 56-17 28H84z" fill="#0f9e76" />
        <path d="M126 0h42l34 56-34 56h-42l34-56zM126 112h42l34 56-34 56h-42l34-56zM126 224h42l34 56-34 56h-42l34-56zM126 336h42l34 56-17 28h-25l34-56z" fill="#2746df" />
        <path d="M168 0h42l34 56-34 56h-42l34-56zM168 112h42l34 56-34 56h-42l34-56zM168 224h42l34 56-34 56h-42l34-56zM168 336h42l34 56-17 28h-25l34-56z" fill="#7c5cf6" />
        <path d="M210 0h42l34 56-34 56h-42l34-56zM210 112h42l34 56-34 56h-42l34-56zM210 224h42l34 56-34 56h-42l34-56zM210 336h42l34 56-17 28h-25l34-56z" fill="#ec4d8b" />
        <path d="M252 0h42l34 56-34 56h-42l34-56zM252 112h42l34 56-34 56h-42l34-56zM252 224h42l34 56-34 56h-42l34-56zM252 336h42l34 56-17 28h-25l34-56z" fill="#f4571f" />
        <path d="M294 0h42l34 56-34 56h-42l34-56zM294 112h42l34 56-34 56h-42l34-56zM294 224h42l34 56-34 56h-42l34-56zM294 336h42l34 56-17 28h-25l34-56z" fill="#f7c52e" />
        <path d="M336 0h42l34 56-34 56h-42l34-56zM336 112h42l34 56-34 56h-42l34-56zM336 224h42l34 56-34 56h-42l34-56zM336 336h42l34 56-17 28h-25l34-56z" fill="#0f9e76" />
        <path d="M378 0h42v112h-42l34-56zM378 112h42v112h-42l34-56zM378 224h42v112h-42l34-56zM378 336h42v84h-42l34-28z" fill="#2746df" />
      </g>
      <rect width="420" height="420" fill={`url(#${lightId})`} />
      <path d="M0 0h420M0 420h420" stroke="#1b1d23" strokeWidth="4" />
    </svg>
  );
}
