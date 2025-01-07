import { motion } from "framer-motion";

export const GithubLink = ({ githubLink }) => {
    return (
        <section className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
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
        </section>
    );
}