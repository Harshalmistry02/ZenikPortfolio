import React, { useState } from "react";
import { Mail, Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ScriptHeading } from "../components/ScriptHeading";
import { CtaBanner } from "../components/CtaBanner";
import { FaqAccordion } from "../components/FaqAccordion";
import type { Testimonial } from "../types";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "£25k",
    message: ""
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote: "Zenik Studio transformed our digital presence. Their team delivered a stunning platform that exceeded expectations.",
      author: "Sarah Mitchell",
      role: "CEO",
      company: "TechFlow Inc",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: "2",
      quote: "Professional, responsive, and incredibly talented. They brought our vision to life with precision and care.",
      author: "James Carter",
      role: "Founder",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: "3",
      quote: "Outstanding work from start to finish. The team's expertise in modern web technologies is unmatched.",
      author: "Emily Rodriguez",
      role: "CTO",
      company: "DataSync",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: "4",
      quote: "They delivered our mobile app ahead of schedule with exceptional quality. Highly recommend!",
      author: "Michael Chen",
      role: "Product Manager",
      company: "AppVenture",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: "5",
      quote: "Zenik Studio's attention to detail and commitment to excellence made all the difference for our project.",
      author: "Lisa Thompson",
      role: "Director",
      company: "CloudNine",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      id: "6",
      quote: "A truly collaborative experience. They understood our needs and delivered beyond what we imagined.",
      author: "David Park",
      role: "VP Engineering",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
      rating: 5
    }
  ];

  const faqs = [
    { question: "What is your typical project timeline?", answer: "Most projects take 6-12 weeks from kickoff to launch, depending on scope and complexity." },
    { question: "Do you work with early-stage startups?", answer: "Yes! We love working with startups and offer flexible engagement models to fit your budget and timeline." },
    { question: "Where are your teams located?", answer: "We have offices in London, UK and New York, USA, with teams working across both locations." },
    { question: "How do you ensure data security?", answer: "We follow industry best practices including GDPR compliance, secure hosting, and regular security audits." },
    { question: "Do clients own the code?", answer: "Absolutely. Once the project is complete and paid, you own all code, designs, and intellectual property." }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#F3F4F6] to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScriptHeading
            as="h1"
            text="Let's build something great together."
            className="font-script text-5xl md:text-7xl font-bold text-[#0D0F14] leading-tight"
            accentColorClassName="text-[#00BFA6]"
          />
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Partner with our UK & USA teams to bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#form"
              className="bg-[#0D0F14] hover:bg-[#00BFA6] text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Start a Project
            </a>
            <a
              href="#contact-cards"
              className="border-2 border-gray-200 hover:border-[#00BFA6] text-gray-800 px-8 py-4 rounded-full font-bold transition-all"
            >
              Schedule a Call
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-gray-600 font-medium">80+ projects delivered across UK & USA</p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT METHOD CARDS */}
      <section id="contact-cards" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-[28px] border border-gray-100 p-8 hover:border-[#00BFA6] hover:shadow-lg transition-all">
              <MessageCircle className="w-12 h-12 text-[#00BFA6] mb-4" />
              <h3 className="text-xl font-black text-[#0D0F14] mb-2">Chat with Us</h3>
              <p className="text-sm text-gray-500 mb-4">Typically replies in under 2 hours</p>
              <button className="bg-[#00BFA6] hover:bg-[#0D0F14] text-white px-6 py-2 rounded-full font-bold text-sm transition-all">
                Start Chat
              </button>
            </div>

            <div className="rounded-[28px] bg-[#0D0F14] p-8 hover:shadow-lg transition-all">
              <Mail className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-black text-white mb-2">Email Us</h3>
              <p className="text-sm text-gray-300 mb-4">hello@zenik.studio</p>
              <button className="bg-white hover:bg-[#00BFA6] text-[#0D0F14] hover:text-white px-6 py-2 rounded-full font-bold text-sm transition-all">
                Send Email
              </button>
            </div>

            <div className="rounded-[28px] border border-gray-100 p-8 hover:border-[#00BFA6] hover:shadow-lg transition-all">
              <Phone className="w-12 h-12 text-[#00BFA6] mb-4" />
              <h3 className="text-xl font-black text-[#0D0F14] mb-2">Call Us</h3>
              <p className="text-sm text-gray-500 mb-1">+44 20 7946 0958</p>
              <p className="text-xs text-gray-400 mb-4">Mon–Fri, 9am–6pm GMT</p>
              <button className="bg-[#00BFA6] hover:bg-[#0D0F14] text-white px-6 py-2 rounded-full font-bold text-sm transition-all">
                Book a Call
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              ISO 27001 · GDPR · HIPAA · OWASP
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROJECT INQUIRY FORM */}
      <section id="form" className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-10">
                <p className="text-xs uppercase tracking-widest text-[#00BFA6] font-mono font-bold mb-6">
                  // Tell us about your project
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Web", color: "text-blue-600" },
                      { label: "Mobile", color: "text-purple-600" },
                      { label: "Design", color: "text-pink-600" },
                      { label: "AI & Cloud", color: "text-teal-600" }
                    ].map(service => (
                      <button
                        key={service.label}
                        type="button"
                        onClick={() => setFormData({...formData, service: service.label})}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.service === service.label
                            ? "border-[#00BFA6] bg-teal-50"
                            : "border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <span className={`text-2xl ${service.color}`}>●</span>
                        <p className="text-sm font-bold text-gray-800 mt-1">{service.label}</p>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-sm font-bold text-gray-600 mb-3 block">Budget</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="0"
                        max="3"
                        step="1"
                        className="flex-1 accent-[#00BFA6]"
                        onChange={(e) => {
                          const budgets = ["£10k", "£25k", "£50k", "£100k+"];
                          setFormData({...formData, budget: budgets[parseInt(e.target.value)]});
                        }}
                      />
                      <span className="text-sm font-bold text-[#00BFA6] min-w-[60px]">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>£10k</span>
                      <span>£25k</span>
                      <span>£50k</span>
                      <span>£100k+</span>
                    </div>
                  </div>

                  <textarea
                    placeholder="Describe your project in a few sentences..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00BFA6]/20 outline-none resize-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#00BFA6] hover:bg-[#0D0F14] text-white py-4 rounded-2xl font-bold transition-all"
                  >
                    Send Project Brief →
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <p className="font-bold text-gray-800">London Office</p>
                    <p className="text-sm text-gray-500">71-75 Shelton Street, WC2H 9JQ</p>
                    <a href="#" className="text-sm text-[#00BFA6] hover:underline">Get Directions →</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <div>
                    <p className="font-bold text-gray-800">New York Office</p>
                    <p className="text-sm text-gray-500">250 Park Ave, Suite 700, NY 10177</p>
                    <a href="#" className="text-sm text-[#00BFA6] hover:underline">Get Directions →</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-[#00BFA6] mt-1" />
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <p className="text-sm text-gray-500">hello@zenik.studio</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 rounded-[24px] p-6 bg-gray-50">
                <div className="relative h-48 flex items-center justify-center">
                  <div className="absolute top-1/3 left-1/3">
                    <div className="w-3 h-3 bg-[#00BFA6] rounded-full animate-pulse" />
                    <p className="text-xs font-bold text-gray-600 mt-1">London</p>
                  </div>
                  <div className="absolute top-1/2 left-1/4">
                    <div className="w-3 h-3 bg-[#00BFA6] rounded-full animate-pulse" />
                    <p className="text-xs font-bold text-gray-600 mt-1">New York</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-600 font-medium">Response within 1 business day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-4xl md:text-5xl font-bold text-[#0D0F14] mb-16">
            From brief to build in 3 steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {[
              { num: "01", title: "Submit Brief", desc: "Tell us about your project goals and requirements" },
              { num: "02", title: "Discovery Call", desc: "We discuss your vision and create a tailored plan" },
              { num: "03", title: "We Start Building", desc: "Our team brings your project to life" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-mono font-black text-[#00BFA6] mb-4">{step.num}</div>
                <div className="w-12 h-12 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#00BFA6] rounded-full" />
                </div>
                <h3 className="text-xl font-black text-[#0D0F14] mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-[#00BFA6]">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                      <path d="M0 12 L32 12" />
                      <path d="M24 6 L32 12 L24 18" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-[#F4A24D]" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-script text-3xl italic text-gray-800 mb-6">
              "{testimonials[testimonialIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[testimonialIndex].avatar}
                alt={testimonials[testimonialIndex].author}
                className="w-14 h-14 rounded-full"
              />
              <div className="text-left">
                <p className="font-bold text-gray-800">{testimonials[testimonialIndex].author}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[testimonialIndex].role}, {testimonials[testimonialIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#00BFA6] flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-[#00BFA6] flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl md:text-5xl font-bold text-[#0D0F14] mb-2 relative inline-block">
              Quick answers
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F4A24D]" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </h2>
          </div>

          <div className="bg-white rounded-[24px] shadow-sm p-8 md:p-12 mb-20 max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner />

    </div>
  );
}
