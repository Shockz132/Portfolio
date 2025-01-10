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
                    "This project aims to help Singapore achieve its food security goal of producing 30% of its nutritional needs by 2030, also known as “30 by 30”, by providing an alternative source of protein consumption (insects) and fertilizer for plants (in the form of compost and frass). It also aims to make insect farming more efficient by automating most of the manual labour and creating a self-sustaining ecosystem between insects and plants."
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
                    "As a Researcher and Programmer, I was responsible for finding supporting resources for the problem statement, brainstorm for possible solutions and find the supporting evidence for said solution.",
                    "As a Programmer, I was responsible for setting up the connection between the M5Stack and the Qubitro Web Dashboard. This is a crucial step in ensuring the users will be able to access the sensor data from the M5Stack and ensure the reliability of the system."
                  ]}
                />
                <WorkProcess
                    parts={["Research and Planning", "Development and Prototyping"]}
                    descriptions={[
                        "We started to research on the areas of urban farming, which proved to be a challenge since the problem statement was very general which made it hard to narrow down to a niche that we could focus on, however after finding a niche we managed to brainstorm for ideas relatively quickly by ranking all our ideas to see which was the best. We proceeded to plan how we would make our solution, however we had a limitation of 3 M5Stack devices so we had to plan our solution around those constraints and we tackled this by clearly defining the purpose of each of the M5Stacks to ensure that have the key components for the system and during development we would have a clear goal.",
                        "During the Development phase, the main challenge we faced was getting the MQTT to work reliably between M5Stacks, and the M5Stack crashing after the code size gets too big. However once we got over those hurdles, the development process was relatively smooth when programming the blocks due to the ease of use when using UI Flow. "
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
                    "In the end the project was a success. We as a team were very proud of the work that we had put into the project. Not only did we create a system that promotes sustainability, it would also contribute to Singapore's 30 by 30 goal of producing 30% of our food locally by 2030. A senior lecturer even contacted us saying we could consider taking this project one step further if we managed to find a company to partner with us, and he said that our project could even become a real product that could be released into the real world.",
                    "If we were given more time to work ont he project, we would definitely have spent more time on making a better prototype by using 3D printing to make it more sturdy and durable and designing a better prototype using gears and a slightly different design for the counting of the insects as well."
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
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="aspect-video md:h-[16rem] h-full mx-auto mb-12"
                  >
                  </iframe>
                  <iframe 
                    src="https://www.youtube.com/embed/K0nBYma3lNs?si=V8hd56sEmEkQHBme"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
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
