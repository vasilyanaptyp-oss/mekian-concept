import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Car, AlertCircle, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService, initialRegnr }) {
  const [service, setService] = useState(initialService || 'Bilservice');
  const [regnr, setRegnr] = useState(initialRegnr || '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone && !name) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0F1626] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Stäng formulär"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Bokningsförfrågan & Offert
              </span>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Boka tid hos MEKIAN
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fyll i dina uppgifter så återkommer vi med ett fast och tryggt prisförslag.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Önskad tjänst *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500"
                >
                  <option value="Bilservice">Originalservice & 200-punkters kontroll</option>
                  <option value="Rostskyddsbehandling">Rostskyddsbehandling & Underrede</option>
                  <option value="Däckservice">Däckbyte, Balansering eller Däckhotell</option>
                  <option value="Felsökning & Reparation">Felsökning (Autodata) & Reparation</option>
                  <option value="Bromsar & Mekanik">Bromsar, Hjulupphängning & Mekanik</option>
                  <option value="Annat ärende">Annat / Övrig förfrågan</option>
                </select>
              </div>

              {/* Registration Number (Plate) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Bilens registreringsnummer
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="w-4 h-5 bg-blue-700 rounded-sm flex flex-col items-center justify-center text-[8px] font-bold text-white leading-none">
                      <span>S</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={regnr}
                    onChange={(e) => setRegnr(e.target.value.toUpperCase())}
                    placeholder="ABC 123"
                    maxLength={8}
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono text-sm tracking-wider uppercase focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Contact Info: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ditt namn *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="För- och efternamn"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="070-123 45 67"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Message or date */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Meddelande eller önskat datum
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Beskriv vad du behöver hjälp med eller ange önskad dag/tid..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-sky-500 placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Skicka bokningsförfrågan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Brådskande ärende?</span>
              <a href="tel:087684570" className="text-sky-400 hover:underline font-semibold flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                Ring direkt: 08-768 45 70
              </a>
            </div>
          </div>
        ) : (
          /* Confirmation State (Honest concept demo) */
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                Tack för din förfrågan, {name}!
              </h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Detta är ett interaktivt koncept för <strong>MEKIAN Bilverkstad</strong>. I den skarpa versionen kopplas formuläret direkt till verkstadens e-post eller bokningssystem.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-400">Vald tjänst:</span>
                <span className="font-semibold text-white">{service}</span>
              </div>
              {regnr && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Registreringsnummer:</span>
                  <span className="font-mono text-sky-400 font-bold">{regnr}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-400">Telefon:</span>
                <span className="font-semibold text-white">{phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:087684570"
                className="flex-1 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-glow"
              >
                <Phone className="w-4 h-4" />
                <span>Ring verkstaden: 08-768 45 70</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm border border-slate-700"
              >
                Stäng
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
