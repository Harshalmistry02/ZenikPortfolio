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

// User avatars for the community variant
const userAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
];

function CommunityStatsVariant({ stats }: { stats: StatItem[] }) {
  // Generate random positions for avatars and decorative elements
  const generateAvatarPositions = () => {
    const positions = [];
    const rows = 4;
    const cols = 12;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Skip center area for the main content
        if (row >= 1 && row <= 2 && col >= 3 && col <= 8) continue;

        // Randomly decide if this position should have an avatar or shape
        const random = Math.random();
        if (random > 0.65) {
          const isAvatar = Math.random() > 0.4;
          positions.push({
            row,
            col,
            type: isAvatar ? 'avatar' : 'shape',
            avatar: isAvatar ? userAvatars[Math.floor(Math.random() * userAvatars.length)] : null,
            shape: !isAvatar ? ['circle', 'square', 'blob'][Math.floor(Math.random() * 3)] : null,
            size: Math.random() > 0.5 ? 'large' : 'small',
            color: ['#714B67', '#E8E8E8', '#D1D1D1', '#714B67'][Math.floor(Math.random() * 4)],
          });
        }
      }
    }
    return positions;
  };

  const [avatarPositions] = useState(generateAvatarPositions());

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background decorative grid with avatars and shapes */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 gap-4 pointer-events-none opacity-90 z-0">
          {avatarPositions.map((pos, idx) => (
            <div
              key={idx}
              className="relative"
              style={{
                gridColumn: pos.col + 1,
                gridRow: pos.row + 1,
              }}
            >
              {pos.type === 'avatar' ? (
                <div
                  className={`${pos.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'
                    } rounded-full overflow-hidden border-2 border-white shadow-sm`}
                >
                  <img
                    src={pos.avatar!}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div
                  className={`${pos.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'
                    } ${pos.shape === 'circle'
                      ? 'rounded-full'
                      : pos.shape === 'square'
                        ? 'rounded-lg'
                        : 'rounded-[40%_60%_70%_30%/50%_40%_60%_50%]'
                    } opacity-40`}
                  style={{ backgroundColor: pos.color }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pb-4">
          {/* Handwritten "happy" annotation */}
          <div className="flex justify-center mb-4">
            <span className="font-script text-2xl text-[#F4A24D] -rotate-6 inline-block">
              happy
            </span>
            <svg
              className="w-16 h-8 text-[#F4A24D] -ml-2 mt-2"
              viewBox="0 0 60 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5,15 Q15,5 30,12 T55,8" />
            </svg>
          </div>

          {/* Main heading */}
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-[#0D0F14] leading-tight mb-6">
            Join{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                <AnimatedNumber value={stats[0]?.value || "15"} suffix=" million" />
              </span>
            </span>
            {" "}users
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg font-normal max-w-xl mx-auto">
            who grow their business with Zenik
          </p>

          {/* Additional stats row */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16 relative z-20">
            {stats.slice(1, 4).map((stat, idx) => (
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
