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
    { step: 1, name: "Discovery", description: "Understand your brand, target audience, and layout goals." },
    { step: 2, name: "Concepts", description: "Create initial wireframes and mood boards for direction." },
    { step: 3, name: "Design", description: "Develop high-fidelity UI layouts with interactive prototypes." },
    { step: 4, name: "Refinement", description: "Refine layouts based on usability feedback." },
    { step: 5, name: "Delivery", description: "Export developers-ready design systems and components." },
  ],
  web: [
    { step: 1, name: "Requirements", description: "Document technical scope and define database relationships." },
    { step: 2, name: "Design", description: "Build interactive layouts and component specifications." },
    { step: 3, name: "Development", description: "Develop features in agile sprints with bi-weekly demos." },
    { step: 4, name: "QA & Testing", description: "Execute performance checks, security scans, and audits." },
    { step: 5, name: "Launch", description: "Deploy to production with continuous monitoring loops." },
  ],
  mobile: [
    { step: 1, name: "Discovery", description: "Define user personas, map features, and scope offline database needs." },
    { step: 2, name: "UI/UX Design", description: "Design mobile-first layouts and gesture-friendly prototypes." },
    { step: 3, name: "Development", description: "Agile mobile development with regular TestFlight updates." },
    { step: 4, name: "QA & Testing", description: "Test scripts across multiple physical screen sizes and OS builds." },
    { step: 5, name: "Launch & ASO", description: "Submit applications to app stores and optimize search metadata." },
  ],
  marketing: [
    { step: 1, name: "Audit", description: "Analyze your current search rankings and competitor campaigns." },
    { step: 2, name: "Strategy", description: "Set keyword targeting lists and direct ad budget allocations." },
    { step: 3, name: "Launch", description: "Publish optimized page copy, set up tracking tags, and start ads." },
    { step: 4, name: "Optimise", description: "Run A/B tests on landing page layouts and ad headlines." },
    { step: 5, name: "Report", description: "Deliver monthly reporting tracking leads and acquisition spend." },
  ],
  leadgen: [
    { step: 1, name: "ICP Definition", description: "Outline target demographics, titles, and company sizes." },
    { step: 2, name: "List Building", description: "Acquire and verify prospect lists from premium databases." },
    { step: 3, name: "Campaign Setup", description: "Verify outbound email domains and warm up sending servers." },
    { step: 4, name: "Outreach", description: "Initiate personalized cold email and LinkedIn sequences." },
    { step: 5, name: "Optimise & Scale", description: "Adjust follow-ups and scale high-performing copy templates." },
  ],
  email: [
    { step: 1, name: "Audit", description: "Audit sender reputation, domain records, and bounce ratios." },
    { step: 2, name: "Infrastructure", description: "Verify SPF, DKIM, and DMARC parameters for clean delivery." },
    { step: 3, name: "Design", description: "Code custom responsive HTML templates for all email clients." },
    { step: 4, name: "Automation", description: "Set up trigger parameters and lead nurture logic paths." },
    { step: 5, name: "Optimise", description: "A/B test subject lines, layouts, and send timing parameters." },
  ],
  cloud: [
    { step: 1, name: "Assessment", description: "Audit server setups for security vulnerabilities and cost leaks." },
    { step: 2, name: "Architecture", description: "Design secure VPC boundaries and cluster redundancy configurations." },
    { step: 3, name: "Provisioning", description: "Deploy cloud environments using code blueprints (Terraform)." },
    { step: 4, name: "CI/CD Setup", description: "Configure automated code pipelines and server warnings." },
    { step: 5, name: "Handover", description: "Deliver network diagrams, backup schedules, and access runbooks." },
  ],
  ai: [
    { step: 1, name: "Use Case", description: "Assess business processes and select the safest model API." },
    { step: 2, name: "Data Assessment", description: "Verify database availability and clean input text." },
    { step: 3, name: "Prototype", description: "Build a functional prototype to verify AI model bounds." },
    { step: 4, name: "Build & Train", description: "Integrate model logic and secure credentials inside backends." },
    { step: 5, name: "Deploy & Monitor", description: "Deploy and track API token costs and latency stats." },
  ],
  product: [
    { step: 1, name: "Discovery", description: "Map user stories, define database schema, and lock MVP scope." },
    { step: 2, name: "Architecture", description: "Design scalable database relations and hosting layouts." },
    { step: 3, name: "Development", description: "Write clean, modular code in bi-weekly sprints." },
    { step: 4, name: "Beta Testing", description: "Deploy to a closed user group to catch usability bugs." },
    { step: 5, name: "Launch & Grow", description: "Deploy to cloud, set database backup loops, and begin updates." },
  ],
};

