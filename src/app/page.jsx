'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar";
import { SkillsPreview } from "@/app/components/Home/SkillsPreview";
import { AboutMe } from "@/app/components/Home/AboutMe";
import { Projects } from "@/app/components/Home/Projects";
import { WhatIUse } from "@/app/components/Home/WhatIUse";
import { ContactMe } from "@/app/components/Home/ContactMe";
import { WorkExperience } from "@/app/components/Home/WorkExperience";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="w-full max-w-7xl">
          <NavBar />
          <AboutMe />
          <WorkExperience />
          <SkillsPreview />
          <WhatIUse />
          <Projects />
          {/* <ContactMe /> */}
          <footer className="mt-48 flex gap-6 flex-wrap items-center justify-center w-full">
            <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
          </footer>
        </main>
      </div>
    </ReactLenis>
  );
}
