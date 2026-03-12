import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 -start-20 w-96 h-96 bg-mauve-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -end-20 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-sm uppercase tracking-[0.3em] text-mauve-600 mb-6 block"
        >
          {t('hero.title')}
        </motion.span>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-mauve-950 leading-tight mb-8">
          Menna <span className="font-serif italic font-normal text-mauve-700">Ashraf</span>
        </h1>

        <p className="font-serif text-xl md:text-2xl text-mauve-800 italic max-w-2xl mx-auto mb-12">
          "{t('hero.tagline')}"
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#portfolio"
            className="px-10 py-4 bg-mauve-900 text-white rounded-full font-sans text-sm uppercase tracking-widest hover:bg-mauve-800 transition-all hover:scale-105 shadow-xl shadow-mauve-900/20"
          >
            {t('hero.cta')}
          </a>
          <a 
            href="#contact"
            className="px-10 py-4 border border-mauve-200 text-mauve-900 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-mauve-50 transition-all"
          >
            {t('nav.contact')}
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-mauve-300" size={32} />
      </motion.div>
    </section>
  );
};
