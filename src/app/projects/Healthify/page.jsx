'use client'

import { NavBar } from "@/app/components/Home/NavBar.jsx";
import { Header } from "@/app/components/Projects/Header";
import { Features } from "@/app/components/Projects/Features";
import { TableOfContents } from "@/app/components/Projects/TableOfContents";
import { ProjectOverview } from "@/app/components/Projects/ProjectOverview";
import { MyRole } from "@/app/components/Projects/MyRole";
import { GithubLink } from "@/app/components/Projects/GithubLink";
import { ProjectProblem } from "@/app/components/Projects/Problem";
import { OutcomeAndResults } from "@/app/components/Projects/OutcomeAndResults";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthifyPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div>
                <NavBar />
                <Header
                  title={"Healthify"}
                  date={"01/2025 - 02/2025"}
                  readMins={5}
                  imgSrc="https://raw.githubusercontent.com/Shockz132/Portfolio/refs/heads/main/public/Healthify/HealthifyPreview.png"
                  tagsArray={[
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "Google Gemini",
                    "OpenStreetMap",
                    "Material Design 3"
                  ]}
                />
                <GithubLink 
                  githubLink={"https://github.com/Cayden2606/Healthify"}
                />
                <ProjectProblem
                  problemStatement="Finding clinics, understanding what service you need, and booking appointments often means juggling multiple apps with unclear flows. How can we bring all of this into one simple, intelligent workflow?"
                />
                <ProjectOverview 
                  overviewContentArray={[
                    "Healthify is a Flutter healthcare app built in collaboration with Cayden2606 as part of the EGE312 Mobile Computing Project. It combines AI-powered health assistance (Google Gemini 2.0 Flash), interactive clinic discovery, smart appointment booking, and personal health tracking, all in one app tailored for Singapore.",
                    "Note: This is a concept application built for educational purposes. No real clinic bookings or medical appointments are made through this app.",
                  ]}
                />
                <TableOfContents 
                  contentsArray={[
                    "Problem",
                    "Project Overview",
                    "Features",
                    "My Role",
                    "Outcome and Results",
                    "Project Showcase"
                  ]}
                />
                <Features 
                  projectFeaturesArray={[
                    "AI Health Assistant with Google Gemini 2.0 Flash (chat & image analysis)",
                    "Interactive Clinic Map with search by region, distance, and open status",
                    "Smart Appointment Booking with AI-assisted service recommendations",
                    "Appointment Management with email notifications",
                    "Real-time Step Counter and Health Tracking",
                    "15+ Theme Palettes with Dark/Light mode",
                    "User Profiles with Cloudinary image uploads",
                    "Onboarding Flow for first-time users"
                  ]}
                  codeFeaturesArray={[
                    "Flutter 3.6.0+ / Dart",
                    "Material Design 3",
                    "Firebase (Auth, Firestore)",
                    "Google Gemini 2.0 Flash",
                    "Flutter Map + OpenStreetMap",
                    "Geoapify Places API",
                    "Cloudinary",
                    "Resend API",
                    "Provider (State Management)"
                  ]}
                />
                <MyRole 
                  role={"Co-Developer"}
                  descriptionArray={[
                    "I co-developed Healthify alongside Cayden2606, taking ownership of the AI integration, location services, appointment system, and theming across the full stack.",
                    "On the AI side, I integrated Google Gemini 2.0 Flash for health conversations and image analysis, built appointment intent extraction from chat, and managed conversational context.",
                    "For clinic discovery, I built the interactive map with Flutter Map and OpenStreetMap, integrated Geoapify for clinic data across Singapore, and implemented GPS-based and region-based search with Haversine distance calculations.",
                    "I designed the multi-step appointment booking flow (Category → Service → Date → Time → Info) with full CRUD, AI-assisted pre-fill, automatic status transitions, and email confirmations via Resend.",
                    "For theming, I built a custom Material Design 3 theme system with 15 color palettes, dark/light mode persistence in Firebase, and HSL manipulation for dark mode. I also set up Firebase Auth, Firestore architecture, Cloudinary profile uploads, and the onboarding flow."
                  ]}
                />
                <OutcomeAndResults 
                  contentArray={[
                    "Healthify delivers an end-to-end healthcare workflow, from asking health questions to an AI assistant, discovering nearby clinics on a map, and booking appointments, all within a single app.",
                    "The project was a strong learning experience in Flutter cross-platform development and integrating multiple third-party services (Gemini AI, Geoapify, Cloudinary, Resend) into a cohesive product. Collaborating with Cayden2606 also sharpened our skills in Git workflows and dividing responsibilities effectively.",
                    "Future improvements would include symptom diagnosis assistance, medication reminders, video consultations, and integration with real healthcare providers."
                  ]}
                />
                
                {/* App Showcase Section */}
                <section id="project-showcase" className="mx-auto max-w-5xl px-4 pb-24 text-[--foreground]">
                  <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-12 text-4xl font-black uppercase text-[--foreground]"
                  >
                    App Showcase
                  </motion.h2>

                  {/* Onboarding Flow */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Onboarding Experience</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/introScreen1.png", alt: "Welcome Screen" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/introScreen2.png", alt: "AI Assistant Intro" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/introScreen3.png", alt: "Find & Connect" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/introScreen4.png", alt: "Get Started" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Authentication & Home */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Home & Authentication</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/loginscreen.PNG", alt: "Login Screen" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/HomeScreen.PNG", alt: "Home Dashboard" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/lightpurpleHome.PNG", alt: "Light Purple Theme" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/DarkRedishHome.PNG", alt: "Dark Reddish Theme" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* AI Health Assistant */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">AI Health Assistant</h3>
                    <p className="text-lg mb-6 text-[--foreground]/80">Powered by Google Gemini 2.0 Flash for intelligent health conversations and image analysis</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/AIChat.PNG", alt: "AI Chat Interface" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/AIChatWithPicture.PNG", alt: "AI Image Analysis" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Clinic Discovery */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Interactive Clinic Discovery</h3>
                    <p className="text-lg mb-6 text-[--foreground]/80">Find clinics by region, distance, saved favorites, or current open status</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/ClinicMapRegions.PNG", alt: "Search by Regions" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/ClinicsMapNearby.png", alt: "Nearby Clinics" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/ClinicMapSaved.PNG", alt: "Saved Clinics" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/ClinicMapOpen.PNG", alt: "Currently Open" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Appointment Booking */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Smart Appointment Booking</h3>
                    <p className="text-lg mb-6 text-[--foreground]/80">Multi-step booking flow with AI-assisted service recommendations</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/makeAppointmentScreen1.png", alt: "Select Category" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/makeAppointmentScreen2.png", alt: "Select Service" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/makeAppointmentScreen3.png", alt: "Select Date" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/makeAppointmentScreen4.png", alt: "Select Time" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Appointment Management */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Appointment Management</h3>
                    <p className="text-lg mb-6 text-[--foreground]/80">Full CRUD operations with email notifications and location integration</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/UpcomingAppointment.png", alt: "Upcoming Appointments" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/ViewLocationOfAppointmentOnGoogleMapsOrHealthify.PNG", alt: "View Location" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/EditUpcommingAppointment.PNG", alt: "Edit Appointment" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/PassedAppointment.png", alt: "Past Appointments" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/EmailNotficationResend.png", alt: "Email Notification" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Settings & Profile */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="mb-16"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">Settings & Profile</h3>
                    <p className="text-lg mb-6 text-[--foreground]/80">Extensive customization with 15+ color themes, dark mode, and profile management</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {[
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/SettingsPage.png", alt: "Settings Light" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/SettingsPageDarkMode.png", alt: "Settings Dark" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/SettingsPageThemesOptions.png", alt: "Theme Options" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/UpdateUserProfilePage.png", alt: "Profile Update" },
                        { src: "https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/UpdateUserPhoneNumber.png", alt: "Phone Input" }
                      ].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 48, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.75, delay: idx * 0.1 }}
                          className="relative aspect-[9/19] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* App Icon */}
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-[--foreground]">App Icon</h3>
                    <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src="https://raw.githubusercontent.com/Cayden2606/Healthify/main/screenshots/app_icon.png" 
                        alt="Healthify App Icon" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </section>
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full">
              <p className="w-full text-center"> Copyright © 2025 Jethro. All rights reserved. </p>
            </footer>
        </main>
    </div>
  );
}
