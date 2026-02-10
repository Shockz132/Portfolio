import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export const OutcomeAndResults = ({contentArray}) => {
    return (
        <section id="outcome-and-results" className="mx-auto max-w-4xl px-6 py-24 text-[--foreground]">
            <div className="mb-20">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                        <Trophy size={28} />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                        Outcome & Results
                    </h2>
                </motion.div>

                <div className="pl-4 border-l-2 border-neutral-800 space-y-8">
                    {contentArray.map((content, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                        >
                            <span className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-neutral-700 ring-4 ring-[#0a0a0a]" />
                            <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
                                {content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}