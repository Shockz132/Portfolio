import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export const ImageGallery = ({ imgSrcArray, imgDescriptionArray }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!imgSrcArray || imgSrcArray.length === 0) return null;

    return (
        <>
            <div className="columns-1 md:columns-2 gap-8 space-y-8 mt-8">
                {imgSrcArray.map((imgSrc, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative break-inside-avoid mb-8"
                    >
                         <div 
                            onClick={() => setSelectedImage(imgSrc)}
                            className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg cursor-pointer"
                        >
                            <motion.img
                                layoutId={`image-${imgSrc}-${index}`}
                                src={imgSrc}
                                alt={imgDescriptionArray?.[index] || "Project Screenshot"}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                             {/* Hover Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                            
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                        </div>
                        
                        {imgDescriptionArray?.[index] && (
                            <p className="text-sm font-medium text-neutral-400 pl-4 border-l-2 border-neutral-700 group-hover:border-[--foreground] transition-colors mt-4">
                                {imgDescriptionArray[index]}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                    >
                        <button
                            className="absolute top-4 right-4 p-3 bg-neutral-800/50 hover:bg-neutral-700 rounded-full text-white transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="w-full h-full max-w-7xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} 
                         />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
