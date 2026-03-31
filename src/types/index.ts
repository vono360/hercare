export interface Service {
  num: string;
  name: string;
  slug: string;
  shortDesc: string;
  relatedSlugs: string[];
}

export interface ServiceContent {
  slug: string;
  title: string;
  metaDescription: string;
  overview: string[];
  approach: string[];
  expectations: string[];
  signs: string[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  coverImage?: string;
}
