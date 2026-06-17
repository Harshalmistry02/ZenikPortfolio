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
  { value: "95", label: "Projects Delivered", suffix: "+" },
  { value: "60", label: "Happy Clients", suffix: "+" },
  { value: "15", label: "Countries Served", suffix: "+" },
  { value: "99.2", label: "Client Retention", suffix: "%" },
];

// Community-style stats for hero sections
export const communityStats: StatItem[] = [
  { value: "95", label: "Projects Delivered", suffix: "+" }, // Main hero stat
  { value: "15", label: "Countries Served", suffix: "+" },
  { value: "60", label: "Happy Clients", suffix: "+" },
  { value: "99.2", label: "Client Retention", suffix: "%" },
];

/* ================================================
   WHY ZENIK FEATURES
   ================================================ */

export const whyZenikFeatures: FeatureCard[] = [
  {
    title: "Rapid MVP Delivery",
    description:
      "Launch your product in weeks, not months. We follow a streamlined sprint model to get your software to market quickly without cutting corners.",
    iconName: "Zap",
  },
  {
    title: "Security by Design",
    description:
      "Every system is built to protect your data. We incorporate encryption, OWASP guidelines, and compliance checks from day one.",
    iconName: "Shield",
  },
  {
    title: "Scale-Ready Structure",
    description:
      "Never worry about crash reports. We build clean, modular architectures that easily handle traffic spikes and team growth.",
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
    description: "We align on your goals, identify potential challenges, and define the scope through research.",
    iconName: "Search",
  },
  {
    num: "2",
    name: "Plan",
    description: "We map out a clear project timeline, wireframes, and choose the most stable technology stack.",
    iconName: "FileText",
  },
  {
    num: "3",
    name: "Design",
    description: "We create high-fidelity visual mockups and interactive prototypes to review before coding.",
    iconName: "Paintbrush",
  },
  {
    num: "4",
    name: "Build",
    description: "Our developers write clean, well-tested code in regular sprints, keeping you updated.",
    iconName: "Code2",
  },
  {
    num: "5",
    name: "Test",
    description: "We run quality assurance audits and security tests to ensure the software works perfectly.",
    iconName: "CheckCircle",
  },
  {
    num: "6",
    name: "Launch",
    description: "We safely deploy your project, monitor server performance, and provide post-launch support.",
    iconName: "Rocket",
  },
];

/* ================================================
   TESTIMONIALS
   ================================================ */

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Zenik turned our initial wireframes into a secure, functional dashboard. Their engineering team communicated clearly, hit every major deadline, and delivered code that passed our security audits with ease.",
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
      "They delivered our mobile app ahead of schedule. The interface is fluid, the database handles offline sync perfectly, and launching on the app stores was completely hands-off for us.",
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
      "Zenik serves as our reliable development partner. Their cloud setups are stable, secure, and easily handle our traffic spikes. We trust them with our core infrastructure.",
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
      "Our lead registration rate increased significantly after the redesign. They focused heavily on speed and clear user journeys, which paid off almost immediately.",
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
      "The database automation tools they built for us have cut support response times in half. It freed up our team to focus on customer calls rather than manual data entry.",
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
      "We replaced multiple expensive software subscriptions with the custom database portal Zenik developed. It simplified our internal reporting and saved us thousands in monthly fees.",
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
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",
    description:
      "A secure corporate analytics portal with real-time financial reporting, user access levels, and automated document generation.",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "movemate",
    title: "MoveMate Fitness",
    client: "MoveMate Inc",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    description:
      "A cross-platform iOS and Android exercise application featuring offline storage, push notifications, and wearable device integration.",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
  },
  {
    id: "growthpath",
    title: "GrowthPath Campaign Suite",
    client: "GrowthPath Media",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
    description:
      "A custom marketing system with drag-and-drop workflow builders, detailed tracking, and automated email trigger logic.",
    technologies: ["React", "Node.js", "MongoDB", "SendGrid"],
  },
  {
    id: "lumina",
    title: "Lumina Storefront",
    client: "Lumina Co",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    description:
      "A headless e-commerce store with rapid page load speeds, custom payment checkouts, and international shipping configurations.",
    technologies: ["Next.js", "Shopify GraphQL", "Stripe", "Vercel"],
    featured: true,
  },
  {
    id: "smartassist",
    title: "SmartAssist AI Bot",
    client: "TechServe Inc",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
    description:
      "An automated customer service chat agent that resolves common queries and handles support tickets directly inside the user dashboard.",
    technologies: ["Python", "OpenAI API", "React", "FastAPI"],
  },
  {
    id: "trustcomply",
    title: "TrustComply Audit",
    client: "TrustComply LLC",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
    description:
      "An interactive web dashboard that tracks compliance records, files secure documents, and identifies regulatory gaps.",
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
