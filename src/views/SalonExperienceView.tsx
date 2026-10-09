import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { Heart, Sparkles, Shield, Coffee } from 'lucide-react';

interface SalonExperienceViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const SalonExperienceView: React.FC<SalonExperienceViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Hero */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Atmosphere & Sanctuary
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
            The Alle'nora Annie's <br />
            <span className="italic font-light text-[#521528]">Salon Experience</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            More than just beauty appointments, we offer a composed sanctuary where clients in Faisalabad step away from daily bustle into an atmosphere of quiet refinement and dedicated attention.
          </p>
        </div>

        {/* Large Editorial Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-16/11 bg-[#F2EAE0]">
            <img
              src={SALON_INFO.images.hero}
              alt="Luxury bridal salon experience at Alle'nora Annie's Signature Salon"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-16/11 bg-[#F2EAE0]">
            <img
              src={SALON_INFO.images.skincare}
              alt="Peaceful skincare treatment setting"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* The 6 Experience Facets */}
        <div className="space-y-6">
          <div className="max-w-xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Designed For You
            </p>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              What Defines Your Time With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
              <Sparkles className="w-5 h-5 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Calm Visual Environment
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Warm ivory interiors, gentle lighting, and clean stations create a soothing retreat from the busy city streets of D Ground.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
              <Heart className="w-5 h-5 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Personal Beauty Attention
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                You are never treated as a number. Our artists take the time to converse with you about your comfort, skin tones, and goals.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-[#E8DFD5] space-y-3">
              <Shield className="w-5 h-5 text-[#8A2B43]" />
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Client Comfort & Privacy
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Dedicated private service sections ensure peace of mind, modesty, and complete relaxation throughout your appointment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Experience the Salon in Person
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-lg mx-auto">
            Contact the salon for current availability, pricing and service details. We look forward to welcoming you to Alle'nora Annie's Signature Salon.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#8A2B43] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
            >
              Contact Our Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
