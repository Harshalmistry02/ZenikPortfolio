import type {
  StatItem,
  Testimonial,
  ProcessStep,
  FeatureCard,
  ProjectItem,
  FAQ,
  TrustBadge,
} from "../types";

/* ================================================
   STATS
   ================================================ */

export const stats: StatItem[] = [
  { value: "80", label: "Projects Delivered", suffix: "+" },
  { value: "45", label: "Happy Clients", suffix: "+" },
  { value: "12", label: "Countries Served", suffix: "+" },
  { value: "99", label: "Client Satisfaction", suffix: "%" },
];

/* ================================================
   WHY ZENIK FEATURES
   ================================================ */

export const whyZenikFeatures: FeatureCard[] = [
  {
    title: "Rapid Delivery",
    description:
      "Ship MVPs in weeks, not months. Our streamlined process and expert teams accelerate your time-to-market without sacrificing quality.",
    iconName: "Zap",
  },
  {
    title: "Secure by Default",
    description:
      "Every line of code is written with security in mind. OWASP compliance, encrypted data flows, and rigorous penetration testing baked in.",
    iconName: "Shield",
  },
  {
    title: "Scale-Ready Architecture",
    description:
      "Built to grow with your business. Cloud-native infrastructure, microservices, and modular design handle millions of users effortlessly.",
    iconName: "Layers",
  },
];

/* ================================================
   PROCESS STEPS
   ================================================ */

export const processSteps: ProcessStep[] = [
  {
    num: "1",
    name: "Discover",
    description: "We understand your goals, challenges, and opportunities through deep research.",
    iconName: "Search",
  },
  {
    num: "2",
    name: "Plan",
    description: "We create a clear roadmap and technical architecture tailored to your needs.",
    iconName: "FileText",
  },
  {
    num: "3",
    name: "Design",
    description: "Pixel-perfect UI/UX design that delights users and drives conversion.",
    iconName: "Paintbrush",
  },
  {
    num: "4",
    name: "Build",
    description: "Our engineers build with speed, quality, and production-grade standards.",
    iconName: "Code2",
  },
  {
    num: "5",
    name: "Test",
    description: "Rigorous QA testing ensures bug-free, secure, and performant delivery.",
    iconName: "CheckCircle",
  },
  {
    num: "6",
    name: "Launch",
    description: "We deploy, test, and scale for long-term success and growth.",
    iconName: "Rocket",
  },
  {
    num: "7",
    name: "Monitor",
    description: "Real-time analytics and monitoring to track performance and user behavior.",
    iconName: "Activity",
  },
  {
    num: "8",
    name: "Optimize",
    description: "Continuous improvements based on data insights and user feedback.",
    iconName: "TrendingUp",
  },
];

/* ================================================
   TESTIMONIALS
   ================================================ */

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Zenik transformed our idea into a powerful product. Their team is reliable, skilled, and a pleasure to work with. The quality exceeded every expectation.",
    author: "James Carter",
    role: "CTO",
    company: "Fintech Labs",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Professional, fast, and innovative. They delivered our mobile app two weeks ahead of schedule with zero critical bugs. Outstanding team.",
    author: "Sophia Patel",
    role: "Product Lead",
    company: "Healthify",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Top-notch security and architecture. Zenik is our go-to tech partner for all mission-critical infrastructure. Highly recommended.",
    author: "Daniel Wu",
    role: "CEO",
    company: "CloudScale",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Our conversion rate increased by 340% after Zenik redesigned our landing pages. The ROI was incredible within the first month alone.",
    author: "Emily Chen",
    role: "Marketing Director",
    company: "GrowthPath",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "The AI chatbot they built handles 80% of our support tickets automatically. Our team can now focus on complex issues that actually need human attention.",
    author: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "TechServe",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "We've replaced 14 different apps with the custom platform Zenik built. It simplified our entire operation and our team morale skyrocketed.",
    author: "Olivia Bennett",
    role: "COO",
    company: "NexGen Systems",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

/* ================================================
   PORTFOLIO PROJECTS (for Home page showcase)
   ================================================ */

export const portfolioProjects: ProjectItem[] = [
  {
    id: "finova",
    title: "Finova Dashboard",
    client: "Finova Capital",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description:
      "A secure, premium corporate analytics dashboard with real-time data feeds and automated reporting.",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "movemate",
    title: "MoveMate Fitness",
    client: "MoveMate Inc",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1510051646316-c3f15a0c64b1?w=800&auto=format&fit=crop&q=80",
    description:
      "Cross-platform iOS and Android workout tracker with offline sync and rich push notifications.",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
  },
  {
    id: "growthpath",
    title: "GrowthPath Campaign Suite",
    client: "GrowthPath Media",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description:
      "Full-stack marketing automation platform with campaign management, analytics, and A/B testing.",
    technologies: ["React", "Node.js", "MongoDB", "SendGrid"],
  },
  {
    id: "lumina",
    title: "Lumina Storefront",
    client: "Lumina Co",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    description:
      "Ultra-fast headless Shopify frontend with localized currencies and complex shipping logic.",
    technologies: ["Next.js", "Shopify GraphQL", "Stripe", "Vercel"],
    featured: true,
  },
  {
    id: "smartassist",
    title: "SmartAssist AI Bot",
    client: "TechServe Inc",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    description:
      "AI-powered customer support chatbot handling 80% of tickets with natural language understanding.",
    technologies: ["Python", "OpenAI API", "React", "FastAPI"],
  },
  {
    id: "trustcomply",
    title: "TrustComply Audit",
    client: "TrustComply LLC",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    description:
      "Interactive compliance dashboard tracking internal files and highlighting GDPR compliance gaps.",
    technologies: ["Figma", "React", "Tailwind CSS", "Chart.js"],
  },
];

/* ================================================
   FAQ
   ================================================ */

export const homeFaqs: FAQ[] = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Standard MVP deliveries take 6 to 12 weeks. Larger enterprise projects with complex integrations range from 3 to 6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. We frequently partner with startups as their technical co-founders, building robust MVPs that satisfy investors and delight early users.",
  },
  {
    question: "Where are your teams based?",
    answer:
      "We have offices in London, UK (Covent Garden) and New York, USA (Manhattan). We operate on hybrid transatlantic schedules for maximum coverage.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, React Native, Node.js, TypeScript, Python, AWS, and GCP. We also specialize in AI/ML integrations with OpenAI and custom models.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. All our plans include post-launch support, and we offer dedicated maintenance packages for long-term partnerships including monitoring, updates, and feature enhancements.",
  },
];

/* ================================================
   TRUST BADGES
   ================================================ */

export const trustBadges: TrustBadge[] = [
  { title: "ISO 27001", subtitle: "Information Security Certified" },
  { title: "OWASP", subtitle: "Security Best Practices" },
  { title: "GDPR", subtitle: "Data Protection Compliant" },
  { title: "HIPAA", subtitle: "Healthcare Data Secure" },
];

/* ================================================
   MARQUEE LOGOS
   ================================================ */

export const marqueeLogos = [
  { name: "Stripe" },
  { name: "Shopify" },
  { name: "Airbnb" },
  { name: "Revolut" },
  { name: "Deliveroo" },
  { name: "TransferWise" },
  { name: "Monzo" },
  { name: "Brewdog" },
  { name: "Octopus Energy" },
  { name: "Checkout.com" },
];
