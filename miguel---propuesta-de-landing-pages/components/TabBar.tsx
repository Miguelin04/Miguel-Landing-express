
import React from 'react';
import { ScreenType } from '../types';

interface TabBarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

const TabBar: React.FC<TabBarProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: 'OVERVIEW' as ScreenType, icon: 'info', label: 'Inicio', activeIcon: 'info' },
    { id: 'SERVICES' as ScreenType, icon: 'work', label: 'Servicios', activeIcon: 'work' },
    { id: 'PROCESS' as ScreenType, icon: 'auto_awesome', label: 'Proyectos', activeIcon: 'auto_awesome' },
    { id: 'ABOUT' as ScreenType, icon: 'person', label: 'Sobre mí', activeIcon: 'person' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 h-20 flex items-center justify-around px-2 pb-6">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id || (tab.id === 'PROCESS' && currentScreen === 'SCOPE');
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center flex-1 transition-all ${
              isActive ? 'text-primary dark:text-white' : 'text-gray-400'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'fill-1 font-bold' : ''}`}>
              {tab.icon}
            </span>
            <span className={`text-[10px] mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default TabBar;
