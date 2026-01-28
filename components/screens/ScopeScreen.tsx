
import React from 'react';
import { SCOPE_ITEMS } from '../../constants';

interface ScopeScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const ScopeScreen: React.FC<ScopeScreenProps> = ({ onNext, onBack }) => {
  return (
    <div className="flex-1 flex flex-col pb-32">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <div 
            onClick={onBack}
            className="text-[#111518] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </div>
          <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Alcance del Servicio</h2>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Card */}
        <div className="px-4 pt-6">
          <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-white shadow-lg">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 size-32 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative z-10">
              <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white/20 rounded">WordPress & Divi</span>
              <h1 className="text-2xl font-extrabold leading-tight mb-2">Landing Page Premium de Alta Conversión</h1>
              <p className="text-white/80 text-sm font-medium">Propuesta personalizada para tu proyecto.</p>
            </div>
          </div>
        </div>

        <div className="px-4 mt-8">
          <h2 className="text-[#111518] dark:text-white tracking-tight text-2xl font-bold leading-tight">¿Qué incluye el servicio?</h2>
        </div>

        {/* Highlight Image Card */}
        <div className="p-4">
          <div className="flex flex-col rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[16/7] bg-cover"
              style={{ backgroundImage: 'url("../../img/miguel.png")' }}
            ></div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-gold text-lg">star</span>
                <p className="text-primary dark:text-blue-400 text-[11px] font-extrabold tracking-wider uppercase">Solución Integral</p>
              </div>
              <p className="text-[#111518] dark:text-white text-lg font-bold leading-tight">Diseño Estratégico en Divi Builder</p>
              <p className="text-[#5e7687] dark:text-gray-400 text-sm leading-relaxed mt-1">Estructura pensada para guiar al usuario hacia la acción final, optimizando cada sección para resultados reales.</p>
            </div>
          </div>
        </div>

        {/* Feature Checklist */}
        <div className="px-4 space-y-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
            {SCOPE_ITEMS.map((item) => (
              <div key={item.id} className="flex items-start gap-x-4 p-4">
                <div className="mt-1">
                  <div className="h-5 w-5 rounded-full border-primary border-2 bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[#111518] dark:text-white text-base font-bold">{item.title}</p>
                  <p className="text-[#5e7687] dark:text-gray-400 text-xs mt-0.5">{item.description}</p>
                </div>
                {item.isTop && (
                  <span className="bg-accent-gold/10 text-accent-gold text-[10px] font-bold px-2 py-0.5 rounded-full self-start mt-1">TOP</span>
                )}
                {item.isCheck && (
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6">
          <button 
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 h-14 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg transition-all active:scale-[0.98] font-bold text-base"
          >
            <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
            <span>Aceptar Propuesta</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ScopeScreen;
