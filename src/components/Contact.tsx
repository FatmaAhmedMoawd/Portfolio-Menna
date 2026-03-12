import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, ExternalLink, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-mauve-950 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-mauve-800/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 start-0 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="font-serif italic text-2xl text-mauve-300 mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-mauve-400 mb-1">{t('contact.email')}</p>
                  <a href="mailto:mennaashraf.design@gmail.com" className="text-lg hover:text-gold-400 transition-colors">mennaashraf.design@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-mauve-400 mb-1">{t('contact.phone')}</p>
                  <p className="text-lg">+20 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-mauve-400 mb-1">Location</p>
                  <p className="text-lg">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
            <h3 className="font-display text-2xl font-bold mb-8">Social Presence</h3>
            <div className="grid grid-cols-1 gap-4">
              <a 
                href="https://behance.net/mennaashraf" 
                target="_blank" 
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <ExternalLink size={24} className="text-gold-400" />
                  <span className="font-sans font-medium">Behance Portfolio</span>
                </div>
                <span className="text-xs uppercase tracking-widest opacity-50">View Profile</span>
              </a>
              <a 
                href="https://linkedin.com/in/mennaashraf" 
                target="_blank" 
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
              >
                <div className="flex items-center gap-4">
                  <Linkedin size={24} className="text-gold-400" />
                  <span className="font-sans font-medium">LinkedIn Network</span>
                </div>
                <span className="text-xs uppercase tracking-widest opacity-50">Connect</span>
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 text-center">
              <p className="font-serif italic text-mauve-400">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
