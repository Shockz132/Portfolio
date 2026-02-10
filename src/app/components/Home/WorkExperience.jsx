import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { useRef } from "react";

export const WorkExperience = () => {
    return (
        <>
            <Hero />
            <WorkExperienceList />
        </>
    );
};

const SECTION_HEIGHT = 1900;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 1000],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1000],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/HomePage/vscode-window.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://raw.githubusercontent.com/Shockz132/Portfolio/b6fb1f341e734182ecbf30e9f0e6d27fcc66e767/public/HomePage/ReactLogo.svg"
        alt="React JS logo"
        start={-200}
        end={200}
        className="w-[20%]"
      />
      <ParallaxImg
        src="https://raw.githubusercontent.com/Shockz132/Portfolio/b6fb1f341e734182ecbf30e9f0e6d27fcc66e767/public/HomePage/TypeScriptLogo.svg"
        alt="typescript logo"
        start={200}
        end={-250}
        className="mx-auto w-[20%]"
      />
      <ParallaxImg
        src="https://raw.githubusercontent.com/Shockz132/Portfolio/b6fb1f341e734182ecbf30e9f0e6d27fcc66e767/public/HomePage/NextJSLogo.svg"
        alt="white nextjs logo"
        start={-200}
        end={200}
        className="ml-auto w-[20%]"
      />
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        alt="python logo"
        start={150}
        end={-500}
        className="ml-48 w-[15%]"
      />
      <ParallaxImg
        src="https://raw.githubusercontent.com/Shockz132/Portfolio/b6fb1f341e734182ecbf30e9f0e6d27fcc66e767/public/HomePage/CLogo.svg"
        alt="C logo"
        start={150}
        end={-500}
        className="ml-auto mr-48 w-[18%]"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const WorkExperienceList = () => {
    return (
        <section
            id="work-experience"
            className="mx-auto max-w-5xl px-4 py-48 text-[--foreground]"
        >
            <motion.h1
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }}
                className="mb-20 text-4xl font-black uppercase text-[--foreground]"
            >
                Work Experience
            </motion.h1>

            <div className="relative border-l-2 border-neutral-800 ml-3 md:ml-6 space-y-12">
                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </div>
        </section>
    );
};

const ExperienceCard = ({ experience }) => {
    return (
        <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="relative pl-8 md:pl-12"
        >
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] md:-left-[9px] top-3 w-4 h-4 rounded-full bg-[--foreground] ring-4 ring-[var(--background)]" />

            <div className="flex flex-col gap-1">
                <span className="text-neutral-500 font-mono text-sm mb-1 uppercase tracking-wider">{experience.period}</span>
                <h2 className="text-3xl font-bold text-[--foreground]">
                    {experience.role}
                </h2>
                <div className="flex items-center gap-2 text-xl font-medium text-neutral-400">
                    <Building2 size={20} />
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