import { serviceCategories, allServices } from "../data/servicesData";
import type { ServiceItem } from "../types";

export interface ChatResponse {
  text: string;
  suggestions?: string[];
  action?: "contact" | "services" | "none";
}

interface IntentMatch {
  intent:
    | "greeting"
    | "services"
    | "details"
    | "pricing"
    | "timeline"
    | "contact"
    | "about"
    | "process"
    | "credentials"
    | "project_start"
    | "unknown";
  matchedCategories?: string[];
  matchedService?: ServiceItem;
}

// ── Keyword map: fuzzy match user input → service category ──────────────────
const keywordMap: { keywords: string[]; categoryId: string }[] = [
  {
    keywords: [
      "design", "ui", "ux", "logo", "brand", "branding", "graphic",
      "illustration", "wireframe", "prototype", "mockup", "figma", "sketch",
      "visual", "identity", "business card", "brochure", "presentation",
      "social media design", "email template", "design system",
    ],
    categoryId: "design",
  },
  {
    keywords: [
      "website", "web", "frontend", "react", "nextjs", "next.js", "vue", "nuxt",
      "backend", "nodejs", "node.js", "express", "nestjs", "mern", "full stack",
      "fullstack", "ecommerce", "e-commerce", "shopify", "landing page",
      "corporate site", "blog", "portfolio site", "admin panel", "dashboard",
      "payment", "stripe", "real-time", "realtime", "web app", "saas",
      "maintenance", "cms",
    ],
    categoryId: "web",
  },
  {
    keywords: [
      "app", "mobile", "ios", "android", "flutter", "react native",
      "kotlin", "swift", "cross platform", "cross-platform", "tablet",
      "play store", "app store", "apk", "native app", "hybrid app",
      "pwa", "progressive web",
    ],
    categoryId: "mobile",
  },
  {
    keywords: [
      "marketing", "seo", "ads", "social media", "google ads", "facebook",
      "instagram", "linkedin ads", "youtube ads", "ppc", "paid traffic",
      "retargeting", "organic", "keyword", "content", "blog post",
      "on-page", "off-page", "technical seo", "local seo",
    ],
    categoryId: "marketing",
  },
  {
    keywords: [
      "lead", "lead gen", "lead generation", "crm", "cold email", "outreach",
      "sales funnel", "b2b", "b2c", "prospect", "database", "hubspot",
      "zapier", "pipeline", "qualification", "appointment setting",
    ],
    categoryId: "leadgen",
  },
  {
    keywords: [
      "email", "smtp", "newsletter", "sendgrid", "ses", "aws ses",
      "campaign", "mailchimp", "automation", "workflow", "drip",
      "transactional email", "email template", "marketing email",
    ],
    categoryId: "email",
  },
  {
    keywords: [
      "cloud", "devops", "aws", "docker", "kubernetes", "azure", "gcp",
      "google cloud", "ci/cd", "deployment", "server", "infrastructure",
      "backup", "security", "firewall", "ssl", "dns", "database", "postgres",
      "mongodb", "redis", "nginx", "linux", "ubuntu", "scalability",
    ],
    categoryId: "cloud",
  },
  {
    keywords: [
      "ai", "chatbot", "machine learning", "ml", "openai", "gpt", "llm",
      "rag", "ocr", "automation", "recommendation", "intelligent", "predictive",
      "nlp", "natural language", "computer vision", "ai integration",
      "workflow automation", "ai-powered", "document processing",
    ],
    categoryId: "ai",
  },
  {
    keywords: [
      "saas", "mvp", "startup", "crm", "erp", "booking", "scheduling",
      "marketplace", "fintech", "edtech", "healthcare", "product", "platform",
      "portal", "custom software", "bespoke", "enterprise", "b2b software",
    ],
    categoryId: "product",
  },
];

// ── Category emoji icons ─────────────────────────────────────────────────────
const categoryEmoji: Record<string, string> = {
  design: "🎨",
  web: "💻",
  mobile: "📱",
  marketing: "📊",
  leadgen: "🎯",
  email: "📧",
  cloud: "☁️",
  ai: "🤖",
  product: "🚀",
};

// ── Normalise input ──────────────────────────────────────────────────────────
function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\s\/\.\-]/g, "")
    .trim();
}

