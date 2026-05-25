import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PricingTier } from "../types";

interface PricingTableProps {
  tiers: PricingTier[];
}

export function PricingTable({ tiers }: PricingTableProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="space-y-10">
      {/* Monthly/Annual Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span
          className={`text-sm font-bold transition-colors ${
            !annual ? "text-[#0D0F14]" : "text-gray-400"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00BFA6]/30"
          style={{ backgroundColor: annual ? "#00BFA6" : undefined }}
          aria-label="Toggle annual pricing"
        >
          <span
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              annual ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span
          className={`text-sm font-bold transition-colors ${
            annual ? "text-[#0D0F14]" : "text-gray-400"
          }`}
        >
          Annual
        </span>
        {annual && (
          <span className="text-[10px] font-bold bg-teal-50 text-[#00BFA6] px-2.5 py-1 rounded-full border border-teal-100">
            SAVE 20%
          </span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((tier) => {
          const price = annual ? tier.annualPrice : tier.monthlyPrice;
          const isCustom = price === "Custom";

          return (
            <div
              key={tier.name}
              className={`relative rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "bg-[#0D0F14] text-white border-2 border-[#00BFA6] shadow-[0_20px_60px_rgba(0,191,166,0.15)]"
                  : "bg-white border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.05)]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00BFA6] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Tier Name */}
                <div>
                  <h3
                    className={`text-lg font-black tracking-tight ${
                      tier.highlighted ? "text-white" : "text-[#0D0F14]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      tier.highlighted ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black font-mono tracking-tight ${
                      tier.highlighted ? "text-[#00BFA6]" : "text-[#0D0F14]"
                    }`}
                  >
                    {price}
                  </span>
                  {!isCustom && (
                    <span
                      className={`text-xs font-medium ${
                        tier.highlighted ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      /project
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px ${
                    tier.highlighted ? "bg-gray-700" : "bg-gray-100"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div
                        className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.highlighted
                            ? "bg-[#00BFA6]/20 text-[#00BFA6]"
                            : "bg-teal-50 text-[#00BFA6]"
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span
                        className={`text-xs leading-relaxed ${
                          tier.highlighted ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black transition-all duration-300 group ${
                    tier.highlighted
                      ? "bg-[#00BFA6] text-white hover:bg-white hover:text-[#0D0F14]"
                      : "bg-[#0D0F14] text-white hover:bg-[#00BFA6]"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
