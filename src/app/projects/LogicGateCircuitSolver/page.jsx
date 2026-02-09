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
import { OutcomeAndResults } from "@/app/components/Projects/OutcomeAndResults";
import { ProjectProblem } from "@/app/components/Projects/Problem";

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
                <ProjectProblem
                  problemStatement="How can I automate the process of deriving the truth table from a Logic Gate Circuit? "
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "The Logic Gate Circuit Solver was created using HTML, Vanilla CSS, Javascript (React, ReactFlow) and C. Built for you to create a circuit using Logic Gates, Inputs and Outputs to generate a text file. Using the generated text file, the C program will generate the truth table for the circuit created. Making it easy for users to derive the truth table from a Logic Gate Circuit using an easy to use drag and drop UI"
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
                    "Easy to use",
                    "Drag and Drop UI",
                    "Fast Run time",
                  ]}
                  codeFeaturesArray={[
                    "React JS",
                    "Javascript",
                    "Vite",
                    "CSS",
                    "ReactFlow",
                    "C",
                  ]}
                />
                <MyRole 
                  role={"Project Owner"}
                  descriptionArray={[
                    "This is a personal project I built solo to apply my front-end skills to a real problem I was facing. Working alone meant handling all research, planning, design, and programming myself, a fun challenge to see how far I could take a project independently.",
                  ]}
                />
                <WorkProcess
                    parts={["Research and Planning", "Frontend Web Development", "Backend Development"]}
                    descriptions={[
                      "I chose ReactFlow for its node-based UI, perfect for connecting logic gates. Vite was a better fit than NextJS for a lightweight project, and I picked C for the backend purely to learn the language.",
                      "Getting started with ReactFlow took some time reading docs and experimenting with components. Once familiar, I built input/output variable components, six logic gate types, the connection logic, and the text file generation for the backend.",
                      "Learning C was the main hurdle. I started by building a simpler truth-table-from-equation program, then expanded it to read the generated circuit file. Most debugging time was spent on logic errors from unfamiliarity with the language."
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
                    "The project serves its purpose as an easy-to-use drag-and-drop logic gate circuit solver. It also taught me C and pushed my front-end skills with ReactFlow's node-based components.",
                    "Future improvements would include switching the backend from C to JavaScript for a seamless in-browser experience, allowing user-defined input variable counts, and adding more circuit components like BJTs, diodes, and MOSFETs."
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
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
              <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
            </footer>
        </main>
    </div>
  );
}
