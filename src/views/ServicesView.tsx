import React from 'react';
import { PageId } from '../types';
import { SERVICES_LIST, SALON_INFO } from '../data/salonData';
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Service Catalog
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Our Salon Services
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            From regal wedding day beauty and glamorous celebration styling to restorative facial care and keratin hair treatments, explore our full spectrum of salon care.
          </p>
          <p className="text-xs text-[#8A796D] italic">
            Note: Contact the salon for current availability, pricing and service details.
          </p>
        </div>

        {/* Services List Detailed */}
        <div className="space-y-12">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD5] shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden aspect-4/3 bg-[#F2EAE0]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Details */}
              <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A2B43] font-semibold">
                  <span>{service.category}</span>
                </div>

                <h2 className="font-serif text-3xl text-[#3A1420] font-medium">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-[#5A4F46] leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#3A1420] uppercase tracking-wider mb-2">
                    Key Considerations & Details:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5A4F46]">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate(service.pageId)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
                  >
                    Dedicated Service Page &rarr;
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal(service.title)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#FAF8F5] border border-[#D9CEC1] hover:bg-[#F2EAE0] rounded-full transition-colors cursor-pointer"
                  >
                    Inquire Appointment
                  </button>

                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-[#E8F8ED] border border-[#BDE8CB] hover:bg-[#D5F3DD] rounded-full transition-colors inline-flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Inquiries Notice */}
        <div className="bg-[#F5EFE6] rounded-xl p-8 border border-[#E8DFD5] text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-[#3A1420] font-normal">
            Custom Consultations & Pricing
          </h3>
          <p className="text-sm text-[#5A4F46] leading-relaxed">
            Every client has unique hair length, skin sensitivity, and styling requirements. For honest, accurate pricing and availability, please contact our front desk directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] rounded-full hover:bg-[#681c33] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C9A2]" />
              <span>Call: {SALON_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to inquire about pricing and availability at Alle'nora Annie's Signature Salon.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] rounded-full hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
