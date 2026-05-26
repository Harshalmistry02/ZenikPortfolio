import React from "react";

// Original clean wavy squiggle line
export function Squiggle({ className = "w-6 h-2 inline-block text-[#00BFA6]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c3-1.5 5-4.5 9-4s4 4 8 2.5 3-1.5 3-1.5" />
    </svg>
  );
}

// Sparkle outline doodle
export function Sparkles({ className = "w-4 h-4 text-teal-400" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 1v4M8 11v4M3 8h4M9 8h4M4.5 4.5l2 2M9.5 9.5l2 2M4.5 11.5l2-2M9.5 6.5l2-2" strokeLinecap="round" />
    </svg>
  );
}

// Small organic tick
export function CheckMini({ className = "w-4 h-4 text-teal-400 mr-2" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * HanddrawnArrow: Highlights and points towards buttons, fields, etc.
 * Uses a realistic organic vector path.
 */
export function HanddrawnArrow({ className = "w-16 h-12 text-[#F4A24D]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Curved body of the arrow */}
      <path d="M10 12 C 40 10, 80 15, 85 40 C 86 45, 80 50, 75 42" />
      {/* Arrowhead */}
      <path d="M68 35 L 76 43 L 86 32" />
    </svg>
  );
}

/**
 * HanddrawnCircle: Circles around important display titles.
 */
export function HanddrawnCircle({ className = "absolute inset-0 text-[#00BFA6]" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none overflow-visible ${className}`}
      viewBox="0 0 160 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sketchy double-loop loop circle */}
      <path d="M 10,40 C 15,10 145,5 150,40 C 155,75 12,78 15,45 C 18,25 105,12 142,32" />
    </svg>
  );
}

/**
 * HanddrawnUnderline: Highlights words with a playful, multi-pass felt tip underline.
 */
export function HanddrawnUnderline({ className = "w-full h-3 text-[#F4A24D]" }: { className?: string }) {
  return (
    <svg
      className={`absolute left-0 bottom-[-6px] pointer-events-none overflow-visible ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      preserveAspectRatio="none"
    >
      {/* First stroke */}
      <path d="M 4,8 C 50,4.5 110,3.5 196,8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Second return stroke */}
      <path d="M 12,11 C 70,8.5 130,7.5 190,9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/**
 * HanddrawnStar: Organic, child-like star scribble.
 */
export function HanddrawnStar({ className = "w-6 h-6 text-[#F4A24D]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2 L 15 9 L 22 10 L 17 15 L 18 22 L 12 18 L 6 22 L 7 15 L 2 10 L 9 9 Z" />
    </svg>
  );
}

/**
 * HanddrawnCrown: Cute little success/award identifier doodle.
 */
export function HanddrawnCrown({ className = "w-8 h-8 text-[#F4A24D]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 24 L 6 10 L 12 16 L 16 8 L 20 16 L 26 10 L 28 24 Z" />
      <path d="M4 26 L 28 26" />
    </svg>
  );
}

/**
 * HanddrawnHighlight: Background highlighter swoop
 */
export function HanddrawnHighlight({ className = "absolute inset-0 bg-yellow-100" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 -z-10 bg-yellow-100/60 rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] scale-y-110 scale-x-105 rotate-[-1.5deg] ${className}`}
    />
  );
}

/**
 * Soft Odoo-style pastel bubble badges
 */
export function PastelBlob({ className = "bg-rose-50 text-rose-600 border-rose-100" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border ${className}`} />
  );
}
