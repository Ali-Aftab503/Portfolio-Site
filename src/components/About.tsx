"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, type: "spring" as const, stiffness: 100 },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Full-stack developer specializing in architecting enterprise-grade web applications with Next.js, React, and TypeScript. I build scalable, production-ready platforms featuring real-time collaboration systems, advanced 3D interfaces, and complex state management—delivering solutions that drive business value and exceptional user experiences..
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From implementing WebSocket-powered chat systems to crafting immersive Three.js experiences and integrating third-party APIs, I transform ambitious ideas into high-performance applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Skills
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={skillsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              {portfolioData.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover="hover"
                  className="px-4 py-2 bg-blue-900 text-blue-200 rounded-full font-semibold cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}