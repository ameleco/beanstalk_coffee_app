// src/components/LeftSideVine.jsx
export default function LeftSideVine() {
  const LEAF_W = 66;

  const vineSegments = [
    ["M52 1200 C 28 1120, 78 1100, 52 1000", "#4e7a47", 12, 0],
    ["M60 1200 C 86 1120, 36 1100, 60 1000", "#3b5d35", 10, 160],
    ["M52 1000 C 26 900, 80 880, 52 800", "#4e7a47", 12, 320],
    ["M60 1000 C 86 900, 34 880, 60 800", "#3b5d35", 10, 480],
    ["M52 800 C 28 720, 78 700, 52 600", "#4e7a47", 12, 640],
    ["M60 800 C 84 720, 38 700, 60 600", "#3b5d35", 10, 800],
    ["M52 600 C 26 520, 80 500, 52 400", "#4e7a47", 12, 960],
    ["M60 600 C 86 520, 34 500, 60 400", "#3b5d35", 10, 1120],
    ["M52 400 C 28 320, 78 300, 52 200", "#4e7a47", 12, 1280],
    ["M60 400 C 84 320, 38 300, 60 200", "#3b5d35", 10, 1440],
    ["M52 200 C 30 130, 76 120, 52 60", "#4e7a47", 12, 1600],
    ["M60 200 C 82 130, 40 120, 60 60", "#3b5d35", 10, 1760],
  ];

  const rightLeaves = [
    { y: 1020, delay: 520, flipDeg: 18, outPx: 14, fill: "#4e7a47", rib: "#2f4f2b", rot: -6 },
    { y: 920, delay: 700, flipDeg: 18, outPx: 14, fill: "#3b5d35", rib: "#203a1f", rot: -6 },
    { y: 760, delay: 980, flipDeg: 20, outPx: 14, fill: "#4e7a47", rib: "#2f4f2b", rot: -8 },
    { y: 420, delay: 1340, flipDeg: 18, outPx: 14, fill: "#4e7a47", rib: "#2f4f2b", rot: -6 },
  ];

  const leftLeaves = [
    { y: 860, delay: 820, flipDeg: 18, outPx: 14, fill: "#4e7a47", rib: "#2f4f2b", rot: -6 },
    { y: 600, delay: 1160, flipDeg: 20, outPx: 14, fill: "#3b5d35", rib: "#203a1f", rot: -8 },
    { y: 300, delay: 1540, flipDeg: 18, outPx: 14, fill: "#3b5d35", rib: "#203a1f", rot: -6 },
  ];

  return (
    <svg
  className="h-[100svh] w-[170px] opacity-90"
  preserveAspectRatio="xMinYMin slice"
  viewBox="0 0 120 1200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
    >


      {/* MAIN VINES */}
      {vineSegments.map(([d, stroke, w, delayMs], i) => (
        <path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth={w}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="100"
          className="vineSeg"
          style={{ animationDelay: `${delayMs}ms` }}
        />
      ))}

      {/* RIGHT LEAVES */}
      {rightLeaves.map((leaf, i) => (
        <g key={`r-${i}`} transform={`translate(46 ${leaf.y}) rotate(${leaf.rot})`}>
          <g
            className="leaf"
            style={{
              animationDelay: `${leaf.delay}ms`,
              // bake parameters into standard CSS props (no CSS variables)
              transformOrigin: "0px 10px",
            }}
          >
            <LeafFill fill={leaf.fill} rib={leaf.rib} flipDeg={leaf.flipDeg} outPx={leaf.outPx} />
          </g>
        </g>
      ))}

      {/* LEFT LEAVES (mirrored) */}
      {leftLeaves.map((leaf, i) => (
        <g
          key={`l-${i}`}
          transform={`translate(58 ${leaf.y}) scale(-1 1) translate(${-LEAF_W} 0) rotate(${leaf.rot})`}
        >
          <g
            className="leaf"
            style={{
              animationDelay: `${leaf.delay}ms`,
              transformOrigin: "0px 10px",
            }}
          >
            <LeafFill fill={leaf.fill} rib={leaf.rib} flipDeg={leaf.flipDeg} outPx={leaf.outPx} />
          </g>
        </g>
      ))}

      {/* Styles (no CSS variables used) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .vineSeg, .leaf { animation: none !important; opacity: 1 !important; transform: none !important; }
          .vineSeg { stroke-dashoffset: 0 !important; }
        }

        .vineSeg {
          opacity: 0;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: vineDraw 360ms ease-out forwards;
        }

        @keyframes vineDraw {
          0%   { opacity: 0; stroke-dashoffset: 100; }
          1%   { opacity: 1; }
          100% { opacity: 1; stroke-dashoffset: 0; }
        }

        .leaf {
          opacity: 0;
          transform: translateX(0px) scaleX(0.05) scaleY(0.05) rotate(0deg);
          animation: leafBlade 760ms cubic-bezier(.2,.9,.2,1) forwards;
        }

        @keyframes leafBlade {
          0%   { opacity: 0; transform: translateX(0px) scaleX(0.05) scaleY(0.05) rotate(0deg); }
          30%  { opacity: 1; transform: translateX(7px) scaleX(0.85) scaleY(0.75) rotate(6deg); }
          60%  { opacity: 1; transform: translateX(14px) scaleX(1.05) scaleY(1.0) rotate(10deg); }
          85%  { opacity: 1; transform: translateX(14px) scaleX(1.0) scaleY(1.0) rotate(16deg); }
          100% { opacity: 1; transform: translateX(14px) scaleX(1.0) scaleY(1.0) rotate(14deg); }
        }
      `}</style>
    </svg>
  );
}

/**
 * LeafFill:
 * We “bake” flip/out visually by using a nested group transform (standard SVG transform),
 * rather than CSS custom properties.
 */
function LeafFill({ fill, rib, flipDeg = 18, outPx = 14 }) {
  return (
    <g transform={`translate(${outPx} 0) rotate(${flipDeg})`}>
      <path d="M0 10 C 18 -8, 56 -4, 66 16 C 48 32, 18 30, 0 10 Z" fill={fill} />
      <path
        d="M6 12 C 24 4, 44 8, 58 16"
        stroke={rib}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </g>
  );
}

  