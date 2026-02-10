import { motion } from "framer-motion"

export const WhatIUse = () => {
    return (
        <section id="what-i-use" className="mx-auto max-w-5xl px-6 py-48 text-[--foreground]">
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-[--foreground]"
            >
                What I Use
            </motion.h1>

            <TerminalComponent />
        </section>
    );
};

const TerminalComponent = () => {
    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            className="w-full rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden font-mono text-sm md:text-base"
        >
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-neutral-500 text-xs select-none">jethro@portfolio: ~/tech-stack</div>
            </div>
            
            <div className="p-6 space-y-8">
                {toolCategories.map((category, index) => (
                    <CommandLine key={index} category={category} index={index} />
                ))}
                <div className="flex items-center gap-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="animate-pulse bg-neutral-500 w-2.5 h-5 block" />
                </div>
            </div>
        </motion.div>
    )
}

const CommandLine = ({ category, index }) => {
    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2 text-[--foreground] font-bold">
                <span className="text-green-500">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-400">$</span>
                <span className="text-yellow-200">ls</span>
                <span className="text-purple-400">./{category.dirName}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 pl-4">
                {category.tools.map((tool, i) => (
                    <span key={i} className="text-neutral-300 hover:text-white transition-colors cursor-default">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    )
}

const toolCategories = [
    {
        dirName: "Web_Development",
        tools: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React JS", "Typescript", "React TS", "React Native"],
    },
    {
        dirName: "Backend_Development",
        tools: ["Python", "Javascript", "C", "C#", "SQL"],
    },
    {
        dirName: "Software_Tools",
        tools: ["VSCode", "Eagle", "Microsoft Office Suite", "Github"],
    },
    {
        dirName: "Special",
        tools: ["Googling"],
    },
];