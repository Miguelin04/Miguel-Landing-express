
import React from 'react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const menuItems = [
    { id: 'OVERVIEW' as ScreenType, label: 'Presentación' },
    { id: 'SERVICES' as ScreenType, label: 'Servicios' },
    { id: 'PROCESS' as ScreenType, label: 'Metodología' },
    { id: 'ABOUT' as ScreenType, label: 'Experiencia' },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('HOME')}
          className="flex items-center gap-2 group"
        >
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined font-bold">rocket_launch</span>
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-sm font-black text-primary dark:text-white leading-none uppercase tracking-tighter">Miguel</span>
            <span className="block text-[10px] text-accent-gold font-bold uppercase tracking-widest mt-0.5">Landing Expert</span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                currentScreen === item.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="w-[1px] h-6 bg-gray-200 dark:bg-gray-700 mx-2"></div>
          <button 
            onClick={() => onNavigate('INVESTMENT')}
            className="px-6 py-2 bg-accent-gold text-white rounded-full text-sm font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-accent-gold/20 transition-all hover:-translate-y-0.5"
          >
            Presupuesto
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
           <button 
            onClick={() => onNavigate('INVESTMENT')}
            className="px-4 py-1.5 bg-accent-gold text-white rounded-full text-[10px] font-black uppercase tracking-widest"
          >
            Cotizar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
