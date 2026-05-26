import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  highlight?: string;
  underline?: string;
  circleColor?: string;
}

// Renders the title with optional circled word and/or underlined word
function OdooTitle({
  title,
  highlight,
  underline,
  light,
  circleColor = "text-[#00BFA6]",
}: {
  title: string;
  highlight?: string;
  underline?: string;
  light?: boolean;
  circleColor?: string;
}) {
  const color = light ? "text-white" : "text-[#0D0F14]";

  // Split title into tokens, applying circle or underline decorations
  const words = title.split(" ");

  return (
    <h2
      className={`font-script text-5xl sm:text-6xl md:text-[72px] font-bold tracking-tight leading-[1.15] ${color}`}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const cleanWord = word.replace(/[.,!?]$/, "");
        const punct = word.slice(cleanWord.length);

        const isCircled = highlight && cleanWord.toLowerCase() === highlight.replace(/[.,!?]$/, "").toLowerCase();
        const isUnderlined = underline
          ? cleanWord.toLowerCase() === underline.replace(/[.,!?]$/, "").toLowerCase()
          : false;

        const inner = (
          <>
            {isCircled ? (
              <span className="relative inline-block px-1">
                <span className="relative z-10">{cleanWord}</span>
                {/* Hand-drawn oval circle */}
                <svg
                  className={`absolute pointer-events-none ${circleColor}`}
                  style={{ inset: "-0.3em -0.4em", width: "calc(100% + 0.8em)", height: "calc(100% + 0.6em)" }}
                  viewBox="0 0 200 80"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                </svg>
              </span>
            ) : isUnderlined ? (
              <span className="relative inline-block">
                <span className="relative z-10">{cleanWord}</span>
                {/* Hand-drawn wavy underline */}
                <svg
                  className="absolute left-0 pointer-events-none text-[#F4A24D]"
                  style={{ bottom: "-0.2em", width: "100%", height: "0.35em" }}
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 4,8 C 50,4.5 110,3.5 196,8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 12,11 C 70,8.5 130,7.5 190,9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>
            ) : (
              <span>{cleanWord}</span>
            )}
            {punct}
          </>
        );

        return (
          <React.Fragment key={i}>
            {inner}
            {!isLast && " "}
          </React.Fragment>
        );
      })}
    </h2>
  );
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
  highlight,
  underline,
  circleColor,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "text-left"}`}>
      {badge && (
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00BFA6] bg-teal-50 border border-teal-100 px-3 py-1 rounded-full mb-4 inline-block">
          {badge}
        </span>
      )}
      <OdooTitle title={title} highlight={highlight} underline={underline} light={light} circleColor={circleColor} />
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed mt-5 max-w-xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
