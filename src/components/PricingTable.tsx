"use client";

import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PricingTier } from "../types";

interface PricingTableProps {
  tiers: PricingTier[];
}

export function PricingTable({ tiers }: PricingTableProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="space-y-10">
      {/* Monthly/Annual Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-full p-1 inline-flex relative">
          <button
            onClick={() => setAnnual(false)}
            className={`w-28 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
              !annual ? "bg-white text-[#0D0F14] shadow-sm" : "text-gray-500 hover:text-[#0D0F14]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`w-40 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
              annual ? "bg-white text-[#0D0F14] shadow-sm" : "text-gray-500 hover:text-[#0D0F14]"
            }`}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {tiers.map((tier) => {
          const price = annual ? tier.annualPrice : tier.monthlyPrice;
          const isCustom = price === "Custom";

          return (
            <div
              key={tier.name}
              className={`rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "bg-[#00BFA6] text-white border border-[#00BFA6] shadow-lg"
                  : "bg-white border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.05)]"
              }`}
            >
              <div className="space-y-6">
                {tier.highlighted && (
                  <div className="inline-block bg-[#0D0F14] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
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
                      tier.highlighted ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-black font-mono tracking-tight ${
                      tier.highlighted ? "text-white" : "text-[#0D0F14]"
                    }`}
                  >
                    {price}
                  </span>
                  {!isCustom && (
                    <span
                      className={`text-xs font-medium ${
                        tier.highlighted ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      /project
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px ${
                    tier.highlighted ? "bg-white/20" : "bg-gray-100"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        strokeWidth={4}
                        className={`shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-[#0D0F14]" : "text-[#00BFA6]"
                        }`}
                      />
                      <span
                        className={`text-xs leading-relaxed font-medium ${
                          tier.highlighted ? "text-white" : "text-gray-600"
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
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black transition-all duration-300 group ${
                    tier.highlighted
                      ? "bg-[#0D0F14] text-white hover:bg-white hover:text-[#0D0F14]"
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
