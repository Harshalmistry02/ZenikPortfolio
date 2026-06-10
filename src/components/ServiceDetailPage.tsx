"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import type { ServiceDetail } from "../data/serviceDetailsData";

interface Props {
  service: ServiceDetail;
}

export function ServiceDetailPage({ service }: Props) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-12 pb-0 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16">
            <div className="space-y-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#00BFA6] hover:text-[#0D0F14] transition-colors"
              >
                ← All Services
              </Link>
              <h1 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-[1.1] tracking-tight">
                {service.title}
              </h1>
              <p className="text-[#00BFA6] font-bold text-lg">{service.tagline}</p>
              <p className="text-gray-500 text-base leading-relaxed max-w-xl">{service.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-all duration-300 font-bold text-sm px-6 py-3 rounded-full shadow-sm"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#0D0F14] text-[#0D0F14] hover:border-[#00BFA6] hover:text-[#00BFA6] transition-all duration-300 font-bold text-sm px-6 py-3 rounded-full"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-[#F3F4F6] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-6">
                Service{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Overview</span>
                  <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                    <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">{service.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#0D0F14] mb-5">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#00BFA6]/10 border border-[#00BFA6]/20 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#00BFA6]" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES & DELIVERABLES */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-12 text-center">
            Features &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Deliverables</span>
              <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#F4A24D" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="bg-[#F3F4F6] rounded-2xl p-6 border border-gray-100 hover:border-[#00BFA6]/30 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#00BFA6]/10 border border-[#00BFA6]/20 flex items-center justify-center mb-4">
                  <span className="text-xs font-black font-mono text-[#00BFA6]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-black text-[#0D0F14] text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-12 text-center">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Process</span>
              <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="relative">
                {i < service.process.length - 1 && (
                  <div className="hidden xl:block absolute top-6 left-full h-px border-t border-dashed border-gray-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="bg-[#F3F4F6] border border-gray-100 rounded-2xl p-5 relative z-10 hover:border-[#00BFA6]/30 hover:shadow-md transition-all">
                  <span className="text-[#00BFA6] font-black font-mono text-2xl block mb-3">{String(p.step).padStart(2, "0")}</span>
                  <h3 className="font-black text-[#0D0F14] text-sm mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-10">
            Technologies &amp; Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.tools.map((tool, i) => (
              <span key={i} className="text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:border-[#00BFA6] hover:text-[#00BFA6] transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#F3F4F6] border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-12 text-center">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Zenik</span>
              <svg className="absolute pointer-events-none text-[#00BFA6]" style={{ inset: "-0.3em -0.5em", width: "calc(100% + 1em)", height: "calc(100% + 0.7em)" }} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              </svg>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whyUs.map((w, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-sm font-black text-[#00BFA6] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black text-[#0D0F14] text-base mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#0D0F14] text-sm pr-4">{faq.question}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0F14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-script text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-base mb-8">
            Let's talk about your project and build something exceptional together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00BFA6] text-white hover:bg-white hover:text-[#0D0F14] transition-all duration-300 font-bold text-sm px-8 py-4 rounded-full shadow-lg"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-white hover:border-[#00BFA6] hover:text-[#00BFA6] transition-all duration-300 font-bold text-sm px-8 py-4 rounded-full"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
