'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Features } from "@/app/components/Projects/Features";
import { Header } from "@/app/components/Projects/Header";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Wings Of Sustainability"}
                  date={"01/2024 - 02/2024"}
                  readMins={3}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPreview.png"
                  tagsArray={["Backend", "IoT", "Python", "M5Stack", "MQTT"]}
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "This project aims to help Singapore achieve its food security goal of producing 30% of its nutritional needs by 2030, also known as “30 by 30”, by providing an alternative source of protein consumption (insects) and fertilizer for plants (in the form of compost and frass). It also aims to make insect farming more efficient by automating most of the manual labour and creating a self-sustaining ecosystem between insects and plants."
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
                    "Automated Insect Farming",
                    "Efficient Storage and Transportation",
                    "High-quality Protein and Fertilizer",
                    "Self-sustaining Ecosystem"
                  ]}
                  codeFeaturesArray={[
                    "Python",
                    "MQTT",
                    "M5Stack"
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
