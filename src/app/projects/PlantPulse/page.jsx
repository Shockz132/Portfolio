'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";
import { Features } from "@/app/components/Projects/Features";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { MyRole } from "@/app/components/Projects/MyRole";
import { ProjectShowcase } from "@/app/components/Projects/ProjectShowcase";
import { GithubLink } from "@/app/components/Projects/GithubLink";
import { motion } from "framer-motion";

export default function PlantPulsePage() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="max-w-5xl">
                <NavBar />
                <Header
                  title={"Plant Pulse"}
                  date={"07/2024 - 08/2024"}
                  readMins={3}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePreview.png"
                  tagsArray={[
                    "Fullstack",
                    "IoT", 
                    "Beaglebone",
                    "React",
                    "Tailwind CSS",
                    "Python",
                    "Flask",
                    "SQL",
                    "NextJS",
                    "SocketIO",
                    "ShadCN UI"
                  ]}
                />
                <GithubLink 
                  githubLink={"https://github.com/Shockz132/Plant_Pulse"}
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "As Engineers, our role is to make use of technology to develop things which can improve quality of life. For this project, our team aims to create a smart community garden for the people. As taking care of garden plants require substantial amounts of care and knowledge of the matter, this can be a complicating task for the people, especially older people such as senior citizens which are more likely to be physically hindered or unable to remember to care for their plant’s needs, or what exactly their needs are. Hence, we are striving to create a system which makes taking care of one’s plants in a community garden easier and more accessible to all people.",
                    "PlantPulse is an “IoT enabled” smart community garden connected system which enables users to effortlessly take care of their plants in the community garden. PlantPulse can provide real time information on one’s plants to allow users to be updated with precise information on their plants condition. Examples include the plant’s current soil moisture levels to know if water is needed and pest detection near or on the plants to alert users to use pesticide by including IoT sensors such as environmental, infrared and motion sensors. To get started, users create an account to get access to all these features and more that are included on the website.",
                    "In this project, we have implemented new features that are unique to our smart community garden. We have multiple sensors for different purposes like pest detection and watering of plants, which allows pesticides to be used when required and automatic watering of plants which makes caring for plants easier for older people as they do not have to travel to the community garden if they do not have much to do aside for watering plants. The Barrel design of each plot for each gardener also reduces the physical strain on our gardeners as they can garden in a comfortable standing positon without needing to squat or bend down.  We also have a food waste bin, so when crops are spoiled or damaged can be thrown into the bin which then can be used for composting, there is a force and reed sensor used which aids in keeping track of the weight and we will also convert the waste into fertilizer. This also helps with the government’s 30 by 30 project as well which is to sustainably produce 30% of our nutritional needs by 2030 as it would contribute to creating a sustainable source of produce."
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
                    "Real-time Information on Plants",
                    "Pest Detection and Watering",
                    "Automated Watering",
                    "Barrel Design",
                    "Food Waste Bin",
                    "Variety of IoT Sensors",
                  ]}
                  codeFeaturesArray={[
                    "React TS",
                    "NextJS",
                    "Tailwind CSS",
                    "ShadCN UI",
                    "Python",
                    "Flask",
                    "SocketIO",
                    "SQL",
                    "spaCy",
                    "Beaglebone",
                    "Spline 3D"
                  ]}
                />
                <MyRole 
                  role={"Team Leader"}
                  descriptionArray={[
                    "This project was part of a module I took name known as 'Connected Systems Design Project'. This module was designed to be linked to multiple modules that involves both hardware and both frontend and backend programming. The module aimed to teach students how to:",
                    "1. describe the functional blocks of a connected system by identifying key concepts and technologies of network architecture, modern communications, and electronic systems. 2. develop a connected system by using open-source hardware and software platform. 3. ideate and create solution for real-life problems by conducting technical research and applying modern tools that support independent learning.",
                    "As Team Leader I was in charge of leading the team in all aspects of the project, including researching, planning, development, programming, prototyping. On top of all that, I am responsible for ensuring my team was well informed on the task and made sure everyone knew what they were doing. I was also in charge of deciding the tech stack, frameworks and libraries that we will use. I took it upon myself to guide my team members on portions of the project they might not be familiar with like Javascript, Typescript, React and ShadCN UI which they have never used before.",
                    "I as a leader assigned my team members roles based on their strengths, always trying to bring out their best wherever possible by assigning them tasks that they were best suited for, be it design or programming. In the end we managed to produce a project that I as a leader can say is something that I am proud of, and my team members should be too.",
                  ]}
                />
                <ProjectShowcase 
                  imgSrcArray={[
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseBlockDiagram.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel1.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseModel2.png",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulseFloorPlanPrototype.jpg",
                    "https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/PlantPulse/PlantPulsePoster.jpg",
                  ]}
                  imgDescriptionArray={[
                    "System Block Diagram",
                    "Project Vision Spline 3D Model 1",
                    "Project Vision Spline 3D Model 2",
                    "Plant Pulse Floor Plan Prototype",
                    "Plant Pulse Poster",
                  ]}
                />
                <div>
                  <motion.p
                      initial={{ y: 48, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ ease: "easeInOut", duration: 0.75 }}
                      className="text-lg font-semibold text-center"
                  >
                      Project Videos
                  </motion.p>
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="flex flex-wrap mx-auto max-w-5xl px-4 pb-24 text-[--foreground]"
                  >
                    <iframe src="https://drive.google.com/file/d/1cxL8Vkn_NqY2WZHSD6scjnA5c02BdRui/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1C74FnFY9fjYM_7NKv-DNgL8rBt5kNaZx/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1ePlEvm_rPPU-Y9sy7wl-1L3xtdwdEvS9/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/17mdH1VXA83hawKc1z1jqsgvKBCErvBqE/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1ahBwwEpj2Gn66m1lwqpuFs8zq3Wf2ZQ_/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/15RKOZdHUOV-hrWDrMusMQ9ECOWP_6nfV/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/17G2G4g4msjpG18MwvXwxTT1gL9oGPkUI/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1hOKeTFwq5Pc4HA4aLvXmAAe0OSX6bf1k/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1TDKS5DwIyAYaT-wPDNmq9dPAl1ohsrOi/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/16gQTUcB6WTj5wgX9wQR94dzBh-eRPvST/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                    <iframe src="https://drive.google.com/file/d/1iuhmn8AHq0--gj3DnhPOO-IdYtrBgE7S/preview" className="aspect-video md:h-[32rem] h-[14rem] mx-auto mb-12"></iframe>
                  </motion.div>
                </div>
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          © 2025 Jethro. All rights reserved.
        </footer>
    </div>
  );
}
