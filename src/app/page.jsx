'use client'

import { NavBar } from "@/app/components/NavBar";
import { SkillsPreview } from "@/app/components/Home/SkillsPreview";
import { AboutMe } from "@/app/components/Home/AboutMe";
import { Projects } from "@/app/components/Home/Projects";
import { WhatIUse } from "@/app/components/Home/WhatIUse";
import { ContactMe } from "@/app/components/Home/ContactMe";
import { WorkExperience } from "@/app/components/Home/WorkExperience";
import { BioBridge } from "@/app/components/Home/BioBridge";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-theme-bg text-theme-blue">
      <main className="w-full">
        <NavBar />
        <AboutMe />
        <BioBridge />
        <WorkExperience />
        <SkillsPreview />
        <WhatIUse />
        <Projects />
        {/* <ContactMe /> */}
        <Footer />
      </main>
    </div>
  );
}
