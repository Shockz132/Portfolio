import { motion } from "framer-motion";

export const ProjectOverview = ({overviewContentArray}) => {
    return (
        <section id="project-overview" className="mx-auto max-w-4xl px-6 pb-24 text-[--foreground]">
            <div className="mb-20">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-3xl font-bold uppercase tracking-wide border-l-4 border-[--foreground] pl-6"
                >
                    Project Overview
                </motion.h2>
                
                <div className="space-y-8">
                    {overviewContentArray.map((overviewContent, idx) => (
                        <motion.p
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`text-lg md:text-xl leading-relaxed text-neutral-400 ${idx === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-[--foreground] first-letter:mr-3 first-letter:float-left" : ""}`}
                        >
                            {overviewContent}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}