export interface SiteSettings {
  _id?: string;
  _type?: "siteSettings";
  title?: string;
  companyName?: string;
  tagline?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  schedule?: string;
  nav?: Array<{
    _key?: string;
    label: string;
    url: string;
  }>;
  social?: Array<{
    _key?: string;
    platform: string;
    url: string;
  }>;
  logoUrl?: string;
  ogImageUrl?: string;
}

export interface StatCounter {
  _key?: string;
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

export interface HeroSettings {
  _id?: string;
  _type?: "heroSettings";
  badge?: string;
  titlePart1?: string;
  titlePart2?: string;
  tagline?: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  trustBadges?: string[];
  statCounters?: StatCounter[];
  backgroundVideoUrl?: string;
}

export interface Pillar {
  _key?: string;
  title: string;
  description: string;
}

export interface AboutSection {
  _id?: string;
  _type?: "aboutSection";
  badge?: string;
  heading?: string;
  subheading?: string;
  content?: string;
  founderName?: string;
  founderRole?: string;
  founderImageUrl?: string;
  pillars?: Pillar[];
}

export interface PracticeArea {
  _id: string;
  _type?: "practiceArea";
  title: string;
  slug: string;
  shortDescription?: string;
  fullDescription?: string;
  iconType?: string;
  services?: string[];
  order?: number;
}

export interface Lawyer {
  _id: string;
  _type?: "lawyer";
  name: string;
  role?: string;
  specialty?: string;
  colegiateNumber?: string;
  bio?: string;
  imageUrl?: string;
  order?: number;
}

export interface Testimonial {
  _id: string;
  _type?: "testimonial";
  clientName: string;
  caseType?: string;
  quote: string;
  rating?: number;
  order?: number;
}

export interface FaqItem {
  _id: string;
  _type?: "faqItem";
  question: string;
  answer: string;
  category?: string;
  order?: number;
}
