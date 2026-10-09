import React from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface PartyMakeupViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const PartyMakeupView: React.FC<PartyMakeupViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const partyWhatsappMsg = "Hello Alle'nora Annie's Signature Salon, I would like to inquire about booking party makeup.";

  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Occasion & Celebration Artistry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3A1420] font-normal leading-tight">
              Party & Event <br />
              <span className="italic font-light text-[#521528]">Glamour Makeup</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
              Step into your next celebration looking effortlessly radiant. Whether attending an intimate family dholak, formal evening dinner, graduation party, or wedding celebration as a guest, our makeup artists create balanced, refined looks that photograph beautifully under both daytime and evening illumination.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenAppointmentModal('Party & Event Makeup')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
              >
                Book Party Makeup
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(partyWhatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#13612E] bg-white border border-[#BDE8CB] hover:bg-[#E8F8ED] rounded-full transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD5] bg-[#F2EAE0]">
              <img
                src={SALON_INFO.images.party}
                alt="Sophisticated party makeup and hairstyle styling at Alle'nora Annie's Signature Salon"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Section: Occasion Types */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
              Celebration Styling
            </p>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              Tailored for Every Event
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Evening Reception Glam
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Sculpted eye definition, velvety complexion, and flattering lip colors that hold up through hours of celebrating and camera flashes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Daytime & High Tea Beauty
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Soft-focus skin, subtle highlighting, and light, breathable coverage for natural daytime functions and luncheons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                Festive Sangeet & Mehendi Looks
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4F46] leading-relaxed">
                Warm glowing tones paired with textured curls, textured braids, or classic blowouts suited for dancing and festive attire.
              </p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 border border-[#E8DFD5] space-y-4">
          <h3 className="font-serif text-2xl text-[#3A1420] font-medium">
            Occasion Preparation Guidelines
          </h3>
          <p className="text-sm text-[#5A4F46] leading-relaxed">
            To ensure the smoothest salon visit, we advise arriving with clean, moisturized skin and hair washed according to your planned hairstyle. Please feel free to bring along a swatch or picture of your outfit so our artists can harmonize cheek and eye undertones.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs text-[#8A2B43] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Contact the salon for current availability, pricing and service details.</span>
          </div>
        </div>

        {/* Conversion Banner */}
        <div className="bg-[#3A1420] text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal">
            Ready to Reserve Your Event Makeup?
          </h2>
          <p className="text-sm text-[#D3C3B5] max-w-lg mx-auto">
            Get in touch with Alle'nora Annie's Signature Salon in Faisalabad to reserve your makeup and styling appointment.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal('Party & Event Makeup')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Book Party Makeup
            </button>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#6B394A] hover:bg-[#4C1C2C] rounded-full transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C9A2]" />
              <span>Call Reception: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
