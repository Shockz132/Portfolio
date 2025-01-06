'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/NavBar";
import { SkillsPreview } from "@/app/components/SkillsPreview";
import { AboutMe } from "@/app/components/AboutMe";
import { Projects } from "@/app/components/Projects";
import { WhatIUse } from "@/app/components/WhatIUse";
import { WorkExperience } from "@/app/components/WorkExperience";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <NavBar />
          <AboutMe />
          <SkillsPreview />
          <WhatIUse/>
          <WorkExperience />
          <Projects />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
