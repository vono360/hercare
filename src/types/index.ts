export interface Service {
  num: string;
  name: string;
  slug: string;
  shortDesc: string;
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
