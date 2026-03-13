import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { getAssetPath } from "@/app/utils/paths";

export const Projects = () => {
  return (
    <section id="projects" className="w-full bg-theme-bg pt-32 pb-48 relative border-b-4 border-theme-blue overflow-hidden">
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />
      <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-10" />

      {/* Background Motifs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-30 bg-[radial-gradient(var(--theme-green)_15%,transparent_15%)] bg-[size:40px_40px]">
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-24"
        >
          <div className="font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-blue text-theme-blue bg-theme-yellow inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1b27b5] brut-hover">
            [ 04 ]
          </div>
          <h1 className="text-[12vw] md:text-8xl leading-none font-black uppercase tracking-tighter text-theme-blue mb-12 drop-shadow-[4px_4px_0px_var(--theme-green)]">
            Selected Work
          </h1>
        </motion.div>

        <div className="border-t-4 border-theme-blue">
          <Link
            heading="HEALTHIFY"
            subheading="A Health and Wellness Application"
            imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/Healthify/HealthifyFeatured.png"
            href="/projects/Healthify"
            hoverClass="hover:bg-theme-yellow"
          />
          <Link
            heading="PLANT PULSE"
            subheading="A Full Stack IoT Project"
            imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePreview.png"
            href="/projects/PlantPulse"
            hoverClass="hover:bg-theme-green"
          />
          <Link
            heading="CIRCUIT SOLVER"
            subheading="Web Dev Project w/ React & C"
            imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverPreview.png"
            href="/projects/LogicGateCircuitSolver"
            hoverClass="hover:bg-theme-orange"
          />
          <Link
            heading="WINGS OF SUSTAINABILITY"
            subheading="Backend IoT Project"
            imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPreview.png"
            href="/projects/WingsOfSustainability"
            hoverClass="hover:bg-theme-green"
          />
        </div>
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, hoverClass }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

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

  return (
    <motion.a
      href={getAssetPath(href)}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className={`group relative flex flex-col md:flex-row items-start md:items-center justify-between border-b-4 border-theme-blue py-8 md:py-12 transition-all duration-300 ${hoverClass} px-4 md:px-8 text-theme-blue hover:border-r-8 hover:z-20`}
    >
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="z-10"
      >
        <span
          className="relative block text-4xl md:text-6xl font-black tracking-tighter transition-colors duration-500 drop-shadow-[2px_2px_0px_var(--theme-cream)]"
        >
          {heading}
        </span>
        <span className="relative mt-4 inline-block text-sm font-mono font-bold tracking-wider uppercase opacity-90 border-4 border-theme-blue px-3 py-1 bg-theme-bg group-hover:bg-theme-yellow text-theme-blue shadow-[4px_4px_0px_0px_#1b27b5] transition-all duration-300">
          [ {subheading} ]
        </span>
      </motion.div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className={`absolute z-50 h-32 w-48 object-cover md:h-64 md:w-96 border-4 border-theme-blue shadow-[8px_8px_0px_0px_var(--theme-yellow)] bg-theme-bg`}
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4 mt-4 md:mt-0 font-black"
      >
        <FiArrowRight className="text-5xl" strokeWidth={3} />
      </motion.div>
    </motion.a>
  );
};