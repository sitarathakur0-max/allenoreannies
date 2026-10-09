import React, { useState } from 'react';
import { PageId } from '../types';
import { SALON_FAQS, SALON_INFO } from '../data/salonData';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';

interface FaqViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Common Inquiries
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#5A4F46] leading-relaxed">
            Find clear answers to common questions about our services, booking process, salon hours, and location in Faisalabad.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {SALON_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E8DFD5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FBF9F6] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#3A1420]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8A2B43] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5A4F46] leading-relaxed border-t border-[#F2EAE0]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="bg-[#F5EFE6] rounded-2xl p-8 border border-[#E8DFD5] text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#8A2B43] mx-auto" />
          <h2 className="font-serif text-2xl text-[#3A1420]">
            Still Have a Question?
          </h2>
          <p className="text-sm text-[#5A4F46] max-w-md mx-auto leading-relaxed">
            Our reception team will gladly answer your questions regarding service availability, pricing estimates, and appointments.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(SALON_INFO.defaultWhatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-white border border-[#D9CEC1] hover:bg-[#FAF8F5] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#8A2B43]" />
              <span>Call Reception: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
