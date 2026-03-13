'use client'

import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { ProjectHeader } from "@/app/components/Projects/ProjectHeader";
import { ProjectProblem } from "@/app/components/Projects/ProjectProblem";
import { ProjectTechStack } from "@/app/components/Projects/ProjectTechStack";
import { ProjectOutcomes } from "@/app/components/Projects/ProjectOutcomes";
import { motion } from "framer-motion";
import { FiLayout, FiCpu, FiFeather, FiActivity, FiVideo, FiImage } from "react-icons/fi";

export default function WingsOfSustainabilityPage() {
  const tocLinks = [
    { name: "PROBLEM", href: "#problem", id: "problem" },
    { name: "TECH STACK", href: "#tech-stack", id: "tech-stack" },
    { name: "OUTCOMES", href: "#outcomes", id: "outcomes" },
    { name: "SHOWCASE", href: "#showcase", id: "showcase" },
    { name: "VIDEOS", href: "#videos", id: "videos" },
  ];

  return (
    <div className="min-h-screen bg-theme-bg text-theme-blue font-sans">
      <NavBar links={tocLinks} />

      {/* Structural Lines */}
      <div className="hidden md:block fixed left-[68px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />
      <div className="hidden md:block fixed right-[76px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />

      <main className="w-full relative pt-24 pb-32 overflow-x-clip">
        {/* Pattern Background */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(var(--theme-green)_15%,transparent_15%)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-12 md:px-24 relative z-10">

          <ProjectHeader
            title="Wings Of"
            titleAccent="Sustainability"
            date="01/2024 - 02/2024"
            subtitle="An automated IoT insect farming system for sustainable protein and fertilizer."
            tags={["Python", "IoT", "M5Stack", "MQTT", "Qubitro", "Sustainability"]}
            repoLink="https://www.hackster.io/513079/wings-of-sustainability-bsf-rearing-f94004"
            repoType="hackster"
            imgSrc="/WingsOfSustainability/WingsOfSustainabilityPreview.png"
          />

          <ProjectProblem
            problemText="How can we create a solution that improves the urban farming sector through automation?"
            overviewText="Wings of Sustainability contributes to food security by automating Black Soldier Fly (BSF) insect farming. This creates a self-sustaining ecosystem where insects process food waste into high-quality protein and organic fertilizer, managed entirely through an IoT network of M5Stack devices."
            roleText="As Researcher and Programmer, I validated the ecological viability of the system and developed the MQTT-based communication layer. I ensured real-time synchronization between hardware sensors and the Qubitro cloud dashboard."
          />

          <ProjectTechStack
            categories={[
              {
                title: "Hardware",
                color: "bg-theme-orange",
                iconShape: "circle",
                lightText: true,
                chipColor: "bg-white",
                chips: ["M5Stack FIRE", "ToF Laser Ranging", "Earth Soil Sensor"]
              },
              {
                title: "Connectivity",
                color: "bg-theme-green",
                iconShape: "square",
                chipColor: "bg-theme-cream",
                chips: ["MQTT Protocol", "UIFlow", "Qubitro Cloud", "Wi-Fi"]
              },
              {
                title: "Logic",
                color: "bg-theme-yellow",
                iconShape: "diamond",
                chips: ["MicroPython", "Blockly", "Real-time Monitoring"]
              }
            ]}
          />

          <ProjectOutcomes
            takeaways={[
              {
                title: "Agricultural Loop",
                content: "Created a closed-loop system where organic waste is converted into high-value agricultural inputs automatically."
              },
              {
                title: "IoT Scalability",
                content: "Demonstrated a robust MQTT-based multi-device architecture that remains stable in high-frequency data environments."
              },
              {
                title: "Industry Relevance",
                content: "Received strong interest from senior lecturers and potential industry partners for commercial deployment."
              }
            ]}
            metrics={[
              { value: "30x30", label: "Goal Sync", description: "Directly supports SG food security.", color: "bg-theme-green" },
              { value: "Full", label: "Automation", description: "Minimal human intervention needed.", color: "bg-theme-yellow" },
              { value: "IoT", label: "Driven", description: "Centralized monitoring via Qubitro.", color: "bg-theme-orange" }
            ]}
            futureScope="Given more time, we'd use 3D printing for a sturdier prototype and redesign the insect counting mechanism with more reliable sensor gearing."
          />

          {/* Project Showcase - Diagrams & Prototypes */}
          <section id="showcase" className="mb-32 scroll-mt-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-theme-blue">
                System Design
              </h2>
              <div className="h-2 flex-1 bg-theme-blue"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/WingsOfSustainability/WingsOfSustainabilityPrototype1.png", desc: "Physical Prototype Alpha" },
                { src: "/WingsOfSustainability/WingsOfSustainabilityPrototype2.png", desc: "Internal Sensor Housing" },
                { src: "/WingsOfSustainability/BSFBoxBlockDiagram.png", desc: "Main Box Logic" },
                { src: "/WingsOfSustainability/BSFMotorBlockDiagram.png", desc: "Motor Control System" },
                { src: "/WingsOfSustainability/BSFStaticBlockDiagram.png", desc: "Static Environmental Log" },
                { src: "/WingsOfSustainability/BSFBoxFlowChart.png", desc: "Operational Flow" }
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border-4 border-theme-blue p-3 shadow-[12px_12px_0px_0px_var(--theme-green)] hover:-translate-y-2 transition-all group"
                >
                  <div className="aspect-square bg-theme-cream border-2 border-theme-blue mb-4 overflow-hidden">
                    <img src={img.src} alt={img.desc} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FiImage className="text-theme-orange" />
                    <p className="font-mono font-black text-[10px] uppercase text-theme-blue leading-tight">{img.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Videos Section */}
          <section id="videos" className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-theme-blue">
                Video Demos
              </h2>
              <div className="h-2 flex-1 bg-theme-blue"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                "gEMfaWGC28o?si=dA2s_VuOo_8cprWE",
                "K0nBYma3lNs?si=V8hd56sEmEkQHBme"
              ].map((vidId, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: idx === 0 ? -32 : 32, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-theme-cream border-[6px] border-theme-blue p-4 shadow-[20px_20px_0px_0px_var(--theme-yellow)]"
                >
                  <div className="aspect-video bg-neutral-900 border-4 border-theme-blue overflow-hidden shadow-inner">
                    <iframe
                      src={`https://www.youtube.com/embed/${vidId}`}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4 flex items-center gap-2 font-mono font-bold text-xs uppercase text-theme-blue">
                    <FiVideo className="text-theme-orange" size={18} /> Presentation Part {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer text="Wings of Sustainability Showcase | Built with 🦒" />
    </div>
  );
}
