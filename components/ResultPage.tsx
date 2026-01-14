
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { CheckCircle, ShieldCheck, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ResultPageProps {
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 z-50 bg-stone-900 text-white flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-700 py-2 md:py-4">
        
        {/* Profile Card - Compacted for Mobile */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-4 md:mb-8 relative border border-white/10">
          <div className="relative h-56 md:h-96 overflow-hidden">
            <img 
              src={IMAGES.authority2} 
              alt={EXPERT_NAME} 
              className="w-full h-full object-cover object-center scale-100" 
            />
            
            {/* Bottom transition gradient to card body */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            
            {/* Floating Badge on Image */}
            <div className="absolute top-3 right-3 bg-amber-500 text-stone-900 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center shadow-lg z-20">
              <Sparkles size={10} className="mr-1" />
              MÉTODO EXCLUSIVO
            </div>
          </div>
          
          <div className="p-4 md:p-8 text-center relative z-10 bg-white">
            <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-[9px] md:text-xs font-bold mb-2 md:mb-4 border border-green-100">
              <CheckCircle size={12} className="mr-1" />
              ANÁLISE CONCLUÍDA
            </div>
            
            <h2 className="text-stone-900 text-xl md:text-3xl font-serif mb-0.5 leading-tight tracking-tight">Perfil Compatível</h2>
            <p className="text-amber-600 font-bold text-base md:text-xl mb-2 md:mb-4 italic">Dra. {EXPERT_NAME} te aprovou.</p>
            
            <p className="text-stone-500 text-xs md:text-base leading-relaxed px-1">
              Seus objetivos estão alinhados com nossa filosofia de naturalidade e segurança.
            </p>
          </div>
        </div>

        {/* CTAs - Optimized for Mobile Viewport */}
        <div className="space-y-2.5 px-1">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full py-3.5 md:py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-green-500/30 active:scale-95 transition-all group"
          >
            <span className="flex items-center">
              ENVIAR RESULTADO À DRA
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-[9px] opacity-80 font-normal uppercase tracking-widest">Agendar horário prioritário</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-2xl font-semibold text-xs md:text-sm transition-all"
          >
            <MessageCircle size={16} className="mr-2" />
            TENHO DÚVIDAS
          </a>

          <button
            onClick={onContinue}
            className="flex items-center justify-center w-full py-1.5 text-stone-500 font-medium text-[10px] hover:text-white transition-all uppercase tracking-widest"
          >
            Apenas visitar o site
          </button>
        </div>

        <div className="mt-4 md:mt-8 flex flex-col items-center justify-center text-stone-500 text-[9px] space-y-0.5">
          <div className="flex items-center">
            <ShieldCheck size={10} className="mr-1" />
            Ambiente Seguro e Criptografado
          </div>
          <p>© {new Date().getFullYear()} Harmonização Facial Premium</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
