import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Eye, ArrowRight, BookOpen, Layers } from "lucide-react";
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

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Web" | "Mobile" | "Cybersecurity" | "UI/UX">("All");

  const categories: ("All" | "Web" | "Mobile" | "Cybersecurity" | "UI/UX")[] = [
    "All", "Web", "Mobile", "Cybersecurity", "UI/UX"
  ];

  const projects = [
    {
      id: "finova",
      title: "Finova Dashboard",
      client: "Finova Capital",
      category: "Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      description: "A secure, premium corporate analytics dashboard with fully audited real-time data feeds.",
      tech: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    },
    {
      id: "movemate",
      title: "MoveMate Fitness",
      client: "MoveMate Inc",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1510051646316-c3f15a0c64b1?w=800&auto=format&fit=crop&q=80",
      description: "Cross-platform iOS and Android workout tracker syncing offline data with rich notifications.",
      tech: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    },
    {
      id: "sentinelx",
      title: "SentinelX Monitoring",
      client: "Sentinel Security",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      description: "Enterprise log tracker, checking OWASP alignment, and alerting staff of anomalies.",
      tech: ["Python", "Docker", "AWS OpenSearch", "CloudWatch"],
    },
    {
      id: "lumina",
      title: "Lumina Storefront",
      client: "Lumina Co",
      category: "Web",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
      description: "Ultra-fast headless Shopify frontend with localized currencies and complex shipping hooks.",
      tech: ["Next.js", "Shopify GraphQL", "Stripe API", "Vercel"],
    },
    {
      id: "wanderly",
      title: "Wanderly Guide",
      client: "Wanderly LLC",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
      description: "Travel planning and collaborative offline mapping vectors, optimized for battery protection.",
      tech: ["React Native", "MapLibre", "NodeJS", "MongoDB"],
    },
    {
      id: "trustcomply",
      title: "TrustComply Audit",
      client: "TrustComply LLC",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      description: "Interactive system dashboard tracking internal files, and highlighting potential GDPR errors.",
      tech: ["Figma", "React", "Tailwind CSS", "Auditing Modules"],
    }
  ];

  // Filtering projects based on selection
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { label: "Completed Projects", val: "80+" },
    { label: "Active Enterprise Clients", val: "45+" },
    { label: "Countries Served", val: "12+" },
    { label: "Successful Audits", val: "150+" }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen relative">
      
      {/* 1. HERO */}
      <section className="py-20 bg-gradient-to-b from-teal-50/20 via-orange-50/10 to-white text-center relative overflow-hidden">
        {/* Playful star doodle */}
        <div className="absolute top-10 right-10 text-orange-400 opacity-25 select-none animate-pulse">
          <HanddrawnStar className="w-12 h-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
            <span>Our Work</span>
            <Squiggle className="w-5 h-1" />
          </div>

          <h1 className="text-4xl md:text-6.5xl font-black text-[#0D0F14] leading-tight tracking-tight">
            Projects Built to{" "}
            <span className="relative inline-block text-[#00BFA6] px-4 font-black whitespace-nowrap">
              Perform.
              <HanddrawnCircle className="text-teal-400" />
            </span>
          </h1>

          <p className="font-script text-2.5xl text-[#F4A24D] font-extrabold">
            real production code for ultimate speed 🚀
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
            Explore our curated showcase of custom web applications, fluid mobile interfaces, and secure SaaS dashboards. Each project is hand-crafted with rigorous testing to ensure real-world success.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="py-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Handwritten float notes above categories */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 text-[#F4A24D] select-none pointer-events-none hidden md:block">
            <span className="font-script text-base font-bold flex items-center gap-1">
              Filter by system stack:
              <svg className="w-6 h-6 rotate-[90deg] inline-block -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-7 py-3 rounded-2xl text-xs font-extrabold transition-all duration-300 transform active:scale-95 ${
                    active
                      ? "bg-[#0D0F14] text-white shadow-md border-2 border-[#0D0F14]"
                      : "bg-[#FAF9F6] border-2 border-gray-100 text-gray-600 hover:border-gray-900 hover:text-[#0D0F14]"
                  }`}
                >
                  <span>{cat === "All" ? "All Projects" : cat}</span>
                  {active && (
                    <div className="absolute -inset-1 border border-dashed border-[#00BFA6] rounded-[18px] pointer-events-none animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* 3. MASONRY GRID */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {filteredProjects.map((proj) => {
              const isFeatured = proj.id === "finova" || proj.id === "sentinelx";
              return (
                <div
                  key={proj.id}
                  className="group rounded-[32px] overflow-hidden border border-gray-100 bg-[#FAF9F6]/50 hover:bg-white hover:border-[#00BFA6] hover:shadow-[0_20px_50px_rgba(0,191,166,0.06)] transition-all duration-350 hover:-translate-y-1.5 flex flex-col justify-between relative text-left"
                >
                  {/* Decorative sketch crown for featured items */}
                  {isFeatured && (
                    <div className="absolute right-4 top-4 z-20 bg-[#FAF9F6] text-[#F4A24D] border border-orange-100/80 px-3 py-1.5 rounded-2xl text-[10px] font-bold uppercase font-mono tracking-widest inline-flex items-center gap-1 shadow-sm select-none">
                      <HanddrawnCrown className="w-3.5 h-3.5 inline text-[#F4A24D]" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Visual Image container with hover dark overlay */}
                  <div className="relative aspect-video overflow-hidden bg-gray-50 border-b border-gray-100/50">
                    <img
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0D0F14]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div className="w-12 h-12 bg-[#00BFA6] rounded-full flex items-center justify-center text-white shadow-lg">
                        <Eye size={20} />
                      </div>
                      <span className="text-white font-black text-lg">View Details / Case Study</span>
                      <p className="text-gray-400 text-xs max-w-xs leading-relaxed font-normal">{proj.description}</p>
                      
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-xs text-[#00BFA6] font-extrabold tracking-wider hover:underline"
                      >
                        <span>ENQUIRE ABOUT SIMILAR BUILD</span>
                        <ArrowRight size={12} className="ml-1.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="p-8 space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] bg-teal-50/70 border border-teal-100 px-3 py-1 rounded-xl">
                        {proj.category}
                      </span>
                      <span className="text-xs text-gray-400 font-bold font-mono">{proj.client}</span>
                    </div>

                    <h3 className="text-xl font-black text-[#0D0F14] tracking-tight">{proj.title}</h3>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-gray-100">
                      {proj.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono font-bold text-gray-600 bg-white px-2.5 py-1 border border-gray-100 rounded-xl hover:border-teal-100 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 4. STATS ROW */}
      <section className="py-20 bg-[#0D0F14] text-white my-16 relative overflow-hidden">
        {/* Abstract pattern backplane */}
        <div className="absolute inset-0 bg-[radial-gradient(#151b26_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-45"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((st, i) => {
              const captions = ["delivered specs ⚙️", "partners 🤝", "global hubs 🌍", "audited safe 🛡️"];
              return (
                <div key={st.label} className="space-y-1.5 group cursor-default">
                  <div className="text-4xl md:text-6.5xl font-black text-[#00BFA6] font-mono tracking-tight group-hover:scale-105 transition-all">{st.val}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{st.label}</div>
                  <span className="font-script text-sm text-[#F4A24D] block font-bold select-none opacity-90">{captions[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <CtaBanner buttonText="Build My Vision" linkTo="/contact" />

    </div>
  );
}
