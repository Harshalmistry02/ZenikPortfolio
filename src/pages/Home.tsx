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
    const duration = 1500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        projects: Math.min(Math.round((80 / steps) * step), 80),
        clients: Math.min(Math.round((45 / steps) * step), 45),
        countries: Math.min(Math.round((12 / steps) * step), 12),
        satisfaction: Math.min(Math.round((99 / steps) * step), 99),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "High-performance websites and web applications engineered for scale, speed, and seamless user experience. Utilizing Next.js, React, and robust cloud scaling.",
      icon: <Code2 className="w-8 h-8 text-[#00BFA6]" />,
      link: "/services",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps for iOS & Android that delight users and drive real business results. Crafted with precision design and smooth UI/UX.",
      icon: <Smartphone className="w-8 h-8 text-[#00BFA6]" />,
      link: "/services",
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with proactive security solutions, penetration testing, compliance audits (GDPR/HIPAA), and secure authentication architecture.",
      icon: <Shield className="w-8 h-8 text-[#00BFA6]" />,
      link: "/services",
    },
  ];

  const steps = [
    { num: "01", name: "Discover", desc: "We learn about your goals, challenges, requirements, and user opportunities." },
    { num: "02", name: "Plan", desc: "We create a tailored roadmap, secure technical architecture, and interactive UX wireframes." },
    { num: "03", name: "Build", desc: "Our world-class engineering team builds with clean code, modern stacks, and continuous integration." },
    { num: "04", name: "Launch", desc: "Rigorous automated testing, performance audits, security hardening, and production deployment." },
    { num: "05", name: "Grow", desc: "We optimize, scale, monitor 24/7, and deploy continuous upgrades as you level up." },
  ];

  const testimonials = [
    {
      quote: "Zenik Studio transformed our idea into a powerful, secure platform. Their team is exceptionally skilled, responsive, and a pleasure to work with.",
      author: "Tom Blomfield",
      role: "Co-founder",
      company: "Monzo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "They delivered our cross-platform mobile app ahead of schedule and beyond expectations. The engineering quality and attention to detail are truly outstanding.",
      author: "Shu Chen",
      role: "Product Lead",
      company: "Deliveroo",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      quote: "Their cybersecurity expertise gave our enterprise complete peace of mind. Professional, proactive, highly recommended for compliance-critical sectors.",
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
      <section className="relative py-12 md:py-24 bg-gradient-to-b from-teal-50/20 via-white to-white">
        {/* Background blobs for premium depth */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse duration-10000"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Block */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#00BFA6] tracking-wide animate-fade-up">
                <Sparkles size={12} className="animate-spin duration-3000" />
                <span>Award-Winning UK & USA Tech Agency</span>
                <Squiggle className="w-4 h-1 text-[#00BFA6]" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black text-[#0D0F14] tracking-tight leading-none animate-fade-up">
                Building Digital <br className="hidden sm:inline" />
                Products{" "}
                <span className="relative inline-block text-[#00BFA6] px-3 font-black whitespace-nowrap">
                  That Scale.
                  <HanddrawnCircle className="text-[#00BFA6]" />
                </span>
              </h1>

              {/* Accent Overlays: Warm Orange Handwritten Script Accent */}
              <div className="relative pt-2 pl-1 animate-fade-up">
                <span className="font-script text-2.5xl md:text-3.5xl text-[#F4A24D] select-none block leading-tight font-extrabold">
                  For brands ready to lead.
                </span>
                {/* Freehand loop/underline SVG effect */}
                <div className="w-56 h-3 mt-1.5 text-[#F4A24D] opacity-90 relative">
                  <HanddrawnUnderline />
                </div>
              </div>

              <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed font-normal pt-2">
                Zenik Studio is a premier technology partner designing, developing, and securing enterprise-grade applications. We fuse world-class engineering with highly polished, soft, and creative interactive layouts.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4 relative">
                
                {/* Sketchy pointer arrow annotation */}
                <div className="absolute -left-12 -bottom-20 hidden xl:block text-[#F4A24D] select-none pointer-events-none rotate-[20deg]">
                  <HanddrawnArrow className="w-14 h-14" />
                  <span className="font-script text-base font-bold absolute whitespace-nowrap left-12 top-6 rotate-[-15deg]">
                    Talk to our experts! ⚡
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#0D0F14] hover:bg-[#00BFA6] text-white hover:text-white transition-all duration-300 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 group text-center"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-gray-100 hover:border-[#0D0F14] text-[#0D0F14] transition-all duration-300 font-bold px-8 py-4 rounded-full hover:bg-gray-50 text-center"
                >
                  <span>View Our Work</span>
                  <ArrowRight size={16} className="ml-2 opacity-50 text-gray-400 group-hover:translate-x-1" />
                </Link>

                {/* Small handwritten sub-caption indicator */}
                <div className="hidden md:flex items-center gap-1.5 font-script text-lg text-teal-600 font-bold translate-y-1">
                  <span>✨ 100% custom-crafted code</span>
                </div>
              </div>
            </div>

            {/* Right Hero Browser Mockup */}
            <div className="lg:col-span-5 relative animate-fade-up">
              {/* Outer Decorative Floating Ring */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200 shadow-md transform -rotate-12">
                <span className="font-script text-xl text-[#F4A24D] font-bold">UK</span>
              </div>
              <div className="absolute -bottom-6 -right-4 w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center border border-teal-200 shadow-md transform rotate-12">
                <span className="font-script text-xl text-[#00BFA6] font-bold">USA</span>
              </div>

              <div className="bg-[#0D0F14] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                {/* Browser top-bar */}
                <div className="bg-[#151922] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#00BFA6] block"></span>
                  </div>
                  <div className="bg-[#0D0F14] text-gray-500 text-[10px] px-8 py-1 rounded-md font-mono select-none">
                    https://zenik.studio/app
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Simulated Editor Workspace */}
                <div className="p-6 font-mono text-xs text-gray-300 space-y-4 leading-relaxed overflow-x-auto">
                  <div className="flex items-center space-x-2 text-[10px] text-gray-500 border-b border-gray-800 pb-2">
                    <span className="text-[#00BFA6]">App.tsx</span>
                    <span>•</span>
                    <span>Services.tsx</span>
                    <span>•</span>
                    <span>Config.json</span>
                  </div>
                  <div>
                    <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-[#00BFA6]">'react'</span>;
                  </div>
                  <div>
                    <span className="text-pink-400">const</span> <span className="text-blue-400">ZenikStudio</span> = () =&gt; &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">return</span> (
                  </div>
                  <div className="pl-8 text-gray-400">
                    &lt;<span className="text-blue-400">Agency</span> <span className="text-yellow-400">status</span>=<span className="text-[#00BFA6]">"stellar"</span>&gt;
                  </div>
                  <div className="pl-12 text-gray-400">
                    &lt;<span className="text-blue-400">Web</span> stack=<span className="text-[#00BFA6]">"Next.js/React/TS"</span> /&gt;
                  </div>
                  <div className="pl-12 text-gray-400">
                    &lt;<span className="text-blue-400">Mobile</span> stack=<span className="text-[#00BFA6]">"React Native/Swift"</span> /&gt;
                  </div>
                  <div className="pl-12 text-gray-400">
                    &lt;<span className="text-blue-400">Cybersecurity</span> audits=<span className="text-[#00BFA6]">"OWASP/GDPR/HIPAA"</span> /&gt;
                  </div>
                  <div className="pl-8 text-gray-400">
                    &lt;/<span className="text-blue-400">Agency</span>&gt;
                  </div>
                  <div className="pl-4">);</div>
                  <div>&#125;;</div>

                  {/* High Quality Metrics graph overlay */}
                  <div className="bg-[#151922] p-4 rounded-xl border border-gray-800 mt-4 space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-gray-400 font-bold">CLIENT PERFORMANCE METRICS</span>
                      <span className="text-[#00BFA6] font-bold">↑ 72%</span>
                    </div>
                    <div className="h-10 flex items-end space-x-1.5 pt-2">
                      <div className="bg-[#00BFA6] h-4 w-full rounded-sm opacity-30"></div>
                      <div className="bg-[#00BFA6] h-6 w-full rounded-sm opacity-40"></div>
                      <div className="bg-[#00BFA6] h-5 w-full rounded-sm opacity-50"></div>
                      <div className="bg-[#00BFA6] h-8 w-full rounded-sm opacity-70"></div>
                      <div className="bg-[#00BFA6] h-10 w-full rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MARQUEE CLOCK / CLIENT LOGOS LIST */}
      <Marquee />

      {/* 3. CORE SERVICE PREVIEW */}
      <section className="py-24 bg-gradient-to-br from-teal-50/40 via-white to-orange-50/30 relative overflow-hidden">
        {/* Organic hand-sketch elements */}
        <div className="absolute top-10 left-10 text-orange-200 pointer-events-none -rotate-12 select-none">
          <HanddrawnStar className="w-10 h-10" />
        </div>
        <div className="absolute bottom-10 right-10 text-teal-200 pointer-events-none rotate-45 select-none">
          <HanddrawnStar className="w-8 h-8" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 relative">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#00BFA6]">
              <Squiggle />
              <span>Core Offering</span>
              <Squiggle />
            </div>
            
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight leading-tight">
              A Studio Armed with <br className="md:hidden" />
              <span className="relative inline-block text-[#00BFA6] px-3 font-black whitespace-nowrap">
                Elite Skills
                <HanddrawnCircle className="text-teal-400/80" />
              </span>
            </h2>

            {/* Orange handwritten accent script */}
            <p className="font-script text-2xl text-[#F4A24D] -mt-1 font-bold">
              engineered with surgical precision & friendly touch
            </p>

            <p className="text-gray-600 max-w-xl mx-auto">
              We design and construct custom digital products tailored to survive high traffic, complex data pipelines, and intense security audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {services.map((svc, i) => {
              // Custom handwritten style badges for Odoo SaaS feel
              const badgeTexts = ["Most Requested 🚀", "Fast & Responsive 📱", "Military-Grade Auditing 🛡️"];
              const pastelStyle = [
                "bg-amber-50 text-amber-700 border-amber-200 font-bold",
                "bg-indigo-50 text-indigo-700 border-indigo-200 font-bold",
                "bg-rose-50 text-rose-700 border-rose-200 font-bold"
              ];

              return (
                <div
                  key={i}
                  className="group bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Scribble indicator sticker */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pastelStyle[i]}`}>
                      {badgeTexts[i]}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center group-hover:bg-[#00BFA6] group-hover:text-white transition-colors duration-300">
                      {svc.icon}
                    </div>
                    <h3 className="text-2xl font-black text-[#0D0F14] tracking-tight">{svc.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">{svc.description}</p>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-gray-50 mt-8">
                    <Link
                      to={svc.link}
                      className="inline-flex items-center text-sm font-extrabold text-[#00BFA6] group-hover:text-[#0D0F14] transition-colors"
                    >
                      <span>Explore service details</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                    
                    <span className="font-script text-base text-[#F4A24D] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View now!
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-14">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-extrabold text-[#0D0F14] hover:text-[#00BFA6] underline tracking-wide gap-1 group"
            >
              <span>Explore all Services & Engineering stack</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. PROCESS STEP SECTION: How We Work Together */}
      <section className="py-24 bg-[#FAF9F5] border-y border-orange-100/40 relative overflow-hidden">
        {/* Background Sketchy grid lines or loops */}
        <div className="absolute top-8 left-1/4 text-rose-300 opacity-20 pointer-events-none select-none">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10,20 C40,5 60,80 90,40" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] inline-flex items-center gap-1">
              Our Process <Squiggle className="w-4 h-1" />
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              How We Work Together
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] -mt-1 font-bold">
              designed for structured momentum & transparent flow
            </p>
          </div>

          {/* Process steps horizontal alignment */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {/* Horizontal line background on tablets+ */}
            <div className="absolute top-10 left-12 right-12 h-0.5 border-t border-dashed border-teal-300/40 -z-10 hidden md:block"></div>

            {steps.map((st, i) => {
              const miniLabels = [
                "We listen first! 👂",
                "Strict scoping 🎯",
                "Pure crafting 💻",
                "OWASP checks 🛡️",
                "Zero downtime 🚀"
              ];
              return (
                <div key={i} className="text-center space-y-4 relative group bg-white/60 hover:bg-white p-6 rounded-3xl border border-transparent hover:border-orange-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#00BFA6] border-2 border-[#00BFA6]/10 font-mono font-bold text-sm shadow-sm group-hover:bg-[#00BFA6] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {st.num}
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#00BFA6]/40 scale-110 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-lg font-black text-[#0D0F14] tracking-tight">{st.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto font-medium">{st.desc}</p>
                  
                  {/* Handwritten subtext underneath step */}
                  <div className="font-script text-base text-[#F4A24D] font-bold block pt-1 select-none opacity-90">
                    {miniLabels[i]}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. STATS SUMMARY SECTION */}
      <section className="py-20 bg-[#0D0F14] text-white relative overflow-hidden">
        {/* Abstract doodle shapes in stats */}
        <div className="absolute inset-0 bg-[radial-gradient(#151b26_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="absolute right-4 top-4 hidden md:block text-orange-400 opacity-20 pointer-events-none">
          <HanddrawnCrown className="w-16 h-16" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            
            <div className="space-y-2 relative group cursor-default">
              <div className="text-5xl md:text-6.5xl font-black text-[#00BFA6] font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stats.projects}+
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Projects Delivered
              </div>
              <span className="font-script text-base text-[#F4A24D] block mt-1 font-bold select-none opacity-95">
                and counting! 📈
              </span>
            </div>

            <div className="space-y-2 relative group cursor-default">
              <div className="text-5xl md:text-6.5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stats.clients}+
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Happy Clients
              </div>
              <span className="font-script text-base text-[#F4A24D] block mt-1 font-bold select-none opacity-95">
                100% verified status ⭐
              </span>
            </div>

            <div className="space-y-2 relative group cursor-default">
              <div className="text-5xl md:text-6.5xl font-black text-[#00BFA6] font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stats.countries}+
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Countries Served
              </div>
              <span className="font-script text-base text-[#F4A24D] block mt-1 font-bold select-none opacity-95">
                Europe & NA hubs 🌍
              </span>
            </div>

            <div className="space-y-2 relative group cursor-default">
              <div className="text-5xl md:text-6.5xl font-black text-white font-mono tracking-tight group-hover:scale-105 transition-transform">
                {stats.satisfaction}%
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400">
                Client Satisfaction
              </div>
              <span className="font-script text-base text-[#F4A24D] block mt-1 font-bold select-none opacity-95">
                industry-leading 🎯
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] inline-flex items-center gap-1">
              Testimonials <Squiggle className="w-4 h-1 text-[#00BFA6]" />
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">
              trusted by pioneers in tech and finance
            </p>
          </div>

          {/* Testimonial Cards Layout or single slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className={`p-10 rounded-[32px] border transition-all duration-350 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  index === activeTestimonial
                    ? "border-[#00BFA6] bg-teal-50/15 shadow-[0_20px_50px_rgba(0,191,166,0.06)] scale-102"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                {index === activeTestimonial && (
                  <div className="absolute -right-2 -top-2 w-12 h-12 text-[#F4A24D] opacity-25">
                    <HanddrawnCrown />
                  </div>
                )}

                <div className="space-y-6">
                  {/* Rating stars */}
                  <div className="flex text-amber-500 space-x-1.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <p className="text-[#0D0F14] italic text-sm md:text-base leading-relaxed font-normal">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 mt-8 border-t border-gray-50">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-400/35"
                    src={test.avatar}
                    alt={test.author}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0D0F14]">{test.author}</h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {test.role}, <span className="text-[#00BFA6] font-bold">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial slider indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? "bg-[#00BFA6] w-6" : "bg-gray-200"
                }`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 7. REUSABLE CTA BANNER */}
      <CtaBanner buttonText="Book a Free Call" linkTo="/contact" />

    </div>
  );
}
