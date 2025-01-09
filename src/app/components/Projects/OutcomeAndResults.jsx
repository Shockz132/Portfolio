import { motion } from "framer-motion";

export const OutcomeAndResults = ({contentArray}) => {
    return (
        <section id="outcome-and-results" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div className="mb-20">
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Outcome and Results
                </motion.h2>
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-lg font-semibold"
                >
                    {
                        contentArray.map((content) => (
                            <motion.p
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={content}
                                className="text-lg mb-8 font-semibold leading-loose"
                            >
                                {content}
                            </motion.p>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}