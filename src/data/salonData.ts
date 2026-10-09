import { CustomerReview, FaqItem, GalleryItem, ServiceItem } from '../types';

import heroBridalImg from '../assets/images/hero_salon_bridal_1791469853798.jpg';
import bridalLookImg from '../assets/images/service_bridal_look_1791469870504.jpg';
import partyMakeupImg from '../assets/images/service_party_makeup_1791469885014.jpg';
import hairTreatmentImg from '../assets/images/service_hair_treatment_1791469901145.jpg';
import facialSkincareImg from '../assets/images/service_facial_skincare_1791469916681.jpg';

export const SALON_INFO = {
  name: "Alle'nora Annie's Signature Salon",
  shortName: "Alle'nora Annie's",
  tagline: "Your Signature Beauty Experience Begins Here",
  address: "36-D Imam Hussain Road, D Ground Block D, People's Colony No 1, Faisalabad, Pakistan",
  city: "Faisalabad",
  area: "D Ground Block D, People's Colony No 1",
  phone: "+92 301 8666055",
  phoneRaw: "+923018666055",
  phoneDisplay: "0301 8666055",
  whatsappNumber: "923018666055",
  rating: 4.1,
  reviewCount: 406,
  hours: "Open, closes at 8 PM",
  hoursNotice: "Currently listed as closing at 8 PM. Please contact the salon directly to confirm current hours and slot availability before visiting.",
  defaultWhatsappMsg: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about an appointment.",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Alle%27nora+Annie%27s+Signature+Salon+36-D+Imam+Hussain+Road+D+Ground+Block+D+Peoples+Colony+No+1+Faisalabad",
  images: {
    hero: heroBridalImg,
    bridal: bridalLookImg,
    party: partyMakeupImg,
    hair: hairTreatmentImg,
    skincare: facialSkincareImg,
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    pageId: 'bridal',
    title: 'Bridal Makeup',
    category: 'Bridal Beauty',
    tagline: 'Refined artistry for your most memorable celebration',
    description: 'Bespoke bridal styling crafted for wedding celebrations in Faisalabad. Every look emphasizes individual facial features, harmonious dupata setting, and radiant photography-ready finish.',
    image: bridalLookImg,
    highlights: [
      'Personalized bridal consultation',
      'Skin preparation and tone matching',
      'Occasion-ready hair styling and dupatta setting',
      'Long-wearing finish designed for wedding lights'
    ],
    ctaLabel: 'Inquire About Bridal Makeup',
    whatsappMessage: "Hello, I would like to inquire about bridal makeup at Alle'nora Annie's Signature Salon."
  },
  {
    id: 'party-makeup',
    pageId: 'party-makeup',
    title: 'Party & Event Makeup',
    category: 'Occasion Artistry',
    tagline: 'Sophisticated glamour for special events and festivities',
    description: 'Polished occasion looks tailored to daytime functions, dholaks, mehendi, and evening receptions. Designed to leave you feeling confident, fresh, and effortlessly elegant.',
    image: partyMakeupImg,
    highlights: [
      'Customized eye styling and soft-focus complexion',
      'Event-specific color palette coordination',
      'Complementary hairstyle and drape setting',
      'Comfortable, lightweight all-evening wear'
    ],
    ctaLabel: 'Book Party Makeup',
    whatsappMessage: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about party makeup availability."
  },
  {
    id: 'hair-services',
    pageId: 'hair-services',
    title: 'Hair Services',
    category: 'Hair Styling & Care',
    tagline: 'Professional salon hair styling and condition care',
    description: 'Dedicated hair care and styling for everyday refinement and celebration moments. Discuss your hair texture and desired aesthetic with our salon specialists.',
    image: hairTreatmentImg,
    highlights: [
      'Occasion-ready hair blowouts and styling',
      'Texture assessment and personalized recommendations',
      'Volume, waves, and structured up-dos',
      'Salon hair care maintenance inquiries'
    ],
    ctaLabel: 'Ask About Hair Services',
    whatsappMessage: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about hair services."
  },
  {
    id: 'hair-treatments',
    pageId: 'hair-treatments',
    title: 'Hair Treatments',
    category: 'Specialized Hair Care',
    tagline: 'Keratin treatment and conditioning inquiries',
    description: 'Highlighted in customer feedback, professional keratin treatment inquiries offer smoothing and manageable hair discipline tailored to individual hair health.',
    image: hairTreatmentImg,
    highlights: [
      'Keratin treatment consultation',
      'Hair condition and texture discussion',
      'Smoothing discipline and post-care guidance',
      'Maintenance tips for long-lasting salon results'
    ],
    ctaLabel: 'Inquire About Keratin Treatment',
    whatsappMessage: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about keratin treatment details and availability."
  },
  {
    id: 'facial-skincare',
    pageId: 'facial-skincare',
    title: 'Facial & Skincare',
    category: 'Facial Care',
    tagline: 'Gentle, attentive facial care with sensitive-skin consideration',
    description: 'Supported by authentic customer feedback, our facial services prioritize individual skin comfort, gentle product application, and a restful salon atmosphere.',
    image: facialSkincareImg,
    highlights: [
      'Attentive evaluation of personal skin concerns',
      'Gentle technique suitable for sensitive skin',
      'Comfort-focused soothing salon environment',
      'Post-facial home hydration and care advice'
    ],
    ctaLabel: 'Inquire About Facial Services',
    whatsappMessage: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about facial and skincare services."
  },
  {
    id: 'beauty-personal-care',
    pageId: 'beauty-care',
    title: 'Beauty & Personal Care',
    category: 'Personal Grooming',
    tagline: 'Dedicated personal grooming and salon self-care',
    description: 'A broader selection of personal grooming and beauty preparation services designed to help you prepare for events or enjoy regular salon self-care.',
    image: facialSkincareImg,
    highlights: [
      'Pre-event grooming and grooming touch-ups',
      'Dedicated private salon spaces',
      'Clean hygiene protocols and client comfort',
      'Comprehensive head-to-toe beauty inquiries'
    ],
    ctaLabel: 'Inquire About Beauty Care',
    whatsappMessage: "Hello Alle'nora Annie's Signature Salon, I would like to inquire about personal care and grooming services."
  }
];

