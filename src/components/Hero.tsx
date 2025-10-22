"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import dynamic from "next/dynamic";
import Typewriter from "@/components/Typewriter";

// Dynamically import 3D component (client-side only)
const ThreeDBackground = dynamic(() => import("./ThreeDBackground"), {
  ssr: false,
  loading: () => <div>Loading 3D...</div>,
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const typewriterPhrases = [
    "a Full Stack Developer",
    "a Problem Solver",
    "a Software Engineer",
    "a Tech Enthusiast",
    "building cool stuff",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4">
      {/* 3D Background */}
      <ThreeDBackground />
      
      <motion.div
        className="text-center max-w-4xl relative"
        style={{ zIndex: 10 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-cyan-400 text-lg md:text-xl mb-4 font-mono"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          Ali Aftab<span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-8 h-20 md:h-24 flex items-center justify-center"
        >
          <span className="mr-3">I'm</span>
          <Typewriter
            phrases={typewriterPhrases}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetweenPhrases={2000}
            className="text-cyan-400"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          I build scalable web applications using modern technologies. 
          Specializing in creating exceptional digital experiences with 
          clean code and pixel-perfect designs.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Link
              href="#projects"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-gray-900 rounded-lg font-semibold transition shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}