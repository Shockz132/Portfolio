'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";
import { Features } from "@/app/components/Projects/Features";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { MyRole } from "@/app/components/Projects/MyRole";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";
import { GithubLink } from "@/app/components/Projects/GithubLink";
import { ProjectProblem } from "@/app/components/Projects/Problem";
import { WorkProcess } from "@/app/components/Projects/WorkProcess";
import { OutcomeAndResults } from "@/app/components/Projects/OutcomeAndResults";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function PlantPulsePage() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Plant Pulse"}
                  date={"07/2024 - 08/2024"}
                  readMins={3}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePreview.png"
                  tagsArray={[
                    "Fullstack",
                    "IoT", 
                    "Beaglebone",
                    "React",
                    "Tailwind CSS",
                    "Python",
                    "Flask",
                    "SQL",
                    "NextJS",
                    "SocketIO",
                    "ShadCN UI"
                  ]}
                />
                <GithubLink 
                  githubLink={"https://github.com/Shockz132/Plant_Pulse"}
                />
                <ProjectProblem
                  problemStatement="How can we improve conventional gardening to be more accessible to individuals and the elderly while making it sustainable and contribute to Singapore's 30 by 30 goal? "
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "PlantPulse is an IoT-enabled smart community garden system that makes plant care easier and more accessible, especially for the elderly. Using real-time sensor data, it monitors soil moisture, detects pests, and automates watering, so gardeners can stay informed without needing to be physically present.",
                    "Each plot uses a raised barrel design to reduce physical strain, and a food waste bin with force sensors tracks composting weight for fertilizer conversion. These features contribute to Singapore's 30 by 30 goal of sustainably producing 30% of our nutritional needs by 2030."
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Problem",
                    "Project Overview",
                    "Features",
                    "My Role",
                    "Work Process",
                    "Outcome and Results",
                  ]}
                />
                <Features 
                  projectFeaturesArray={[
                    "Real-time Information on Plants",
                    "Pest Detection and Watering",
                    "Automated Watering",
                    "Barrel Design",
                    "Food Waste Bin",
                    "Variety of IoT Sensors",
                  ]}
                  codeFeaturesArray={[
                    "React TS",
                    "NextJS",
                    "Tailwind CSS",
                    "ShadCN UI",
                    "Python",
                    "Flask",
                    "SocketIO",
                    "SQL",
                    "spaCy",
                    "Beaglebone",
                    "Spline 3D"
                  ]}
                />
                <MyRole 
                  role={"Team Leader"}
                  descriptionArray={[
                    "As Team Leader, I led the team across all phases, research, planning, development, programming, and prototyping. I assigned roles based on each member's strengths, decided on the tech stack, and guided the team on unfamiliar technologies like React, TypeScript, and ShadCN UI.",
                    "I broke down the problem into two parts: improving gardening accessibility for the elderly, and contributing to sustainability. From surveys with local community gardeners, we identified key pain points and designed Plant Pulse as our solution.",
                  ]}
                />
                <WorkProcess
                    parts={["Research and Planning", "Development and Prototyping", "Frontend Web Development"]}
                    descriptions={[
                        "We surveyed elderly community gardeners to identify key pain points, then brainstormed and evaluated ideas against set criteria before finalising our solution. We designed the system block diagram using official sensor documentation from the mikroe website to map out signals between components.",
                        "I distributed roles across the team based on strengths. Each member was responsible for their own Beaglebone's Python code, while I built the Flask web server and SQL database. We faced challenges with sensor inconsistency, data formatting, and database setup, resolved through documentation, standardising data formats, and teamwork. We then designed 3D models and built physical prototypes from recycled materials at NYP's Makerspace.",
                        "We chose NextJS with React TypeScript for the website, paired with Tailwind CSS and ShadCN UI. The main challenge was the team's unfamiliarity with the framework, but we overcame it through tutorials and practice. We carefully designed the colour scheme, page layouts, and user experience to ensure the site was intuitive and polished.",
                    ]}
                    imgArrays={[
                      [
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseQuestionnaire1.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseQuestionnaire2.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseQuestionnaire3.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseIdeaTable.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseBlockDiagram.png",
                      ],
                      [
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePlantPlot.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseIrrigationTank.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePestDetection.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseFoodWasteBin.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePestDetection.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseFloorPlanPrototype.jpg",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel1.png",
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel2.png",    
                      ],
                      [
                        "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePreview.png",
                      ],
                    ]}
                    imgDescriptionArrays={[
                      [
                        "Questionnaire results part 1",
                        "Questionnaire results part 2",
                        "Questionnaire results part 3",
                        "Idea Evaluation Table",
                        "System Block Diagram",
                      ],
                      [
                        "Plant Plot Prototype",
                        "Irrigation Tank Prototype",
                        "Pest Detection Prototype",
                        "Food Waste Bin Prototype",
                        "Task Board Prototype",
                        "Floor plan Prototype",
                        "Floor plan 3D model 1",
                        "Floor plan 3D model 2",
                      ],
                      [
                        "Website Hero section",
                      ],
                    ]}
                />
                <motion.div 
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]"
                >
                  <motion.p
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-lg font-semibold text-center"
                  >
                    Plant Pulse Website Demo
                  </motion.p>
                  <iframe 
                    src="https://drive.google.com/file/d/1iuhmn8AHq0--gj3DnhPOO-IdYtrBgE7S/preview" 
                    className="w-full max-w-4xl aspect-video mx-auto mb-12 rounded-xl shadow-2xl border border-neutral-800"
                  ></iframe>
                </motion.div>
                <OutcomeAndResults 
                  contentArray={[
                    "The project was a success. After presenting to a panel of senior lecturers, one proposed we take it further by connecting us with industry contacts. The module leader also selected Plant Pulse for NYP's Tech Nexus 2025, where we'll showcase to company directors.",
                    "Given more time, I'd focus on expanding the website's functionality toward something closer to production-ready, and leverage 3D printing for sturdier prototypes to free up time for other development areas."
                  ]}
                />
                <ProjectShowcase 
                  title="Project Showcase"
                  imgSrcArray={[
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseBlockDiagram.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel1.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel2.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseFloorPlanPrototype.jpg",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePoster.jpg",
                  ]}
                  imgDescriptionArray={[
                    "System Block Diagram",
                    "Project Vision Spline 3D Model 1",
                    "Project Vision Spline 3D Model 2",
                    "Plant Pulse Floor Plan Prototype",
                    "Plant Pulse Poster",
                  ]}
                />
                <div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-8 mx-auto max-w-6xl px-6 pt-12"
                  >
                     <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                        <Video size={24} />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                        Project Videos
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mx-auto max-w-6xl px-6 pb-24 text-[--foreground]"
                  >
                    {/* Vertical Videos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                          "1cxL8Vkn_NqY2WZHSD6scjnA5c02BdRui",
                          "1C74FnFY9fjYM_7NKv-DNgL8rBt5kNaZx",
                          "1ePlEvm_rPPU-Y9sy7wl-1L3xtdwdEvS9",
                          "17mdH1VXA83hawKc1z1jqsgvKBCErvBqE",
                          "1ahBwwEpj2Gn66m1lwqpuFs8zq3Wf2ZQ_",
                          "15RKOZdHUOV-hrWDrMusMQ9ECOWP_6nfV",
                          "17G2G4g4msjpG18MwvXwxTT1gL9oGPkUI",
                          "1hOKeTFwq5Pc4HA4aLvXmAAe0OSX6bf1k"
                        ].map((id) => (
                           <div key={id} className="relative rounded-xl overflow-hidden shadow-lg border border-neutral-800 bg-neutral-900 aspect-[9/16]">
                               <iframe 
                                  src={`https://drive.google.com/file/d/${id}/preview`} 
                                  className="w-full h-full"
                                  loading="lazy"
                                ></iframe>
                           </div>
                        ))}
                    </div>

                    {/* Horizontal Videos */}
                    <div className="space-y-12">
                         {[
                           "1TDKS5DwIyAYaT-wPDNmq9dPAl1ohsrOi",
                           "16gQTUcB6WTj5wgX9wQR94dzBh-eRPvST",
                           "1iuhmn8AHq0--gj3DnhPOO-IdYtrBgE7S"
                         ].map((id) => (
                             <div key={id} className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 aspect-video">
                                 <iframe 
                                    src={`https://drive.google.com/file/d/${id}/preview`} 
                                    className="w-full h-full"
                                    loading="lazy"
                                  ></iframe>
                             </div>
                         ))}
                    </div>

                  </motion.div>
                </div>
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
              <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
            </footer>
        </main>
    </div>
  );
}
