import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface FacialSkincareViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const FacialSkincareView: React.FC<FacialSkincareViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const facialWhatsappMsg = "Hello Alle'nora Annie's Signature Salon, I would like to inquire about facial and skincare services.";

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Restorative Skincare & Facial Care
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
              Facial & Skincare <br />
              <span className="italic font-light text-[#521528]">Care Tailored to You</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
              A serene beauty environment centered on gentle application, soothing techniques, and individual skin comfort. Supported by real client praise from Nayab Saddiqe and Safoora Iftikhar, our facial services prioritize attentive care for all skin types, including sensitive skin.
            </p>
            <p className="text-xs text-[#8A796D] italic">
              Notice: Our salon provides cosmetic beauty and relaxation facials. We do not provide medical dermatological treatments or diagnose clinical conditions.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenAppointmentModal('Facial & Skincare')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Inquire About Facial Services
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(facialWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Skincare Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.skincare}
                alt="Serene facial care environment at Alle'nora Annie's Signature Salon"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 5 Core Required Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Facial Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl border border-[#E8DFD5]">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">Section 01</span>
              <h2 className="font-serif text-3xl text-[#3A1420]">Facial Care Philosophy</h2>
              <p className="text-sm text-[#5A4F46] leading-relaxed">
                Facial sessions at our salon are designed to hydrate, refresh, and cleanse the surface of the skin in a calm, peaceful atmosphere. Our staff applies products with rhythmic, gentle touch, allowing you to relax while your skin receives attentive care.
              </p>
            </div>
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-[#E8DFD5] text-xs text-[#6B5E55] space-y-2">
              <p className="font-serif text-base font-bold text-[#3A1420]">Review Evidence:</p>
              <p className="italic">
                "Customer Nayab Saddiqe noted that her facial was beautifully done by Saadia and that she was very pleased with the radiant results."
              </p>
            </div>
          </div>

          {/* Section 2: Personal Skin Concerns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F7F2EC] p-8 rounded-2xl border border-[#E8DFD5]">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">Section 02</span>
              <h2 className="font-serif text-3xl text-[#3A1420]">Personal Skin Concerns</h2>
              <p className="text-sm text-[#5A4F46] leading-relaxed">
                Every client's skin is distinct. We ask about any dryness, oiliness, or known sensitivities prior to beginning. Special care is taken for sensitive skin that may be prone to redness or irritation from abrasive pressure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] text-xs text-[#6B5E55] space-y-2">
              <p className="font-serif text-base font-bold text-[#3A1420]">Sensitive-Skin Highlight:</p>
              <p className="italic">
                "Customer Safoora Iftikhar praised Yasmeen's facial work for careful consideration of sensitive-skin concerns and a gentle approach."
              </p>
            </div>
          </div>

          {/* Section 3: Comfort-Focused Experience */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFD5] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">Section 03</span>
            <h2 className="font-serif text-3xl text-[#3A1420]">A Comfort-Focused Experience</h2>
            <p className="text-sm text-[#5A4F46] leading-relaxed max-w-3xl">
              We know that a salon visit is a moment of personal respite. Our facial spaces are arranged for quiet relaxation, clean hygiene protocols, comfortable headrests, and a serene ambiance free of rushed appointments.
            </p>
          </div>

          {/* Section 4 & 5: Before Your Facial & Aftercare Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">Section 04</span>
              <h3 className="font-serif text-2xl text-[#3A1420]">Before Your Facial</h3>
              <ul className="space-y-2 text-xs text-[#5A4F46]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Arrive with clean skin or minimal makeup to maximize hands-on facial time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Inform your esthetician of any allergies or skin sensitivities beforehand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Avoid harsh chemical exfoliants or excessive sun exposure directly before treatment.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-[#E8DFD5] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">Section 05</span>
              <h3 className="font-serif text-2xl text-[#3A1420]">Aftercare Questions</h3>
              <ul className="space-y-2 text-xs text-[#5A4F46]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Maintain skin hydration with ample water and gentle moisturizers following the visit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Allow the skin to breathe without heavy foundation immediately following a facial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2B43] shrink-0 mt-0.5" />
                  <span>Feel free to ask the salon team for personalized home skincare tips during your check-out.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-5">
          <h2 className="font-serif text-3xl font-normal">
            Schedule Your Facial Relaxation
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-lg mx-auto">
            Contact the salon for current availability, pricing and service details. Our team is available on WhatsApp and phone.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal('Facial & Skincare')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Inquire About Facial Services
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
