// src/components/CloudCap.jsx

export function CloudCap({ height = 180 }) {
  return (
    <div
      className="absolute left-0 top-0 w-full pointer-events-none z-20"
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox="0 0 390 180"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 105
             C 5 75, 45 55, 80 72
             C 95 40, 150 38, 175 65
             C 210 45, 270 52, 262 95
             C 305 88, 350 110, 328 145
             L 0 180 L 0 120
             C 0 110, 6 105, 10 105 Z"
          fill="#f2f2ee"
        />
        <path
          d="M28 112
             C 18 84, 62 62, 102 80
             C 118 44, 190 44, 212 78
             C 250 58, 310 68, 300 112
             C 350 102, 385 128, 352 160
             L 0 180 L 0 132
             C 0 120, 18 112, 28 112 Z"
          fill="#ffffff"
        />
        <path
          d="M0 128
             C 40 116, 82 126, 120 124
             C 165 122, 210 110, 250 118
             C 300 128, 330 122, 390 112
             L 390 180 L 0 180 Z"
          fill="#ffffff"
          opacity="0.92"
        />
        <path
          d="M0 145
             C 55 165, 95 150, 140 162
             C 185 174, 235 176, 280 162
             C 320 150, 350 168, 390 150
             L 390 180 L 0 180 Z"
          fill="#ecece6"
          opacity="0.80"
        />
      </svg>
    </div>
  );
}

export default CloudCap;
