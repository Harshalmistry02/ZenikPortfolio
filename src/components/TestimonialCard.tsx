import React from "react";
import { Star } from "lucide-react";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  key?: React.Key;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-[28px] p-8 flex flex-col justify-between space-y-6 hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.05)] transition-all duration-300 hover:-translate-y-1 group">
      {/* Star Ratings */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < testimonial.rating
                ? "fill-[#F4A24D] text-[#F4A24D]"
                : "fill-gray-100 text-gray-200"
            }
          />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1">
        <p className="text-gray-600 italic text-sm leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-100"
        />
        <div>
          <h4 className="font-extrabold text-[#0D0F14] text-sm leading-none">
            {testimonial.author}
          </h4>
          <p className="text-[11px] text-gray-400 mt-1 font-medium">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
