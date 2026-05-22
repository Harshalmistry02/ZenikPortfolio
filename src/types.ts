export interface User {
  email: string;
  isLoggedIn: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "Cybersecurity" | "UI/UX";
  image: string;
  description: string;
  technologies: string[];
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

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
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
