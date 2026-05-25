import React from "react";

type HighlightMode = "none" | "last" | "custom";

function splitForHighlight(text: string, highlightMode: HighlightMode, highlightText?: string) {
  const trimmed = text.trim();
  if (!trimmed) return { before: "", highlight: "", after: "" };

  if (highlightMode === "none") return { before: trimmed, highlight: "", after: "" };

  if (highlightMode === "last") {
    const parts = trimmed.split(/\s+/);
    if (parts.length === 1) return { before: "", highlight: parts[0], after: "" };
    const highlight = parts[parts.length - 1] ?? "";
    const before = parts.slice(0, -1).join(" ");
    return { before, highlight, after: "" };
  }

  const needle = (highlightText ?? "").trim();
  if (!needle) return { before: trimmed, highlight: "", after: "" };

  const idx = trimmed.toLowerCase().indexOf(needle.toLowerCase());
  if (idx === -1) return { before: trimmed, highlight: "", after: "" };

  return {
    before: trimmed.slice(0, idx).trimEnd(),
    highlight: trimmed.slice(idx, idx + needle.length),
    after: trimmed.slice(idx + needle.length).trimStart(),
  };
}

export type ScriptHeadingProps = {
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  text: string;
  className?: string;
  highlight?: string;
  highlightMode?: HighlightMode;
  accentColorClassName?: string;
};

export function ScriptHeading({
  as: Tag = "h2",
  text,
  className,
  highlight,
  highlightMode = highlight ? "custom" : "last",
  accentColorClassName = "text-[#F4A24D]",
}: ScriptHeadingProps) {
  const { before, highlight: hi, after } = splitForHighlight(text, highlightMode, highlight);

  return (
    <Tag className={className}>
      {before && <span>{before} </span>}
      {hi ? (
        <span className="relative inline-block px-2">
          <span className="relative z-10">{hi}</span>
          <svg
            className={`absolute -inset-x-1 -inset-y-2 w-[calc(100%+0.5rem)] h-[calc(100%+0.75rem)] ${accentColorClassName}`}
            viewBox="0 0 200 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        </span>
      ) : null}
      {after ? <span> {after}</span> : null}
    </Tag>
  );
}

