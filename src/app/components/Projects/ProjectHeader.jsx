'use client'

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { SiHackster } from "react-icons/si";
import { ExternalLink } from "lucide-react";

export const ProjectHeader = ({ 
  title, 
  titleAccent, 
  concatTitle = false,
  date,
  subtitle, 
  tags, 
  repoLink, 
  repoType = "github", 
  imgSrc 
}) => {
  const RepoIcon = repoType === "github" ? FiGithub : (repoType === "hackster" ? SiHackster : ExternalLink);
  const repoLabel = repoType === "github" ? "View Repository" : (repoType === "hackster" ? "View Hackster" : "View Project");

  return (
    <section id="overview" className="mt-12 md:mt-24 mb-32 flex flex-col lg:flex-row gap-12 items-center scroll-mt-32">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ x: -64, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {date && (
            <div className="inline-block bg-theme-green border-2 border-theme-blue px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-theme-blue shadow-[3px_3px_0px_0px_#1b27b5] mb-6 transform -rotate-1">
              {date}
            </div>
          )}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter text-theme-blue mb-8 break-words">
            {title}{concatTitle ? "" : " "}<span className="text-theme-yellow drop-shadow-[5px_5px_0px_#1b27b5] md:drop-shadow-[8px_8px_0px_#1b27b5] break-words inline-block max-w-full">{titleAccent}</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold leading-tight max-w-md mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tech) => (
              <span key={tech} className="bg-white border-2 border-theme-blue px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_#1b27b5]">
                {tech}
              </span>
            ))}
          </div>

          {repoLink && (
            <motion.a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-theme-blue text-theme-cream px-8 py-4 border-4 border-theme-blue shadow-[8px_8px_0px_0px_var(--theme-yellow)] transform -rotate-1 hover:rotate-0 transition-transform active:translate-y-1 active:shadow-none"
            >
              <RepoIcon size={24} />
              <span className="font-mono font-black text-xl uppercase tracking-tighter">{repoLabel}</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
          animate={{ scale: 1, opacity: 1, rotate: -2 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="relative z-10 bg-theme-cream border-[6px] border-theme-blue p-4 shadow-[24px_24px_0px_0px_var(--theme-yellow)] transform"
        >
          <div className="bg-theme-green border-4 border-theme-blue p-2 relative overflow-hidden">
            <img src={imgSrc} alt={`${title} preview`} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-theme-orange border-4 border-theme-blue -z-10"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-theme-yellow border-4 border-theme-blue rounded-full -z-10"></div>
      </div>
    </section>
  );
};
