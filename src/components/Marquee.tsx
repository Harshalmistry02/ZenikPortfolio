import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { name: "monzo", font: "font-sans font-black tracking-tighter text-[#1C2024] italic", prefix: "M" },
  { name: "checkout.com", font: "font-mono tracking-widest text-[#1C2024] font-medium text-sm" },
  { name: "airbnb", font: "font-sans font-black tracking-tight text-[#1C2024]" },
  { name: "Revolut", font: "font-sans font-black tracking-tight text-[#1C2024]" },
  { name: "deliveroo", font: "font-sans font-extrabold tracking-tight text-[#1C2024]" },
  { name: "octopus energy", font: "font-sans font-bold tracking-tighter text-[#1C2024]" },
  { name: "Brewdog", font: "font-mono font-black uppercase text-[#1C2024]" },
];

export function Marquee() {
  return (
    <div className="w-full bg-[#FAF9F6] border-y border-gray-100 flex items-center py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Label with Chevron Indicator */}
        <div className="flex items-center space-x-3 shrink-0 select-none">
          <ChevronLeft size={16} className="text-gray-300 md:block hidden animate-pulse" />
          <div className="flex flex-col text-left md:items-start items-center">
            <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] leading-none">
              TRUSTED BY
            </span>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-teal-600 mt-1">
              INNOVATIVE COMPANIES
            </span>
          </div>
        </div>

        {/* Brand Logos Line */}
        <div className="flex-1 overflow-x-auto scrollbar-none flex items-center md:justify-around justify-start gap-10 md:gap-4 px-4 select-none opacity-85 hover:opacity-100 transition-opacity">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-1.5 flex-shrink-0 cursor-default"
            >
              {logo.name === "monzo" && (
                <span className="w-4 h-4 rounded bg-rose-500 text-white font-extrabold text-[9px] flex items-center justify-center font-sans">M</span>
              )}
              {logo.name === "airbnb" && (
                <svg className="w-4 h-4 text-rose-500 fill-current inline-block" viewBox="0 0 24 24">
                  <path d="M12 2C11.5 2 11 2.3 10.7 2.7L2.3 16.1C2 16.6 2 17.2 2.2 17.7C2.4 18.2 2.8 18.6 3.4 18.8L11.1 21.6C11.7 21.8 12.3 21.8 12.9 21.6L20.6 18.8C21.2 18.6 21.6 18.2 21.8 17.7C22 17.2 22 16.6 21.7 16.1L13.3 2.7C13 2.3 12.5 2 12 2Z" opacity="0.15" />
                </svg>
              )}
              {logo.name === "deliveroo" && (
                <span className="text-[#00BFA6] text-xs">🦘</span>
              )}
              {logo.name === "octopus energy" && (
                <span className="text-pink-500 text-xs">🐙</span>
              )}
              <span className={`${logo.font} text-base`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow spacer */}
        <div className="md:block hidden select-none shrink-0">
          <ChevronRight size={16} className="text-gray-300 animate-pulse" />
        </div>

      </div>
    </div>
  );
}

