"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  problem: string;
  approach: string;
  learned: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "APSAP Research Assistant",
    description:
      "A grounded archaeological research assistant designed to help researchers and students retrieve useful information from a curated collection of archaeological sources.",
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "ChromaDB",
      "MySQL",
      "Docker",
    ],
    problem:
      "Archaeological material was spread across curated research documents, making grounded answers difficult to retrieve quickly.",
    approach:
      "Built a retrieval-augmented assistant that combines vector search, structured retrieval, and online search while keeping answers grounded in the supplied sources.",
    learned:
      "How retrieval quality, chunking, evaluation, and system boundaries matter just as much as the language model itself.",
  },
  {
    number: "02",
    title: "URL Shortener",
    description:
      "A small backend-focused system built to understand how HTTP requests, persistence, validation, and deployment fit together in a real application.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Python",
    ],
    problem:
      "A URL shortener looks simple on the surface, but even a small service requires careful handling of data modeling, validation, failures, and configuration.",
    approach:
      "Designed a REST API backed by PostgreSQL, containerized the application, and separated application logic from persistence and deployment concerns.",
    learned:
      "How seemingly simple backend systems expose important engineering decisions around data modeling, validation, configuration, and deployment.",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState<string | null>(
    null
  );

  return (
    <section className="bg-[#e9dfcc] px-6 py-24 text-[#3b3025]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between border-b border-[#c9bda7] pb-4">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#9b7847]">
              ARCHIVE
            </p>

            <h2 className="mt-2 font-cinzel text-3xl">
              Selected work
            </h2>
          </div>

          <span className="font-mono text-[10px] tracking-widest text-[#8a755b]">
            ARCHIVE ENTRIES / 02 ITEMS
          </span>
        </div>

        <div className="divide-y divide-[#c9bda7]">
          {projects.map((project) => {
            const isOpen = openProject === project.number;

            return (
              <motion.article
                key={project.number}
                layout
                className="py-8"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenProject(
                      isOpen ? null : project.number
                    )
                  }
                  className="w-full text-left"
                >
                  <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start">
                    <span className="font-mono text-xs text-[#9b7847]">
                      {project.number}
                    </span>

                    <div>
                      <h3 className="font-cinzel text-2xl transition-colors duration-300 group-hover:text-[#9b7847]">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#756957]">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#c9bda7] px-3 py-1 font-mono text-[9px] tracking-wide text-[#806f59]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#9b7847] md:pt-2">
                      {isOpen
                        ? "CLOSE ENTRY ↑"
                        : "INSPECT ENTRY →"}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-10 grid gap-8 border-t border-[#c9bda7] pt-8 md:grid-cols-3 md:pl-[80px]">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.2em] text-[#9b7847]">
                            THE PROBLEM
                          </p>

                          <p className="mt-3 text-sm leading-7 text-[#665846]">
                            {project.problem}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] tracking-[0.2em] text-[#9b7847]">
                            THE APPROACH
                          </p>

                          <p className="mt-3 text-sm leading-7 text-[#665846]">
                            {project.approach}
                          </p>
                        </div>

                        <div>
                          <p className="font-mono text-[9px] tracking-[0.2em] text-[#9b7847]">
                            WHAT I LEARNED
                          </p>

                          <p className="mt-3 text-sm leading-7 text-[#665846]">
                            {project.learned}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}