'use client'

import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { ProjectHeader } from "@/app/components/Projects/ProjectHeader";
import { ProjectProblem } from "@/app/components/Projects/ProjectProblem";
import { ProjectTechStack } from "@/app/components/Projects/ProjectTechStack";
import { ProjectOutcomes } from "@/app/components/Projects/ProjectOutcomes";
import { motion } from "framer-motion";
import { FiLayout, FiCpu, FiServer, FiActivity, FiVideo } from "react-icons/fi";

export default function PlantPulsePage() {
  const tocLinks = [
    { name: "PROBLEM", href: "#problem", id: "problem" },
    { name: "TECH STACK", href: "#tech-stack", id: "tech-stack" },
    { name: "OUTCOMES", href: "#outcomes", id: "outcomes" },
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
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(var(--theme-yellow)_15%,transparent_15%)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

          <ProjectHeader
            title="Plant"
            titleAccent="Pulse"
            date="07/2024 - 08/2024"
            subtitle="An IoT-enabled smart community garden connected system for accessible and sustainable urban farming."
            tags={["React", "Next.js", "Python", "Flask", "SQLite", "BeagleBone"]}
            repoLink="https://github.com/Shockz132/Plant-Pulse"
            repoType="github"
            imgSrc="/PlantPulse/PlantPulsePreview.png"
          />

          <ProjectProblem
            problemText="How can we make taking care of plants in a community garden easier and more accessible, especially for senior citizens who may be physically hindered?"
            overviewText="PlantPulse provides real-time updates on plant conditions, including soil moisture and pest detection via environmental, infrared, and motion sensors. Its unique barrel design reduces physical strain, and a built-in food waste bin with force and reed sensors facilitates composting, directly supporting Singapore's 30 by 30 food security goal."
            roleText="As a primary developer, I managed the integration of IoT sensors with the BeagleBone Black Wireless microcontrollers, built the SQLite & Python Flask backend, and crafted the React front-end."
          />

          <ProjectTechStack
            categories={[
              {
                title: "Frontend & UI",
                color: "bg-theme-orange",
                iconShape: "circle",
                chips: ["React (NextJS)", "Tailwind CSS", "Shadcn UI", "Spline 3D", "HTML"]
              },
              {
                title: "Backend & Server",
                color: "bg-theme-yellow",
                iconShape: "square",
                chipColor: "bg-theme-cream",
                chips: ["SQLite", "Python", "Flask", "SQLAlchemy", "SocketIO", "spaCy"]
              },
              {
                title: "IoT & Hardware",
                color: "bg-theme-green",
                iconShape: "diamond",
                lightText: true,
                chipColor: "bg-white",
                chips: ["BeagleBone", "Motion/Tamper Click", "IR/UV Click", "Environment Click"]
              }
            ]}
          />

          <ProjectOutcomes
            takeaways={[
              {
                title: "Industry Showcase",
                content: "The project was a massive success, receiving positive feedback during showcases to industry professionals and was selected for NYP's Tech Nexus 2025."
              },
              {
                title: "Full-Stack IoT Ecosystem",
                content: "Successfully bridged multiple sensor nodes and BeagleBone microcontrollers via a centralized Python web server and database."
              },
              {
                title: "Accessible Farming",
                content: "Demonstrated the viability of automated urban farming using a raised barrel design to reduce physical strain, empowering senior citizens."
              }
            ]}
            metrics={[
              { value: "Tech Nexus", label: "Selected", description: "Chosen for Tech Nexus 2025 Showcase.", color: "bg-theme-orange" },
              { value: "30 by 30", label: "Goal Sync", description: "Directly supports SG food security.", color: "bg-theme-green" },
              { value: "IoT", label: "Automated", description: "Hands-free plant care and monitoring.", color: "bg-theme-yellow" }
            ]}
            futureScope="Future iterations will explore integrating AI-driven plant health diagnostics via camera sensors and an expanded mobile app for push notifications."
          />

          {/* Unique Videos Section */}
          <section id="videos" className="mb-32 scroll-mt-32">
            <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-theme-blue">
                Project Showcase
              </h2>
              <div className="h-1.5 md:h-2 flex-1 bg-theme-blue"></div>
            </div>

            <div className="space-y-24">
              {/* Main Demo Video */}
              <motion.div
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative bg-theme-cream border-[4px] md:border-[6px] border-theme-blue p-2 md:p-4 shadow-[12px_12px_0px_0px_var(--theme-yellow)] md:shadow-[24px_24px_0px_0px_var(--theme-yellow)]"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 font-mono font-bold text-xs md:text-sm uppercase">
                  <FiVideo className="text-theme-orange" /> Website Walkthrough
                </div>
                <div className="aspect-video bg-neutral-900 border-2 md:border-4 border-theme-blue overflow-hidden shadow-inner">
                  <iframe
                    src="https://drive.google.com/file/d/1iuhmn8AHq0--gj3DnhPOO-IdYtrBgE7S/preview"
                    className="w-full h-full"
                    allow="autoplay"
                  ></iframe>
                </div>
              </motion.div>

              {/* Hardware Clips Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { id: "1cxL8Vkn_NqY2WZHSD6scjnA5c02BdRui", label: "Pest Detection" },
                  { id: "1C74FnFY9fjYM_7NKv-DNgL8rBt5kNaZx", label: "Irrigation Test" },
                  { id: "1ePlEvm_rPPU-Y9sy7wl-1L3xtdwdEvS9", label: "Compost Tracking" },
                  { id: "17mdH1VXA83hawKc1z1jqsgvKBCErvBqE", label: "Sensor Setup" },
                  { id: "1ahBwwEpj2Gn66m1lwqpuFs8zq3Wf2ZQ_", label: "Hardware Hub" },
                  { id: "15RKOZdHUOV-hrWDrMusMQ9ECOWP_6nfV", label: "User Interaction" },
                  { id: "17G2G4g4msjpG18MwvXwxTT1gL9oGPkUI", label: "Prototype View" },
                  { id: "1hOKeTFwq5Pc6HA4aLvXmAAe0OSX6bf1k", label: "Barrel Design" }
                ].map((clip, idx) => (
                  <motion.div
                    key={clip.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border-4 border-theme-blue p-2 md:p-3 shadow-[6px_6px_0px_0px_#1b27b5] md:shadow-[8px_8px_0px_0px_#1b27b5] group hover:-translate-y-2 transition-transform"
                  >
                    <div className="aspect-[9/16] bg-neutral-900 border-2 border-theme-blue mb-2 md:mb-3 overflow-hidden">
                      <iframe src={`https://drive.google.com/file/d/${clip.id}/preview`} className="w-full h-full" loading="lazy"></iframe>
                    </div>
                    <p className="font-mono font-black text-[10px] md:text-xs uppercase text-center text-theme-blue">{clip.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer text="Plant Pulse Showcase | Built with 🦒" />
    </div>
  );
}
