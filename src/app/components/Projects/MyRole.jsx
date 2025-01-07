import { motion } from "framer-motion";

export const MyRole = ({role, descriptionArray}) => {
    return (
        <section id="my-role" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-9 text-4xl font-black uppercase text-zinc-50"
                >
                    My Role
                </motion.h2>
                <motion.h3
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-4 text-2xl font-bold uppercase text-zinc-50"
                >
                    {role}
                </motion.h3>
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-lg font-semibold"
                >
                    {
                        descriptionArray.map((description) => (
                            <motion.p
                                initial={{ y: 48, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                                key={description}
                                className="text-lg mb-8 font-semibold leading-loose"
                            >
                                {description}
                            </motion.p>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}