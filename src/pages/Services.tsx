import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
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
import { HanddrawnUnderline, HanddrawnArrow } from "../components/Squiggle";
import { Marquee } from "../components/Marquee";
import { StatsCounter } from "../components/StatsCounter";

import { FaqAccordion } from "../components/FaqAccordion";
import { CtaBanner } from "../components/CtaBanner";
import { ScriptHeading } from "../components/ScriptHeading";
import { serviceCategories, allServices } from "../data/servicesData";
import { stats, processSteps, homeFaqs } from "../data/homeData";

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

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (!cat) return;
    if (cat === "all") return;
    if (!serviceCategories.some((c) => c.id === cat)) return;
    setActiveCategory(cat);
  }, [searchParams]);

  const filteredServices = activeCategory === "all"
    ? allServices
    : allServices.filter((s) => s.categoryId === activeCategory);

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">

      {/* =============================================
          1. HERO SECTION
          ============================================= */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FAF9F5] to-white">
        <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-teal-100/15 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 right-[10%] w-96 h-96 bg-orange-100/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-mono inline-block">
              // WHAT WE DO //
            </span>

            <ScriptHeading
              as="h1"
              text="Services Built for Scale, Speed & Security."
              highlight="Security."
              className="font-script text-5xl sm:text-6xl md:text-7xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
              accentColorClassName="text-[#F4A24D]"
            />

            <p className="font-script text-2xl md:text-3xl text-[#F4A24D] font-bold">
              for businesses that mean it ⚡
            </p>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We partner with ambitious companies across the UK & USA to build digital products that are modern, scalable, and secure — engineered for real-world impact.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${activeCategory === "all"
                ? "bg-[#0D0F14] text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-600 hover:border-[#0D0F14]"
                }`}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Globe;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeCategory === cat.id
                    ? "bg-[#0D0F14] text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#0D0F14]"
                    }`}
                >
                  <Icon size={14} />
                  {cat.name.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          2. MARQUEE
          ============================================= */}
      <Marquee />

      {/* =============================================
          3. ALL SERVICES GRID
          ============================================= */}
      <section id="all-services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER: teal color accent on key words */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              90+ Services.{" "}
              <span className="text-[#00BFA6]">One Partner.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredServices.map((svc) => {
              const Icon = lucideMap[svc.icon] || Globe;
              return (
                <div
                  key={svc.id}
                  className={`group bg-white p-5 rounded-[24px] border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_15px_40px_rgba(0,191,166,0.06)] transition-all duration-300 hover:-translate-y-1 cursor-default text-left`}
                >
                  <div className={`w-10 h-10 rounded-xl ${svc.bg} ${svc.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[11px] font-black text-[#0D0F14] tracking-tight leading-tight mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-2">
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>

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

      {/* =============================================
          4. DEEP DIVE CATEGORY SECTIONS
          ============================================= */}
      <section className="py-24 bg-[#FAF9F5] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {serviceCategories.slice(0, 5).map((cat, idx) => {
            const CatIcon = categoryIcons[cat.icon] || Globe;
            const isEven = idx % 2 === 1;
            return (
              <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Text */}
                <div className={`lg:col-span-5 space-y-5 text-left ${isEven ? "lg:order-2" : ""}`}>
                  <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                    {cat.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
                  <ul className="space-y-2 pt-2">
                    {cat.services.slice(0, 5).map((svc) => (
                      <li key={svc.id} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-[#00BFA6] shrink-0" />
                        {svc.title}
                      </li>
                    ))}
                    {cat.services.length > 5 && (
                      <li className="text-xs text-[#00BFA6] font-bold pl-6">
                        +{cat.services.length - 5} more services
                      </li>
                    )}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00BFA6] hover:text-[#0D0F14] transition-colors group pt-2"
                  >
                    Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : ""}`}>
                  <div className={`${cat.bg} rounded-[32px] border ${cat.borderColor} p-8 shadow-sm`}>
                    <div className="grid grid-cols-3 gap-3">
                      {cat.services.slice(0, 6).map((svc) => {
                        const SvcIcon = lucideMap[svc.icon] || Globe;
                        return (
                          <div
                            key={svc.id}
                            className="bg-white rounded-2xl p-4 border border-gray-100 text-center hover:shadow-sm transition-all"
                          >
                            <div className={`w-10 h-10 mx-auto rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-2`}>
                              <SvcIcon size={18} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-700 block leading-tight">
                              {svc.title.length > 20 ? svc.title.slice(0, 20) + "…" : svc.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =============================================
          5. PROCESS TIMELINE
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER: double wavy underline in orange */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              A Process Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Success</span>
                <svg className="absolute left-0 pointer-events-none text-[#F4A24D]" style={{bottom:"-0.15em",width:"100%",height:"0.4em"}} viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M4,9 C50,5 110,4 196,9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                  <path d="M14,13 C70,10 130,9 188,11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 relative text-center">
            <div className="absolute top-12 left-10 right-10 h-0.5 border-t border-dashed border-teal-200/50 -z-10 hidden md:block" />
            {processSteps.map((step, idx) => {
              const IconComp = lucideMap[step.iconName] || Search;
              return (
                <div key={idx} className="flex flex-col items-center group relative p-4">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative group-hover:border-[#00BFA6] group-hover:scale-105 transition-all duration-300">
                    <IconComp size={24} className="text-gray-500 group-hover:text-[#00BFA6] transition-colors" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-[10px] font-black font-mono border-2 border-white">{step.num}</span>
                  </div>
                  <h3 className="text-base font-black text-[#0D0F14] mt-6 tracking-tight group-hover:text-[#00BFA6] transition-colors">{step.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2 max-w-[180px] mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          6. STATS
          ============================================= */}
      <StatsCounter stats={stats} />



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
                <svg className="absolute left-0 pointer-events-none text-[#F4A24D]" style={{bottom:"-0.15em",width:"100%",height:"0.4em"}} viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M4,9 C80,3 140,5 196,9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
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
