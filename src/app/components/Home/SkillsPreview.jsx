import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PanelsTopLeft, CircuitBoard, BrainCircuit, Network, Server, Smartphone } from "lucide-react";
import React, { useRef } from "react";
import { getAssetPath } from "@/app/utils/paths";

export const SkillsPreview = () => {
  return (
    <section
      id="skills"
      className="w-full bg-theme-bg pt-32 pb-48 border-b-4 border-theme-blue relative text-theme-blue overflow-hidden"
    >
      {/* Structural Lines */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

      {/* Mascot Accent */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 lg:z-40 opacity-20 lg:opacity-100 overflow-hidden lg:overflow-visible flex items-end justify-end">
        <img src={getAssetPath("/giraffe_reading.png")} alt="reading giraffe" className="w-[50vw] md:w-[30vw] max-w-[300px] object-contain drop-shadow-[4px_4px_0px_theme(colors.theme-blue)] translate-x-1/4 translate-y-12" />
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="mb-24 relative z-30"
        >
          <div className="relative font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue inline-block bg-theme-yellow px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] brut-hover">
            [ 02 ]
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-theme-blue drop-shadow-[4px_4px_0px_var(--theme-orange)]">
            Skills
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-30">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, icon, description, tags, index }) => {
  const responsiveColors = [
    "bg-theme-yellow",
    "bg-theme-cream",
    "bg-theme-green md:bg-theme-cream lg:bg-theme-green",
    "bg-theme-cream md:bg-theme-green lg:bg-theme-cream",
    "bg-theme-orange",
    "bg-theme-cream"
  ];
  const bgColor = responsiveColors[index % responsiveColors.length];

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.1 }}
      className="h-full"
    >
      <div className={`relative flex flex-col h-full ${bgColor} border-4 border-theme-blue group shadow-[8px_8px_0px_0px_#1b27b5] hover:shadow-[14px_14px_0px_0px_#1b27b5] hover:-translate-x-3 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-150`}>
        <div className="flex-1 flex flex-col items-start p-8 gap-6 brut-hover">
          <div className={`p-4 border-4 border-theme-blue bg-theme-bg text-theme-blue shadow-[4px_4px_0px_0px_#1b27b5] group-hover:bg-theme-yellow transition-colors duration-200`}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-black font-mono tracking-tight mb-3 text-theme-blue uppercase">
              {title}
            </h3>
            <p className="text-base leading-relaxed font-sans font-medium text-theme-blue opacity-90">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto pt-6 w-full">
            {tags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 text-xs font-bold uppercase tracking-widest font-mono border-4 border-theme-blue bg-theme-bg text-theme-blue shadow-[2px_2px_0px_0px_#1b27b5] group-hover:bg-theme-green transition-colors duration-200`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const skillsData = [
  {
    title: "WEB DEV",
    icon: <PanelsTopLeft size={32} strokeWidth={2.5} />,
    description: "Experienced in creating dynamic, user-friendly web applications using modern frameworks and libraries.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI & AGENTS",
    icon: <BrainCircuit size={32} strokeWidth={2.5} />,
    description: "Building AI agents and pipelines for automating workflows, document processing, and intelligent search.",
    tags: ["LangChain", "LangGraph", "Docker", "RAG"],
  },
  {
    title: "BACKEND DEV",
    icon: <Server size={32} strokeWidth={2.5} />,
    description: "Creating robust and scalable backend systems, APIs, and databases.",
    tags: ["Python", "FastAPI", "C", "C#", "SQL"],
  },
  {
    title: "MOBILE DEV",
    icon: <Smartphone size={32} strokeWidth={2.5} />,
    description: "Building cross-platform mobile applications with modern tooling and native-like performance.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "IOT SYSTEMS",
    icon: <Network size={32} strokeWidth={2.5} />,
    description: "Designing end-to-end IoT solutions integrating hardware, software, and cloud components.",
    tags: ["Arduino", "M5Stack", "MQTT", "WebSocket"],
  },
  {
    title: "ELECTRONICS",
    icon: <CircuitBoard size={32} strokeWidth={2.5} />,
    description: "PCB design, circuit analysis, and digital electronics with microcontroller-based solutions.",
    tags: ["PCB Design", "Eagle", "Soldering"],
  },
];