import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RostskyddHighlight from './components/RostskyddHighlight';
import WhyMekian from './components/WhyMekian';
import WorkshopGallery from './components/WorkshopGallery';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Phone, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import gsap from 'gsap';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('Bilservice');
  const [bookingRegnr, setBookingRegnr] = useState('');

  const handleOpenBooking = (service = 'Bilservice', regnr = '') => {
    setBookingService(service);
    setBookingRegnr(regnr);
    setIsBookingOpen(true);
  };

  useEffect(() => {
    // Subtle GSAP entrance animation for smooth polish
    gsap.fromTo(
      'header',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking('Bilservice')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onStartBooking={(regnr, service) => handleOpenBooking(service, regnr)} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <RostskyddHighlight onOpenBooking={(service) => handleOpenBooking(service)} />
        <WhyMekian />
        <WorkshopGallery />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking & Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
        initialRegnr={bookingRegnr}
      />

      {/* Floating Sticky Mobile Quick Action Bar (Visible only on mobile devices) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0D131F]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:087684570"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Ring: 08-768 45 70</span>
        </a>
        <button
          onClick={() => handleOpenBooking('Bilservice')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-glow active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Boka tid</span>
        </button>
      </div>
    </div>
  );
}
