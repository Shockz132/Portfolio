import { motion } from 'framer-motion';

export function BioBridge() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-theme-bg overflow-hidden border-b-4 border-theme-blue">
            {/* Structural Lines */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />
            <div className="hidden md:block absolute right-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

            {/* Background Massive Text (Scrolling effectively) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10 whitespace-nowrap z-0">
                <span className="text-[30vw] md:text-[30vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "2px md:4px var(--theme-blue)" }}>
                    STUDENT
                </span>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-24 relative z-20">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="bg-theme-cream border-4 border-theme-blue p-5 md:p-12 shadow-[6px_6px_0px_0px_#1b27b5] brut-hover brut-active transform rotate-1 md:rotate-2"
                >
                    <div className="bg-theme-yellow inline-block px-3 py-1 border-4 border-theme-blue mb-3 md:mb-6 shadow-[4px_4px_0px_0px_#1b27b5] transform -rotate-2 md:-rotate-3">
                        <span className="font-mono text-[10px] md:text-base font-black tracking-widest text-theme-blue uppercase">
                            [ WHO AM I? ]
                        </span>
                    </div>

                    <p className="text-theme-blue text-base md:text-4xl font-black leading-tight tracking-tight">
                        An Electronic and Computer Engineering Polytechnic Student, passionate about computers and coding, a curious problem-solver with a love for exploring new technologies. Always eager to learn and grow, wanting to create innovative and impactful solutions that contribute to society.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
