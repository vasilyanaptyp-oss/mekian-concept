import React from 'react';
import { Shield, Award, Cpu, FileCheck, Clock, Users } from 'lucide-react';

export default function WhyMekian() {
  const points = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Bibehållen nybilsgaranti',
      desc: 'Vi utför servicen fackmannamässigt enligt biltillverkarens rekommendationer och specifikationer, vilket gör att din nybilsgaranti fortsätter att gälla.'
    },
    {
      icon: <Award className="w-6 h-6 text-sky-400" />,
      title: 'Originaldelar med garanti',
      desc: 'Vi kompromissar aldrig med säkerheten. Alla reservdelar håller originalkvalitet med full garanti på material och arbete.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      title: 'Avancerad diagnos (Autodata)',
      desc: 'Utrustade med professionella diagnosinstrument för att läsa felkoder, nollställa serviceindikatorer och släcka varningslampor.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-400" />,
      title: 'Stämpel i digital servicebok',
      desc: 'Vi för in servicen i både fysisk och digital servicebok, så att bilens historik och andrahandsvärde förblir intakt.'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: 'Lördagsöppet 10:00 – 16:00',
      desc: 'Vi vet att vardagar är stressiga. Lämna eller hämta bilen på lördagar när det passar ditt schema bäst.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Personlig service i Täby',
      desc: 'Hos oss pratar du direkt med mekanikern som tar hand om din bil. Inga anonyma växlar, bara raka och ärliga besked.'
    }
  ];

  return (
    <section id="varfor-oss" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
            Kvalitet & Trygghet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Varför välja MEKIAN i Täby?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Vi kombinerar den stora kedjans professionella standard och reservdelsgarantier med den lokala verkstadens personliga engagemang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800 flex flex-col space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
