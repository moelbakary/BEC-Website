// Lightweight, dependency-free SVG illustrations.
// These act as elegant "premium placeholder" visuals.
// To use real photos instead, see the README "Replacing visuals" section.

export function LineArtwork({ className = "" }) {
  // Abstract bottling line: conveyor + bottles + machinery blocks
  return (
    <svg
      viewBox="0 0 520 360"
      className={className}
      role="img"
      aria-label="Abstract illustration of a bottling line"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3A4150" />
          <stop offset="1" stopColor="#22262F" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDEFF3" />
          <stop offset="1" stopColor="#C2C9D6" />
        </linearGradient>
      </defs>

      {/* machinery blocks */}
      <rect x="20" y="60" width="120" height="150" rx="6" fill="url(#steelGrad)" />
      <rect x="380" y="60" width="120" height="150" rx="6" fill="url(#steelGrad)" />
      <rect x="36" y="80" width="88" height="10" rx="3" fill="#515B6E" />
      <rect x="36" y="100" width="60" height="8" rx="3" fill="#6E788C" />
      <circle cx="110" cy="180" r="14" fill="#F05A22" />
      <circle cx="396" cy="180" r="14" fill="#F05A22" />

      {/* conveyor belt */}
      <rect x="0" y="232" width="520" height="26" rx="4" fill="#2B303B" />
      <g fill="#515B6E">
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={i} x={14 + i * 40} y="236" width="20" height="18" rx="2" />
        ))}
      </g>

      {/* bottles on the line */}
      <g>
        {[170, 230, 290, 350].map((x, i) => (
          <g key={i} transform={`translate(${x},150)`}>
            <path
              d="M10 0 h12 v10 q8 4 8 16 v50 q0 8 -8 8 h-12 q-8 0 -8 -8 v-50 q0 -12 8 -16 z"
              fill="url(#glassGrad)"
              stroke="#9AA3B5"
              strokeWidth="1"
            />
            <rect x="12" y="-6" width="8" height="8" rx="1.5" fill="#F05A22" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function GridPattern({ className = "" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path
            d="M 34 0 L 0 0 0 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// A small accent mark used in headings
export function AccentBar({ className = "" }) {
  return <span className={`block h-1 w-12 bg-flame ${className}`} aria-hidden="true" />;
}
