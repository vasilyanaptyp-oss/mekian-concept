import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Gäller min nybilsgaranti om jag servar bilen hos MEKIAN?',
      a: 'Ja, till 100%! Enligt EU-direktivet (gruppundantaget) har du som bilägare frihet att välja bilverkstad. Så länge servicen utförs enligt biltillverkarens föreskrifter och med godkända originaldelar fortsätter din nybilsgaranti att gälla precis som hos en märkesbunden verkstad.'
    },
    {
      q: 'Får jag stämpel i digital servicebok?',
      a: 'Ja. Vi för in utförd service i både bilens fysiska servicebok och i bilmärkenas officiella digitala serviceportaler. Detta bevarar bilens fulla servicehistorik och värde.'
    },
    {
      q: 'Vad innebär er rostskyddsbehandling?',
      a: 'Vi tvättar och torkar bilens underrede noggrant, demonterar skyddskåpor och applicerar beprövat rostskyddsmedel i alla balkar, hålrum, dörrar och på underredet. Det ger ett effektivt skydd mot det aggressiva svenska vägsaltet och fukten.'
    },
    {
      q: 'Kan jag lämna eller hämta bilen på en lördag?',
      a: 'Ja, vår verkstad i Täby har öppet på lördagar mellan 10:00 och 16:00 för både inlämning, utlämning och snabbare servicearbeten.'
    },
    {
      q: 'Har ni drop-in eller måste jag boka tid i förväg?',
      a: 'För schemalagd bilservice, felsökning och rostskydd rekommenderar vi att du bokar tid. För akuta ärenden, däckbyte eller kontroll kan du ofta svänga förbi eller slå oss en signal på 08-768 45 70 så hittar vi en snabb lösning.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0B0F17] relative border-b border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            Vanliga frågor & svar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Bra att veta inför ditt besök
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Har du andra funderingar? Ring oss direkt på 08-768 45 70 så hjälper vi dig.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-base hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-display">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
