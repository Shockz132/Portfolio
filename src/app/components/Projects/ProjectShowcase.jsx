import { motion } from "framer-motion"

export const ProjectShowcase = ({imgSrcArray, imgDescriptionArray}) => {
    return (
        <section className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-12 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Project Showcase
                </motion.h2>
                <div className="text-lg font-semibold">
                    {
                        imgSrcArray.map((imgSrc, index) => (
                            <>
                                <motion.p
                                    initial={{ y: 48, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                                    key={`${imgDescriptionArray[index].replace(/\s+/g, '-').toLowerCase()}`}
                                    className="text-lg font-semibold text-center"
                                >
                                    {imgDescriptionArray[index]}
                                </motion.p>
                                <motion.img
                                    initial={{ y: 48, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeInOut", duration: 0.75 }}
                                    src={imgSrc}
                                    key={index}
                                    alt={`image link to ${imgDescriptionArray[index].replace(/\s+/g, '-').toLowerCase()}`}
                                    className="w-full mb-24"
                                />
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}