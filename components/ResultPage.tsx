
import React from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { CheckCircle, ShieldCheck, MessageCircle, ArrowRight, X } from 'lucide-react';

interface ResultPageProps {
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 z-50 bg-stone-900 text-white flex items-center justify-center p-6 overflow-y-auto">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-700">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-8 relative">
          <div className="h-64 overflow-hidden">
            <img src={IMAGES.hero} alt={EXPERT_NAME} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
          
          <div className="p-8 text-center -mt-12 relative z-10">
            <div className="inline-flex items-center px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-4">
              <CheckCircle size={14} className="mr-2" />
              ANÁLISE CONCLUÍDA
            </div>
            
            <h2 className="text-stone-900 text-2xl font-serif mb-2 uppercase tracking-tight">Perfil Compatível</h2>
            <p className="text-stone-900 font-bold text-lg mb-4">Você é a Paciente Ideal.</p>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              Com base nas suas respostas, o Método da <span className="font-bold text-stone-800">Dra. {EXPERT_NAME}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20 active:scale-95 transition-all animate-bounce-subtle"
          >
            1. ENVIAR MINHA AVALIAÇÃO À DRA
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl font-semibold text-base transition-all"
          >
            <MessageCircle size={20} className="mr-2" />
            2. CHAMAR NO WHATSAPP SEM COMPROMISSO
          </a>

          <button
            onClick={onContinue}
            className="flex items-center justify-center w-full py-4 text-stone-400 font-medium text-sm hover:text-white transition-all"
          >
            3. NÃO ENVIAR E CONTINUAR NO SITE
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center text-stone-500 text-xs">
          <ShieldCheck size={14} className="mr-1" />
          Seus dados estão protegidos e são confidenciais
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
