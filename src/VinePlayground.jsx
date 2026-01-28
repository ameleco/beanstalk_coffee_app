// src/VinePlayground.jsx
import { useState } from "react";
import LeftSideVine from "./components/LeftSideVine";

export default function VinePlayground() {
  const [seed, setSeed] = useState(0);

  return (
    <div className="min-h-[1400px] bg-[#f8f5f1] relative overflow-hidden">
      {/* changing key forces remount -> animations replay */}
      <LeftSideVine key={seed} />

      <div className="pl-48 pr-6 pt-10 text-[#2f2b26]">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Vine Playground</h1>

          <button
            onClick={() => setSeed((s) => s + 1)}
            className="px-3 py-1 rounded-lg bg-white shadow text-sm"
          >
            Replay
          </button>

          <a href="/" className="text-sm underline text-gray-500">
            Back to Home
          </a>
        </div>

        <p className="mt-2 text-gray-600 max-w-md">
          Tweak paths/timing in{" "}
          <code className="bg-white px-1 rounded">LeftSideVine.jsx</code>.
        </p>
      </div>
    </div>
  );
}

