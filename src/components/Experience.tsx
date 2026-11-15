"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 bg-gray-900 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Experience
        </motion.h2>

        <div className="mx-auto max-w-4xl space-y-8">
          {portfolioData.experience.map((experience) => (
            <motion.article
              key={`${experience.company}-${experience.startDate}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border-l-4 border-blue-500 bg-gray-800 p-6 shadow-lg sm:p-8"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-blue-400">
                    {experience.company}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-gray-400 sm:pt-2">
                  {experience.period}
                </p>
              </div>

              <p className="mb-6 leading-relaxed text-gray-300">
                {experience.description}
              </p>

              <div className="mb-6 border-t border-gray-700 pt-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Project contribution
                </p>
                <h4 className="mb-3 text-xl font-bold">
                  <a
                    href={experience.project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${experience.project.name} website (opens in a new tab)`}
                    className="text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {experience.project.name} <span aria-hidden="true">↗</span>
                  </a>
                </h4>
                <p className="mb-3 leading-relaxed text-gray-300">
                  {experience.project.contribution}
                </p>
                <p className="leading-relaxed text-gray-400">
                  {experience.project.overview}
                </p>
              </div>

              <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-blue-900 px-3 py-1 text-sm font-semibold text-blue-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
