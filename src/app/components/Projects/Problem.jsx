import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const ProjectProblem = ({ problemStatement }) => {
    return (
        <section id="problem" className="mx-auto max-w-4xl px-4 py-24">
             <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute -top-10 -left-10 text-neutral-800 pointer-events-none">
                    <Quote size={120} />
                </div>
                
                <h2 className="relative text-3xl md:text-5xl font-bold leading-tight text-center z-10 text-[--foreground]">
                    <span className="text-neutral-500">The Problem:</span> 
                    <br />
                    "{problemStatement}"
                </h2>

                <div className="w-24 h-1 bg-[--foreground] mx-auto mt-12 rounded-full opacity-20" />
            </motion.div>
        </section>
    );
}