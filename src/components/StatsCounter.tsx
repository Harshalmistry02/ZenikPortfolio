import React, { useState, useEffect, useRef } from "react";
import type { StatItem } from "../types";

interface StatsCounterProps {
  stats: StatItem[];
  dark?: boolean;
  variant?: "default" | "community";
}

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setDisplay(target);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black font-mono tracking-tighter">
      {isNaN(target) ? value : display}
      {suffix}
    </div>
  );
}

function CommunityStatsVariant({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#00bfa6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none z-0" />

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pb-4">
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#00BFA6] font-mono">
              Trusted Worldwide
            </span>
          </div>

          {/* Main heading */}
          <h2 className="font-script text-5xl sm:text-6xl font-bold text-[#0D0F14] leading-tight mb-6">
            Trusted by teams across 12+ countries
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg font-normal max-w-xl mx-auto">
            who grow their business with Zenik
          </p>

          {/* Additional stats row */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16 relative z-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-black text-[#00BFA6] font-mono">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsCounter({ stats, dark = false, variant = "default" }: StatsCounterProps) {
  if (variant === "community") {
    return <CommunityStatsVariant stats={stats} />;
  }

  return (
    <section className={`py-8 relative ${dark ? "" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`${dark
              ? "bg-[#0D0F14] border-gray-800"
              : "bg-white border border-gray-100"
            } rounded-[24px] py-11 px-6 sm:px-8 md:px-12 relative z-10`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100/20 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1.5 p-2 lg:p-0 first:pt-0 lg:first:pt-0">
                <div className={idx % 2 === 0 ? "text-[#00BFA6]" : dark ? "text-white" : "text-[#0D0F14]"}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-[10px] tracking-wider uppercase font-extrabold ${dark ? "text-gray-500" : "text-gray-400"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