// Why Us per category
const categoryWhyUs: Record<string, { title: string; description: string }[]> = {
  design: [
    { title: "Usability Focus", description: "We prioritize clean visual layouts and straightforward user flows over transient design trends." },
    { title: "Systematic Design", description: "We construct organized component systems that speed up future development tasks." },
    { title: "Sprint-Based Delivery", description: "Our team operates in rapid design sprints, delivering clear visual milestones weekly." },
  ],
  web: [
    { title: "Performance First", description: "We optimize all layouts for Core Web Vitals, ensuring sub-second load times." },
    { title: "OWASP-Compliant Code", description: "We build secure systems with strict user permission levels and encryption rules." },
    { title: "Scalable Infrastructure", description: "Our setups grow dynamically with your business needs, handling high traffic loads." },
  ],
  mobile: [
    { title: "Codebase Efficiency", description: "We select the most cost-effective cross-platform tool to minimize developer hours." },
    { title: "Battery & Storage Savings", description: "We build lightweight mobile apps that download fast and preserve device power." },
    { title: "Publishing Management", description: "We guide your application through store validation checks and metadata setup." },
  ],
  marketing: [
    { title: "Outcome Metrics", description: "We focus completely on tracking active prospective leads rather than generic views." },
    { title: "Constant Optimization", description: "We run monthly A/B tests on copy and layout options to lower acquisition costs." },
    { title: "Clean SEO Practices", description: "We build permanent organic authority using white-hat optimization guidelines." },
  ],
  leadgen: [
    { title: "Deliverability Security", description: "We register secondary domains to safeguard your primary corporate email records." },
    { title: "Personalized Outreach", description: "We write short, business-focused copy tailored directly to each recipient's role." },
    { title: "Live Pipeline Reports", description: "Our dashboards link to your CRM to show meeting and conversion metrics instantly." },
  ],
  email: [
    { title: "SMTP Configuration", description: "We write clean SPF, DKIM, and DMARC parameters to maximize inbox delivery." },
    { title: "Clean HTML Templates", description: "We build custom, lightweight layouts that bypass image-blocking filters." },
    { title: "Total Sync Setup", description: "We sync database triggers and unsubscribe hooks directly with your primary CRM." },
  ],
  cloud: [
    { title: "Version-Controlled Setup", description: "We map your cloud infrastructure inside Terraform, ensuring reproducible setups." },
    { title: "Continuous Monitoring", description: "We establish proactive alerts to catch server and database bottlenecks early." },
    { title: "Right-Size Cloud Spend", description: "We audit and adjust cloud assets regularly, eliminating unnecessary hosting costs." },
  ],
  ai: [
    { title: "Practical Business Value", description: "We implement AI setups that save active database entry time or support hours." },
    { title: "Data Isolation", description: "We configure API integrations with zero data retention logs to protect privacy." },
    { title: "Response Validation", description: "We write check scripts that verify AI outputs before saving them to database tables." },
  ],
  product: [
    { title: "Scope Discipline", description: "We focus engineering efforts on high-value features, keeping your timeline short." },
    { title: "Clean Engineering", description: "We follow industry-standard database guidelines, preventing slow load times." },
    { title: "Long-Term Collaboration", description: "We support you post-launch with feature additions and cloud scale updates." },
  ],
};

