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
                  title={"Wings Of Sustainability"}
                  date={"01/2024 - 02/2024"}
                  readTime={"3 min read"}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/WingsOfSustainability/WingsOfSustainabilityPreview.png"
                  tags={["Backend", "IoT", "Python", "M5Stack"]}
                />
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            
        </footer>
    </div>
  );
}
