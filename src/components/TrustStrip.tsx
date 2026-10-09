import React from 'react';
import { Star, MessageSquare, MapPin, CalendarCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TrustStrip: React.FC = () => {
  return (
    <section aria-label="Salon Trust and Credentials" className="border-y border-[#E8DFD5] bg-[#F5EFE6]/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#E2D6C8]/60 text-center">
          
          {/* Rating */}
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1.5 text-[#8A2B43] mb-1">
              <Star className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3A1420] tabular-nums">
                {SALON_INFO.rating} / 5
              </span>
            </div>
            <p className="text-xs uppercase tracking-wider text-[#6B5E55] font-medium">
              Google Rating
            </p>
          </div>

          {/* Customer Reviews */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-[#8A2B43] mb-1">
              <MessageSquare className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3A1420] tabular-nums">
                {SALON_INFO.reviewCount}
              </span>
            </div>
            <p className="text-xs uppercase tracking-wider text-[#6B5E55] font-medium">
              Customer Reviews
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-[#8A2B43] mb-1">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3A1420]">
                Faisalabad
              </span>
            </div>
            <p className="text-xs uppercase tracking-wider text-[#6B5E55] font-medium">
              D Ground, People's Colony
            </p>
          </div>

          {/* Inquiries */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="flex items-center gap-1.5 text-[#8A2B43] mb-1">
              <CalendarCheck className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3A1420]">
                Open Until 8 PM
              </span>
            </div>
            <p className="text-xs uppercase tracking-wider text-[#6B5E55] font-medium">
              Appointment Inquiries Welcome
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
