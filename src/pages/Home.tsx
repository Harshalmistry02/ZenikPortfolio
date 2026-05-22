import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Shield, Sparkles, Star, ChevronLeft, ChevronRight, CheckCircle2, Trophy, Heart } from "lucide-react";
import { 
  Squiggle, 
  HanddrawnArrow, 
  HanddrawnUnderline, 
  HanddrawnCircle, 
  HanddrawnStar, 
  HanddrawnCrown, 
  HanddrawnHighlight 
} from "../components/Squiggle";
import { Marquee } from "../components/Marquee";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  const [stats, setStats] = useState({ projects: 0, clients: 0, countries: 0, satisfaction: 0 });

  // Staggered animate counters upon component load
  useEffect(() => {
    const duration = 1200;
    const intervalTime = 30;
    const stepsCount = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        projects: Math.min(Math.round((80 / stepsCount) * step), 80),
        clients: Math.min(Math.round((45 / stepsCount) * step), 45),
        countries: Math.min(Math.round((12 / stepsCount) * step), 12),
        satisfaction: Math.min(Math.round((99 / stepsCount) * step), 99),
      });

      if (step >= stepsCount) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "High-performance websites and web applications engineered for scale, speed and seamless user experience.",
      icon: (
        <svg className="w-8 h-8 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M10 8l-2 2 2 2" />
          <path d="M14 8l2 2-2 2" />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps that delight users and drive real business results.",
      icon: (
        <svg className="w-8 h-8 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with proactive security solutions, audits and compliance expertise.",
      icon: (
        <svg className="w-8 h-8 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M12 8c1.1 0 2 .9 2 2v1H10v-1c0-1.1.9-2 2-2z" />
        </svg>
      ),
      link: "/services",
    },
  ];

  const stepsList = [
    { 
      num: "1", 
      name: "Discover", 
      desc: "We learn about your goals, challenges and opportunities.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    { 
      num: "2", 
      name: "Plan", 
      desc: "We create a tailored roadmap aligned with your vision.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    { 
      num: "3", 
      name: "Build", 
      desc: "Our team builds with precision, transparency and speed.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="3 3" />
        </svg>
      )
    },
    { 
      num: "4", 
      name: "Launch", 
      desc: "We deliver, test and deploy for long-term success.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 2 .5 3.5 1.5 4.5l8-8 C12.5 7.5 14 7 16 7c5.5 0 6-4.5 6-5s-4.5.5-5 6" opacity="0.3" />
          <path d="M13.5 10.5l-8-8c0 0-3.5 3.5-3.5 6.5s3.5 3.5 3.5 3.5l8 8" />
          <path d="M22 2s-3 3-5 5l-5-5 5-2 5 2z" />
        </svg>
      )
    },
    { 
      num: "5", 
      name: "Grow", 
      desc: "We optimise, scale and support your continued growth.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
  ];

  const testimonials = [
    {
      quote: "Zenik Studio transformed our idea into a powerful platform. Their team is skilled, responsive and a pleasure to work with.",
      author: "Tom Blomfield",
      role: "Co-founder",
      company: "Monzo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "They delivered our mobile app on time and beyond expectations. The quality and attention to detail are outstanding.",
      author: "Shu Chen",
      role: "Product Lead",
      company: "Deliveroo",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Their cybersecurity expertise gave us complete peace of mind. Professional, proactive and highly recommended.",
      author: "James Worrall",
      role: "CTO",
      company: "BrewDog",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="pt-20 bg-white min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-24 bg-gradient-to-b from-teal-50/15 via-white to-white">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/15 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text and CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left relative z-10">
              
              <div className="inline-flex items-center space-x-1 font-bold text-[#00BFA6] tracking-wider text-xs uppercase">
                <span>WHAT WE DO</span>
                {/* Custom curve waves svg doodle from mockup */}
                <svg className="w-5 h-4 text-teal-400 opacity-90 inline-block" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2,9 C5,6 9,6 12,9" />
                  <path d="M5,5 C8,2 12,2 15,5" />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black text-[#0D0F14] tracking-tight leading-[1.08]">
                Building Digital <br />
                Products That Scale<span className="text-[#00BFA6] font-black">.</span>
              </h1>

              {/* Accent Overlays: Warm Orange Handwritten Script Accent with underline */}
              <div className="relative inline-block pt-1.5 pb-2">
                <span className="font-script text-3xl md:text-4xl text-[#F4A24D] select-none block leading-none font-bold">
                  For brands ready to lead.
                </span>
                <div className="absolute left-0 right-0 bottom-[-4px] h-2">
                  <HanddrawnUnderline className="text-[#F4A24D]" />
                </div>
              </div>

              <p className="text-gray-600 text-sm md:text-base max-w-lg leading-relaxed font-normal pt-2">
                Zenik Studio is a UK & USA based tech agency helping ambitious companies build secure, modern and scalable web, mobile and cybersecurity solutions.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-row flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-350 font-bold text-xs px-7 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] hover:bg-gray-50 transition-all duration-350 font-bold text-xs px-7 py-3.5 rounded-full shadow-sm group"
                >
                  <span>View Our Work</span>
                  <ArrowRight size={14} className="ml-2 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Column Custom Mockups (Interactive overlap of code editor & browser) */}
            <div className="lg:col-span-6 relative flex justify-center pt-8 lg:pt-0">
              
              {/* Outer container */}
              <div className="relative w-full max-w-md md:max-w-lg">
                
                {/* Dual Screen 1: The Dark Code Editor Window */}
                <div className="w-[88%] md:w-[92%] bg-[#0D0F14] rounded-2xl border border-gray-800 shadow-2xl relative z-10 p-5 font-mono text-xs text-gray-300">
                  
                  {/* Window Dot Indicators */}
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4 select-none">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block"></span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-sans tracking-wide">App.tsx</div>
                    <div className="w-8"></div>
                  </div>

                  {/* High Fidelity code mockup snippet matches browser display */}
                  <div className="space-y-1.5 select-none leading-relaxed text-[11px] md:text-xs text-left">
                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">1</span>
                      <p className="text-gray-400 font-mono"><span className="text-[#00BFA6] font-mono">import</span> React <span className="text-pink-400 font-mono">from</span> <span className="text-emerald-400 font-mono">'react'</span>;</p>
                    </div>
                    
                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">2</span>
                      <p className="text-gray-400 font-mono"><span className="text-[#00BFA6] font-mono">import</span> &#123; <span className="text-orange-400 font-mono">Hero</span> &#125; <span className="text-pink-400 font-mono">from</span> <span className="text-emerald-400 font-mono">'@/components/Hero'</span>;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">3</span>
                      <p className="text-gray-400 font-mono"><span className="text-[#00BFA6] font-mono">import</span> &#123; <span className="text-orange-400 font-mono">Services</span> &#125; <span className="text-pink-400 font-mono">from</span> <span className="text-emerald-400 font-mono">'@/components/Services'</span>;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">4</span>
                      <p className="text-gray-500 font-mono"></p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">5</span>
                      <p className="text-gray-400 font-mono"><span className="text-pink-400 font-mono">export default function</span> <span className="text-blue-400 font-mono">Home</span>() &#123;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">6</span>
                      <p className="text-gray-400 font-mono">&nbsp;&nbsp;<span className="text-pink-400 font-mono">return</span> (</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">7</span>
                      <p className="text-gray-400 font-mono">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-teal-400 font-bold font-mono">main</span> className=<span className="text-emerald-400 font-mono">"min-h-screen"</span>&gt;</p>
                    </div>

                    <div className="flex bg-teal-500/10 border-l-2 border-[#00BFA6]">
                      <span className="w-6 text-teal-400 text-right pr-2 font-semibold font-mono">8</span>
                      <p className="text-white font-mono">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#00BFA6] font-bold font-mono">Hero</span> /&gt;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">9</span>
                      <p className="text-gray-400 font-mono">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-orange-400 font-bold font-mono">Services</span> /&gt;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">10</span>
                      <p className="text-gray-400 font-mono">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-teal-400 font-bold font-mono">main</span>&gt;</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">11</span>
                      <p className="text-gray-400 font-mono">&nbsp;&nbsp;);</p>
                    </div>

                    <div className="flex">
                      <span className="w-6 text-gray-600 text-right pr-2 font-mono">12</span>
                      <p className="text-gray-400 font-mono">&#125;</p>
                    </div>
                  </div>

                </div>

                {/* Dual Screen 2: Foreground overlapping Browser window Mock */}
                <div className="absolute right-[-10px] md:right-[-25px] bottom-[-25px] md:bottom-[-35px] w-[55%] md:w-[58%] bg-white rounded-2xl border border-gray-150 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative z-20 overflow-hidden text-left flex flex-col">
                  
                  {/* Browser simulated top header */}
                  <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center justify-between select-none">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/70 block"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-400/70 block"></span>
                      <span className="w-2 h-2 rounded-full bg-green-400/70 block"></span>
                    </div>
                    {/* URL bar mock */}
                    <div className="flex items-center bg-gray-100 text-[8px] text-gray-500 py-1 px-3 rounded-md max-w-[130px] w-full mx-2 border border-gray-200/40 select-none font-mono">
                      <span className="mr-1 text-[8px]">🔒</span> https://zenik.studio
                    </div>
                    <div className="w-3"></div>
                  </div>

                  {/* Browser content viewport */}
                  <div className="p-4 flex-1 space-y-4 flex flex-col justify-between select-none bg-white">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center text-[10px] border-b border-gray-50 pb-1.5">
                      <span className="font-extrabold text-gray-900 tracking-tight font-sans">Zenik Studio</span>
                      <span className="text-gray-400 font-extrabold text-sm leading-none">☰</span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-1 text-left">
                      <h4 className="text-xs md:text-[13px] font-black text-gray-950 tracking-tight leading-tight">
                        Secure. Scalable.<br />Built for Impact<span className="text-[#00BFA6] font-black font-sans">.</span>
                      </h4>
                    </div>

                    {/* Action button */}
                    <div className="text-left">
                      <button className="text-[9px] font-extrabold border border-gray-200 px-3.5 py-1 rounded-full text-gray-700 hover:border-[#00BFA6] hover:text-[#00BFA6] transition-colors leading-none inline-flex items-center gap-1 cursor-pointer">
                        <span>Get Started</span> <span className="font-sans">→</span>
                      </button>
                    </div>

                    {/* Performance mini chart card */}
                    <div className="bg-[#FAF9F5] rounded-xl border border-orange-100/50 p-2.5 space-y-1 text-left">
                      <span className="text-[8.5px] font-bold text-gray-400 block tracking-wide font-sans">Project Performance</span>
                      <div className="flex items-baseline space-x-1 leading-none">
                        <span className="text-[#00BFA6] font-black font-mono text-[11px]">↑ 72%</span>
                        <span className="text-[7.5px] text-gray-400 font-semibold font-mono">vs last month</span>
                      </div>
                      
                      {/* Live Area path chart in SVG */}
                      <div className="h-10 pt-2 shrink-0">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.45" />
                              <stop offset="100%" stopColor="#00BFA6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,25 Q15,10 30,18 T60,6 T90,12 L100,2 L100,30 L0,30 Z"
                            fill="url(#areaGradient)"
                          />
                          <path
                            d="M0,25 Q15,10 30,18 T60,6 T90,12 L100,2"
                            fill="none"
                            stroke="#00BFA6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY INNOVATIVE COMPANIES SECTION */}
      <Marquee />

      {/* 3. CORE SERVICE PREVIEW */}
      <section className="py-24 bg-white relative overflow-hidden text-center">
        {/* Subtle decorative stars */}
        <div className="absolute top-12 left-10 text-orange-100/80 transform rotate-12 select-none pointer-events-none">
          <HanddrawnStar className="w-10 h-10" />
        </div>
        <div className="absolute bottom-16 right-10 text-teal-50/70 select-none pointer-events-none">
          <HanddrawnStar className="w-12 h-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00BFA6] bg-teal-55/40 px-3 py-1 rounded-full border border-teal-100/55 select-none font-mono">
              Core Offering
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D0F14] tracking-tight leading-none mt-2">
              Our Premier Services
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mx-auto mt-2"></div>
          </div>

          {/* Service Cards Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
            {services.map((svc, i) => (
              <div
                key={i}
                className="group bg-white rounded-[28px] p-8 md:p-10 border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.05)] transition-all duration-350 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
              >
                
                {/* Visual Icon Container */}
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-teal-50/70 border border-teal-100/40 rounded-2xl flex items-center justify-center text-[#00BFA6] group-hover:scale-105 group-hover:bg-[#00BFA6] group-hover:text-white transition-all duration-300 shadow-sm">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#0D0F14] tracking-tight">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-normal">{svc.description}</p>
                </div>

                {/* Footer details link */}
                <div className="pt-6 border-t border-gray-50 mt-8 flex items-center justify-between">
                  <Link
                    to={svc.link}
                    className="inline-flex items-center text-xs font-black uppercase text-[#00BFA6] tracking-wider group-hover:text-[#0D0F14] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROCESS STEP: HOW WE WORK TOGETHER */}
      <section className="py-24 bg-[#FAF9F5] border-y border-orange-100/40 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#eedcd0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100/70 select-none font-mono">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D0F14] tracking-tight mt-2">
              Our Process
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mx-auto mt-2"></div>
          </div>

          {/* Dotted Connection line with step cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="absolute top-10 left-12 right-12 h-0.5 border-t border-dashed border-teal-300/40 -z-10 hidden md:block"></div>

            {stepsList.map((st, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4 relative group"
              >
                
                {/* Numbered Header circle */}
                <div className="w-7 h-7 bg-[#00BFA6] text-white font-mono font-bold text-xs rounded-full flex items-center justify-center shadow-md border-2 border-white select-none relative z-10">
                  {st.num}
                </div>

                {/* Primary round Line Icon container */}
                <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm relative group-hover:border-[#00BFA6] group-hover:scale-108 transition-all duration-300">
                  {st.icon}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#00BFA6]/40 scale-110 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Name */}
                <h3 className="text-base font-black text-[#0D0F14] tracking-tight">{st.name}</h3>

                {/* Short Brief */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-[170px] mx-auto font-semibold">
                  {st.desc}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FLOATING METRICS SUMMARY ROW */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Floating border container card */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-150/85 shadow-[0_15px_45px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="flex items-center space-x-5 text-left md:pl-0 pt-0">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#00BFA6] shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-[#0D0F14] font-mono leading-none">{stats.projects}+</div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-gray-400 mt-1.5 leading-none">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-5 text-left md:pl-8 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#00BFA6] shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-[#0D0F14] font-mono leading-none">{stats.clients}+</div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-gray-400 mt-1.5 leading-none">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-5 text-left md:pl-8 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#00BFA6] shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-[#0D0F14] font-mono leading-none">{stats.countries}+</div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-gray-400 mt-1.5 leading-none">
                  Countries Served
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-5 text-left md:pl-8 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#00BFA6] shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-black text-[#0D0F14] font-mono leading-none">{stats.satisfaction}%</div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-gray-400 mt-1.5 leading-none">
                  Client Satisfaction
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. WHAT OUR CLIENTS SAY TESTIMONIALS */}
      <section className="py-24 bg-white relative border-t border-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5  rounded-full border border-teal-100/70 inline-flex items-center gap-1 select-none font-mono">
              WHAT OUR CLIENTS SAY
              <svg className="w-5 h-4 text-teal-400 opacity-90 inline" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M2,9 C5,6 9,6 12,9" />
                <path d="M5,5 C8,2 12,2 15,5" />
              </svg>
            </span>
            <div className="h-1"></div>
          </div>

          {/* Testimonial cards grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className={`p-10 rounded-[32px] border transition-all duration-350 flex flex-col justify-between cursor-pointer relative overflow-hidden bg-[#FAF9F6]/30 hover:bg-white ${
                  index === activeTestimonial
                    ? "border-[#00BFA6] shadow-[0_20px_50px_rgba(0,191,166,0.04)]"
                    : "border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="space-y-6">
                  {/* Rating stars */}
                  <div className="flex text-[#00BFA6] space-x-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <p className="text-gray-900 font-normal text-sm tracking-wide leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                {/* Profile header */}
                <div className="flex items-center space-x-3.5 pt-6 mt-8 border-t border-dashed border-gray-100 select-none">
                  <img
                    className="w-11 h-11 rounded-full object-cover border-2 border-teal-200/50"
                    src={test.avatar}
                    alt={test.author}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0D0F14]">{test.author}</h4>
                    <p className="text-[11px] text-gray-400 font-bold leading-normal mt-0.5">
                      {test.role}, <span className="text-teal-600 font-extrabold">{test.company}</span>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Testimonial slider indicators */}
          <div className="flex justify-center space-x-2.5 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? "bg-[#00BFA6] w-6" : "bg-gray-200/80"
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PRESERVED FULL CUSTOM CTA BANNER CORES WITH PURPLE STYLING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Custom CTA Banner background with beautiful pastel colors */}
          <div className="rounded-[40px] bg-gradient-to-r from-amber-50/75 via-pink-50/45 to-purple-50/70 border border-orange-100/50 p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            
            {/* Soft decorative lightburst flare background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#fff9f0_10%,transparent_70%)] opacity-85 select-none pointer-events-none"></div>

            {/* Left Header Handdrawn Script Text */}
            <div className="space-y-3 relative z-10 text-center md:text-left">
              <div className="inline-block transform -rotate-2">
                <span className="font-script text-4xl md:text-5xl text-purple-600 select-none block leading-tight font-black tracking-tight">
                  Have a project in mind?
                </span>
              </div>
            </div>

            {/* Right Subtext Title and Pill Black button */}
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 shrink-0 select-none">
              <span className="text-sm text-gray-500 font-extrabold leading-none pb-1 md:pb-0 font-sans tracking-tight">
                Let's build something amazing together.
              </span>
              
              <div className="relative">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-350 font-black text-xs px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 group active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                {/* Handdrawn curved arrow decoration on the right pointing to start a project button */}
                <div className="absolute top-12 right-[-20px] text-purple-400 rotate-[85deg] pointer-events-none opacity-85 translate-y-2 translate-x-2 md:block hidden">
                  <svg className="w-12 h-12" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M10,12 C40,8 80,18 85,42 C85,44 78,44 75,38" />
                    <polyline points="68,32 76,43 85,32" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
