import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";
import { HanddrawnUnderline, HanddrawnStar } from "../components/Squiggle";
import { ScriptHeading } from "../components/ScriptHeading";
import { StatsCounter } from "../components/StatsCounter";
import { CtaBanner } from "../components/CtaBanner";
import { stats, testimonials } from "../data/homeData";
import { TestimonialCard } from "../components/TestimonialCard";
import type { ProjectItem } from "../types";

const projects: ProjectItem[] = [
  {
    id: "finova",
    title: "Finova Dashboard",
    client: "Finova Capital",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "A secure, premium corporate analytics dashboard with real-time data feeds and automated reporting.",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "movemate",
    title: "MoveMate Fitness",
    client: "MoveMate Inc",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1510051646316-c3f15a0c64b1?w=800&auto=format&fit=crop&q=80",
    description: "Cross-platform iOS and Android workout tracker with offline sync and rich push notifications.",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
  },
  {
    id: "lumina",
    title: "Lumina Storefront",
    client: "Lumina Co",
    category: "Web",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    description: "Ultra-fast headless Shopify frontend with localized currencies and complex shipping logic.",
    technologies: ["Next.js", "Shopify GraphQL", "Stripe", "Vercel"],
    featured: true,
  },
  {
    id: "trustcomply",
    title: "TrustComply Audit",
    client: "TrustComply LLC",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    description: "Interactive compliance dashboard tracking internal files and highlighting GDPR compliance gaps.",
    technologies: ["Figma", "React", "Tailwind CSS", "Chart.js"],
  },
  {
    id: "growthpath",
    title: "GrowthPath Campaign Suite",
    client: "GrowthPath Media",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description: "Full-stack marketing automation platform with campaign management, analytics, and A/B testing.",
    technologies: ["React", "Node.js", "MongoDB", "SendGrid"],
  },
  {
    id: "smartassist",
    title: "SmartAssist AI Bot",
    client: "TechServe Inc",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    description: "AI-powered customer support chatbot handling 80% of tickets with natural language understanding.",
    technologies: ["Python", "OpenAI API", "React", "FastAPI"],
  },
  {
    id: "sentinel",
    title: "SentinelX Monitoring",
    client: "Sentinel Security",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    description: "Enterprise cloud security monitoring platform with real-time threat detection and OWASP compliance.",
    technologies: ["Python", "Docker", "AWS", "Elasticsearch"],
  },
  {
    id: "eduspark",
    title: "EduSpark LMS",
    client: "EduSpark Academy",
    category: "Web",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    description: "Comprehensive learning management system with video courses, quizzes, and progress tracking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
];

const categories = ["All", "Web", "Mobile", "UI/UX", "Marketing", "AI", "Cloud"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FAF9F5] to-white">
        <div className="absolute top-1/4 right-[5%] w-72 h-72 bg-teal-100/15 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-mono inline-block">
              // OUR WORK //
            </span>

            <ScriptHeading
              as="h1"
              text="Projects Built to Perform."
              highlight="Perform."
              className="font-script text-5xl sm:text-6xl md:text-7xl font-bold text-[#0D0F14] tracking-tight leading-[0.98]"
              accentColorClassName="text-[#F4A24D]"
            />

            <p className="font-script text-2xl text-[#F4A24D] font-bold">
              real projects. real results ✦
            </p>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A curated selection of recent projects we've built for clients
              across the UK & USA — from startup MVPs to enterprise platforms.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter stats={stats} />

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#0D0F14] text-white shadow-md"
                    : "bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#0D0F14] hover:text-[#0D0F14]"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-[28px] overflow-hidden border border-gray-100 bg-white hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.06)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {proj.featured && (
                    <span className="absolute top-3 right-3 bg-[#F4A24D] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-[#0D0F14]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#00BFA6] rounded-full flex items-center justify-center text-white shadow-lg">
                      <Eye size={22} />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-lg">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono font-bold">{proj.client}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0D0F14] tracking-tight">{proj.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono font-bold text-gray-500 bg-gray-50 px-2.5 py-0.5 border border-gray-100 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FAF9F5] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER: teal oval circle around "Clients" */}
          <div className="mb-16 text-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-[70px] font-bold text-[#0D0F14] leading-tight">
              What{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10">Clients</span>
                <svg className="absolute pointer-events-none text-[#00BFA6]" style={{inset:"-0.3em -0.5em",width:"calc(100% + 1em)",height:"calc(100% + 0.7em)"}} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                  <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                </svg>
              </span>
              {" "}Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
