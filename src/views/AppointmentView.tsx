import React, { useState } from 'react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, Calendar, CheckCircle2 } from 'lucide-react';

interface AppointmentViewProps {
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const AppointmentView: React.FC<AppointmentViewProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
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
    <div className="bg-[#FAF8F5] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#8A2B43] font-semibold">
            Reserve Your Session
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3A1420] font-normal leading-tight">
            Let's Plan Your Beauty Appointment
          </h1>
          <p className="text-base text-[#5A4F46] leading-relaxed">
            Submit your appointment inquiry below. Our reception team will review our schedule and confirm time slot availability with you directly.
          </p>
          <p className="text-xs text-[#8A796D] italic">
            Note: Submitting this inquiry prepares your details for direct coordination. Appointments are confirmed upon mutual agreement with our salon desk.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ayesha Malik"
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0301 1234567"
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                  Service / Beauty Requirement *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                >
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Party & Event Makeup">Party & Event Makeup</option>
                  <option value="Keratin Treatment">Keratin Treatment</option>
                  <option value="Hair Styling & Blowout">Hair Styling & Blowout</option>
                  <option value="Facial & Skincare">Facial & Skincare</option>
                  <option value="Personal Grooming & Beauty Care">Personal Grooming & Beauty Care</option>
                  <option value="General Beauty Consultation">General Beauty Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                  >
                    <option value="">Flexible Time</option>
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E37] uppercase tracking-wider mb-2">
                  Special Notes or Inquiries
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention your event date, hair length, sensitive-skin notes, etc."
                  className="w-full px-4 py-3 text-sm bg-white border border-[#D9CEC1] rounded-lg text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#8A2B43]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#521528] hover:bg-[#681c33] active:bg-[#3D0F1D] rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 mx-auto bg-[#E8F8ED] text-[#13612E] rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold text-[#3A1420]">
                  Inquiry Details Ready
                </h2>
                <p className="text-sm text-[#5A4F46] max-w-md mx-auto leading-relaxed">
                  To complete your booking, send these details directly to our reception via WhatsApp or phone. Our front desk will verify schedule availability and confirm your booking.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8DFD5] text-left text-xs sm:text-sm text-[#4A3E37] max-w-md mx-auto space-y-1.5">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Client Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                {formData.date && <p><strong>Preferred Date:</strong> {formData.date}</p>}
                {formData.time && <p><strong>Time Window:</strong> {formData.time}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#3A1420] border border-[#D9CEC1] hover:bg-[#FAF8F5] rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#8A2B43]" />
                  <span>Call: {SALON_INFO.phoneDisplay}</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#8A796D] hover:underline pt-2 cursor-pointer"
              >
                &larr; Edit Details
              </button>
            </div>
          )}
        </div>

        {/* Alternative direct contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(SALON_INFO.defaultWhatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-xl border border-[#E8DFD5] flex items-center gap-4 hover:border-[#25D366] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#E8F8ED] flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#3A1420]">Chat on WhatsApp</h3>
              <p className="text-xs text-[#6B5E55]">Direct messaging with our front desk</p>
            </div>
          </a>

          <a
            href={`tel:${SALON_INFO.phoneRaw}`}
            className="p-6 bg-white rounded-xl border border-[#E8DFD5] flex items-center gap-4 hover:border-[#8A2B43] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#8A2B43] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#3A1420]">Call the Salon</h3>
              <p className="text-xs text-[#6B5E55]">{SALON_INFO.phoneDisplay} · Open until 8 PM</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
