import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, Smartphone, Shield, CheckCircle, ArrowRight, Star,
  Database, Eye, Cloud, RefreshCw, Zap, Award, Settings, Layers, HeartHandshake, Laptop, FileCode, CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";
import { 
  Squiggle, 
  CheckMini,
  HanddrawnArrow, 
  HanddrawnUnderline, 
  HanddrawnCircle, 
  HanddrawnStar, 
  HanddrawnCrown, 
  HanddrawnHighlight 
} from "../components/Squiggle";
import { CtaBanner } from "../components/CtaBanner";

export function Services() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const fullServices = [
    { title: "Web Development", desc: "Crafting blazing fast, standard-compliant digital platforms.", icon: <Code2 className="text-[#00BFA6]" /> },
    { title: "Mobile Apps", desc: "Native iOS & Android apps built using React Native and Swift.", icon: <Smartphone className="text-[#00BFA6]" /> },
    { title: "UI/UX Design", desc: "Wirefaming, rapid prototyping and premium client handoffs.", icon: <Eye className="text-[#00BFA6]" /> },
    { title: "eCommerce", desc: "Custom checkout systems, Shopify hooks, and global scale integration.", icon: <Laptop className="text-[#00BFA6]" /> },
    { title: "SaaS Development", desc: "Multi-tenant platforms, stripe integration, complex billing workflows.", icon: <Layers className="text-[#00BFA6]" /> },
    { title: "API Integration", desc: "Bespoke RESTful & GraphQL schema microservices, clean routing.", icon: <FileCode className="text-[#00BFA6]" /> },
    { title: "Cloud Solutions", desc: "Surgical setups using AWS, GCP, Cloud Run & Vercel.", icon: <Cloud className="text-[#00BFA6]" /> },
    { title: "DevOps", desc: "Continuous pipelines (CI/CD), secure Docker registries.", icon: <RefreshCw className="text-[#00BFA6]" /> },
    { title: "Database Design", desc: "Optimized relational, NoSQL and key-value memory arrays.", icon: <Database className="text-[#00BFA6]" /> },
    { title: "Cybersecurity", desc: "Proactive whitehat pen testing, OWASP-level threat mitigation.", icon: <Shield className="text-[#00BFA6]" /> },
    { title: "QA & Testing", desc: "Automated end-to-end framework validations using Playwright.", icon: <CheckCircle className="text-[#00BFA6]" /> },
    { title: "Performance", desc: "Core Web Vitals optimization to yield 100/100 Lighthouse ratings.", icon: <Zap className="text-[#00BFA6]" /> },
    { title: "Product Strategy", desc: "Detailed product scoping, competitive analysis, metric reports.", icon: <Award className="text-[#00BFA6]" /> },
    { title: "Consulting", desc: "Advisory on modern engineering stacks during funding shifts.", icon: <HeartHandshake className="text-[#00BFA6]" /> },
    { title: "Maintenance", desc: "Dependency monitoring, critical updates, live alert monitoring.", icon: <Settings className="text-[#00BFA6]" /> },
    { title: "Support", desc: "Prompt 24/7 client dispatch desks representing live projects.", icon: <CheckCircle2 className="text-[#00BFA6]" /> },
    { title: "Analytics", desc: "Integrating clean event logs to segment daily active users.", icon: <Zap className="text-[#00BFA6]" /> },
    { title: "Branding", desc: "Color theory pairing, logo guidelines and corporate brand boards.", icon: <Award className="text-[#00BFA6]" /> }
  ];

  const blocks = [
    {
      id: "01",
      title: "Web Development",
      caption: "Modern websites & web apps built with Next.js, React, and cutting-edge technologies.",
      bullets: ["Responsive Layouts", "SEO Optimized", "Type-safe with TypeScript", "Blazing speed performance"],
      techs: ["React", "Next.js", "TypeScript", "Vite", "Node.js", "Tailwind CSS"],
    },
    {
      id: "02",
      title: "Mobile App Development",
      caption: "Native iOS & Android apps designed for smooth gestures, quick load, and real business impact.",
      bullets: ["Shared Codebase via React Native", "Native Performance & Components", "App Store Submissions & Audits", "Offline First Capable"],
      techs: ["React Native", "Swift", "Kotlin", "Expo", "Firebase", "App Store Connect"],
    },
    {
      id: "03",
      title: "Cybersecurity",
      caption: "Protect your ecosystem. Security isn't an afterthought — it runs deep in every line of code we ship.",
      bullets: ["OWASP Top 10 Mitigation Audits", "Secure Authentication (OIDC, OAuth)", "Penetration Testing & Reporting", "GDPR, HIPAA & CCPA Compliance"],
      techs: ["OWASP Guidelines", "OIDC", "Auth0", "JWT Encryption", "Cloud IAM Protocols", "SSL Encryptions"],
    }
  ];

  const stats = [
    { label: "Projects Delivered", val: "80+" },
    { label: "Happy Clients", val: "45+" },
    { label: "Countries Served", val: "12+" },
    { label: "Client Satisfaction", val: "99%" }
  ];

  const testimonials = [
    {
      quote: "The web development speed was staggering. Next.js and TypeScript kept our project extremely clean. Real masters of engineering.",
      author: "James Carter",
      role: "CTO",
      company: "Fintech Labs",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Professional, fast and innovative. They delivered our cross-platform client app ahead of schedule. Truly premium output.",
      author: "Sophia Patel",
      role: "Product Lead",
      company: "Healthify",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Top-notch security and architecture. Zenik is our go-to tech partner whenever we have serious compliance burdens to handle.",
      author: "Daniel Wu",
      role: "CEO",
      company: "CloudScale",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* 1. HERO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50/20 via-orange-50/10 to-white text-center relative overflow-hidden">
        {/* Floating decoration */}
        <div className="absolute top-10 left-10 text-[#F4A24D] opacity-25 -rotate-12 select-none">
          <HanddrawnStar className="w-12 h-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50/60 px-3.5 py-1.5 rounded-full border border-teal-100">
            <span>What we do</span>
            <Squiggle className="w-5 h-1" />
          </div>
          
          <h1 className="text-4xl md:text-6.5xl font-black text-[#0D0F14] leading-tight tracking-tight">
            Services Built for <br className="hidden md:inline" />
            <span className="relative inline-block text-[#00BFA6] px-4 font-black whitespace-nowrap">
              Scale, Speed & Security.
              <HanddrawnCircle className="text-teal-400" />
            </span>
          </h1>

          <p className="font-script text-2.5xl text-[#F4A24D] font-extrabold pb-2">
            for ambitious digital builders ⚡
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base font-normal">
            We partner with ambitious companies across the UK & USA to build custom tech platforms that are modern, exceptionally fast, and secure — engineered for ultimate market leadership.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 relative">
            
            {/* Playful sketched cursor feedback pointing to button */}
            <div className="absolute -left-4 -bottom-16 hidden xl:block text-[#F4A24D] select-none rotate-[-15deg] pointer-events-none">
              <HanddrawnArrow className="w-12 h-12" />
              <span className="font-script text-sm font-bold absolute left-10 top-5 whitespace-nowrap">
                Check all 18 capabilities! ⚙️
              </span>
            </div>

            <a href="#full-services-grid" className="bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-all font-bold px-8 py-4.5 rounded-2xl text-sm inline-flex items-center shadow-md hover:-translate-y-0.5">
              <span>Explore Services</span>
              <span className="ml-2 font-mono">↓</span>
            </a>
            <Link to="/contact" className="border-2 border-gray-100 hover:border-gray-900 transition-all bg-white text-[#0D0F14] font-bold px-8 py-4.5 rounded-2xl text-sm inline-flex items-center hover:-translate-y-0.5">
              <span>Start a Project</span>
              <span className="ml-2 font-mono">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FULL SERVICE BLOCKS OR SECTIONS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          {blocks.map((block, i) => (
            <div 
              key={block.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Left Column: Info Block */}
              <div className={`lg:col-span-6 space-y-6 relative ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                
                {/* Odoo styled hand-circled index label */}
                <div className="relative inline-block select-none pb-2">
                  <span className="font-mono text-3xl font-extrabold text-[#0D0F14] bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-2xl relative z-10 shadow-sm">
                    {block.id}
                  </span>
                  <div className="absolute inset-0 scale-125 text-[#00BFA6] -z-10 translate-x-1">
                    <HanddrawnCircle />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4.5xl font-black text-[#0D0F14] tracking-tight">{block.title}</h2>
                <p className="text-gray-600 leading-relaxed text-base font-normal">{block.caption}</p>

                <ul className="grid grid-cols-2 gap-4 pt-2">
                  {block.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center text-sm font-bold text-gray-800 bg-[#FAF9F6] p-2.5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <CheckMini className="text-[#00BFA6] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-3">Core Stack / Standards</span>
                  <div className="flex flex-wrap gap-2">
                    {block.techs.map((tech) => (
                      <span key={tech} className="bg-[#FAF9F6] text-gray-800 text-xs font-mono font-bold px-3py-1.5 px-3.5 py-1.5 border border-gray-100 rounded-xl hover:border-[#00BFA6] transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Mockup or Graphic */}
              <div className="lg:col-span-6">
                <div className="p-8 rounded-[32px] bg-gradient-to-br from-teal-50/20 via-white to-orange-50/15 border border-gray-100 shadow-sm hover:shadow-[0_20px_45px_rgba(0,0,0,0.03)] hover:border-teal-100 transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Decorative mesh */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200/20 rounded-full blur-2xl group-hover:bg-teal-300/30 transition-colors"></div>

                  <div className="font-mono text-xs text-gray-500 space-y-3 relative z-10">
                    <div className="flex justify-between items-center">
                      <span className="text-[#00BFA6] font-bold"># MODULE SYSTEM DIRECTORY</span>
                      <span className="font-script text-base text-[#F4A24D] font-bold rotate-6 select-none leading-none">
                        "Real deployment ready!"
                      </span>
                    </div>
                    <div className="border border-gray-100 bg-white p-5 rounded-2xl shadow-sm space-y-2 relative">
                      <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
                      <div className="w-24 h-1.5 bg-teal-50 bg-[#00BFA6] rounded-full"></div>
                      <div className="w-full h-10 bg-gray-50 rounded-xl flex items-center justify-between px-3 text-[10px] text-gray-600">
                        <span>/api/services/{block.title.toLowerCase().replace(/ /g, '-')}</span>
                        <span className="text-emerald-500 font-bold">200 OK</span>
                      </div>
                    </div>
                  </div>

                  {block.id === '03' ? (
                    <div className="flex gap-4 pt-6">
                      <span className="bg-[#0D0F14] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border border-gray-800">
                        🛡️ GDPR Compliant
                      </span>
                      <span className="bg-[#0D0F14] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border border-gray-800">
                        🔑 Secure Auth
                      </span>
                      <span className="bg-[#00BFA6] text-[#0D0F14] text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                        ✓ OWASP Audited
                      </span>
                    </div>
                  ) : null}

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. 18-ICON SERVICE GRID */}
      <section id="full-services-grid" className="py-24 bg-[#FCFAF7] border-y border-orange-100/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] inline-flex items-center gap-1">
              All Services <Squiggle className="w-4 h-1" />
            </span>
            <h2 className="text-3xl md:text-5.5xl font-black text-[#0D0F14] tracking-tight">
              Everything You{" "}
              <span className="relative inline-block text-[#00BFA6] px-3 font-black whitespace-nowrap">
                Need
                <HanddrawnCircle className="text-[#00BFA6]" />
              </span>
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">one comprehensive capability center</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {fullServices.map((svc, i) => (
              <div 
                key={i} 
                className="bg-white hover:bg-white text-[#0D0F14] p-6 rounded-[24px] border border-gray-100 hover:border-[#00BFA6] hover:shadow-[0_12px_30px_rgba(0,191,166,0.06)] transition-all duration-300 transform hover:-translate-y-1.5 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center font-black text-lg text-[#00BFA6]">
                    {svc.icon}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0D0F14] line-clamp-1 mt-4">{svc.title}</h3>
                  <p className="text-[11px] text-gray-500 font-normal leading-relaxed mt-1">{svc.desc}</p>
                </div>
                
                {/* Micro sketchy check sticker */}
                <div className="flex items-center text-[9px] text-teal-600 font-bold font-mono pt-2 border-t border-gray-50 mt-3">
                  <span>DEPLOYED READY ✓</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STATS ROW */}
      <section className="py-16 bg-[#0D0F14] text-white border-b border-gray-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => {
              const statLabels = ["and counting 📈", "100% standard ⭐", "world hubs 🗺️", "loved by all ❤️"];
              return (
                <div key={stat.label} className="space-y-1.5 group cursor-default">
                  <div className="text-4xl md:text-6xl font-black text-[#00BFA6] font-mono tracking-tight group-hover:scale-105 transition-transform">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{stat.label}</div>
                  <span className="font-script text-sm text-[#F4A24D] block font-bold select-none opacity-90">{statLabels[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] inline-flex items-center gap-1">
              What Clients Say <Squiggle className="w-4 h-1 text-[#00BFA6]" />
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D0F14]">
              Real Stories. Real Impact.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 relative">
            <div className="space-y-6">
              <span className="text-5xl font-serif text-[#00BFA6] leading-none block select-none">“</span>
              <p className="text-[#0D0F14] italic text-base md:text-xl leading-relaxed">
                {testimonials[activeTestimonial].quote}
              </p>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#0D0F14] text-sm">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-xs text-[#00BFA6] font-semibold">
                    {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="absolute bottom-6 right-6 flex items-center space-x-2">
              <button 
                onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-[#00BFA6] hover:text-white transition-colors text-gray-600 shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-[#00BFA6] hover:text-white transition-colors text-gray-600 shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner buttonText="Book a Call" linkTo="/contact" />

    </div>
  );
}
