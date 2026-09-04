import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Check } from 'lucide-react';

export default function WorkshopGallery() {
  return (
    <section id="verkstad" className="py-20 bg-[#090D15] relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Hitta till oss
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Välkommen till verkstaden på Nytorpsvägen
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Vi finns centralt och lättillgängligt belägna i Täby med goda parkeringsmöjligheter och smidiga kommunikationer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Photos of actual workshop */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-slate-800 relative h-72 sm:h-80 shadow-card">
              <img 
                src="./assets/workshop_building.jpg" 
                alt="MEKIAN Bilverkstad byggnad i Täby" 
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = "./assets/workshop_front.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <h3 className="text-white font-bold text-base font-display">Nytorpsvägen 2A, Täby</h3>
                  <p className="text-xs text-slate-300">Modern och välutrustad verkstad för alla bilmärken</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 relative h-36 bg-slate-900">
                <img 
                  src="./assets/workshop_front.jpg" 
                  alt="MEKIAN Bilverkstad kundmottagning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white font-medium">
                  Verkstadens entré
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 relative h-36 bg-slate-900 flex flex-col justify-center items-center p-4 text-center bg-gradient-to-br from-slate-900 to-slate-800">
                <span className="text-xs text-slate-400">Kommunikationer</span>
                <span className="text-sm font-bold text-white mt-1">Nära Roslagsbanan & E18</span>
                <span className="text-[11px] text-sky-400 mt-1">Smidig inlämning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact card, Opening hours, Directions CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  MEKIAN Bilverkstad AB
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Org.nr: Registrerat svenskt aktiebolag i Täby
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>Besöksadress</span>
                  </div>
                  <p className="text-sm font-bold text-white">Nytorpsvägen 2A</p>
                  <p className="text-xs text-slate-300">183 53 Täby, Stockholm</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Telefon</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    <a href="tel:087684570" className="hover:text-sky-400 transition-colors">08-768 45 70</a>
                  </p>
                  <p className="text-xs text-slate-300">
                    Mobil: <a href="tel:0739748797" className="hover:text-sky-400 transition-colors">073-974 87 97</a>
                  </p>
                </div>
              </div>

              {/* Hours Block */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Öppettider
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Lördagsöppet
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Måndag – Fredag:</span>
                    <span className="font-semibold text-white">07:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Lördag:</span>
                    <span className="font-semibold text-amber-400">10:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Söndag:</span>
                    <span className="text-slate-500">Stängt</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Nytorpsvägen+2A,+183+53+Täby"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-glow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Öppna i Google Maps</span>
              </a>
              <a
                href="mailto:info@mekian.com"
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>info@mekian.com</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
