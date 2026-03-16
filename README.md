# Portfolio

A modern, interactive personal portfolio built with Next.js 15, React 19, and Tailwind CSS. Showcases projects, skills, work experience, and provides a platform for potential collaborators to get in touch.

## Features

- **Smooth Scrolling**: Implemented with Lenis for buttery-smooth scroll experience
- **Interactive Animations**: Powered by Framer Motion for engaging UI transitions
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern Components**: Built with shadcn/ui and Lucide React icons
- **Dynamic Text Effects**: Custom text scramble and animation components
- **Project Showcases**: Detailed project pages with tech stacks, outcomes, and interactive demos

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15.1.3 (App Router) |
| **Language** | JavaScript/TypeScript |
| **Styling** | Tailwind CSS, tailwind-merge, class-variance-authority |
| **UI Library** | shadcn/ui, Lucide React, React Icons |
| **Animation** | Framer Motion, Motion |
| **Smooth Scroll** | Lenis |
| **Video Integration** | react-youtube |
| **Utilities** | clsx, tailwindcss-animate |

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── core/          # Core UI components
│   │   ├── Home/          # Homepage sections
│   │   └── Projects/      # Reusable project display components
│   ├── projects/          # Individual project pages
│   ├── utils/             # Utility functions
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Homepage
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## Featured Projects

- [**Healthify**](src/app/projects/Healthify/page.jsx) - Interactive health-focused project with video showcase
- [**LogicGateCircuitSolver**](src/app/projects/LogicGateCircuitSolver/page.jsx) - Educational tool for circuit logic
- [**PlantPulse**](src/app/projects/PlantPulse/page.jsx) - Sustainability and plant monitoring application
- [**WingsOfSustainability**](src/app/projects/WingsOfSustainability/page.jsx) - Eco-friendly aviation initiative project

## Key Components

### Core Components
- [smooth-scroll.jsx](src/app/components/core/smooth-scroll.jsx) - Lenis-based smooth scrolling implementation
- [text-effect.tsx](src/app/components/core/text-effect.tsx) - Animated text effect component
- [text-scramble.tsx](src/app/components/core/text-scramble.tsx) - Text scramble animation component

### Layout Components
- [NavBar.jsx](src/app/components/NavBar.jsx) - Responsive navigation with smooth transitions
- [Footer.jsx](src/app/components/Footer.jsx) - Site-wide footer with links

### Homepage Sections
- [AboutMe.jsx](src/app/components/Home/AboutMe.jsx) - About me introduction section
- [BioBridge.jsx](src/app/components/Home/BioBridge.jsx) - Interactive bio introduction section
- [SkillsPreview.jsx](src/app/components/Home/SkillsPreview.jsx) - Animated skills showcase
- [WorkExperience.jsx](src/app/components/Home/WorkExperience.jsx) - Timeline-based experience display
- [Projects.jsx](src/app/components/Home/Projects.jsx) - Featured projects section
- [WhatIUse.jsx](src/app/components/Home/WhatIUse.jsx) - Tools and technologies section
- [Testimonials.jsx](src/app/components/Home/Testimonials.jsx) - Social proof section
- [ContactMe.jsx](src/app/components/Home/ContactMe.jsx) - Contact form and information

### Project Display Components
- [ProjectHeader.jsx](src/app/components/Projects/ProjectHeader.jsx) - Project page header component
- [ProjectProblem.jsx](src/app/components/Projects/ProjectProblem.jsx) - Problem statement display
- [ProjectTechStack.jsx](src/app/components/Projects/ProjectTechStack.jsx) - Technology stack display
- [ProjectOutcomes.jsx](src/app/components/Projects/ProjectOutcomes.jsx) - Project outcomes showcase
- [InteractiveShowcase.jsx](src/app/components/Projects/Healthify/InteractiveShowcase.jsx) - Interactive project demo component

## Configuration

- [tsconfig.json](tsconfig.json) - TypeScript configuration
- [tailwind.config.js](tailwind.config.js) - Tailwind CSS configuration
- [components.json](components.json) - shadcn/ui component configuration
- [jsconfig.json](jsconfig.json) - JavaScript path aliases
- [next-env.d.ts](next-env.d.ts) - Next.js TypeScript declarations

## Main Entry Points

- [page.jsx](src/app/page.jsx) - Homepage entry point
- [layout.jsx](src/app/layout.jsx) - Root layout with providers
- [paths.js](src/app/utils/paths.js) - Application path configurations
- [utils.ts](src/lib/utils.ts) - Utility functions (cn helper)

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

Feel free to explore the projects and reach out through the contact section!
