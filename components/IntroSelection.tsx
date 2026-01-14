
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { MessageCircle, Sparkles } from 'lucide-react';

interface IntroProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const IntroSelection: React.FC<IntroProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-stone-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-amber-200 overflow-hidden shadow-2xl">
            <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover" />
          </div>
        </div>

        <h1 className="text-3xl font-serif mb-2 tracking-tight">Dra. {EXPERT_NAME}</h1>
        <p className="text-stone-500 mb-10 uppercase tracking-widest text-xs font-medium">Harmonização Facial de Alta Performance</p>

        <div className="space-y-3">
          {/* Primary CTA */}
          <button
            onClick={onStartQuiz}
            className="w-full py-5 bg-stone-900 text-white rounded-xl font-bold text-lg shadow-xl active:scale-95 transition-all flex flex-col items-center justify-center group"
          >
            <span className="flex items-center">
              <Sparkles size={18} className="mr-2 text-amber-400 group-hover:animate-pulse" />
              FAZER AVALIAÇÃO EXCLUSIVA
            </span>
            <span className="block text-[10px] font-normal opacity-70 mt-1 uppercase tracking-widest">Inicie seu diagnóstico personalizado</span>
          </button>

          {/* WhatsApp CTA - Soft Amber/Gold Theme */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl font-semibold text-base active:scale-95 transition-all flex items-center justify-center hover:bg-amber-100"
          >
            <MessageCircle size={18} className="mr-2 text-amber-600" />
            Falar no WhatsApp agora
          </a>

          {/* Secondary CTA */}
          <button
            onClick={onGoToSite}
            className="w-full py-3.5 bg-transparent border border-stone-200 text-stone-400 rounded-xl font-medium text-sm active:scale-95 transition-all hover:text-stone-600 hover:border-stone-300"
          >
            Acessar Site Direto
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSelection;
