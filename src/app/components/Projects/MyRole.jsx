import { motion } from "framer-motion";
import { User2 } from "lucide-react";

export const MyRole = ({role, descriptionArray}) => {
    return (
        <section id="my-role" className="mx-auto max-w-4xl px-6 py-24 text-[--foreground]">
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-4 mb-8 relative z-10"
                >
                    <div className="p-3 bg-[--foreground] text-black rounded-xl">
                        <User2 size={32} />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-1">
                            My Role
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[--foreground]">
                            {role}
                        </h3>
                    </div>
                </motion.div>

                <div className="space-y-6 relative z-10">
                    {descriptionArray.map((description, idx) => (
                        <motion.p
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="text-lg leading-relaxed text-neutral-300"
                        >
                            {description}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    )
}