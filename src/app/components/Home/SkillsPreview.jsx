import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PanelsTopLeft, CircuitBoard, BrainCircuit, Network, Server, Smartphone } from "lucide-react";
import React, { useRef } from "react";

export const SkillsPreview = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-6 py-48 text-[--foreground]"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-[--foreground]"
      >
        Skills
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
             <TiltCard key={index} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
};

const TiltCard = ({ title, icon, description, tags, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col rounded-2xl bg-neutral-900/30 border border-neutral-800"
    >
        <div 
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} 
          className="flex-1 flex flex-col items-center text-center p-8 gap-6 rounded-2xl"
        >
            <div className="p-4 rounded-2xl bg-neutral-800/50 text-[--foreground] shadow-md">
                {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[--foreground] mb-2">
                  {title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                  {description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] font-medium rounded-full bg-neutral-900 text-neutral-400 border border-neutral-700/50 shadow-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
  );
};

const skillsData = [
    {
        title: "Web Development",
        icon: <PanelsTopLeft size={28} strokeWidth={1.5}/>,
        description: "Experienced in creating dynamic, user-friendly web applications using modern frameworks and libraries.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    },
    {
        title: "Automation & AI",
        icon: <BrainCircuit size={28} strokeWidth={1.5}/>,
        description: "Building AI agents and pipelines for automating workflows, document processing, and intelligent search.",
        tags: ["LangChain", "LangGraph", "Docling", "spaCy", "Docker", "RAG"],
    },
    {
        title: "Backend Development", 
        icon: <Server size={28} strokeWidth={1.5}/>,
        description: "Creating robust and scalable backend systems, APIs, and databases.",
        tags: ["Python", "FastAPI", "C", "C#", "SQL", "REST APIs"],
    },
    {
        title: "Mobile Development",
        icon: <Smartphone size={28} strokeWidth={1.5}/>,
        description: "Building cross-platform mobile applications with modern tooling and native-like performance.",
        tags: ["Flutter", "Dart", "Firebase", "Material Design"],
    },
    {
        title: "IoT System Design", 
        icon: <Network size={28} strokeWidth={1.5}/>,
        description: "Designing end-to-end IoT solutions integrating hardware, software, and cloud components.",
        tags: ["Arduino", "M5Stack", "BeagleBone", "MQTT", "Qubitro", "WebSocket"],
    },
    {
        title: "Electronics Design", 
        icon: <CircuitBoard size={28} strokeWidth={1.5}/>,
        description: "PCB design, circuit analysis, and digital electronics with microcontroller-based solutions.",
        tags: ["PCB Design", "AutoDesk Eagle", "Soldering", "Digital Electronics"],
    },
];