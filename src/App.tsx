import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroAtelier } from './components/HeroAtelier';
import { LuxuryMarquee } from './components/LuxuryMarquee';
import { AtelierServices } from './components/AtelierServices';
import { BespokeCalculator } from './components/BespokeCalculator';
import { BespokeJourney } from './components/BespokeJourney';
import { LookbookCatalog } from './components/LookbookCatalog';
import { AtelierAtmosphere } from './components/AtelierAtmosphere';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { AtelierFooter } from './components/AtelierFooter';
import { FloatingConcierge } from './components/FloatingConcierge';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { LightboxModal } from './components/LightboxModal';

export const App: React.FC = () => {
  const [activeLang, setActiveLang] = useState<'ru' | 'en' | 'he'>('ru');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[nextIndex]);
  };

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = PORTFOLIO_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[prevIndex]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-noir-950 text-[#E8E6DF] selection:bg-gold-500 selection:text-black">
      {/* Haute Couture Navbar with Mobile Burger Menu & Vector Logo */}
      <Navbar
        activeLang={activeLang}
        onLangChange={setActiveLang}
        onBookClick={() => scrollToSection('contact')}
      />

      <main>
        {/* Editorial Hero with the specified single Model Photo */}
        <HeroAtelier
          onExploreClick={() => scrollToSection('gallery')}
          onCalculatorClick={() => scrollToSection('calculator')}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Golden Thread Marquee Ticker */}
        <LuxuryMarquee />

        {/* 6 Core Atelier Services */}
        <AtelierServices />

        {/* Interactive Bespoke Cost & Turnaround Calculator */}
        <BespokeCalculator />

        {/* 4 Steps of Bespoke Creation (The Couture Journey) */}
        <BespokeJourney />

        {/* Complete Lookbook & Gallery (Only dresses, jackets, accessories, tailoring, textiles — NO paintings!) */}
        <LookbookCatalog
          items={PORTFOLIO_ITEMS}
          onItemSelect={setSelectedItem}
        />

        {/* About the Master: Galina Khvostenko & Studio Atmosphere */}
        <AtelierAtmosphere />

        {/* Client Stories & Testimonials */}
        <TestimonialsSection />

        {/* Booking Fitting & Contact Form */}
        <BookingSection />
      </main>

      {/* Luxury Atelier Footer */}
      <AtelierFooter />

      {/* Accessibility Widget (Кнопка доступности для людей с инвалидностью / נגישות) */}
      <AccessibilityWidget />

      {/* Floating Concierge Action (WhatsApp) */}
      <FloatingConcierge />

      {/* Fullscreen Master Photo Lightbox */}
      <LightboxModal
        item={selectedItem}
        activeLang={activeLang}
        onClose={() => setSelectedItem(null)}
        onNextItem={handleNextItem}
        onPrevItem={handlePrevItem}
      />
    </div>
  );
};

export default App;
