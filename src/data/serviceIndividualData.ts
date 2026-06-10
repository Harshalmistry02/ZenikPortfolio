import type { ServiceDetail } from "./serviceDetailsData";
import { serviceCategories } from "./servicesData";

// Unsplash image pool — keyed by category
const categoryImages: Record<string, string[]> = {
  design: [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558655146-d49348800c58?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542744094-24638ea0b3b4?w=1200&auto=format&fit=crop&q=80",
  ],
  web: [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&auto=format&fit=crop&q=80",
  ],
  mobile: [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553877522-431f4d81b4fc?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
  ],
  marketing: [
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522881115167-73d8e57924ec?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&auto=format&fit=crop&q=80",
  ],
  leadgen: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1497215858123-b1dca5a2fe21?w=1200&auto=format&fit=crop&q=80",
  ],
  email: [
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&auto=format&fit=crop&q=80",
  ],
  cloud: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542744094-24638ea0b3b4?w=1200&auto=format&fit=crop&q=80",
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&auto=format&fit=crop&q=80",
  ],
  product: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523961131990-521072f1616c?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80",
  ],
};

// Category-level tools
const categoryTools: Record<string, string[]> = {
  design: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Framer", "Webflow", "Lottie", "Zeplin"],
  web: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "AWS"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Xcode", "Android Studio"],
  marketing: ["Google Ads", "Meta Business Suite", "SEMrush", "Ahrefs", "HubSpot", "Google Analytics 4", "Hotjar"],
  leadgen: ["HubSpot", "Salesforce", "Apollo.io", "LinkedIn Sales Navigator", "Instantly", "Lemlist", "Zapier"],
  email: ["AWS SES", "SendGrid", "Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign", "Postmark"],
  cloud: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
  ai: ["OpenAI API", "LangChain", "Python", "TensorFlow", "FastAPI", "Pinecone", "Hugging Face"],
  product: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis", "Elasticsearch", "Mixpanel"],
};

