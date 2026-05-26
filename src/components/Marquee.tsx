import React from "react";

const logos = [
  {
    name: "monzo",
    icon: <span className="w-5 h-5 rounded-md bg-[#FF3464] flex items-center justify-center text-white font-black text-[10px] shrink-0">M</span>,
    style: "font-sans font-black tracking-tight text-[#1C2024] text-[15px]",
  },
  {
    name: "checkout.com",
    icon: null,
    style: "font-mono tracking-widest text-[#1C2024] font-semibold text-[13px]",
  },
  {
    name: "airbnb",
    icon: (
      <svg className="w-4 h-4 text-[#FF5A5F] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 11H7v-1c0-2.67 3.33-4 5-4s5 1.33 5 4v1z"/>
      </svg>
    ),
    style: "font-sans font-black tracking-tight text-[#1C2024] text-[15px]",
  },
  {
    name: "Revolut",
    icon: null,
    style: "font-sans font-black tracking-tight text-[#1C2024] text-[15px]",
  },
  {
    name: "deliveroo",
    icon: (
      <svg className="w-4 h-4 text-[#00CCBC] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
    style: "font-sans font-extrabold tracking-tight text-[#1C2024] text-[15px]",
  },
  {
    name: "octopus energy",
    icon: (
      <svg className="w-4 h-4 text-[#EC008C] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" opacity="0.2"/>
        <circle cx="12" cy="12" r="5" opacity="0.8"/>
      </svg>
    ),
    style: "font-sans font-bold tracking-tight text-[#1C2024] text-[14px]",
  },
  {
    name: "BREWDOG",
    icon: null,
    style: "font-mono font-black uppercase tracking-widest text-[#1C2024] text-[13px]",
  },
  {
    name: "TransferWise",
    icon: (
      <span className="w-5 h-5 rounded-full bg-[#00B9FF] flex items-center justify-center text-white font-black text-[9px] shrink-0">T</span>
    ),
    style: "font-sans font-bold tracking-tight text-[#1C2024] text-[14px]",
  },
  {
    name: "Stripe",
    icon: (
      <span className="w-5 h-5 rounded-md bg-[#635BFF] flex items-center justify-center text-white font-black text-[9px] shrink-0">S</span>
    ),
    style: "font-sans font-black tracking-tight text-[#1C2024] text-[15px]",
  },
  {
    name: "Shopify",
    icon: (
      <span className="w-5 h-5 rounded-md bg-[#96BF48] flex items-center justify-center text-white font-black text-[9px] shrink-0">S</span>
    ),
    style: "font-sans font-bold tracking-tight text-[#1C2024] text-[14px]",
  },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export function Marquee() {
  return (
    <div className="w-full my-8">
      {/* Outer wrapper with fade edges */}
      <div className="relative w-full overflow-hidden border-y border-gray-200 bg-white py-5"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Scrolling track */}
        <div
          className="flex items-center gap-16 w-max"
          style={{ animation: "marquee-scroll 35s linear infinite" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-default"
            >
              {logo.icon}
              <span className={logo.style}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
