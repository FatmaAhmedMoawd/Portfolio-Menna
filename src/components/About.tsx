import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-3/4 bg-mauve-100 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/designer/800/1200" 
              alt="Menna Ashraf" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -end-10 w-48 h-48 border-4 border-gold-400 rounded-2xl -z-10 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-mauve-950 mb-8">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gold-500 mb-8" />
          <p className="font-sans text-lg leading-relaxed text-neutral-700 mb-8">
            {t('about.content')}
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-3xl font-bold text-mauve-800">1+</h4>
              <p className="font-sans text-sm uppercase tracking-widest text-neutral-500">Year Experience</p>
            </div>
            <div>
              <h4 className="font-display text-3xl font-bold text-mauve-800">20+</h4>
              <p className="font-sans text-sm uppercase tracking-widest text-neutral-500">Projects Done</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
