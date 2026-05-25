import React from "react";
import { ScriptHeading } from "./ScriptHeading";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  variant?: "default" | "script";
  highlight?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  variant = "script",
  highlight,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl mb-16 space-y-4 ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      <span className="text-[10px] uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-mono inline-block">
        // {badge} //
      </span>

      {variant === "script" ? (
        <ScriptHeading
          as="h2"
          text={title}
          highlight={highlight}
          className={`font-script text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.98] mt-4 ${
            light ? "text-white" : "text-[#0D0F14]"
          }`}
        />
      ) : (
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mt-4 ${
            light ? "text-white" : "text-[#0D0F14]"
          }`}
        >
          {title}
        </h2>
      )}

      <div
        className={`w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4 ${
          centered ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed mt-4 max-w-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
