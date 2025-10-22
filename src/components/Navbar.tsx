"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import NavbarResumeButton from "./NavbarResumeButton";
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut"as const },
    }),
    hover: {
      color: "#0ea5e9",
      transition: { duration: 0.2 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const themeToggleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 },
    },
    hover: {
      rotate: 20,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-gray-800 shadow-lg transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* START OF CHANGE */}
            <Link
              href="/"
              className="text-2xl font-bold text-blue-400"
            >
              <Image src="/logo.png" alt="Ali Aftab Portfolio Logo" width={70} height={70} />

            </Link>
            {/* END OF CHANGE */}
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.div
              variants={themeToggleVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <ThemeToggle />
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>

           <motion.ul
  className="hidden md:flex gap-8 items-center"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.li variants={itemVariants} whileHover="hover">
    <Link href="/" className="transition">
      Home
    </Link>
  </motion.li>
  <motion.li variants={itemVariants} whileHover="hover">
    <a href="#about" className="transition">
      About
    </a>
  </motion.li>
  <motion.li variants={itemVariants} whileHover="hover">
    <a href="#projects" className="transition">
      Projects
    </a>
  </motion.li>
  <motion.li variants={itemVariants} whileHover="hover">
    <a href="#contact" className="transition">
      Contact
    </a>
  </motion.li>
  <motion.li variants={itemVariants} custom={4} whileHover="hover">
    <NavbarResumeButton />
  </motion.li>
</motion.ul>
          </div>
        </div>

        {isOpen && (
          <motion.ul
            className="md:hidden pb-4 space-y-2"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.li variants={itemVariants}>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </motion.li>
            <motion.li variants={itemVariants} custom={4} whileHover="hover">
              <NavbarResumeButton />
            </motion.li>
          </motion.ul>
        )}
      </div>
    </nav>
  );
}