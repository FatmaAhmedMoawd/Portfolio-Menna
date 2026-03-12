import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  Palette, 
  Layout, 
  Type, 
  Image as ImageIcon, 
  Share2, 
  PenTool,
  Figma,
  Layers
} from 'lucide-react';

const skills = [
  { name: 'Adobe Photoshop', icon: <ImageIcon size={20} /> },
  { name: 'Adobe Illustrator', icon: <PenTool size={20} /> },
  { name: 'Adobe InDesign', icon: <Layout size={20} /> },
  { name: 'Branding Design', icon: <Palette size={20} /> },
  { name: 'Social Media Design', icon: <Share2 size={20} /> },
  { name: 'Typography', icon: <Type size={20} /> },
  { name: 'Color Theory', icon: <Palette size={20} /> },
  { name: 'Layout Design', icon: <Layers size={20} /> },
  { name: 'Photo Manipulation', icon: <ImageIcon size={20} /> },
];

const tools = [
  { name: 'Photoshop', color: 'bg-blue-500' },
  { name: 'Illustrator', color: 'bg-orange-500' },
  { name: 'InDesign', color: 'bg-pink-500' },
  { name: 'Canva', color: 'bg-cyan-500' },
  { name: 'Figma', color: 'bg-purple-500' },
];

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-mauve-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-mauve-950 mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-mauve-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-mauve-100 text-mauve-700 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="font-sans font-medium text-neutral-800">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-serif italic text-2xl text-mauve-800 mb-8">{t('skills.tools_title')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span 
                key={tool.name}
                className="px-6 py-2 bg-white border border-mauve-200 rounded-full font-sans text-sm font-medium text-neutral-600 shadow-sm"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
