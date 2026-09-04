import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg' : 'bg-transparent border-b border-white/5'
    }`}>
      {/* Top micro banner */}
      <div className="bg-slate-900/80 border-b border-white/5 text-xs text-slate-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Nytorpsvägen 2A, 183 53 Täby
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Mån–Fre 07:00–17:00 | Lör 10:00–16:00
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Nybilsgaranti gäller alltid
            </span>
            <a href="tel:087684570" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
              Direktkontakt: 08-768 45 70
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-glow text-lg font-display">
            M
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-display">MEKIAN</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-medium border border-sky-500/30">Täby</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Bilverkstad AB</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#tjanster" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Tjänster
          </a>
          <a href="#rostskydd" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Rostskydd
          </a>
          <a href="#varfor-oss" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Varför MEKIAN
          </a>
          <a href="#verkstad" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Verkstaden
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Vanliga frågor
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="tel:087684570" 
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-sm font-medium border border-slate-700/60 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>08-768 45 70</span>
          </a>
          <button 
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold shadow-glow transition-all active:scale-95 hover:shadow-sky-500/30"
          >
            <Calendar className="w-4 h-4" />
            <span>Boka tid / Offert</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a 
            href="tel:087684570" 
            aria-label="Ring verkstaden direkt"
            className="p-2.5 rounded-lg bg-sky-600/20 text-sky-400 border border-sky-500/30 active:scale-95"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Öppna navigationsmeny"
            className="p-2.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D131F] border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="space-y-1">
            <a 
              href="#tjanster" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Våra Tjänster
            </a>
            <a 
              href="#rostskydd" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Rostskyddsbehandling
            </a>
            <a 
              href="#varfor-oss" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Varför välja oss
            </a>
            <a 
              href="#verkstad" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Verkstaden & Öppettider
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
            >
              Frågor & Svar
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold flex items-center justify-center gap-2 shadow-glow text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Boka tid eller få offert</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href="tel:087684570" 
                className="py-2.5 px-3 rounded-lg bg-slate-800 text-slate-200 text-center text-sm font-medium flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>08-768 45 70</span>
              </a>
              <a 
                href="tel:0739748797" 
                className="py-2.5 px-3 rounded-lg bg-slate-800 text-slate-200 text-center text-sm font-medium flex items-center justify-center gap-1.5 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>073-974 87 97</span>
              </a>
            </div>
          </div>

          <div className="text-xs text-slate-400 pt-2 flex flex-col gap-1 border-t border-slate-800/60">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mån–Fre 07:00–17:00 | Lör 10:00–16:00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Nytorpsvägen 2A, Täby</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
