'use client'

import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { ProjectHeader } from "@/app/components/Projects/ProjectHeader";
import { ProjectProblem } from "@/app/components/Projects/ProjectProblem";
import { ProjectTechStack } from "@/app/components/Projects/ProjectTechStack";
import { ProjectOutcomes } from "@/app/components/Projects/ProjectOutcomes";
import { motion } from "framer-motion";
import { FiLayout, FiCpu, FiCode, FiGrid } from "react-icons/fi";
import { getAssetPath } from "@/app/utils/paths";

export default function CircuitSolverPage() {
  const tocLinks = [
    { name: "PROBLEM", href: "#problem", id: "problem" },
    { name: "TECH STACK", href: "#tech-stack", id: "tech-stack" },
    { name: "OUTCOMES", href: "#outcomes", id: "outcomes" },
    { name: "SHOWCASE", href: "#showcase", id: "showcase" },
  ];

  return (
    <div className="min-h-screen bg-theme-bg text-theme-blue font-sans">
      <NavBar links={tocLinks} />

      {/* Structural Lines */}
      <div className="hidden md:block fixed left-[68px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />
      <div className="hidden md:block fixed right-[76px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />

      <main className="w-full relative pt-24 pb-32 overflow-x-clip">
        {/* Pattern Background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(var(--theme-orange)_15%,transparent_15%)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

          <ProjectHeader
            title="Circuit"
            titleAccent="Solver"
            date="10/2024 - 10/2024 (2 days)"
            subtitle="An automated logic gate circuit simulator and truth table generator."
            tags={["React", "ReactFlow", "Vite", "C", "Web Development"]}
            repoLink="https://github.com/Shockz132/Logic_Gate_Simulator"
            repoType="github"
            imgSrc="/LogicGateCircuitSolver/LogicGateCircuitSolverPreview.png"
          />

          <ProjectProblem
            problemText="How can I automate the process of deriving the truth table from a Logic Gate Circuit?"
            overviewText="The Logic Gate Circuit Solver allows users to build circuits using logic gates, inputs, and outputs through an intuitive drag-and-drop interface. It generates a text-based circuit description which is then processed by a high-performance C backend to derive the corresponding truth table."
            roleText="As the Project Owner, I handled the entire development lifecycle. I integrated ReactFlow for the node-based UI and implemented a recursive solver in C to handle complex boolean logic and file parsing."
          />

          <ProjectTechStack
            categories={[
              {
                title: "Frontend",
                color: "bg-theme-yellow",
                iconShape: "circle",
                chips: ["React JS", "Vite", "ReactFlow", "Tailwind CSS"]
              },
              {
                title: "Logic Engine",
                color: "bg-theme-green",
                iconShape: "square",
                chipColor: "bg-theme-cream",
                chips: ["C Language", "Recursion", "File I/O", "Boolean Logic"]
              },
              {
                title: "Tooling",
                color: "bg-theme-orange",
                iconShape: "diamond",
                lightText: true,
                chipColor: "bg-theme-blue text-theme-cream",
                chips: ["Vite", "ESLint", "Git", "Markdown"]
              }
            ]}
          />

          <ProjectOutcomes
            takeaways={[
              {
                title: "Hybrid Architecture",
                content: "Successfully combined a modern React frontend with a high-performance C backend for complex logic processing."
              },
              {
                title: "Node-Based UI",
                content: "Mastered ReactFlow to create an intuitive, professional-grade circuit editor with real-time feedback."
              },
              {
                title: "Algorithmic Rigor",
                content: "Implemented recursive boolean solvers and robust file parsing logic in C, ensuring 100% accuracy in output."
              }
            ]}
            metrics={[
              { value: "0ms", label: "Solve Time", description: "Near-instant truth table generation.", color: "bg-theme-green" },
              { value: "Complex", label: "Logic", description: "Supports nested gates and wide inputs.", color: "bg-theme-yellow" },
              { value: "100%", label: "Accuracy", description: "Verified against standard truth tables.", color: "bg-theme-orange" }
            ]}
            futureScope="Future plans include adding real-time gate simulation with visual signal flow, supporting custom sub-circuits (ICs), etc."
          />

          {/* Project Showcase Section */}
          <section id="showcase" className="mb-32 scroll-mt-32">
            <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-theme-blue">
                Visual Showcase
              </h2>
              <div className="h-1.5 md:h-2 flex-1 bg-theme-blue"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { src: "/LogicGateCircuitSolver/LogicGateCircuitSolverUI1.png", desc: "Interactive Node Editor" },
                { src: "/LogicGateCircuitSolver/LogicGateCircuitSolverUI2.png", desc: "Connecting Logic Gates" },
                { src: "/LogicGateCircuitSolver/LogicGateCircuitSolverUI3.png", desc: "Output Generation" },
                { src: "/LogicGateCircuitSolver/LogicGateCircuitSolverResultTable.png", desc: "Generated Truth Table" }
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-theme-cream border-[4px] md:border-[6px] border-theme-blue p-3 md:p-4 shadow-[10px_10px_0px_0px_var(--theme-yellow)] md:shadow-[16px_16px_0px_0px_var(--theme-yellow)] hover:shadow-[24px_24px_0px_0px_var(--theme-yellow)] transition-all group"
                >
                  <div className="aspect-video bg-white border-[3px] md:border-4 border-theme-blue mb-3 md:mb-4 overflow-hidden shadow-inner">
                    <img src={getAssetPath(img.src)} alt={img.desc} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="font-mono font-black text-xs md:text-sm uppercase text-theme-blue border-l-4 border-theme-orange pl-3">
                    {img.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer text="Circuit Solver Project Showcase | Built with 🦒" />
    </div>
  );
}
