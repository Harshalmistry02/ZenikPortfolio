import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight, Check, Palette, Globe, Smartphone, TrendingUp, Target,
  Mail, Cloud, Brain, Briefcase, Search, Code2, Layers, Shield,
  Zap, Server, Database, Plug, CreditCard, Wrench, FileText,
  Paintbrush, Rocket, Star, Users, Calendar, Monitor, Settings,
  GitBranch, BookOpen, RefreshCw, Gem, Image, Share2, Megaphone,
  Youtube, ShoppingCart, Building2, Radio, Tablet, Repeat, Upload,
  MapPin, Link as LinkIcon, CircleDollarSign, Linkedin, Filter,
  Send, Newspaper, Bell, Box, HeartPulse, GraduationCap, Store,
  Banknote, MessageSquare, Cpu, Sparkles, Activity, ScanLine,
  LayoutDashboard, Phone, Car
} from "lucide-react";
import { StatsCounter } from "../components/StatsCounter";
import { FaqAccordion } from "../components/FaqAccordion";
import { CtaBanner } from "../components/CtaBanner";
import { serviceCategories, allServices } from "../data/servicesData";
import { stats, communityStats, processSteps, homeFaqs } from "../data/homeData";

const lucideMap: Record<string, React.ElementType> = {
  Palette, Globe, Smartphone, TrendingUp, Target, Mail, Cloud, Brain,
  Briefcase, Search, Code2, Layers, Shield, Zap, Server, Database,
  Plug, CreditCard, Wrench, FileText, Paintbrush, Rocket, Star, Users,
  Calendar, Monitor, Settings, GitBranch, BookOpen, RefreshCw, Gem,
  Image, Share2, Megaphone, Youtube, ShoppingCart, Building2, Radio,
  Tablet, Repeat, Upload, MapPin, Link: LinkIcon, CircleDollarSign,
  Linkedin, Filter, Send, Newspaper, Bell, Box, HeartPulse,
  GraduationCap, Store, Banknote, MessageSquare, Cpu, Sparkles,
  Activity, ScanLine, LayoutDashboard, Check, Phone, Car,
};

const categoryIcons: Record<string, React.ElementType> = {
  Palette, Globe, Smartphone, TrendingUp, Target, Mail, Cloud, Brain, Briefcase,
};

