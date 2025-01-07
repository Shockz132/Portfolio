import { motion } from "framer-motion";

export const ProjectOverview = ({overviewContentArray}) => {
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
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-lg font-semibold"
                >
                    {
                        overviewContentArray.map((overviewContent) => (
                            <motion.p
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={overviewContent}
                                className="text-lg mb-8 font-semibold leading-loose"
                            >
                                {overviewContent}
                            </motion.p>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}