import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Zap, Shield, Layers, Search, Code2, Smartphone, Palette,
  Globe, TrendingUp, Target, Mail, Cloud, Brain, Briefcase, Eye,
  FileText, Paintbrush, Rocket, Star, Clock, Check
} from "lucide-react";
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
          1. HERO SECTION
          ============================================= */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-white text-center flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0D0F14] leading-[1.1] tracking-tight">
            Building Digital Products That{" "}
            <span className="text-[#00BFA6]">Scale</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Modern, secure, engineered for impact.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0D0F14] hover:bg-[#00BFA6] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* =============================================
          2. MARQUEE STRIP
          ============================================= */}
      <Marquee />

      {/* =============================================
          3. SERVICES OVERVIEW — 3x3 Grid
          ============================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="OUR SERVICES"
            title="Everything You Need to Grow"
            subtitle="From design to deployment, we cover every aspect of your digital presence."
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceCategories.slice(0, 9).map((cat) => {
              const IconComp = categoryIconMap[cat.icon] || Globe;
              return (
                <Link
                  key={cat.id}
                  to={`/services?cat=${cat.id}`}
                  className="flex flex-col items-center gap-3 p-6 group text-center bg-white border border-gray-100 rounded-xl hover:border-[#00BFA6] hover:shadow-md transition-all duration-300"
                >
                  <IconComp size={32} className="text-gray-400 group-hover:text-[#00BFA6] transition-colors" />
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
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#00BFA6] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
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
      <section className="py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Web Development */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-mono text-sm font-bold text-[#00BFA6]">01</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">Web Development</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Modern websites and web apps built with React, Next.js, and cutting-edge technologies.</p>
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
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80"
                  alt="Mobile App Development"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2 order-1 space-y-5 text-left">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-mono text-sm font-bold text-[#00BFA6]">02</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">Mobile App Development</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Native iOS & Android apps designed for performance and engagement.</p>
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
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-mono text-sm font-bold text-[#00BFA6]">03</div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0F14] tracking-tight">AI & Advanced Tech</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Intelligent chatbots, ML models, and AI-powered workflows that automate your business.</p>
              <ul className="space-y-2 pt-2">
                {["OpenAI & GPT Integration", "AI Chatbot Development", "Machine Learning Models", "Document Processing"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check size={14} className="text-[#00BFA6]" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80"
                  alt="AI & Advanced Tech"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="OUR PROCESS" title="A Process Built for Success" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 relative text-center">
            {/* Connecting line */}
            <div className="absolute top-12 left-10 right-10 h-px bg-gray-200 -z-10 hidden md:block" />

            {processSteps.map((step, idx) => {
              const IconComp = iconMap[step.iconName] || Search;
              return (
                <div key={idx} className="flex flex-col items-center group relative p-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center relative group-hover:border-[#00BFA6] transition-all duration-300">
                    <IconComp size={24} className="text-gray-400 group-hover:text-[#00BFA6] transition-colors" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00BFA6] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#0D0F14] mt-6 tracking-tight">
                    {step.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mt-2">
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
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${portfolioFilter === cat
                  ? "bg-[#0D0F14] text-white shadow-md"
                  : "bg-gray-50 border border-gray-200 text-gray-600 hover:border-[#00BFA6] hover:text-[#0D0F14]"
                  }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Project Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#00BFA6] hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg">
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
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#00BFA6] text-[#0D0F14] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogArticles.slice(0, 2).map((article) => (
              <article
                key={article.id}
                className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-[#00BFA6] hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-50">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white text-[10px] font-bold text-[#0D0F14] px-3 py-1 rounded-lg border border-gray-100">
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
