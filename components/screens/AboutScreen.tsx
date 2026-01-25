
import React from 'react';

interface AboutScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const AboutScreen: React.FC<AboutScreenProps> = ({ onNext, onBack }) => {
  const diffs = [
    { title: "Sin plantillas genéricas", desc: "Diseños 100% personalizados construidos desde cero en Divi para reflejar la identidad única de tu marca.", icon: "dashboard_customize" },
    { title: "Orientado a conversión", desc: "Cada sección tiene un propósito: guiar al usuario hacia la acción y maximizar el retorno de tu inversión.", icon: "ads_click" },
    { title: "Trabajo personalizado", desc: "Atención exclusiva. No soy una agencia masiva; trabajo contigo mano a mano en cada detalle del proyecto.", icon: "person_pin_circle" },
    { title: "Comunicación fluida", desc: "Transparencia total con reportes de avance constantes y canales directos para resolver dudas rápidamente.", icon: "forum" },
  ];

  return (
    <div className="flex-1 flex flex-col pb-32">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <div 
          onClick={onBack}
          className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-base font-bold leading-tight tracking-tight flex-1 text-center">Propuesta de Servicio</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-primary text-sm font-bold leading-normal tracking-tight hover:opacity-70 transition-opacity">Contacto</button>
        </div>
      </div>

      <main className="px-4 pt-4">
        <div 
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-primary/10 rounded-xl min-h-[180px] relative border border-primary/5 shadow-sm"
          style={{ 
            backgroundImage: 'linear-gradient(180deg, rgba(39, 77, 104, 0.1) 0%, rgba(39, 77, 104, 0.8) 100%), url("https://picsum.photos/seed/laptop/600/400")' 
          }}
        >
          <div className="flex flex-col p-5">
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">LANDING PREMIUM</span>
            <p className="text-white text-3xl font-extrabold leading-tight">Estrategia & Diseño</p>
          </div>
        </div>

        <div className="flex flex-col pt-6 pb-2">
          <h2 className="text-primary dark:text-primary text-xs font-black uppercase tracking-[0.2em] mb-1">Por qué elegirme</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-4">
          {diffs.map((diff, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#25282c] p-4 transition-all hover:border-primary/30 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{diff.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111518] dark:text-white text-base font-bold leading-tight">{diff.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col pt-8 pb-2">
          <h2 className="text-primary dark:text-primary text-xs font-black uppercase tracking-[0.2em] mb-1">El profesional</h2>
          <h3 className="text-[#111518] dark:text-white text-2xl font-bold leading-tight tracking-tight">Sobre mí</h3>
        </div>

        <div className="mt-4 pb-8">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/10">
            <div className="flex items-center gap-5 mb-6">
              <div className="size-20 rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
                <img 
                  alt="Miguel profile" 
                  className="w-full h-full object-cover" 
                  src="https://picsum.photos/seed/miguel-bio/200/200" 
                />
              </div>
              <div>
                <h4 className="text-[#111518] dark:text-white text-xl font-extrabold">Miguel</h4>
                <p className="text-primary font-semibold text-sm">Especialista Divi & WordPress</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">LP Expert</span>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">UX Focused</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Hola, soy Miguel. Me apasiona transformar ideas de negocio en activos digitales de alto rendimiento. Con más de 2 años de experiencia en el ecosistema WordPress, me he especializado en el uso de <span className="font-bold text-primary">Divi Builder</span> para crear Landing Pages que no solo se ven bien, sino que cumplen objetivos comerciales claros.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/10 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Localización</span>
                <span className="text-sm font-bold text-[#111518] dark:text-white">Ecuador, Loja</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Experiencia</span>
                <span className="text-sm font-bold text-[#111518] dark:text-white">+10 Proyectos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <button 
            onClick={onNext}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Ver Inversión</span>
            <span className="material-symbols-outlined text-sm">trending_flat</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AboutScreen;
