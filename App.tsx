
import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScreenType } from './types';
import HomeScreen from './components/screens/HomeScreen';
import OverviewScreen from './components/screens/OverviewScreen';
import ServicesScreen from './components/screens/ServicesScreen';
import ProcessScreen from './components/screens/ProcessScreen';
import ScopeScreen from './components/screens/ScopeScreen';
import AboutScreen from './components/screens/AboutScreen';
import InvestmentScreen from './components/screens/InvestmentScreen';
import TabBar from './components/TabBar';
import Header from './components/Header';

const App: React.FC = () => {
  const getInitialScreen = (): ScreenType => {
    const hash = window.location.hash.replace('#', '').toUpperCase();
    const saved = localStorage.getItem('miguel_last_screen') as ScreenType;
    const validScreens = ['HOME', 'OVERVIEW', 'SERVICES', 'PROCESS', 'SCOPE', 'ABOUT', 'INVESTMENT'];
    if (validScreens.includes(hash)) return hash as ScreenType;
    if (saved && validScreens.includes(saved)) return saved;
    return 'HOME';
  };

  const [currentScreen, setCurrentScreen] = useState<ScreenType>(getInitialScreen());
  const [notification, setNotification] = useState<string | null>(null);

  const navigateTo = useCallback((screen: ScreenType) => {
    window.location.hash = screen.toLowerCase();
    setCurrentScreen(screen);
    localStorage.setItem('miguel_last_screen', screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toUpperCase();
      const validScreens = ['HOME', 'OVERVIEW', 'SERVICES', 'PROCESS', 'SCOPE', 'ABOUT', 'INVESTMENT'];
      if (validScreens.includes(hash)) {
        setCurrentScreen(hash as ScreenType);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Propuesta Comercial - Miguel',
      text: 'Echa un vistazo a esta propuesta de Landing Pages premium.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        showNotification("No se pudo compartir");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showNotification("Enlace copiado al portapapeles");
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'HOME': return <HomeScreen onNext={() => navigateTo('OVERVIEW')} onShare={handleShare} />;
      case 'OVERVIEW': return <OverviewScreen onNext={() => navigateTo('SERVICES')} onBack={() => navigateTo('HOME')} onShare={handleShare} />;
      case 'SERVICES': return <ServicesScreen onNext={() => navigateTo('PROCESS')} onBack={() => navigateTo('OVERVIEW')} onShare={handleShare} />;
      case 'PROCESS': return <ProcessScreen onNext={() => navigateTo('SCOPE')} onBack={() => navigateTo('SERVICES')} onShare={handleShare} />;
      case 'SCOPE': return <ScopeScreen onNext={() => navigateTo('ABOUT')} onBack={() => navigateTo('PROCESS')} onShare={handleShare} />;
      case 'ABOUT': return <AboutScreen onNext={() => navigateTo('INVESTMENT')} onBack={() => navigateTo('SCOPE')} onShare={handleShare} />;
      case 'INVESTMENT': return <InvestmentScreen onBack={() => navigateTo('ABOUT')} onShare={handleShare} notify={showNotification} />;
      default: return <HomeScreen onNext={() => navigateTo('OVERVIEW')} onShare={handleShare} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display overflow-x-hidden selection:bg-primary/20">
      <Header currentScreen={currentScreen} onNavigate={navigateTo} />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "circOut" }}
              className="flex-1 flex flex-col"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {currentScreen !== 'HOME' && currentScreen !== 'INVESTMENT' && (
        <TabBar currentScreen={currentScreen} onNavigate={navigateTo} />
      )}

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