// ── Find best single-service match ───────────────────────────────────────────
function findBestServiceMatch(input: string): ServiceItem | undefined {
  const normalized = normalize(input);
  if (normalized.length < 4) return undefined;

  let best: ServiceItem | undefined;
  let bestScore = 0;

  for (const service of allServices) {
    const title = normalize(service.title);

    if (title === normalized || title.includes(normalized) || normalized.includes(title)) {
      return service;
    }

    const titleWords = title.split(/\s+/).filter(Boolean);
    const inputWords = normalized.split(/\s+/).filter(Boolean);

    if (inputWords.length < 2) continue;

    let matches = 0;
    for (const iw of inputWords) {
      if (titleWords.some((tw) => tw === iw || tw.includes(iw) || iw.includes(tw))) {
        matches++;
      }
    }

    const score = matches / Math.max(inputWords.length, titleWords.length);
    if (score > bestScore && score >= 0.5) {
      bestScore = score;
      best = service;
    }
  }

  return best;
}

// ── Intent detection ─────────────────────────────────────────────────────────
function detectIntent(input: string): IntentMatch {
  const lower = input.toLowerCase().trim();

  // Greeting
  const greetings = [
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening",
    "howdy", "yo", "sup", "greetings", "help", "start", "what can you do",
    "what do you do",
  ];
  if (greetings.some((g) => lower === g || lower.startsWith(g + " ") || lower.startsWith(g + "!"))) {
    return { intent: "greeting" };
  }

  // Project start / intent to hire
  const projectStartKeywords = [
    "start a project", "i want to start", "let's work", "let's build",
    "i want to build", "i need to build", "i want to hire", "hire you",
    "work with you", "get started", "kick off", "begin a project",
    "i'd like to start", "ready to start",
  ];
  if (projectStartKeywords.some((k) => lower.includes(k))) {
    return { intent: "project_start" };
  }

  // Pricing
  const pricingKeywords = [
    "price", "cost", "budget", "pricing", "how much", "afford", "cheap",
    "expensive", "£", "$", "quote", "estimate", "range", "fee", "rate",
    "invoice", "payment plan",
  ];
  if (pricingKeywords.some((k) => lower.includes(k))) {
    return { intent: "pricing" };
  }

  // Timeline
  const timelineKeywords = [
    "timeline", "how long", "duration", "weeks", "months", "how fast",
    "how quickly", "deadline", "schedule", "when can", "turnaround",
  ];
  if (timelineKeywords.some((k) => lower.includes(k))) {
    return { intent: "timeline" };
  }

  // Contact
  const contactKeywords = [
    "contact", "call", "email", "meeting", "consultation", "talk to",
    "speak to", "book", "reach", "phone", "get in touch", "connect",
    "schedule a call", "speak with",
  ];
  if (contactKeywords.some((k) => lower.includes(k))) {
    return { intent: "contact" };
  }

  // Process / methodology
  const processKeywords = [
    "process", "methodology", "how do you work", "how does it work",
    "workflow", "steps", "phases", "approach", "discovery", "how you build",
  ];
  if (processKeywords.some((k) => lower.includes(k))) {
    return { intent: "process" };
  }

  // Credentials / about
  const aboutKeywords = [
    "who are you", "about", "about you", "company", "zenik", "studio",
    "london", "new york", "uk", "usa", "experience", "clients",
    "portfolio", "work", "team", "credentials", "certified", "iso",
    "gdpr", "retention", "projects delivered",
  ];
  if (aboutKeywords.some((k) => lower.includes(k))) {
    return { intent: "about" };
  }

  // Try exact service match first
  const matchedService = findBestServiceMatch(input);
  if (matchedService) {
    return { intent: "details", matchedService };
  }

  // Keyword → category mapping
  const matched: string[] = [];
  for (const entry of keywordMap) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      matched.push(entry.categoryId);
    }
  }
  if (matched.length > 0) {
    return { intent: "services", matchedCategories: [...new Set(matched)] };
  }

  return { intent: "unknown" };
}

// ── Get top service suggestions for matched categories ───────────────────────
function getCategorySuggestions(categoryIds: string[], limit = 4): string[] {
  const seen = new Set<string>();
  return categoryIds
    .flatMap((id) => {
      const cat = serviceCategories.find((c) => c.id === id);
      if (!cat) return [];
      return cat.services.slice(0, limit).map((s) => {
        if (seen.has(s.title)) return "";
        seen.add(s.title);
        return s.title;
      });
    })
    .filter(Boolean);
}

// ── Format category service list as emoji bullet lines ───────────────────────
function formatCategoryServices(categoryIds: string[], maxPerCat = 3): string {
  return categoryIds
    .map((id) => {
      const cat = serviceCategories.find((c) => c.id === id);
      if (!cat) return "";
      const emoji = categoryEmoji[id] ?? "•";
      const services = cat.services.slice(0, maxPerCat).map((s) => s.title).join(", ");
      return `${emoji} **${cat.name}** — ${services}`;
    })
    .filter(Boolean)
    .join("\n");
}

