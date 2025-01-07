import { motion } from "framer-motion";

export const TableOfContents = ({contentsArray}) => {
    return (
        <section id="table-of-contents" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Table of Contents
                </motion.h2>
                <motion.ul
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="list-decimal"
                >
                    {
                        contentsArray.map((content) => (
                            <motion.li
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={content}
                                className="w-max text-lg mb-2 ml-[20px] font-semibold underline"
                            >
                                <motion.a href={`#${content.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {content}
                                </motion.a>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
        </section>
            
    );
}