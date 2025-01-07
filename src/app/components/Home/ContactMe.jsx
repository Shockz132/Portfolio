import { motion } from "framer-motion";

export const ContactMe = () => {
    return (
        <section id="contact-me" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
            <div>
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-12 text-4xl font-black uppercase text-[--foreground]]"
                >
                    Contact Me
                </motion.h2>
                <div >
                    <form action="" className="flex flex-col">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-[--background] border-[--foreground] border-2 outline-2 mb-4 max-w-[40%] py-4 px-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[--background] border-[--foreground] border-2 outline-2 mb-4 max-w-[40%] py-4 px-2"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-[--background] border-[--foreground] border-2 outline-2 mb-4 max-w-[40%] py-4 px-2"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="bg-[--background] border-[--foreground] border-2 outline-2 mb-4 max-w-[40%] py-4 px-2"
                        />
                        <button type="submit" className="bg-[--background] w-max px-8 py-4 border-[--foreground] border-2 outline-2 hover:bg-[--foreground] hover:text-[--background]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}