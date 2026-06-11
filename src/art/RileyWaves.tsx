const WAVE = "M0 -16 C 22 60, -22 144, 0 216 C 22 288, -22 364, 0 436";

const COLORS = ["#2746df", "#6cc6e8", "#0f9e76", "#f7c52e", "#f4571f", "#ec4d8b", "#7c5cf6"];

export function RileyWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Op-art painting of parallel colored waves"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="420" height="420" fill="#f8f4ec" />
      {Array.from({ length: 14 }, (_, i) => (
        <path
          key={i}
          d={WAVE}
          transform={`translate(${15 + i * 30}, 0)`}
          fill="none"
          stroke={COLORS[i % COLORS.length]}
          strokeWidth="16"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
