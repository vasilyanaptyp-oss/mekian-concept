import React from 'react';
import { ShieldCheck, Snowflake, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function RostskyddHighlight({ onOpenBooking }) {
  const levels = [
    {
      title: 'Fullständig behandling',
      badge: 'Fullt skydd',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      desc: 'Noggrann behandling av bilens alla hålrum, dörrar, balkar och hela underredet för maximalt skydd mot vägsalt och fukt.',
      recommended: true
    },
    {
      title: 'Halv behandling',
      badge: 'Utsatta partier',
      badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      desc: 'Fokuserad behandling av bilens mest utsatta partier för att förebygga begynnande rostskador.',
      recommended: false
    },
    {
      title: 'Underredsbehandling',
      badge: 'Chassi & underrede',
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      desc: 'Skyddar bilens underrede och chassikomponenter mot slitage från stensprut, fukt och vägsalt.',
      recommended: false
    }
  ];

  return (
    <section id="rostskydd" className="py-20 bg-[#090D15] relative overflow-hidden border-b border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-700/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-400">
                <Snowflake className="w-3.5 h-3.5" />
                <span>Specialist på nordiskt klimat</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  Effektivt rostskydd mot vägsalt och korrosion
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Med en rostskyddsbehandlad bil minskar risken för dyra framtida reparationer. Vi skyddar bilens mest utsatta zoner mot fukt och nordiskt vägsalt.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Förlänger bilens livslängd:</strong> Minskar risken för anmärkningar vid bilbesiktning.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Högre andrahandsvärde:</strong> En rostskyddad bil är markant enklare att sälja vidare till rätt pris.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dokumenterat arbete:</strong> Noggrann kontroll före och efter behandling.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking('Rostskyddsbehandling')}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-gold-glow flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>Boka rostskyddsbehandling</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:087684570"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 text-center transition-colors"
                >
                  Frågor? Ring 08-768 45 70
                </a>
              </div>
            </div>

            {/* Right Column: 3 Treatment Cards */}
            <div className="lg:col-span-6 space-y-4">
              {levels.map((lvl, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-xl border transition-all ${
                    lvl.recommended 
                      ? 'bg-slate-800/90 border-amber-500/50 shadow-lg' 
                      : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white font-display">
                      {lvl.title}
                    </h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${lvl.badgeColor}`}>
                      {lvl.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lvl.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
