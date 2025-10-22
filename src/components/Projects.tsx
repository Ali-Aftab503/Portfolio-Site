"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: { scale: 0.95 },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-indigo-900 text-indigo-200 text-sm rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link ? (
                    <motion.div
                      className="flex-1"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        className="block text-center px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 transition"
                      >
                        Code
                      </Link>
                    </motion.div>
                  ) : (
                    <button
                      disabled
                      className="flex-1 text-center px-4 py-2 bg-gray-700 text-gray-400 rounded font-semibold cursor-not-allowed"
                    >
                      Code
                    </button>
                  )}

                  {project.demo ? (
                    <motion.div
                      className="flex-1"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="block text-center px-4 py-2 border-2 border-blue-400 text-blue-400 rounded font-semibold hover:bg-blue-900/20 transition"
                      >
                        Demo
                      </Link>
                    </motion.div>
                  ) : (
                    <button
                      disabled
                      className="flex-1 text-center px-4 py-2 border-2 border-gray-600 text-gray-500 rounded font-semibold cursor-not-allowed"
                    >
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}