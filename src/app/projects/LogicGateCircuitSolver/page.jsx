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
                    "Project Overview",
                    "Features"
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
                    "As the Project Owner this is a Personal Project that I embarked on for fun to apply my skills I have learnt from other projects I have done like Plant Pulse to real world problems that I face. Naturally, working alone meant that I do all the research, planning, designing, programming, etc. by myself. This also meant that if anything goes wrong, I only have myself to rely on which made this project a really fun challenge for myself to see how far I can get doing a whole project by myself.",
                    "This project was made in"
                  ]}
                />
                <WorkProcess
                    parts={["Research and Planning", "Frontend Web Development", "Backend Development"]}
                    descriptions={[
                      "I started by researching on libraries that I could use to help me create a drag and drop UI which I settled on ReactFlow which is a library that is used for node based UI in react, which is perfect for my use case since each logic gate will use nodes to connect to one another. Vite and React JS were a no brainer being widely used in the industry while supporting the ReactFlow library, however choosing Vite over NextJS was because I did not see a use for the extensive set of features that NextJS provides and Vite being something I am familiar with and being more lightweight and suitable for smaller scale projects. The reason I chose to use C is very simple, I just wanted to learn the language and felt that this was a suitable project to implement it as a backend to generate the truth table. The planning of the design was fairly simple since it would follow the conventional design of logic gate circuits where the flow is from left to right where the inputs are on the left and the ouput is on the right. ",
                      "I faced a little difficulty starting out the front end development process as I was working with a library I am unfamiliar with but to overcome this I started by reading the documentation of the ReactFlow library and was playing around with some of the components to see how they work and trying to customise the components to fit my use case. After familiarising myself with the library, I started to work on building the UI, building the input variable components, the 6 logic gates and the output variable components. Following that, I created the functionality to connect the components to each other and handle the generation of the text file which is needed for the backend to generate the truth table.",
                      "I faced some difficulty starting out the back end development process as I was unfamiliar with the C language but I overcame this by watching a full tutorial on C programming and by creating a program to first be able to generate a truth table given a equation which can be derived from the circuit. Once I ensured that I was familiar with the C language and the fundamental functionality of the program was working perfectly I went on the create the actual program to read the text file and generate the truth table. I spent majority of the time debugging some logic errors in the code that was caused due to my infamiliarity with the language."
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
                    "In the end, the project was a success, it serves its purpose of being an easy to use drag and drop UI logic gate circuit solver that automates the process of solving logic gate circuits. It also served its purpose of teaching me the language of C and putting my front end web development skills to the test by building node based components using the ReactFlow library.",
                    "If I were to continue to work on this project in the future, I would look into changing from C to Javascript for handling the generation of the truth table since it would be more seamless by doing everything on the website itself and I wouldn't need to work within the constraints of using C. I would also look into making the number of input variables up to the user as well as adding in other electrical circuit components like BJT, Diodes, MOSFET, etc. to make it more useful for more conventional circuit analysis."
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
