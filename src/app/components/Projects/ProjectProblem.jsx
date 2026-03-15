'use client'

import { motion } from "framer-motion";

export const ProjectProblem = ({ 
  problemText, 
  overviewText, 
  roleText 
}) => {
  return (
    <section id="problem" className="mb-24 md:mb-48 flex justify-center scroll-mt-32 px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-theme-bg border-[4px] md:border-[6px] border-theme-blue p-6 md:p-12 lg:p-16 max-w-4xl shadow-[10px_10px_0px_0px_#1b27b5] md:shadow-[16px_16px_0px_0px_#1b27b5]"
      >
        <div className="absolute -top-5 md:-top-6 -left-2 md:-left-6 bg-theme-orange border-[3px] md:border-4 border-theme-blue px-4 md:px-6 py-1.5 md:py-2 transform -rotate-2 md:-rotate-3 z-20 shadow-[3px_3px_0px_0px_#1b27b5] md:shadow-[4px_4px_0px_0px_#1b27b5] brut-hover">
            <span className="font-mono font-black text-theme-cream uppercase text-base md:text-lg">[ THE PROBLEM ]</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-theme-blue mb-8 md:mb-12 leading-[1] md:leading-[0.9] mt-4">
          {problemText}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t-4 border-theme-blue pt-8 md:pt-12">
            <div className="flex flex-col gap-3 md:gap-4 border-l-4 border-theme-green pl-5 md:pl-6">
                <h3 className="font-mono font-black text-[10px] md:text-sm tracking-widest text-theme-blue uppercase flex items-center gap-2">
                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-theme-green border-2 border-theme-blue"></span> OVERVIEW
                </h3>
                <p className="font-bold text-base md:text-xl leading-snug">
                    {overviewText}
                </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4 border-l-4 border-theme-yellow pl-5 md:pl-6">
                <h3 className="font-mono font-black text-[10px] md:text-sm tracking-widest text-theme-blue uppercase flex items-center gap-2">
                    <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-theme-yellow border-2 border-theme-blue"></span> MY ROLE
                </h3>
                <p className="font-bold text-base md:text-xl leading-snug">
                    {roleText}
                </p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
