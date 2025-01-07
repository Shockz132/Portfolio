'use client'

// import Image from "next/image";
import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";
import { Features } from "@/app/components/Projects/Features";

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
                    "ShadCN UI"]}
                  overviewContentArray={[
                    "As Engineers, our role is to make use of technology to develop things which can improve quality of life. For this project, our team aims to create a smart community garden for the people. As taking care of garden plants require substantial amounts of care and knowledge of the matter, this can be a complicating task for the people, especially older people such as senior citizens which are more likely to be physically hindered or unable to remember to care for their plant’s needs, or what exactly their needs are. Hence, we are striving to create a system which makes taking care of one’s plants in a community garden easier and more accessible to all people.",
                    "PlantPulse is an “IoT enabled” smart community garden connected system which enables users to effortlessly take care of their plants in the community garden. PlantPulse can provide real time information on one’s plants to allow users to be updated with precise information on their plants condition. Examples include the plant’s current soil moisture levels to know if water is needed and pest detection near or on the plants to alert users to use pesticide by including IoT sensors such as environmental, infrared and motion sensors. To get started, users create an account to get access to all these features and more that are included on the website.",
                    "In this project, we have implemented new features that are unique to our smart community garden. We have multiple sensors for different purposes like pest detection and watering of plants, which allows pesticides to be used when required and automatic watering of plants which makes caring for plants easier for older people as they do not have to travel to the community garden if they do not have much to do aside for watering plants. The Barrel design of each plot for each gardener also reduces the physical strain on our gardeners as they can garden in a comfortable standing positon without needing to squat or bend down.  We also have a food waste bin, so when crops are spoiled or damaged can be thrown into the bin which then can be used for composting, there is a force and reed sensor used which aids in keeping track of the weight and we will also convert the waste into fertilizer. This also helps with the government’s 30 by 30 project as well which is to sustainably produce 30% of our nutritional needs by 2030 as it would contribute to creating a sustainable source of produce."]}
                  contentsArray={[
                    "Project Overview",
                    "Features"]}
                />
                <Features 
                  projectFeaturesArray={[
                    "Real-time Information on Plants",
                    "Pest Detection and Watering",
                    "Automated Watering",
                    "Barrel Design",
                    "Food Waste Bin",
                    "Many IoT Sensors",
                  ]}
                  codeFeaturesArray={[
                    "Python (Flask, SocketIO)",
                    "React",
                    "Tailwind CSS",
                    "SocketIO",
                    "Beaglebone",
                    "ShadCN UI",
                    "SQL",
                    "NextJS",
                  ]}
                />
            </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            
        </footer>
    </div>
  );
}
