import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface HairServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const HairServicesView: React.FC<HairServicesViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const hairWhatsappMsg = "Hello Alle'nora Annie's Signature Salon, I would like to inquire about hair services.";

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Professional Hair Care & Styling
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
              Hair Services <br />
              <span className="italic font-light text-[#521528]">& Styling Care</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
              From occasion-ready up-dos and voluminous blowouts to deep conditioning and keratin smoothing treatments, our salon provides professional hair services designed to keep your hair healthy, manageable, and beautifully styled.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenAppointmentModal('Hair Services')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Ask About Hair Services
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(hairWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Hair Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.hair}
                alt="Hair care and styling session at Alle'nora Annie's Signature Salon"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Hair Disciplines
            </p>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              Styling & Care Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Hair Styling
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Expert salon styling tailored to your face shape, event attire, and personal style for polished everyday or festive elegance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Occasion-Ready Hair
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Structured buns, romantic half-up styles, Hollywood waves, and traditional veil-secured hair settings for weddings and parties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Hair Care & Washes
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Nourishing hair washing and conditioning routines designed to cleanse, untangle, and prime strands for heat styling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Hair Transformations
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Personalized consultations for dramatic aesthetic changes, texture management, and long-term hair health planning.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Keratin Spotlight Box */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 lg:p-10 border border-[#E8DFD5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8A2B43]">
              Highlighted in Customer Reviews
            </span>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              Specialized Keratin Treatment Inquiries
            </h2>
            <p className="text-sm text-[#5A4F46] leading-relaxed">
              Keratin treatment is specifically referenced in our customer reviews (including feedback from Ali Husnain regarding a positive salon visit). If you are considering a keratin smoothing treatment, visit our dedicated hair treatment page to learn more about the consultation process, condition review, and aftercare expectations.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('hair-treatments')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Explore Keratin Treatment &rarr;
              </button>
              <button
                onClick={() => onOpenAppointmentModal('Keratin Treatment')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#F2EAE0] rounded-full transition-colors cursor-pointer"
              >
                Inquire With Salon
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-2 text-xs text-[#6B5E55]">
            <p className="font-serif text-base font-bold text-[#3A1420]">
              Verified Feedback Theme
            </p>
            <p className="italic">
              "Customer reviews highlight professional handling of keratin hair treatments and attentive salon staff."
            </p>
            <p className="text-[11px] text-[#8A796D] pt-1">
              Contact the salon for current availability, pricing and service details.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
            Have Questions About Hair Services?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5E55]">
            Reach out directly to speak with our front desk team regarding hair consultation slots.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] rounded-full hover:bg-[#681c33] transition-colors"
            >
              Call Front Desk: {SALON_INFO.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(hairWhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#25D366] rounded-full hover:bg-[#20ba5a] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
