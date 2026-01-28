// src/HomePage.jsx
import { useEffect } from "react";
import CloudCap from "./components/CloudCap.jsx";
import LogoHeader from "./components/LogoHeader.jsx";
import LeftSideVine from "./components/LeftSideVine.jsx";

export default function HomePage() {
  useEffect(() => {
    // Optional: keep smooth scrolling (can remove later if it conflicts with scroll-to-top fixes)
    document.body.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f1] text-[#2f2b26] font-sans pb-24 relative overflow-x-hidden">
      {/* =============================
          BACKGROUND: vine + planter
          ============================= */}
       <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
        <div className="absolute left-0 bottom-0">
          {/* Vine */}
          <div className="absolute left-35 bottom-96">
            <LeftSideVine />
          </div>

          {/* Planter */}
          <div className="absolute left-4 bottom-20 w-[110px] h-[90px]">
            {/* Rim */}
            <div
              className="absolute top-0 left-0 w-full h-[22px] rounded-[14px] bg-[#c96f3b]"
              style={{ boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.12)" }}
            />
            {/* Body */}
            <div
              className="absolute top-[14px] left-[6px] w-[calc(100%-12px)] h-[68px] rounded-b-[18px] bg-gradient-to-b from-[#d97b43] to-[#b85f2f]"
              style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
            />
          </div>
        </div>
      </div>

      {/* =============================
          HEADER
          ============================= */}
      <CloudCap height={170} />

      <div className="relative z-20">
        <LogoHeader />
      </div>

      {/* =============================
          MAIN CONTENT
          ============================= */}
      <div className="relative z-10 pl-10 pt-28">
        {/* Hero */}
        <div className="text-center py-6 px-4">
          <h2 className="text-2xl mt-4 font-bold">Howdy, Alex!</h2>
          <p className="text-gray-600">Ready for your favorite drink?</p>
          <button className="mt-4 bg-[#4e7a47] hover:bg-[#3b5d35] text-white rounded-full px-6 py-2 text-lg shadow-md">
            ☕ Order Now
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-around my-6 px-4">
          {[
            { emoji: "☕", label: "Coffee" },
            { emoji: "🍧", label: "Sno" },
            { emoji: "🎁", label: "Rewards" },
            { emoji: "📍", label: "Locations" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-2xl mb-1">{item.emoji}</span>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className="px-4 mb-8">
          <h3 className="font-semibold text-lg mb-3">Featured Drinks</h3>
          <div className="grid grid-cols-2 gap-4">
            {["Iced Latte", "Matcha Sno", "Mocha Blast", "Vanilla Bean Sno"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl shadow-md p-2 text-center"
                >
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.xwMZA9Jlr21MyaybK9DQRAHaE8?cb=12&pid=Api"
                    alt={item}
                    className="rounded-xl h-28 w-full object-cover"
                  />
                  <p className="mt-2 font-semibold text-sm">{item}</p>
                  <p className="text-xs text-gray-500">$4.25</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* =============================
          BOTTOM NAV
          ============================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-inner z-40">
        {[
          { emoji: "🏠", label: "Home" },
          { emoji: "🎁", label: "Rewards" },
          { emoji: "👤", label: "Profile" },
        ].map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center text-[#4e7a47]"
          >
            <span className="text-lg">{item.emoji}</span>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

