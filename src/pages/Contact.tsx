import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ChevronDown, ChevronUp, AlertCircle, Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    budget: "£10k - £25k",
    message: ""
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const requirements = [
    {
      id: "Web Development",
      label: "Web Apps",
      desc: "Next.js, TypeScript, Headless Shopify",
      projectSample: {
        title: "Finova Dashboard",
        client: "Finova Capital",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
        tech: ["Next.js", "TypeScript", "D3.js"]
      }
    },
    {
      id: "Mobile App Development",
      label: "Mobile Apps",
      desc: "React Native, Expo, iOS & Android",
      projectSample: {
        title: "MoveMate Fitness",
        client: "MoveMate Inc",
        image: "https://images.unsplash.com/photo-1510051646316-c3f15a0c64b1?w=400&auto=format&fit=crop&q=80",
        tech: ["React Native", "Expo", "Node.js"]
      }
    },
    {
      id: "Cybersecurity",
      label: "Cybersecurity",
      desc: "ISO 27001, OWASP Security Audits",
      projectSample: {
        title: "SentinelX Monitoring",
        client: "Sentinel Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&auto=format&fit=crop&q=80",
        tech: ["Python", "Docker", "AWS OpenSearch"]
      }
    },
    {
      id: "UI/UX Design",
      label: "UI/UX Design",
      desc: "Interactive blueprints & high-fi Figma wireframes",
      projectSample: {
        title: "TrustComply Audit",
        client: "TrustComply LLC",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=80",
        tech: ["Figma", "React", "Tailwind CSS"]
      }
    }
  ];

  const allTechPills = [
    "Next.js", "React Native", "TypeScript", "Tailwind CSS", "D3.js", "Figma", "Stripe API", "AWS / Docker", "OWASP Loggers"
  ];

  const budgetRanges = [
    "£10k - £25k",
    "£25k - £50k",
    "£50k - £100k",
    "£100k+"
  ];

  const faqs = [
    { q: "What is your typical project timeline?", a: "Standard MVP deliveries take 6 to 12 weeks. Large compliance-critical cloud setups range from 4 to 6 months including OWASP penetration cycles." },
    { q: "Do you work with early-stage startups?", a: "Yes. We frequently act as the technical co-founders or primary engineering pods to build robust, secure MVPs that satisfy seed investors." },
    { q: "Where are your core teams physically based?", a: "We are physically based in London UK (Shelton Street) and Manhattan New York. We operate on hybrid transatlantic schedules." },
    { q: "How do you ensure GDPR / HIPAA alignment?", a: "Compliance is configured directly inside the SQL storage layers & IAM cloud roles. We do not treat compliance or data security as low-value add-ons." },
    { q: "Are project code repositories owned by clients?", a: "Absolutely. Once milestones are paid, full GitHub ownership, intellectual properties, and server certificates belong exclusively to your business." }
  ];

  const trustBadges = [
    { title: "ISO 27001", subtitle: "Aligned Information Safety Standards" },
    { title: "OWASP Certified", subtitle: "Defenses built against modern attack triggers" },
    { title: "HIPAA Compliant", subtitle: "Healthcare data pipelines fully encrypted" },
    { title: "GDPR Compliant", subtitle: "Proactive user data deletion protocols" }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "Web Development",
          budget: "£10k - £25k",
          message: ""
        });
        setSelectedTechs([]);
      }, 5000);
    }
  };

  return (
    <div className="pt-20 bg-white min-h-screen relative overflow-hidden">
      
      {/* 1. HERO */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-teal-50/20 via-orange-50/10 to-white text-center relative">
        <div className="absolute top-8 left-1/5 text-[#F4A24D] opacity-15 rotate-12 pointer-events-none select-none">
          <HanddrawnStar className="w-14 h-14" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            <span>Contact Us</span>
            <Squiggle className="w-5 h-1 text-[#00BFA6]" />
          </div>

          <h1 className="text-4xl md:text-6.5xl font-black text-[#0D0F14] leading-tight tracking-tight">
            Start a Project with Our <br />
            <span className="relative inline-block text-[#00BFA6] px-4 mt-2">
              UK & USA Engineering Team.
              <HanddrawnCircle className="text-teal-400" />
            </span>
          </h1>

          <p className="font-script text-2.5xl text-[#F4A24D] font-extrabold">
            let's draft your next major build ⚡
          </p>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
            Ready to build? Specify your parameters, budget limits, or service objectives, and our senior architects will schedule a 30-min discovery call.
          </p>
        </div>
      </section>

      {/* 2. FORM & INFO SPLIT LAYOUT */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#0D0F14] text-white p-8 md:p-12 rounded-[32px] border-2 border-dashed border-gray-800 shadow-xl relative overflow-hidden">
              
              {submitSuccess ? (
                <div className="absolute inset-0 bg-[#0D0F14] rounded-[30px] p-8 flex flex-col items-center justify-center text-center space-y-4 z-10">
                  <div className="w-16 h-16 bg-teal-500/20 text-[#00BFA6] rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-white">Project Inquiry Received!</h3>
                  <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                    Thank you, <span className="text-white font-black">{formData.name}</span>. One of our transatlantic architects will reach out within 1 business day with custom dashboard setup options.
                  </p>
                  <p className="text-xs text-teal-400 font-mono select-none uppercase tracking-widest">Dispatched successfully • ID: {(Math.random()*1000).toFixed(0)}</p>
                </div>
              ) : null}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">YOUR NAME *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="James Carter"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#131720] text-xs border border-gray-800 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-white focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">PROFESSIONAL EMAIL *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="james@mycompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#131720] text-xs border border-gray-800 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-white focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block font-mono">COMPANY NAME</label>
                    <input 
                      type="text" 
                      placeholder="E.g., FinTech Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-[#131720] text-xs border border-gray-800 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-white focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block font-mono">PRIMARY REQUIREMENT</label>
                    <div className="grid grid-cols-2 gap-2">
                      {requirements.map((req) => {
                        const isSelected = formData.service === req.id || (formData.service === "Web Development" && req.id === "Web Development");
                        return (
                          <button
                            key={req.id}
                            type="button"
                            onClick={() => setFormData({...formData, service: req.id})}
                            className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer ${
                              isSelected
                                ? "bg-[#131720] border-[#00BFA6] ring-1 ring-[#00BFA6] text-[#00BFA6]"
                                : "bg-[#131720]/45 border-gray-850 hover:border-gray-750 text-white"
                            }`}
                          >
                            <span className="text-[11px] font-black tracking-tight block">{req.label}</span>
                            <span className="text-[8.5px] text-gray-500 font-semibold block mt-1 leading-snug">{req.desc}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* DYNAMIC CASE STUDY REFERENCE DRAWER */}
                {(() => {
                  const activeRequirement = requirements.find(r => r.id === formData.service) || requirements[0];
                  return (
                    <div className="p-4 bg-[#131720] rounded-[24px] border border-gray-800 text-left relative overflow-hidden">
                      <div className="absolute -right-2 -top-2 opacity-5 pointer-events-none select-none">
                        <HanddrawnCrown className="w-24 h-24 text-[#00BFA6]" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="w-full sm:w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-850 bg-gray-900">
                          <img 
                            className="w-full h-full object-cover select-none"
                            src={activeRequirement.projectSample.image} 
                            alt={activeRequirement.projectSample.title}
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-1.5 flex-wrap">
                            <span className="text-[8px] uppercase font-bold tracking-wider text-[#00BFA6] bg-teal-950/40 px-2 py-0.5 rounded-md border border-teal-900">
                              SIMILAR CASE STUDY REFERENCE EXECUTED
                            </span>
                          </div>
                          <h4 className="text-[13px] font-black text-white tracking-tight">
                            {activeRequirement.projectSample.title} <span className="text-gray-500 text-[10px] font-mono">({activeRequirement.projectSample.client})</span>
                          </h4>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {activeRequirement.projectSample.tech.map(t => (
                              <span key={t} className="text-[9px] font-mono text-gray-400 font-bold bg-[#1B212D] px-2 py-0.5 border border-gray-800 rounded-md">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 3. TECH STACK MULTI-TOGGLE PILLS */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">
                    CHOOSE CORRESPONDING STACK PILLS (OPTIONAL SELECT)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {allTechPills.map((tech) => {
                      const isSelected = selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setSelectedTechs(selectedTechs.filter(t => t !== tech));
                            } else {
                              setSelectedTechs([...selectedTechs, tech]);
                            }
                          }}
                          className={`px-3 py-2 rounded-lg text-[9px] font-bold font-mono border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-teal-500/10 text-[#00BFA6] border-[#00BFA6] scale-[1.02]"
                              : "bg-[#131720]/80 text-gray-400 border-gray-850 hover:border-gray-750 hover:text-white"
                          }`}
                        >
                          {tech} {isSelected ? "✓" : "+"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block font-mono">MONTHLY PROJECT BUDGET RANGE</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetRanges.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFormData({...formData, budget: val})}
                        className={`text-xs font-bold py-3.5 rounded-2xl border transition-all cursor-pointer ${
                          formData.budget === val
                            ? "bg-[#00BFA6] text-[#0D0F14] border-[#00BFA6] scale-[1.02] shadow-md shadow-teal-500/10"
                            : "bg-[#131720] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">MESSAGE BRIEF *</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Briefly state your requirements, technical frameworks, or security parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#131720] text-xs border border-gray-800 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-white focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-600"
                  />
                </div>

                <div className="relative pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#00BFA6] text-[#0D0F14] font-extrabold py-4.5 rounded-2xl text-xs hover:bg-white hover:text-[#0D0F14] transition-all transform active:scale-98 shadow-lg hover:shadow-teal-500/5 cursor-pointer"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Submit Project Details & Book Discovery Call</span>
                      {selectedTechs.length > 0 && (
                        <span className="bg-[#0D0F14] text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                          {selectedTechs.length} Techs selected
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Contact Info & Map graphic */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100/70 inline-flex items-center gap-1.5">
                  Connect Directly <Squiggle className="w-4 h-1" />
                </span>
                <h3 className="text-2xl font-black text-[#0D0F14] tracking-tight">Office Destinations</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 text-sm bg-gray-50/50 p-4.5 rounded-2xl border border-gray-100 hover:border-teal-100 transition-colors">
                    <div className="w-10 h-10 bg-[#0D0F14] text-[#00BFA6] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">London, UK HQ</p>
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">71-75 Shelton Street, Covent Garden, WC2H 9JQ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 text-sm bg-gray-50/50 p-4.5 rounded-2xl border border-gray-100 hover:border-teal-100 transition-colors">
                    <div className="w-10 h-10 bg-[#0D0F14] text-[#00BFA6] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">Manhattan, NY USA</p>
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">250 Park Ave, Suite 700, New York, NY 10177</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 text-sm bg-[#FAF9F6] p-4.5 rounded-2xl border border-orange-100/40 hover:border-orange-200 transition-colors">
                    <div className="w-10 h-10 bg-[#F4A24D] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">General Inquiries</p>
                      <p className="text-xs text-[#0D0F14] font-bold mt-1.5">hello@zenik.studio</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Interactive Vector World Map */}
              <div className="bg-gradient-to-tr from-gray-50 to-[#FAF9F6] rounded-[32px] p-6 border border-gray-100 flex flex-col justify-end space-y-4 relative aspect-video overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(#00bfa6_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                
                {/* Simulated dots represent location */}
                <div className="absolute top-1/3 left-1/2 text-[#00BFA6] group animate-pulse">
                  <span className="w-4 h-4 bg-[#00BFA6] rounded-full block relative border-2 border-white shadow-md"></span>
                  <span className="text-[10px] uppercase font-bold text-[#0D0F14] font-mono block pt-1.5 -ml-4">London UK</span>
                </div>
                
                <div className="absolute top-1/2 left-1/4 text-teal-400 group animate-pulse delay-700">
                  <span className="w-4 h-4 bg-[#00BFA6] rounded-full block relative border-2 border-white shadow-md"></span>
                  <span className="text-[10px] uppercase font-bold text-[#0D0F14] font-mono block pt-1.5 -ml-4">New York NY</span>
                </div>

                {/* Sub-text map explanation */}
                <div className="text-[10px] text-gray-400 font-extrabold font-mono tracking-widest relative z-10 select-none">
                  TRANSATLANTIC INGRESS NETWORK HOSTS
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. TRUST CERTIFICATES BADGES */}
      <section className="py-16 bg-[#FAFAF7] border-y border-orange-100/40 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 bg-white border border-gray-100 px-3.5 py-1.5 rounded-full select-none shadow-sm">
            Our Compliance Certifications
          </span>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="bg-white rounded-3xl p-6 border border-gray-100/80 text-center space-y-2 shadow-sm hover:border-[#00BFA6] hover:shadow-[0_15px_30px_rgba(0,191,166,0.03)] transition-all">
                <p className="text-base font-black text-[#0D0F14] tracking-tight">{badge.title}</p>
                <p className="text-xs text-gray-400 font-bold leading-normal">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "HOW WE WORK" Row */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00BFA6] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D0F14] tracking-tight">
              Principles We Deliver On
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">transparency as an integrated runtime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 bg-gray-50/40 p-8 rounded-[32px] border border-gray-100 hover:border-teal-100 transition-all">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00BFA6]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0F14] tracking-tight">Bi-Weekly Milestones</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">Every two weeks we host a demo showing active staging deployments. No long silence cycles.</p>
            </div>
            
            <div className="space-y-4 bg-gray-50/40 p-8 rounded-[32px] border border-gray-100 hover:border-teal-100 transition-all">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00BFA6]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0F14] tracking-tight">Public Slack Channels</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">Connect directly with our senior development masters. Zero interface buffers.</p>
            </div>

            <div className="space-y-4 bg-gray-50/40 p-8 rounded-[32px] border border-gray-100 hover:border-teal-100 transition-all">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-[#00BFA6]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0F14] tracking-tight">Total Handover</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">Full repository permissions, documented code components, and certificates handoff.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-[#FAFAF7] border-t border-b border-gray-100 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#00BFA6] text-xs uppercase tracking-widest font-bold bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              Frequently Asked
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0D0F14] tracking-tight">
              Questions Checklist
            </h2>
            <p className="font-script text-2xl text-[#F4A24D] font-bold">still curious? let us clear it up! ☕</p>
          </div>

          <div className="space-y-4 relative z-10">
            {faqs.map((faq, idx) => {
              const isFaqOpen = activeFaqIdx === idx;
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-[22px] overflow-hidden shadow-sm hover:border-[#00BFA6] transition-all">
                  <button
                    onClick={() => setActiveFaqIdx(isFaqOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between font-black text-sm text-[#0D0F14] focus:outline-none cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.q}</span>
                    <span className="text-[#00BFA6] font-mono text-lg font-black shrink-0 transition-transform duration-300">
                      {isFaqOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isFaqOpen && (
                    <div className="p-6 pt-0 border-t border-gray-50 text-xs text-gray-500 leading-relaxed font-semibold bg-gray-50/30 animate-fade-down">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner buttonText="Schedule Call Now" linkTo="/contact" />

    </div>
  );
}
