'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Features } from "@/app/components/Projects/Features";
import { Header } from "@/app/components/Projects/Header";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { MyRole } from "@/app/components/Projects/MyRole";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";
import { GithubLink } from "@/app/components/Projects/GithubLink";
import { WorkProcess } from "@/app/components/Projects/WorkProcess";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Logic Gate Circuit Solver"}
                  date={"10/2024 - 10/2024"}
                  readMins={3}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverPreview.png"
                  tagsArray={["Web Development", "React", "ReactFlow", "Vite"]}
                />
                <GithubLink 
                  githubLink={"https://github.com/Shockz132/Logic_Gate_Simulator"}
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "Web UI Logic Gate Solver created using HTML, Vanilla CSS, Javascript (React, ReactFlow) and C. Create a circuit using Logic Gates, Inputs and Outputs to generate a text file. Using the generated text file, the C program will generate the truth table for the circuit created."
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Project Overview",
                    "Features"
                  ]}
                />
                <Features 
                  projectFeaturesArray={[
                    "Easy to use",
                    "Drag and Drop UI",
                    "Truth Table Generation",
                  ]}
                  codeFeaturesArray={[
                    "React JS",
                    "Vite",
                    "CSS",
                    "ReactFlow",
                    "C",
                  ]}
                />
                <MyRole 
                  role={"Project Owner"}
                  descriptionArray={[
                    "This is a Personal Project that I embarked on for fun to apply my skills I have learnt from other projects I have done like Plant Pulse to real world problems that I face."
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
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverUI1.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverUI2.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverUI3.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverResult.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/LogicGateCircuitSolver/LogicGateCircuitSolverResultTable.png",
                  ]}
                  imgDescriptionArray={[
                    "Website UI 1",
                    "Website UI 2",
                    "Website UI 3",
                    "Example Result TXT",
                    "Example Result Truth Table",
                  ]}
                />
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
              <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
            </footer>
        </main>
    </div>
  );
}
