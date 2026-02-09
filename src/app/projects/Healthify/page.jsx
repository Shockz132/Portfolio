'use client'

import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { ProjectProblem } from "@/app/components/Projects/Problem";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Healthify"}
                  date={"Ongoing"}
                  readMins={1}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/Healthify/HealthifyPreview.png"
                  tagsArray={[
                    "Web Development",
                  ]}
                />
               
                <ProjectProblem
                  problemStatement="Draft problem statement for Healthify."
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "Draft overview for Healthify project. This is a placeholder for the blog post."
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Problem",
                    "Project Overview",
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
