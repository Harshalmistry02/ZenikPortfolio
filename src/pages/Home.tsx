import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Zap, Shield, Layers, Search, Code2, Smartphone, Palette,
  Globe, TrendingUp, Target, Mail, Cloud, Brain, Briefcase, Eye,
  FileText, Paintbrush, Rocket, Star, Clock, Check
} from "lucide-react";
import { HanddrawnUnderline, HanddrawnArrow, HanddrawnStar, HanddrawnHighlight } from "../components/Squiggle";
import { Marquee } from "../components/Marquee";
import { SectionHeader } from "../components/SectionHeader";
import { StatsCounter } from "../components/StatsCounter";
import { TestimonialCard } from "../components/TestimonialCard";
import { PricingTable } from "../components/PricingTable";
import { CtaBanner } from "../components/CtaBanner";
import {
  stats, whyZenikFeatures, processSteps, testimonials,
  pricingTiers, blogArticles, portfolioProjects
} from "../data/homeData";
import { serviceCategories } from "../data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  Zap, Shield, Layers, Search, Code2, Smartphone, Palette, Globe,
  TrendingUp, Target, Mail, Cloud, Brain, Briefcase, FileText,
  Paintbrush, Rocket, Star,
};

const categoryIconMap: Record<string, React.ElementType> = {
  Palette, Globe, Smartphone, TrendingUp, Target, Mail, Cloud, Brain, Briefcase,
};

export function Home() {
  const [portfolioFilter, setPortfolioFilter] = useState<string>("All");
  const categories = ["All", "Web", "Mobile", "UI/UX", "Marketing", "AI"];
  const filteredProjects = portfolioFilter === "All"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === portfolioFilter);

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
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="OUR SERVICES"
            title="Everything You Need to Grow"
            subtitle="From design to deployment, we cover every aspect of your digital presence."
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 justify-items-center">
            {serviceCategories.map((cat) => {
              const IconComp = categoryIconMap[cat.icon] || Globe;
              return (
                <Link
                  key={cat.id}
                  to={`/services?cat=${cat.id}`}
                  className="flex flex-col items-center gap-4 py-2 group text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                    <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center`}>
                      <IconComp size={26} />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-800 leading-tight">
                    {cat.name.replace(" Services", "").replace(" & Development", "").replace(", DevOps & Infrastructure", "")}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center pt-10">
            <Link
              to="/services"
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
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">Web Development</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Modern websites and web apps built with React, Next.js, and cutting-edge technologies for speed and scale.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">Mobile App Development</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Native iOS & Android apps designed for performance, engagement, and scale with fluid gesture-first interfaces.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">AI & Advanced Tech</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Intelligent chatbots, ML models, OCR, and AI-powered workflows that automate your business and delight users.</p>
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
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">Digital Marketing</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Data-driven SEO, paid advertising, and social media strategies that generate qualified leads and accelerate growth.</p>
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
          6. PROCESS STEPS — 5-Step Timeline
          ============================================= */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="OUR PROCESS" title="A Process Built for Success" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 relative text-center">
            {/* Connecting line */}
            <div className="absolute top-12 left-10 right-10 h-0.5 border-t border-dashed border-teal-200/50 -z-10 hidden md:block" />

            {processSteps.map((step, idx) => {
              const IconComp = iconMap[step.iconName] || Search;
              return (
                <div key={idx} className="flex flex-col items-center group relative p-4">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative group-hover:border-[#00BFA6] group-hover:scale-105 transition-all duration-300">
                    <IconComp size={24} className="text-gray-500 group-hover:text-[#00BFA6] transition-colors" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-[10px] font-black font-mono border-2 border-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#0D0F14] mt-6 tracking-tight group-hover:text-[#00BFA6] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2 max-w-[180px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================
          7. STATS COUNTER
          ============================================= */}
      <StatsCounter stats={stats} />

      {/* =============================================
          8. PORTFOLIO SHOWCASE
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="OUR WORK" title="Projects Built to Perform" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="w-12 h-12 bg-[#00BFA6] rounded-full flex items-center justify-center text-white">
                      <Eye size={20} />
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
                  <h3 className="text-lg font-black text-[#0D0F14] tracking-tight">{proj.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono font-bold text-gray-500 bg-gray-50 px-2 py-0.5 border border-gray-100 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#0D0F14] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-sm hover:shadow transition-all"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          9. TESTIMONIALS
          ============================================= */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="TESTIMONIALS" title="Real Stories. Real Impact." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          10. PRICING TABLES
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="PRICING"
            title="Transparent Pricing, No Surprises"
            subtitle="Choose a plan that fits your project scope. All plans include dedicated project management."
          />
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* =============================================
          11. BLOG / INSIGHTS
          ============================================= */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="INSIGHTS" title="Latest From Our Blog" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <article
                key={article.id}
                className="group rounded-[28px] overflow-hidden border border-gray-100 bg-white hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.05)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#0D0F14] px-3 py-1 rounded-lg border border-gray-100">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><Clock size={10} />{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-base font-black text-[#0D0F14] tracking-tight leading-snug group-hover:text-[#00BFA6] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#00BFA6] group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          12. CTA BANNER
          ============================================= */}
      <CtaBanner />

    </div>
  );
}
