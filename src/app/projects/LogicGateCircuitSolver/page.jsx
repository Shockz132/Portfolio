'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";

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
                  overviewContentArray={["Web UI Logic Gate Solver created using HTML, Vanilla CSS, Javascript (React, ReactFlow) and C. Create a circuit using Logic Gates, Inputs and Outputs to generate a text file. Using the generated text file, the C program will generate the truth table for the circuit created."]}
                  contentsArray={["Project Overview"]}
                />
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            
        </footer>
    </div>
  );
}
