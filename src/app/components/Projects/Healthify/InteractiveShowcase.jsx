'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { getAssetPath } from '@/app/utils/paths';

export const InteractiveShowcase = ({ id, title, description, color, images, reverse = false }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Preload all images on mount so switching between previews is instant.
  // Image objects are not stored — setting src triggers the browser to fetch
  // and cache each image; the cache persists independently of the JS objects.
  useEffect(() => {
    images.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = getAssetPath(img.src);
    });
  }, [images]);

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
    <div id={id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-12 lg:gap-24 mb-24 md:mb-32 scroll-mt-32 px-4 sm:px-12 md:px-24 w-full relative overflow-hidden`}>
      {/* Background decoration for mobile context */}
      <div className="md:hidden absolute top-0 -left-10 w-40 h-40 bg-theme-yellow opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Desktop Header Content (Hidden on Mobile) */}
      <div className="hidden md:block flex-1 space-y-6 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={`font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue ${theme.text} ${theme.bg} inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5]`}>
            [ FEATURE ]
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-theme-blue tracking-tighter mb-4">
            {title}
          </h2>
          <p className="text-base md:text-xl font-bold leading-tight max-w-xl text-theme-blue opacity-80">
            {description}
          </p>
        </motion.div>

        <div className="space-y-3 md:space-y-4 max-w-lg">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 border-[3px] md:border-4 border-theme-blue font-mono font-black text-[10px] md:text-sm uppercase tracking-widest transition-all duration-200 group
                ${activeIdx === idx
                  ? `${theme.bg} ${theme.text} shadow-[4px_4px_0px_0px_#1b27b5] md:${theme.shadow} translate-x-[-2px] md:translate-x-[-4px] translate-y-[-2px] md:translate-y-[-4px]`
                  : `bg-theme-cream text-theme-blue shadow-[4px_4px_0px_0px_#1b27b5] md:shadow-[6px_6px_0px_0px_#1b27b5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1b27b5] md:hover:shadow-[8px_8px_0px_0px_#1b27b5]`
                }`}
            >
              <span className={`px-1.5 md:px-2 py-0.5 md:py-1 border-2 border-theme-blue ${activeIdx === idx ? 'bg-theme-bg text-theme-blue' : 'bg-white shadow-[2px_2px_0px_0px_#1b27b5]'}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-left">{img.alt}</span>
              {activeIdx === idx ? (
                <FiArrowRight size={18} className="animate-pulse md:w-[20px] md:h-[20px]" />
              ) : (
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-theme-blue rounded-full group-hover:bg-theme-yellow transition-colors" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Mobile Header (Condensed) */}
      <div className="md:hidden space-y-2 mb-4 text-center">
        <div className={`font-mono text-[10px] font-black tracking-widest ${theme.text} ${theme.bg} inline-block px-1.5 py-0.5 border-2 border-theme-blue shadow-[2px_2px_0px_0px_#1b27b5] mb-2`}>
          [ FEATURE HIGHLIGHT ]
        </div>
        <h2 className="text-2xl font-black uppercase text-theme-blue tracking-tighter leading-none">
          {title}
        </h2>
      </div>

      {/* Device Side (Interactive) */}
      <div className="flex-1 flex flex-col items-center justify-start lg:sticky lg:top-32 h-fit md:px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: reverse ? -5 : 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className={`relative z-10 bg-theme-cream border-[4px] md:border-[6px] border-theme-blue p-3 md:p-4 shadow-[12px_12px_0px_0px_var(--theme-yellow)] md:shadow-[24px_24px_0px_0px_var(--theme-yellow)] max-w-[300px] sm:max-w-[380px] w-full transform hover:scale-105 transition-transform duration-300 touch-pan-y`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 50 && activeIdx > 0) setActiveIdx(activeIdx - 1);
            else if (info.offset.x < -50 && activeIdx < images.length - 1) setActiveIdx(activeIdx + 1);
          }}
        >
          {/* Swipe indicator (Mobile only) */}
          <div className="md:hidden absolute -top-10 left-0 right-0 flex justify-center items-center gap-2 text-theme-blue opacity-40 font-mono text-[9px] font-black uppercase pointer-events-none">
            <FiArrowRight className="rotate-180" /> Swipe to navigate <FiArrowRight />
          </div>

          {/* Main Frame Container */}
          <div className={`${theme.bg} border-[3px] md:border-4 border-theme-blue p-1.5 md:p-2 relative overflow-hidden aspect-[9/19] bg-opacity-50`}>
            {/* Visual Dot Pattern Inside Frame */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="w-full h-full relative z-10"
              >
                <img
                  src={getAssetPath(images[activeIdx].src)}
                  alt={images[activeIdx].alt}
                  className="w-full h-full object-contain rounded-lg sm:rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Preview Tag */}
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-theme-bg border-[3px] md:border-4 border-theme-blue px-2 md:px-3 py-0.5 md:py-1 font-mono text-[8px] md:text-[10px] font-black uppercase text-theme-blue shadow-[3px_3px_0px_0px_#1b27b5] md:shadow-[4px_4px_0px_0px_#1b27b5] z-20 transform -rotate-2">
              PREVIEW {activeIdx + 1} / {images.length}
            </div>
          </div>

          {/* Decorative accents - Scaled for mobile */}
          <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-8 md:w-12 h-8 md:h-12 bg-theme-orange border-[3px] md:border-4 border-theme-blue -z-10 rotate-12"></div>
          <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-12 md:w-16 h-12 md:h-16 bg-theme-green border-[3px] md:border-4 border-theme-blue rounded-full -z-10"></div>
          <div className="absolute top-1/2 -right-3 md:-right-4 w-6 md:w-8 h-16 md:h-24 bg-theme-yellow border-y-[3px] md:border-y-4 border-theme-blue -z-10"></div>
        </motion.div>

        {/* Mobile Info Card & Controls (Visible only on mobile) */}
        <div className="md:hidden mt-10 w-full max-w-[320px] space-y-4">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-theme-cream border-[3px] border-theme-blue p-4 shadow-[6px_6px_0px_0px_#1b27b5]"
          >
            <div className="font-mono text-[9px] font-black uppercase text-theme-blue mb-1 opacity-60">
              {String(activeIdx + 1).padStart(2, '0')} — {images[activeIdx].alt}
            </div>
            <p className="text-sm font-bold leading-tight text-theme-blue line-clamp-2">
              {images[activeIdx].description || `Experience the ${images[activeIdx].alt} feature in action.`}
            </p>
          </motion.div>

          <div className="flex gap-3">
            <button
               onClick={() => setActiveIdx(0)}
               className="flex-1 bg-white border-[3px] border-theme-blue p-3 font-mono font-black text-[10px] uppercase shadow-[4px_4px_0px_0px_#1b27b5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <FiArrowRight className="rotate-180" /> RESTART
            </button>
            <button 
              onClick={() => setActiveIdx((activeIdx + 1) % images.length)}
              className={`${theme.bg} ${theme.text} border-[3px] border-theme-blue p-3 flex-[1.5] font-mono font-black text-[10px] uppercase shadow-[4px_4px_0px_0px_#1b27b5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2`}
            >
              NEXT FEATURE <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
