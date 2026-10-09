import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Calendar, Sparkles } from 'lucide-react';

interface BeautyCareViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const BeautyCareView: React.FC<BeautyCareViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const beautyWhatsappMsg = "Hello Alle'nora Annie's Signature Salon, I would like to ask about current personal care and grooming service availability.";

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Everyday Grooming & Event Prep
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Beauty & Personal Care
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            Essential grooming and personal beauty care designed to help you prepare for upcoming gatherings or enjoy regular salon self-care in a private, respectful atmosphere.
          </p>
          <p className="text-xs text-[#8A796D] italic">
            Ask the salon about current service availability, pricing, and scheduling.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Personal Grooming
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              Neat, meticulous grooming services that leave you feeling refreshed and put together for everyday confidence or professional milestones.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Event Preparation
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              Pre-event beauty routines to prime your hair, skin, and grooming prior to wedding festivities and family celebrations.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
            <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
              Dedicated Self-Care
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
              Taking intentional time out of a busy schedule to recharge in a clean, quiet, and welcoming women's salon environment.
            </p>
          </div>
        </div>

        {/* Notice Box */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 border border-[#E8DFD5] text-center space-y-4 max-w-2xl mx-auto">
          <Sparkles className="w-6 h-6 text-[#8A2B43] mx-auto" />
          <h3 className="font-serif text-2xl text-[#3A1420]">
            Inquire About Available Care
          </h3>
          <p className="text-sm text-[#5A4F46] leading-relaxed">
            Because our daily schedule and station capacities change, we recommend speaking directly with our front desk staff to verify what personal grooming services can be accommodated during your preferred time window.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal('Personal Grooming & Beauty Care')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
            >
              Inquire With Salon
            </button>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(beautyWhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
