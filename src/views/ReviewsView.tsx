import React from 'react';
import { PageId } from '../types';
import { SALON_INFO, REAL_REVIEWS, REVIEW_THEMES } from '../data/salonData';
import { Star, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface ReviewsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({
  onNavigate,
  onOpenAppointmentModal,
}) => {
  return (
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header & Metrics */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Client Voices & Rating
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Customer Reviews & Experience
          </h1>
          <p className="text-base sm:text-lg text-[#5A4F46] leading-relaxed">
            Real feedback from women in Faisalabad who visited Alle'nora Annie's Signature Salon for skincare facials, bridal beauty, and hair treatments.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl font-bold text-[#3A1420] tabular-nums">
                {SALON_INFO.rating}
              </span>
              <div>
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="text-xs text-[#6B5E55]">Google Star Rating</span>
              </div>
            </div>

            <div className="border-l border-[#D9CEC1] pl-6">
              <span className="font-serif text-3xl font-bold text-[#3A1420] tabular-nums block">
                {SALON_INFO.reviewCount}
              </span>
              <span className="text-xs text-[#6B5E55]">Verified Reviews Listed</span>
            </div>
          </div>
        </div>

        {/* Real Customer Feedback Section */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#3A1420]">
            Featured Customer Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REAL_REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E8DFD5] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-[#C5A880]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#8A2B43] font-semibold block">
                    {rev.verifiedTheme}
                  </span>
                  <p className="text-sm text-[#4A3E37] leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD5]">
                  <p className="font-serif font-bold text-[#3A1420] text-base">
                    {rev.author}
                  </p>
                  <p className="text-xs text-[#8A796D]">
                    {rev.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thematic Summaries Clearly Labeled */}
        <div className="bg-[#F7F2EC] rounded-2xl p-8 lg:p-12 border border-[#E8DFD5] space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold mb-1">
              Synthesized Insights
            </p>
            <h2 className="font-serif text-3xl text-[#3A1420] font-normal">
              Review Themes in Customer Feedback
            </h2>
            <p className="text-sm text-[#5A4F46] mt-1">
              Based on genuine reviews posted by visitors to our Faisalabad location.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEW_THEMES.map((theme, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#E8DFD5] space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8A2B43]">
                  Theme 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#3A1420]">
                  {theme.title}
                </h3>
                <p className="text-xs text-[#5A4F46] leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="bg-[#521528] text-white rounded-2xl p-8 lg:p-10 text-center space-y-4">
          <h2 className="font-serif text-3xl font-normal">
            Join Our Satisfied Clients
          </h2>
          <p className="text-sm text-[#E8DFD5] max-w-lg mx-auto">
            Contact the salon for current availability, pricing and service details. We look forward to providing you with an attentive beauty session.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#3A1420] bg-[#E6C9A2] hover:bg-[#ebd5b8] rounded-full transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white border border-[#8A2B43] hover:bg-[#681c33] rounded-full transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
