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
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          © 2025 Jethro. All rights reserved.
        </footer>
    </div>
  );
}
