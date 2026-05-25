import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Search, PieChart, ShoppingCart, Globe, Package, Users, Megaphone, 
  Briefcase, Layout, Calculator, Tags, Truck, Calendar, Clock, Mail, MessageSquare, 
  CreditCard, Shield, Code2, Smartphone, Star, Zap, Activity, Layers, Cpu, Heart,
  Palette, Monitor, Target, Cloud, Database, Wrench, Share2
} from "lucide-react";
import { 
  HanddrawnArrow, 
  HanddrawnUnderline, 
  HanddrawnCircle, 
  HanddrawnHighlight,
  HanddrawnStar
} from "../components/Squiggle";

const apps = [
  { name: 'UI/UX Design', icon: Layout, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Graphic Design', icon: Palette, color: 'text-pink-600', bg: 'bg-pink-50' },
  { name: 'Social Media', icon: Share2, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'Web Design', icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'Web Dev', icon: Code2, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'Mobile Apps', icon: Smartphone, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Marketing', icon: Megaphone, color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'SEO Services', icon: Search, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Lead Gen', icon: Target, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { name: 'Automation', icon: Mail, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50' },
  { name: 'Cloud & DevOps', icon: Cloud, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'AI Services', icon: Cpu, color: 'text-violet-600', bg: 'bg-violet-50' },
  { name: 'Custom CRM', icon: Database, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'SaaS Dev', icon: Layers, color: 'text-teal-600', bg: 'bg-teal-50' },
  { name: 'Payments', icon: CreditCard, color: 'text-rose-600', bg: 'bg-rose-50' },
  { name: 'Support', icon: Wrench, color: 'text-slate-600', bg: 'bg-slate-50' },
];

export function Home() {
  return (
    <div className="pt-20 bg-white min-h-screen overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 bg-[#FAF9F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D0F14] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            All your business on{' '}
            <span className="relative inline-block">
              <span className="relative z-10">one platform</span>
              <span className="absolute inset-0 bg-[#FFD100] transform -rotate-1 rounded-sm -z-10 scale-105"></span>
            </span>
            <br />
            Simple, efficient, yet{' '}
            <span className="relative inline-block text-gray-700">
              affordable!
              <div className="absolute left-0 right-0 bottom-[-5px] h-2">
                <HanddrawnUnderline className="text-blue-500 w-full" />
              </div>
            </span>
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <Link
              to="/signup"
              className="bg-[#714B67] hover:bg-[#5c3c54] text-white px-8 py-4 rounded font-bold text-lg transition-colors w-full sm:w-auto"
            >
              Start now - It's free
            </Link>
            <Link
              to="/contact"
              className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 px-8 py-4 rounded font-bold text-lg transition-colors w-full sm:w-auto"
            >
              Schedule a demo
            </Link>
            
            {/* Handwritten note */}
            <div className="absolute top-0 right-0 sm:right-[-80px] lg:right-[-120px] hidden md:flex flex-col items-center transform rotate-12">
              <span className="font-script text-xl text-purple-800 mb-1">No credit card<br/>required</span>
              <HanddrawnArrow className="text-purple-800 w-12 h-12 transform -scale-x-100 rotate-45" />
            </div>
          </div>

          {/* Search Bar & App Grid Background */}
          <div className="mt-24 relative bg-white rounded-t-[50px] md:rounded-t-[100px] pt-12 pb-24 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)] border-t border-gray-100">
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative mb-12">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="What do you want to manage?" 
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#714B67]/20 focus:border-[#714B67]"
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8">
                {apps.map((app, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className={`w-14 h-14 rounded-2xl ${app.bg} ${app.color} flex items-center justify-center shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all`}>
                      <app.icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-medium text-gray-600">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. QUALITY OF WORK SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D0F14] mb-16 inline-block relative">
            <span className="relative z-10">Level up</span>
            <div className="absolute inset-0 bg-red-400/20 transform -rotate-2 rounded -z-10 scale-110"></div>
            {' '}your quality of work
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Simple CSS mockup of an invoice/document */}
            <div className="bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 text-left relative z-10 mx-auto w-full md:w-3/4 aspect-[4/3] flex flex-col">
              <div className="flex justify-between items-end border-b border-gray-200 pb-6 mb-6">
                <div>
                  <h3 className="text-3xl font-serif text-gray-800 mb-1">Invoice</h3>
                  <p className="text-gray-400 text-sm">INV-2023-001</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">Zenik Studio</p>
                  <p className="text-gray-500 text-sm">123 Tech Lane</p>
                </div>
              </div>
              <div className="flex-grow">
                <div className="grid grid-cols-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                  <div className="col-span-2">Description</div>
                  <div className="text-right">Qty</div>
                  <div className="text-right">Price</div>
                </div>
                <div className="grid grid-cols-4 text-sm text-gray-700 mb-2">
                  <div className="col-span-2 font-medium">Web Development Services</div>
                  <div className="text-right">1</div>
                  <div className="text-right">$4,500.00</div>
                </div>
                <div className="grid grid-cols-4 text-sm text-gray-700 mb-2">
                  <div className="col-span-2 font-medium">UI/UX Design</div>
                  <div className="text-right">1</div>
                  <div className="text-right">$2,200.00</div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center mt-auto">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-medium inline-flex items-center gap-1">
                  <Shield size={14} /> Paid
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  $6,700.00
                </div>
              </div>
            </div>

            {/* Decorative background blocks */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* 3. OPTIMIZED FOR PRODUCTIVITY */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D0F14] mb-16 font-script tracking-wide">
            Optimized for productivity
          </h2>

          <div className="relative h-[500px] max-w-5xl mx-auto flex justify-center items-center">
            {/* Dashboard Mockup (Background Left) */}
            <div className="absolute left-0 md:left-[10%] top-[10%] w-2/3 md:w-1/2 h-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 transform -rotate-2 opacity-90 z-10">
              <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 h-16 bg-blue-50 rounded"></div>
                <div className="flex-1 h-16 bg-green-50 rounded"></div>
                <div className="flex-1 h-16 bg-purple-50 rounded"></div>
              </div>
              <div className="h-24 bg-gray-50 rounded w-full"></div>
            </div>

            {/* Chat Mockup (Foreground Right) */}
            <div className="absolute right-0 md:right-[5%] bottom-[10%] w-3/4 md:w-2/5 h-80 bg-white rounded-lg shadow-2xl border border-gray-100 flex flex-col z-30">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                <div>
                  <div className="text-sm font-bold">Marketing Team</div>
                  <div className="text-xs text-green-500">Online</div>
                </div>
              </div>
              <div className="flex-1 p-4 space-y-3 flex flex-col justify-end">
                <div className="bg-gray-100 rounded-lg p-2 text-sm self-start max-w-[80%]">Did we send the newsletter?</div>
                <div className="bg-blue-100 rounded-lg p-2 text-sm self-end max-w-[80%]">Yes, just went out to 50k subscribers! 🚀</div>
              </div>
              <div className="p-3 border-t border-gray-100">
                <div className="h-8 bg-gray-50 rounded w-full border border-gray-200"></div>
              </div>
            </div>

            {/* Form/Task Mockup (Center Middle) */}
            <div className="absolute left-[20%] md:left-[30%] top-[25%] w-2/3 md:w-1/2 h-72 bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-20">
               <div className="flex justify-between items-center mb-6">
                 <div className="h-6 w-32 bg-gray-800 rounded"></div>
                 <div className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded font-bold">In Progress</div>
               </div>
               <div className="space-y-4">
                 <div className="h-10 bg-gray-50 border border-gray-200 rounded w-full"></div>
                 <div className="flex gap-4">
                   <div className="h-10 bg-gray-50 border border-gray-200 rounded flex-1"></div>
                   <div className="h-10 bg-gray-50 border border-gray-200 rounded flex-1"></div>
                 </div>
                 <div className="h-20 bg-gray-50 border border-gray-200 rounded w-full"></div>
               </div>
            </div>
          </div>

          <p className="mt-12 text-gray-500 max-w-2xl mx-auto font-medium">
            Stop the unending run for information... <br />
            Everything is connected, seamlessly integrated, and instantly accessible.
          </p>
        </div>
      </section>

      {/* 4. NATIVE AI SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D0F14] mb-12">
            <span className="relative inline-block">
              Native AI
              <div className="absolute left-0 right-0 bottom-[-5px] h-2">
                <HanddrawnUnderline className="text-red-500 w-full" />
              </div>
            </span>
            {' '}across all your business
          </h2>

          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-12 md:p-24 border border-purple-100 shadow-lg flex items-center justify-center gap-6">
            <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-purple-600 border border-purple-100">
               <Zap size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-script text-gray-800">
              ... and every workflow.
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENTERPRISE SOFTWARE DONE RIGHT */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0D0F14] mb-16 text-center">
            Enterprise{' '}
            <span className="relative inline-block">
              software
              <div className="absolute inset-[-10px] scale-110 pointer-events-none">
                <HanddrawnCircle className="text-[#017A84] w-full h-full" />
              </div>
            </span>
            {' '}done right.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">No data silos</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Apps are perfectly integrated. Information is shared instantly across all departments. No more painful integrations or copy-pasting data.</p>
              <div className="bg-[#714B67] text-white px-4 py-2 rounded inline-block text-sm font-bold cursor-pointer">Watch Video</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">No artificial limits</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Unlimited users, unlimited features, unlimited possibilities. Grow your business without worrying about pricing tiers holding you back.</p>
              <div className="bg-[#714B67] text-white px-4 py-2 rounded inline-block text-sm font-bold cursor-pointer">Watch Video</div>
            </div>

            <div className="bg-[#0D0F14] text-white p-8 rounded-2xl shadow-sm md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Full flexibility</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Deploy on-premise, on our cloud, or your own cloud. Customize every aspect with our open-source foundation.</p>
                <div className="bg-white text-[#0D0F14] px-4 py-2 rounded inline-block text-sm font-bold cursor-pointer">Learn More</div>
              </div>
              <div className="flex-1 w-full relative h-48 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                 {/* Decorative Graph/Code visual */}
                 <div className="absolute inset-0 p-4 font-mono text-xs text-green-400 opacity-50 flex flex-col gap-2">
                    <div>import {"{"} Core {"}"} from '@zenik/core';</div>
                    <div>const app = new Core();</div>
                    <div>app.initialize({"{ "} modules: ['all'] {" }"});</div>
                    <div className="mt-4 text-blue-400">// System ready...</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. JOIN MILLIONS (AVATARS & QUOTE) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          
          <h2 className="text-4xl md:text-6xl font-script text-[#0D0F14] mb-12">
            Join 15 million users
          </h2>

          <div className="max-w-3xl mx-auto mt-24 text-left border-l-4 border-[#017A84] pl-6 md:pl-10 relative">
            <div className="absolute -top-10 -left-6 text-6xl text-[#FFD100] font-serif">"</div>
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6">
              We have replaced 14 different apps with Zenik. It has simplified our processes, boosted our team's morale, and significantly improved our bottom line. It's simply the best decision we've made.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" alt="User" />
              </div>
              <div>
                <div className="font-bold text-gray-900">David Reynolds</div>
                <div className="text-sm text-gray-500">CEO, TechFlow</div>
              </div>
            </div>
          </div>

        </div>

        {/* Scattered Avatars Background (Decorative) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute top-[10%] left-[10%] w-12 h-12 bg-blue-200 rounded-full"></div>
           <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-purple-200 rounded-full"></div>
           <div className="absolute bottom-[20%] left-[20%] w-10 h-10 bg-green-200 rounded-full"></div>
           <div className="absolute top-[40%] left-[5%] w-14 h-14 bg-red-200 rounded-full"></div>
           <div className="absolute bottom-[30%] right-[10%] w-12 h-12 bg-yellow-200 rounded-full"></div>
           <div className="absolute top-[15%] left-[40%] w-8 h-8 bg-pink-200 rounded-full"></div>
           <div className="absolute bottom-[10%] right-[40%] w-14 h-14 bg-teal-200 rounded-full"></div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="relative inline-block mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-[#017A84] font-script transform -rotate-2">
              Unleash
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
              your growth potential
            </h2>
            {/* Sunburst decoration */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 pointer-events-none">
              <HanddrawnStar className="text-[#FFD100] w-full h-full opacity-60" />
            </div>
          </div>

          <div>
            <Link
              to="/signup"
              className="bg-[#714B67] hover:bg-[#5c3c54] text-white px-10 py-5 rounded font-bold text-xl transition-colors inline-block shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start now - It's free
            </Link>
            <p className="mt-4 text-sm text-gray-500">No credit card required</p>
          </div>

        </div>
      </section>

    </div>
  );
}
