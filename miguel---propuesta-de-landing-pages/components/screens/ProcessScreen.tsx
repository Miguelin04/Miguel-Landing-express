
import React from 'react';
import { PROCESS_STEPS } from '../../constants';

interface ProcessScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const ProcessScreen: React.FC<ProcessScreenProps> = ({ onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col pb-32">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-gray-800">
        <div 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
        </div>
        <h2 className="text-primary dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Metodología</h2>
      </header>

      <div className="px-6 pt-8 pb-4">
        <h4 className="text-accent-gold text-xs font-bold uppercase tracking-widest mb-2">Pares de éxito</h4>
        <h1 className="text-3xl font-extrabold text-[#111518] dark:text-white leading-tight mb-4">
          Mi proceso de trabajo
        </h1>
        <p className="text-[#5e7687] dark:text-gray-400 text-base font-normal leading-relaxed">
          Un enfoque estructurado para transformar tu visión en una landing page de alta conversión, optimizada para resultados reales.
        </p>
      </div>

      <div className="px-6 mt-8 relative flex-1">
        <div className="absolute left-[39px] top-4 bottom-4 w-[1px] bg-primary/20 dark:bg-primary/40"></div>
        <div className="space-y-12">
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="relative flex gap-6">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-accent-gold text-[10px] font-bold tracking-tighter uppercase">{step.id}</span>
                  <h3 className="text-[#111518] dark:text-white text-lg font-bold">{step.title}</h3>
                </div>
                <p className="text-[#5e7687] dark:text-gray-400 text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-16">
        <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-background-dark p-6 shadow-xl shadow-primary/5">
          <div className="absolute -right-8 -top-8 size-24 rounded-full bg-accent-gold/10"></div>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-primary dark:text-white text-xl font-bold leading-tight">¿Listo para escalar?</p>
              <p className="text-[#5e7687] dark:text-gray-400 text-sm font-normal leading-normal">
                Hablemos sobre cómo aplicar esta metodología a tu próximo proyecto de WordPress.
              </p>
            </div>
            <button 
              onClick={onNext}
              className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <span className="truncate">Siguiente: Alcance</span>
            </button>
            <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-10 border border-primary/20 bg-transparent text-primary dark:text-accent-gold text-sm font-medium">
              <span className="truncate">Ver portafolio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessScreen;
