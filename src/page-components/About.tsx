import React from "react";
import Link from "next/link";
import {
  Linkedin, Twitter, Mail, Shield, Flag, Rocket, Users, Globe, Award, Sparkles, Heart, Activity
} from "lucide-react";
import {
  Squiggle,
  HanddrawnArrow,
  HanddrawnUnderline,
  HanddrawnCircle,
  HanddrawnStar,
  HanddrawnCrown,
  HanddrawnHighlight
} from "../components/Squiggle";
import { CtaBanner } from "../components/CtaBanner";
import { ScriptHeading } from "../components/ScriptHeading";

export function About() {
  const team = [
    {
      name: "James Carter",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "james@zenik.tech" }
    },
    {
      name: "Sophia Nguyen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "sophia@zenik.tech" }
    },
    {
      name: "Daniel Foster",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", dribbble: "#", mail: "daniel@zenik.tech" }
    },
    {
      name: "Emily Roberts",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "emily@zenik.tech" }
    },
    {
      name: "Arjun Patel",
      role: "Engineering Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", github: "#", mail: "arjun@zenik.tech" }
    },
    {
      name: "Olivia Bennett",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "olivia@zenik.tech" }
    }
  ];

  const values = [
    {
      title: "Reliability",
      text: "We write clean, secure, and well-tested code that works at scale without technical debt.",
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )
    },
    {
      title: "Transparency",
      text: "We communicate directly, share clear progress updates, and maintain total visibility over hours and timelines.",
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Focus on Uptime",
      text: "We focus on proven, modern technologies to build reliable systems that solve real operational problems.",
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: "Technical Partner",
      text: "We act as your dedicated technical partner, helping you make smart technology decisions that protect your budget.",
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const journey = [
    {
      year: "2018",
      title: "Founded",
      desc: "Zenik was founded in London with a vision to build stable, secure custom software.",
      icon: <Flag className="w-5 h-5 text-white" />
    },
    {
      year: "2020",
      title: "Expanded to USA",
      desc: "Opened our New York office to support North American brands and handle global workloads.",
      icon: <Rocket className="w-5 h-5 text-white" />
    },
    {
      year: "2022",
      title: "50+ Projects",
      desc: "Delivered 50+ custom web applications, mobile platforms, and infrastructure solutions.",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      year: "2024",
      title: "Global Impact",
      desc: "Serving clients in 15+ countries with a dedicated transatlantic team across the UK & USA.",
      icon: <Globe className="w-5 h-5 text-white" />
    }
  ];

  const awards = [
    { agency: "Clutch", title: "Top B2B Company", year: "2024" },
    { agency: "The Manifest", title: "Most Reviewed Developers", year: "2024" },
    { agency: "GoodFirms", title: "Top Web Development Company", year: "2024" },
    { agency: "sortlist", title: "Top Agency United Kingdom", year: "2024" },
    { agency: "DesignRush", title: "Top Software Developers", year: "2024" }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">

      {/* 1. HERO SECTION - ENHANCED */}
      <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F5]/30 to-white text-left overflow-hidden">
        {/* Semi-transparent animated background elements (rotating shapes) */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Rotating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-teal-200/20 rounded-lg -z-10 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-orange-200/20 rounded-full -z-10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Top layout sketching indicators */}
          <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
            <span className="text-[#00BFA6] mr-1 font-black">//</span>
            <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">About Us</span>
            <span className="text-[#00BFA6] ml-1 font-black">//</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">

            {/* Title Block (Left) */}
            <div className="lg:col-span-7 space-y-6 relative">
              <div className="relative">
                <ScriptHeading
                  as="h1"
                  text="We Build With Purpose, Precision & Passion."
                  highlight="Passion."
                  className="font-script text-5xl sm:text-6xl md:text-7xl font-bold text-[#0D0F14] leading-[0.98] tracking-tight"
                  accentColorClassName="text-[#F4A24D]"
                />

                {/* Hand-drawn arrow pointing to "Passion" */}
                <div className="absolute -right-8 top-12 text-[#F4A24D]/60 w-16 h-16 rotate-[-25deg] hidden lg:block select-none pointer-events-none">
                  <HanddrawnArrow />
                </div>

                {/* Animated sparkles around accent text */}
                <div className="absolute right-0 top-8 text-[#F4A24D] animate-pulse" style={{ animationDuration: '2s' }}>
                  <Sparkles size={20} className="opacity-60" />
                </div>
                <div className="absolute right-12 top-4 text-[#F4A24D] animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <Sparkles size={16} className="opacity-40" />
                </div>
              </div>

              {/* Styled slogan with HanddrawnUnderline */}
              <div className="relative pt-1 pb-3">
                <p className="font-script text-3xl md:text-4xl text-[#F4A24D] font-bold tracking-wide leading-none relative inline-block">
                  Digital products. Real impact.
                  <span className="absolute left-0 -bottom-1 w-full h-3">
                    <HanddrawnUnderline className="text-[#F4A24D]" />
                  </span>
                </p>
              </div>
            </div>

            {/* Paragraph block (Right / Bottom depending on screen) with handdrawn curved arrow */}
            <div className="lg:col-span-5 relative lg:pt-8">

              {/* Playful sketched curving pointer in teal pointing to the content */}
              <div className="absolute -left-16 -top-12 text-[#00BFA6]/50 w-20 h-20 -rotate-45 hidden lg:block select-none" style={{ transform: "scaleY(-1) scaleX(-1)" }}>
                <HanddrawnArrow />
              </div>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal max-w-md pt-2">
                We are a team of designers, developers and strategists building digital products for ambitious brands across the UK & USA.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHO WE ARE & PHOTO COLLAGE SECTION - ENHANCED */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100/55 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Texts + Button */}
            <div className="lg:col-span-5 space-y-6 text-left">

              <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
                <span className="text-[#00BFA6] mr-1 font-black">//</span>
                <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Who we are</span>
                <span className="text-[#00BFA6] ml-1 font-black">//</span>
              </div>

              <ScriptHeading
                as="h2"
                text="Who We Are"
                highlightMode="last"
                className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
                accentColorClassName="text-[#F4A24D]"
              />

              <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  <span className="font-semibold text-gray-700">Zenik Tech is a UK & USA based digital product agency.</span> We partner with ambitious startups and enterprises to design, build and scale modern web, mobile and cybersecurity solutions.
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Our mission is simple:</span> to solve real problems with beautiful, functional technology that drives growth and creates lasting impact.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] hover:bg-gray-50 transition-all duration-300 font-bold text-xs px-6 py-3.5 rounded-full shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <span className="ml-1.5 text-sm font-sans">→</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Collage with double-layered 1-wide image above + 3-column items below - ENHANCED */}
            <div className="lg:col-span-7 space-y-6">

              {/* Wide high-quality photo representing happy team - ENHANCED with teal border and shadow */}
              <div className="rounded-[24px] overflow-hidden border-2 border-[#00BFA6]/20 shadow-[0_20px_45px_rgba(0,191,166,0.08)] aspect-[21/9] group">
                <img
                  className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                  alt="Zenik Tech Main Team"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Grid with 3 smaller columns - ENHANCED with hover zoom and captions */}
              <div className="grid grid-cols-3 gap-5">

                {/* Visual 1: team coding monitor - ENHANCED */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/70 shadow-sm aspect-square bg-[#FAF9F5] group relative">
                  <img
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&auto=format&fit=crop&q=80"
                    alt="Team workspace workspace"
                    referrerPolicy="no-referrer"
                  />
                  {/* Caption tag */}
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-bold text-gray-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Innovation
                  </div>
                </div>

                {/* Visual 2: Branded logo display on light brick with green layout plant - ENHANCED */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/80 bg-[#FAF9F5]/75 flex flex-col justify-center items-center p-3 select-none aspect-square text-center relative group hover:border-[#00BFA6] transition-all duration-300 hover:scale-105">
                  <div className="relative">

                    {/* Visual custom brand element mimicking image sign */}
                    <div className="flex items-center justify-center space-x-1.5 mb-1.5">
                      <span className="text-3xl font-black text-[#00BFA6] tracking-tighter leading-none select-none">Z</span>
                      <div className="text-left font-sans leading-none">
                        <div className="text-[11px] font-black tracking-tight text-[#0D0F14] uppercase">zenik</div>
                        <div className="text-[8px] font-bold text-gray-400 font-mono tracking-wider">tech</div>
                      </div>
                    </div>

                    {/* Small potted silhouette */}
                    <div className="text-xs text-gray-300 mt-2 filter drop-shadow">🌿</div>
                  </div>

                  {/* Absolute subtle background pattern */}
                  <div className="absolute inset-x-2 bottom-2 h-0.5 bg-gray-200/50 rounded-full"></div>

                  {/* Caption tag */}
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-bold text-gray-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Our Brand
                  </div>
                </div>

                {/* Visual 3: Female team interaction - ENHANCED */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/70 shadow-sm aspect-square bg-[#FAF9F5] group relative">
                  <img
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80"
                    alt="Two ladies collaborating with notebook"
                    referrerPolicy="no-referrer"
                  />
                  {/* Caption tag */}
                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-bold text-gray-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Collaboration
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES SECTION - REDESIGNED */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5]/45 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl text-left space-y-4 mb-16">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1 select-none">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Our Core Values</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <ScriptHeading
              as="h2"
              text="Our Core Values"
              highlightMode="last"
              className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
              accentColorClassName="text-[#F4A24D]"
            />
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Grid Layout - REDESIGNED to 4 columns (single row, responsive stack on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="relative bg-transparent p-6 sm:p-7 rounded-[24px] border-2 border-gray-200/60 flex flex-col items-start gap-4 hover:shadow-[0_20px_45px_rgba(0,191,166,0.08)] hover:border-[#00BFA6] hover:border-l-4 transition-all duration-300 text-left group"
              >
                {/* Small badge/number on top-left */}
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-[10px] font-black text-[#00BFA6] font-mono">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon with animation on hover */}
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200/50 flex items-center justify-center shadow-sm shrink-0 mt-8 group-hover:scale-110 group-hover:bg-teal-50 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-black text-[#0D0F14] tracking-tight relative inline-block">
                    <span className="relative z-10">{v.title}</span>
                    {/* SVG wavy underline */}
                    <svg className="absolute left-0 -bottom-1 w-full h-2 pointer-events-none" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0,4 Q10,2 20,4 T40,4 T60,4 T80,4 T100,4 T120,4 T140,4 T160,4 T180,4 T200,4" fill="none" stroke="#00BFA6" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    </svg>
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-normal">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 5. OUR JOURNEY HORIZONTAL TIMELINE - IMPROVED */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5]/45 border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl text-left space-y-4 mb-20 relative">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1 select-none">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Our Journey</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <ScriptHeading
              as="h2"
              text="Our Journey"
              highlightMode="last"
              className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
              accentColorClassName="text-[#F4A24D]"
            />
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Interactive timeline tracking line & circles - ENHANCED */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">

            {/* Horizontal Line connector centered vertically inside nodes - ENHANCED with dashed animation */}
            <div className="absolute top-10 left-8 right-8 h-0.5 border-t-2 border-dashed border-teal-300/60 -z-10 hidden md:block animate-pulse" style={{ animationDuration: '3s' }}></div>

            {journey.map((j, i) => (
              <div
                key={i}
                className="flex flex-col items-start text-left relative z-10 group"
              >
                {/* Visual node badge with gradient backgrounds - ENHANCED */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-50 to-teal-100/50 text-[#00BFA6] flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,191,166,0.3)] transition-all duration-300 relative">
                  <div className="absolute inset-0 rounded-full bg-[#00BFA6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {j.icon}
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  {/* Large visual year stamp - ENHANCED with font-mono bold */}
                  <span className="block text-2xl font-black text-teal-600 font-mono tracking-tight">
                    {j.year}
                  </span>

                  {/* Category */}
                  <h4 className="text-sm font-black text-[#0D0F14] tracking-tight leading-none">
                    {j.title}
                  </h4>

                  {/* Detailed summary */}
                  <p className="text-[11px] sm:text-xs text-gray-500 font-normal leading-relaxed max-w-[210px]">
                    {j.desc}
                  </p>
                </div>

                {/* Hover effect - detailed popup */}
                <div className="absolute top-20 left-0 bg-white p-4 rounded-xl shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-20 w-64 hidden lg:block">
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <span className="font-bold text-[#00BFA6]">{j.year}:</span> {j.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. RECOGNISED FOR EXCELLENCE STAR BADGES - ENHANCED */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl text-left space-y-4 mb-16 select-none">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Recognised for Excellence</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <ScriptHeading
              as="h2"
              text="Recognised for Excellence"
              highlightMode="last"
              className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
              accentColorClassName="text-[#F4A24D]"
            />
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Awards grid - ENHANCED with responsive layout and visual hierarchy */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {awards.map((a, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center text-center p-6 rounded-[24px] bg-[#FCFAF7]/40 border-2 border-gray-150/50 hover:border-[#00BFA6] hover:bg-white transition-all duration-300 group relative ${a.year === "2024" && idx === awards.length - 1 ? "shadow-[0_0_30px_rgba(0,191,166,0.15)]" : ""
                  }`}
              >
                {/* Wreath visual wrapping - ENHANCED */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-3 select-none">

                  {/* Fine illustration of double leaf wreath arcs */}
                  <svg className="absolute inset-0 w-full h-full text-teal-600/75 group-hover:text-[#00BFA6] transition-colors duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    {/* Left wreath side */}
                    <path d="M30 75 C18 60 18 35 38 25" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="28" cy="65" r="2.5" fill="currentColor" />
                    <circle cx="21" cy="53" r="2.5" fill="currentColor" />
                    <circle cx="24" cy="40" r="2.5" fill="currentColor" />
                    <circle cx="33" cy="30" r="2.5" fill="currentColor" />

                    {/* Right wreath side */}
                    <path d="M70 75 C82 60 82 35 62 25" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="72" cy="65" r="2.5" fill="currentColor" />
                    <circle cx="79" cy="53" r="2.5" fill="currentColor" />
                    <circle cx="76" cy="40" r="2.5" fill="currentColor" />
                    <circle cx="67" cy="30" r="2.5" fill="currentColor" />
                  </svg>

                  {/* Award icon/logo placeholder */}
                  <div className="relative z-10 text-center font-sans">
                    <Award className="w-8 h-8 text-[#00BFA6] mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    <span className="block text-[8px] font-black tracking-wider text-gray-900 uppercase leading-none max-w-[60px] mx-auto">
                      {a.agency === "The Manifest" ? "THE MANIFEST" : a.agency}
                    </span>
                  </div>

                  {/* Animated confetti/sparkle effect on hover */}
                  <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles size={16} className="text-[#F4A24D] animate-pulse" />
                  </div>
                  <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.2s' }}>
                    <Sparkles size={14} className="text-[#00BFA6] animate-pulse" />
                  </div>

                </div>

                {/* Subtitle list category text - ENHANCED */}
                <div className="text-[10px] sm:text-[11px] font-bold text-gray-600 tracking-tight text-center leading-tight min-h-[32px] flex items-center justify-center max-w-[140px] px-1 mb-3">
                  {a.title}
                </div>

                {/* Award year badge - CHANGED to use #F4A24D background */}
                <div className="px-3.5 py-1 rounded-full bg-[#F4A24D] border border-[#F4A24D]/50 text-[9px] font-black text-white font-mono select-none shadow-sm">
                  {a.year}
                </div>

                {/* Award certification link on hover */}
                <a
                  href="#verify"
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-[#00BFA6]/5 backdrop-blur-sm"
                  title="Verify Award"
                >
                  <span className="text-xs font-bold text-[#00BFA6] bg-white px-3 py-1.5 rounded-full shadow-lg">
                    Verify →
                  </span>
                </a>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA BANNER FOOTER SECTION */}
      <CtaBanner buttonText="Start a Project" linkTo="/contact" />

    </div>
  );
}