// Standard process per category
const categoryProcess: Record<string, { step: number; name: string; description: string }[]> = {
  design: [
    { step: 1, name: "Discovery", description: "Understand your brand, audience, and visual goals." },
    { step: 2, name: "Concepts", description: "Create initial concepts and mood boards for direction." },
    { step: 3, name: "Design", description: "Develop high-fidelity designs with your feedback." },
    { step: 4, name: "Refinement", description: "Polish details until every pixel is perfect." },
    { step: 5, name: "Delivery", description: "Export all assets in required formats with guidelines." },
  ],
  web: [
    { step: 1, name: "Requirements", description: "Document technical scope and define architecture." },
    { step: 2, name: "Design", description: "UI/UX design and interactive prototyping." },
    { step: 3, name: "Development", description: "Agile sprints with weekly demos and CI." },
    { step: 4, name: "QA & Testing", description: "End-to-end testing, performance audits, security checks." },
    { step: 5, name: "Launch", description: "Zero-downtime deployment with monitoring." },
  ],
  mobile: [
    { step: 1, name: "Discovery", description: "Define app goals, user personas, and feature scope." },
    { step: 2, name: "UI/UX Design", description: "Mobile-first wireframes and interactive prototypes." },
    { step: 3, name: "Development", description: "Iterative sprints with TestFlight/Play Console previews." },
    { step: 4, name: "QA & Testing", description: "Device testing across iOS and Android versions." },
    { step: 5, name: "Launch & ASO", description: "Store submission, metadata optimisation and launch." },
  ],
  marketing: [
    { step: 1, name: "Audit", description: "Comprehensive audit of your current digital presence." },
    { step: 2, name: "Strategy", description: "Custom growth strategy aligned with your objectives." },
    { step: 3, name: "Launch", description: "Campaign creation, content production, channel activation." },
    { step: 4, name: "Optimise", description: "Weekly performance reviews and continuous A/B testing." },
    { step: 5, name: "Report", description: "Monthly reports with transparent ROI metrics." },
  ],
  leadgen: [
    { step: 1, name: "ICP Definition", description: "Define your ideal customer profile and target segments." },
    { step: 2, name: "List Building", description: "Curate verified, targeted prospect lists." },
    { step: 3, name: "Campaign Setup", description: "Configure outreach sequences and CRM." },
    { step: 4, name: "Outreach", description: "Launch and monitor multi-channel campaigns." },
    { step: 5, name: "Optimise & Scale", description: "A/B test messaging and scale winning sequences." },
  ],
  email: [
    { step: 1, name: "Audit", description: "Review current email performance and deliverability." },
    { step: 2, name: "Infrastructure", description: "Set up SMTP, domain authentication (SPF, DKIM, DMARC)." },
    { step: 3, name: "Design", description: "Create branded templates and component library." },
    { step: 4, name: "Automation", description: "Build and test all automated workflows." },
    { step: 5, name: "Optimise", description: "A/B test subject lines, CTAs and send timing." },
  ],
  cloud: [
    { step: 1, name: "Assessment", description: "Audit existing infrastructure and identify gaps." },
    { step: 2, name: "Architecture", description: "Design cloud architecture aligned with scale and budget." },
    { step: 3, name: "Provisioning", description: "Infrastructure as Code (Terraform) deployment." },
    { step: 4, name: "CI/CD Setup", description: "Configure pipelines, monitoring and alerting." },
    { step: 5, name: "Handover", description: "Documentation, runbooks and team training." },
  ],
  ai: [
    { step: 1, name: "Use Case", description: "Identify and prioritise highest-value AI opportunities." },
    { step: 2, name: "Data Assessment", description: "Evaluate data availability and quality." },
    { step: 3, name: "Prototype", description: "Rapid proof-of-concept to validate ROI." },
    { step: 4, name: "Build & Train", description: "Model development, fine-tuning and integration." },
    { step: 5, name: "Deploy & Monitor", description: "Production deployment with performance monitoring." },
  ],
  product: [
    { step: 1, name: "Discovery", description: "Define core value proposition and MVP scope." },
    { step: 2, name: "Architecture", description: "Design scalable system architecture." },
    { step: 3, name: "Development", description: "2-week sprints with shippable increments." },
    { step: 4, name: "Beta Testing", description: "Controlled beta with real users and feedback." },
    { step: 5, name: "Launch & Grow", description: "Production launch with analytics and iteration." },
  ],
};

// Why Us per category
const categoryWhyUs: Record<string, { title: string; description: string }[]> = {
  design: [
    { title: "Strategy-Led Design", description: "Every design decision is rooted in UX research and conversion data." },
    { title: "Brand Consistency", description: "We build systems, not one-offs, ensuring coherence at scale." },
    { title: "Fast Turnaround", description: "Iterative sprints mean you see results in days, not months." },
  ],
  web: [
    { title: "Performance First", description: "Core Web Vitals optimised from day one — Lighthouse scores above 95." },
    { title: "Security Built In", description: "OWASP-compliant code, encrypted data flows and GDPR-ready architecture." },
    { title: "Scalable by Design", description: "Cloud-native infrastructure that scales horizontally without refactoring." },
  ],
  mobile: [
    { title: "Cross-Platform Experts", description: "We choose the right technology based on your users, not our convenience." },
    { title: "Performance Obsessed", description: "60fps animations, minimal battery drain and fast cold starts as standard." },
    { title: "End-to-End Delivery", description: "From design to deployment and ASO, we handle the entire mobile lifecycle." },
  ],
  marketing: [
    { title: "Full-Funnel Approach", description: "We manage awareness through to conversion, ensuring no leakage at any stage." },
    { title: "Transparent Reporting", description: "Real-time dashboards giving you full visibility of spend and results." },
    { title: "ROI Guarantee", description: "We set measurable KPIs upfront and are accountable to every one of them." },
  ],
  leadgen: [
    { title: "Verified Data", description: "We use only premium, verified data sources for high deliverability and accuracy." },
    { title: "Personalisation at Scale", description: "AI-assisted personalisation making every outreach feel 1-to-1." },
    { title: "Pipeline Transparency", description: "Live CRM dashboards showing every lead, touchpoint and conversion status." },
  ],
  email: [
    { title: "Deliverability Experts", description: "Your emails land in the inbox through proper authentication and list hygiene." },
    { title: "Revenue Attribution", description: "Every campaign is tied to revenue through UTM tracking and CRM attribution." },
    { title: "Full-Service", description: "Strategy, copywriting, design, development and analytics under one roof." },
  ],
  cloud: [
    { title: "Infrastructure as Code", description: "All infrastructure is version-controlled with Terraform — fully reproducible." },
    { title: "Proactive Monitoring", description: "24/7 alerting and runbooks mean issues are resolved before users notice." },
    { title: "Cost Optimisation", description: "Regular cost reviews identifying savings without compromising performance." },
  ],
  ai: [
    { title: "Practical AI", description: "We focus on AI that delivers measurable ROI — not solutions looking for problems." },
    { title: "Production-Grade", description: "Our AI systems are built for reliability, latency and scale from the start." },
    { title: "Responsible AI", description: "Every model includes bias testing, explainability and data privacy controls." },
  ],
  product: [
    { title: "Product Thinking", description: "We ask 'should we build this?' before 'how do we build this?' — protecting your budget." },
    { title: "Startup DNA", description: "Our founders have built and scaled startups, giving real-world product perspective." },
    { title: "Long-Term Partnership", description: "We stay engaged post-launch with maintenance, feature development and growth engineering." },
  ],
};

