'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { getAssetPath } from '@/app/utils/paths';

export const InteractiveShowcase = ({ id, title, description, color, images, reverse = false }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const themeColors = {
    orange: {
      bg: 'bg-theme-orange',
      text: 'text-theme-blue',
      shadow: 'shadow-[8px_8px_0px_0px_#1b27b5]',
      activeShadow: 'shadow-[4px_4px_0px_0px_#1b27b5]'
    },
    green: {
      bg: 'bg-theme-green',
      text: 'text-theme-blue',
      shadow: 'shadow-[8px_8px_0px_0px_#1b27b5]',
      activeShadow: 'shadow-[4px_4px_0px_0px_#1b27b5]'
    },
    yellow: {
      bg: 'bg-theme-yellow',
      text: 'text-theme-blue',
      shadow: 'shadow-[8px_8px_0px_0px_#1b27b5]',
      activeShadow: 'shadow-[4px_4px_0px_0px_#1b27b5]'
    },
    blue: {
      bg: 'bg-theme-blue',
      text: 'text-theme-cream',
      shadow: 'shadow-[8px_8px_0px_0px_var(--theme-yellow)]',
      activeShadow: 'shadow-[4px_4px_0px_0px_var(--theme-yellow)]'
    }
  };

  const theme = themeColors[color] || themeColors.orange;

  return (
    <div id={id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 mb-32 scroll-mt-32 px-12 md:px-24 w-full`}>
      {/* Text & Features Side */}
      <div className="flex-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={`font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue ${theme.bg} inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5]`}>
            [ FEATURE ]
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-theme-blue tracking-tighter mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-bold leading-tight max-w-xl text-theme-blue opacity-80">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4 max-w-lg">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-full flex items-center gap-4 p-4 border-4 border-theme-blue font-mono font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-200 group
                ${activeIdx === idx
                  ? `${theme.bg} ${theme.text} ${theme.shadow} translate-x-[-4px] translate-y-[-4px]`
                  : `bg-theme-cream text-theme-blue shadow-[6px_6px_0px_0px_#1b27b5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1b27b5]`
                }`}
            >
              <span className={`px-2 py-1 border-2 border-theme-blue ${activeIdx === idx ? 'bg-theme-bg text-theme-blue' : 'bg-white shadow-[2px_2px_0px_0px_#1b27b5]'}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-left">{img.alt}</span>
              {activeIdx === idx ? (
                <FiArrowRight size={20} className="animate-pulse" />
              ) : (
                <div className="w-5 h-5 border-2 border-theme-blue rounded-full group-hover:bg-theme-yellow transition-colors" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Device Side */}
      <div className="flex-1 flex justify-center items-start lg:sticky lg:top-32 h-fit">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: reverse ? -5 : 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className={`relative z-10 bg-theme-cream border-[6px] border-theme-blue p-4 shadow-[24px_24px_0px_0px_var(--theme-yellow)] max-w-[320px] sm:max-w-[380px] w-full transform hover:scale-105 hover:rotate-2 transition-transform duration-300`}
        >
          {/* Main Frame Container */}
          <div className={`${theme.bg} border-4 border-theme-blue p-2 relative overflow-hidden aspect-[9/19] bg-opacity-50`}>
            {/* Visual Dot Pattern Inside Frame */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="w-full h-full relative z-10"
              >
                <img
                  src={getAssetPath(images[activeIdx].src)}
                  alt={images[activeIdx].alt}
                  className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Preview Tag */}
            <div className="absolute bottom-4 left-4 bg-theme-bg border-4 border-theme-blue px-3 py-1 font-mono text-[10px] font-black uppercase text-theme-blue shadow-[4px_4px_0px_0px_#1b27b5] z-20 transform -rotate-2">
              PREVIEW {activeIdx + 1} / {images.length}
            </div>
          </div>

          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-theme-orange border-4 border-theme-blue -z-10 rotate-12"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-theme-green border-4 border-theme-blue rounded-full -z-10"></div>
          <div className="absolute top-1/2 -right-4 w-8 h-24 bg-theme-yellow border-y-4 border-theme-blue -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};
