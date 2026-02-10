import { motion } from "framer-motion";
import { ImageGallery } from "@/app/components/Projects/ImageGallery";
import { Hammer } from "lucide-react";

export const WorkProcess = ({parts, descriptions, imgArrays, imgDescriptionArrays}) => {
    return (
        <section id="work-process" className="mx-auto max-w-6xl px-6 py-24 text-[--foreground]">
            <div>
                 <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                        <Hammer size={24} />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                        Work Process
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-neutral-800 ml-3 md:ml-6 space-y-24">
                    {parts.map((part, index) => {
                        return (
                            <motion.div
                                key={`work-process-${index}`}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] md:-left-[9px] top-2 w-4 h-4 rounded-full bg-[--foreground] ring-4 ring-[#0a0a0a]" />
                                
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2 text-[--foreground]">
                                        {part}
                                    </h3>
                                    <p className="text-lg text-neutral-400 leading-relaxed">
                                        {descriptions[index]}
                                    </p>
                                </div>
                                
                                <div className="mt-8">
                                    <ImageGallery
                                        imgSrcArray={imgArrays[index]}
                                        imgDescriptionArray={imgDescriptionArrays[index]}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}