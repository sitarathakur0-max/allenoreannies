import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';

interface VisitUsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const VisitUsView: React.FC<VisitUsViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Location & Access
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Find Us in Faisalabad
          </h1>
          <p className="text-base text-[#5A4F46] leading-relaxed">
            Visit Alle'nora Annie's Signature Salon in the vibrant commercial and residential hub of People's Colony No 1.
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DFD5] shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8A2B43] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#3A1420]">
                Alle'nora Annie's Signature Salon
              </h2>
              <address className="not-italic text-base sm:text-lg text-[#5A4F46] leading-relaxed font-serif">
                36-D Imam Hussain Road<br />
                D Ground Block D<br />
                People's Colony No 1<br />
                Faisalabad, Pakistan
              </address>
            </div>
          </div>

          <div className="border-t border-[#F0EAE1] pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6B5E55]">
              <Clock className="w-4 h-4 text-[#8A2B43] shrink-0" />
              <span>{SALON_INFO.hours} (Please verify current hours before visiting)</span>
            </div>

            <a
              href={SALON_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#E6C9A2]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Location Context & Guidance */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 border border-[#E8DFD5] space-y-4">
          <h3 className="font-serif text-2xl text-[#3A1420]">
            Planning Your Salon Visit
          </h3>
          <p className="text-sm text-[#5A4F46] leading-relaxed">
            Our salon is situated at 36-D Imam Hussain Road in D Ground Block D, People's Colony No 1. Because appointment slots and consultation schedules fill quickly during wedding seasons and weekend event dates, we encourage scheduling your visit in advance via WhatsApp or phone call.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#FAF8F5] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#8A2B43]" />
              <span>Call Ahead: {SALON_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
            >
              Inquire Appointment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
