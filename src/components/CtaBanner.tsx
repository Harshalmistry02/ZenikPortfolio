import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  buttonText?: string;
  linkTo?: string;
}

export function CtaBanner({ buttonText = "Start a Project", linkTo = "/contact" }: CtaBannerProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-50/70 via-rose-50/50 to-teal-50/20 p-8 md:p-12 border border-teal-50/50 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          
          {/* Decorative Sparkle/Squiggle behind */}
          <div className="absolute top-4 left-4 text-teal-300 opacity-40">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904z" />
            </svg>
          </div>

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0F14] tracking-tight">
                Have a project in mind?
              </h2>
              {/* Warm handwritten accent with orange sketch underline */}
              <div className="absolute -bottom-2.5 left-0 w-full">
                <svg className="w-full h-3 text-[#F4A24D]" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M5 9c50-3.5 105-6 160-5.5s110 3.5 130 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <p className="text-gray-600 font-medium text-base md:text-lg pt-2">
              Let's build something amazing together. Partner with our UK & USA teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Link
              to={linkTo}
              className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-300 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 group shrink-0"
            >
              <span>{buttonText}</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* SVG feedback arrow */}
            <div className="hidden lg:block text-[#F4A24D] -rotate-12 translate-x-4">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12c12 2 24 10 26 22M24 30l10 4-1-11" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
