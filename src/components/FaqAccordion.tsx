import React, { useState } from "react";
import type { FAQ } from "../types";

interface FaqAccordionProps {
  faqs: FAQ[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = activeIdx === idx;
        return (
          <div
            key={idx}
            className={`bg-white border rounded-[22px] overflow-hidden shadow-sm transition-all duration-300 ${
              isOpen ? "border-[#00BFA6]" : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <button
              onClick={() => setActiveIdx(isOpen ? null : idx)}
              className="w-full text-left p-6 flex items-center justify-between font-black text-sm text-[#0D0F14] focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-label={faq.question}
            >
              <span className="pr-4 leading-snug">{faq.question}</span>
              <span
                className={`text-[#00BFA6] font-mono text-xl font-black shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-medium">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
