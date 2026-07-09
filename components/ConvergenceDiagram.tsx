export default function ConvergenceDiagram() {

  const cx = 360;
  const cy = 230;
  const r = 160;

  // Six phases placed evenly around the ring, clockwise from the top.
  // angle: SVG-space degrees (0 = 3 o'clock, -90 = top)
  // t: fraction of the loop (0..1) used to time the orbiting node and pulses
  const phases = [
    { n: "01", label: "Plan", angle: -90, t: 0 / 6, x: cx, y: cy - r, anchor: "middle", lx: 0, ly: -26 },
    { n: "02", label: "Design", angle: -30, t: 1 / 6, x: 498.6, y: 150, anchor: "start", lx: 34, ly: -20 },
    { n: "03", label: "Develop", angle: 30, t: 2 / 6, x: 498.6, y: 310, anchor: "start", lx: 34, ly: 28 },
    { n: "04", label: "Test", angle: 90, t: 3 / 6, x: cx, y: cy + r, anchor: "middle", lx: 0, ly: 42 },
    { n: "05", label: "Deploy", angle: 150, t: 4 / 6, x: 221.4, y: 310, anchor: "end", lx: -34, ly: 28 },
    { n: "06", label: "Maintain", angle: 210, t: 5 / 6, x: 221.4, y: 150, anchor: "end", lx: -34, ly: -20 },
  ] as const;

  const ringPath = `M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`;
  const orbitDuration = 12; // seconds per full cycle

  return (
      <svg
          viewBox="0 0 720 460"
          className="w-full max-w-2xl"
          role="img"
          aria-label="A circular diagram of the software development lifecycle: plan, design, develop, test, deploy, and maintain, feeding back into plan in a continuous loop"
      >
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#DDE2E8" strokeWidth="1" />
          </pattern>
          <filter id="cometGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
        .sdlc-ring {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: sdlc-ring-draw 1.8s ease-out forwards;
        }
        @keyframes sdlc-ring-draw {
          to { stroke-dashoffset: 0; }
        }
        .sdlc-node {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: sdlc-node-pop 0.5s ease-out forwards;
        }
        @keyframes sdlc-node-pop {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 1; transform: scale(1); }
        }
        .sdlc-label {
          opacity: 0;
          animation: sdlc-label-in 0.5s ease-out forwards;
        }
        @keyframes sdlc-label-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .sdlc-orbit-group {
          offset-path: path("${ringPath}");
          offset-rotate: 0deg;
          animation: sdlc-orbit ${orbitDuration}s linear infinite;
        }
        @keyframes sdlc-orbit {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        .sdlc-node-pulse {
          animation: sdlc-node-pulse ${orbitDuration}s ease-in-out infinite;
        }
        @keyframes sdlc-node-pulse {
          0%, 4%, 100% { r: 7; filter: none; }
          2% { r: 9.5; filter: drop-shadow(0 0 6px rgba(184,134,59,0.8)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sdlc-ring, .sdlc-node, .sdlc-label { animation: none; opacity: 1; stroke-dashoffset: 0; }
          .sdlc-orbit-group, .sdlc-node-pulse { animation: none; }
        }
      `}</style>

        <rect width="720" height="460" fill="url(#grid)" opacity="0.7" />

        {/* the recurring loop connecting every phase */}
        <path
            d={ringPath}
            fill="none"
            stroke="#14315C"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength={1000}
            className="sdlc-ring"
            opacity="0.5"
        />

        {/* comet: a trailing highlight that continuously travels the loop,
          representing the cycle's continuous iteration */}
        {[0, -0.25, -0.5, -0.75].map((delay, i) => (
            <g
                key={i}
                className="sdlc-orbit-group"
                style={{ animationDelay: `${delay * orbitDuration}s` }}
            >
              <circle
                  r={5 - i * 1}
                  fill="#B8863B"
                  opacity={1 - i * 0.22}
                  filter={i === 0 ? "url(#cometGlow)" : undefined}
              />
            </g>
        ))}

        {/* phase nodes and labels */}
        {phases.map((p, i) => (
            <g key={p.label}>
              <circle
                  cx={p.x}
                  cy={p.y}
                  r="7"
                  fill="#FAFAF9"
                  stroke="#14315C"
                  strokeWidth="2"
                  className="sdlc-node sdlc-node-pulse"
                  style={{
                    animationDelay: `${0.15 * i}s, ${p.t * orbitDuration}s`,
                    animationName: "sdlc-node-pop, sdlc-node-pulse",
                    animationDuration: `0.5s, ${orbitDuration}s`,
                    animationTimingFunction: "ease-out, ease-in-out",
                    animationIterationCount: "1, infinite",
                    animationFillMode: "forwards, none",
                  }}
              />
              <text
                  x={p.x + (p.lx || 0)}
                  y={p.y + (p.ly || 0)}
                  textAnchor={p.anchor}
                  className="fill-ink font-mono text-[14px] uppercase tracking-widest sdlc-label"
                  style={{ animationDelay: `${0.15 * i + 0.2}s` }}
              >
                <tspan className="fill-insight">{p.n}</tspan> {p.label}
              </text>
            </g>
        ))}

        {/* centre marker */}
        <g
            transform={`translate(${cx}, ${cy})`}
            className="sdlc-label"
            style={{ animationDelay: "1.1s" }}
        >
          <text
              textAnchor="middle"
              y="-4"
              className="fill-ink font-mono text-[18px] uppercase tracking-[0.2em]"
          >
            Your Project
          </text>
          <text
              textAnchor="middle"
              y="16"
              className="fill-insight font-mono text-[12px] uppercase tracking-widest"
          >
            At The Center
          </text>
        </g>
      </svg>
  );
}