// Category-level FAQ templates
const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  design: [
    { question: "How long does this project take?", answer: "Typically 1–3 weeks depending on scope. Complex projects may take 4–6 weeks." },
    { question: "Do you provide source files?", answer: "Yes. All projects are handed off with organised Figma source files and exported assets." },
    { question: "Can you work with our existing brand guidelines?", answer: "Absolutely. We align all work to your existing brand standards and style guides." },
  ],
  web: [
    { question: "What technologies do you use?", answer: "Our primary stack is React/Next.js frontend, Node.js backend, PostgreSQL or MongoDB, and AWS or Vercel for hosting." },
    { question: "How long does development take?", answer: "Simple projects take 1–2 weeks. Complex applications typically take 6–16 weeks depending on scope." },
    { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer monthly retainer packages covering updates, security patches and performance monitoring." },
  ],
  mobile: [
    { question: "Which platform do you recommend?", answer: "We assess your audience and recommend native or cross-platform based on your specific needs and budget." },
    { question: "How long does development take?", answer: "A simple app takes 6–10 weeks. Feature-rich apps typically take 12–20 weeks." },
    { question: "Do you handle App Store submission?", answer: "Yes. We manage the entire submission process including compliance review and binary upload." },
  ],
  marketing: [
    { question: "How long before I see results?", answer: "Paid campaigns deliver results from day one. SEO improvements typically appear within 3–6 months." },
    { question: "What reporting do you provide?", answer: "We provide weekly performance updates and full monthly reports with transparent ROI metrics." },
    { question: "Do you manage everything end-to-end?", answer: "Yes. From strategy and creative production to campaign management and optimisation." },
  ],
  leadgen: [
    { question: "How many leads can I expect per month?", answer: "Clients typically see 20–80 qualified leads per month within the first 60 days." },
    { question: "Is this GDPR compliant?", answer: "Absolutely. All campaigns comply with GDPR, CAN-SPAM and LinkedIn's terms of service." },
    { question: "Do you set up the CRM?", answer: "Yes. CRM setup and integration is included in all lead generation packages." },
  ],
  email: [
    { question: "What open rates should I expect?", answer: "With proper setup, clients typically see 30–50% open rates, above the 21% industry average." },
    { question: "How do you prevent emails going to spam?", answer: "We configure SPF, DKIM and DMARC records and maintain list hygiene through regular cleaning." },
    { question: "Can you migrate from our current provider?", answer: "Yes. We handle full migrations including list transfer, template recreation and workflow rebuilds." },
  ],
  cloud: [
    { question: "Which cloud provider do you recommend?", answer: "AWS for most use cases. We also work extensively with GCP and Azure and advise based on your stack." },
    { question: "Do you offer 24/7 support?", answer: "Yes. Our DevOps retainer plans include 24/7 on-call support with guaranteed SLA response times." },
    { question: "Can you migrate our existing infrastructure?", answer: "Yes. We handle full cloud migrations with zero downtime using blue-green deployment strategies." },
  ],
  ai: [
    { question: "Do I need large amounts of data?", answer: "Not always. We leverage pre-trained models like GPT-4 that require minimal fine-tuning for most use cases." },
    { question: "How do you ensure AI accuracy?", answer: "We establish baseline metrics and implement human-in-the-loop feedback loops to continuously improve accuracy." },
    { question: "Is my data safe when using AI APIs?", answer: "We implement API-only integrations with zero data retention agreements and can deploy self-hosted models for privacy." },
  ],
  product: [
    { question: "How quickly can you deliver an MVP?", answer: "MVPs are typically delivered in 6–12 weeks depending on scope and complexity." },
    { question: "Who owns the code?", answer: "You do — 100%. All source code, IP and assets are fully transferred to you upon final payment." },
    { question: "Do you provide ongoing support post-launch?", answer: "Yes. We offer retainer packages covering maintenance, new features and growth engineering." },
  ],
};

