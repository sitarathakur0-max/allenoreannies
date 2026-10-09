export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'bridal'
  | 'party-makeup'
  | 'hair-services'
  | 'hair-treatments'
  | 'facial-skincare'
  | 'beauty-care'
  | 'experience'
  | 'approach'
  | 'gallery'
  | 'reviews'
  | 'faq'
  | 'appointment'
  | 'contact'
  | 'visit-us';

export interface ServiceItem {
  id: string;
  pageId: PageId;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface CustomerReview {
  author: string;
  context: string;
  comment: string;
  verifiedTheme: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Party Looks' | 'Hair' | 'Facial & Beauty';
  image: string;
  description: string;
}
