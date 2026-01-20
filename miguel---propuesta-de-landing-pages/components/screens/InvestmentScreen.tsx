
import React from 'react';
import { motion } from 'framer-motion';

interface InvestmentScreenProps {
  onBack: () => void;
  onShare: () => void;
  notify: (msg: string) => void;
}

const InvestmentScreen: React.FC<InvestmentScreenProps> = ({ onBack, onShare, notify }) => {
  const handleWhatsApp = () => {
    const phoneNumber = "593989416578";
    const text = encodeURIComponent("¡Hola Miguel! He visto tu propuesta comercial de Landing Pages y me gustaría empezar.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleCalendar = () => {
    const calendlyUrl = 'https://calendly.com/maiguellun12/30min?month=2026-01';
    notify("Abriendo agenda...");
    setTimeout(() => {
      window.open(calendlyUrl, '_blank');
    }, 500);
  };

  return (
    <div className="flex-1 flex flex-col pb-48 md:pb-24">
      <main className="px-6 md:px-12 pt-12 md:pt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Pricing Content */}
          <div className="flex-1 w-full lg:max-w-md text-center lg:text-left">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-10"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-black uppercase tracking-[0.25em] mb-6">Inversión del Proyecto</span>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-primary/40 dark:text-gray-600 text-4xl font-black">$</span>
                <h1 className="text-primary dark:text-white tracking-tighter text-[96px] font-[900] leading-none">170</h1>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-6 text-lg font-medium leading-relaxed">
                Pago único para un sistema de ventas profesional. <br className="hidden md:block" /> Proyecto llave en mano sin sorpresas.
              </p>
            </motion.div>

            <div className="hidden lg:flex flex-col gap-4 mt-12">
               <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full h-20 bg-[#25D366] text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-green-500/20 transition-all"
              >
                <span className="material-symbols-outlined text-3xl fill-1">chat</span>
                Aceptar por WhatsApp
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCalendar}
                className="w-full h-16 bg-primary text-white rounded-[1.5rem] font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all"
              >
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
                Agendar Reunión de Inicio
              </motion.button>
            </div>
          </div>

          {/* Right Side: Guarantees & Info */}
          <div className="flex-1 w-full">
            <div className="rounded-[3rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden shadow-2xl shadow-primary/5">
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border-b border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                <div className="size-20 rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20 shrink-0">
                  <span className="material-symbols-outlined text-[48px]">rocket_launch</span>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs text-primary/60 dark:text-gray-400 font-black uppercase tracking-widest mb-1">Tiempo de Lanzamiento</p>
                  <p className="text-primary dark:text-white font-[900] text-3xl md:text-4xl leading-none">3-5 Días Hábiles</p>
                </div>
              </div>
              
              <div className="p-8 md:p-10 space-y-10">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-accent-gold text-center md:text-left">Garantías y Soporte Premium</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: 'shield_check', title: 'Código Limpio', desc: 'Sin plugins pesados ni basura técnica que ralentice tu sitio.' },
                    { icon: 'speed', title: 'Performance WPO', desc: 'Optimización de carga máxima. Puntuación A en Google Speed.' },
                    { icon: 'support_agent', title: 'Soporte Post-Venta', desc: '15 días de acompañamiento técnico total tras el lanzamiento.' },
                    { icon: 'security', title: '100% Seguro', desc: 'Configuraciones de seguridad avanzadas para proteger tus datos.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="size-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold shrink-0">
                        <span className="material-symbols-outlined font-bold text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="font-black text-[#111518] dark:text-white text-base leading-tight mb-1">{item.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6 p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
              <div 
                className="size-20 shrink-0 rounded-2xl bg-cover bg-center border-4 border-white dark:border-gray-800 shadow-xl"
                style={{ backgroundImage: 'url("https://picsum.photos/seed/miguel-small/200/200")' }}
              ></div>
              <div className="flex-1">
                <p className="text-[11px] font-black text-accent-gold uppercase tracking-widest mb-1">Compromiso Personal</p>
                <p className="text-2xl font-black text-[#111518] dark:text-white leading-tight">Trabajaré en tu landing como si fuera para mi propia marca.</p>
                <p className="text-sm font-bold text-gray-500 mt-2">Atentamente, Miguel.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Buttons Bar (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-6 pt-2 pb-10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-t border-gray-100 dark:border-gray-800 z-[60]">
        <div className="flex flex-col gap-4 max-w-[430px] mx-auto">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={handleWhatsApp}
            className="w-full h-16 bg-[#25D366] text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-500/20"
          >
            <span className="material-symbols-outlined fill-1">chat</span>
            Aceptar por WhatsApp
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={handleCalendar}
            className="w-full h-14 bg-primary text-white rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Agendar Reunión
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentScreen;