export const REAL_REVIEWS: CustomerReview[] = [
  {
    author: "Nayab Saddiqe",
    context: "Facial Care Customer",
    comment: "Mentioned that her facial was beautifully done by Saadia and that she was very happy with the result and radiant feel.",
    verifiedTheme: "Facial Service Satisfaction",
    rating: 5
  },
  {
    author: "Safoora Iftikhar",
    context: "Sensitive-Skin Facial Customer",
    comment: "Praised Yasmeen's facial work, particularly the careful consideration of sensitive-skin concerns and the soothing, gentle approach throughout.",
    verifiedTheme: "Sensitive-Skin Consideration",
    rating: 5
  },
  {
    author: "Ali Husnain",
    context: "Keratin Treatment Feedback",
    comment: "Shared positive feedback regarding a keratin-treatment salon visit, noting professional handling and smooth hair results.",
    verifiedTheme: "Keratin Treatment & Staff Politeness",
    rating: 5
  }
];

export const REVIEW_THEMES = [
  {
    title: "Facial Experience",
    description: "Clients regularly highlight comforting, thorough facial sessions that leave the skin refreshed."
  },
  {
    title: "Keratin Treatment",
    description: "Repeated customer appreciation for smooth hair handling, frizz control, and disciplined styling."
  },
  {
    title: "Sensitive-Skin Consideration",
    description: "Careful attention given to gentle formulas and cautious handling for delicate skin types."
  },
  {
    title: "Staff Politeness",
    description: "Courteous, helpful staff members committed to making each salon visit relaxing and respectful."
  },
  {
    title: "Beauty Service Satisfaction",
    description: "Consistent positive remarks from local Faisalabad clients for occasion and grooming care."
  }
];

