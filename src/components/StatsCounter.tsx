import React, { useState, useEffect, useRef } from "react";
import type { StatItem } from "../types";

interface StatsCounterProps {
  stats: StatItem[];
  dark?: boolean;
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

export function StatsCounter({ stats, dark = false }: StatsCounterProps) {
  return (
    <section className={`py-8 relative ${dark ? "" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`${
            dark
              ? "bg-[#0D0F14] border-gray-800"
              : "bg-white border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
          } border rounded-[28px] py-11 px-6 sm:px-8 md:px-12 relative z-10`}
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
