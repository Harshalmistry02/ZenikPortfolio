import React from "react";
import { Linkedin, Twitter, Globe, Compass, Cpu, Anchor, ShieldCheck } from "lucide-react";
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
      desc: "Steering product, strategy and enterprise client partnerships.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Sophia Nguyen",
      role: "CTO & Co-Founder",
      desc: "Architecting cloud delivery & keeping security pipelines tight.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Daniel Foster",
      role: "Head of Design",
      desc: "Translating sophisticated processes into elegant UI patterns.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Emily Roberts",
      role: "Head of Product",
      desc: "Bridging the gap between active design and scalable code.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Arjun Patel",
      role: "Engineering Lead",
      desc: "Compiling microservices and managing low latency databases.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Olivia Bennett",
      role: "Strategy Director",
      desc: "Fostering long-term market alliances in the UK & USA.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    }
  ];

  const values = [
    { title: "Innovation", text: "We actively explore new security paradigms & Web technologies to keep our client builds future-proof.", icon: <Cpu className="w-8 h-8 text-[#00BFA6]" /> },
    { title: "Transparency", text: "No gatekeeping. We work in the open with daily slack updates, public Jira tracks, and complete staging previews.", icon: <Compass className="w-8 h-8 text-[#00BFA6]" /> },
    { title: "Quality", text: "We mandate strict code review pipelines, solid type checks, and 90%+ automated test suites on build pipelines.", icon: <Anchor className="w-8 h-8 text-[#00BFA6]" /> },
    { title: "Partnership", text: "We act as technical extensions. We align closely with your timelines, investment goals, and growth plans.", icon: <ShieldCheck className="w-8 h-8 text-[#00BFA6]" /> }
  ];

  const journey = [
    { year: "2018", label: "Founded", desc: "Zenik Studio launched in London UK, centered on elegant web engineering." },
    { year: "2020", label: "USA Expansion", desc: "Opened the Manhattan office to better sync delivery with American ventures." },
    { year: "2022", label: "50+ Projects", desc: "Reached 50+ complex builds across all service columns with no security leaks." },
    { year: "2024", label: "Global Presence", desc: "Serving clients across 12 countries, offering compliance & 24/7 server triage." }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen relative overflow-hidden">
      
      {/* 1. HERO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50/20 via-orange-50/10 to-white text-center relative overflow-hidden">
        {/* Playful background doodled item */}
        <div className="absolute top-12 left-1/4 text-[#00BFA6] opacity-15 rotate-12 pointer-events-none select-none">
          <HanddrawnStar className="w-16 h-16" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            <span>About Us</span>
            <Squiggle className="w-5 h-1 text-[#00BFA6]" />
          </div>
 
          <h1 className="text-4xl md:text-6.5xl font-black text-[#0D0F14] leading-tight tracking-tight">
            We Build With <br />
            <span className="relative inline-block text-[#00BFA6] px-4 font-black whitespace-nowrap mt-2">
              Purpose, Precision & Passion.
              <HanddrawnCircle className="text-teal-400" />
            </span>
          </h1>

          <p className="font-script text-2.5xl text-[#F4A24D] font-extrabold pb-2">
            real software for real leaders 🤝
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
            We are an elite transatlantic consortium of engineers, interface designers, and security researchers engineered to deliver premium digital products in the UK & USA.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE SPLIT */}
      <section className="py-24 bg-white border-t border-gray-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100/70 inline-flex items-center gap-1.5">
                Who We Are <Squiggle className="w-4 h-1" />
              </span>
              <h2 className="text-3xl md:text-4.5xl font-black text-[#0D0F14] tracking-tight">
                A Transatlantic Force in Product Engineering
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal">
                Founded in London and expanded to New York, Zenik Studio acts as the premium technical execution bridge for startups and enterprise giants alike. We provide cohesive integration across three key areas: stellar interfaces, reliable mobile apps, and robust cybersecurity audits.
              </p>
              <p className="text-gray-600 leading-relaxed font-normal">
                We believe in architectural honesty. Our systems are built without low-value fluff, using modern TypeScript pipelines designed to survive audits, heavy user concurrency, and strict enterprise standards.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[32px] overflow-hidden aspect-video shadow-xl border border-gray-100">
                <img 
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                  alt="Our Team Workspace"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#FCFAF7] border-2 border-orange-100/60 rounded-2xl p-4.5 hidden md:block shadow-sm">
                <div className="text-2xl font-black text-[#00BFA6] font-mono leading-none">2 Offices</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mt-1">London UK + NY USA</div>
                <span className="font-script text-sm text-[#F4A24D] font-bold block mt-1">transatlantic hubs! 🗽</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES BENTO GRID */}
      <section className="py-24 bg-[#FAFAF7] border-y border-orange-100/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-[#00BFA6] text-xs uppercase tracking-widest font-bold bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Our Foundations
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              Values We{" "}
              <span className="relative inline-block text-[#00BFA6] px-3 font-black whitespace-nowrap">
                Operationalize
                <HanddrawnCircle className="text-teal-400 font-normal" />
              </span>
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">engineering with strict moral direction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {values.map((val) => (
              <div key={val.title} className="bg-white p-9 rounded-[32px] border border-gray-100/80 hover:border-[#00BFA6] shadow-sm hover:shadow-[0_20px_45px_rgba(0,191,166,0.05)] transition-all duration-300 space-y-5">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#00BFA6]">
                  {val.icon}
                </div>
                <h3 className="text-xl font-black text-[#0D0F14] tracking-tight">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-normal">{val.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MEET THE TEAM PORTRAIT GRAPHICS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Our Specialists
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              Meet the Masters
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">fusing ideas into secure production systems</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {team.map((m) => (
              <div key={m.name} className="group text-center space-y-4 bg-[#FAF9F6]/50 p-5 rounded-[28px] border border-transparent hover:border-gray-100/70 hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-350">
                <div className="relative aspect-square rounded-[20px] overflow-hidden bg-gray-50 border border-gray-100/50">
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#0D0F14] leading-tight tracking-tight">{m.name}</h3>
                  <p className="text-[11px] text-[#00BFA6] font-bold tracking-tight mt-1">{m.role}</p>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed pt-2 line-clamp-2">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. JOURNEY TIMELINE Horizontal/Vertical alignment */}
      <section className="py-24 bg-[#FAFAF7] border-y border-orange-100/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              History timeline
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              The Journey to Elite Execution
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">continuous upward momentum since day one</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <div className="absolute top-10 left-12 right-12 h-0.5 border-t border-dashed border-[#00BFA6]/20 -z-10 hidden md:block"></div>

            {journey.map((item, i) => {
              const miniNotes = [
                "Launched ☕",
                "Hi US! 🗽",
                "Elite levels 🏆",
                "World standard 🌐"
              ];
              return (
                <div key={item.year} className="bg-white rounded-[28px] p-7 border border-gray-100 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-300 text-center space-y-4 relative group">
                  <div className="w-14 h-14 rounded-full bg-teal-50 text-[#00BFA6] border-2 border-[#00BFA6]/10 flex items-center justify-center font-mono font-black text-xs mx-auto group-hover:scale-110 group-hover:bg-[#00BFA6] group-hover:text-white transition-all duration-300">
                    {item.year}
                  </div>
                  <h3 className="font-black text-[#0D0F14] text-base tracking-tight">{item.label}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{item.desc}</p>
                  
                  {/* Handwritten tiny milestone stamp */}
                  <span className="font-script text-sm text-[#F4A24D] block mt-1 font-bold select-none rotate-3 opacity-90">
                    {miniNotes[i]}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner buttonText="Work with Zenik" linkTo="/contact" />

    </div>
  );
}
