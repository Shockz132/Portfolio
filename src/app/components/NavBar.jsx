"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultLinks = [
    { name: "ABOUT", href: "/#about", id: "about" },
    { name: "EXPERIENCE", href: "/#experience", id: "experience" },
    { name: "SKILLS", href: "/#skills", id: "skills" },
    { name: "PROJECTS", href: "/#projects", id: "projects" },
  ];

  const navLinks = links || defaultLinks;

  const handleScroll = (e, id, href) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    } else {
      // Fallback to the link's href if element not found in current DOM
      window.location.href = href;
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-stretch justify-between bg-theme-bg border-b-4 border-theme-blue h-[72px] text-theme-blue">
      <div className="flex items-center">
        <Link href="/" className="flex flex-shrink-0 items-center justify-center border-2 border-r-4 border-theme-blue w-[72px] h-[72px] bg-theme-yellow hover:bg-theme-orange transition-colors duration-300 p-2">
          <img src="/giraffe_pfp.jpg" alt="Logo" className="w-full h-full object-cover rounded-full border-2 border-theme-blue" />
        </Link>
        <div className="hidden sm:flex font-mono text-[11px] tracking-widest uppercase items-center ml-6 font-bold">
          JETHRO CHIA <span className="ml-2 bg-theme-blue text-theme-bg px-2 py-0.5">DEV_</span>
        </div>
      </div>

      <div className="flex items-stretch">
        <div className="hidden lg:flex items-stretch">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.id, link.href)}
              className="flex items-center px-6 border-l-4 border-theme-blue font-mono text-[11px] font-bold tracking-widest uppercase cursor-pointer hover:bg-theme-orange hover:text-white transition-all duration-300"
            >
              [ {link.name} ]
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden items-center justify-center px-6 border-l-4 border-theme-blue bg-theme-blue text-theme-yellow w-[80px] cursor-pointer hover:bg-theme-orange transition-colors duration-300 z-50"
        >
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-theme-blue/20 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[72px] right-0 bottom-0 w-full md:w-[400px] bg-theme-bg border-l-4 border-theme-blue z-40 flex flex-col pt-12"
            >
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.id, link.href)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="px-12 py-8 border-b-4 border-theme-blue text-4xl font-black uppercase tracking-tighter hover:bg-theme-yellow transition-colors text-theme-blue"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="mt-auto p-12 bg-theme-blue text-theme-cream">
                <p className="font-mono text-xs font-bold tracking-[0.2em] mb-4 border-l-4 border-theme-yellow pl-4">SOCIALS</p>
                <div className="flex gap-6">
                  <a href="https://github.com/Shockz132" target="_blank" className="font-mono text-sm font-bold uppercase hover:text-theme-yellow">Github</a>
                  <a href="https://linkedin.com" target="_blank" className="font-mono text-sm font-bold uppercase hover:text-theme-yellow">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};