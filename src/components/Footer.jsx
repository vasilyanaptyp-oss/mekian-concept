import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070A10] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm font-display">
                M
              </div>
              <span className="text-lg font-bold text-white font-display">MEKIAN Bilverkstad</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Din trygga, oberoende bilverkstad i Täby. Vi servar och reparerar alla bilmärken med originaldelar, bibehållen nybilsgaranti och personlig service.
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Service med bibehållen nybilsgaranti</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
              Tjänster
            </h4>
            <ul className="space-y-2">
              <li><a href="#tjanster" className="hover:text-sky-400 transition-colors">Originalservice & Kontroll</a></li>
              <li><a href="#rostskydd" className="hover:text-sky-400 transition-colors">Rostskyddsbehandling</a></li>
              <li><a href="#tjanster" className="hover:text-sky-400 transition-colors">Däckbyte & Däckförvaring</a></li>
              <li><a href="#tjanster" className="hover:text-sky-400 transition-colors">Digital felkodsläsning</a></li>
            </ul>
          </div>

          {/* Col 3: Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              Öppettider
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Måndag – Fredag:</span>
                <span className="text-white font-semibold">07:00 – 17:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Lördag:</span>
                <span className="text-amber-400 font-semibold">10:00 – 16:00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Söndag:</span>
                <span className="text-slate-500">Stängt</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Drop-in vid akuta ärenden i mån av tid.
            </p>
          </div>

          {/* Col 4: Contact details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
              Kontaktuppgifter
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Nytorpsvägen 2A, 183 53 Täby, Stockholm</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:087684570" className="hover:text-white transition-colors">08-768 45 70</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0739748797" className="hover:text-white transition-colors">073-974 87 97</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@mekian.com" className="hover:text-white transition-colors">info@mekian.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} MEKIAN Bilverkstad AB. Alla rättigheter förbehållna.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Framtaget som moderniserat webbkoncept för MEKIAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
