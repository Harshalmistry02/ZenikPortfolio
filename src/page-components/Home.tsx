import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Brain, Eye, Check, Search, FileText, Paintbrush, Code2, Rocket,
  CheckCircle, Activity, TrendingUp
} from "lucide-react";
import { HanddrawnUnderline, HanddrawnArrow, HanddrawnStar, HanddrawnHighlight } from "../components/Squiggle";
import { Marquee } from "../components/Marquee";
import { StatsCounter } from "../components/StatsCounter";
import { TestimonialCard } from "../components/TestimonialCard";
import { CtaBanner } from "../components/CtaBanner";
import {
  stats, communityStats, whyZenikFeatures, processSteps, testimonials,
  portfolioProjects
} from "../data/homeData";
import { serviceCategories } from "../data/servicesData";

export function Home() {
  const [portfolioFilter, setPortfolioFilter] = useState<string>("All");
  const categories = ["All", "Web", "Mobile", "UI/UX", "Marketing", "AI"];
  const filteredProjects = portfolioFilter === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === portfolioFilter);

  // Icon mapping for process steps
  const iconMap: Record<string, React.ComponentType<React.ComponentProps<typeof Search>>> = {
    Search,
    FileText,
    Paintbrush,
    Code2,
    Rocket,
    CheckCircle,
    Activity,
    TrendingUp,
  };

  return (
    <div className="pt-20 bg-white min-h-screen overflow-hidden font-sans">

      {/* =============================================
          1. ODOO-STYLE HERO SECTION
          ============================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-white text-center flex flex-col items-center justify-center overflow-hidden">

        {/* Main Title Container */}
        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold text-[#202020] leading-[1.2] tracking-tight text-center">
            All your digital needs under{" "}
            <span className="relative inline-block mt-2">
              {/* Highlight background */}
              <span className="absolute inset-0 bg-[#FCB94D] rounded-[4px_12px_4px_12px] -z-10 -rotate-2 scale-[1.05] shadow-sm transform -translate-y-1 translate-x-1" />
              <span className="relative z-10 text-[#202020]">one roof.</span>
            </span>
            <br />
            <span className="inline-block mt-4">
              Creative, scalable, yet{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#202020]">affordable!</span>
                <div className="absolute left-0 right-0 bottom-1 h-3 sm:h-4">
                  <HanddrawnUnderline className="text-[#00A1EA] w-[110%] -ml-[5%]" />
                </div>

                {/* Arrow and Annotation */}
                <div className="absolute right-[20%] top-[80%] md:right-[10%] md:top-[90%] flex flex-col items-start w-64 translate-x-1/2 translate-y-4">
                  <HanddrawnArrow className="w-12 h-12 md:w-16 md:h-16 text-[#714B67] opacity-80 rotate-[30deg]" />
                  <span className="font-script text-xl md:text-3xl text-[#714B67] -rotate-6 mt-[-5px] ml-12 whitespace-nowrap text-left opacity-90 leading-tight">
                    90+ Premium Services<br />for your business
                  </span>
                </div>
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* =============================================
          2. MARQUEE STRIP
          ============================================= */}
      <Marquee />

      {/* =============================================
          3. SERVICES OVERVIEW — App Grid
          ============================================= */}
      <section className="py-24 bg-[#F3F4F6] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER: word circled in teal oval */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              Everything You Need to{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10">Grow</span>
                <svg className="absolute pointer-events-none text-[#00BFA6]" style={{ inset: "-0.3em -0.5em", width: "calc(100% + 1em)", height: "calc(100% + 0.7em)" }} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                  <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-xl mx-auto leading-relaxed">From design to deployment, we cover every aspect of your digital presence.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              {
                label: "UI/UX Design",
                to: "/services?cat=design",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="8" y="8" width="22" height="22" rx="4" fill="#A78BFA" />
                    <rect x="34" y="8" width="22" height="22" rx="4" fill="#7C3AED" opacity="0.7" />
                    <rect x="8" y="34" width="22" height="22" rx="4" fill="#C4B5FD" opacity="0.8" />
                    <circle cx="45" cy="45" r="11" fill="#F4A24D" />
                    <path d="M40 45 L44 49 L51 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Web Dev",
                to: "/services?cat=web",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="6" y="14" width="52" height="36" rx="6" fill="#DBEAFE" />
                    <rect x="6" y="14" width="52" height="10" rx="6" fill="#3B82F6" />
                    <circle cx="16" cy="19" r="2.5" fill="white" />
                    <circle cx="24" cy="19" r="2.5" fill="white" opacity="0.6" />
                    <circle cx="32" cy="19" r="2.5" fill="white" opacity="0.4" />
                    <path d="M18 34 L24 40 L18 46" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30 46 L46 46" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "Mobile Apps",
                to: "/services?cat=mobile",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="18" y="6" width="28" height="52" rx="6" fill="#D1FAE5" />
                    <rect x="18" y="6" width="28" height="52" rx="6" stroke="#10B981" strokeWidth="2" />
                    <rect x="24" y="14" width="16" height="28" rx="3" fill="#10B981" opacity="0.8" />
                    <circle cx="32" cy="50" r="3" fill="#10B981" />
                    <path d="M26 20 L30 24 L38 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Marketing",
                to: "/services?cat=marketing",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <circle cx="32" cy="32" r="26" fill="#FEE2E2" />
                    <path d="M16 40 L24 28 L32 34 L42 20 L50 26" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="50" cy="26" r="4" fill="#F4A24D" />
                    <circle cx="24" cy="28" r="3" fill="#EF4444" />
                  </svg>
                ),
              },
              {
                label: "Lead Gen",
                to: "/services?cat=leadgen",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <circle cx="32" cy="22" r="12" fill="#FEF3C7" />
                    <circle cx="32" cy="22" r="7" fill="#F59E0B" />
                    <path d="M14 50 C14 38 50 38 50 50" fill="#FDE68A" />
                    <path d="M14 50 C14 38 50 38 50 50" stroke="#F59E0B" strokeWidth="2" fill="none" />
                    <path d="M44 14 L50 8 M50 8 L50 14 M50 8 L44 8" stroke="#F4A24D" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "Email & Auto",
                to: "/services?cat=email",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="8" y="18" width="48" height="32" rx="6" fill="#FAE8FF" />
                    <path d="M8 24 L32 38 L56 24" stroke="#C026D3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <rect x="8" y="18" width="48" height="10" rx="6" fill="#E879F9" opacity="0.5" />
                    <circle cx="48" cy="16" r="8" fill="#F4A24D" />
                    <path d="M44 16 L47 19 L53 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Cloud & DevOps",
                to: "/services?cat=cloud",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <path d="M48 38 C54 38 58 34 58 28 C58 22 53 18 47 19 C45 13 39 9 32 9 C23 9 16 16 16 25 C10 26 6 31 6 37 C6 43 11 48 17 48 L48 48 C54 48 58 44 58 38" fill="#CFFAFE" />
                    <path d="M48 38 C54 38 58 34 58 28 C58 22 53 18 47 19 C45 13 39 9 32 9 C23 9 16 16 16 25 C10 26 6 31 6 37 C6 43 11 48 17 48 L48 48" stroke="#06B6D4" strokeWidth="2" fill="none" />
                    <path d="M26 38 L32 32 L38 38" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 32 L32 50" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "AI & Tech",
                to: "/services?cat=ai",
                icon: (
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
                ),
              },
              {
                label: "SaaS & MVPs",
                to: "/services?cat=product",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="8" y="32" width="14" height="24" rx="3" fill="#A5F3FC" />
                    <rect x="25" y="20" width="14" height="36" rx="3" fill="#06B6D4" />
                    <rect x="42" y="10" width="14" height="46" rx="3" fill="#0E7490" />
                    <path d="M12 28 L26 18 L40 22 L54 10" stroke="#F4A24D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="54" cy="10" r="3.5" fill="#F4A24D" />
                  </svg>
                ),
              },
              {
                label: "E-Commerce",
                to: "/services?cat=ecommerce",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <rect x="12" y="20" width="40" height="32" rx="4" fill="#FEE2E2" />
                    <rect x="12" y="20" width="40" height="8" rx="4" fill="#EF4444" />
                    <circle cx="20" cy="24" r="2" fill="white" opacity="0.8" />
                    <circle cx="28" cy="24" r="2" fill="white" opacity="0.6" />
                    <path d="M24 36 L28 40 L36 32" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="20" y="44" width="24" height="4" rx="2" fill="#F87171" />
                  </svg>
                ),
              },
              {
                label: "Branding",
                to: "/services?cat=branding",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <circle cx="32" cy="32" r="24" fill="#FEF3C7" />
                    <path d="M32 14 L38 26 L52 28 L42 38 L44 52 L32 46 L20 52 L22 38 L12 28 L26 26 Z" fill="#F59E0B" />
                    <circle cx="32" cy="32" r="8" fill="#FDE68A" />
                    <path d="M28 32 L30 34 L36 28" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Consulting",
                to: "/services?cat=consulting",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
                    <circle cx="32" cy="24" r="10" fill="#DBEAFE" />
                    <circle cx="32" cy="24" r="6" fill="#3B82F6" />
                    <path d="M16 50 C16 40 48 40 48 50" fill="#BFDBFE" />
                    <path d="M16 50 C16 40 48 40 48 50" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <rect x="38" y="14" width="16" height="12" rx="3" fill="#F4A24D" />
                    <path d="M42 18 L44 20 L50 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                  {item.icon}
                </div>
                <span className="text-[12px] sm:text-[13px] font-semibold text-gray-700 text-center leading-tight group-hover:text-[#0D0F14] transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              <span>Explore All 90+ Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          5. FEATURED SERVICES — Alternating Sections
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {/* Web Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">01</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                Web{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Development</span>
                  <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-700">Modern websites and web apps</span> built with React, Next.js, and cutting-edge technologies for speed and scale.
              </p>
              <ul className="space-y-2 pt-2">
                {["React & Next.js", "Full-Stack MERN/MEAN", "SaaS Platforms", "API Integrations"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-[#00BFA6]" />{f}</li>
                ))}
              </ul>
              <div className="flex gap-2 pt-2 flex-wrap">
                {["next.js", "react", "typescript", "node.js"].map(t => (
                  <span key={t} className="text-[10px] font-mono font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#FAF9F5] rounded-[32px] border border-gray-100 p-6 shadow-sm">
                <div className="bg-[#0D0F14] rounded-2xl p-5 font-mono text-[10px] text-gray-400 leading-relaxed">
                  <div className="flex items-center gap-1.5 mb-3"><span className="w-2 h-2 rounded-full bg-red-400" /><span className="w-2 h-2 rounded-full bg-yellow-400" /><span className="w-2 h-2 rounded-full bg-green-400" /></div>
                  <div><span className="text-pink-400">const</span> app = <span className="text-blue-400">createApp</span>({"{"}</div>
                  <div className="pl-4">framework: <span className="text-emerald-400">"next.js"</span>,</div>
                  <div className="pl-4">database: <span className="text-emerald-400">"postgresql"</span>,</div>
                  <div className="pl-4">auth: <span className="text-emerald-400">"oauth2"</span>,</div>
                  <div className="pl-4">deploy: <span className="text-emerald-400">"vercel"</span></div>
                  <div>{"})"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="bg-[#FAF9F5] rounded-[32px] border border-gray-100 p-8 shadow-sm flex items-center justify-center gap-6">
                {/* Phone mockups */}
                <div className="w-36 h-64 bg-white rounded-[24px] border border-gray-200 shadow-xl p-3 flex flex-col">
                  <div className="flex justify-center mb-2"><div className="w-12 h-1.5 bg-gray-200 rounded-full" /></div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-gradient-to-r from-[#00BFA6] to-teal-400 rounded-xl p-3 text-white text-center">
                      <div className="text-[10px] font-bold uppercase opacity-80">Revenue</div>
                      <div className="text-lg font-black font-mono">$24.8k</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 text-[8px] text-gray-500 font-bold">Recent: +$142.20</div>
                    <div className="bg-gray-50 rounded-lg p-2 text-[8px] text-gray-500 font-bold">Today: +$85.00</div>
                  </div>
                </div>
                <div className="w-36 h-64 bg-white rounded-[24px] border border-gray-200 shadow-xl p-3 flex flex-col -mt-8">
                  <div className="flex justify-center mb-2"><div className="w-12 h-1.5 bg-gray-200 rounded-full" /></div>
                  <div className="flex-1 space-y-2">
                    <div className="text-[10px] text-gray-500 font-bold">Analytics</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#00BFA6]/20 rounded-t" style={{ height: `${h}%` }}>
                          <div className="w-full bg-[#00BFA6] rounded-t" style={{ height: `${h * 0.7}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="text-[9px] font-bold text-[#00BFA6]">↑ 72% retention</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1 space-y-5 text-left">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">02</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                Mobile App{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Development</span>
                  <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-700">Native iOS & Android apps</span> designed for performance, engagement, and scale with fluid gesture-first interfaces.
              </p>
              <ul className="space-y-2 pt-2">
                {["React Native & Flutter", "iOS & Android Native", "App Store Deployment", "Offline-First Design"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-[#00BFA6]" />{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI & Advanced Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">03</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                AI & Advanced{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Tech</span>
                  <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-700">Intelligent chatbots, ML models, OCR,</span> and AI-powered workflows that automate your business and delight users.
              </p>
              <ul className="space-y-2 pt-2">
                {["OpenAI & GPT Integration", "AI Chatbot Development", "Machine Learning Models", "Document Processing"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-[#00BFA6]" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-gradient-to-br from-violet-50 via-white to-purple-50 rounded-[32px] border border-violet-100 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center"><Brain size={24} className="text-violet-600" /></div>
                  <div>
                    <div className="text-xs font-bold text-violet-600 uppercase">AI Assistant</div>
                    <div className="text-lg font-black text-[#0D0F14]">Smart. Fast. Accurate.</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-3 border border-gray-100 text-xs text-gray-600">
                    <span className="font-bold text-[#0D0F14]">User:</span> How can I improve my checkout flow?
                  </div>
                  <div className="bg-violet-50 rounded-xl p-3 border border-violet-100 text-xs text-gray-600">
                    <span className="font-bold text-violet-600">AI:</span> Based on your analytics, implementing one-click checkout could increase conversions by 23%. I recommend...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-[32px] border border-red-100 p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#00BFA6] font-mono">340%</div>
                    <div className="text-[10px] text-gray-500 font-bold mt-1">Conversion Increase</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <div className="text-2xl font-black text-[#F4A24D] font-mono">2.1x</div>
                    <div className="text-[10px] text-gray-500 font-bold mt-1">ROAS Improvement</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 text-center col-span-2">
                    <div className="text-[10px] text-gray-500 font-bold mb-2">Organic Traffic Growth</div>
                    <div className="flex items-end gap-1 h-12">
                      {[20, 35, 30, 50, 45, 70, 65, 85, 80, 95, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-red-100 rounded-t" style={{ height: `${h}%` }}>
                          <div className="w-full bg-red-400 rounded-t" style={{ height: "100%" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1 space-y-5 text-left">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6]">04</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                Digital{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Marketing</span>
                  <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#00BFA6" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-gray-700">Data-driven SEO, paid advertising,</span> and social media strategies that generate qualified leads and accelerate growth.
              </p>
              <ul className="space-y-2 pt-2">
                {["SEO & Content Strategy", "Google & Meta Ads", "Social Media Management", "Marketing Automation"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-[#00BFA6]" />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          6. PROCESS STEPS — Odoo Style
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-20 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              A Process Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Success</span>
                <svg className="absolute left-0 bottom-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="#F4A24D" strokeWidth="8" strokeLinecap="round" strokeDasharray="1,8" opacity="0.6" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Process Grid - 2 rows of 3 with arrows */}
          <div className="relative">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20 mb-20 relative">
              {/* Arrow connectors for top row - desktop only */}
              <div className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead1-home" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead1-home)" />
                </svg>
              </div>
              <div className="hidden lg:block absolute top-10 left-[50%] right-0 h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead2-home" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead2-home)" />
                </svg>
              </div>

              {processSteps.slice(0, 3).map((step, idx) => {
                const IconComp = iconMap[step.iconName] || Search;
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
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
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
                    <marker id="arrowhead3-home" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead3-home)" />
                </svg>
              </div>
              <div className="hidden lg:block absolute top-10 left-[50%] right-0 h-0.5">
                <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <marker id="arrowhead4-home" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#00BFA6" opacity="0.3" />
                    </marker>
                  </defs>
                  <line x1="0" y1="10" x2="48" y2="10" stroke="#00BFA6" strokeWidth="2" strokeDasharray="4,4" opacity="0.3" markerEnd="url(#arrowhead4-home)" />
                </svg>
              </div>

              {processSteps.slice(3, 6).map((step, idx) => {
                const IconComp = iconMap[step.iconName] || Search;
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
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
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
          7. STATS COUNTER - COMMUNITY VARIANT
          ============================================= */}
      <StatsCounter stats={communityStats} variant="community" />

      {/* =============================================
          8. PORTFOLIO SHOWCASE
          ============================================= */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="mb-20 text-center relative z-10 flex flex-col items-center">
            <div className="relative inline-block mb-4">
              <svg className="absolute -top-8 -left-12 w-16 h-16 text-[#00BFA6] opacity-60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M16 16 L24 24 M48 16 L40 24 M16 48 L24 40 M48 48 L40 40" />
              </svg>
              <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
                Projects Built to <span className="relative inline-block">Perform<HanddrawnUnderline className="absolute -bottom-1 left-0 w-full text-[#EF4444] h-4" /></span>
              </h2>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-24 relative z-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${portfolioFilter === cat
                  ? "bg-[#0D0F14] text-white shadow-md"
                  : "bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#0D0F14] hover:text-[#0D0F14]"
                  }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Projects (Editorial Style) */}
          <div className="space-y-40">
            {filteredProjects.map((proj, idx) => {
              const isCentered = idx % 2 === 0;

              return (
                <div key={proj.id} className="relative">
                  {idx > 0 && (
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-30">
                      <HanddrawnArrow className="w-10 h-10 text-gray-400 rotate-90" />
                    </div>
                  )}

                  {isCentered ? (
                    <div className="flex flex-col items-center">
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
                        <div className="text-left">
                          <span className="text-[11px] uppercase tracking-widest font-black text-[#00BFA6] bg-teal-50 border border-teal-100 px-3 py-1 rounded-lg mb-4 inline-block">
                            {proj.category}
                          </span>
                          <h3 className="text-3xl sm:text-4xl font-script font-bold text-[#0D0F14] mb-2">{proj.title}</h3>
                          <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                            <span className="font-bold text-gray-900">{proj.client}.</span> {proj.description}
                          </p>
                        </div>
                        <div className="text-left md:text-right flex flex-col justify-end items-start md:items-end">
                          <p className="text-gray-500 text-sm max-w-sm">
                            Built for performance and scale. Leveraging cutting-edge tools to deliver exceptional results.
                          </p>
                          <div className="flex flex-wrap gap-2 pt-4 justify-start md:justify-end">
                            {proj.technologies.map((t) => (
                              <span key={t} className="text-[10px] font-mono font-bold text-gray-500 bg-gray-50 px-2 py-1 border border-gray-100 rounded-md">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full max-w-2xl mx-auto flex justify-center mt-8">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[110%] aspect-square bg-[#F8F9FA] rounded-full -z-10"></div>

                        <div className="relative bg-white p-3 rounded-[24px] shadow-2xl border border-gray-100 w-full z-10 transition-transform duration-500 hover:scale-[1.02]">
                          {proj.featured && (
                            <span className="absolute -top-3 -right-3 z-20 bg-[#F4A24D] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md">
                              Featured
                            </span>
                          )}
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-auto rounded-[16px] object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="absolute -bottom-8 left-[10%] md:left-[20%] bg-white rounded-full py-2 px-3 pr-6 shadow-xl border border-gray-100 flex items-center gap-3 z-20 whitespace-nowrap">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60" className="w-8 h-8 rounded-full" alt="User" />
                          <span className="text-xs italic text-gray-600 font-medium">"Amazing results for {proj.client}!"</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative max-w-5xl mx-auto">
                      <div className="w-full lg:w-5/12 space-y-6 z-10 relative">
                        <div className="absolute -top-12 -left-6 text-[#00A1EA]">
                          <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                            <rect x="12" y="20" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="4" className="fill-[#00A1EA]/20 -rotate-12" />
                            <rect x="36" y="24" width="16" height="24" rx="2" stroke="currentColor" strokeWidth="4" className="fill-[#00A1EA]/20 rotate-12" />
                          </svg>
                        </div>

                        <span className="text-[11px] uppercase tracking-widest font-black text-[#00A1EA] bg-blue-50 border border-blue-100 px-3 py-1 rounded-lg inline-block">
                          {proj.category}
                        </span>
                        <h3 className="text-4xl sm:text-5xl font-script font-bold text-[#0D0F14] leading-tight">
                          {proj.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          <span className="font-bold text-gray-900">{proj.client}.</span> {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {proj.technologies.map((t) => (
                            <span key={t} className="text-xs font-mono font-bold text-gray-500 bg-gray-50 px-3 py-1.5 border border-gray-100 rounded-md shadow-sm">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className="w-full lg:w-1/2 relative lg:ml-12 max-w-lg mx-auto lg:mx-0">
                        <div className="absolute -top-[10%] -bottom-[10%] -left-[10%] -right-[20%] bg-gradient-to-r from-transparent to-[#F3F4F6] rounded-l-[100px] -z-10"></div>

                        <div className="relative bg-white p-3 rounded-[24px] shadow-2xl border border-gray-100 transition-transform duration-500 hover:-translate-y-2">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-auto rounded-[16px] object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="absolute -bottom-10 right-[10%] bg-white rounded-full py-2 px-3 pr-6 shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" className="w-8 h-8 rounded-full" alt="User" />
                          <span className="text-xs italic text-gray-600 font-medium">"But wait! There's more."</span>
                        </div>

                        <div className="absolute -bottom-16 left-0 opacity-40 rotate-180">
                          <HanddrawnArrow className="w-10 h-10 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-32">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              <span>View All Projects</span> <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          9. TESTIMONIALS
          ============================================= */}
      <section className="py-24 bg-[#FAF9F5] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER: pink/red highlighter brush stroke behind key phrase */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              Real{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 -z-10 bg-[#F4A24D]/20 rounded-sm -rotate-1 scale-x-110 scale-y-125" />
                <span className="relative z-10">Stories.</span>
              </span>
              {" "}Real{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Impact.</span>
                <svg className="absolute left-0 pointer-events-none text-[#00BFA6]" style={{ bottom: "-0.15em", width: "100%", height: "0.4em" }} viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden>
                  <path d="M4,9 C50,5 110,4 196,9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          10. CTA BANNER
          ============================================= */}
      <CtaBanner />

    </div>
  );
}
