import React, { useState } from 'react';
import { Wrench, Shield, Disc, Cpu, Sparkles, Check, ArrowUpRight, Gauge, ChevronRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('service');

  const services = [
    {
      id: 'service',
      title: 'Originalservice',
      subtitle: 'Enligt biltillverkarens rekommendationer',
      tag: 'Nybilsgaranti gäller',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      icon: <Gauge className="w-6 h-6 text-sky-400" />,
      description: 'Hos MEKIAN får du en fullvärdig originalservice med stämpel i både fysisk och digital servicebok. Vi använder godkända originaldelar med dokumenterad garanti på både arbete och material.',
      points: [
        'Byte av motorolja och oljefilter enligt tillverkarspecifikation',
        'Noggrann kontroll av ca 200 säkerhetspunkter',
        'Digital felsökning och radering av felkoder (Autodata)',
        'Stämpel i serviceboken & registrering i digital servicebok',
        'Återställning av bilens servicemeddelande / serviceindikator',
        'Fullständigt skriftligt serviceprotokoll överlämnas'
      ],
      popular: true
    },
    {
      id: 'reparation',
      title: 'Bilreparationer & Felsökning',
      subtitle: 'Märkesoberoende mekaniskt arbete',
      tag: 'Autodata Diagnos',
      tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      description: 'Har en varningslampa tänts eller låter något ovanligt? Vi utför kvalificerad felsökning och mekaniska reparationer på alla bilmärken med moderna diagnosinstrument.',
      points: [
        'Bromsbyte: bromsskivor, bromsbelägg, bromsok & bromsvätska',
        'Fjädring, stötdämpare, spindelleder och länkarmar',
        'Avgassystem, ljuddämpare och partikelfilter',
        'Koppling, växellåda och drivaxlar',
        'Startmotor, generator och 12V batteribyte',
        'Elektronisk felsökning och komponenttest'
      ],
      popular: false
    },
    {
      id: 'rostskydd',
      title: 'Rostskyddsbehandling',
      subtitle: 'Specialistkompetens för nordiskt klimat',
      tag: 'Långsiktigt värdeskydd',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      description: 'Nordiskt vägsalt och fukt är bilens värsta fiende. En professionell rostskyddsbehandling minskar risken för dyra framtida plåt- och underredsreparationer och bevarar bilens andrahandsvärde.',
      points: [
        'Fullständig rostskyddsbehandling (hålrum, dörrar, balkar & underrede)',
        'Halv rostskyddsbehandling för utsatta partier',
        'Underredsbehandling med slitstarkt slitageskydd',
        'Högtryckstvätt och noggrann torkning före applicering',
        'Passar både nyare och äldre bilar samt transportbilar',
        'Dokumentation och garanti på utfört rostskydd'
      ],
      popular: false
    },
    {
      id: 'dack',
      title: 'Däckservice & Däckförvaring',
      subtitle: 'Smidigt säsongsskifte och trygg förvaring',
      tag: 'Däckbyte & Balansering',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      icon: <Disc className="w-6 h-6 text-blue-400" />,
      description: 'Vi hjälper dig med snabbt däckbyte, hjulbalansering och däckförvaring i Täby så att dina hjul förvaras tryggt mellan säsongerna.',
      points: [
        'Däckbyte och skifte inför sommar- och vintersäsongen',
        'Hjulbalansering för vibrationsfri och stabil gång',
        'Däckförvaring mellan säsongerna i Täby',
        'Kontroll av mönsterdjup, slitage och lufttryck',
        'Korrekt åtdragning med momentnyckel',
        'Hjälp med rådgivning och beställning av nya däck'
      ],
      popular: false
    }
  ];

  return (
    <section id="tjanster" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Våra Tjänster
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Allt din bil behöver — under ett och samma tak
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Vi utför service och reparationer på alla bilmärken med målet att du som kund ska känna dig trygg, nöjd och väl omhändertagen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              className={`rounded-2xl p-6 sm:p-8 glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden ${
                s.popular ? 'border-sky-500/40 shadow-glow' : 'border-slate-800'
              }`}
            >
              {s.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-sky-500 to-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-sm">
                  Mest efterfrågad
                </div>
              )}

              <div className="space-y-6">
                {/* Header of card */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                    {s.icon}
                  </div>
                  <div className="space-y-1">
                    <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded border ${s.tagColor}`}>
                      {s.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {s.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(s.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
                >
                  <span>Boka {s.title.toLowerCase()}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:087684570"
                  className="text-xs text-slate-400 hover:text-slate-200"
                >
                  Frågor? Ring 08-768 45 70
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
