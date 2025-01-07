import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const Header = ({title, date, readMins, imgSrc, tagsArray, githubLink}) => {
    return  (
        <section className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div>
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
                <div className="mb-9">
                    <motion.img 
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        src={imgSrc}
                        alt={title}
                        className="w-full"
                    />
                </div>
                <div className="flex mb-20">
                    <motion.span
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="pr-5"
                    >
                        <Github />
                    </motion.span>
                    <motion.a 
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        href={githubLink}
                        className="text-lg font-semibold underline mt-[-3px]"
                    >
                        View this project on Github
                    </motion.a>
                </div>
            </div>
        </section>
    );
}