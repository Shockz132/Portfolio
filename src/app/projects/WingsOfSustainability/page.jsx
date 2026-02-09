'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Features } from "@/app/components/Projects/Features";
import { Header } from "@/app/components/Projects/Header";
import { MyRole } from "@/app/components/Projects/MyRole";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { HacksterLink } from "@/app/components/Projects/HacksterLink";
import { WorkProcess } from "@/app/components/Projects/WorkProcess";
import { ProjectProblem } from "@/app/components/Projects/Problem";
import { OutcomeAndResults } from "@/app/components/Projects/OutcomeAndResults";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Wings Of Sustainability"}
                  date={"01/2024 - 02/2024"}
                  readMins={3}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPreview.png"
                  tagsArray={[
                    "Backend",
                    "IoT",
                    "Python",
                    "M5Stack",
                    "MQTT"
                  ]}
                />
                <HacksterLink 
                  hacksterLink={"https://www.hackster.io/513079/wings-of-sustainability-bsf-rearing-f94004"}
                />
                <ProjectProblem
                  problemStatement="How can we create a solution that improves the urban farming sector? "
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "Wings of Sustainability helps Singapore achieve its \"30 by 30\" food security goal by automating insect farming as an alternative protein source and fertilizer producer. The system creates a self-sustaining ecosystem between insects and plants, reducing manual labour through IoT automation."
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Problem",
                    "Project Overview",
                    "Features",
                    "My Role",
                    "Work Process",
                    "Project Showcase",
                  ]}
                />
                <Features 
                  projectFeaturesArray={[
                    "Automated Insect Farming",
                    "Efficient Storage and Transportation",
                    "High-quality Protein and Fertilizer",
                    "Self-sustaining Ecosystem"
                  ]}
                  codeFeaturesArray={[
                    "Python",
                    "MQTT",
                    "Qubitro",
                    "M5Stack",
                  ]}
                />
                <MyRole 
                  role={"Researcher, Programmer"}
                  descriptionArray={[
                    "As Researcher, I gathered supporting evidence for the problem statement and helped brainstorm and validate potential solutions.",
                    "As Programmer, I set up the connection between the M5Stack and the Qubitro Web Dashboard, ensuring reliable access to real-time sensor data."
                  ]}
                />
                <WorkProcess
                    parts={["Research and Planning", "Development and Prototyping"]}
                    descriptions={[
                        "The broad problem statement made it challenging to find a niche, but once we did, we quickly brainstormed and ranked ideas. With only 3 M5Stack devices, we carefully defined each device's purpose to ensure all key components were covered before development.",
                        "The main challenges were getting MQTT to work reliably between M5Stacks and dealing with code size limitations causing crashes. Once past those hurdles, UI Flow made the block programming relatively smooth."
                    ]}
                    imgArrays={[
                      [],
                      [],
                      [],
                    ]}
                    imgDescriptionArrays={[
                      [],
                      [],
                      [],
                    ]}
                />
                <OutcomeAndResults 
                  contentArray={[
                    "The project was a success, we built a system that promotes sustainability and contributes to Singapore's 30 by 30 goal. A senior lecturer even suggested we could take this further with an industry partner, noting it had potential as a real product.",
                    "Given more time, we'd use 3D printing for a sturdier prototype and redesign the insect counting mechanism with gears for better reliability."
                  ]}
                />
                <ProjectShowcase 
                  imgSrcArray={[
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPrototype1.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPrototype2.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFBoxBlockDiagram.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFMotorBlockDiagram.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFStaticBlockDiagram.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFBoxFlowChart.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFMotorFlowChart.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/BSFStaticFlowChart.png",
                  ]}
                  imgDescriptionArray={[
                    "Wings Of Sustainability Prototype 1",
                    "Wings Of Sustainability Prototype 2",
                    "BSF Box Block Diagram",
                    "BSF Motor Block Diagram",
                    "BSF Static Block Diagram",
                    "BSF Box Flow Chart",
                    "BSF Motor Flow Chart",
                    "BSF Static Flow Chart",
                  ]}
                />
                <motion.div
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="flex-col flex-wrap mx-auto max-w-5xl px-4 pb-24 text-[--foreground]"
                >
                  <iframe 
                    src="https://www.youtube.com/embed/gEMfaWGC28o?si=dA2s_VuOo_8cprWE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-video md:h-[16rem] h-full mx-auto mb-12"
                  >
                  </iframe>
                  <iframe 
                    src="https://www.youtube.com/embed/K0nBYma3lNs?si=V8hd56sEmEkQHBme"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-video md:h-[16rem] h-full mx-auto"
                  >
                  </iframe>
                </motion.div>
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
              <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
          </footer>
        </main>
    </div>
  );
}
