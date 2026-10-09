import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HairTreatmentsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const HairTreatmentsView: React.FC<HairTreatmentsViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const keratinWhatsappMsg = "Hello Alle'nora Annie's Signature Salon, I would like to inquire about keratin treatment details and appointment availability.";

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Specialized Salon Hair Care
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
              Keratin Treatment <br />
              <span className="italic font-light text-[#521528]">& Hair Care Inquiries</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
              Explicitly highlighted in authentic customer feedback, keratin treatments at Alle'nora Annie's Signature Salon are designed to smooth frizz, enhance natural shine, and improve daily hair discipline for clients in Faisalabad.
            </p>
            <p className="text-xs text-[#8A796D] italic">
              Note: Results vary based on individual hair condition, density, and maintenance routines. We do not make permanent or medical hair claims. Contact the salon for current availability, pricing and service details.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenAppointmentModal('Keratin Treatment')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Inquire About Keratin Treatment
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(keratinWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Salon Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.hair}
                alt="Keratin treatment and glossy hair styling at Alle'nora Annie's Signature Salon"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Keratin Inquiry */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              The Consultation Framework
            </p>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              What to Expect From Your Treatment Inquiry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono text-[#8A2B43] uppercase tracking-wider">Step 1</span>
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Initial Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                We sit down with you to review your hair styling habits, previous chemical or coloring treatments, and everyday hair struggles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono text-[#8A2B43] uppercase tracking-wider">Step 2</span>
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Hair Condition Discussion
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Our specialists examine your hair texture, porosity, and curl pattern to set realistic expectations on smoothing and texture refinement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono text-[#8A2B43] uppercase tracking-wider">Step 3</span>
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Treatment Inquiry & Timing
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                We schedule a dedicated salon time window to ensure careful application, rinsing, and thermal sealing without rushing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono text-[#8A2B43] uppercase tracking-wider">Step 4</span>
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Aftercare Discussion
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Guidance on sulfate-free shampoos, washing frequency, heat protection, and maintenance habits to protect your salon finish.
              </p>
            </div>

          </div>
        </div>

        {/* Client Feedback Connection */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 lg:p-10 border border-[#E8DFD5] space-y-4">
          <div className="flex items-center gap-2 text-[#8A2B43]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-serif text-2xl text-[#3A1420]">
              Grounded in Real Customer Experience
            </h3>
          </div>
          <p className="text-sm text-[#5A4F46] leading-relaxed max-w-3xl">
            In our Google review history, client feedback (such as comments from Ali Husnain regarding a keratin-treatment visit) reflects our salon's polite staff conduct and dedicated hair treatment handling. We treat every client's hair with focused care and honest counsel.
          </p>
        </div>

        {/* CTA Box */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-5">
          <h2 className="font-serif text-3xl font-normal">
            Discuss Your Hair With Our Salon
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-lg mx-auto">
            Contact the salon for current availability, pricing and service details. Our team is ready to answer your questions by WhatsApp or phone.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal('Keratin Treatment')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Inquire About Keratin Treatment
            </button>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#8A2B43] hover:bg-[#681c33] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C9A2]" />
              <span>Call: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
