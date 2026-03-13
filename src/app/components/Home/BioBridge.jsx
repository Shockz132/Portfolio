import { motion } from 'framer-motion';

export function BioBridge() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-theme-bg overflow-hidden border-b-4 border-theme-blue">
            {/* Structural Lines */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />
            <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

            {/* Background Massive Text (Scrolling effectively) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10 whitespace-nowrap z-0">
                <span className="text-[30vw] font-black uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: "4px var(--theme-blue)" }}>
                    STUDENT STUDENT STUDENT
                </span>
            </div>

            <div className="max-w-4xl mx-auto px-12 md:px-24 relative z-20">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="bg-theme-cream border-4 border-theme-blue p-8 md:p-12 shadow-[6px_6px_0px_0px_#1b27b5] brut-hover transform rotate-2"
                >
                    <div className="bg-theme-yellow inline-block px-3 py-1 border-4 border-theme-blue mb-6 shadow-[4px_4px_0px_0px_#1b27b5] transform -rotate-3">
                        <span className="font-mono text-sm md:text-base font-black tracking-widest text-theme-blue uppercase">
                            [ WHO AM I? ]
                        </span>
                    </div>

                    <p className="text-theme-blue text-2xl md:text-4xl font-black leading-tight tracking-tight">
                        An Electronic and Computer Engineering Polytechnic Student, passionate about computers and coding, a curious problem-solver with a love for exploring new technologies. Always eager to learn and grow, wanting to create innovative and impactful solutions that contribute to society.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
