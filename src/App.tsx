import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileConversionBar } from './components/MobileConversionBar';
import { AppointmentModal } from './components/AppointmentModal';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { BridalView } from './views/BridalView';
import { PartyMakeupView } from './views/PartyMakeupView';
import { HairServicesView } from './views/HairServicesView';
import { HairTreatmentsView } from './views/HairTreatmentsView';
import { FacialSkincareView } from './views/FacialSkincareView';
import { BeautyCareView } from './views/BeautyCareView';
import { SalonExperienceView } from './views/SalonExperienceView';
import { OurApproachView } from './views/OurApproachView';
import { GalleryView } from './views/GalleryView';
import { ReviewsView } from './views/ReviewsView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { VisitUsView } from './views/VisitUsView';
import { AppointmentView } from './views/AppointmentView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Bridal Makeup');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointmentModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  // Sync title dynamically per page for SEO and usability
  useEffect(() => {
    const titles: Record<PageId, string> = {
      'home': "Alle'nora Annie's Signature Salon | Beauty Salon in Faisalabad",
      'about': "About Us | Alle'nora Annie's Signature Salon Faisalabad",
      'services': "All Beauty Services | Alle'nora Annie's Signature Salon",
      'bridal': "Bridal Makeup Artistry | Alle'nora Annie's Signature Salon",
      'party-makeup': "Party & Event Makeup | Alle'nora Annie's Signature Salon",
      'hair-services': "Hair Care & Styling | Alle'nora Annie's Signature Salon",
      'hair-treatments': "Keratin Treatments | Alle'nora Annie's Signature Salon",
      'facial-skincare': "Facial & Skincare | Alle'nora Annie's Signature Salon",
      'beauty-care': "Beauty & Personal Care | Alle'nora Annie's Signature Salon",
      'experience': "Salon Experience | Alle'nora Annie's Signature Salon",
      'approach': "Our Approach | Alle'nora Annie's Signature Salon",
      'gallery': "Salon Gallery | Alle'nora Annie's Signature Salon",
      'reviews': "Customer Reviews | Alle'nora Annie's Signature Salon",
      'faq': "Frequently Asked Questions | Alle'nora Annie's Signature Salon",
      'contact': "Contact Us | Alle'nora Annie's Signature Salon",
      'visit-us': "Visit Our Faisalabad Salon | Alle'nora Annie's Signature Salon",
      'appointment': "Book an Appointment | Alle'nora Annie's Signature Salon",
    };
    document.title = titles[currentPage] || "Alle'nora Annie's Signature Salon | Faisalabad";
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#EBD3D7] selection:text-[#4A1525]">
      
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Main Content View Container */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'bridal' && (
          <BridalView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'party-makeup' && (
          <PartyMakeupView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'hair-services' && (
          <HairServicesView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'hair-treatments' && (
          <HairTreatmentsView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'facial-skincare' && (
          <FacialSkincareView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'beauty-care' && (
          <BeautyCareView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'experience' && (
          <SalonExperienceView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'approach' && (
          <OurApproachView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'reviews' && (
          <ReviewsView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'faq' && (
          <FaqView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'visit-us' && (
          <VisitUsView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
        {currentPage === 'appointment' && (
          <AppointmentView
            onNavigate={handleNavigate}
            onOpenAppointmentModal={handleOpenAppointmentModal}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Conversion Action Bar */}
      <MobileConversionBar
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Interactive Appointment Inquiry Dialog */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        preselectedService={selectedServiceForModal}
      />

    </div>
  );
}
