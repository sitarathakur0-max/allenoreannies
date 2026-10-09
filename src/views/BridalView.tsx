import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Calendar, CheckCircle2, HelpCircle } from 'lucide-react';

interface BridalViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const BridalView: React.FC<BridalViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const bridalWhatsappMsg = "Hello, I would like to inquire about bridal makeup at Alle'nora Annie's Signature Salon.";

  const bridalFaqs = [
    {
      q: "When should I inquire about my wedding date?",
      a: "Because wedding dates in Faisalabad are scheduled in advance, we recommend contacting the salon as early as possible to verify makeup artist availability."
    },
    {
      q: "Do you assist with dupatta setting and jewelry placement?",
      a: "Yes, traditional dupatta draping, matha patti/tikka placement, and jewelry security are an integral part of your bridal styling session."
    },
    {
      q: "How can I inquire about bridal prices?",
      a: "Contact the salon directly via phone (+92 301 8666055) or WhatsApp for current availability, pricing, and service details."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Bridal Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Signature Bridal Artistry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
              Your Wedding Day. <br />
              <span className="italic font-light text-[#521528]">Your Signature Look.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
              Bridal makeup is an artistry of personalization, balance, and cultural elegance. At Alle'nora Annie's Signature Salon in Faisalabad, we craft timeless bridal beauty that complements your wedding ensemble, highlights your natural beauty, and remains radiant from your entrance to the final portraits.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(bridalWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenAppointmentModal('Bridal Makeup')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Inquire About Bridal Makeup
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.bridal}
                alt="Classic Pakistani bridal beauty styling at Alle'nora Annie's Signature Salon"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Section: Bridal Consultation & Personalization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Bridal Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              Before your big day, discuss your dress color, jewelry details, personal aesthetic preference (soft and dewy vs. classic defined glam), and any skin sensitivities with our team.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Skin Preparation
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              Achieving a flawless bridal complexion relies on thoughtful preparation. We review skin hydration and pre-wedding facial timelines to ensure optimal makeup longevity and glow.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Wedding-Day Beauty
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              On your wedding day, enjoy a composed and attentive salon environment. Our team coordinates makeup, hairstyle structure, and secure dupatta draping with meticulous precision.
            </p>
          </div>
        </div>

        {/* Look Inspiration & Atmosphere */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 lg:p-12 border border-[#E8DFD5] space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Look Inspiration
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3A1420] font-normal">
              Harmony in Every Detail
            </h2>
            <p className="text-sm text-[#5A4F46] leading-relaxed">
              Whether you are preparing for a vibrant Mehendi, a grand Barat, or an ethereal Walima, our makeup artists adjust eye tones, lip depth, and contour definition to harmonize seamlessly with Pakistani wedding traditions and photography lighting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="bg-white p-4 rounded-lg border border-[#E8DFD5] space-y-1">
              <span className="font-serif text-base font-bold text-[#3A1420] block">Barat Glamour</span>
              <p className="text-[#6B5E55]">Traditional rich reds, defined smoky contour, and statement jewelry setting.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E8DFD5] space-y-1">
              <span className="font-serif text-base font-bold text-[#3A1420] block">Walima Elegance</span>
              <p className="text-[#6B5E55]">Soft champagne pastels, dewy radiance, and modern editorial styling.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E8DFD5] space-y-1">
              <span className="font-serif text-base font-bold text-[#3A1420] block">Mehendi Vibrance</span>
              <p className="text-[#6B5E55]">Fresh, luminous skin with playful warmth and durable floral braid settings.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#E8DFD5] space-y-1">
              <span className="font-serif text-base font-bold text-[#3A1420] block">Engagement / Nikkah</span>
              <p className="text-[#6B5E55]">Understated sophistication, soft shimmer, and delicate hair elegance.</p>
            </div>
          </div>
        </div>

        {/* Bridal FAQs */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#3A1420] font-normal">
            Bridal Inquiries & Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {bridalFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#E8DFD5] space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#3A1420] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#8A2B43] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion CTA Box */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Planning Your Wedding Day Beauty?
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-xl mx-auto leading-relaxed">
            Contact the salon for current availability, pricing and service details. We encourage brides to reach out via WhatsApp or phone to coordinate wedding date slots.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(bridalWhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-[#1C1917]" />
              <span>Inquire About Bridal Makeup</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#8A2B43] hover:bg-[#681c33] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E6C9A2]" />
              <span>Call Salon: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
