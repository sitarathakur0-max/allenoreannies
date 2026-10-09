import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { Phone, MessageCircle, Calendar, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D131C] text-[#E8DFD5] border-t border-[#44222E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wide text-[#F8F3ED]">
              {SALON_INFO.name}
            </h3>
            <p className="text-sm text-[#D3C3B5] leading-relaxed font-normal">
              A refined women's beauty sanctuary in Faisalabad specializing in luxury bridal artistry, celebration makeup, attentive facial skincare, and professional hair care.
            </p>
            <div className="pt-2 text-xs text-[#B8976C] space-y-1">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>{SALON_INFO.hours}</span>
              </p>
              <p className="text-[#9E8B7F] text-[11px] leading-normal">
                Please contact our reception desk to confirm current hours and reserve your appointment slot.
              </p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About the Salon
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-white transition-colors text-left"
                >
                  Bridal Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hair-services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hair Services & Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('facial-skincare')}
                  className="hover:text-white transition-colors text-left"
                >
                  Facial & Skincare
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-white transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-white transition-colors text-left"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#D3C3B5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  36-D Imam Hussain Road<br />
                  D Ground Block D<br />
                  People's Colony No 1<br />
                  Faisalabad, Pakistan
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#B8976C] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium tabular-nums"
                >
                  {SALON_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E6C9A2] hover:underline"
                >
                  Get Directions in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Appointments */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Appointments
            </h4>
            <p className="text-xs text-[#B8A698] leading-relaxed">
              We welcome consultation and scheduling inquiries by phone and WhatsApp.
            </p>
            <div className="space-y-2.5 pt-1">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-md transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E6C9A2]" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(SALON_INFO.defaultWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#E8DFD5] border border-[#5E3B49] hover:bg-[#3D1A27] rounded-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8976C]" />
                <span>Call the Salon</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#44222E]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8B7F]">
          <p>© 2026 Alle'nora Annie's Signature Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('visit-us')}
              className="hover:text-white transition-colors"
            >
              Visit Us
            </button>
            <button
              onClick={() => handleNav('faq')}
              className="hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
