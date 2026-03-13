import { motion } from "framer-motion"

export const WhatIUse = () => {
    return (
        <section id="what-i-use" className="w-full bg-theme-bg pt-32 pb-48 border-b-4 border-theme-blue relative">
            {/* Structural Lines */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

            <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
                <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-24"
                >
                    <div className="font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue bg-theme-green inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] brut-hover">
                        [ 03 ]
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-theme-blue drop-shadow-[4px_4px_0px_var(--theme-yellow)]">
                        Tech Stack
                    </h1>
                </motion.div>

                <TechStackGrid />
            </div>
        </section>
    );
};

const TechStackGrid = () => {
    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            className="w-full border-4 border-theme-blue bg-theme-bg shadow-[8px_8px_0px_0px_#1b27b5] overflow-hidden"
        >
            {toolCategories.map((category, index) => {
                const colors = ["bg-theme-yellow", "bg-theme-orange", "bg-theme-green", "bg-theme-blue"];
                const textColors = ["text-theme-blue", "text-theme-blue", "text-theme-blue", "text-theme-yellow"];
                const color = colors[index % colors.length];
                const textColor = textColors[index % textColors.length];

                return (
                    <div key={index} className="flex flex-col md:flex-row border-b-4 border-theme-blue last:border-b-0">
                        <div className={`w-full md:w-1/3 p-6 border-b-4 md:border-b-0 md:border-r-4 border-theme-blue ${color} flex items-center justify-center md:justify-start`}>
                            <h3 className={`font-mono text-base font-black uppercase tracking-widest ${textColor} drop-shadow-[2px_2px_0px_rgba(255,255,255,0.3)]`}>
                                [ {category.dirName} ]
                            </h3>
                        </div>
                        <div className="w-full md:w-2/3 p-6 flex flex-wrap gap-4 items-center bg-theme-cream">
                            {category.tools.map((tool, i) => (
                                <span key={i} className="px-4 py-2 border-4 border-theme-blue bg-theme-bg text-theme-blue font-sans font-bold text-sm shadow-[4px_4px_0px_0px_#1b27b5] brut-hover hover:bg-theme-blue hover:text-white transition-colors cursor-pointer">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </motion.div>
    )
}

const toolCategories = [
    {
        dirName: "Web_Dev",
        tools: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React JS", "Typescript", "React Native"],
    },
    {
        dirName: "Backend",
        tools: ["Python", "C", "C#", "SQL", "FastAPI"],
    },
    {
        dirName: "AI_ML",
        tools: ["LangChain", "LangGraph", "Docker", "RAG"],
    },
    {
        dirName: "Tools",
        tools: ["VSCode", "Eagle", "Github", "Figma"],
    },
];