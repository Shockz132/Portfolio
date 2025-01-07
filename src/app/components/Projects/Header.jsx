import { motion } from "framer-motion";

export const Header = ({title, date, readMins, imgSrc, tagsArray, overviewContentArray, contentsArray}) => {
    return  (
        <section className="mx-auto max-w-5xl px-4 pb-48 text-[--foreground]">
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-4 text-8xl font-black uppercase text-zinc-50"
            >
                {title}
            </motion.h1>
            <div className="flex flex-wrap gap-2 mb-2">
                {
                    tagsArray.map((tag) => (
                        <motion.p 
                            initial={{ y: 48, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}
                            key={tag}
                            className="w-max px-4 py-2 rounded-full border-[--foreground] border-2 text-md mb-2 font-semibold"
                        >
                            {tag}
                        </motion.p>
                    ))
                }
            </div>
            <div className="mb-9">
                <motion.p 
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-sm font-semibold"
                >
                    {date} | {readMins} min read
                </motion.p>
            </div>
            <div className="mb-20">
                <motion.img 
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    src={imgSrc}
                    alt={title}
                    className="w-full"
                />
            </div>
            <div id="project-overview" className="mb-20">
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