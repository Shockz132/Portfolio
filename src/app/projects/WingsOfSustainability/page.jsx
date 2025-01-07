'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Features } from "@/app/components/Projects/Features";
import { Header } from "@/app/components/Projects/Header";
import { MyRole } from "@/app/components/Projects/MyRole";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
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
                  tagsArray={["Backend", "IoT", "Python", "M5Stack", "MQTT"]}
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "This project aims to help Singapore achieve its food security goal of producing 30% of its nutritional needs by 2030, also known as “30 by 30”, by providing an alternative source of protein consumption (insects) and fertilizer for plants (in the form of compost and frass). It also aims to make insect farming more efficient by automating most of the manual labour and creating a self-sustaining ecosystem between insects and plants."
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Project Overview",
                    "Features",
                    "My Role",
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
                  role={"Project Owner"}
                  descriptionArray={[
                    "This is a Personal Project that I embarked on for fun to apply my skills I have learnt from other projects I have done like Plant Pulse to real world problems that I face."
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
                    className="flex flex-wrap"
                  >
                    <iframe src="https://youtu.be/gEMfaWGC28o?si=NkSmoJmDNlwQ7tL9" className="aspect-video h-[32rem] mx-auto"></iframe>
                    <iframe src="https://youtu.be/K0nBYma3lNs" className="aspect-video h-[32rem] mx-auto"></iframe>
                  </motion.div>
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          © 2025 Jethro. All rights reserved.
        </footer>
    </div>
  );
}
