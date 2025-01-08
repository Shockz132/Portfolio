import { motion } from "framer-motion";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";

export const WorkProcess = ({parts, descriptions, imgArrays, imgDescriptionArrays}) => {
    return (
        <section id="work-process" className="mx-auto max-w-5xl px-4 pb-36 text-[--foreground]">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Work Process
                </motion.h2>
                {
                    parts.map((part, index) => {
                        return (
                            <motion.div
                                key={`work-process-${index}`}
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                className="mb-8"
                            >
                                <motion.p
                                    key={`part-${index}`}
                                    initial={{ y: 48, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                                    className="text-lg font-semibold"
                                >
                                    {part}
                                </motion.p>
                                <motion.p
                                    key={`description-${index}`}
                                    initial={{ y: 48, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                                >
                                    {descriptions[index]}
                                </motion.p>
                                <ProjectShowcase
                                    imgSrcArray={imgArrays[index]}
                                    imgDescriptionArray={imgDescriptionArrays[index]}
                                />
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    );
}