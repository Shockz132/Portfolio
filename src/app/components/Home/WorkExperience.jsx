import { motion } from "framer-motion";

export const WorkExperience = () => {
    return (
        <section
            id="about-me"
            className="mx-auto max-w-5xl px-4 py-48 text-[--foreground]]"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-[--foreground]]"
            >
                Work Experience
            </motion.h1>
        </section>
    );
}