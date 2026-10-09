import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    SALON_INFO.defaultWhatsappMsg
  )}`;

  return (
    <aside aria-label="WhatsApp Salon Inquiry" className="fixed bottom-20 md:bottom-7 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Alle'nora Annie's Signature Salon"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 shrink-0 fill-white" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide uppercase pr-1">
          WhatsApp Inquiry
        </span>
      </a>
    </aside>
  );
};
