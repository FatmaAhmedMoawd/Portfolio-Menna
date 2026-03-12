import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'coffee',
    image: 'https://picsum.photos/seed/coffee/800/600',
    category: 'Branding',
  },
  {
    id: 'social',
    image: 'https://picsum.photos/seed/skincare/800/600',
    category: 'Social Media',
  },
  {
    id: 'poster',
    image: 'https://picsum.photos/seed/poster/800/600',
    category: 'Experimental',
  },
  {
    id: 'logo',
    image: 'https://picsum.photos/seed/tech/800/600',
    category: 'Logo Design',
  },
  {
    id: 'product',
    image: 'https://picsum.photos/seed/watch/800/600',
    category: 'Advertising',
  },
  {
    id: 'manipulation',
    image: 'https://picsum.photos/seed/surreal/800/600',
    category: 'Digital Art',
  },
];

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-mauve-950 mb-4">
              {t('portfolio.title')}
            </h2>
            <div className="w-20 h-1 bg-gold-500" />
          </div>
          <p className="font-serif italic text-xl text-neutral-500 max-w-md">
            A collection of visual experiences crafted with elegance and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-mauve-50 rounded-2xl overflow-hidden aspect-square"
            >
              <img 
                src={project.image} 
                alt={t(`projects.${project.id}.title`)} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-mauve-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-gold-400 font-sans text-xs uppercase tracking-[0.2em] mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-white font-display text-2xl font-bold mb-4">
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className="text-mauve-200 font-sans text-sm mb-6 line-clamp-2">
                  {t(`projects.${project.id}.desc`)}
                </p>
                
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-white font-sans text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-gold-400 hover:text-gold-400 transition-all">
                    {t('portfolio.view_project')}
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
