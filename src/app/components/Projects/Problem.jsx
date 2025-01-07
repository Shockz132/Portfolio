import { motion } from "framer-motion";

export const ProjectProblem = () => {
    return (
        <section id="project-overview" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div className="mb-20">
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Project Overview
                </motion.h2>
                <motion.h3
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-2xl font-semibold border-[--foreground] text-[--foreground]"
                >
                    How 
                </motion.h3>
            </div>
        </section>
    );
}