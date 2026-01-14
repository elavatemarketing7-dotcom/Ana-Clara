
import React from 'react';
import { EXPERT_NAME, IMAGES } from '../constants';

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
        <p className="text-stone-500 mb-12 uppercase tracking-widest text-xs font-medium">Harmonização Facial de Alta Performance</p>

        <div className="space-y-4">
          <button
            onClick={onStartQuiz}
            className="w-full py-5 bg-stone-900 text-white rounded-xl font-bold text-lg shadow-xl active:scale-95 transition-all"
          >
            FAZER AVALIAÇÃO EXCLUSIVA
            <span className="block text-xs font-normal opacity-70 mt-1">Quiz interativo personalizado</span>
          </button>

          <button
            onClick={onGoToSite}
            className="w-full py-4 bg-transparent border-2 border-stone-300 text-stone-800 rounded-xl font-semibold text-base active:scale-95 transition-all"
          >
            Acessar Site Direto
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSelection;