// ── Deployed portfolio base URL — all 90+ service pages live here ───────────
const PORTFOLIO_BASE_URL = "https://zenik-portfolio.vercel.app";

// ── Main response generator ──────────────────────────────────────────────────
export function generateResponse(input: string): ChatResponse {
  const { intent, matchedCategories, matchedService } = detectIntent(input);

  switch (intent) {
    // ── Greeting ──────────────────────────────────────────────────────────────
    case "greeting":
      return {
        text: `Hi there! I'm **Zenik's AI assistant** 👋\n\nI help you find the right service, answer questions, and connect you with our team.\n\nHere's what we specialise in:\n\n🎨 **Design** — UI/UX, Branding, Graphics\n💻 **Web** — React, Next.js, Full Stack\n📱 **Mobile** — iOS, Android, Cross-Platform\n📊 **Marketing** — SEO, Google Ads, Social Media\n🤖 **AI & Automation** — Chatbots, OpenAI, OCR\n☁️ **Cloud & DevOps** — AWS, Docker, CI/CD\n\nWhat are you working on?`,
        suggestions: ["I need a website", "Mobile app development", "Marketing & SEO", "AI & Automation", "Get a quote"],
        action: "none",
      };

    // ── Specific service detail ────────────────────────────────────────────────
    case "details": {
      if (!matchedService) break;
      const catName = matchedService.categoryName ?? "Services";
      const serviceUrl = `${PORTFOLIO_BASE_URL}/services/${matchedService.id}`;
      return {
        text: `**${matchedService.title}**\n\n${matchedService.description}\n\nThis is part of our **${catName}** offering. Our team handles everything from strategy through to deployment and ongoing support.\n\n🔗 **View full details:** ${serviceUrl}\n\n📌 Want to discuss this for your project?`,
        suggestions: ["Book a consultation", "How much does it cost?", "What's the timeline?", `More ${catName} services`],
        action: "none",
      };
    }

    // ── Pricing ───────────────────────────────────────────────────────────────
    case "pricing":
      return {
        text: `Our project pricing varies based on scope and complexity:\n\n• **Landing Pages / Marketing Sites** — £20k–£40k\n• **Custom Web Applications** — £40k–£100k+\n• **E-commerce Platforms** — £50k–£150k+\n• **Mobile Apps (iOS/Android)** — £30k–£120k+\n• **SaaS / MVP Products** — £50k–£150k+\n• **AI & Automation** — £30k–£80k+\n• **Digital Marketing (monthly)** — from £2k/mo\n\nEvery project is unique — these are indicative ranges. Tell me about your project and I'll connect you with our team for an exact quote.`,
        suggestions: ["Book a consultation", "Tell me about my project", "View all services", "What's the timeline?"],
        action: "none",
      };

    // ── Timeline ──────────────────────────────────────────────────────────────
    case "timeline":
      return {
        text: `Project timelines depend on scope and complexity:\n\n⚡ **Landing Pages** — 4–6 weeks\n🌐 **Custom Web Apps** — 6–12 weeks\n📱 **Mobile Apps** — 8–12 weeks\n🏗️ **SaaS / Complex Platforms** — 3–6 months\n🤖 **AI Integrations** — 4–10 weeks\n📊 **Marketing Campaigns** — ongoing monthly\n\nWe follow a proven **6-phase methodology:**\n**Discovery → Design → Build → Test → Launch → Iterate**\n\nNeed it faster? Let's talk — we can often accommodate tighter deadlines with dedicated teams.`,
        suggestions: ["Book a consultation", "I have a tight deadline", "Our process", "Pricing info"],
        action: "none",
      };

    // ── Contact ───────────────────────────────────────────────────────────────
    case "contact":
      return {
        text: `I'd love to connect you with our team! Here's how to reach us:\n\n📞 **Call:** +44 20 7946 0958 *(UK, Mon–Fri 9–6)*\n📧 **Email:** hello@zenik.studio\n📅 **Book a call:** Available in our contact page\n\n⏱️ We respond to all serious inquiries **within 2 hours** during business hours.\n\nOr tell me more about your project — I'll prepare the context for our team!`,
        suggestions: ["Start a project", "Tell me about my project", "View our services", "Our process"],
        action: "contact",
      };

    // ── Project start / ready to hire ─────────────────────────────────────────
    case "project_start":
      return {
        text: `Exciting! Let's get your project moving 🚀\n\nHere's the fastest way to start:\n\n📞 **Call:** +44 20 7946 0958 *(UK)*\n📧 **Email:** hello@zenik.studio\n📅 **Book a consultation** — a quick 30-min call to map out your project\n\n💬 Or tell me more about your idea and I'll help you prepare a brief for our team. What are you building?`,
        suggestions: ["Book a consultation", "I need a website", "Mobile app idea", "Tell me about the process"],
        action: "contact",
      };

    // ── Process / methodology ─────────────────────────────────────────────────
    case "process":
      return {
        text: `Our **6-Phase Delivery Methodology** ensures every project is delivered on time and to the highest standard:\n\n1️⃣ **Discovery** — Goals, requirements, technical audit\n2️⃣ **Design** — UI/UX wireframes, prototypes, brand alignment\n3️⃣ **Build** — Agile sprints, weekly updates, code reviews\n4️⃣ **Test** — QA, performance testing, security audit\n5️⃣ **Launch** — Deployment, DNS, monitoring setup\n6️⃣ **Iterate** — Post-launch support, feedback cycles\n\nYou'll have a dedicated project manager and direct access to developers throughout.`,
        suggestions: ["Book a consultation", "What's the timeline?", "Pricing info", "View our work"],
        action: "none",
      };

    // ── About / credentials ───────────────────────────────────────────────────
    case "about":
      return {
        text: `**Zenik Studio** is a UK & USA-based custom software development and digital product agency.\n\n🌍 **Offices:** London (UK) & New York (USA)\n📦 **Projects Delivered:** 95+\n⭐ **Client Retention:** 99.2%\n🔒 **Certified:** ISO 27001, GDPR Compliant\n🏭 **Industries:** Fintech, EdTech, Healthcare, E-commerce, SaaS\n\nWe specialise in designing and building secure, high-performance digital products that drive real business growth — from MVPs to enterprise platforms.`,
        suggestions: ["View our services", "Contact the team", "Our process", "Pricing & budgets"],
        action: "none",
      };

    // ── Service category match ─────────────────────────────────────────────────
    case "services":
      if (matchedCategories && matchedCategories.length > 0) {
        const catNames = matchedCategories
          .map((id) => serviceCategories.find((c) => c.id === id)?.name ?? id)
          .join(", ");
        const suggestions = getCategorySuggestions(matchedCategories, 5);
        const serviceLines = formatCategoryServices(matchedCategories, 3);
        return {
          text: `Found services matching **${catNames}**:\n\n${serviceLines}\n\nWould you like details on any of these? Or I can help you find something more specific.`,
          suggestions: [...suggestions.slice(0, 3), "Book a consultation"],
          action: "none",
        };
      }
      return {
        text: `We offer **90+ services** across these areas:\n\n${Object.entries(categoryEmoji)
          .map(([id, emoji]) => {
            const cat = serviceCategories.find((c) => c.id === id);
            return cat ? `${emoji} **${cat.name}**` : "";
          })
          .filter(Boolean)
          .join("\n")}\n\nWhich area interests you most?`,
        suggestions: ["Design", "Web Development", "Mobile App", "Marketing", "AI & Automation"],
        action: "none",
      };

    // ── Unknown / fallback ────────────────────────────────────────────────────
    case "unknown":
    default:
      return {
        text: `I didn't quite catch that — no worries! Are you looking for:\n\n🎨 **Design** — UI/UX, logos, branding\n💻 **Development** — websites, web apps, mobile\n📊 **Marketing** — SEO, ads, social media\n🤖 **AI & Automation** — chatbots, integrations\n\nOr I can help with **pricing**, **timelines**, or connect you with our **team directly**.`,
        suggestions: ["Design services", "Web Development", "Marketing help", "Pricing info", "Contact team"],
        action: "none",
      };
  }

  return {
    text: `I'm not sure I caught that. Are you looking for **design**, **development**, **marketing**, or **something else**?`,
    suggestions: ["Design services", "Development", "Marketing help", "Contact team"],
    action: "none",
  };
}

// ── Welcome message ───────────────────────────────────────────────────────────
export function getWelcomeMessage(): ChatResponse {
  return {
    text: `👋 Hi! I'm **Zenik's assistant** — here to help you find the right service, get answers on pricing & timelines, or connect you with our team.\n\nWhat can I help you with today?`,
    suggestions: ["I need a website", "Mobile app development", "Marketing & SEO", "Get a quote"],
    action: "none",
  };
}
