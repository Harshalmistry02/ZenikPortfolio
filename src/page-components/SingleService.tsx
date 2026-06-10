import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { allServices } from "../data/servicesData";

export function SingleService({ serviceId }: { serviceId: string }) {
  const service = allServices.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-500 mb-8">We couldn't find the service you're looking for.</p>
        <Link href="/services" className="px-6 py-3 bg-[#00BFA6] text-white rounded-full font-semibold">
          Back to All Services
        </Link>
      </div>
    );
  }

  // Stable random image selection based on service ID string length and characters
  // A curated list of 36 high-quality, diverse, professional Unsplash image IDs
  const imageIds = [
    "1460925895917-afdab827c52f", // Tech / Chart
    "1504868584819-f81d14e4b2d5", // Desk / UI
    "1498050108023-c5249f4df085", // Code screen
    "1486312338219-ce68d2c6f44d", // Desktop computer
    "1522881115167-73d8e57924ec", // Strategy/marketing
    "1454165804606-c3d57bc86b40", // Design/color
    "1551288049-bebda4e38f71",   // Data / metrics
    "1434626881859-194d67366452", // Professional tech
    "1516321318423-f06f85e504b3", // Team / work
    "1553877522-431f4d81b4fc",   // Mobile app
    "1558655146-d49348800c58",   // Design wireframes
    "1507721999472-8ed44acc6cc7", // Architecture / abstract
    "1483058712412-428a9f185c9e", // Code/Typing
    "1512486130951-f5e20d4734b4", // Social Media / Screen
    "1451187580459-43490279c0fa", // Brainstorming
    "1507238691740-14902058e3ca", // Cybersecurity / Lock
    "1517245386807-bb43f82c33c4", // Dashboard
    "1504109586052-7a2e2bbf0629", // E-commerce boxes
    "1535223289827-42f1e9919769", // AI / futuristic tech
    "1523961131990-521072f1616c", // Finance / Growth
    "1499951360447-b19be8fe80f5", // Marketing
    "1521791136064-7986c2920216", // Branding palette
    "1497215858123-b1dca5a2fe21", // Consulting talk
    "1542744094-24638ea0b3b4",   // Networking / Data center
    "1556155092-490a1ba16284",   // Tech strategy table
    "1504639725590-34d0984388bd", // Server racks
    "1519389953810-c1036f1c4228", // Smart home / IoT
    "1504384308090-c894fdcc538d", // Collaboration
    "1454165205736-22c95c80ac8c", // Graphic design tablet
    "1517048676732-722a2bbcf554", // UI wireframes paper
    "1552664730-d307ca884978",   // Abstract cloud IT
    "1550745165-9bc0b252726f",   // Software engineering desk
    "1531403009284-440f080d1e12", // Startup UI app
    "1526304640581-d334cdbbf45e", // Finance growth charts
    "1563986768609-322da13575f3", // Digital marketing laptop
    "1457305237443-44c3d5a30b89"  // Open laptop workspace
  ];
  
  const imgIndex = service.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % imageIds.length;
  const imageUrl = `https://images.unsplash.com/photo-${imageIds[imgIndex]}?auto=format&fit=crop&q=80&w=1200&h=800`;

  // Dynamic Content based on Category
  const categoryFeatures: Record<string, { title: string, desc: string }[]> = {
    "design": [
      { title: "User-Centric Approach", desc: "Every flow is designed with the end-user in mind." },
      { title: "Pixel-Perfect Precision", desc: "Flawless layouts that look stunning across all devices." },
      { title: "Brand Consistency", desc: "Aligning visuals carefully with your core brand identity." },
      { title: "Responsive Adaptation", desc: "Designs that scale dynamically to any screen size." },
      { title: "Conversion Optimized", desc: "Strategically crafted to turn visitors into loyal customers." },
      { title: "Modern Visuals", desc: "Staying ahead of trends to keep your product feeling fresh." }
    ],
    "web": [
      { title: "Scalable Architecture", desc: "Codebases built to grow seamlessly alongside your business." },
      { title: "Blazing Fast Performance", desc: "Optimized load times to keep users engaged and happy." },
      { title: "SEO-Ready Structure", desc: "Built with best practices to ensure high search visibility." },
      { title: "Robust Security", desc: "Implementing strict protocols to protect your data and users." },
      { title: "Custom Integrations", desc: "Connecting effortlessly with your favorite third-party tools." },
      { title: "Future-Proof Tech", desc: "Using cutting-edge frameworks like React, Next.js, and Node." }
    ],
    "mobile": [
      { title: "Native-Like Feel", desc: "Smooth animations and transitions for an optimal mobile experience." },
      { title: "Cross-Platform Reach", desc: "Reaching iOS and Android users without doubling costs." },
      { title: "Offline Capabilities", desc: "Ensuring core functionalities remain active without an internet connection." },
      { title: "Battery Optimized", desc: "Efficient background processing to save device resources." },
      { title: "Secure Data Storage", desc: "Encrypted local storage guarding sensitive user information." },
      { title: "Push Notifications", desc: "Engaging users effectively through targeted alerts." }
    ],
    "marketing": [
      { title: "Data-Driven Strategy", desc: "Basing decisions on analytics rather than assumptions." },
      { title: "Targeted Audience Reach", desc: "Finding and converting individuals who genuinely need your product." },
      { title: "Omnichannel Campaigns", desc: "A unified presence across social media, search, and email." },
      { title: "ROI Focused", desc: "Maximizing the return on every dollar spent in your budget." },
      { title: "A/B Testing", desc: "Constant refinement of creatives and copy to find the winning formula." },
      { title: "Transparent Reporting", desc: "Clear, understandable metrics showing exactly how campaigns perform." }
    ],
    "product": [
      { title: "Rapid Prototyping", desc: "Validating your core idea quickly before heavy investments." },
      { title: "Iterative Development", desc: "Shipping features in cycles aligned with user feedback." },
      { title: "Market-Fit Driven", desc: "Focusing heavily on features that solve real pain points." },
      { title: "Secure Multi-Tenancy", desc: "Safe, isolated data architecture for SaaS platforms." },
      { title: "Subscription Management", desc: "Seamless billing and recurring payment integrations." },
      { title: "Analytics Dashboards", desc: "Actionable insights directly inside your product interface." }
    ],
    "default": [
      { title: "Tailored Strategy", desc: "Approaches customized entirely to your unique business model." },
      { title: "Expert Implementation", desc: "Executed by experienced professionals dedicated to excellence." },
      { title: "Scalable Solutions", desc: "Systems that expand effortlessly as your user base grows." },
      { title: "Dedicated Support", desc: "Constant availability to assist and resolve issues rapidly." },
      { title: "Performance Driven", desc: "Always prioritizing measurable, high-impact results." },
      { title: "Transparent Process", desc: "Complete visibility into our work from conception to launch." }
    ]
  };

  // Select features matching the category ID, fallback to 'default'
  const features = categoryFeatures[service.categoryId] || categoryFeatures["default"];

  // Generate slightly varied intro text
  const introVariations = [
    `When you partner with us for ${service.title}, you get a team of dedicated experts committed to achieving your specific business goals. We combine industry best practices, innovative technology, and a deep understanding of your target audience to create solutions that not only look incredible but perform flawlessly.`,
    `Elevate your operations with our premium ${service.title} capabilities. We focus intensely on crafting strategies and implementing tools that align directly with your brand narrative, ensuring lasting impact and sustainable growth in a rapidly changing market.`,
    `Discover the true potential of your business with our specialized ${service.title} solutions. Our methodology guarantees meticulous attention to detail, robust engineering, and a seamless collaborative experience from our very first meeting to final delivery.`,
    `Our approach to ${service.title} is designed to eliminate friction and maximize efficiency. Whether you're a burgeoning startup or an established enterprise, our tailored frameworks deliver exactly what you need to stand out competitively.`
  ];
  const introText = introVariations[service.id.length % introVariations.length];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#00BFA6] mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-6 ${service.bg} ${service.color}`}>
              {service.categoryName}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0D0F14] leading-tight mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description} We specialize in delivering high-quality, scalable solutions tailored to elevate your business and drive exceptional results in a competitive digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#0D0F14] text-white rounded-full font-bold text-center hover:bg-[#00BFA6] transition-colors shadow-lg shadow-black/10">
                Start a Project
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            {/* Using varied Unsplash tech images */}
            <img 
              src={imageUrl}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-[#0D0F14]">Why Choose Our {service.title}?</h2>
              <p className="text-gray-600 leading-relaxed">
                {introText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`${service.color} shrink-0`} size={20} />
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 pl-8">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm self-start">
              <h3 className="text-xl font-bold text-[#0D0F14] mb-4">Want to learn more?</h3>
              <p className="text-gray-600 text-sm mb-6">Our experts are ready to discuss your project requirements and provide a tailored proposal.</p>
              <Link href="/contact" className="w-full block px-6 py-3 bg-gray-50 hover:bg-[#00BFA6] hover:text-white border border-gray-200 hover:border-transparent text-gray-900 rounded-xl font-bold text-center transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}