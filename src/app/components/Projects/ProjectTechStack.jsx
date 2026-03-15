'use client'

import { motion } from "framer-motion";

export const ProjectTechStack = ({ categories = [] }) => {
  return (
    <section id="tech-stack" className="mb-20 md:mb-32 scroll-mt-32 px-6 sm:px-12 md:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-12"
      >
        <div className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue bg-theme-green inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] transform rotate-1">
          [ INFRASTRUCTURE ]
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-theme-blue drop-shadow-[3px_3px_0px_var(--theme-yellow)] md:drop-shadow-[4px_4px_0px_var(--theme-yellow)]">
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`border-4 border-theme-blue p-6 md:p-8 shadow-[6px_6px_0px_0px_#1b27b5] md:shadow-[8px_8px_0px_0px_#1b27b5] hover:shadow-[14px_14px_0px_0px_#1b27b5] brut-hover ${cat.color || 'bg-theme-yellow'}`}
          >
            <h3 className={`font-sans font-black text-xl md:text-2xl uppercase mb-5 md:mb-6 flex items-center gap-3 ${cat.lightText ? 'text-theme-cream' : 'text-theme-blue'}`}>
              <span className={`w-5 h-5 md:w-6 md:h-6 bg-white border-[3px] md:border-4 border-theme-blue inline-block ${cat.iconShape === 'circle' ? 'rounded-full' : (cat.iconShape === 'diamond' ? 'rotate-45' : '')}`}></span>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3 font-mono font-bold text-[10px] md:text-sm uppercase">
              {cat.chips.map((chip) => (
                <span 
                  key={chip} 
                  className={`border-2 px-2 md:px-3 py-1 ${cat.chipBorder || 'border-theme-blue'} ${cat.chipShadow || 'shadow-[2px_2px_0px_0px_#1b27b5]'} ${cat.chipColor || 'bg-white'}`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
