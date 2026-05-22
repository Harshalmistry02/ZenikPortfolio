import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Shield, Check, Star, Settings, Code, Zap
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
import { Marquee } from "../components/Marquee";

export function Services() {
  const fullServices = [
    { 
      title: "Web Development", 
      desc: "High-performance websites and web applications engineered for scale, speed and seamless user experience.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      bg: "bg-pink-50 text-pink-500 border-pink-100"
    },
    { 
      title: "Mobile Apps", 
      desc: "Native iOS & Android apps designed for speed, outstanding gesture responsiveness and maximum conversion.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      bg: "bg-teal-50 text-teal-500 border-teal-100"
    },
    { 
      title: "UI/UX Design", 
      desc: "Delightful digital experience interfaces built on empirical user research, rigorous wireframes & brand guidelines.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      bg: "bg-blue-50 text-blue-500 border-blue-100"
    },
    { 
      title: "eCommerce", 
      desc: "Robust shopping platforms with frictionless custom checkout pipelines, multi-currency modules & fast response times.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      bg: "bg-red-50 text-red-500 border-red-100"
    },
    { 
      title: "SaaS Development", 
      desc: "Complete multi-tenant frameworks configured with flexible subscription tiers, high stability and complex analytics.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
      bg: "bg-cyan-50 text-cyan-500 border-cyan-100"
    },
    { 
      title: "API Integration", 
      desc: "Bulletproof REST & GraphQL services securely structured for heavy query volumes and multi-app syncs.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      bg: "bg-indigo-50 text-indigo-500 border-indigo-100"
    },
    { 
      title: "Cloud Solutions", 
      desc: "Ultra-scalable Google Cloud and AWS systems deployed with automated elasticity and low server latency.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      bg: "bg-blue-50 text-blue-400 border-blue-100"
    },
    { 
      title: "DevOps", 
      desc: "Integrated pipelines (CI/CD) and isolated runtime registries enforcing optimal zero-downtime updates.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
      bg: "bg-pink-50 text-pink-400 border-pink-100"
    },
    { 
      title: "Database Design", 
      desc: "Precision relational and high-performance NoSQL architectures optimized for high transaction consistency.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      bg: "bg-purple-50 text-purple-500 border-purple-100"
    },
    { 
      title: "Cybersecurity", 
      desc: "Proactive penetration testing, complete standard audits and enterprise threat guard mitigation structures.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      bg: "bg-violet-50 text-violet-500 border-violet-100"
    },
    { 
      title: "QA & Testing", 
      desc: "Automated end-to-end framework test cases preventing crashes, bugs and logic regressions before rollout.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      bg: "bg-teal-50 text-teal-600 border-teal-100"
    },
    { 
      title: "Performance", 
      desc: "Rigorous system profiling to optimize core speed, asset size and server responses to score 100/100.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      bg: "bg-orange-50 text-orange-500 border-orange-100"
    },
    { 
      title: "Product Strategy", 
      desc: "Strategic product framing, feature scoping, and interactive prototype modeling aligning user metrics.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      bg: "bg-amber-50 text-amber-500 border-amber-100"
    },
    { 
      title: "Consulting", 
      desc: "Direct guidance on database stacks, legacy code refactoring and systems scaling securely.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bg: "bg-teal-50 text-teal-500 border-teal-100"
    },
    { 
      title: "Maintenance", 
      desc: "Continuous packages monitoring, crucial database back-ups, and live diagnostic alerts configured.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      bg: "bg-cyan-50 text-cyan-500 border-cyan-100"
    },
    { 
      title: "Support", 
      desc: "Constant tech standby support guaranteeing fast assistance, security updates and logic support.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16.28a11.19 11.19 0 0 1-1.24 3.25c-1.37-1.34-3.14-2.12-5.06-2.12s-3.69.78-5.06 2.12a11.19 11.19 0 0 1-1.24-3.25C9.43 14.88 12 14.01 12 14.01s2.57.87 3.6 2.27z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      bg: "bg-emerald-50 text-emerald-500 border-emerald-100"
    },
    { 
      title: "Analytics", 
      desc: "Custom product telemetry tracking conversions, user drop-offs and vital app analytics.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      bg: "bg-purple-50 text-purple-400 border-purple-100"
    },
    { 
      title: "Branding", 
      desc: "Elegant design colors pairing, custom logo designs and corporate corporate theme layouts.", 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.01168 18.043 5.48311 17.1517 6.19616 16.4851C7.1406 15.6023 8.41169 15.1 9.75 15.1c1.3383 0 2.6094.5023 3.5538 1.3851C14.0169 17.1517 14.4883 18.043 14.6414 19c1.7683-1.8038 2.8586-4.2745 2.8586-7C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12c0 .9421.2335 1.829.6455 2.608" />
        </svg>
      ),
      bg: "bg-amber-50 text-amber-500 border-amber-100"
    }
  ];

  const stepsList = [
    { 
      num: "1", 
      name: "Discover", 
      desc: "We understand your goals, challenges and opportunities.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    { 
      num: "2", 
      name: "Plan", 
      desc: "We create a clear roadmap tailored to your needs.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    { 
      num: "3", 
      name: "Build", 
      desc: "Our team builds with speed, quality and precision.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    { 
      num: "4", 
      name: "Launch", 
      desc: "We deliver, test and deploy seamlessly.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5C4 22 6 21 7.5 19.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 2 .5 3.5 1.5 4.5l8-8" />
          <path d="M13.5 10.5l-8-8" />
          <path d="M22 2s-3 3-5 5l-5-5" />
        </svg>
      )
    },
    { 
      num: "5", 
      name: "Grow", 
      desc: "We optimize and scale for long-term success.",
      icon: (
        <svg className="w-6 h-6 text-gray-500 group-hover:text-[#00BFA6] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F5]/30 to-white">
        {/* Subtle background nodes */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Text Block */}
            <div className="lg:col-span-6 space-y-6 text-left relative z-10">
              
              {/* Green layout doodles */}
              <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
                <span className="text-[#00BFA6] mr-1 font-black">//</span>
                <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">What we do</span>
                <span className="text-[#00BFA6] ml-1 font-black">//</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] font-black text-[#0D0F14] tracking-tight leading-[1.08] text-left">
                Services Built for <br />
                Scale, Speed & Security.
              </h1>

              {/* Accent text: Cursive script in orange */}
              <div className="relative pt-1 pb-2">
                <p className="font-script text-3xl md:text-4xl text-[#F4A24D] font-bold tracking-wide text-left leading-none">
                  for businesses that mean it
                </p>
                <div className="w-56 h-2 mt-1 relative">
                  <HanddrawnUnderline className="text-[#F4A24D]" />
                </div>
              </div>

              {/* Paragraph block */}
              <p className="text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed font-normal text-left pt-2">
                We partner with ambitious companies across the UK & USA to build digital products that are modern, scalable and secure — engineered for real-world impact.
              </p>

              {/* CTAs */}
              <div className="flex flex-row flex-wrap items-center gap-4 pt-4">
                <a
                  href="#all-services"
                  className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-300 font-bold text-xs px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 group shrink-0"
                >
                  <span>Explore Services</span>
                  <span className="ml-1 text-sm font-sans">↓</span>
                </a>

                <Link
                  to="/work"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] hover:bg-gray-50 transition-all duration-300 font-bold text-xs px-6 py-3.5 rounded-full shadow-sm"
                >
                  <span>View Our Work</span>
                  <span className="ml-1 text-sm font-sans">→</span>
                </Link>
              </div>

            </div>

            {/* Right Hero Block representing 01 Web Development & Code overlapping with layout preview */}
            <div className="lg:col-span-6 relative">
              
              {/* Rounded main border card as requested by design */}
              <div className="bg-[#FAF9F5] rounded-[32px] border border-gray-150 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-stretch gap-8 relative overflow-hidden">
                
                {/* Tech specifications left */}
                <div className="flex-1 flex flex-col justify-between text-left relative z-10">
                  <div>
                    {/* Index identifier circle outline in teal circle style */}
                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6] mb-5 shadow-sm">
                      01
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-[#0D0F14] tracking-tight">
                      Web Development
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal mt-3 max-w-[200px]">
                      Modern websites and web apps built with Next.js, React and cutting-edge technologies.
                    </p>
                  </div>
                  
                  {/* Square tech icon badges with smooth hover scaling */}
                  <div className="flex items-center gap-2 pt-6">
                    <div className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center font-black text-sm text-[#0D0F14] shadow-sm font-sans select-none hover:scale-105 transition-transform" title="Next.js">
                      N
                    </div>
                    <div className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center text-sm text-[#00BFA6] shadow-sm select-none hover:scale-105 transition-transform" title="React">
                      ⚛
                    </div>
                    <div className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center font-bold text-[13px] text-[#0C121A] shadow-sm font-sans select-none hover:scale-105 transition-transform" title="TypeScript">
                      TS
                    </div>
                  </div>
                </div>

                {/* Simulated workspace right */}
                <div className="flex-1 min-h-[300px] relative select-none">
                  
                  {/* Codeline Editor Frame (behind left) */}
                  <div className="absolute left-0 top-2 w-[85%] bg-[#0D0F14] rounded-2xl border border-gray-800 shadow-xl p-4 font-mono text-[9px] sm:text-[10px] text-gray-400 z-10 text-left">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-red-500/85 block"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500/85 block"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500/85 block"></span>
                      </div>
                      <span className="text-[9px] text-gray-500">app/page.tsx</span>
                      <div className="w-4"></div>
                    </div>

                    <div className="space-y-1 font-mono text-[9px] leading-tight text-gray-300">
                      <div><span className="text-pink-400">import</span> Hero <span className="text-pink-400">from</span> <span className="text-emerald-400">"@/components/Hero"</span></div>
                      <div><span className="text-pink-400">import</span> &#123; Metadata &#125; <span className="text-pink-400">from</span> <span className="text-emerald-400">"next"</span></div>
                      <div className="h-1"></div>
                      <div><span className="text-pink-400">export const</span> metadata: Metadata = &#123;</div>
                      <div className="pl-3">title: <span className="text-emerald-400">"Zenik Studio | Digital Agency"</span>,</div>
                      <div className="pl-3">description: <span className="text-emerald-400">"Built for scale."</span></div>
                      <div>&#125;</div>
                      <div className="h-1"></div>
                      <div><span className="text-pink-400">export default function</span> <span className="text-blue-400">Home</span>() &#123;</div>
                      <div className="pl-3"><span className="text-pink-400">return</span> (</div>
                      <div className="pl-6">&lt;<span className="text-teal-400">main</span>&gt;</div>
                      <div className="pl-9">&lt;<span className="text-[#00BFA6] font-bold">Hero</span> /&gt;</div>
                      <div className="pl-6">&lt;/<span className="text-teal-400">main</span>&gt;</div>
                      <div className="pl-3">);</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  {/* Visual layout frame mockup (front right) */}
                  <div className="absolute right-0 bottom-2 w-[72%] bg-white rounded-2xl border border-gray-200/90 shadow-2xl p-4 flex flex-col justify-between space-y-4 z-20 text-left">
                    {/* Browser top indicators */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                      <div className="flex items-center space-x-1">
                        <span className="w-3.5 h-3.5 bg-[#00BFA6] text-white flex items-center justify-center text-[7px] font-black rounded-sm font-sans">Z</span>
                        <span className="text-[8px] font-black text-gray-950 font-sans tracking-tight">zenik</span>
                      </div>
                      <span className="text-[6.5px] font-mono bg-gray-100 text-gray-400 px-2.5 py-0.5 rounded border border-gray-200/40">127.0.0.1</span>
                    </div>

                    {/* Wireframe display preview */}
                    <div className="space-y-1.5">
                      <div className="w-full h-8 bg-gray-50 rounded-lg border border-gray-100 border-dashed flex items-center justify-center">
                        <div className="w-10 h-1.5 bg-gray-200 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100 border-dashed"></div>
                        <div className="w-full h-12 bg-gray-100/50 rounded-lg border border-gray-150 border-dashed"></div>
                      </div>
                    </div>

                    {/* Left block list represent layout components */}
                    <div className="bg-gray-50/75 p-2 rounded-xl border border-gray-100">
                      <div className="flex items-center justify-between text-[7.5px] font-bold text-gray-400 pb-1 border-b border-gray-150/40">
                        <span className="font-sans">⚙️ Components</span>
                        <span className="font-mono text-teal-500">active</span>
                      </div>
                      <div className="space-y-1 pt-1.5 text-[7px] font-medium text-gray-600">
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 text-teal-500 font-sans">✓</span> <span>Hero</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 text-teal-500 font-sans">✓</span> <span>Features</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 text-teal-500 font-sans">✓</span> <span>Solutions</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 text-teal-500 font-sans">✓</span> <span>Testimonials</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 text-teal-500 font-sans">✓</span> <span className="text-gray-400">Footer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. LOGOS MARQUEE */}
      <div className="relative py-4 bg-[#FAF9F6] border-y border-gray-100/55">
        <div className="absolute top-[-26px] left-[15%] text-[#00BFA6] z-10 p-0 transform -rotate-12 select-none hover:scale-105 transition-transform">
          <span className="font-script text-lg sm:text-xl font-black text-teal-500 tracking-wide bg-white px-2.5 py-1 rounded-full border border-teal-100 inline-block shadow-sm">
            Trusted by forward-thinking companies ⚡
          </span>
          {/* Sketch point arrows */}
          <div className="absolute right-[-4px] bottom-[-24px] rotate-55 scale-[0.6] opacity-75">
            <HanddrawnArrow />
          </div>
        </div>
        <Marquee />
      </div>

      {/* 3. ROW SERVICE BLOCKS OVERSEEING STOCKS */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-36">
          
          {/* 02. MOBILE APP DEVELOPMENT BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Column 1: Info (left) */}
            <div className="lg:col-span-5 space-y-6 text-left relative z-10">
              
              {/* Odoo style circular list index identifier */}
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6] mb-5 shadow-sm">
                02
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                Mobile App Development
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                Native iOS & Android apps designed for performance, engagement and scale.
              </p>

              {/* Native indicators buttons with icons with circle badge icons below */}
              <div className="flex items-center gap-3 pt-2">
                <button 
                  className="w-10 h-10 rounded-full bg-[#0D0F14] hover:bg-[#00BFA6] transition-colors flex items-center justify-center text-white cursor-default"
                  title="iOS Apple Support"
                >
                  {/* Apple  symbol */}
                  <span className="text-base font-extrabold leading-none -translate-y-0.5"></span>
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors flex items-center justify-center text-gray-700 cursor-default"
                  title="Android Google Support"
                >
                  <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                    <path d="M17.523 15.3c-.328 0-.594-.266-.594-.595c0-.327.266-.594.594-.594c.329 0 .596.267.596.594c0 .329-.267.595-.596.595m-11.046 0c-.328 0-.595-.266-.595-.595c0-.327.267-.594.595-.594c.328 0 .595.267.595.594c0 .329-.267.595-.595.595M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m4.186 3.518l1.41-1.41a.3.3 0 0 1 .424 0a.3.3 0 0 1 0 .424l-1.4 1.4a8.683 8.683 0 0 1 1.761 2.378H5.618a8.68 8.68 0 0 1 1.761-2.378l-1.4-1.4a.3.3 0 0 1 0-.424a.3.3 0 0 1 .424 0l1.41 1.41C9.171 7.159 10.531 6.81 12 6.81c1.469 0 2.829.35 3.814 1.292" opacity="0.85" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Column 2: Dashboard Mockups Phones (right) */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              
              {/* Overlapping double phone screen containers */}
              <div className="relative w-full max-w-sm sm:max-w-md h-[340px] xs:h-[380px] sm:h-[420px] select-none flex items-center justify-center bg-transparent">
                
                {/* Phone 1: Behind Left (light/teal themed) */}
                <div className="absolute left-4 top-4 w-[52%] sm:w-[50%] h-[92%] bg-white rounded-[24px] border border-gray-150 shadow-xl overflow-hidden z-10 flex flex-col justify-between p-3.5">
                  {/* Speaker bar / Status indicator */}
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50 text-[7px] text-gray-400 font-mono">
                    <span>9:41</span>
                    <div className="w-12 h-2.5 bg-gray-100 rounded-full border border-gray-200/50 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-black block mr-1"></span>
                    </div>
                    <span>100%</span>
                  </div>

                  {/* Body Dashboard View */}
                  <div className="flex-1 space-y-3 pt-3 text-left">
                    <div className="space-y-0.5">
                      <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-teal-600 font-mono">Mobile App</span>
                      <h4 className="text-sm font-black text-gray-950 font-sans tracking-tight">Dashboard</h4>
                    </div>

                    {/* Simulation Card visual inside widget */}
                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-2.5 text-white space-y-1 shadow-sm">
                      <span className="text-[7.5px] uppercase tracking-widest font-bold opacity-85 block">Total Revenue</span>
                      <h5 className="text-[13px] font-black font-mono tracking-tight">$24,800</h5>
                      <p className="text-[6px] tracking-wide font-medium opacity-75">Card •••• 4820</p>
                    </div>

                    {/* Recent conversions transactions */}
                    <div className="space-y-1.5">
                      <span className="text-[8px] font-bold text-gray-400 block tracking-wide">Recent Payments</span>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between p-1.5 bg-[#FAF9F5] border border-gray-100 rounded-lg">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-4 h-4 rounded-full bg-[#0D0F14] text-white flex items-center justify-center text-[7px] font-bold">M</span>
                            <div className="text-left">
                              <span className="text-[7px] font-bold text-gray-900 block leading-none">Monzo Bank Ltd.</span>
                              <span className="text-[5.5px] text-gray-400">Transfer</span>
                            </div>
                          </div>
                          <span className="text-[7px] font-black text-rose-500 font-mono">-$85.00</span>
                        </div>

                        <div className="flex items-center justify-between p-1.5 bg-[#FAF9F5] border border-gray-100 rounded-lg">
                          <div className="flex items-center space-x-1.5">
                            <span className="w-4 h-4 rounded bg-rose-100 text-rose-500 flex items-center justify-center text-[7px] font-bold font-sans">A</span>
                            <div className="text-left">
                              <span className="text-[7px] font-bold text-gray-900 block leading-none">Airbnb Ltd.</span>
                              <span className="text-[5.5px] text-gray-400">Booking</span>
                            </div>
                          </div>
                          <span className="text-[7px] font-black text-rose-500 font-mono">-$142.20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone 2: Floating Overlapping Right (white/graph-rich theme) */}
                <div className="absolute right-4 bottom-4 w-[52%] sm:w-[50%] h-[92%] bg-white rounded-[24px] border border-gray-150 shadow-2xl overflow-hidden z-20 flex flex-col justify-between p-3.5 transform translate-x-[-10px] sm:translate-x-[-20px]">
                  {/* Status */}
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50 text-[7px] text-gray-400 font-mono">
                    <span>9:41</span>
                    <div className="w-12 h-2.5 bg-gray-100 rounded-full border border-gray-200/50 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-black block mr-1"></span>
                    </div>
                    <span>100%</span>
                  </div>

                  {/* Body Analytics view */}
                  <div className="flex-1 space-y-3 pt-3 text-left flex flex-col justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[7.5px] uppercase tracking-wider font-extrabold text-teal-600 font-mono">Metrics</span>
                      <h4 className="text-sm font-black text-gray-950 font-sans tracking-tight">Analytics</h4>
                    </div>

                    {/* Chart visual graph area */}
                    <div className="bg-gray-50/70 rounded-xl p-2.5 border border-gray-100 flex-1 flex flex-col justify-between space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[7.5px] text-gray-400 font-medium">User Retention</span>
                        <span className="text-[8px] font-black text-[#00BFA6] font-mono">↑ 72%</span>
                      </div>

                      {/* Area graph visually using simple inline SVG shape */}
                      <div className="h-14 w-full pt-1">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 35" preserveAspectRatio="none">
                          <path
                            d="M0,35 Q15,12 30,22 T60,8 T90,16 L100,5 L100,35"
                            fill="#E6F9F6"
                          />
                          <path
                            d="M0,35 Q15,12 30,22 T60,8 T90,16 L100,5"
                            fill="none"
                            stroke="#00BFA6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <circle cx="60" cy="8" r="2.5" fill="#00BFA6" />
                        </svg>
                      </div>

                      <div className="flex justify-between items-center text-[5.5px] text-gray-400 font-mono">
                        <span>United States</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[82%] h-full bg-[#00BFA6] rounded-full"></div>
                      </div>

                      <div className="flex justify-between items-center text-[5.5px] text-gray-400 font-mono">
                        <span>United Kingdom</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[15%] h-full bg-[#00BFA6] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* 03. CYBERSECURITY BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Column 1: Info (left) */}
            <div className="lg:col-span-12 lg:order-last lg:col-span-5 space-y-6 text-left relative z-10">
              
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-mono text-lg font-black text-[#00BFA6] mb-5 shadow-sm">
                03
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">
                Cybersecurity
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                Enterprise-grade security solutions to protect your infrastructure, data and users.
              </p>

              {/* Three inline pills checklist tags to match the wireframe image exactly! */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 pt-2 text-[#0D0F14] font-mono text-xs">
                
                <span className="inline-flex items-center bg-[#FCFAF7] border border-gray-150 rounded-full px-3 py-1.5 font-bold tracking-tight text-gray-800 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-[#00BFA6] flex items-center justify-center mr-1.5 text-[10px] font-sans">✓</span>
                  OWASP Audited
                </span>

                <span className="inline-flex items-center bg-[#FCFAF7] border border-gray-150 rounded-full px-3 py-1.5 font-bold tracking-tight text-gray-800 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-[#00BFA6] flex items-center justify-center mr-1.5 text-[10px] font-sans">🔒</span>
                  Secure Auth
                </span>

                <span className="inline-flex items-center bg-[#FCFAF7] border border-gray-150 rounded-full px-3 py-1.5 font-bold tracking-tight text-gray-800 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-teal-100 text-[#00BFA6] flex items-center justify-center mr-1.5 text-[10px] font-sans">✓</span>
                  GDPR Compliant
                </span>

              </div>

            </div>

            {/* Column 2: Cybersecurity Visual Shield Radar Mesh (right) */}
            <div className="lg:col-span-7 flex justify-center lg:justify-start">
              
              {/* Complex SVG cyber wireframe mesh mockup block */}
              <div className="relative w-full max-w-sm sm:max-w-md h-[300px] sm:h-[350px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-[32px] border border-gray-100 bg-[#FAF9F5]/40 flex items-center justify-center overflow-hidden select-none">
                
                {/* Cyber dashboard style visual radar mesh circles background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none">
                  {/* Concentric dashed geometric rings */}
                  <div className="w-[80%] h-[80%] rounded-full border border-dashed border-teal-300 animate-spin" style={{ animationDuration: "35s" }}></div>
                  <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-teal-200 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }}></div>
                  <div className="absolute w-[40%] h-[40%] rounded-full border border-dashed border-teal-100"></div>
                </div>

                {/* Concentric circular glowing tech lines overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-[82%] h-[82%] overflow-visible text-[#00BFA6]/40 text-teal-400" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.8" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 3" />
                    
                    {/* Glowing radar scan lines */}
                    <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
                    <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                  </svg>
                </div>

                {/* Central shining white/neon shield element */}
                <div className="relative w-44 h-44 bg-white/90 rounded-full border border-teal-100/65 flex items-center justify-center shadow-lg relative z-10 animate-fade-up">
                  
                  {/* Outer security shell network mesh vector */}
                  <svg className="absolute w-[85%] h-[85%] text-teal-400/35 overflow-visible" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <path d="M50 5 L90 25 L90 60 L50 95 L10 60 L10 25 Z" />
                    <line x1="50" y1="5" x2="50" y2="95" />
                    <line x1="10" y1="60" x2="90" y2="60" />
                    <line x1="10" y1="25" x2="90" y2="25" />
                  </svg>

                  {/* Shield with solid checking mark in the center */}
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 border-2 border-[#00BFA6] flex items-center justify-center relative z-20 shadow-inner">
                    {/* Shiny blue-teal check icon */}
                    <svg className="w-7 h-7 text-[#00BFA6] fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  {/* Shield graphic background wrapper */}
                  <div className="absolute w-28 h-32 text-teal-500 opacity-[0.08]" style={{ pointerEvents: "none" }}>
                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. ALL SERVICES 18-CAPABILITY DISPLAY GRID */}
      <section id="all-services" className="py-24 bg-[#FAF9F5]/45 border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tagline indices */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 relative">
            
            <div className="flex items-center justify-center space-x-1.5 select-none animate-pulse">
              <span className="text-[#00BFA6] font-extrabold text-[10px] uppercase tracking-widest pl-1 leading-none font-mono">
                // ALL SERVICES //
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0F14] tracking-tight text-center leading-none mt-3">
              Everything you need.
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Grid Container for 18 responsive cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 relative z-10">
            {fullServices.map((svc, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-[24px] border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_12px_40px_rgba(0,191,166,0.04)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Sleek icon shape envelope */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm ${svc.bg} group-hover:scale-105 transition-transform`}>
                    {svc.icon}
                  </div>
                  
                  <h3 className="text-sm font-extrabold text-[#0D0F14] leading-tight mt-4 group-hover:text-[#00BFA6] transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-[11px] text-gray-400 font-normal leading-relaxed mt-2 line-clamp-3">
                    {svc.desc}
                  </p>
                </div>

                <div className="flex items-center text-[9px] text-teal-600 font-black font-mono pt-3 border-t border-gray-50/75 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-1">✓</span> STACK ACTIVE
                </div>
              </div>
            ))}
          </div>

          {/* Large View All Services Pill Button */}
          <div className="text-center pt-12">
            <button className="bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all inline-flex items-center gap-1.5">
              <span>View All Services</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH SUCCESS TIMER TRACKER */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[#00BFA6] font-bold text-[10px] tracking-widest uppercase font-mono bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100/40">
              // OUR APPROACH //
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0F14] tracking-tight leading-none mt-4">
              A process built for success.
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Steps Horizontal Flex tracking line with absolute dashes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 relative text-center">
            
            {/* Dashed Connecting Line in Background */}
            <div className="absolute top-12 left-10 right-10 h-0.5 border-t border-dashed border-teal-200/50 -z-10 hidden md:block"></div>

            {stepsList.map((step, idx) => (
              <div 
                key={idx}
                className="flex flex-col items-center group relative p-4"
              >
                {/* Visual Icon Container with nice white circle shadow layout */}
                <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative group-hover:border-[#00BFA6] group-hover:scale-105 transition-all duration-300">
                  {step.icon}
                  {/* Small absolute count circle index tag */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-[10px] font-black font-mono border-2 border-white">
                    {step.num}
                  </span>
                </div>

                {/* Subheading Title */}
                <h3 className="text-base font-black text-[#0D0F14] mt-6 tracking-tight group-hover:text-[#00BFA6] transition-colors">
                  {step.name}
                </h3>

                {/* Short Brief Summary text */}
                <p className="text-xs text-gray-400 font-normal leading-relaxed mt-2 max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 6. STATS BENTO ROW BANNER */}
      <section className="py-8 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Glass/White high shadow floating stats widget */}
          <div className="bg-white border border-gray-100 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] py-11 px-6 sm:px-8 md:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 text-center">
              
              <div className="space-y-1.5 p-2 lg:p-0">
                <div className="text-4xl sm:text-5xl font-black text-[#00BFA6] font-mono tracking-tighter">
                  80+
                </div>
                <div className="text-[10px] tracking-wider uppercase font-extrabold text-gray-400">
                  Projects Delivered
                </div>
              </div>

              <div className="space-y-1.5 pt-6 lg:pt-0 p-2 lg:p-0">
                <div className="text-4xl sm:text-5xl font-black text-gray-950 font-mono tracking-tighter">
                  45+
                </div>
                <div className="text-[10px] tracking-wider uppercase font-extrabold text-gray-400">
                  Happy Clients
                </div>
              </div>

              <div className="space-y-1.5 pt-6 lg:pt-0 p-2 lg:p-0">
                <div className="text-4xl sm:text-5xl font-black text-[#00BFA6] font-mono tracking-tighter">
                  12+
                </div>
                <div className="text-[10px] tracking-wider uppercase font-extrabold text-gray-400">
                  Countries Served
                </div>
              </div>

              <div className="space-y-1.5 pt-6 lg:pt-0 p-2 lg:p-0">
                <div className="text-4xl sm:text-5xl font-black text-gray-950 font-mono tracking-tighter">
                  99%
                </div>
                <div className="text-[10px] tracking-wider uppercase font-extrabold text-gray-400">
                  Client Satisfaction
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. WHAT CLIENTS SAY TESTIMONIALS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[#00BFA6] font-bold text-[10px] tracking-widest uppercase font-mono bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100/40">
              // WHAT CLIENTS SAY //
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0F14] tracking-tight leading-none mt-4">
              Real stories. Real impact.
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mx-auto mt-4"></div>
          </div>

          {/* Grid of 3 testimonials side-by-side matches wireframe perfectly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10 pb-12">
            
            {/* Card 1 */}
            <div className="bg-[#FCFAF7] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm hover:shadow transition-all group">
              <div className="space-y-4">
                <span className="text-5xl font-serif text-[#00BFA6] leading-none block select-none">“</span>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  Zenik transformed our idea into a powerful product. Their team is reliable, skilled and a pleasure to work with.
                </p>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-200/40">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80" 
                  alt="James Carter"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-100"
                />
                <div>
                  <h4 className="font-extrabold text-[#0D0F14] text-sm leading-none">James Carter</h4>
                  <p className="text-[11px] text-gray-400 mt-1 font-medium">
                    CTO, Fintech Labs
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FCFAF7] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm hover:shadow transition-all group">
              <div className="space-y-4">
                <span className="text-5xl font-serif text-[#00BFA6] leading-none block select-none">“</span>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  Professional, fast and innovative. They delivered beyond our expectations.
                </p>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-200/40">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" 
                  alt="Sophia Patel"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-100"
                />
                <div>
                  <h4 className="font-extrabold text-[#0D0F14] text-sm leading-none">Sophia Patel</h4>
                  <p className="text-[11px] text-gray-400 mt-1 font-medium">
                    Product Lead, Healthify
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FCFAF7] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm hover:shadow transition-all group">
              <div className="space-y-4">
                <span className="text-5xl font-serif text-[#00BFA6] leading-none block select-none">“</span>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  Top-notch security and architecture. Zenik is our go-to tech partner.
                </p>
              </div>

              <div className="flex items-center space-x-3.5 pt-4 border-t border-gray-200/40">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80" 
                  alt="Daniel Wu"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover shadow-sm bg-gray-100"
                />
                <div>
                  <h4 className="font-extrabold text-[#0D0F14] text-sm leading-none">Daniel Wu</h4>
                  <p className="text-[11px] text-gray-400 mt-1 font-medium">
                    CEO, CloudScale
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel dots indicator representation */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00BFA6] block shadow-sm"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200 block hover:bg-[#00BFA6] transition-colors cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200 block hover:bg-[#00BFA6] transition-colors cursor-pointer"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200 block hover:bg-[#00BFA6] transition-colors cursor-pointer"></span>
          </div>

        </div>
      </section>

      {/* 8. HAVE A PROJECT? BOTTOM MOTIF BANNER */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main container with elegant gradient canvas background */}
          <div className="bg-gradient-to-r from-teal-500/10 via-rose-50/15 to-[#FCFAF7]/20 border border-gray-150 rounded-[32px] p-8 sm:p-10 md:p-12 lg:p-14 mb-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden select-none">
            
            {/* Background absolute sparkle accent */}
            <div className="absolute top-4 left-6 opacity-35">
              <HanddrawnStar className="w-8 h-8 text-[#FAF9F5]" />
            </div>

            {/* Left lettering diagonal text */}
            <div className="relative text-left flex flex-col items-start space-y-1">
              <span className="font-script text-4xl sm:text-5xl text-[#F4A24D] font-extrabold leading-none -rotate-2 transform block pl-1">
                Have a project in mind?
              </span>
            </div>

            {/* Right CTAs and annotations */}
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10 shrink-0 text-center sm:text-right">
              
              <div className="space-y-1 text-center sm:text-right">
                <span className="text-gray-400 font-bold block text-[10px] tracking-widest uppercase font-mono">Let's build together</span>
                <span className="text-sm font-semibold text-gray-700 block">
                  Let's build something amazing together.
                </span>
              </div>

              <div className="relative pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-wide px-7 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Start a Project</span>
                  <span className="ml-2 font-mono">→</span>
                </Link>

                {/* Arrow loop pointer vector in pink/magenta pointed at Start a project check banner! */}
                <svg className="absolute right-[-24px] bottom-[-24px] w-14 h-14 text-pink-400 rotate-12 opacity-85 pointer-events-none hidden sm:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10,80 Q30,90 55,75 T75,45 Q70,40 60,60" strokeLinecap="round" />
                  <path d="M52,58 L62,60 L60,48" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
