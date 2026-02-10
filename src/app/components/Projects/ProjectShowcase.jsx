import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { ImageGallery } from "./ImageGallery";

export const ProjectShowcase = ({ title = "Project Showcase", imgSrcArray, imgDescriptionArray }) => {
    return (
        <section id="project-showcase" className="mx-auto max-w-6xl px-6 py-24 text-[--foreground]">
             <div className="mb-16">
                 {title && (
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500">
                            <ImageIcon size={24} />
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-wide">
                            {title}
                        </h2>
                    </motion.div>
                 )}

                <ImageGallery 
                    imgSrcArray={imgSrcArray} 
                    imgDescriptionArray={imgDescriptionArray} 
                />
            </div>
        </section>
    );
}