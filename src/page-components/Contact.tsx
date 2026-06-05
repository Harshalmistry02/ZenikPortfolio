import React, { useState } from "react";
import Link from "next/link";
import {
  Mail, Phone, MapPin, Clock, Check, AlertCircle, ChevronDown,
  ArrowRight, Linkedin, Twitter, Instagram, Github, MessageCircle
} from "lucide-react";
import { ScriptHeading } from "../components/ScriptHeading";
import { CtaBanner } from "../components/CtaBanner";
import { HanddrawnUnderline, HanddrawnArrow } from "../components/Squiggle";
import type { FAQ } from "../types";

/* ─── Types ────────────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/* ─── Contact Page ──────────────────────────────────────────── */
export function Contact() {
  /* Form state */
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Validation ── */
  function validate(): boolean {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address.";
    if (!formData.subject.trim()) e.subject = "Subject is required.";
    if (formData.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/forms/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceType: "General Inquiry",
          description: `Subject: ${formData.subject}\n\n${formData.message}`,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message.");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof FormData) => ({
    value: formData[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData(prev => ({ ...prev, [key]: e.target.value })),
  });

  /* ─── Static data ─── */
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-[#00BFA6]" />,
      label: "London Office",
      value: "71-75 Shelton Street, WC2H 9JQ",
      sub: "United Kingdom 🇬🇧",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#00BFA6]" />,
      label: "New York Office",
      value: "250 Park Ave, Suite 700, NY 10177",
      sub: "United States 🇺🇸",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#00BFA6]" />,
      label: "Email",
      value: "hello@zenik.studio",
      href: "mailto:hello@zenik.studio",
    },
    {
      icon: <Phone className="w-5 h-5 text-[#00BFA6]" />,
      label: "Phone",
      value: "+44 20 7946 0958",
      href: "tel:+442079460958",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#00BFA6]" />,
      label: "Working Hours",
      value: "Mon – Fri, 9am – 6pm GMT",
      sub: "Response within 1 business day",
    },
  ];

  const socials = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter / X" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];

  const faqs: FAQ[] = [
    { question: "What is your typical project timeline?", answer: "Most projects take 6–12 weeks from kickoff to launch, depending on scope and complexity. We'll share a detailed timeline during the discovery call." },
    { question: "Do you work with early-stage startups?", answer: "Absolutely. We love partnering with startups and offer flexible engagement models to fit your budget and stage of growth." },
    { question: "What information should I include in my message?", answer: "A brief description of your project, goals, rough timeline, and budget range is ideal. Don't worry if you don't have all the details — we'll ask the right questions." },
    { question: "How quickly will you respond?", answer: "We aim to respond to all inquiries within 1 business day. For urgent matters, calling us directly is the fastest route." },
    { question: "Do clients own the final deliverables?", answer: "Yes. Once the project is complete and payment is finalised, you own all code, designs, and intellectual property outright." },
    { question: "Can you sign an NDA before we discuss our project?", answer: "Of course. We're happy to sign an NDA before any detailed discussions. Just mention it in your message." },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#FAF9F5] to-white overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10" />
        {/* Rotating geometric accents */}
        <div className="absolute top-16 right-1/4 w-24 h-24 border-2 border-teal-200/20 rounded-xl -z-10 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-16 left-1/4 w-16 h-16 border-2 border-amber-200/20 rounded-full -z-10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 mb-6">
            <span className="text-[#00BFA6] font-black text-xs">//</span>
            <span className="text-teal-600 font-extrabold uppercase tracking-widest text-[11px]">Contact Us</span>
            <span className="text-[#00BFA6] font-black text-xs">//</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Heading + CTAs */}
            <div className="space-y-6">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl font-bold text-[#0D0F14] leading-[1.05] tracking-tight">
                Let's build something{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#0D0F14]">great</span>
                  <span className="absolute inset-0 bg-[#FCB94D] rounded-[4px_12px_4px_12px] -z-10 -rotate-2 scale-[1.08] shadow-sm transform -translate-y-1" />
                </span>
                {" "}together.
              </h1>

              <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
                Partner with our UK & USA teams to bring your vision to life. We'd love to hear about your project.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#0D0F14] hover:bg-[#00BFA6] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
                >
                  Send a Message
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+442079460958"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#00BFA6] text-gray-700 hover:text-[#00BFA6] px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                >
                  <Phone size={15} />
                  Call Us Now
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-gray-500">Available now</span>
                </div>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-medium text-gray-500">80+ projects delivered</span>
                <span className="text-gray-300">·</span>
                <span className="text-xs font-medium text-gray-500">ISO 27001 · GDPR</span>
              </div>
            </div>

            {/* Right: Hero image / illustration card */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Zenik Studio team collaborating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/40 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-[#00BFA6]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-[#0D0F14]">Average Response</p>
                    <p className="text-[10px] text-gray-500">Under 2 hours</p>
                  </div>
                </div>
              </div>
              {/* Decorative hand-drawn accent */}
              <div className="absolute -top-6 -right-6 text-[#F4A24D]/50 rotate-[-20deg] w-14 h-14">
                <HanddrawnArrow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. CONTACT INFO + FORM
      ══════════════════════════════════════ */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  <span className="text-[#00BFA6] font-black text-xs">//</span>
                  <span className="text-teal-600 font-extrabold uppercase tracking-widest text-[11px]">Get in touch</span>
                  <span className="text-[#00BFA6] font-black text-xs">//</span>
                </div>
                <h2 className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] leading-tight">
                  We'd love to{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">hear</span>
                    <HanddrawnUnderline className="text-[#00BFA6] h-3 w-full" />
                  </span>
                  {" "}from you.
                </h2>
                <div className="w-12 h-1.5 bg-[#00BFA6] rounded-full" />
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#00BFA6] hover:shadow-md transition-all duration-300 group bg-white"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-[#00BFA6] group-hover:border-[#00BFA6] transition-all duration-300">
                      <span className="group-hover:[&_svg]:text-white transition-all duration-300">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-[#0D0F14] hover:text-[#00BFA6] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-[#0D0F14]">{item.value}</p>
                      )}
                      {item.sub && <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl border-2 border-gray-200 hover:border-[#00BFA6] hover:bg-teal-50 text-gray-500 hover:text-[#00BFA6] flex items-center justify-center transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-100 rounded-[32px] shadow-sm p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-[#00BFA6] font-mono font-bold mb-6">// Send us a message</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-[#00BFA6] flex items-center justify-center">
                      <Check className="w-8 h-8 text-[#00BFA6]" />
                    </div>
                    <h3 className="font-script text-3xl font-bold text-[#0D0F14]">Message sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. We'll get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm font-bold text-[#00BFA6] hover:underline"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {serverError && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-600">Full Name <span className="text-red-400">*</span></label>
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          {...field("name")}
                          className={`w-full bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${errors.name ? "border-red-300 focus:ring-2 focus:ring-red-200" : "border-transparent focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20"}`}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-600">Email Address <span className="text-red-400">*</span></label>
                        <input
                          type="email"
                          placeholder="jane@company.com"
                          {...field("email")}
                          className={`w-full bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${errors.email ? "border-red-300 focus:ring-2 focus:ring-red-200" : "border-transparent focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20"}`}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-600">Subject <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        {...field("subject")}
                        className={`w-full bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200 ${errors.subject ? "border-red-300 focus:ring-2 focus:ring-red-200" : "border-transparent focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20"}`}
                      />
                      {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-600">Message <span className="text-red-400">*</span></label>
                      <textarea
                        placeholder="Tell us about your project, goals, and any relevant details..."
                        rows={5}
                        {...field("message")}
                        className={`w-full bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none border resize-none transition-all duration-200 ${errors.message ? "border-red-300 focus:ring-2 focus:ring-red-200" : "border-transparent focus:border-[#00BFA6] focus:ring-2 focus:ring-[#00BFA6]/20"}`}
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0D0F14] hover:bg-[#00BFA6] text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {loading ? "Sending…" : "Send Message →"}
                    </button>

                    <p className="text-center text-[11px] text-gray-400">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. MAP SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <div className="flex items-center justify-center gap-1">
              <span className="text-[#00BFA6] font-black text-xs">//</span>
              <span className="text-teal-600 font-extrabold uppercase tracking-widest text-[11px]">Our Locations</span>
              <span className="text-[#00BFA6] font-black text-xs">//</span>
            </div>
            <ScriptHeading
              as="h2"
              text="Find Us"
              highlightMode="last"
              className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14]"
              accentColorClassName="text-[#00BFA6]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* London Map */}
            <div className="rounded-[28px] overflow-hidden border border-gray-200 shadow-sm group">
              <div className="bg-white px-5 py-4 flex items-center gap-3 border-b border-gray-100">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="font-black text-[#0D0F14] text-sm">London Office</p>
                  <p className="text-xs text-gray-500">71-75 Shelton Street, WC2H 9JQ</p>
                </div>
                <a
                  href="https://maps.google.com/?q=71-75+Shelton+Street+London+WC2H+9JQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs font-bold text-[#00BFA6] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div className="relative aspect-[16/9] bg-gray-100">
                <iframe
                  title="London Office Location"
                  src="https://maps.google.com/maps?q=71-75+Shelton+Street,+London+WC2H+9JQ&output=embed&z=15"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* New York Map */}
            <div className="rounded-[28px] overflow-hidden border border-gray-200 shadow-sm group">
              <div className="bg-white px-5 py-4 flex items-center gap-3 border-b border-gray-100">
                <span className="text-2xl">🇺🇸</span>
                <div>
                  <p className="font-black text-[#0D0F14] text-sm">New York Office</p>
                  <p className="text-xs text-gray-500">250 Park Ave, Suite 700, NY 10177</p>
                </div>
                <a
                  href="https://maps.google.com/?q=250+Park+Ave+New+York+NY+10177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs font-bold text-[#00BFA6] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div className="relative aspect-[16/9] bg-gray-100">
                <iframe
                  title="New York Office Location"
                  src="https://maps.google.com/maps?q=250+Park+Ave,+New+York,+NY+10177&output=embed&z=15"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. FAQ SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 bg-[#FAF9F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="flex items-center justify-center gap-1">
              <span className="text-[#00BFA6] font-black text-xs">//</span>
              <span className="text-teal-600 font-extrabold uppercase tracking-widest text-[11px]">FAQ</span>
              <span className="text-[#00BFA6] font-black text-xs">//</span>
            </div>
            <h2 className="font-script text-4xl sm:text-5xl font-bold text-[#0D0F14] relative inline-block">
              Quick{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Answers</span>
                <HanddrawnUnderline className="text-[#F4A24D] h-3 w-full" />
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Everything you need to know before reaching out.
            </p>
          </div>

          <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm divide-y divide-gray-100 overflow-hidden">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                  >
                    <span className="font-bold text-sm text-[#0D0F14] group-hover:text-[#00BFA6] transition-colors leading-snug pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gray-400 group-hover:text-[#00BFA6] transition-all duration-300 ${isOpen ? "rotate-180 text-[#00BFA6]" : ""}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. CALL-TO-ACTION SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0D0F14] rounded-[40px] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center" style={{ colorScheme: 'dark' }}>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00BFA6]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F4A24D]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            {/* Dotted grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6" style={{ color: '#ffffff' }}>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ color: '#ffffff', backgroundColor: 'rgba(0,191,166,0.2)', border: '1px solid rgba(0,191,166,0.4)' }}>
                Ready to start?
              </span>
              <h2 className="font-script text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#ffffff' }}>
                Schedule a free{" "}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: '#F4A24D' }}>consultation</span>
                  <svg className="absolute left-0 -bottom-1 w-full pointer-events-none" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden>
                    <path d="M4,8 C80,4 180,3 296,8" stroke="#F4A24D" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
                  </svg>
                </span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#e5e7eb' }}>
                No commitment required. Let's explore your project, understand your goals, and see if we're the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group"
                  style={{ backgroundColor: '#00BFA6', color: '#ffffff' }}
                >
                  Request a Quote
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+442079460958"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ color: '#ffffff', border: '2px solid rgba(255,255,255,0.5)' }}
                >
                  <Phone size={15} />
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CTA BANNER (shared component)
      ══════════════════════════════════════ */}
      <CtaBanner buttonText="Start a Project" linkTo="#contact-form" />

    </div>
  );
}
