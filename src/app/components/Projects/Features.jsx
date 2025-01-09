import { motion } from "framer-motion";

export const Features = ({projectFeaturesArray, codeFeaturesArray}) => {
    return (
        <section id="features" className="mx-auto max-w-5xl px-4 pb-24 text-white">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-9 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Features
                </motion.h2>
                <motion.h3
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-2xl font-bold uppercase text-[--foreground]]"
                >
                    Project Features
                </motion.h3>
                <ol
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="list-decimal mb-9"
                >
                    {
                        projectFeaturesArray.map((projectFeature) => (
                            <motion.li
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={projectFeature}
                                className="w-max text-lg mb-2 ml-[20px] font-semibold"
                            >
                                <motion.p>
                                    {projectFeature}
                                </motion.p>
                            </motion.li>
                        ))
                    }
                </ol>
                <motion.h3
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-2xl font-bold uppercase text-[--foreground]]"
                >
                    Code Features
                </motion.h3>
                <ol className="list-decimal mb-9">
                    {
                        codeFeaturesArray.map((codeFeature) => (
                            <motion.li
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={codeFeature}
                                className="w-max text-lg mb-2 ml-[20px] font-semibold"
                            >
                                <motion.p>
                                    {codeFeature}
                                </motion.p>
                            </motion.li>
                        ))
                    }
                </ol>
            </div>
        </section>
    );
}