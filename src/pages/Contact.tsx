import React, { useState, useEffect } from "react";
import { Mail, MapPin, CheckCircle, Award, Compass, HeartHandshake, Copy, ExternalLink, ThumbsUp, ThumbsDown, Search, X as CloseIcon } from "lucide-react";
import {
  Squiggle,
  HanddrawnStar,
  HanddrawnCrown
} from "../components/Squiggle";
import { CtaBanner } from "../components/CtaBanner";
import { ScriptHeading } from "../components/ScriptHeading";

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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [helpfulFaq, setHelpfulFaq] = useState<{ [key: number]: boolean | null }>({});
  const [faqSearch, setFaqSearch] = useState("");
  const [caseStudyModal, setCaseStudyModal] = useState<string | null>(null);
  const [hoveredBudget, setHoveredBudget] = useState<string | null>(null);
  const [hoveredTrust, setHoveredTrust] = useState<string | null>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  // Autosave form data to localStorage
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    localStorage.setItem("selectedTechs", JSON.stringify(selectedTechs));
  }, [formData, selectedTechs]);

  // Load form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem("contactFormData");
    const savedTechs = localStorage.getItem("selectedTechs");
    if (savedFormData) setFormData(JSON.parse(savedFormData));
    if (savedTechs) setSelectedTechs(JSON.parse(savedTechs));
  }, []);

  // Helper function to get form progress
  const getFormProgress = () => {
    let filled = 0;
    if (formData.name) filled++;
    if (formData.email) filled++;
    if (formData.service) filled++;
    if (selectedTechs.length > 0) filled++;
    if (formData.message) filled++;
    return filled;
  };

  // Helper function to get budget comparison data
  const getBudgetComparison = () => {
    const budgets = [
      { range: "£10k - £25k", value: 25, color: "from-teal-400 to-teal-500" },
      { range: "£25k - £50k", value: 50, color: "from-teal-500 to-teal-600" },
      { range: "£50k - £100k", value: 100, color: "from-teal-600 to-teal-700" },
      { range: "£100k+", value: 150, color: "from-teal-700 to-teal-800" }
    ];
    return budgets;
  };

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
    { title: "ISO 27001", subtitle: "Aligned Information Safety Standards", renewal: "2025", verifyLink: "https://www.iso.org/isoiec-27001-information-security-management.html" },
    { title: "OWASP Certified", subtitle: "Defenses built against modern attack triggers", renewal: "2024", verifyLink: "https://owasp.org/www-project-top-ten/" },
    { title: "HIPAA Compliant", subtitle: "Healthcare data pipelines fully encrypted", renewal: "2025", verifyLink: "https://www.hhs.gov/hipaa/index.html" },
    { title: "GDPR Compliant", subtitle: "Proactive user data deletion protocols", renewal: "2024", verifyLink: "https://gdpr-info.eu/" }
  ];

  const collaborationPrinciples = [
    {
      number: "01",
      title: "Bi-Weekly Milestones",
      description: "Every two weeks we host a demo showing active staging deployments. No long silence cycles.",
      icon: Award,
      color: "from-teal-400 to-teal-500"
    },
    {
      number: "02",
      title: "Public Slack Channels",
      description: "Connect directly with our senior development masters. Zero interface buffers.",
      icon: Compass,
      color: "from-teal-500 to-teal-600"
    },
    {
      number: "03",
      title: "Total Handover",
      description: "Full repository permissions, documented code components, and certificates handoff.",
      icon: HeartHandshake,
      color: "from-teal-600 to-teal-700"
    }
  ];

  const faqCategories = ["All", "Timeline", "Startup", "Location", "Compliance", "Ownership"];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitSuccess(true);
      // Clear localStorage on successful submission
      localStorage.removeItem("contactFormData");
      localStorage.removeItem("selectedTechs");
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@zenik.studio");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, "_blank");
  };

  const handleClearAllTechs = () => {
    setSelectedTechs([]);
  };

  const handleFaqHelpful = (idx: number, helpful: boolean) => {
    setHelpfulFaq({ ...helpfulFaq, [idx]: helpful });
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

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

          <ScriptHeading
            as="h1"
            text="Start a Project with Our UK & USA Engineering Team."
            highlight="Team."
            className="font-script text-5xl sm:text-6xl md:text-7xl font-bold text-[#0D0F14] leading-[0.98] tracking-tight"
            accentColorClassName="text-[#F4A24D]"
          />

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
            <div className="lg:col-span-7 bg-white text-[#0D0F14] p-8 md:p-12 rounded-[32px] border border-[#00BFA6]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">

              {/* Decorative SVG shapes in top-right corner */}
              <div className="absolute -top-8 -right-8 opacity-5 pointer-events-none select-none">
                <svg width="200" height="200" viewBox="0 0 200 200" className="text-[#00BFA6]">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 100 20 L 140 80 L 100 100 L 60 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="120" y="120" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* Form Progress Indicator */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] font-mono">Form Progress</span>
                  <span className="text-[10px] font-bold text-gray-400 font-mono">Step {getFormProgress()}/5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#00BFA6] to-teal-400 h-full transition-all duration-300"
                    style={{ width: `${(getFormProgress() / 5) * 100}%` }}
                  />
                </div>
              </div>

              {submitSuccess ? (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[30px] p-8 flex flex-col items-center justify-center text-center space-y-4 z-10">
                  <div className="w-16 h-16 bg-teal-50 text-[#00BFA6] rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0D0F14]">Project Inquiry Received!</h3>
                  <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                    Thank you, <span className="text-[#0D0F14] font-black">{formData.name}</span>. One of our transatlantic architects will reach out within 1 business day with custom dashboard setup options.
                  </p>
                  <p className="text-xs text-gray-400 font-mono select-none uppercase tracking-widest">Dispatched successfully • ID: {(Math.random() * 1000).toFixed(0)}</p>
                </div>
              ) : null}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">
                      YOUR NAME <span className="text-[#00BFA6]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="James Carter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50/50 text-xs border border-gray-200 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-[#0D0F14] focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">
                      PROFESSIONAL EMAIL <span className="text-[#00BFA6]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="james@mycompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50/50 text-xs border border-gray-200 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-[#0D0F14] focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block font-mono">COMPANY NAME</label>
                    <input
                      type="text"
                      placeholder="E.g., FinTech Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-gray-50/50 text-xs border border-gray-200 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-[#0D0F14] focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block font-mono">PRIMARY REQUIREMENT</label>
                    <div className="grid grid-cols-2 gap-2">
                      {requirements.map((req) => {
                        const isSelected = formData.service === req.id || (formData.service === "Web Development" && req.id === "Web Development");
                        return (
                          <button
                            key={req.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: req.id })}
                            className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer ${isSelected
                              ? "bg-teal-50/50 border-[#00BFA6] ring-1 ring-[#00BFA6] text-[#00BFA6]"
                              : "bg-white border-gray-200 hover:border-teal-200 text-[#0D0F14]"
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

                {/* DYNAMIC CASE STUDY REFERENCE CARD WITH ENHANCEMENTS */}
                {(() => {
                  const activeRequirement = requirements.find(r => r.id === formData.service) || requirements[0];
                  return (
                    <>
                      <div
                        className="p-4 bg-gray-50 rounded-[24px] border border-gray-200 text-left relative overflow-hidden cursor-pointer group hover:border-[#00BFA6] transition-all"
                        onClick={() => setCaseStudyModal(activeRequirement.projectSample.title)}
                      >
                        <div className="absolute -right-2 -top-2 opacity-5 pointer-events-none select-none group-hover:opacity-10 transition-opacity">
                          <HanddrawnCrown className="w-24 h-24 text-[#00BFA6]" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                          <div className="w-full sm:w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-200 bg-gray-100 group-hover:shadow-md group-hover:shadow-teal-500/20 transition-all">
                            <img
                              className="w-full h-full object-cover select-none"
                              src={activeRequirement.projectSample.image}
                              alt={activeRequirement.projectSample.title}
                            />
                          </div>

                          <div className="space-y-1 flex-1">
                            <div className="flex items-center space-x-1.5 flex-wrap">
                              <span className="text-[8px] uppercase font-bold tracking-wider text-[#00BFA6] bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                                SIMILAR CASE STUDY REFERENCE EXECUTED
                              </span>
                            </div>
                            <h4 className="text-[13px] font-black text-[#0D0F14] tracking-tight">
                              <span className="font-black">{activeRequirement.projectSample.title}</span> <span className="text-gray-500 text-[10px] font-mono">({activeRequirement.projectSample.client})</span>
                            </h4>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {activeRequirement.projectSample.tech.map(t => (
                                <span key={t} className="text-[9px] font-mono text-gray-500 font-bold bg-white px-2 py-0.5 border border-gray-200 rounded-md">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Animated link icon on hover */}
                          <div className="text-[#00BFA6] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                            <ExternalLink size={18} />
                          </div>
                        </div>
                      </div>

                      {/* Case Study Preview Modal */}
                      {caseStudyModal && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 rounded-2xl">
                          <div className="bg-white rounded-[32px] p-8 max-w-md w-full space-y-4 animate-fade-up">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-black text-[#0D0F14]">{activeRequirement.projectSample.title}</h3>
                              <button
                                onClick={() => setCaseStudyModal(null)}
                                className="text-gray-400 hover:text-[#0D0F14] transition-colors"
                              >
                                <CloseIcon size={20} />
                              </button>
                            </div>
                            <img
                              src={activeRequirement.projectSample.image}
                              alt={activeRequirement.projectSample.title}
                              className="w-full h-48 object-cover rounded-xl"
                            />
                            <div>
                              <p className="text-xs text-gray-500 font-bold mb-2">CLIENT</p>
                              <p className="text-sm font-bold text-[#0D0F14]">{activeRequirement.projectSample.client}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-bold mb-2">TECHNOLOGIES</p>
                              <div className="flex flex-wrap gap-2">
                                {activeRequirement.projectSample.tech.map(t => (
                                  <span key={t} className="text-[9px] font-mono text-[#00BFA6] bg-teal-50 px-2 py-1 rounded border border-teal-200">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}

                {/* 3. TECH STACK MULTI-TOGGLE PILLS WITH ENHANCEMENTS */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">
                      CHOOSE CORRESPONDING STACK PILLS (OPTIONAL SELECT)
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-gray-400 font-mono">
                        {selectedTechs.length}/9 selected
                      </span>
                      {selectedTechs.length > 0 && (
                        <button
                          type="button"
                          onClick={handleClearAllTechs}
                          className="text-[9px] font-bold text-[#00BFA6] hover:text-teal-600 transition-colors font-mono"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  </div>
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
                            } else if (selectedTechs.length < 9) {
                              setSelectedTechs([...selectedTechs, tech]);
                            }
                          }}
                          title={`${isSelected ? 'Remove' : 'Add'} ${tech}`}
                          className={`px-3 py-2 rounded-lg text-[9px] font-bold font-mono border transition-all cursor-pointer group relative ${isSelected
                            ? "bg-gradient-to-r from-teal-50 to-teal-100 text-[#00BFA6] border-[#00BFA6] scale-[1.02] shadow-sm shadow-teal-500/20"
                            : "bg-white text-gray-500 border-gray-200 hover:border-teal-200 hover:text-[#0D0F14]"
                            }`}
                        >
                          {tech} {isSelected ? "✓" : "+"}
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#0D0F14] text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {isSelected ? 'Remove' : 'Add'} {tech}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 relative">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block font-mono">MONTHLY PROJECT BUDGET RANGE</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetRanges.map((val) => (
                      <div key={val} className="relative group">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: val })}
                          onMouseEnter={() => setHoveredBudget(val)}
                          onMouseLeave={() => setHoveredBudget(null)}
                          className={`w-full text-xs font-bold py-3.5 rounded-2xl border transition-all cursor-pointer ${formData.budget === val
                            ? "bg-[#00BFA6] text-white border-[#00BFA6] scale-105 shadow-lg shadow-teal-500/30"
                            : "bg-white text-gray-500 border-gray-200 hover:border-teal-200 hover:text-[#0D0F14]"
                            }`}
                        >
                          {val}
                        </button>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#0D0F14] text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {val} per month
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Comparison Chart */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <p className="text-[9px] font-bold text-gray-500 mb-3 uppercase tracking-widest">Budget Comparison</p>
                    <div className="space-y-2">
                      {getBudgetComparison().map((item) => (
                        <div key={item.range} className="flex items-center gap-2">
                          <span className="text-[8px] font-mono text-gray-400 w-16">{item.range}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${item.color} transition-all`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                          <span className="text-[8px] font-bold text-gray-400">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#00BFA6] block font-mono">
                    MESSAGE BRIEF <span className="text-[#00BFA6]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly state your requirements, technical frameworks, or security parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50/50 text-xs border border-gray-200 focus:border-[#00BFA6] rounded-2xl p-4 outline-none text-[#0D0F14] focus:ring-2 focus:ring-[#00BFA6]/20 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="relative pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#00BFA6] text-white font-extrabold py-4.5 rounded-2xl text-xs hover:bg-[#0D0F14] hover:text-white transition-all transform active:scale-98 shadow-lg hover:shadow-teal-500/20 cursor-pointer"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Submit Project Details & Book Discovery Call</span>
                      {selectedTechs.length > 0 && (
                        <span className="bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
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
                  <div className="flex items-start space-x-4 text-sm bg-gray-50/50 p-4.5 rounded-2xl border border-gray-100 hover:border-[#00BFA6] hover:shadow-md hover:shadow-teal-500/10 transition-all transform hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#0D0F14] text-[#00BFA6] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">London, UK HQ</p>
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">71-75 Shelton Street, Covent Garden, WC2H 9JQ</p>
                    </div>
                    <button
                      onClick={() => handleGetDirections("71-75 Shelton Street, Covent Garden, WC2H 9JQ")}
                      className="text-[#00BFA6] hover:text-teal-600 transition-colors shrink-0"
                      title="Get directions"
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>

                  <div className="flex items-start space-x-4 text-sm bg-gray-50/50 p-4.5 rounded-2xl border border-gray-100 hover:border-[#00BFA6] hover:shadow-md hover:shadow-teal-500/10 transition-all transform hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#0D0F14] text-[#00BFA6] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">Manhattan, NY USA</p>
                      <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">250 Park Ave, Suite 700, New York, NY 10177</p>
                    </div>
                    <button
                      onClick={() => handleGetDirections("250 Park Ave, Suite 700, New York, NY 10177")}
                      className="text-[#00BFA6] hover:text-teal-600 transition-colors shrink-0"
                      title="Get directions"
                    >
                      <ExternalLink size={16} />
                    </button>
                  </div>

                  <div className="flex items-start space-x-4 text-sm bg-[#FAF9F6] p-4.5 rounded-2xl border border-orange-100/40 hover:border-orange-200 hover:shadow-md hover:shadow-orange-500/10 transition-all transform hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#F4A24D] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="font-extrabold text-[#0D0F14] text-base leading-tight">General Inquiries</p>
                      <button
                        onClick={handleCopyEmail}
                        className="text-xs text-[#0D0F14] font-bold mt-1.5 hover:text-[#00BFA6] transition-colors flex items-center gap-1"
                        title="Click to copy"
                      >
                        hello@zenik.studio
                        {copiedEmail && <span className="text-[#00BFA6] text-[9px]">✓ Copied</span>}
                      </button>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[#F4A24D] hover:text-orange-600 transition-colors shrink-0"
                      title="Copy email"
                    >
                      <Copy size={16} />
                    </button>
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
              <div
                key={badge.title}
                className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-6 border border-teal-100/50 text-center space-y-2 shadow-sm hover:border-[#00BFA6] hover:shadow-[0_15px_30px_rgba(0,191,166,0.15)] transition-all group relative overflow-hidden"
                onMouseEnter={() => setHoveredTrust(badge.title)}
                onMouseLeave={() => setHoveredTrust(null)}
              >
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA6]/0 to-[#00BFA6]/0 group-hover:from-[#00BFA6]/5 group-hover:to-[#00BFA6]/10 transition-all pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-base font-black text-[#0D0F14] tracking-tight">{badge.title}</p>
                  <p className="text-xs text-gray-500 font-bold leading-normal">{badge.subtitle}</p>

                  {/* Renewal year indicator */}
                  <div className="mt-3 pt-3 border-t border-teal-100/50">
                    <span className="text-[8px] font-bold text-[#00BFA6] uppercase tracking-widest">Renewed 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "HOW WE WORK" Row */}
      < section className="py-20 bg-white relative" >
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
            {collaborationPrinciples.map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={idx}
                  className="space-y-4 bg-gray-50/40 p-8 rounded-[32px] border border-gray-100 hover:border-[#00BFA6] transition-all group cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredPrinciple(idx)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                >
                  {/* Colored left border accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${principle.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Numbered badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center text-[#00BFA6] font-black text-xs border border-teal-200">
                    {principle.number}
                  </div>

                  {/* Larger interactive icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0D0F14] tracking-tight">{principle.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{principle.description}</p>

                  {/* Hover expand effect */}
                  <div className={`mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-0 translate-y-2`}>
                    <span className="text-[9px] font-bold text-[#00BFA6] uppercase tracking-widest">Learn more →</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section >

      {/* 5. FAQ ACCORDION SECTION */}
      < section className="py-24 bg-[#FAFAF7] border-t border-b border-gray-100 relative" >
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

          {/* FAQ Search/Filter */}
          <div className="mb-8 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20 outline-none transition-all"
              />
              {faqSearch && (
                <button
                  onClick={() => setFaqSearch("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0D0F14]"
                >
                  <CloseIcon size={18} />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {filteredFaqs.map((faq, idx) => {
              const isFaqOpen = activeFaqIdx === idx;
              const faqHelpful = helpfulFaq[idx];
              return (
                <div key={idx} className="bg-white border border-gray-100 rounded-[22px] overflow-hidden shadow-sm hover:border-[#00BFA6] transition-all">
                  <button
                    onClick={() => setActiveFaqIdx(isFaqOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between font-black text-sm text-[#0D0F14] focus:outline-none cursor-pointer group"
                  >
                    <span className="pr-4 leading-snug">{faq.q}</span>
                    {/* Animated chevron rotation */}
                    <span className={`text-[#00BFA6] font-mono text-lg font-black shrink-0 transition-transform duration-300 transform ${isFaqOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {isFaqOpen && (
                    <div className="p-6 pt-0 border-t border-gray-50 text-xs text-gray-500 leading-relaxed font-semibold bg-teal-50/30 animate-fade-down space-y-4">
                      <p>{faq.a}</p>

                      {/* Helpful feedback buttons */}
                      <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Was this helpful?</span>
                        <button
                          onClick={() => handleFaqHelpful(idx, true)}
                          className={`flex items-center gap-1 px-2 py-1 rounded text-[9px] font-bold transition-all ${faqHelpful === true
                            ? "bg-teal-100 text-[#00BFA6]"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                            }`}
                        >
                          <ThumbsUp size={12} /> Yes
                        </button>
                        <button
                          onClick={() => handleFaqHelpful(idx, false)}
                          className={`flex items-center gap-1 px-2 py-1 rounded text-[9px] font-bold transition-all ${faqHelpful === false
                            ? "bg-orange-100 text-orange-600"
                            : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                            }`}
                        >
                          <ThumbsDown size={12} /> No
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-sm font-semibold">No FAQs match your search. Try different keywords.</p>
            </div>
          )}

        </div>
      </section >

      {/* 6. CTA BANNER */}
      < CtaBanner buttonText="Schedule Call Now" linkTo="/contact" />

    </div >
  );
}
