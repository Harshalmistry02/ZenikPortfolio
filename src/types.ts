export interface User {
  email: string;
  isLoggedIn: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  // Fields added by allServices flatMap enrichment
  categoryId?: string;
  categoryName?: string;
  color?: string;
  bg?: string;
  borderColor?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  bg: string;
  borderColor: string;
  services: ServiceItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  category: "Web" | "Mobile" | "Cybersecurity" | "UI/UX" | "Marketing" | "AI" | "Cloud";
  image: string;
  description: string;
  technologies: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProcessStep {
  num: string;
  name: string;
  description: string;
  iconName: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TrustBadge {
  title: string;
  subtitle?: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  requirements: string[];
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  monthlyPrice?: string;
  annualPrice?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
}
