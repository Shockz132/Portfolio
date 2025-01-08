import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";

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
                <motion.span
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                >
                    <Link
                        href={githubLink}
                        className="text-lg font-semibold underline mt-[-3px]"
                    >   
                        View this project on Github
                    </Link>
                </motion.span>
            </div>
        </section>
    );
}