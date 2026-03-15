'use client'

import { motion } from "framer-motion";

export const ProjectOutcomes = ({ takeaways = [], metrics = [], futureScope = "" }) => {
  return (
    <section id="outcomes" className="mb-20 md:mb-24 scroll-mt-32 px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-theme-cream border-[4px] md:border-[6px] border-theme-blue p-6 md:p-12 lg:p-16 relative shadow-[10px_10px_0px_0px_#1b27b5] md:shadow-[16px_16px_0px_0px_#1b27b5]"
      >
        {/* Decorative Corner Tape - Scaled down for mobile */}
        <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-12 md:w-16 h-6 md:h-8 bg-theme-yellow border-[3px] md:border-4 border-theme-blue transform -rotate-12 z-10" />
        <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 w-12 md:w-16 h-6 md:h-8 bg-theme-green border-[3px] md:border-4 border-theme-blue transform -rotate-6 z-10" />

        <div className="mb-10 md:mb-12">
          <div className="font-mono text-[10px] md:text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue bg-theme-orange inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] transform rotate-2">
            [ THE VERDICT ]
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-theme-blue">
            Outcomes & Results
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-12">
          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="w-full lg:w-1/3 flex flex-col gap-5 md:gap-6">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`border-[3px] md:border-4 border-theme-blue p-5 md:p-6 shadow-[5px_5px_0px_0px_#1b27b5] md:shadow-[6px_6px_0px_0px_#1b27b5] hover:shadow-[12px_12px_0px_0px_#1b27b5] transition-all duration-200 hover:-translate-y-2 transform ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} ${metric.color || 'bg-theme-green'}`}
                >
                  <div className="font-mono text-xs md:text-sm tracking-widest font-bold uppercase mb-2">{metric.label}</div>
                  <div className="text-3xl md:text-4xl font-black">{metric.value}</div>
                  {metric.description && (
                    <div className="font-bold text-xs md:text-sm mt-2">{metric.description}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Learnings */}
          <div className={`w-full ${metrics.length > 0 ? 'lg:w-2/3 border-l-0 lg:border-l-4 border-theme-blue lg:pl-12' : 'lg:w-full'} flex flex-col justify-center`}>
             {takeaways.length > 0 && (
               <>
                 <h3 className="font-mono font-bold text-lg md:text-xl mb-6 uppercase">Key Takeaways</h3>
                 <ul className="flex flex-col gap-5 md:gap-6">
                    {takeaways.map((item, idx) => (
                      <li key={idx} className="flex gap-4 md:gap-5 items-start">
                        <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-theme-orange border-[3px] md:border-4 border-theme-blue flex items-center justify-center shadow-[2px_2px_0px_0px_#1b27b5] md:shadow-[3px_3px_0px_0px_#1b27b5] transform -rotate-3 mt-1">
                          <span className="font-mono font-black text-theme-cream">{idx + 1}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-black text-base md:text-lg uppercase tracking-tight leading-none mb-1">{item.title}</span>
                          <p className="font-bold text-base md:text-lg leading-relaxed text-theme-blue/90">{item.content}</p>
                        </div>
                      </li>
                    ))}
                 </ul>
               </>
             )}

             {futureScope && (
               <>
                 <h3 className="font-mono font-bold text-lg md:text-xl mb-4 uppercase mt-8 md:mt-10">Future Scope</h3>
                 <p className="font-bold text-base md:text-lg leading-relaxed text-theme-blue/90">
                   {futureScope}
                 </p>
               </>
             )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
