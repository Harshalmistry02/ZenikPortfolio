import React from "react";
import { Link } from "react-router-dom";
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

export function About() {
  const team = [
    {
      name: "James Carter",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "james@zenik.studio" }
    },
    {
      name: "Sophia Nguyen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "sophia@zenik.studio" }
    },
    {
      name: "Daniel Foster",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", dribbble: "#", mail: "daniel@zenik.studio" }
    },
    {
      name: "Emily Roberts",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "emily@zenik.studio" }
    },
    {
      name: "Arjun Patel",
      role: "Engineering Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", github: "#", mail: "arjun@zenik.studio" }
    },
    {
      name: "Olivia Bennett",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      socials: { linkedin: "#", twitter: "#", mail: "olivia@zenik.studio" }
    }
  ];

  const values = [
    { 
      title: "Innovation", 
      text: "We embrace new ideas and technologies to build smarter, future-ready solutions that make a difference.", 
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
      text: "Clear communication and honest collaboration at every step build trust and stronger outcomes.", 
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    { 
      title: "Quality", 
      text: "We are obsessed with detail and committed to delivering exceptional products that stand the test of time.", 
      icon: (
        <svg className="w-6 h-6 text-[#00BFA6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    { 
      title: "Partnership", 
      text: "We work as an extension of your team, aligned with your goals to achieve long-term success together.", 
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
      desc: "Zenik Studio was founded in London with a vision to build impactful digital products.", 
      icon: <Flag className="w-5 h-5 text-white" /> 
    },
    { 
      year: "2020", 
      title: "Expanded to USA", 
      desc: "Opened our New York office to better serve clients across North America.", 
      icon: <Rocket className="w-5 h-5 text-white" /> 
    },
    { 
      year: "2022", 
      title: "50+ Projects", 
      desc: "Crossed 50 successful projects across web, mobile and cybersecurity solutions.", 
      icon: <Users className="w-5 h-5 text-white" /> 
    },
    { 
      year: "2024", 
      title: "Global Impact", 
      desc: "Serving clients in 12+ countries with a talented team across the UK & USA.", 
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
      
      {/* 1. HERO SECTION */}
      <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F5]/30 to-white text-left">
        {/* Subtle background blurs */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Top layout sketching indicators */}
          <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
            <span className="text-[#00BFA6] mr-1 font-black">//</span>
            <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">About Us</span>
            <span className="text-[#00BFA6] ml-1 font-black">//</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            
            {/* Title Block (Left) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black text-[#0D0F14] leading-[1.08] tracking-tight">
                We Build With <br />
                Purpose, Precision & Passion.
              </h1>

              {/* Styled slogan */}
              <div className="relative pt-1 pb-3">
                <p className="font-script text-3xl md:text-4xl text-[#F4A24D] font-bold tracking-wide leading-none">
                  Digital products. Real impact.
                </p>
                <div className="w-56 h-2 mt-1 relative">
                  <HanddrawnUnderline className="text-[#F4A24D]" />
                </div>
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

      {/* 2. WHO WE ARE & PHOTO COLLAGE SECTION */}
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

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F14] tracking-tight leading-[1.12]">
                Who We Are
              </h2>

              <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Zenik Studio is a UK & USA based digital product agency. We partner with ambitious startups and enterprises to design, build and scale modern web, mobile and cybersecurity solutions.
                </p>
                <p>
                  Our mission is simple: to solve real problems with beautiful, functional technology that drives growth and creates lasting impact.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] hover:bg-gray-50 transition-all duration-300 font-bold text-xs px-6 py-3.5 rounded-full shadow-sm"
                >
                  <span>Learn More About Us</span>
                  <span className="ml-1.5 text-sm font-sans">→</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Collage with double-layered 1-wide image above + 3-column items below */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Wide high-quality photo representing happy team */}
              <div className="rounded-[24px] overflow-hidden border border-gray-150/75 shadow-[0_15px_35px_rgba(0,0,0,0.03)] aspect-[21/9]">
                <img 
                  className="w-full h-full object-cover select-none" 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80" 
                  alt="Zenik Studio Main Team" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Grid with 3 smaller columns */}
              <div className="grid grid-cols-3 gap-4">
                
                {/* Visual 1: team coding monitor */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/70 shadow-sm aspect-square bg-[#FAF9F5]">
                  <img 
                    className="w-full h-full object-cover select-none" 
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&auto=format&fit=crop&q=80" 
                    alt="Team workspace workspace" 
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Visual 2: Branded logo display on light brick with green layout plant */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/80 bg-[#FAF9F5]/75 flex flex-col justify-center items-center p-3 select-none aspect-square text-center relative group hover:border-[#00BFA6] transition-colors">
                  <div className="relative">
                    
                    {/* Visual custom brand element mimicking image sign */}
                    <div className="flex items-center justify-center space-x-1.5 mb-1.5">
                      <span className="text-3xl font-black text-[#00BFA6] tracking-tighter leading-none select-none">Z</span>
                      <div className="text-left font-sans leading-none">
                        <div className="text-[11px] font-black tracking-tight text-[#0D0F14] uppercase">zenik</div>
                        <div className="text-[8px] font-bold text-gray-400 font-mono tracking-wider">studio</div>
                      </div>
                    </div>

                    {/* Small potted silhouette */}
                    <div className="text-xs text-gray-300 mt-2 filter drop-shadow">🌿</div>
                  </div>
                  
                  {/* Absolute subtle background pattern */}
                  <div className="absolute inset-x-2 bottom-2 h-0.5 bg-gray-200/50 rounded-full"></div>
                </div>

                {/* Visual 3: Female team interaction */}
                <div className="rounded-[20px] overflow-hidden border border-gray-150/70 shadow-sm aspect-square bg-[#FAF9F5]">
                  <img 
                    className="w-full h-full object-cover select-none" 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80" 
                    alt="Two ladies collaborating with notebook" 
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES SECTION */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5]/45 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl text-left space-y-4 mb-16">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1 select-none">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Our Core Values</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F14] tracking-tight">
              Our Core Values
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Grid Layout 2x2 representing Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-white p-6 sm:p-9 rounded-[28px] border border-gray-100/70 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-[0_15px_35px_rgba(0,191,166,0.03)] hover:border-teal-200 transition-all duration-300 text-left"
              >
                {/* Circular styled icon */}
                <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100/50 flex items-center justify-center shadow-sm shrink-0">
                  {v.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#0D0F14] tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MEET THE TEAM GALLERY */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl text-left space-y-3 mb-16">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1 select-none">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Meet the Team</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F14] tracking-tight">
              Meet the Team
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* 6-column Profile collection */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((t, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center space-y-4 bg-[#FCFAF7]/30 p-3 pb-5 rounded-[24px] border border-transparent hover:border-gray-150 hover:bg-white hover:shadow-[0_12px_35px_rgba(0,0,0,0.02)] transition-all duration-300"
              >
                {/* Round-box styled portrait */}
                <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-gray-100 border border-gray-100/60 relative">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300" 
                    src={t.image} 
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent mix-blend-overlay"></div>
                </div>

                {/* Identity info */}
                <div className="w-full space-y-1">
                  <h4 className="text-xs sm:text-[13px] font-black text-[#0D0F14] tracking-tight leading-none leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide leading-none">
                    {t.role}
                  </p>
                </div>

                {/* Gray vector logos row for social media support as per wireframe details */}
                <div className="flex items-center justify-center space-x-2.5 pt-1.5">
                  <a href="#linkedin" className="text-gray-400 hover:text-[#00BFA6] transition-colors" title="Linkedin Profile">
                    <Linkedin size={13} strokeWidth={2.5} />
                  </a>
                  <a href="#twitter" className="text-gray-400 hover:text-[#00BFA6] transition-colors" title="Platform Link">
                    <Twitter size={13} strokeWidth={2.5} />
                  </a>
                  <a href={`mailto:${t.socials.mail}`} className="text-gray-400 hover:text-[#00BFA6] transition-colors" title="Direct Email">
                    <Mail size={13} strokeWidth={2.5} />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OUR JOURNEY HORIZONTAL TIMELINE */}
      <section className="py-20 lg:py-24 bg-[#FAF9F5]/45 border-y border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl text-left space-y-4 mb-20 relative">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1 select-none">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Our Journey</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F14] tracking-tight">
              Our Journey
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Interactive timeline tracking line & circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            
            {/* Horizontal Line connector centered vertically inside nodes */}
            <div className="absolute top-10 left-8 right-8 h-0.5 border-t-2 border-dashed border-teal-200/50 -z-10 hidden md:block"></div>

            {journey.map((j, i) => (
              <div 
                key={i} 
                className="flex flex-col items-start text-left relative z-10 group"
              >
                {/* Visual node badge with circular logo inside */}
                <div className="w-14 h-14 rounded-full bg-[#00BFA6] text-white flex items-center justify-center shadow-md border-4 border-white group-hover:scale-105 transition-transform">
                  {j.icon}
                </div>

                <div className="mt-5 space-y-2">
                  {/* Large visual year stamp */}
                  <span className="block text-xl font-black text-teal-600 font-mono">
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. RECOGNISED FOR EXCELLENCE STAR BADGES */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl text-left space-y-4 mb-16 select-none">
            <div className="flex items-center space-x-1 justify-start text-teal-400 font-bold text-xs uppercase tracking-widest pl-1">
              <span className="text-[#00BFA6] mr-1 font-black">//</span>
              <span className="text-teal-600 tracking-wider font-extrabold uppercase text-[11px]">Recognised for Excellence</span>
              <span className="text-[#00BFA6] ml-1 font-black">//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F14] tracking-tight">
              Recognised for Excellence
            </h2>
            <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full mt-4"></div>
          </div>

          {/* Awards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {awards.map((a, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-5 rounded-[20px] bg-[#FCFAF7]/40 border border-gray-150/50 hover:border-[#00BFA6] hover:bg-white transition-all duration-300 group"
              >
                {/* Wreath visual wrapping */}
                <div className="relative w-20 h-20 flex items-center justify-center mb-2 select-none">
                  
                  {/* Fine illustration of double leaf wreath arcs */}
                  <svg className="absolute inset-0 w-full h-full text-teal-600/75 group-hover:text-[#00BFA6]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
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

                  {/* Brand name nestled inside */}
                  <div className="relative z-10 text-center font-sans">
                    <span className="block text-[8.5px] font-black tracking-wider text-gray-900 uppercase leading-none max-w-[54px] mx-auto">
                      {a.agency === "The Manifest" ? "THE MANIFEST" : a.agency}
                    </span>
                  </div>

                </div>

                {/* Subtitle list category text */}
                <div className="text-[10px] sm:text-[11px] font-bold text-gray-500 tracking-tight text-center leading-tight min-h-[30px] flex items-center justify-center max-w-[125px] px-1">
                  {a.title}
                </div>

                <div className="mt-2.5 px-3 py-0.5 rounded-full bg-teal-50 border border-teal-100/50 text-[9px] font-black text-[#00BFA6] font-mono select-none">
                  {a.year}
                </div>

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
