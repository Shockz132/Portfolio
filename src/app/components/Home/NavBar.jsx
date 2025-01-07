import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

export const NavBar = () => {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-[--foreground]]">
        {/* <SiSpacex className="text-3xl mix-blend-difference" /> */}
        
        <a href="https://shockz132.github.io/Portfolio/" className="min-w-5 max-w-[50px] w-[10%]">
          <motion.img
            src={"https://raw.githubusercontent.com/Shockz132/Portfolio/d3c480ddfcb5d914424fdc619c0e417f91845651/public/HomePage/JLogo.svg"}
            alt={"J logo"}
            className="min-w-5 max-w-[50px] h-auto mix-blend-color invert"
          />
        </a>
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