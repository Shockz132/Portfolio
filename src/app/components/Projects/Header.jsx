import { motion } from "framer-motion";

export const Header = ({title, date, readMins, imgSrc, tagsArray}) => {
    return  (
        <section className="mx-auto max-w-6xl px-6 py-12 text-[--foreground]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <motion.div
                         initial={{ y: 20, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 0.5 }}
                         className="flex items-center gap-4 mb-6 text-sm font-medium tracking-wide uppercase text-neutral-500"
                    >
                        <span>{date}</span>
                        <span className="w-1 h-1 bg-neutral-500 rounded-full"></span>
                        <span>{readMins} min read</span>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8 text-5xl md:text-7xl font-black uppercase tracking-tight text-[--foreground]"
                    >
                        {title}
                    </motion.h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {
                            tagsArray.map((tag, index) => (
                                <motion.span 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full border border-neutral-700/50 hover:border-[--foreground] text-sm font-medium transition-colors"
                                >
                                    {tag}
                                </motion.span>
                            ))
                        }
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 aspect-video ring-1 ring-white/10"
                    >
                         <img 
                            src={imgSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}