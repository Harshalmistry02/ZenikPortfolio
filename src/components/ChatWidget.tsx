"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  X,
  Send,
  Sparkles,
  ExternalLink,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  ChevronRight,
  Minus,
} from "lucide-react";
import Link from "next/link";
import {
  generateResponse,
  getWelcomeMessage,
  type ChatResponse,
} from "../lib/chatEngine";

// ── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  suggestions?: string[];
  action?: ChatResponse["action"];
  timestamp: Date;
}

// ── Inline markdown renderer ──────────────────────────────────────────────────
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const processInline = (raw: string): React.ReactNode[] => {
      const boldParts = raw.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.flatMap((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return [
            <strong key={`b-${i}`} className="font-bold text-[#0D0F14]">
              {part.slice(2, -2)}
            </strong>,
          ];
        }
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urlParts = part.split(urlRegex);
        return urlParts.map((up, j) => {
          if (urlRegex.test(up)) {
            const href = up.replace(/[.,!?;:]+$/, "");
            return (
              <Link
                key={`u-${i}-${j}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00BFA6] font-semibold hover:underline inline-flex items-center gap-0.5"
              >
                {href.length > 40 ? href.slice(0, 40) + "…" : href}
                <ExternalLink size={10} />
              </Link>
            );
          }
          return <span key={`s-${i}-${j}`}>{up}</span>;
        });
      });
    };

    const isEmpty = line.trim() === "";
    if (isEmpty) return <div key={lineIdx} className="h-1.5" />;

    return (
      <div key={lineIdx} className="block">
        <span className="leading-relaxed text-[13px] text-gray-700">
          {processInline(line)}
        </span>
      </div>
    );
  });
}

// ── Contact card (light version) ─────────────────────────────────────────────
function ContactCard() {
  return (
    <div className="mt-3 rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
      <div className="px-4 py-2.5 border-b border-gray-100 bg-white">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#00BFA6]">
          Get in Touch
        </p>
      </div>
      <div className="p-2 space-y-0.5">
        <a
          href="tel:+918320558105"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors group border border-transparent hover:border-gray-100"
        >
          <div className="w-7 h-7 rounded-lg bg-[#00BFA6]/10 flex items-center justify-center shrink-0">
            <Phone size={12} className="text-[#00BFA6]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-gray-400 leading-none font-medium">Call us</p>
            <p className="text-[12px] font-bold text-[#0D0F14] mt-0.5">+91 8320558105</p>
          </div>
          <ChevronRight size={13} className="text-gray-300 group-hover:text-[#00BFA6] transition-colors" />
        </a>
        <a
          href="mailto:kheniharsh7@gmail.com"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors group border border-transparent hover:border-gray-100"
        >
          <div className="w-7 h-7 rounded-lg bg-[#F4A24D]/10 flex items-center justify-center shrink-0">
            <Mail size={12} className="text-[#F4A24D]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-gray-400 leading-none font-medium">Email</p>
            <p className="text-[12px] font-bold text-[#0D0F14] mt-0.5">kheniharsh7@gmail.com</p>
          </div>
          <ChevronRight size={13} className="text-gray-300 group-hover:text-[#F4A24D] transition-colors" />
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors group border border-transparent hover:border-gray-100"
        >
          <div className="w-7 h-7 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
            <Calendar size={12} className="text-violet-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-gray-400 leading-none font-medium">Book a call</p>
            <p className="text-[12px] font-bold text-[#0D0F14] mt-0.5">Free 30-min consultation</p>
          </div>
          <ChevronRight size={13} className="text-gray-300 group-hover:text-violet-500 transition-colors" />
        </Link>
      </div>
    </div>
  );
}

// ── Typing indicator ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex justify-start items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-[#00BFA6] flex items-center justify-center shrink-0 shadow-sm">
        <Sparkles size={12} className="text-white" />
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#00BFA6] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-[#00BFA6] rounded-full animate-bounce" style={{ animationDelay: "160ms" }} />
          <span className="w-1.5 h-1.5 bg-[#00BFA6] rounded-full animate-bounce" style={{ animationDelay: "320ms" }} />
        </div>
      </div>
    </div>
  );
}

// ── Main ChatWidget ───────────────────────────────────────────────────────────
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Orange badge after 3s
  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => setUnreadCount(1), 3000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setUnreadCount(0);
    if (!hasOpened) {
      setHasOpened(true);
      const welcome = getWelcomeMessage();
      setMessages([{
        id: "welcome",
        role: "bot",
        text: welcome.text,
        suggestions: welcome.suggestions,
        action: welcome.action,
        timestamp: new Date(),
      }]);
      setCurrentSuggestions(welcome.suggestions ?? []);
    }
  };

  const addBotMessage = useCallback((response: ChatResponse) => {
    setMessages(prev => [...prev, {
      id: `bot-${Date.now()}`,
      role: "bot",
      text: response.text,
      suggestions: response.suggestions,
      action: response.action,
      timestamp: new Date(),
    }]);
    setCurrentSuggestions(response.suggestions ?? []);
  }, []);

  const handleSend = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;
    setInput("");
    setCurrentSuggestions([]);
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    }]);
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(trimmed);
      addBotMessage(response);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  }, [isTyping, addBotMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans select-none">

      {/* ── Chat Panel ───────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="mb-4 w-[370px] sm:w-[400px] flex flex-col overflow-hidden animate-fade-up origin-bottom-right rounded-2xl"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 60px rgba(13,15,20,0.12), 0 4px 16px rgba(13,15,20,0.06)",
            height: isMinimized ? "auto" : "580px",
          }}
        >
          {/* ── Header ─────────────────────────────────────────────────── */}
          <div
            className="relative px-5 py-4 shrink-0 flex items-center justify-between rounded-t-2xl"
            style={{
              background: "#0D0F14",
            }}
          >
            {/* Thin teal top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, #00BFA6, #F4A24D)",
              }}
            />

            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#00BFA6" }}
                >
                  <Sparkles size={16} className="text-white" />
                </div>
                {/* Online pulse */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00BFA6] border-2 border-[#0D0F14]">
                  <span className="absolute inset-0 rounded-full bg-[#00BFA6] animate-ping opacity-60" />
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">Zenik Assistant</p>
                <p className="text-[#00BFA6] text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6] inline-block" />
                  Online · Typically replies instantly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Minimize"
              >
                <Minus size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close chat"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* ── Messages area ───────────────────────────────────────────── */}
          {!isMinimized && (
            <>
              <div
                className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-[#FAFAFA]"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#E5E7EB transparent" }}
              >
                {messages.map((msg) => (
                  <div key={msg.id}>
                    {msg.role === "user" ? (
                      /* User bubble — teal gradient */
                      <div className="flex justify-end">
                        <div
                          className="max-w-[82%] px-4 py-3 rounded-2xl rounded-br-md text-[13px] leading-relaxed text-white font-medium shadow-sm"
                          style={{ background: "#00BFA6" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ) : (
                      /* Bot bubble — white card */
                      <div className="flex justify-start items-end gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#00BFA6] flex items-center justify-center shrink-0 shadow-sm">
                          <Sparkles size={11} className="text-white" />
                        </div>
                        <div className="max-w-[85%]">
                          <div
                            className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-gray-100 shadow-sm"
                          >
                            <div className="text-[13px] leading-relaxed space-y-0.5">
                              {renderMarkdown(msg.text)}
                            </div>
                          </div>
                          {msg.action === "contact" && <ContactCard />}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>

              {/* ── Footer ──────────────────────────────────────────────── */}
              <div className="px-4 pt-3 pb-4 shrink-0 bg-white border-t border-gray-100">

                {/* Quick suggestions */}
                {currentSuggestions.length > 0 && !isTyping && (
                  <div className="flex overflow-x-auto gap-1.5 pb-3 scrollbar-none">
                    {currentSuggestions.slice(0, 5).map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSend(s)}
                        className="shrink-0 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#00BFA6]/30 text-[#00BFA6] bg-[#00BFA6]/5 hover:bg-[#00BFA6] hover:text-white hover:border-[#00BFA6] transition-all duration-200 whitespace-nowrap"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message…"
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-[13px] text-[#0D0F14] placeholder-gray-400 outline-none focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/15 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      background: input.trim() && !isTyping ? "#00BFA6" : "#E5E7EB",
                      boxShadow: input.trim() && !isTyping ? "0 4px 14px rgba(0,191,166,0.35)" : "none",
                    }}
                    aria-label="Send"
                  >
                    <Send size={14} className={input.trim() && !isTyping ? "text-white" : "text-gray-400"} />
                  </button>
                </form>

                {/* Powered by */}
                <p className="text-center text-[9px] text-gray-400 mt-2.5 tracking-wide">
                  Powered by{" "}
                  <span className="text-[#00BFA6] font-semibold">Zenik AI</span>
                  {" "}· Available 24/7
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── FAB Button ──────────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Tooltip */}
        {!isOpen && isButtonHovered && (
          <div
            className="absolute bottom-full right-0 mb-3 px-3 py-2 rounded-xl text-[12px] font-semibold text-[#0D0F14] whitespace-nowrap animate-fade-up pointer-events-none shadow-md"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(13,15,20,0.1)",
            }}
          >
            Chat with Zenik AI ✨
            {/* Arrow */}
            <span
              className="absolute -bottom-1.5 right-5 w-3 h-3 rotate-45 bg-white border-r border-b border-gray-200"
            />
          </div>
        )}

        {/* Unread badge */}
        {unreadCount > 0 && !isOpen && (
          <div
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white z-10"
            style={{
              background: "#F4A24D",
              boxShadow: "0 2px 8px rgba(244,162,77,0.5)",
            }}
          >
            {unreadCount}
          </div>
        )}

        {/* FAB */}
        <button
          onClick={isOpen ? () => setIsOpen(false) : handleOpen}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: isOpen ? "#0D0F14" : "#00BFA6",
            boxShadow: isOpen
              ? "0 8px 24px rgba(13,15,20,0.25)"
              : "0 8px 28px rgba(0,191,166,0.45), 0 4px 12px rgba(0,0,0,0.1)",
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Ping ring — only when closed */}
          {!isOpen && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(0,191,166,0.3)", animationDuration: "2.5s" }}
            />
          )}

          <div
            className="transition-all duration-300"
            style={{ transform: isOpen ? "rotate(90deg) scale(0.85)" : "rotate(0deg) scale(1)" }}
          >
            {isOpen
              ? <X size={20} className="text-white" />
              : <MessageSquare size={20} className="text-white" />
            }
          </div>
        </button>
      </div>
    </div>
  );
}
