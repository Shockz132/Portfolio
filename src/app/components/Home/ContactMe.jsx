import { motion } from "framer-motion";

export const ContactMe = () => {
    return (
        <section id="contact-me" className="w-full bg-[var(--color-paper-light)] pt-32 pb-48 relative border-b border-black">
            {/* Structural Lines */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-black pointer-events-none z-10" />

            <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-24"
                >
                    <div className="font-[family-name:var(--font-geist-mono)] text-xs tracking-[0.2em] mb-4 border-l border-black pl-4">
                        [ 05 ]
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-black">
                        Get In Touch
                    </h1>
                </motion.div>

                <div className="border border-black bg-white flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-black bg-[var(--color-paper-light)]">
                        <h3 className="font-[family-name:var(--font-geist-mono)] text-sm font-bold uppercase tracking-widest text-black mb-8">
                            [ CONTACT INFO ]
                        </h3>
                        <div className="space-y-6 font-[family-name:var(--font-geist-sans)] text-black">
                            <div>
                                <p className="font-bold mb-1">Email</p>
                                <a href="mailto:jethro@example.com" className="hover:underline underline-offset-4 font-[family-name:var(--font-geist-mono)] text-sm">jethro@example.com</a>
                            </div>
                            <div>
                                <p className="font-bold mb-1">Location</p>
                                <p className="font-[family-name:var(--font-geist-mono)] text-sm">Singapore</p>
                            </div>
                            <div>
                                <p className="font-bold mb-1">Social</p>
                                <div className="flex gap-4 font-[family-name:var(--font-geist-mono)] text-sm">
                                    <a href="https://www.linkedin.com/in/jethro-chia-64581233b/" className="hover:underline underline-offset-4">LinkedIn</a>
                                    <a href="https://www.github.com/Shockz132" className="hover:underline underline-offset-4">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <form className="w-full md:w-2/3 p-8 md:p-12 flex flex-col space-y-6 bg-white">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="block font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest mb-2">[ NAME ]</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-b-2 transition-all font-[family-name:var(--font-geist-sans)]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest mb-2">[ EMAIL ]</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-b-2 transition-all font-[family-name:var(--font-geist-sans)]"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest mb-2">[ SUBJECT ]</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-b-2 transition-all font-[family-name:var(--font-geist-sans)]"
                            />
                        </div>
                        
                        <div>
                            <label className="block font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-widest mb-2">[ MESSAGE ]</label>
                            <textarea
                                rows="4"
                                className="w-full bg-transparent border-b border-black py-2 outline-none focus:border-b-2 transition-all font-[family-name:var(--font-geist-sans)] resize-none"
                            />
                        </div>
                        
                        <button type="submit" className="self-start mt-4 border border-black bg-black text-white font-[family-name:var(--font-geist-mono)] text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300">
                            [ SEND MESSAGE ]
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}