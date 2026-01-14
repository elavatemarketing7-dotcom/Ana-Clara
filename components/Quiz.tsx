
import React, { useState, useEffect } from 'react';
import { EXPERT_NAME, IMAGES, WHATSAPP_URL } from '../constants';
import { ChevronRight, Heart, Sparkles, CheckCircle } from 'lucide-react';

const QUESTIONS = [
  {
    id: 1,
    text: "O que mais te incomoda hoje ao se olhar no espelho?",
    options: ["Linhas de expressão", "Perda de volume (Rosto 'murcho')", "Flacidez ou contorno facial", "Symmetry/Harmonia geral"]
  },
  {
    id: 2,
    text: "Qual é o seu maior medo em relação a procedimentos?",
    options: ["Ficar artificial", "Sentir muita dor", "Pagar caro e não ver resultado", "Problemas de saúde"]
  },
  {
    id: 3,
    text: "Você já realizou algum procedimento estético antes?",
    options: ["Sim, e amei", "Sim, mas não tive boa experiência", "Nunca fiz nada", "Apenas limpeza de pele/skin care"]
  },
  {
    id: 4,
    text: "Quanto tempo você dispõe para sua recuperação?",
    options: ["Preciso de algo imediato", "Tenho 2-3 dias", "Uma semana está ótimo", "Não me importo com o tempo"]
  }
];

interface QuizProps {
  onFinish: () => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onSkip }) => {
  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (analyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onFinish, 800);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    }
  }, [analyzing, onFinish]);

  const handleNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setAnalyzing(true);
    }
  };

  const progressPercentage = analyzing ? progress : ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-50 overflow-y-auto">
      {/* Background with expert name floating */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[20vw] font-serif whitespace-nowrap">{EXPERT_NAME}</h2>
      </div>

      <div className="relative w-full max-w-md p-6 min-h-screen flex flex-col justify-between">
        <div className="pt-8">
           {/* Floating expert photo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-stone-800 rotate-3 shadow-lg">
                <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-stone-900 text-white p-1 rounded-full border-2 border-white">
                <Heart size={12} fill="white" />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-serif font-semibold text-stone-800">Avaliação Personalizada</h3>
            <p className="text-stone-500 text-sm italic">Sinta-se segura(o). Você está em boas mãos.</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-stone-200 h-1.5 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-stone-800 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {!analyzing ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="text-xl font-semibold mb-6 text-stone-900">{QUESTIONS[step].text}</h4>
              <div className="grid gap-4">
                {QUESTIONS[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={handleNext}
                    className="w-full p-5 text-left bg-white border border-stone-200 rounded-2xl shadow-sm hover:border-stone-800 active:bg-stone-50 transition-all flex justify-between items-center group"
                  >
                    <span className="text-stone-700 font-medium">{option}</span>
                    <ChevronRight className="text-stone-300 group-hover:text-stone-800" size={20} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <Sparkles className="mx-auto text-amber-500 mb-6 animate-pulse" size={48} />
              <h4 className="text-2xl font-serif mb-2">Analisando Perfil...</h4>
              <p className="text-stone-500">Verificando compatibilidade com o método exclusivo da Dra. Ana Clara</p>
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                  {[0, 1, 2].map(i => (
                    <div 
                      key={i} 
                      className="w-3 h-3 bg-stone-800 rounded-full animate-bounce" 
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pb-8">
          <button 
            onClick={onSkip}
            className="w-full text-stone-400 text-sm font-medium hover:text-stone-800 transition-colors"
          >
            Pular e ir para o site direto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