// Category-level FAQ templates
const categoryFaqs: Record<string, { question: string; answer: string }[]> = {
  design: [
    { question: "How long does a UI/UX project take?", answer: "Standard interface designs take 3 to 6 weeks. Creating a comprehensive design system typically requires 6 to 10 weeks." },
    { question: "Do you deliver design source files?", answer: "Yes. All projects are handed off with fully organized Figma source files, components, and exportable assets." },
    { question: "Can you work with our existing brand guidelines?", answer: "Absolutely. We align all visual assets and components with your established corporate style guide and brand assets." },
  ],
  web: [
    { question: "What is your main technology stack?", answer: "We primarily build using React and Next.js on the frontend, Node.js and NestJS on the backend, with PostgreSQL or MongoDB databases." },
    { question: "How long does development take?", answer: "Custom marketing websites take 3 to 6 weeks. Complex custom web applications or SaaS portals typically take 10 to 18 weeks." },
    { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer monthly support plans covering database backups, security updates, and performance monitoring." },
  ],
  mobile: [
    { question: "Should we build with React Native or Flutter?", answer: "React Native is ideal if you want to reuse web development talent; Flutter excels at highly custom graphic interfaces. We help you choose during discovery." },
    { question: "How long does mobile app development take?", answer: "A standard mobile application takes 8 to 14 weeks. Complex systems with real-time sync may take 14 to 22 weeks." },
    { question: "Do you handle App Store submission?", answer: "Yes. We manage the entire submission process including compliance review, assets preparation, and guidelines check." },
  ],
  marketing: [
    { question: "How long before we see organic SEO results?", answer: "SEO rankings typically require 3 to 6 months of optimization to show meaningful growth. Paid advertising campaigns generate active leads from day one." },
    { question: "What reporting do you provide?", answer: "We provide weekly updates and detailed monthly dashboards tracking conversions, cost-per-lead, and pipeline value." },
    { question: "Do you manage campaigns end-to-end?", answer: "Yes. We manage keyword research, ad copy creation, conversion tracking setups, and continuous landing page optimization." },
  ],
  leadgen: [
    { question: "How many outbound leads can we expect?", answer: "Depending on target market narrowness and offer clarity, clients typically see 20 to 80 qualified B2B replies per month within 60 days." },
    { question: "Is this GDPR and CAN-SPAM compliant?", answer: "Yes. All outbound campaigns target verified business profiles with relevant, specialized business offers, complying with data privacy laws." },
    { question: "Do you set up the CRM integrations?", answer: "Yes. We set up HubSpot or Salesforce pipeline stages, alert triggers, and contact mapping fields as standard." },
  ],
  email: [
    { question: "What open rates should we expect?", answer: "With proper deliverability setups and good list hygiene, clients typically see 30% to 50% open rates." },
    { question: "How do you prevent emails going to spam?", answer: "We configure SPF, DKIM, and DMARC credentials, warm up sending servers, and filter out dead contact addresses." },
    { question: "Can you migrate us from our current provider?", answer: "Yes. We manage list exports, template transfers, automation logic migration, and database syncing setups." },
  ],
  cloud: [
    { question: "Which cloud provider do you recommend?", answer: "AWS is our default recommendation due to its advanced tools. We recommend GCP for machine learning tasks and Azure for Microsoft environments." },
    { question: "Do you offer 24/7 support?", answer: "Yes. Our DevOps retainers include proactive system monitoring and priority troubleshooting SLAs." },
    { question: "Can you migrate our existing servers?", answer: "Yes. We plan and execute server migrations using staging environments and blue-green deployment tools to prevent service interruptions." },
  ],
  ai: [
    { question: "Do we need large amounts of data?", answer: "Rarely. For most business features, leveraging pre-trained foundation APIs with custom prompt structures is faster and more cost-effective." },
    { question: "How do you ensure AI accuracy?", answer: "We enforce schema structures on model outputs and build validation scripts that check replies before they are saved to your database." },
    { question: "Is my business data safe?", answer: "No. We utilize corporate API endpoints with zero data retention setups, ensuring your business data remains isolated and secure." },
  ],
  product: [
    { question: "How quickly can you deliver an MVP?", answer: "Depending on feature complexity, standard business solutions and MVPs range from $20,000 to $60,000. We provide fixed-scope quotes." },
    { question: "Who owns the code?", answer: "You own the code completely. Zenik transfers all repository rights, databases, and structural assets directly to you." },
    { question: "Do you provide ongoing support post-launch?", answer: "Yes. We offer support packages covering server updates, security updates, and performance monitoring." },
  ],
};

function pickImage(categoryId: string, serviceId: string): string {
  const pool = categoryImages[categoryId] || categoryImages["design"];
  const idx = serviceId.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % pool.length;
  return pool[idx];
}

const categoryTaglines: Record<string, (title: string) => string> = {
  design: (title) => `Beautiful, user-centered ${title} designed for conversion.`,
  web: (title) => `High-performance ${title} built for scale and security.`,
  mobile: (title) => `Engaging ${title} built for cross-platform growth.`,
  marketing: (title) => `Data-driven ${title} focused on measurable ROI.`,
  leadgen: (title) => `Predictable ${title} to fill your sales pipeline.`,
  email: (title) => `Strategic ${title} that builds customer loyalty.`,
  cloud: (title) => `Secure, scalable ${title} for modern infrastructure.`,
  ai: (title) => `Intelligent ${title} to automate and accelerate your business.`,
  product: (title) => `Robust ${title} designed for enterprise reliability.`,
};

const categoryOverviews: Record<string, (title: string, desc: string) => string> = {
  design: (title, desc) => `${desc} Zenik's design team focuses on usability and aesthetics to deliver ${title} solutions that captivate your audience and reduce friction in the user journey.`,
  web: (title, desc) => `${desc} Our engineering team builds custom ${title} utilizing modern frameworks to ensure sub-second load times, strict security, and long-term maintainability.`,
  mobile: (title, desc) => `${desc} We deliver ${title} solutions that provide native-like experiences, optimizing battery usage, performance, and cross-platform consistency.`,
  marketing: (title, desc) => `${desc} Zenik leverages advanced analytics and targeted strategies in our ${title} services to drive qualified traffic and maximize your return on ad spend.`,
  leadgen: (title, desc) => `${desc} Our ${title} services build systematized outreach pipelines that connect you with verified decision-makers, keeping your calendar full of qualified meetings.`,
  email: (title, desc) => `${desc} With our ${title} setups, we ensure maximum deliverability and engagement through clean HTML templates and strategic automation workflows.`,
  cloud: (title, desc) => `${desc} Zenik provides enterprise-grade ${title} configurations, ensuring your systems are resilient, highly available, and cost-optimized.`,
  ai: (title, desc) => `${desc} Our ${title} implementations bring practical automation to your operations, integrating foundation models securely to reduce manual workloads.`,
  product: (title, desc) => `${desc} We architect ${title} platforms that scale seamlessly. From MVPs to full-scale SaaS, our codebases are robust, documented, and built to grow.`,
};

const categoryBenefitsList: Record<string, string[]> = {
  design: ["Pixel-perfect, conversion-optimized interfaces", "Comprehensive design systems for faster iteration", "User-tested layouts that reduce bounce rates", "Handoff-ready assets for seamless engineering integration"],
  web: ["Sub-second load times utilizing modern caching architectures", "OWASP-compliant security measures baked in", "SEO-optimized markup and server-side rendering", "Scalable databases designed for high concurrency"],
  mobile: ["Fluid 60fps animations and intuitive gestures", "Optimized payload sizes for faster app store downloads", "Cross-platform codebases that halve development costs", "Strict adherence to Apple and Google design guidelines"],
  marketing: ["Data-backed acquisition frameworks focused on ROI", "Transparent reporting on customer acquisition costs", "Continuous A/B testing for copy and creatives", "Scalable ad structures that grow with your budget"],
  leadgen: ["Verified contact lists of direct decision-makers", "Custom-written outreach scripts tailored by industry", "Automated CRM syncing for immediate sales action", "Protected sender reputation via dedicated domains"],
  email: ["Responsive layouts tested across 40+ email clients", "Strategic trigger workflows for automated nurturing", "Clean sender infrastructure (SPF, DKIM, DMARC)", "Detailed open and click-through tracking"],
  cloud: ["Automated provisioning using Infrastructure as Code", "Continuous Integration pipelines for rapid deployment", "Multi-region redundancy for zero-downtime operations", "Proactive monitoring and automated threat detection"],
  ai: ["Custom prompt engineering tailored to your business logic", "Secure API endpoints with zero data retention policies", "Automated data extraction and processing pipelines", "Seamless integration with existing operational databases"],
  product: ["Fixed-scope, rapid MVP deployment cycles", "Clean, documented code for straightforward handoffs", "Robust database schemas designed for relational complexity", "Long-term maintenance and scaling support"],
};

const categoryFeaturesList: Record<string, { title: string; description: string }[]> = {
  design: [
    { title: "User-Centered Logic", description: "Every layout decision is driven by user research and usability principles." },
    { title: "Brand Alignment", description: "We ensure strict adherence to your corporate typography and color palettes." },
    { title: "Interactive Prototypes", description: "Validate application logic with clickable prototypes before engineering begins." },
    { title: "Responsive Layouts", description: "Designs that adapt flawlessly to mobile, tablet, and desktop screens." },
    { title: "Component Libraries", description: "Standardized UI kits that maintain visual consistency." },
    { title: "Accessibility (a11y)", description: "High-contrast designs compliant with WCAG standards." },
  ],
  web: [
    { title: "Modern Tech Stack", description: "Built with industry-leading frameworks like React, Next.js, and Node.js." },
    { title: "API Integrations", description: "Seamlessly connect with third-party payment and CRM services." },
    { title: "Headless Architecture", description: "Decoupled frontends for blazing-fast content delivery." },
    { title: "Role-Based Access", description: "Secure administrative dashboards with granular user permissions." },
    { title: "Automated Testing", description: "Unit and integration tests that prevent regressions." },
    { title: "Continuous Delivery", description: "Zero-downtime deployment pipelines built into the codebase." },
  ],
  mobile: [
    { title: "Native Performance", description: "Applications optimized to utilize device hardware efficiently." },
    { title: "Offline Capabilities", description: "Local database caching to support low-connectivity usage." },
    { title: "Push Notifications", description: "Targeted alert setups to retain and engage active users." },
    { title: "App Store Compliance", description: "Strict code and UI adherence to avoid rejection notices." },
    { title: "Biometric Security", description: "Integration of FaceID and fingerprint authentication." },
    { title: "Analytics Tracking", description: "Built-in event logging to understand user journeys." },
  ],
  marketing: [
    { title: "Keyword Targeting", description: "Pinpointing high-intent search terms to drive qualified traffic." },
    { title: "Conversion Tracking", description: "Precise pixel implementations to measure exact campaign ROI." },
    { title: "Audience Segmentation", description: "Splitting user sets for highly personalized ad messaging." },
    { title: "Competitor Analysis", description: "Monitoring rival campaigns to identify market gaps." },
    { title: "Retargeting Loops", description: "Re-engaging bounced visitors across social networks." },
    { title: "Copy Optimization", description: "A/B testing headlines and descriptions for maximum CTR." },
  ],
  leadgen: [
    { title: "Data Enrichment", description: "Appending missing phone and LinkedIn data to prospect lists." },
    { title: "Multi-Channel Sequences", description: "Combining email, LinkedIn, and calls in a unified cadence." },
    { title: "Objection Handling", description: "Pre-written response templates for common sales pushbacks." },
    { title: "Deliverability Protection", description: "Rotating IP addresses and domains to avoid spam filters." },
    { title: "Lead Scoring", description: "Automated qualification systems to prioritize hot prospects." },
    { title: "CRM Sync", description: "Direct integrations pushing qualified replies into your pipeline." },
  ],
  email: [
    { title: "List Segmentation", description: "Dividing your database by behavior to increase relevance." },
    { title: "A/B Testing", description: "Experimenting with subject lines to optimize open rates." },
    { title: "Automated Triggers", description: "Emails dispatched instantly based on user actions." },
    { title: "Dark Mode Support", description: "CSS tweaks ensuring readability on inverted color settings." },
    { title: "Spam Testing", description: "Pre-send audits to guarantee inbox placement." },
    { title: "Bounce Management", description: "Automated removal of invalid addresses to protect reputation." },
  ],
  cloud: [
    { title: "Infrastructure as Code", description: "Provisioning environments via Terraform for reproducibility." },
    { title: "Auto-Scaling", description: "Server clusters that expand dynamically during traffic spikes." },
    { title: "Disaster Recovery", description: "Automated multi-region database backups and failover states." },
    { title: "Vulnerability Scanning", description: "Continuous security audits identifying outdated dependencies." },
    { title: "Log Aggregation", description: "Centralized monitoring dashboards via Datadog or ELK stack." },
    { title: "Cost Optimization", description: "Regular audits terminating unused server resources." },
  ],
  ai: [
    { title: "Custom Prompting", description: "System instructions structured for deterministic, safe outputs." },
    { title: "Vector Databases", description: "Pinecone setups for fast document retrieval (RAG)." },
    { title: "API Routing", description: "Logic that selects the cheapest model for simple queries." },
    { title: "Data Anonymization", description: "Stripping PII before sending context to external APIs." },
    { title: "Automated Workflows", description: "Replacing manual data entry with language model processing." },
    { title: "Latency Tuning", description: "Streaming responses to improve perceived user load times." },
  ],
  product: [
    { title: "Relational Architecture", description: "Clean database schemas structured for complex queries." },
    { title: "Agile Sprints", description: "Transparent, bi-weekly development cycles with live demos." },
    { title: "Payment Integration", description: "PCI-compliant setups handling subscriptions and invoices." },
    { title: "Scalable Hosting", description: "Vercel or AWS deployments configured for enterprise traffic." },
    { title: "Technical Documentation", description: "Comprehensive API specifications for future teams." },
    { title: "Post-Launch Support", description: "Dedicated retainers for feature additions and bug fixes." },
  ],
};

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

  const getTagline = categoryTaglines[categoryId] || categoryTaglines["design"];
  const tagline = getTagline(title);

  const getOverview = categoryOverviews[categoryId] || categoryOverviews["design"];
  const overview = getOverview(title, description);

  const benefits = categoryBenefitsList[categoryId] || categoryBenefitsList["design"];
  const features = categoryFeaturesList[categoryId] || categoryFeaturesList["design"];

  return {
    slug: serviceId,
    title,
    tagline,
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
