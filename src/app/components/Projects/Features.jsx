import { motion } from "framer-motion";
import { CheckCircle2, Code2 } from "lucide-react";

export const Features = ({projectFeaturesArray, codeFeaturesArray}) => {
    return (
        <section id="features" className="mx-auto max-w-5xl px-4 py-24 text-[--foreground]">
            
            <div className="mb-20">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                        <CheckCircle2 size={24} />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">Key Features</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectFeaturesArray.map((feature, idx) => (
                        <motion.div
                            key={feature}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors"
                        >
                            <p className="font-semibold text-lg">{feature}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-8"
                >
                     <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                        <Code2 size={24} />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">Tech Stack</h2>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                    {codeFeaturesArray.map((tech, idx) => (
                        <motion.span
                            key={tech}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="px-5 py-2.5 rounded-lg bg-neutral-800 text-neutral-200 font-mono text-sm font-medium hover:bg-neutral-700 transition-colors"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}