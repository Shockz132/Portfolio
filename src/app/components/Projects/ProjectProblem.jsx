'use client'

import { motion } from "framer-motion";

export const ProjectProblem = ({ 
  problemText, 
  overviewText, 
  roleText 
}) => {
  return (
    <section id="problem" className="mb-48 flex justify-center scroll-mt-32">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-theme-bg border-[6px] border-theme-blue p-8 md:p-12 lg:p-16 max-w-4xl shadow-[16px_16px_0px_0px_#1b27b5]"
      >
        <div className="absolute -top-6 -left-6 bg-theme-orange border-4 border-theme-blue px-6 py-2 transform -rotate-3 z-20 shadow-[4px_4px_0px_0px_#1b27b5] brut-hover">
            <span className="font-mono font-black text-theme-cream uppercase text-lg">[ THE PROBLEM ]</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-theme-blue mb-12 leading-[0.9]">
          {problemText}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-4 border-theme-blue pt-12">
            <div className="flex flex-col gap-4 border-l-4 border-theme-green pl-6">
                <h3 className="font-mono font-black text-xs md:text-sm tracking-widest text-theme-blue uppercase flex items-center gap-2">
                    <span className="w-3 h-3 bg-theme-green border-2 border-theme-blue"></span> OVERVIEW
                </h3>
                <p className="font-bold text-lg md:text-xl leading-snug">
                    {overviewText}
                </p>
            </div>
            <div className="flex flex-col gap-4 border-l-4 border-theme-yellow pl-6">
                <h3 className="font-mono font-black text-xs md:text-sm tracking-widest text-theme-blue uppercase flex items-center gap-2">
                    <span className="w-3 h-3 bg-theme-yellow border-2 border-theme-blue"></span> MY ROLE
                </h3>
                <p className="font-bold text-lg md:text-xl leading-snug">
                    {roleText}
                </p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