export const SALON_FAQS: FaqItem[] = [
  {
    question: "How can I book an appointment?",
    answer: "You can easily schedule or inquire about an appointment by calling the salon directly at +92 301 8666055 or sending a WhatsApp message. Our reception team will confirm date and timing availability."
  },
  {
    question: "Where is the salon located?",
    answer: "We are located at 36-D Imam Hussain Road, D Ground Block D, People's Colony No 1, Faisalabad, Pakistan."
  },
  {
    question: "What time does the salon close?",
    answer: "The provided listing currently shows the salon closes at 8 PM. We always advise clients to get in touch before arriving to verify current hours and book their preferred time slot."
  },
  {
    question: "Do you offer bridal makeup?",
    answer: "Yes, bridal makeup is one of our central signature offerings. We invite prospective brides to contact us in advance on WhatsApp or phone for consultation availability and wedding date scheduling."
  },
  {
    question: "Do you offer party makeup?",
    answer: "Yes, party makeup for birthdays, wedding guests, family celebrations, and special gatherings is regularly provided. Please reach out to reserve your date and time."
  },
  {
    question: "Do you offer facial services?",
    answer: "Yes, facial services are supported by our clients' authentic feedback. We provide gentle facial sessions with careful consideration for sensitive skin and personal comfort."
  },
  {
    question: "Do you offer keratin treatment?",
    answer: "Yes, keratin treatment is explicitly referenced in our customer reviews. Please contact the salon directly for details, hair evaluation, and appointment booking."
  },
  {
    question: "How do I ask about current prices?",
    answer: "Because services are tailored to individual client requirements and current salon availability, please contact the salon directly via phone or WhatsApp for accurate, up-to-date pricing."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Signature Pakistani Bridal Look',
    category: 'Bridal',
    image: heroBridalImg,
    description: 'Traditional regal bridal styling with warm tones, sculpted eyes, and classic velvet dupatta drape.'
  },
  {
    id: 'g-2',
    title: 'Classic Wedding Day Artistry',
    category: 'Bridal',
    image: bridalLookImg,
    description: 'Dewy skin, intricate jewelry setting, and deep wine lip statement for a timeless bridal entrance.'
  },
  {
    id: 'g-3',
    title: 'Glamour Party & Reception Look',
    category: 'Party Looks',
    image: partyMakeupImg,
    description: 'Modern smokey eye finish, luminous cheekbones, and soft waves suited for celebrations.'
  },
  {
    id: 'g-4',
    title: 'Keratin Smoothing & Silk Blowout',
    category: 'Hair',
    image: hairTreatmentImg,
    description: 'Ultra-smooth, glossy finish resulting from professional salon hair care and keratin styling.'
  },
  {
    id: 'g-5',
    title: 'Gentle Facial Care Setting',
    category: 'Facial & Beauty',
    image: facialSkincareImg,
    description: 'Serene salon treatment atmosphere dedicated to skin relaxation, hydration, and soothing care.'
  },
  {
    id: 'g-6',
    title: 'Occasion Hair & Veil Placement',
    category: 'Hair',
    image: heroBridalImg,
    description: 'Delicate hair preparation and traditional headpiece placement for long-lasting event comfort.'
  }
];

export const APPROACH_STEPS = [
  {
    number: "01",
    title: "Understand Your Look",
    description: "We begin by understanding your personal style preference, upcoming event requirements, and comfort boundaries."
  },
  {
    number: "02",
    title: "Discuss Your Beauty Needs",
    description: "Our beauty specialists discuss your skin type, hair texture, and any sensitivities to plan the session safely."
  },
  {
    number: "03",
    title: "Personalize the Service",
    description: "Every step is calibrated—from foundation shade matching and color tones to gentle facial pressure."
  },
  {
    number: "04",
    title: "Create the Look",
    description: "With focused care, our team applies artistic techniques to bring your hair, makeup, or skincare treatment to life."
  },
  {
    number: "05",
    title: "Final Beauty Check",
    description: "Before you leave our salon, we review the finished style together in proper salon lighting to ensure your complete confidence."
  }
];