function pickImage(categoryId: string, serviceId: string): string {
  const pool = categoryImages[categoryId] || categoryImages["design"];
  const idx = serviceId.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % pool.length;
  return pool[idx];
}

export function buildServiceDetail(
  serviceId: string,
  title: string,
  description: string,
  categoryId: string,
  categoryName: string
): ServiceDetail {
  const image = pickImage(categoryId, serviceId);
  const tools = categoryTools[categoryId] || categoryTools["design"];
  const process = categoryProcess[categoryId] || categoryProcess["design"];
  const whyUs = categoryWhyUs[categoryId] || categoryWhyUs["design"];
  const faqs = categoryFaqs[categoryId] || categoryFaqs["design"];

  // Build 6 features specific to this service title + description
  const features = [
    { title: "Expert Execution", description: `Our specialists bring deep expertise to every ${title} engagement.` },
    { title: "Tailored Approach", description: `Every solution is customised to your unique business context and goals.` },
    { title: "Quality Assurance", description: `Rigorous review cycles ensure every deliverable meets our high standards.` },
    { title: "Transparent Communication", description: "Regular updates and clear milestones keep you informed at every stage." },
    { title: "Scalable Output", description: "Solutions designed to grow and adapt as your business evolves." },
    { title: "Measurable Results", description: "Clear KPIs and reporting so you always know the impact of your investment." },
  ];

  const overview = `${description} Our team brings deep expertise and a proven methodology to every ${title} engagement. We combine best-in-class tools with a strategic mindset to deliver solutions that not only meet your immediate needs but position your business for long-term success. Every project begins with a thorough understanding of your goals, audience, and competitive landscape.`;

  const benefits = [
    `Accelerated delivery through our battle-tested ${categoryName} workflows`,
    "Reduced risk with structured milestones and transparent progress reporting",
    "Dedicated team with deep domain expertise in " + categoryName,
    "Ongoing support and iteration beyond initial delivery",
  ];

  return {
    slug: serviceId,
    title,
    tagline: `Expert ${title} solutions that drive real business results`,
    description,
    image,
    overview,
    benefits,
    features,
    process,
    tools,
    whyUs,
    faqs,
  };
}

// Build a lookup map of all individual services
export const individualServiceDetails: Map<string, ServiceDetail> = (() => {
  const map = new Map<string, ServiceDetail>();
  for (const category of serviceCategories) {
    for (const service of category.services) {
      map.set(
        service.id,
        buildServiceDetail(service.id, service.title, service.description, category.id, category.name)
      );
    }
  }
  return map;
})();

export function getIndividualServiceDetail(serviceId: string): ServiceDetail | undefined {
  return individualServiceDetails.get(serviceId);
}
