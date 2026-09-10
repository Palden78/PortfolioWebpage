"use client";

import { motion } from "motion/react";

const projects = [
  {
    name: "APSAP Research Assistant",
    path: "~/projects/apsap-rag",
    description:
      "A RAG-based research assistant for archaeological research, built around curated South Caucasus archaeological sources.",
    stack: ["Next.js", "FastAPI", "ChromaDB", "Docker"],
    status: "research",
  },
  {
    name: "URL Shortener",
    path: "~/projects/url-shortener",
    description:
      "A backend-focused URL shortening service built to explore APIs, databases, containers, and service architecture.",
    stack: ["FastAPI", "PostgreSQL", "Docker"],
    status: "building",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#e9dfcc] px-6 pb-32"
    >
      {/* Paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(#3b3025 0.7px, transparent 0.7px)
          `,
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-lg border border-[#c9bda7] bg-[#eee5d5]/70 transition-all duration-300 hover:border-[#9b7847] hover:bg-[#f2e9da]"
            >
              {/* Project header */}
              <div className="flex items-center justify-between border-b border-[#c9bda7] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#b8a487]" />
                  <span className="h-2 w-2 rounded-full bg-[#c9bda7]" />
                  <span className="h-2 w-2 rounded-full bg-[#d8ccb8]" />
                </div>

                <span className="font-mono text-[10px] tracking-widest text-[#8a755b]">
                  {project.path}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="font-mono text-xs tracking-[0.2em] text-[#9b7847]">
                      PROJECT //{" "}
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h2 className="mt-4 font-cinzel text-3xl text-[#3b3025] transition-colors duration-300 group-hover:text-[#80613a] sm:text-4xl">
                      {project.name}
                    </h2>

                    <p className="mt-5 text-lg leading-relaxed text-[#665846]">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[#c9bda7] px-3 py-1.5 font-mono text-xs text-[#806f59] transition-colors duration-300 group-hover:border-[#b8a487]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 lg:text-right">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#8a755b]">
                      STATUS
                    </span>

                    <div className="mt-2 font-mono text-xs uppercase tracking-widest text-[#9b7847]">
                      [{project.status}]
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#c9bda7] pt-5">
                  <span className="font-mono text-xs text-[#8a755b]">
                    ARCHIVE_ENTRY_{String(index + 1).padStart(3, "0")}
                  </span>

                  <span className="font-mono text-xs text-[#8a755b] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6d512e]">
                    explore →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}