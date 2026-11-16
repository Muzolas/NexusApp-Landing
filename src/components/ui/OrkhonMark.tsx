// Orkhon logomark: eight slices around a ring, the active slice and centre dot in accent-2.
// Colors come from the theme tokens, so it follows light/dark without separate files.
const SLICE =
  "M42.426 -7L102.093 -7L77.14 -67.241L34.95 -25.05A43 43 0 0 1 42.426 -7Z";

export function OrkhonMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-120 -120 240 240"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {[0, -45, -90, -135, -180, -225, -270, -315].map((deg) => {
        const color = deg === 0 ? "var(--accent-2)" : "var(--accent)";
        return (
          <path
            key={deg}
            d={SLICE}
            transform={`rotate(${deg})`}
            fill={color}
            stroke={color}
            strokeWidth={6}
            strokeLinejoin="round"
          />
        );
      })}
      <circle r={13} fill="var(--accent-2)" />
    </svg>
  );
}
