import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Building2 } from "lucide-react";
import { useRef } from "react";
import { getAssetPath } from "@/app/utils/paths";

export const WorkExperience = () => {
  return (
    <div className="relative border-b-4 border-theme-blue bg-theme-bg overflow-hidden">
      {/* Structural Lines */}
      <div className="hidden md:block absolute left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

      <WorkExperienceList />
    </div>
  );
};

const WorkExperienceList = () => {
  return (
    <section
      id="experience"
      className="w-full bg-theme-yellow pt-32 pb-48 relative border-t-4 border-theme-blue overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-20 bg-[radial-gradient(var(--theme-blue)_15%,transparent_15%)] bg-[size:40px_40px]">
      </div>

      {/* Mascot Accent */}
      <div className="absolute right-0 top-64 pointer-events-none z-0 lg:z-30 opacity-20 lg:opacity-100 transform translate-x-12 lg:translate-x-1/4">
        <img src={getAssetPath("/giraffe_coding.png")} alt="Giraffe Coding" className="w-[60vw] md:w-[40vw] max-w-[350px] object-contain drop-shadow-[4px_4px_0px_theme(colors.theme-blue)]" />
      </div>

      <div className="max-w-full mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-24"
        >
          <div className="font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue bg-theme-bg inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] brut-hover">
            [ 01 ]
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-theme-blue drop-shadow-[4px_4px_0px_var(--theme-cream)]">
            Experience
          </h1>
        </motion.div>

        <div className="relative border-l-4 border-theme-blue ml-4 md:ml-8 space-y-20">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  const accentColor = isEven ? "bg-theme-green" : "bg-theme-orange";
  const rotateClass = isEven ? "group-hover:-rotate-2" : "group-hover:rotate-2";

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="relative pl-12 md:pl-20 group max-w-[1500px]"
    >
      {/* Timeline Dot/Line connection */}
      <div className={`absolute left-0 top-8 w-8 md:w-16 h-[6px] ${accentColor} border-y-4 border-r-4 border-theme-blue`} />

      <div className={`flex flex-col gap-4 border-4 border-theme-blue p-8 md:p-10 bg-theme-bg transition-transform duration-300 ${rotateClass} origin-bottom-left shadow-[8px_8px_0px_0px_#1b27b5] brut-hover`}>
        <div className={`font-mono text-xs md:text-sm font-bold uppercase tracking-widest ${accentColor} text-theme-blue border-4 border-theme-blue self-start px-4 py-2 shadow-[4px_4px_0px_0px_#1b27b5]`}>
          [ {experience.period} ]
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-theme-blue tracking-tight leading-none mt-4 pb-2 drop-shadow-[2px_2px_0px_var(--theme-cream)]">
          {experience.role}
        </h2>

        <div className="flex items-center gap-4 text-lg md:text-xl font-mono font-bold text-theme-blue border-t-4 border-theme-blue pt-6 mt-2">
          <Building2 size={28} strokeWidth={2.5} />
          <span>{experience.company}</span>
        </div>
      </div>
    </motion.div>
  );
};

const experienceData = [
  {
    role: "ML & AI Intern",
    company: "National Computer Systems (NCS)",
    period: "Sep 2025 - Feb 2026",
  },
  {
    role: "Research Intern",
    company: "Agency for Science, Technology and Research (A*STAR)",
    period: "Feb 2025 - Apr 2025",
  }
];