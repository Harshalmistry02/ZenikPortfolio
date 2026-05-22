import React from "react";

const logos = [
  { name: "airbnb", font: "font-sans tracking-tight font-extrabold text-red-400" },
  { name: "checkout.com", font: "font-mono tracking-widest text-[#00BFA6]" },
  { name: "monzo", font: "font-sans font-bold text-yellow-500 italic" },
  { name: "deliveroo", font: "font-sans font-extrabold text-[#00BFA6]" },
  { name: "Revolut", font: "font-sans tracking-tight font-black text-gray-800" },
  { name: "octopus energy", font: "font-sans font-medium text-pink-500 tracking-tighter" },
  { name: "Brewdog", font: "font-mono tracking-normal font-black uppercase text-cyan-500" },
];

export function Marquee() {
  // Duplicate list to make scrolling loop infinitely and seamlessly
  const marqueeItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-8 overflow-hidden bg-gray-50 border-y border-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 shrink-0 font-medium text-xs text-uppercase tracking-wider text-gray-400 mr-8 hidden lg:block">
        TRUSTED BY GLOBAL TEAMS:
      </div>
      <div className="relative w-full flex items-center overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap space-x-12 items-center">
          {marqueeItems.map((logo, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-400 font-bold hover:text-gray-900 transition-colors duration-200 cursor-default flex-shrink-0 text-lg md:text-xl"
            >
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <span className={logo.font}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
