import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { CalendarSection } from './components/CalendarSection';
import { OccasionsSection } from './components/OccasionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { PaymentMethods } from './components/PaymentMethods';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { PrivacyModal } from './components/PrivacyModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

export default function App() {
  const [privacyModalType, setPrivacyModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#23412F] font-sans selection:bg-[#23412F] selection:text-[#F6F2EB] relative overflow-x-hidden">
      
      {/* Navigation Header */}
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Amenities & Structure Section */}
      <AmenitiesSection />

      {/* Availability Calendar */}
      <CalendarSection />

      {/* Occasions & Event Types */}
      <OccasionsSection />

      {/* Guest Reviews Carousel */}
      <TestimonialsSection />

      {/* Integrated Location & Map */}
      <LocationSection />

      {/* Payment Options */}
      <PaymentMethods />

      {/* Final Impactful CTA Banner */}
      <FinalCta />

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={(type) => setPrivacyModalType(type)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsapp />

      {/* Privacy & Terms Modal */}
      <PrivacyModal
        type={privacyModalType}
        onClose={() => setPrivacyModalType(null)}
      />

      {/* Interactive Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
