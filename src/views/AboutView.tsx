import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Clock, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Our Story & Presence
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            About Alle'nora Annie's Signature Salon
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            Located in the heart of Faisalabad at D Ground, People's Colony No 1, Alle'nora Annie's Signature Salon is a dedicated beauty destination for women seeking refined makeup artistry, restorative facial skincare, and professional hair care.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#3A1420] font-normal">
              A Beauty Sanctuary Centered Around Personal Care
            </h2>
            <p className="text-sm sm:text-base text-[#5A4F46] leading-relaxed">
              Clients visit our salon for life's most meaningful milestones—from traditional wedding bridal looks and evening party celebrations to restorative skincare facials and smoothing keratin hair treatments.
            </p>
            <p className="text-sm sm:text-base text-[#5A4F46] leading-relaxed">
              Our salon aims to provide an elegant, serene, and comfortable beauty environment where every client receives attentive service tailored to her individual skin concerns and aesthetic preferences.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8A2B43] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A3E37]">
                  <strong>Attentive consultations:</strong> We discuss your style requirements, skin sensitivity, and occasion timing before starting any service.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8A2B43] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A3E37]">
                  <strong>Comprehensive services:</strong> Bridal makeup, party glamour, keratin treatments, hair styling, and skincare all in one location.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8A2B43] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A3E37]">
                  <strong>Faisalabad community trust:</strong> Over 406 customer reviews with a 4.1 / 5 rating from local clients.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full shadow-xs transition-colors cursor-pointer"
              >
                Book an Appointment
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#F2EAE0] rounded-full transition-colors cursor-pointer"
              >
                Browse Services
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.hero}
                alt="Alle'nora Annie's Signature Salon interior atmosphere"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Location & Contact Notice Card */}
        <div className="bg-[#F5EFE6] rounded-2xl p-8 border border-[#E8DFD5] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8A2B43]">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <h3 className="font-serif text-lg font-bold text-[#3A1420]">Our Location</h3>
            </div>
            <p className="text-xs text-[#5A4F46] leading-relaxed">
              36-D Imam Hussain Road, D Ground Block D, People's Colony No 1, Faisalabad, Pakistan
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8A2B43]">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <h3 className="font-serif text-lg font-bold text-[#3A1420]">Salon Hours</h3>
            </div>
            <p className="text-xs text-[#5A4F46] leading-relaxed">
              Open, closes at 8 PM. Please contact the salon in advance to verify current daily hours and slot availability.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#8A2B43]">
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <h3 className="font-serif text-lg font-bold text-[#3A1420]">Phone & WhatsApp</h3>
            </div>
            <p className="text-xs text-[#5A4F46] leading-relaxed">
              +92 301 8666055 — Contact our reception desk for inquiries and appointment reservations.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
