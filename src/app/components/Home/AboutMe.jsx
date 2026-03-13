import { TextScramble } from '@/app/components/core/text-scramble';
import { motion } from 'framer-motion';

export function AboutMe() {
    return (
        <section id="about" className="relative w-full min-h-[60vh] flex flex-col border-b-4 border-theme-blue overflow-hidden bg-theme-bg pt-12 md:pt-16">
            {/* Playful polka-dot background pattern */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30 bg-[radial-gradient(var(--theme-yellow)_15%,transparent_15%)] bg-[size:3rch_3ch] md:bg-[size:40px_40px]">
            </div>

            <div className='w-full h-full flex flex-col justify-end px-6 md:px-12 pb-6 md:pb-8 z-10 flex-grow relative'>
                {/* Structural Line down the middle like reference */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none" />

                <div className="flex flex-col md:flex-row w-full justify-between items-end gap-12">
                    {/* Left Side: Massive Text */}
                    <div className="w-full md:w-1/2 relative z-20">
                        <h1 className="font-sans font-black text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter text-theme-blue -ml-1 md:-ml-2 mb-2 drop-shadow-[4px_4px_0px_var(--theme-yellow)] md:drop-shadow-[6px_6px_0px_var(--theme-yellow)]">
                            <TextScramble duration={1.5} className="block">Jethro</TextScramble>
                            <TextScramble duration={1.5} className="block">Chia</TextScramble>
                        </h1>
                        <div className="bg-theme-orange inline-block px-4 py-2 mt-4 border-4 border-theme-blue transform -rotate-2 brut-hover shadow-[4px_4px_0px_0px_#1b27b5]">
                            <span className="font-mono text-xl md:text-3xl font-bold tracking-widest text-theme-cream uppercase">Developer.</span>
                        </div>
                    </div>

                    {/* Right Side: Small Text, Links & Mascot */}
                    <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-end pb-4 md:pb-8 relative">
                        {/* Giraffe Mascot */}
                        <img
                            src="/giraffe_wave.png"
                            alt="Excited Waving Giraffe Mascot"
                            className="absolute bottom-32 md:bottom-24 right-0 md:-right-8 3xl:right-0 w-[50vw] md:w-[15vw] 2xl:w-[300px] object-contain drop-shadow-[4px_4px_0px_theme(colors.theme-blue)] animate-wobble z-0 2xl:z-30 opacity-30 2xl:opacity-100 pointer-events-none"
                        />

                        <div className="relative z-10 bg-theme-cream border-4 border-theme-blue p-6 brut-hover transform rotate-1 mb-8 shadow-[6px_6px_0px_0px_#1b27b5] max-w-sm mt-48 md:mt-0">
                            <p className="text-theme-blue text-lg md:text-xl font-mono font-bold leading-tight">
                                Answering all of your software engineering and full-stack development needs.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 relative z-10">
                            <motion.a
                                href="https://www.github.com/Shockz132"
                                target="_blank"
                                className="font-mono font-bold text-xs md:text-sm tracking-widest uppercase bg-theme-green text-theme-blue border-4 border-theme-blue px-4 py-2 shadow-[4px_4px_0px_0px_#1b27b5] brut-hover"
                            >
                                / GITHUB /
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/jethro-chia-64581233b/"
                                target="_blank"
                                className="font-mono font-bold text-xs md:text-sm tracking-widest uppercase bg-theme-blue text-theme-yellow border-4 border-theme-blue px-4 py-2 shadow-[4px_4px_0px_0px_#1b27b5] brut-hover"
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