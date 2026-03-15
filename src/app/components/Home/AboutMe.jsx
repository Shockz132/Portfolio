import { TextScramble } from '@/app/components/core/text-scramble';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/app/utils/paths';

export function AboutMe() {
    return (
        <section id="about" className="relative w-full min-h-[60vh] flex flex-col border-b-4 border-theme-blue overflow-hidden bg-theme-bg pt-20 md:pt-24">
            {/* Playful polka-dot background pattern */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30 bg-[radial-gradient(var(--theme-yellow)_15%,transparent_15%)] bg-[size:3rch_3ch] md:bg-[size:40px_40px]">
            </div>

            {/* Structural Line down the middle like reference */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

            <div className='w-full h-full flex flex-col justify-end px-6 md:px-12 pb-6 md:pb-8 z-10 flex-grow relative'>

                <div className="flex flex-col md:flex-row w-full justify-between items-end gap-6 md:gap-12">
                    {/* Left Side: Massive Text */}
                    <div className="w-full md:w-1/2 relative z-20">
                        <h1 className="font-sans font-black text-[13vw] md:text-[14vw] leading-[0.85] tracking-tighter text-theme-blue -ml-1 md:-ml-2 mb-2 drop-shadow-[3px_3px_0px_var(--theme-yellow)] md:drop-shadow-[6px_6px_0px_var(--theme-yellow)]">
                            <div className="overflow-hidden">
                                <TextScramble duration={1.5} className="block">Jethro</TextScramble>
                            </div>
                            <div className="overflow-hidden">
                                <TextScramble duration={1.5} className="block">Chia</TextScramble>
                            </div>
                        </h1>
                        <div className="bg-theme-orange inline-block px-4 py-2 mt-2 md:mt-4 border-4 border-theme-blue transform -rotate-1 md:-rotate-2 brut-hover brut-active shadow-[4px_4px_0px_0px_#1b27b5]">
                            <span className="font-mono text-lg md:text-3xl font-bold tracking-widest text-theme-cream uppercase">Developer.</span>
                        </div>
                    </div>

                    {/* Right Side: Small Text, Links & Mascot */}
                    <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-end pb-4 md:pb-8 relative">
                        {/* Giraffe Mascot - Repositioned for mobile */}
                        <img
                            src={getAssetPath("/giraffe_wave.png")}
                            alt="Excited Waving Giraffe Mascot"
                            className="absolute -top-32 md:bottom-24 right-0 md:-right-8 3xl:right-0 w-[45vw] md:w-[15vw] 2xl:w-[300px] object-contain drop-shadow-[4px_4px_0px_theme(colors.theme-blue)] animate-wobble z-0 2xl:z-30 opacity-40 md:opacity-30 2xl:opacity-100 pointer-events-none"
                        />

                        <div className="relative z-10 bg-theme-cream border-4 border-theme-blue p-5 md:p-6 brut-hover brut-active transform rotate-1 mb-6 md:mb-8 shadow-[6px_6px_0px_0px_#1b27b5] max-w-sm mt-8 md:mt-0">
                            <p className="text-theme-blue text-sm md:text-xl font-mono font-bold leading-tight">
                                Answering all of your software engineering and full-stack development needs.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-3 relative z-10">
                            <motion.a
                                href="https://www.github.com/Shockz132"
                                target="_blank"
                                className="font-mono font-bold text-[9px] md:text-sm tracking-widest uppercase bg-theme-green text-theme-blue border-[3px] md:border-4 border-theme-blue px-2.5 md:px-4 py-1.5 md:py-2 shadow-[3px_3px_0px_0px_#1b27b5] md:shadow-[4px_4px_0px_0px_#1b27b5] brut-hover brut-active"
                            >
                                / GITHUB /
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/jethro-chia-64581233b/"
                                target="_blank"
                                className="font-mono font-bold text-[9px] md:text-sm tracking-widest uppercase bg-theme-blue text-theme-yellow border-[3px] md:border-4 border-theme-blue px-2.5 md:px-4 py-1.5 md:py-2 shadow-[3px_3px_0px_0px_#1b27b5] md:shadow-[4px_4px_0px_0px_#1b27b5] brut-hover brut-active"
                            >
                                / LINKEDIN /
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}