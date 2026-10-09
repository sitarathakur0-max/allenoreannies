import React from 'react';
import { PageId } from '../types';
import { APPROACH_STEPS } from '../data/salonData';
import { Calendar, ArrowRight } from 'lucide-react';

interface OurApproachViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const OurApproachView: React.FC<OurApproachViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Service Philosophy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
            Our Approach to Beauty
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            Every client brings an individual style and occasion vision. Below is our salon's website-described approach to making sure each beauty session feels attentive, coordinated, and tailored to you.
          </p>
          <p className="text-xs text-[#8A796D] italic">
            This represents our guiding customer care philosophy during appointments at Alle'nora Annie's Signature Salon.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="space-y-6">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-xs flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="shrink-0 w-16 h-16 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-2xl font-serif font-bold text-[#8A2B43]">
                {step.number}
              </div>

              <div className="space-y-2 flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#3A1420] font-medium">
                  {step.title}
                </h2>
                <p className="text-sm sm:text-base text-[#5A4F46] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion CTA */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Ready to Plan Your Appointment?
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-lg mx-auto">
            Contact the salon for current availability, pricing and service details. Our team is available by phone and WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#8A2B43] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
            >
              Explore Services
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
