import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";
import { HanddrawnUnderline, HanddrawnStar } from "../components/Squiggle";
import { ScriptHeading } from "../components/ScriptHeading";
import { StatsCounter } from "../components/StatsCounter";
import { CtaBanner } from "../components/CtaBanner";
import { communityStats, testimonials } from "../data/homeData";
import { TestimonialCard } from "../components/TestimonialCard";
import type { ProjectItem } from "../types";

const projects: ProjectItem[] = [
  {
    id: "finova",
    title: "Finova Dashboard",
    client: "Finova Capital",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description: "A secure, premium corporate analytics dashboard with real-time data feeds and automated reporting.",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "movemate",
    title: "MoveMate Fitness",
    client: "MoveMate Inc",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    description: "Cross-platform iOS and Android workout tracker with offline sync and rich push notifications.",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
  },
  {
    id: "lumina",
    title: "Lumina Storefront",
    client: "Lumina Co",
    category: "Web",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    description: "Ultra-fast headless Shopify frontend with localized currencies and complex shipping logic.",
    technologies: ["Next.js", "Shopify GraphQL", "Stripe", "Vercel"],
    featured: true,
  },
  {
    id: "trustcomply",
    title: "TrustComply Audit",
    client: "TrustComply LLC",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    description: "Interactive compliance dashboard tracking internal files and highlighting GDPR compliance gaps.",
    technologies: ["Figma", "React", "Tailwind CSS", "Chart.js"],
  },
  {
    id: "growthpath",
    title: "GrowthPath Campaign Suite",
    client: "GrowthPath Media",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    description: "Full-stack marketing automation platform with campaign management, analytics, and A/B testing.",
    technologies: ["React", "Node.js", "MongoDB", "SendGrid"],
  },
  {
    id: "smartassist",
    title: "SmartAssist AI Bot",
    client: "TechServe Inc",
    category: "AI",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
    description: "AI-powered customer support chatbot handling 80% of tickets with natural language understanding.",
    technologies: ["Python", "OpenAI API", "React", "FastAPI"],
  },
  {
    id: "sentinel",
    title: "SentinelX Monitoring",
    client: "Sentinel Security",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
    description: "Enterprise cloud security monitoring platform with real-time threat detection and OWASP compliance.",
    technologies: ["Python", "Docker", "AWS", "Elasticsearch"],
  },
  {
    id: "eduspark",
    title: "EduSpark LMS",
    client: "EduSpark Academy",
    category: "Web",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
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
      <StatsCounter stats={communityStats} variant="community" />

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${activeFilter === cat
                  ? "bg-[#0D0F14] text-white shadow-md"
                  : "bg-gray-50 border border-gray-100 text-gray-600 hover:border-[#0D0F14] hover:text-[#0D0F14]"
                  }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Grid - Collaboration Style Layout */}
          <div className="space-y-24">
            {filteredProjects.map((proj, index) => (
              <div
                key={proj.id}
                className="relative"
              >
                {/* Header Section */}
                <div className="max-w-2xl mb-12">
                  <h2 className="font-script text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D0F14] leading-tight mb-6">
                    The art of effective{" "}
                    <span className="relative inline-block px-2">
                      <span className="relative z-10">{proj.title}</span>
                      <svg className="absolute pointer-events-none text-[#00BFA6]" style={{ inset: "-0.3em -0.5em", width: "calc(100% + 1em)", height: "calc(100% + 0.7em)" }} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                        <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                      </svg>
                    </span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    <span className="font-semibold text-[#0D0F14]">{proj.description.split('.')[0]}</span>
                    {' '}and communicate with colleagues, customers, and vendors all in one place so that you can access critical information at any time.
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Left Column - Feature Cards */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Share Files Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-script text-2xl font-bold text-[#0D0F14] mb-4">
                        Share files and workspace
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                            U
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-700">URL</div>
                            <div className="text-xs text-gray-500 font-mono">/Business/Videos/YT-Advert</div>
                          </div>
                        </div>
                        <div className="flex gap-2 text-xs">
                          <span className="px-3 py-1 bg-gray-100 rounded-md font-medium">Docs</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-md font-medium">HR</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-md font-medium">Include Sub Folders</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-6">
                      <div className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((t) => (
                          <span key={t} className="text-xs font-mono font-bold text-[#0D0F14] bg-white px-3 py-1.5 border border-gray-200 rounded-lg shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Column - Main Image/Card */}
                  <div className="lg:col-span-4">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <img
                          className="w-full h-full object-cover"
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        {proj.featured && (
                          <span className="absolute top-3 right-3 bg-[#F4A24D] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="p-5 bg-white">
                        <div className="font-semibold text-[#0D0F14] mb-1">{proj.title}</div>
                        <div className="text-xs text-gray-500 mb-3">
                          <span className="font-medium">Task:</span> {proj.description.split('.')[0]}
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                          {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Info Cards */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Send Message Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-script text-xl font-bold text-[#0D0F14] mb-3">
                        Send message
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
                          <div className="flex-1 bg-gray-50 rounded-lg p-3">
                            <div className="text-[10px] font-semibold text-gray-700 mb-1">
                              {proj.client} <span className="text-gray-400">• 1 day ago</span>
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                              Hey team,<br />
                              Could you please have the vendor sign this bill before October 3rd?
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plan Activities Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-script text-xl font-bold text-[#0D0F14] mb-3">
                        Plan activities
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-700">Yesterday: To validate</div>
                            <div className="text-[10px] text-gray-500">for {proj.client}</div>
                          </div>
                        </div>
                        <div className="text-[10px] text-gray-600 ml-9">
                          ✓ Mark Done &nbsp; ✏️ Edit &nbsp; ✕ Cancel
                        </div>
                      </div>
                    </div>

                    {/* Log Notes Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-script text-xl font-bold text-[#0D0F14] mb-3">
                        Log Notes
                      </h3>
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="text-[10px] font-semibold text-gray-700 mb-1">
                            Jane Doe <span className="text-gray-400">• 3 days ago</span>
                          </div>
                          <div className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                            The customer asked if this comes in other colors
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] bg-teal-50 border border-teal-100 px-3 py-1 rounded-lg">
                    {proj.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono font-bold">Client: {proj.client}</span>
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
                <svg className="absolute pointer-events-none text-[#00BFA6]" style={{ inset: "-0.3em -0.5em", width: "calc(100% + 1em)", height: "calc(100% + 0.7em)" }} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden>
                  <path d="M18,44 C18,14 62,8 100,10 C144,12 184,16 184,44 C184,70 146,72 100,70 C58,68 18,68 18,44 Z" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
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
