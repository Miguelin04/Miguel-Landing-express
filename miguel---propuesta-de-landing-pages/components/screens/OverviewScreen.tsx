
import React from 'react';
import { PROBLEMS } from '../../constants';

interface OverviewScreenProps {
  onNext: () => void;
  onBack: () => void;
  onShare: () => void;
}

const OverviewScreen: React.FC<OverviewScreenProps> = ({ onNext, onBack, onShare }) => {
  return (
    <div className="flex-1 flex flex-col pb-24 md:pb-32">
      <main className="p-6 md:p-12">
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20 text-center md:text-left">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-primary/20 rounded-full scale-125 blur-3xl opacity-40"></div>
            <div 
              className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-3xl h-48 w-48 md:h-64 md:w-64 border-8 border-white dark:border-gray-800 shadow-2xl mx-auto"
              style={{ backgroundImage: 'url("https://picsum.photos/seed/miguel-pro/400/400")' }}
            ></div>
            <div className="absolute -bottom-2 -right-2 bg-accent-gold text-white p-4 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl font-bold">star</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-gray-900 dark:text-white leading-none">Miguel</h1>
            <p className="text-primary dark:text-accent-gold font-black text-sm uppercase tracking-[0.4em] mb-6">WordPress Architect & Conversion Expert</p>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium mb-8">
              No diseño sitios bonitos, diseño <span className="text-primary dark:text-white font-bold">activos digitales</span> que transforman el tráfico en ingresos predecibles.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['Conversion-First', 'Clean Code', 'Divi Power', 'UX Strategy'].map(tag => (
                <span key={tag} className="px-5 py-2 bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent-gold rounded-full text-[11px] font-black uppercase tracking-widest border border-primary/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="md:col-span-1 bg-primary text-white rounded-[2.5rem] p-10 shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl">lightbulb</span>
              Visión
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              Tu landing page es tu mejor comercial trabajando 24/7. Mi misión es que la tecnología no sea una barrera, sino el acelerador de tu negocio.
            </p>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-[2.5rem] p-10 shadow-xl shadow-primary/5 border border-gray-100 dark:border-gray-800">
            <div className="mb-10">
              <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Puntos de Dolor Comunes</h3>
              <p className="text-gray-400 font-bold mt-2 text-sm uppercase tracking-widest">Lo que estamos resolviendo hoy</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PROBLEMS.map((problem) => (
                <div key={problem.id} className="flex items-start gap-5 group">
                  <div className={`${problem.bgClass} p-4 rounded-2xl flex shrink-0 items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-2xl ${problem.colorClass.replace('border-', 'text-')}`}>{problem.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 text-gray-900 dark:text-white leading-tight">{problem.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-md mx-auto">
          <button 
            onClick={onNext}
            className="w-full bg-primary hover:bg-primary/95 text-white font-black py-6 rounded-3xl shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 group transition-all text-xl"
          >
            Ver Estrategia de Solución
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-2xl">trending_flat</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default OverviewScreen;
