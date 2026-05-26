import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "../types";

interface FaqAccordionProps {
  faqs: FAQ[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="w-full">
      {faqs.map((faq, idx) => {
        const isOpen = activeIdx === idx;
        return (
          <div
            key={idx}
            className="border-b border-gray-200"
          >
            <button
              onClick={() => setActiveIdx(isOpen ? null : idx)}
              className="w-full text-left py-6 flex items-center justify-between font-bold text-lg text-gray-900 focus:outline-none cursor-pointer transition-colors hover:text-[#00BFA6]"
              aria-expanded={isOpen}
              aria-label={faq.question}
            >
              <span className="pr-8 leading-tight">{faq.question}</span>
              <span className="text-gray-400 shrink-0 hover:text-[#00BFA6] transition-colors">
                {isOpen ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-base leading-relaxed text-gray-600 font-normal">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
