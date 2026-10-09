import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { PageId } from '../types';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenAppointmentModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Bridal', page: 'bridal' },
    { label: 'Hair', page: 'hair-services' },
    { label: 'Skincare', page: 'facial-skincare' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E8DFD5]'
          : 'bg-[#FAF8F5] py-4 border-b border-[#F0EAE1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A2B43] rounded-xs"
            aria-label="Alle'nora Annie's Signature Salon - Back to home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#3A1420] group-hover:text-[#8A2B43] transition-colors whitespace-nowrap">
              Alle'nora Annie's
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-medium tracking-wide uppercase text-[#574C43]"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#8A2B43] font-semibold'
                      : 'hover:text-[#3A1420]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A2B43] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#6B5E55] hover:text-[#8A2B43] px-2.5 py-1.5 transition-colors whitespace-nowrap"
              aria-label="Call salon phone directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="hidden md:inline">{SALON_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-wide text-white bg-[#521528] hover:bg-[#681c33] active:bg-[#3D0F1D] rounded-full shadow-xs transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A2B43]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E6C9A2]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#3A1420] hover:text-[#8A2B43] rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A2B43]"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#FAF8F5]/98 backdrop-blur-xl border-t border-[#E8DFD5] z-50 overflow-y-auto px-6 py-6 transition-all duration-200">
          <div className="flex flex-col gap-1 pb-24">
            <p className="text-[11px] uppercase tracking-widest text-[#8A796D] font-semibold mb-2">
              Salon Navigation
            </p>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-3 px-3 rounded-lg text-base font-serif transition-colors ${
                  currentPage === item.page
                    ? 'bg-[#F2EAE0] text-[#521528] font-bold'
                    : 'text-[#3A1420] hover:bg-[#F7F2EC]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-[#E8DFD5] my-4 pt-4 flex flex-col gap-2.5">
              <p className="text-[11px] uppercase tracking-widest text-[#8A796D] font-semibold mb-1">
                More Sections
              </p>
              <button
                onClick={() => handleNavClick('party-makeup')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Party & Event Makeup
              </button>
              <button
                onClick={() => handleNavClick('hair-treatments')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Hair Treatments & Keratin
              </button>
              <button
                onClick={() => handleNavClick('beauty-care')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Beauty & Personal Care
              </button>
              <button
                onClick={() => handleNavClick('experience')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Salon Experience
              </button>
              <button
                onClick={() => handleNavClick('approach')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Our 5-Step Approach
              </button>
              <button
                onClick={() => handleNavClick('visit-us')}
                className="text-left py-2 px-3 text-sm text-[#4A3E37] hover:text-[#521528]"
              >
                Visit Us in Faisalabad
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#521528] rounded-full shadow-sm"
              >
                Book an Appointment
              </button>

              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full py-3 text-center text-sm font-medium text-[#3A1420] border border-[#D9CEC1] rounded-full"
              >
                Call Front Desk: {SALON_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
