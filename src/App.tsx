import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from './data/portfolioData';
import { CartProvider, useCart } from './context/CartContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { DeliveryNoticeBar } from './components/DeliveryNoticeBar';
import { Navbar } from './components/Navbar';
import { HeroAtelier } from './components/HeroAtelier';
import { LuxuryMarquee } from './components/LuxuryMarquee';
import { AtelierServices } from './components/AtelierServices';
import { BespokeCalculator } from './components/BespokeCalculator';
import { BespokeJourney } from './components/BespokeJourney';
import { LookbookCatalog } from './components/LookbookCatalog';
import { GiftCertificates } from './components/GiftCertificates';
import { AtelierAtmosphere } from './components/AtelierAtmosphere';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BoutiqueFAQ } from './components/BoutiqueFAQ';
import { BookingSection } from './components/BookingSection';
import { AtelierFooter } from './components/AtelierFooter';
import { FloatingConcierge } from './components/FloatingConcierge';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { LightboxModal } from './components/LightboxModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { FabricGuideModal } from './components/FabricGuideModal';
import { CheckCircle2, Sparkles } from 'lucide-react';

const AppContent: React.FC = () => {
  const { toast } = useCart();
  const { lang } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFabricGuideOpen, setIsFabricGuideOpen] = useState(false);

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
      {/* Top Delivery & Atelier Notice Bar */}
      <DeliveryNoticeBar />

      {/* Haute Couture Navbar with Multi-Language Switcher (RU | ENG | עברית) */}
      <Navbar />

      <main>
        {/* Editorial Hero with the specified single Model Photo & Luxury Framing */}
        <HeroAtelier
          onExploreClick={() => scrollToSection('gallery')}
          onCalculatorClick={() => scrollToSection('calculator')}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Golden Thread Marquee Ticker */}
        <LuxuryMarquee />

        {/* 6 Core Atelier Services (with full multi-language translations & fixed textile image) */}
        <AtelierServices />

        {/* Interactive Bespoke Cost & Turnaround Calculator */}
        <BespokeCalculator />

        {/* 4 Steps of Bespoke Creation (The Couture Journey) */}
        <BespokeJourney />

        {/* Complete Lookbook & Gallery with online ordering without payment */}
        <LookbookCatalog
          items={PORTFOLIO_ITEMS}
          onItemSelect={setSelectedItem}
          onOpenFabricGuide={() => setIsFabricGuideOpen(true)}
        />

        {/* Boutique Gift Certificates */}
        <GiftCertificates />

        {/* About the Master: Galina Khvostenko & Studio Atmosphere */}
        <AtelierAtmosphere />

        {/* Client Stories & Testimonials */}
        <TestimonialsSection />

        {/* Boutique FAQ & Ordering without payment */}
        <BoutiqueFAQ />

        {/* Booking Fitting & Contact Form with Google Maps */}
        <BookingSection />
      </main>

      {/* Luxury Atelier Footer */}
      <AtelierFooter />

      {/* Accessibility Widget (Кнопка доступности для людей с инвалидностью / נגישות) */}
      <AccessibilityWidget />

      {/* Floating Concierge Action (WhatsApp) */}
      <FloatingConcierge />

      {/* Fullscreen Master Photo Lightbox with Size Selector & Cart action */}
      <LightboxModal
        item={selectedItem}
        activeLang={lang}
        onClose={() => setSelectedItem(null)}
        onNextItem={handleNextItem}
        onPrevItem={handlePrevItem}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer />

      {/* Saved Wishlist Drawer */}
      <WishlistDrawer onItemSelect={setSelectedItem} />

      {/* Interactive Size Guide Modal */}
      <SizeGuideModal />

      {/* Fabric Craftsmanship & Care Modal */}
      <FabricGuideModal
        isOpen={isFabricGuideOpen}
        onClose={() => setIsFabricGuideOpen(false)}
      />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom duration-300 pointer-events-none">
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-noir-900/95 border border-gold-400/50 text-white text-xs sm:text-sm font-cinzel shadow-2xl backdrop-blur-xl">
            <Sparkles size={16} className="text-gold-400" />
            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
