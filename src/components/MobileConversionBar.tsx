import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileConversionBarProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const MobileConversionBar: React.FC<MobileConversionBarProps> = ({
  onOpenAppointmentModal,
}) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    SALON_INFO.defaultWhatsappMsg
  )}`;

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8DFD5] px-4 py-2.5 shadow-lg"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#3A1420] hover:bg-[#F2EAE0] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#8A2B43] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#13612E] hover:bg-[#E8F8ED] transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book */}
        <button
          onClick={() => onOpenAppointmentModal()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#521528] text-white active:bg-[#3D0F1D] shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#E6C9A2] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Book</span>
        </button>
      </div>
    </aside>
  );
};
