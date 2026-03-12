import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 inset-x-0 z-50 glass h-20 flex items-center px-6 md:px-12 justify-between"
    >
      <div className="flex items-center gap-2">
        <span className="font-display text-2xl font-bold tracking-tighter text-mauve-900">MA</span>
        <div className="h-6 w-[1px] bg-mauve-200 mx-2 hidden md:block" />
        <span className="font-serif italic text-lg text-mauve-700 hidden md:block">Menna Ashraf</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest font-medium">
        <a href="#about" className="hover:text-mauve-600 transition-colors">{t('nav.about')}</a>
        <a href="#skills" className="hover:text-mauve-600 transition-colors">{t('nav.skills')}</a>
        <a href="#portfolio" className="hover:text-mauve-600 transition-colors">{t('nav.portfolio')}</a>
        <a href="#contact" className="hover:text-mauve-600 transition-colors">{t('nav.contact')}</a>
      </nav>

      <button 
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-mauve-200 hover:bg-mauve-100 transition-all text-sm font-medium"
      >
        <Globe size={16} />
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </button>
    </motion.header>
  );
};
