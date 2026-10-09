import React from 'react';
import { PageId } from '../types';
import { SALON_INFO, SERVICES_LIST, REAL_REVIEWS, REVIEW_THEMES } from '../data/salonData';
import { TrustStrip } from '../components/TrustStrip';
import {
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Heart,
  ShieldCheck,
  CheckCircle,
  Star,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section
        aria-label="Welcome to Alle'nora Annie's Signature Salon"
        className="relative bg-[#FAF8F5] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#E8DFD5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Copy */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
                <span>Faisalabad</span>
                <span aria-hidden="true" className="text-[#C5A880]">·</span>
                <span>D Ground, People's Colony</span>
                <span aria-hidden="true" className="text-[#C5A880]">·</span>
                <span>Women's Beauty Salon</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-[1.12] tracking-tight">
                Your Signature <br />
                <span className="italic font-light text-[#521528]">Beauty Experience</span> <br />
                Begins Here.
              </h1>

              <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed max-w-xl font-normal">
                Discover a refined salon experience designed around beauty, confidence and personal care at Alle'nora Annie's Signature Salon in Faisalabad.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenAppointmentModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide text-white bg-[#521528] hover:bg-[#681c33] active:bg-[#3D0F1D] rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E6C9A2]" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#F5EFE6] rounded-full shadow-2xs transition-colors cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#8A2B43]" />
                </button>
              </div>

              {/* Quiet Meta Trust Line */}
              <div className="pt-4 flex items-center gap-4 text-xs text-[#7A6C62]">
                <div className="flex items-center gap-1 text-[#C5A880]">
                  <Star className="w-3.5 h-3.5 fill-[#C5A880]" />
                  <span className="font-semibold text-[#3A1420] tabular-nums">4.1 / 5</span>
                </div>
                <span aria-hidden="true">·</span>
                <span>406 Google Reviews</span>
                <span aria-hidden="true">·</span>
                <span>Closes at 8 PM</span>
              </div>
            </div>

            {/* Right Column: High-End Hero Editorial Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative subtle border frame */}
                <div className="absolute -inset-3 rounded-2xl border border-[#D9CEC1]/60 -rotate-1 hidden sm:block pointer-events-none" />
                
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#F0EAE1]">
                  <img
                    src={SALON_INFO.images.hero}
                    alt="Alle'nora Annie's Signature Salon bridal beauty editorial showcasing intricate traditional styling"
                    className="w-full h-auto object-cover aspect-16/11 lg:aspect-16/10"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle luxury scrim at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D131C]/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#E6C9A2] font-medium">
                        Signature Artistry
                      </p>
                      <p className="font-serif text-lg sm:text-xl font-medium text-white/95">
                        Occasion & Bridal Excellence
                      </p>
                    </div>
                    <span className="text-xs text-[#E8DFD5] bg-[#2D131C]/80 px-2.5 py-1 rounded-full backdrop-blur-xs">
                      Faisalabad
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. INTRODUCTION SECTION */}
      <section
        aria-label="About Our Beauty Philosophy"
        className="py-16 lg:py-24 bg-[#FAF8F5]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Dedicated Beauty Sanctuary
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3A1420] font-normal leading-tight">
            Beauty, Styled With Intention
          </h2>
          <div className="w-16 h-px bg-[#C5A880] mx-auto" />
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed font-normal">
            Alle'nora Annie's Signature Salon provides a dedicated beauty environment where women can explore bridal artistry, celebration makeup, specialized hair care, and comforting skincare services. Located at D Ground, People's Colony No 1, our salon is committed to personal attention, gentle technique, and creating occasion-ready looks that inspire confidence.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#521528] hover:text-[#781f3b] transition-colors group cursor-pointer"
            >
              <span>Discover Our Salon</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION */}
      <section
        aria-label="Our Salon Services Preview"
        className="py-16 lg:py-24 bg-[#F5EFE6]/50 border-t border-[#E8DFD5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold mb-2">
                Curated Offerings
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
                Services Tailored to Your Occasion
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8A2B43] hover:text-[#521528] transition-colors cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <article
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#E8DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Service Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFE8DD]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-[#8A2B43] font-semibold">
                      {service.category}
                    </p>
                    <h3 className="font-serif text-2xl text-[#3A1420] font-medium group-hover:text-[#521528] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 text-xs text-[#5A4F46] pt-2 border-t border-[#F0EAE1]">
                    {service.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onNavigate(service.pageId)}
                      className="text-xs font-semibold text-[#521528] hover:text-[#781f3b] transition-colors cursor-pointer"
                    >
                      View Service &rarr;
                    </button>
                    <button
                      onClick={() => onOpenAppointmentModal(service.title)}
                      className="text-xs font-semibold px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#521528] hover:text-white text-[#3A1420] rounded-md border border-[#D9CEC1] transition-colors cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SIGNATURE SERVICES SECTION (EDITORIAL FEATURE) */}
      <section
        aria-label="Signature Editorial Highlights"
        className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Editorial Spotlight
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
              Signature Pillars of Our Salon
            </h2>
            <p className="text-sm text-[#6B5E55]">
              Experience curated beauty disciplines where personalized artistry meets tranquil care.
            </p>
          </div>

          {/* Feature 1: Bridal Looks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F2EC] rounded-2xl p-6 sm:p-10 border border-[#E8DFD5]">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-[#8A2B43] tracking-widest uppercase">
                01. Bridal Looks
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
                Your Wedding Day. Your Signature Look.
              </h3>
              <p className="text-sm text-[#5A4F46] leading-relaxed">
                Every bride deserves styling that honors her heritage, complements her wedding attire, and illuminates her natural presence. We discuss your event lighting, veil placement, and skin undertones for photography-ready beauty that endures.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('bridal')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
                >
                  Explore Bridal Artistry
                </button>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello, I would like to inquire about bridal makeup at Alle'nora Annie's Signature Salon."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Bridal Desk</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg bg-stone-100">
                <img
                  src={SALON_INFO.images.bridal}
                  alt="Bridal makeup styling at Alle'nora Annie's Signature Salon"
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Facial Care & Skincare */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F2EC] rounded-2xl p-6 sm:p-10 border border-[#E8DFD5]">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg bg-stone-100">
                <img
                  src={SALON_INFO.images.skincare}
                  alt="Facial care environment at Alle'nora Annie's Signature Salon"
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-mono text-[#8A2B43] tracking-widest uppercase">
                02. Facial Care
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
                Gentle Touch & Sensitive-Skin Consideration
              </h3>
              <p className="text-sm text-[#5A4F46] leading-relaxed">
                As reflected in customer reviews from Nayab Saddiqe and Safoora Iftikhar, our facial care approach is patient and attentive. We take the time to understand personal skin sensitivities, applying soothing techniques designed for pure skin refreshment.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('facial-skincare')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
                >
                  View Facial & Skincare
                </button>
                <button
                  onClick={() => onOpenAppointmentModal('Facial & Skincare')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#F2EAE0] rounded-full transition-colors cursor-pointer"
                >
                  Inquire About Facial
                </button>
              </div>
            </div>
          </div>

          {/* Feature 3: Hair Treatments & Keratin */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F2EC] rounded-2xl p-6 sm:p-10 border border-[#E8DFD5]">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-[#8A2B43] tracking-widest uppercase">
                03. Hair Treatments
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
                Keratin Treatment & Professional Smoothing
              </h3>
              <p className="text-sm text-[#5A4F46] leading-relaxed">
                Referenced in our customer feedback, keratin treatments provide enhanced manageability, silky smoothness, and frizz resistance. Our salon specialists conduct an initial hair condition check to ensure proper application and post-care guidance.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('hair-treatments')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
                >
                  Learn About Keratin
                </button>
                <button
                  onClick={() => onOpenAppointmentModal('Keratin Treatment')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#F2EAE0] rounded-full transition-colors cursor-pointer"
                >
                  Schedule Hair Check
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg bg-stone-100">
                <img
                  src={SALON_INFO.images.hair}
                  alt="Professional hair care and keratin styling results"
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHY CLIENTS CHOOSE THE EXPERIENCE */}
      <section
        aria-label="Why Clients Choose Alle'nora Annie's"
        className="py-16 lg:py-24 bg-[#F5EFE6]/60 border-t border-[#E8DFD5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              The Salon Experience
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
              Why Clients Choose Our Salon
            </h2>
            <p className="text-sm text-[#6B5E55]">
              Themes substantiated by customer visits and reviews in Faisalabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <Heart className="w-6 h-6 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Personal Attention
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                We take the time to listen to your preferences, event details, and style expectations before every session begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Sensitive-Skin Care
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                Particularly noted by facial clients, our gentle application and respectful pacing honor sensitive skin concerns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <Sparkles className="w-6 h-6 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Occasion-Ready Artistry
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                From intricate bridal styling to sophisticated evening party glam, we craft looks made for celebration lights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <CheckCircle className="w-6 h-6 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Hair & Skin in One Place
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5E55] leading-relaxed">
                Keratin treatments, hair blowouts, facial sessions, and makeup artistry seamlessly coordinated under one roof.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CUSTOMER REVIEW HIGHLIGHT SECTION */}
      <section
        aria-label="Verified Customer Feedback"
        className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#E8DFD5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold mb-2">
                Customer Voices
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
                Feedback From Our Clients
              </h2>
              <div className="flex items-center gap-2 text-xs text-[#7A6C62] mt-2">
                <span className="font-semibold text-[#8A2B43]">4.1 / 5</span>
                <span>based on 406 Google reviews</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8A2B43] hover:text-[#521528] transition-colors cursor-pointer"
            >
              <span>Read All Review Themes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#FBF9F6] p-6 sm:p-7 rounded-xl border border-[#E8DFD5] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#C5A880]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8A2B43]">
                    {review.verifiedTheme}
                  </p>
                  <p className="text-sm text-[#4A3E37] leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD5]">
                  <p className="font-serif font-bold text-[#3A1420] text-base">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#8A796D]">
                    {review.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Review Themes pill-free strip */}
          <div className="mt-12 p-6 bg-[#F5EFE6] rounded-xl border border-[#E8DFD5]">
            <p className="text-xs uppercase tracking-wider text-[#8A2B43] font-semibold mb-3">
              Common Themes in Customer Feedback:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs text-[#5A4F46]">
              {REVIEW_THEMES.map((theme, i) => (
                <div key={i} className="p-2 border-l-2 border-[#C5A880] bg-white/60">
                  <span className="font-semibold text-[#3A1420] block">{theme.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. CONVERSION CALLOUT SECTION */}
      <section
        aria-label="Book or Inquire About an Appointment"
        className="py-16 bg-[#3A1420] text-white border-t border-[#521528]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#E6C9A2] font-semibold">
            Visit Us in People's Colony No 1, Faisalabad
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            Reserve Your Salon Experience
          </h2>
          <p className="text-sm sm:text-base text-[#D3C3B5] max-w-xl mx-auto leading-relaxed">
            Contact the salon for current availability, pricing and service details. Our team is available by phone and WhatsApp to answer questions and schedule your visit.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full shadow-md transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                SALON_INFO.defaultWhatsappMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#E8DFD5] border border-[#6B394A] hover:bg-[#4C1C2C] rounded-full transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E6C9A2]" />
              <span>Call: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-xs text-[#9E8B7F] pt-2">
            36-D Imam Hussain Road, D Ground Block D, People's Colony No 1, Faisalabad
          </p>
        </div>
      </section>

    </div>
  );
};
