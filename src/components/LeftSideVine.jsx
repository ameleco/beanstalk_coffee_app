// src/components/LeftSideVine.jsx
export default function LeftSideVine() {
  const LEAF_W = 66; // approx max-x of the leaf blade path

  return (
    <svg
      className="absolute left-0 top-0 h-[100svh] w-[170px] pointer-events-none opacity-90 z-0"
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 120 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* =========================
         MAIN VINES (SEGMENTED + INTERLEAVED)
         ========================= */}
      <path
        pathLength="100"
        style={{ "--d": "0ms" }}
        d="M52 1200 C 28 1120, 78 1100, 52 1000"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "160ms" }}
        d="M60 1200 C 86 1120, 36 1100, 60 1000"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "320ms" }}
        d="M52 1000 C 26 900, 80 880, 52 800"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "480ms" }}
        d="M60 1000 C 86 900, 34 880, 60 800"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "640ms" }}
        d="M52 800 C 28 720, 78 700, 52 600"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "800ms" }}
        d="M60 800 C 84 720, 38 700, 60 600"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "960ms" }}
        d="M52 600 C 26 520, 80 500, 52 400"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "1120ms" }}
        d="M60 600 C 86 520, 34 500, 60 400"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "1280ms" }}
        d="M52 400 C 28 320, 78 300, 52 200"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "1440ms" }}
        d="M60 400 C 84 320, 38 300, 60 200"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "1600ms" }}
        d="M52 200 C 30 130, 76 120, 52 60"
        stroke="#4e7a47"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />
      <path
        pathLength="100"
        style={{ "--d": "1760ms" }}
        d="M60 200 C 82 130, 40 120, 60 60"
        stroke="#3b5d35"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="vineSeg"
      />

      {/* =========================
         TENDRILS (5 total: 3R, 2L)
         ========================= */}

      {/* R tendril 1 */}
      <path
        pathLength="100"
        style={{ "--td": "620ms" }}
        d="M56 1010 L 66 1008"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        className="tendril"
      />
      <path
        pathLength="100"
        style={{ "--td": "680ms" }}
        d="M66 1008
           C 92 996, 94 966, 70 968
           C 48 972, 52 998, 74 992
           C 90 988, 88 978, 72 980"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="tendril"
      />

      {/* L tendril 1 */}
      <path
        pathLength="100"
        style={{ "--td": "900ms" }}
        d="M56 860 L 46 858"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        className="tendril"
      />
      <path
        pathLength="100"
        style={{ "--td": "960ms" }}
        d="M46 858
           C 20 850, 20 820, 44 822
           C 66 824, 64 850, 44 848
           C 30 846, 32 834, 46 836"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="tendril"
      />

      {/* R tendril 2 */}
      <path
        pathLength="100"
        style={{ "--td": "1140ms" }}
        d="M56 680 L 66 678"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        className="tendril"
      />
      <path
        pathLength="100"
        style={{ "--td": "1200ms" }}
        d="M66 678
           C 92 668, 92 636, 66 638
           C 48 640, 52 664, 74 660
           C 88 656, 86 646, 72 648"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="tendril"
      />

      {/* L tendril 2 */}
      <path
        pathLength="100"
        style={{ "--td": "1380ms" }}
        d="M56 500 L 46 498"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        className="tendril"
      />
      <path
        pathLength="100"
        style={{ "--td": "1440ms" }}
        d="M46 498
           C 20 490, 20 460, 46 464
           C 66 468, 62 490, 44 488
           C 30 486, 32 474, 46 476"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="tendril"
      />

      {/* R tendril 3 */}
      <path
        pathLength="100"
        style={{ "--td": "1600ms" }}
        d="M56 320 L 66 318"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        className="tendril"
      />
      <path
        pathLength="100"
        style={{ "--td": "1660ms" }}
        d="M66 318
           C 92 306, 90 276, 66 280
           C 48 284, 50 306, 70 302
           C 86 298, 84 290, 70 292"
        stroke="#2f4f2b"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="tendril"
      />

      {/* =========================
         LEAVES (7 total: 4R, 3L)
         FIXED: left leaves mirror without swapping attachment point
         by doing: scale(-1,1) translate(-LEAF_W,0)
         ========================= */}

      {/* Right leaf helper */}
      constLeaf();

      {/* R1 */}
      <g transform="translate(46 1020) rotate(-6)">
        <g className="leaf" style={{ "--ld": "520ms", "--flip": "18deg", "--out": "14px" }}>
          <LeafFill fill="#4e7a47" rib="#2f4f2b" />
        </g>
      </g>

      {/* R2 */}
      <g transform="translate(46 920) rotate(-6)">
        <g className="leaf" style={{ "--ld": "700ms", "--flip": "18deg", "--out": "14px" }}>
          <LeafFill fill="#3b5d35" rib="#203a1f" />
        </g>
      </g>

      {/* R3 */}
      <g transform="translate(46 760) rotate(-8)">
        <g className="leaf" style={{ "--ld": "980ms", "--flip": "20deg", "--out": "14px" }}>
          <LeafFill fill="#4e7a47" rib="#2f4f2b" />
        </g>
      </g>

      {/* R4 */}
      <g transform="translate(46 420) rotate(-6)">
        <g className="leaf" style={{ "--ld": "1340ms", "--flip": "18deg", "--out": "14px" }}>
          <LeafFill fill="#4e7a47" rib="#2f4f2b" />
        </g>
      </g>

      {/* L1 */}
      <g transform={`translate(58 860) scale(-1 1) translate(${-LEAF_W} 0) rotate(-6)`}>
        <g className="leaf" style={{ "--ld": "820ms", "--flip": "18deg", "--out": "14px" }}>
          <LeafFill fill="#4e7a47" rib="#2f4f2b" />
        </g>
      </g>

      {/* L2 */}
      <g transform={`translate(58 600) scale(-1 1) translate(${-LEAF_W} 0) rotate(-8)`}>
        <g className="leaf" style={{ "--ld": "1160ms", "--flip": "20deg", "--out": "14px" }}>
          <LeafFill fill="#3b5d35" rib="#203a1f" />
        </g>
      </g>

      {/* L3 */}
      <g transform={`translate(58 300) scale(-1 1) translate(${-LEAF_W} 0) rotate(-6)`}>
        <g className="leaf" style={{ "--ld": "1540ms", "--flip": "18deg", "--out": "14px" }}>
          <LeafFill fill="#3b5d35" rib="#203a1f" />
        </g>
      </g>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .vineSeg, .tendril, .leaf { animation: none !important; }
          .vineSeg, .tendril { stroke-dashoffset: 0 !important; opacity: 1 !important; }
          .leaf { opacity: 1 !important; transform: none !important; }
        }

        .vineSeg, .tendril { opacity: 0; }

        .vineSeg {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: vineDraw 360ms ease-out forwards;
          animation-delay: var(--d);
        }
        @keyframes vineDraw {
          0% { opacity: 0; stroke-dashoffset: 100; }
          1% { opacity: 1; }
          100% { opacity: 1; stroke-dashoffset: 0; }
        }

        .tendril {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: tendrilDraw 560ms ease-out forwards;
          animation-delay: var(--td);
        }
        @keyframes tendrilDraw {
          0% { opacity: 0; stroke-dashoffset: 100; }
          1% { opacity: 1; }
          100% { opacity: 1; stroke-dashoffset: 0; }
        }

        .leaf {
          opacity: 0;
          transform-origin: 0px 10px;
          transform: translateX(0px) scaleX(0.05) scaleY(0.05) rotate(0deg);
          animation: leafBlade 760ms cubic-bezier(.2,.9,.2,1) forwards;
          animation-delay: var(--ld);
        }
        @keyframes leafBlade {
          0%   { opacity: 0; transform: translateX(0px) scaleX(0.05) scaleY(0.05) rotate(0deg); }
          30%  { opacity: 1; transform: translateX(calc(var(--out) * 0.55)) scaleX(0.85) scaleY(0.75) rotate(6deg); }
          60%  { opacity: 1; transform: translateX(var(--out)) scaleX(1.05) scaleY(1.0) rotate(10deg); }
          85%  { opacity: 1; transform: translateX(var(--out)) scaleX(1.0) scaleY(1.0) rotate(var(--flip)); }
          100% { opacity: 1; transform: translateX(var(--out)) scaleX(1.0) scaleY(1.0) rotate(calc(var(--flip) * 0.85)); }
        }
      `}</style>
    </svg>
  );
}

/* JSX helper component inside same file */
function LeafFill({ fill, rib }) {
  return (
    <>
      <path
        d="M0 10 C 18 -8, 56 -4, 66 16 C 48 32, 18 30, 0 10 Z"
        fill={fill}
      />
      <path
        d="M6 12 C 24 4, 44 8, 58 16"
        stroke={rib}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </>
  );
}







