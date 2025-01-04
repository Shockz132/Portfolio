'use client'

import Image from "next/image";
import { SmoothScrollHero } from "./components/SmoothScrollHero";
import { AboutMe } from "./components/AboutMe";
import { HoverImageLinks } from "./components/HoverImageLinks";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          Send help i need to finsih this by monday and i just started.
          <AboutMe />
          <SmoothScrollHero />
          <HoverImageLinks />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
