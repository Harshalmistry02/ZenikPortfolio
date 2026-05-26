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
        <div className="rounded-3xl overflow-hidden bg-[#F3F4F6] p-8 md:p-12 border border-gray-200 flex flex-col items-center justify-center text-center gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-script text-5xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]">
              Have a project in mind?
            </h2>
            
            <p className="text-gray-600 font-medium text-base md:text-lg pt-2">
              Let's build something amazing together. Partner with our UK & USA teams.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              to={linkTo}
              className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-300 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 group shrink-0"
            >
              <span>{buttonText}</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+442079460958" className="text-sm text-gray-500 hover:text-[#00BFA6] transition-colors">
              or call us at +44 20 7946 0958
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
