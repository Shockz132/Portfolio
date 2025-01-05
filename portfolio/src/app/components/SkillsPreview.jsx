import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { IoMdDownload } from "react-icons/io";
import { useRef } from "react";

export const SkillsPreview = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Nav />
        <Hero />
        <Skills />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      {/* <SiSpacex className="text-3xl mix-blend-difference" /> */}
      <motion.img
        src={"https://logosandtypes.com/wp-content/uploads/2020/11/jacobs.svg"}
        alt={"J logo"}
        className="min-w-10 max-w-min h-auto mix-blend-color invert"
      />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-s text-zinc-400"
      >
        Resume <IoMdDownload />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.ctfassets.net/tfvkuuj8nae0/3TChTMPUFJrnH1681hNIGw/a14ed2d22a2d1ebc7cdd0192f4d306ce/rainglow-vs-code-theme.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React JS logo"
        start={-200}
        end={200}
        className="w-[20%]"
      />
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        alt="typescript logo"
        start={200}
        end={-250}
        className="mx-auto w-[20%]"
      />
      <ParallaxImg
        src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0yMCwyMy40NzRWMzEuNWMwLDAuODI4LTAuNjcyLDEuNS0xLjUsMS41UzE3LDMyLjMyOCwxNywzMS41di0xM2MwLTAuNjU5LDAuNDMxLTEuMjQxLDEuMDYyLTEuNDM1IGMwLjYyNy0wLjE5LDEuMzE0LDAuMDQ5LDEuNjgyLDAuNTk2bDAuMjQ5LDAuMzdMMjAsMThsMTUuMjM0LDIyLjU0NkM0MC41MjQsMzYuOTQ3LDQ0LDMwLjg4LDQ0LDI0YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwIFM0LDEyLjk1NCw0LDI0czguOTU0LDIwLDIwLDIwYzMuMDgyLDAsNS45OS0wLjcxOCw4LjU5Ny0xLjk2M0wyMCwyMy40NzR6IE0yOCwxNi41YzAtMC44MjgsMC42NzItMS41LDEuNS0xLjVzMS41LDAuNjcyLDEuNSwxLjUgdjEyLjc5bC0zLTQuMzA0VjE2LjV6Ii8+PC9zdmc+"
        alt="white nextjs logo"
        start={-200}
        end={200}
        className="ml-auto w-[20%]"
      />
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        alt="python logo"
        start={150}
        end={-500}
        className="ml-48 w-[15%]"
      />
      <ParallaxImg
        src="https://cdn.worldvectorlogo.com/logos/c-1.svg"
        alt="C logo"
        start={150}
        end={-500}
        className="ml-auto mr-48 w-[18%]"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-[0.1%]"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Skills = () => {
  return (
    <section
      id="about-me"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Skills
      </motion.h1>
      
    </section>
  );
};

const ScheduleItem = () => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
      </div>
    </motion.div>
  );
};