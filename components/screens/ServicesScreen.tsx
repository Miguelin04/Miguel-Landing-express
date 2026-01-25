
import React from 'react';
import { SERVICES } from '../../constants';

interface ServicesScreenProps {
  onNext: () => void;
}

const ServicesScreen: React.FC<ServicesScreenProps> = ({ onNext }) => {
  const results = [
    { title: "Más Leads y Ventas", desc: "Embudo optimizado para el retorno de inversión.", icon: "trending_up" },
    { title: "Optimización Móvil", desc: "Experiencia perfecta en cualquier resolución.", icon: "devices" },
    { title: "Listo para Medir", desc: "Integración con GTM, Pixel y Analytics.", icon: "query_stats" },
    { title: "Claridad de Mensaje", desc: "Eliminamos la fricción en el proceso de compra.", icon: "chat_bubble_outline" },
  ];

  return (
    <div className="flex-1 flex flex-col pb-24 md:pb-32">
      <main className="pt-12 px-6 md:px-12">
        <section className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold text-xs font-black uppercase tracking-[0.25em] rounded-full mb-6">Expertise & Valor</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Lo que hago por tu negocio</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            Estrategias digitales enfocadas en <span className="text-primary dark:text-white font-bold">resultados comerciales</span> tangibles mediante WordPress y Divi.
          </p>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="group flex flex-col gap-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative rounded-[3rem] overflow-hidden bg-primary px-8 py-16 md:px-20 md:py-24 mb-20 shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 size-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-6">Resultados que puedes esperar</h2>
              <p className="text-white/70 text-lg font-medium max-w-xl">
                Cada proyecto se mide por su capacidad de generar impacto. No solo entregamos un diseño, entregamos una máquina de ventas.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {results.map((res, i) => (
                <div key={i} className="flex flex-col items-start gap-6 bg-white/15 backdrop-blur-md p-8 rounded-3xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all group min-h-[220px]">
                  <div className="bg-accent-gold p-4 rounded-xl text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{res.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-lg text-white mb-2">{res.title}</h4>
                    <p className="text-sm text-white/80 font-medium leading-relaxed">{res.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center gap-6">
           <button 
            onClick={onNext}
            className="w-full max-w-md bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg"
          >
            Seguir al Proceso de Trabajo
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </button>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Paso 3 de 7</p>
        </div>
      </main>
    </div>
  );
};

export default ServicesScreen;