function ServiceIcon({ svc }: { svc: { id: string; icon: string; bg: string; color: string } }) {
  switch (svc.id) {
    case "ui-design":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="8" y="8" width="22" height="22" rx="4" fill="#A78BFA" />
          <rect x="34" y="8" width="22" height="22" rx="4" fill="#7C3AED" opacity="0.7" />
          <rect x="8" y="34" width="22" height="22" rx="4" fill="#C4B5FD" opacity="0.8" />
          <circle cx="45" cy="45" r="11" fill="#F4A24D" />
          <path d="M40 45 L44 49 L51 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "frontend-react":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="6" y="14" width="52" height="36" rx="6" fill="#DBEAFE" />
          <rect x="6" y="14" width="52" height="10" rx="6" fill="#3B82F6" />
          <circle cx="16" cy="19" r="2.5" fill="white" />
          <circle cx="24" cy="19" r="2.5" fill="white" opacity="0.6" />
          <circle cx="32" cy="19" r="2.5" fill="white" opacity="0.4" />
          <path d="M18 34 L24 40 L18 46" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 46 L46 46" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "android-dev":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="18" y="6" width="28" height="52" rx="6" fill="#D1FAE5" />
          <rect x="18" y="6" width="28" height="52" rx="6" stroke="#10B981" strokeWidth="2" />
          <rect x="24" y="14" width="16" height="28" rx="3" fill="#10B981" opacity="0.8" />
          <circle cx="32" cy="50" r="3" fill="#10B981" />
          <path d="M26 20 L30 24 L38 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "marketing-strategy":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="26" fill="#FEE2E2" />
          <path d="M16 40 L24 28 L32 34 L42 20 L50 26" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="50" cy="26" r="4" fill="#F4A24D" />
          <circle cx="24" cy="28" r="3" fill="#EF4444" />
        </svg>
      );
    case "b2b-leadgen":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="22" r="12" fill="#FEF3C7" />
          <circle cx="32" cy="22" r="7" fill="#F59E0B" />
          <path d="M14 50 C14 38 50 38 50 50" fill="#FDE68A" />
          <path d="M14 50 C14 38 50 38 50 50" stroke="#F59E0B" strokeWidth="2" fill="none" />
          <path d="M44 14 L50 8 M50 8 L50 14 M50 8 L44 8" stroke="#F4A24D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "email-campaigns":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="8" y="18" width="48" height="32" rx="6" fill="#FAE8FF" />
          <path d="M8 24 L32 38 L56 24" stroke="#C026D3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <rect x="8" y="18" width="48" height="10" rx="6" fill="#E879F9" opacity="0.5" />
          <circle cx="48" cy="16" r="8" fill="#F4A24D" />
          <path d="M44 16 L47 19 L53 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud-aws":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <path d="M48 38 C54 38 58 34 58 28 C58 22 53 18 47 19 C45 13 39 9 32 9 C23 9 16 16 16 25 C10 26 6 31 6 37 C6 43 11 48 17 48 L48 48 C54 48 58 44 58 38" fill="#CFFAFE" />
          <path d="M48 38 C54 38 58 34 58 28 C58 22 53 18 47 19 C45 13 39 9 32 9 C23 9 16 16 16 25 C10 26 6 31 6 37 C6 43 11 48 17 48 L48 48" stroke="#06B6D4" strokeWidth="2" fill="none" />
          <path d="M26 38 L32 32 L38 38" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 32 L32 50" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "ai-chatbot":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="14" fill="#EDE9FE" />
          <circle cx="32" cy="32" r="8" fill="#7C3AED" />
          <circle cx="32" cy="32" r="3" fill="white" />
          <path d="M32 10 L32 18" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 46 L32 54" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 32 L18 32" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M46 32 L54 32" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 17 L23 23" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
          <path d="M41 41 L47 47" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
          <path d="M47 17 L41 23" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 41 L17 47" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "saas-product":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="8" y="32" width="14" height="24" rx="3" fill="#A5F3FC" />
          <rect x="25" y="20" width="14" height="36" rx="3" fill="#06B6D4" />
          <rect x="42" y="10" width="14" height="46" rx="3" fill="#0E7490" />
          <path d="M12 28 L26 18 L40 22 L54 10" stroke="#F4A24D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="54" cy="10" r="3.5" fill="#F4A24D" />
        </svg>
      );
    case "logo-design":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="24" fill="#FEF3C7" />
          <path d="M32 14 L38 26 L52 28 L42 38 L44 52 L32 46 L20 52 L22 38 L12 28 L26 26 Z" fill="#F59E0B" />
          <circle cx="32" cy="32" r="8" fill="#FDE68A" />
          <path d="M28 32 L30 34 L36 28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "seo-onpage":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="26" cy="26" r="16" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3" />
          <path d="M38 38 L50 50" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
          <circle cx="26" cy="26" r="10" fill="#3B82F6" opacity="0.3" />
          <path d="M22 26 L24 28 L30 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "google-ads-search":
      return (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="8" y="16" width="48" height="32" rx="4" fill="#FEE2E2" />
          <rect x="8" y="16" width="48" height="8" rx="4" fill="#EF4444" />
          <circle cx="16" cy="20" r="2" fill="white" opacity="0.8" />
          <circle cx="24" cy="20" r="2" fill="white" opacity="0.6" />
          <path d="M20 32 L24 36 L32 28" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="16" y="40" width="32" height="4" rx="2" fill="#F87171" />
        </svg>
      );
    default: {
      const Icon = lucideMap[svc.icon] || Globe;
      return (
        <div className={`w-10 h-10 rounded-xl ${svc.bg} ${svc.color} flex items-center justify-center`}>
          <Icon size={18} />
        </div>
      );
    }
  }
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAllServices, setShowAllServices] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const cat = searchParams?.get("cat");
    if (!cat) return;
    if (cat === "all") return;
    if (!serviceCategories.some((c) => c.id === cat)) return;
    setActiveCategory(cat);
  }, [searchParams]);

  const filteredServices = activeCategory === "all"
    ? allServices
    : allServices.filter((s) => s.categoryId === activeCategory);

  // Highlighted services to show initially (12 services)
  const highlightedServiceIds = [
    "ui-design", "frontend-react", "android-dev", "marketing-strategy",
    "b2b-leadgen", "email-campaigns", "cloud-aws", "ai-chatbot",
    "saas-product", "logo-design", "seo-onpage", "google-ads-search"
  ];

  const highlightedServices = allServices.filter(svc =>
    highlightedServiceIds.includes(svc.id)
  );

  const servicesToDisplay = showAllServices ? filteredServices : highlightedServices;

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">

      {/* =============================================
          1. HERO SECTION
          ============================================= */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 bg-white text-center flex flex-col items-center justify-center overflow-hidden">

        {/* Main Title Container */}
        <div className="max-w-4xl mx-auto px-4 z-10 relative">


          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold text-[#202020] leading-[1.2] tracking-tight text-center">
            Services Built for Scale,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#202020]">Speed &</span>
              <svg className="absolute left-0 bottom-2 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
                <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
              </svg>
            </span>
            <br />
            <span className="inline-block mt-2">
              <span className="relative inline-block">
                {/* Highlight background */}
                <span className="absolute inset-0 bg-[#FCB94D] rounded-[4px_12px_4px_12px] -z-10 -rotate-2 scale-[1.05] shadow-sm transform -translate-y-1 translate-x-1" />
                <span className="relative z-10 text-[#202020]">Security.</span>
              </span>
            </span>
          </h1>

          <p className="font-script text-2xl md:text-3xl text-[#F4A24D] font-bold mt-4">
            for businesses that mean it ⚡
          </p>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-4">
            We partner with ambitious companies across the UK & USA to build digital products that are modern, scalable, and secure — engineered for real-world impact.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setActiveCategory("all");
                setShowAllServices(false);
              }}
              className={`group relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === "all"
                ? "bg-[#0D0F14] text-white shadow-lg scale-105"
                : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00BFA6] hover:text-[#00BFA6] hover:shadow-md"
                }`}
            >
              <span className="relative z-10">All Services</span>
              {activeCategory === "all" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00BFA6] rounded-full" />
              )}
            </button>

            {serviceCategories.filter(cat => cat.id !== "product").map((cat) => {
              const Icon = categoryIcons[cat.icon] || Globe;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowAllServices(true);
                  }}
                  className={`group relative px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                    ? "bg-[#0D0F14] text-white shadow-lg scale-105"
                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00BFA6] hover:text-[#00BFA6] hover:shadow-md"
                    }`}
                >
                  <Icon size={16} className={activeCategory === cat.id ? "text-[#00BFA6]" : ""} />
                  <span className="relative z-10">{cat.name.split(" ")[0]}</span>
                  {activeCategory === cat.id && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00BFA6] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          2. ALL SERVICES GRID
          ============================================= */}
      {activeCategory === "all" && (
        <section id="all-services" className="py-24 bg-[#F3F4F6] border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            {/* HEADER: word circled in teal oval */}
            <div className="mb-16 text-center">
              <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
                90+ Services.{" "}
                <span className="relative inline-block px-2">
                  <span className="relative z-10 text-[#00BFA6]">One Partner.</span>
                  <svg className="absolute pointer-events-none text-[#00BFA6]" style={{ inset: "-0.3em -0.5em", width: "calc(100% + 1em)", height: "calc(100% + 0.7em)" }} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                    <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-xl mx-auto leading-relaxed">
                {showAllServices ? "Browse all our services" : "From design to deployment, we cover every aspect of your digital presence."}
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
              {servicesToDisplay.map((svc) => (
                <Link key={svc.id} href={`/services/${svc.categoryId}`} className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                    <ServiceIcon svc={svc} />
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700 text-center leading-tight group-hover:text-[#0D0F14] transition-colors">
                    {svc.title}
                  </span>
                </Link>
              ))}

              {/* Show More Button */}
              {!showAllServices && (
                <button
                  onClick={() => setShowAllServices(true)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00BFA6] to-[#00A896] rounded-[20px] shadow-[0_4px_20px_rgba(0,191,166,0.2)] border border-[#00BFA6] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(0,191,166,0.3)] cursor-pointer">
                    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                      <path d="M32 16 L32 48" stroke="white" strokeWidth="4" strokeLinecap="round" />
                      <path d="M16 32 L48 32" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#00BFA6] text-center leading-tight group-hover:text-[#0D0F14] transition-colors">
                    View All 90+
                  </span>
                </button>
              )}
            </div>

            {showAllServices && (
              <div className="text-center pt-10">
                <button
                  onClick={() => setShowAllServices(false)}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
                >
                  <span>Show Less</span>
                </button>
              </div>
            )}

            {activeCategory !== "all" && (
              <div className="text-center pt-10">
                <button
                  onClick={() => setActiveCategory("all")}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00BFA6] hover:text-[#0D0F14] transition-colors"
                >
                  ← View All Services
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Category-specific services display */}
      {activeCategory !== "all" && (
        <section className="py-24 bg-[#F3F4F6]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
              {filteredServices.map((svc) => (
                <Link key={svc.id} href={`/services/${svc.categoryId}`} className="flex flex-col items-center gap-3 group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                    <ServiceIcon svc={svc} />
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700 text-center leading-tight group-hover:text-[#0D0F14] transition-colors">
                    {svc.title}
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center pt-10">
              <button
                onClick={() => setActiveCategory("all")}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
              >
                ← View All Services
              </button>
            </div>
          </div>
        </section>
      )}

      {/* =============================================
          3. FEATURED SERVICES — Alternating Sections
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-28">
          {serviceCategories.slice(0, 5).map((cat, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Text */}
                <div className={`lg:col-span-5 space-y-5 text-left ${isEven ? "lg:order-2" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                    {cat.name.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10">{cat.name.split(' ').slice(-1)[0]}</span>
                      <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    <span className="font-semibold text-gray-700">{cat.description.split('.')[0]}.</span>
                    {cat.description.split('.').slice(1).join('.')}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {cat.services.slice(0, 4).map((svc) => (
                      <li key={svc.id} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-[#00BFA6] shrink-0" />
                        {svc.title}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-2 flex-wrap">
                    {cat.services.slice(0, 4).map((svc, i) => (
                      <span key={i} className="text-[10px] font-mono font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
                        {svc.title.toLowerCase().replace(/\s+/g, '.')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="bg-[#FAF9F5] rounded-[32px] border border-gray-100 p-6 shadow-sm">
                    <div className={`${cat.bg} rounded-2xl p-5`}>
                      <div className="grid grid-cols-3 gap-3">
                        {cat.services.slice(0, 6).map((svc) => {
                          const SvcIcon = lucideMap[svc.icon] || Globe;
                          return (
                            <div
                              key={svc.id}
                              className="bg-white rounded-xl p-3 border border-gray-100 text-center hover:shadow-sm transition-all"
                            >
                              <div className={`w-8 h-8 mx-auto rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center mb-2`}>
                                <SvcIcon size={16} />
                              </div>
                              <span className="text-[9px] font-bold text-gray-700 block leading-tight">
                                {svc.title.length > 18 ? svc.title.slice(0, 18) + "…" : svc.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================================
          4. PROCESS STEPS — Odoo Style Enhanced
          ============================================= */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <div className="mb-24 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              A Process Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Success</span>
                <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#F4A24D" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-base mt-6 max-w-2xl mx-auto">
              From discovery to launch, our proven methodology ensures your project succeeds at every stage.
            </p>
          </div>

          {/* Process Grid - 2 rows of 3 with arrows */}
          <div className="relative">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 mb-20 relative">
              {/* Arrow connectors for top row - desktop only */}
              <div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead1)" />
                </svg>
              </div>
              <div className="hidden lg:block absolute top-10 left-[50%] right-0 h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead2)" />
                </svg>
              </div>

              {processSteps.slice(0, 3).map((step, idx) => {
                const IconComp = lucideMap[step.iconName] || Search;
                return (
                  <div key={idx} className="text-center group relative z-10">
                    {/* Icon Circle with Number Badge */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <IconComp size={32} className="text-[#00BFA6] transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                      </div>
                      {/* Number Badge */}
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-xs font-black font-mono shadow-md">
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-[#0D0F14] mb-3 tracking-tight">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                      <span className="font-semibold text-gray-700">{step.description.split('.')[0]}.</span>
                      {step.description.split('.').slice(1).join('.')}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 relative">
              {/* Arrow connectors for bottom row - desktop only */}
              <div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead3)" />
                </svg>
              </div>
              <div className="hidden lg:block absolute top-10 left-[50%] right-0 h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead4)" />
                </svg>
              </div>

              {processSteps.slice(3, 6).map((step, idx) => {
                const IconComp = lucideMap[step.iconName] || Search;
                return (
                  <div key={idx} className="text-center group relative z-10">
                    {/* Icon Circle with Number Badge */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-50 to-teal-100/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <IconComp size={32} className="text-[#00BFA6] transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                      </div>
                      {/* Number Badge */}
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-xs font-black font-mono shadow-md">
                        {step.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-[#0D0F14] mb-3 tracking-tight">
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                      <span className="font-semibold text-gray-700">{step.description.split('.')[0]}.</span>
                      {step.description.split('.').slice(1).join('.')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          6. STATS - COMMUNITY VARIANT
          ============================================= */}
      <StatsCounter stats={communityStats} variant="community" />



      {/* =============================================
          8. FAQ
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* HEADER: red underline on first two words */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              <span className="relative inline-block mr-2">
                <span className="relative z-10">Frequently Asked</span>
                <svg className="absolute left-0 pointer-events-none text-[#F4A24D]" style={{ bottom: "-0.15em", width: "100%", height: "0.4em" }} viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M4,9 C80,3 140,5 196,9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              {" "}Questions
            </h2>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* =============================================
          9. CTA BANNER
          ============================================= */}
      <CtaBanner />
    </div>
  );
}
