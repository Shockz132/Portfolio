'use client'

import { motion } from "framer-motion";
import { getAssetPath } from "@/app/utils/paths";

export const Footer = ({ text = "Copyright © 2025 Jethro. Made with 🦒" }) => {
  return (
    <footer className="py-16 md:py-24 border-t-4 border-theme-blue flex gap-6 flex-wrap items-center justify-center w-full bg-theme-yellow text-theme-blue relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40 bg-[radial-gradient(var(--theme-orange)_20%,transparent_20%)] bg-[size:30px_30px]">
      </div>

      {/* Mascot Accent */}
      <img src={getAssetPath("/giraffe_reading.png")} alt="reading giraffe" className="absolute top-8 right-8 md:right-32 w-32 h-32 md:w-48 md:h-48 object-contain animate-wobble z-0 pointer-events-none drop-shadow-[4px_4px_0px_theme(colors.theme-blue)]" />

      <div className="relative z-10 bg-theme-cream border-4 border-theme-blue p-4 shadow-[6px_6px_0px_0px_#1b27b5] brut-hover transform -rotate-1">
        <p className="w-full text-center font-mono font-bold text-xs md:text-sm tracking-widest text-theme-blue uppercase">
          [ {text} ]
        </p>
      </div>
    </footer>
  );
};
