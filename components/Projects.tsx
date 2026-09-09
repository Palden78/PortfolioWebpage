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
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-zinc-500">
            02 / PROJECTS
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            Experiments, systems, and projects built to understand how things
            work beneath the surface.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70 transition-colors duration-300 hover:border-zinc-600"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>

                <span className="font-mono text-xs text-zinc-600">
                  {project.path}
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.12 }}
                  className="font-mono text-sm text-zinc-600"
                >
                  <span className="text-zinc-500">$</span> cat project.info
                </motion.div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-500 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="font-mono text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300">
                    <span className="text-zinc-500">$</span>{" "}
                    ./view-project
                    <span className="ml-1 inline-block animate-pulse">
                      ▋
                    </span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-700">
                    [{project.status}]
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