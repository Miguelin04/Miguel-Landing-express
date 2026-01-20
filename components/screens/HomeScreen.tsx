
import React from 'react';
import { motion } from 'framer-motion';

interface HomeScreenProps {
  onNext: () => void;
  onShare: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNext, onShare }) => {
  return (
    <div className="relative flex-1 flex flex-col overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background Decor */}
      <div className="absolute -right-20 top-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute -left-10 bottom-20 w-80 h-80 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="flex-1 flex flex-col md:flex-row items-center px-6 md:px-12 pt-12 md:pt-0 gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-2xl">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 64 }} 
            className="h-2 bg-accent-gold mb-8 rounded-full"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary dark:text-white tracking-tight text-[48px] md:text-[64px] font-[900] leading-[1.05] mb-6"
          >
            Landing Pages que <span className="text-accent-gold italic">venden</span> por ti
          </motion.h1>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#5e7687] dark:text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-[90%]"
          >
            Estructuras en WordPress y Divi optimizadas para captar leads de alta calidad y cerrar ventas automáticas.
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="flex cursor-pointer items-center justify-center rounded-2xl h-16 px-10 bg-primary text-white gap-3 text-lg font-extrabold shadow-2xl shadow-primary/30 transition-all"
            >
              <span>Ver Propuesta</span>
              <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
            </motion.button>
            
            <button 
              onClick={onShare}
              className="flex items-center justify-center rounded-2xl h-16 px-8 border-2 border-primary/10 text-primary dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all gap-2"
            >
              <span className="material-symbols-outlined">share</span>
              Compartir
            </button>
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 relative hidden md:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 transform rotate-2">
            <img 
              src="https://picsum.photos/seed/landing-demo/800/1000" 
              alt="Preview" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -left-10 top-1/2 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 z-20 flex items-center gap-4 -rotate-3">
             <div className="size-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined">trending_up</span>
             </div>
             <div>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Conversión</p>
                <p className="text-xl font-black text-primary dark:text-white">+40% Leads</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Decoration (Mobile only scroll hint) */}
      <div className="md:hidden flex flex-col items-center pb-12 opacity-30">
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="material-symbols-outlined text-primary text-xl">keyboard_arrow_up</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Descubrir</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;
