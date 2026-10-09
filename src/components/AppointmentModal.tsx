import React, { useState } from 'react';
import { X, Calendar, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Bridal Makeup',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Alle'nora Annie's Signature Salon,
I would like to inquire about an appointment:
- Name: ${formData.name || 'Not specified'}
- Phone: ${formData.phone || 'Not specified'}
- Requested Service: ${formData.service}
- Preferred Date: ${formData.date || 'Flexible'}
- Preferred Time: ${formData.time || 'Flexible'}
${formData.message ? `- Notes: ${formData.message}` : ''}

Please let me know your current availability. Thank you!`;
    return encodeURIComponent(text);
  };

  const handleLaunchWhatsApp = () => {
    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${constructWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-dialog-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8DFD5] overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#521528] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#E6C9A2] font-semibold">
              Appointment Inquiry
            </span>
            <h2 id="appointment-dialog-title" className="font-serif text-2xl font-bold">
              Let's Plan Your Beauty Visit
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close appointment inquiry modal"
            className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#6B5E55] leading-relaxed">
                Send your service inquiry to our reception team. Because each service requires personalized schedule coordination, our salon will verify slot availability and confirm with you directly.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Fatima Khan"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0300 1234567"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                  Service / Beauty Requirement *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                >
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Party & Event Makeup">Party & Event Makeup</option>
                  <option value="Keratin Treatment">Keratin Hair Treatment</option>
                  <option value="Hair Styling & Blowout">Hair Styling & Blowout</option>
                  <option value="Facial & Skincare">Facial & Skincare Service</option>
                  <option value="Personal Grooming & Beauty Care">Personal Grooming & Beauty Care</option>
                  <option value="General Beauty Consultation">General Beauty Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  >
                    <option value="">Flexible Time</option>
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-1">
                  Message / Special Request
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event, sensitive-skin notes, or questions..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] active:bg-[#3D0F1D] rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Prepare My Inquiry
                </button>
              </div>

              <div className="relative flex py-2 items-center">
                <div className="grow border-t border-[#E8DFD5]"></div>
                <span className="shrink mx-3 text-xs text-[#8A796D] uppercase tracking-wider">or reach us directly</span>
                <div className="grow border-t border-[#E8DFD5]"></div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-[#3A1420] border border-[#D9CEC1] rounded-lg hover:bg-[#F2EAE0] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A2B43]" />
                  <span>Call {SALON_INFO.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={handleLaunchWhatsApp}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-[#13612E] bg-[#E8F8ED] border border-[#BDE8CB] rounded-lg hover:bg-[#D5F3DD] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Instant WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 mx-auto bg-[#E8F8ED] text-[#13612E] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#3A1420]">
                  Inquiry Prepared
                </h3>
                <p className="text-xs text-[#6B5E55] mt-1 max-w-sm mx-auto leading-relaxed">
                  To complete your booking, send your inquiry details directly to our reception via WhatsApp or call our desk. Our team will verify time slot availability and confirm your appointment.
                </p>
              </div>

              <div className="bg-[#F5EFE6] p-4 rounded-xl text-left text-xs text-[#4A3E37] space-y-1 border border-[#E8DFD5]">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                {formData.date && <p><strong>Preferred Date:</strong> {formData.date}</p>}
                {formData.time && <p><strong>Time Window:</strong> {formData.time}</p>}
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp to Salon Desk</span>
                </button>

                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#3A1420] border border-[#D9CEC1] rounded-lg hover:bg-[#F2EAE0] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A2B43]" />
                  <span>Call Reception ({SALON_INFO.phoneDisplay})</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-[#8A796D] hover:underline pt-2 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
