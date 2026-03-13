'use client'

import { NavBar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { ProjectHeader } from "@/app/components/Projects/ProjectHeader";
import { ProjectProblem } from "@/app/components/Projects/ProjectProblem";
import { ProjectTechStack } from "@/app/components/Projects/ProjectTechStack";
import { ProjectOutcomes } from "@/app/components/Projects/ProjectOutcomes";
import { InteractiveShowcase } from "@/app/components/Projects/Healthify/InteractiveShowcase";
import { motion } from "framer-motion";
import { FiLayout, FiServer, FiCpu, FiGlobe } from "react-icons/fi";

export default function HealthifyPage() {
  const tocLinks = [
    { name: "PROBLEM", href: "#problem", id: "problem" },
    { name: "TECH STACK", href: "#tech-stack", id: "tech-stack" },
    { name: "OUTCOMES", href: "#outcomes", id: "outcomes" },
    { name: "FEATURES", href: "#ai-assistant", id: "ai-assistant" },
  ];

  return (
    <div className="min-h-screen bg-theme-bg text-theme-blue font-sans">
      <NavBar links={tocLinks} />

      {/* Structural Lines - Aligned with NavBar Dividers (68px/76px offset to overlap border) */}
      <div className="fixed left-[68px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />
      <div className="fixed right-[76px] top-0 bottom-0 w-[4px] bg-theme-blue pointer-events-none z-40" />

      <main className="w-full relative pt-24 pb-32 overflow-x-clip">
        {/* Playful polka-dot background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(var(--theme-green)_15%,transparent_15%)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-12 md:px-24 relative z-10">

          <ProjectHeader
            title="Health"
            titleAccent="ify"
            concatTitle={true}
            date="06/2025 - 08/2025"
            subtitle="An AI-powered healthcare application built with Flutter & Firebase."
            tags={["Flutter", "Dart", "Firebase", "Google Gemini", "OpenStreetMap", "MD3"]}
            repoLink="https://github.com/Shockz132/Healthify"
            repoType="github"
            imgSrc="/Healthify/HealthifyFeatured.png"
          />

          <ProjectProblem
            problemText="Finding clinics, understanding requirements, and booking appointments often means juggling multiple apps. How can we bring all of this into one simple, intelligent workflow?"
            overviewText="Healthify is a Flutter healthcare concept app built with Cayden2606. It combines AI-powered health assistance, interactive clinic discovery, smart booking, and personal health tracking, tailored for Singapore."
            roleText="As Co-Developer, I took ownership of the AI integration (Gemini 2.0), location services (OpenStreetMap), the appointment scheduling logic, and the extensive Material Design 3 theming across the entire stack."
          />

          <ProjectTechStack
            categories={[
              {
                title: "Frontend",
                color: "bg-theme-yellow",
                iconShape: "circle",
                chips: ["Flutter", "Dart", "Material Design 3"]
              },
              {
                title: "Backend",
                color: "bg-theme-green",
                iconShape: "square",
                chipColor: "bg-theme-cream",
                chips: ["Firebase", "Firestore", "Auth", "Storage"]
              },
              {
                title: "AI Engine",
                color: "bg-theme-orange",
                iconShape: "diamond",
                lightText: true,
                chipColor: "bg-theme-blue text-theme-cream",
                chipBorder: "border-white",
                chips: ["Google Gemini 2.0 Flash", "Vision API"]
              },
              {
                title: "External APIs",
                color: "bg-theme-yellow",
                lightText: false,
                chipColor: "bg-theme-green",
                chips: ["OpenStreetMap", "Resend Email", "Google Maps"]
              }
            ]}
          />

          <ProjectOutcomes
            takeaways={[
              {
                title: "End-to-End Workflow",
                content: "Delivered a seamless user journey from AI assistance to clinic discovery and secure booking."
              },
              {
                title: "Core Integrations",
                content: "Mastered Flutter cross-platform development with complex APIs like Gemini, Geoapify, and Resend."
              },
              {
                title: "Technical Collaboration",
                content: "Sharpened team-based development skills using Git workflows and modular project structure."
              }
            ]}
            metrics={[
              { value: "100%", label: "Completion", description: "Full CRUD functionality across all features.", color: "bg-theme-green" },
              { value: "60 FPS", label: "Performance", description: "Smooth UI rendering across devices.", color: "bg-theme-yellow" }
            ]}
            futureScope="Future improvements would focus on expanding medical capabilities, including symptom diagnosis assistance, medication reminders, integrated video consultations, and establishing direct connections with real healthcare providers."
          />

          {/* APP SHOWCASE - INTERACTIVE GALLERIES */}
          <section id="ai-assistant" className="mb-32 w-full max-w-none scroll-mt-32">
            <div className="flex items-center gap-6 mb-16 px-12 md:px-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-theme-blue">
                App Showcase
              </h2>
              <div className="h-2 flex-1 bg-theme-blue"></div>
            </div>

            {/* Feature 1: AI Assistant */}
            <InteractiveShowcase
              id="ai-assistant-showcase"
              title="AI Health Assistant"
              description="Powered by Gemini 2.0 Flash. Multi-modal chat allowing users to upload symptom images (Vision) and get instantaneous AI-driven guidance."
              color="orange"
              images={[
                { src: "/Healthify/screenshots/HealthifyAIChat.png", alt: "AI Chat Interface" },
                { src: "/Healthify/screenshots/HealthifyAIChat.png", alt: "Response Log" },
                { src: "/Healthify/screenshots/HealthifyAIChatWithPicture.png", alt: "Vision Capability" }
              ]}
            />

            {/* Feature 2: Clinic Discovery */}
            <InteractiveShowcase
              id="clinic-map"
              title="Clinic Discovery"
              description="Integrated OpenStreetMap with Geoapify. Users can search for specific service types and view clinics on an interactive map with detail cards."
              color="green"
              reverse={true}
              images={[
                { src: "/Healthify/screenshots/HealthifyClinicMapOpen.png", alt: "Service Search" },
                { src: "/Healthify/screenshots/HealthifyClinicMapRegions.png", alt: "Map View" },
                { src: "/Healthify/screenshots/HealthifyClinicMapSaved.png", alt: "Clinic Directory" }
              ]}
            />

            {/* Feature 3: Onboarding & Login */}
            <InteractiveShowcase
              id="onboarding"
              title="Secure Onboarding"
              description="Complete Firebase Auth implementation. Clean, brutalist welcome flow with email authentication and personalized setup."
              color="yellow"
              images={[
                { src: "/Healthify/screenshots/HealthifyIntroScreen1.png", alt: "Welcome Intro" },
                { src: "/Healthify/screenshots/HealthifyIntroScreen2.png", alt: "Splash Screen" },
                { src: "/Healthify/screenshots/HealthifyLoginScreen.png", alt: "Brutalist Login" },
                { src: "/Healthify/screenshots/HealthifyIntroScreen4.png", alt: "New User Reg" }
              ]}
            />

            {/* Feature 4: Booking Workflow */}
            <InteractiveShowcase
              id="booking"
              title="Appointment Workflow"
              description="Full CRUD operations. Multi-step booking flow with AI-assistance, location tracking, and Resend email notifications."
              color="blue"
              reverse={true}
              images={[
                { src: "/Healthify/screenshots/HealthifyMakeAppointmentScreen1.png", alt: "Select Category" },
                { src: "/Healthify/screenshots/HealthifyMakeAppointmentScreen2.png", alt: "Choose Service" },
                { src: "/Healthify/screenshots/HealthifyMakeAppointmentScreen3.png", alt: "Pick Date" },
                { src: "/Healthify/screenshots/HealthifyMakeAppointmentScreen4.png", alt: "Confirm Time" },
                { src: "/Healthify/screenshots/HealthifyUpcomingAppointment.png", alt: "Upcoming Dash" },
                { src: "/Healthify/screenshots/HealthifyEditUpcommingAppointment.png", alt: "Modify Booking" },
                { src: "/Healthify/screenshots/HealthifyPassedAppointment.png", alt: "History Log" },
                { src: "/Healthify/screenshots/HealthifyEmailNotficationResend.png", alt: "Email Notices" }
              ]}
            />

            {/* Feature 5: Theming & Personalization */}
            <InteractiveShowcase
              id="personalization"
              title="Theming & Profiles"
              description="Extensive personalization. Users can switch between 15 distinct color palettes, toggle dark mode, and manage profile data."
              color="yellow"
              images={[
                { src: "/Healthify/screenshots/HealthifyHomeScreen.png", alt: "Default Green" },
                { src: "/Healthify/screenshots/HealthifyLightPurpleHome.png", alt: "Light Purple" },
                { src: "/Healthify/screenshots/HealthifyDarkRedishHome.png", alt: "Dark Reddish" },
                { src: "/Healthify/screenshots/HealthifySettingsPageThemesOptions.png", alt: "Theme Selector" },
                { src: "/Healthify/screenshots/HealthifySettingsPage.png", alt: "Settings Hub" },
                { src: "/Healthify/screenshots/HealthifySettingsPageDarkMode.png", alt: "Dark Mode UI" },
                { src: "/Healthify/screenshots/HealthifyUpdateUserProfilePage.png", alt: "Edit Identity" },
                { src: "/Healthify/screenshots/HealthifyUpdateUserPhoneNumber.png", alt: "Verify Contact" }
              ]}
            />

          </section>

        </div>
      </main>

      <Footer text="Healthify Project Showcase | Built with 🦒" />
    </div>
  );
}

