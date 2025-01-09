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
import { motion } from "framer-motion";
import { WorkProcess } from "@/app/components/Projects/WorkProcess";

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
                  role={"Researcher, Programmer"}
                  descriptionArray={[
                    "As a Researcher and Programmer, I was responsible for finding supporting resources for the problem statement, brainstorm for possible solutions and find the supporting evidence for said solution.",
                    "As a Programmer, I was responsible for setting up the connection between the M5Stack and the Qubitro Web Dashboard. This is a crucial step in ensuring the users will be able to access the sensor data from the M5Stack and ensure the reliability of the system."
                  ]}
                />
                {/* <WorkProcess
                    parts={["Research and Planning", "Development and Prototyping", "Frontend Web Development"]}
                    descriptions={[
                        "We started by conducting a survey around several communities which had a community gardens to interview our target audiences by getting the local elderly community gardeners to do our questionnaire. Following that we collected the data from the questionnaire and identified the key areas to focus on when designing a solution. From there we brainstormed and evaluated our ideas based on certain criterias before finalising our solution. Lastly, we designed the system block diagram for our selected idea in preperation for the development and prototyping phase.",
                        "We started by using the system block diagram for our selected idea in preperation for the development to first build out the Python code for each beaglebone. Alongside that, I was building out the web server and the database so that we can test the beaglebones. Following that we brainstormed ideas for the prototype designs by using detailed sketches and following that we finalised the prototype design and started making the 3D models. Finally once we finalised the 3D models we made replicas of the 3D models using recycled materials we could find at NYP's Makerspace.",
                        "Before developing the website, we started by first deciding on the tech stack that we will use to build the website. We decided to use NextJS with React Typescript, due to the wide adoption of React among the web development community as well as NextJS being widely used by big companies like Netflix, Notion, Twitch and many more, making NextJS a useful React framework to know for building modern websites and finally we chose Typescript as the syntax is very similar to Javascript making it easy to learn and its stricter type definitions make it safer by reducing the number of bugs and issues that make it into the final production code, reducing problems caused for both the application and the user. The colour scheme is essential to leaving an impression on the user, hence we decided to spend some time to carefully choose the colour scheme. We then continued to design the layout of all the pages of the website and the user experience. Following that, we spent a considerable amount of time to ensure the user experience was smooth and consistent and that the website was easy to use and understand, including a demo of the website.",
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
                /> */}
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
