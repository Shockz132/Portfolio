import { motion } from "framer-motion";

export const HacksterLink= ({ hacksterLink }) => {
    return (
        <section className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div className="flex mb-20">
                <motion.img
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="pr-5 w-[60px] h-auto"
                    src="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/hacksterio.png"
                    alt="image link of hackster.io"
                />
                <motion.a 
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    href={hacksterLink}
                    className="text-lg font-semibold underline mt-[3px]"
                >
                    View this project on hackster.io
                </motion.a>
            </div>
        </section>
    );
}