import React, { useState } from 'react';
import { Shield, Wrench, CheckCircle2, ArrowRight, Clock, Car, Phone, MapPin } from 'lucide-react';

export default function Hero({ onStartBooking }) {
  const [regnr, setRegnr] = useState('');
  const [selectedService, setSelectedService] = useState('Bilservice');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onStartBooking(regnr, selectedService);
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-noise border-b border-slate-800/60">
      {/* Background subtle ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-600/5 blur-[90px] pointer-events-none rounded-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Prop, Interactive Regnr Box */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Nytorpsvägen 2A, Täby</span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-400 font-semibold">Öppet mån–lör</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Din trygga bilverkstad <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500">
                  i Täby & Norrort
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Vi servar och reparerar alla bilmärken med bibehållen nybilsgaranti, stämpel i digital servicebok och originaldelar med dokumenterad garanti.
              </p>
            </div>

            {/* Interactive Registration Box (Regnr-sök) */}
            <div className="glass-panel p-5 sm:p-6 rounded-2xl shadow-card border border-slate-700/60 max-w-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-sky-400 flex items-center gap-1.5">
                  <Car className="w-4 h-4" />
                  Bokningsförfrågan med regnr
                </span>
                <span className="text-xs text-slate-400">Direkt till verkstaden</span>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                {/* Service pills selector */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Bilservice', 'Rostskydd', 'Däck & Bromsar'].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`py-2 px-2.5 rounded-lg font-medium transition-all text-center truncate ${
                        selectedService === srv
                          ? 'bg-sky-600 text-white shadow-sm font-semibold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>

                {/* Input with Swedish Plate Frame */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="w-5 h-6 bg-blue-700 rounded-sm flex flex-col items-center justify-center text-[9px] font-bold text-white leading-none">
                        <span>S</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      value={regnr}
                      onChange={(e) => setRegnr(e.target.value.toUpperCase())}
                      placeholder="REGNR (t.ex. ABC 123)"
                      maxLength={8}
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white font-mono text-base font-semibold tracking-wider placeholder:text-slate-500 placeholder:font-sans placeholder:font-normal focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                  >
                    <span>Fortsätt till förfrågan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Ingen bindningstid
                </span>
                <a href="tel:087684570" className="text-sky-400 hover:underline flex items-center gap-1 font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  Bråttom? Ring 08-768 45 70
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bibehållen nybilsgaranti</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Originaldelar</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Autodata diagnos</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-xs">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lördagsöppet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workshop Card & Direct Proof */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl bg-[#0D1424]">
                {/* Genuine Workshop Photo */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img 
                    src="./assets/workshop_building.jpg" 
                    alt="MEKIAN Bilverkstad verkstad i Täby" 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to workshop front if building photo path varies
                      e.target.src = "./assets/workshop_front.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Verkstaden på Nytorpsvägen 2A
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">MEKIAN Bilverkstad AB</h3>
                    <p className="text-xs text-slate-400">Fristående bilverkstad på Nytorpsvägen i Täby</p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Vardagar:</span>
                      <span className="font-semibold text-white">07:00 – 17:00</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Lördagar:</span>
                      <span className="font-semibold text-amber-400">10:00 – 16:00</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400">Söndagar:</span>
                      <span className="text-slate-500">Stängt</span>
                    </div>
                  </div>

                  {/* Direct Contact Button Inside Card */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <a
                      href="tel:087684570"
                      className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      <span>Ring verkstaden</span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=Nytorpsvägen+2A,+183+53+Täby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 text-xs font-semibold flex items-center justify-center gap-1.5 border border-sky-500/30 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>Hitta hit</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
