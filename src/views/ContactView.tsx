import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Calendar, Star, Clock, Navigation } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Contact Alle'nora Annie's Signature Salon
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            We welcome your inquiries, appointment scheduling requests, and service questions. Contact our front desk directly by phone, WhatsApp, or request an appointment online.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Address */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8A2B43]">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#3A1420]">Salon Address</h2>
            <address className="not-italic text-sm text-[#5A4F46] leading-relaxed">
              36-D Imam Hussain Road<br />
              D Ground Block D<br />
              People's Colony No 1<br />
              Faisalabad, Pakistan
            </address>
            <div className="pt-2">
              <a
                href={SALON_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8A2B43] hover:text-[#521528] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Maps URL)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8A2B43]">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#3A1420]">Phone & WhatsApp</h2>
            <div className="text-sm text-[#5A4F46] space-y-1">
              <p>
                <strong>Telephone:</strong>{' '}
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:text-[#8A2B43] tabular-nums font-semibold">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong> +92 301 8666055
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#3A1420] border border-[#D9CEC1] hover:bg-[#FAF8F5] rounded-full transition-colors"
              >
                Call the Salon
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(SALON_INFO.defaultWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Hours & Verification */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DFD5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#8A2B43]">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#3A1420]">Hours & Ratings</h2>
            <div className="text-sm text-[#5A4F46] space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-[#3A1420]">{SALON_INFO.hours}</span>
              </p>
              <p className="text-xs text-[#8A796D]">
                {SALON_INFO.hoursNotice}
              </p>
              <div className="pt-2 border-t border-[#F0EAE1] flex items-center gap-2 text-xs text-[#3A1420]">
                <Star className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                <span className="font-bold">4.1 / 5</span>
                <span className="text-[#8A796D]">({SALON_INFO.reviewCount} Google reviews)</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
