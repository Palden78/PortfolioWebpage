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

const devProjects: Project[] = [
  {
    number: "01",
    title: "APSAP Research Assistant",
    description:
      "A retrieval-augmented archaeological research assistant built to help researchers retrieve grounded information from a curated collection of archaeological sources.",
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "MySQL",
      "ChromaDB",
      "Docker",
    ],
    problem:
      "Archaeological knowledge was distributed across a large collection of research documents, making it difficult to find relevant information quickly while keeping answers grounded in the original sources.",
    approach:
      "Built a full-stack RAG system that combines document processing, vector retrieval, structured data, and an interactive web interface to return source-grounded answers.",
    learned:
      "How retrieval quality, document processing, chunking, evaluation, and clear system boundaries matter just as much as the language model in an AI application.",
  },
  {
    number: "02",
    title: "URL Shortener",
    description:
      "A backend-focused URL shortening service built to explore the fundamentals of designing, persisting, and deploying a small production-style API.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "Python"],
    problem:
      "A URL shortener appears simple, but even a small service requires decisions around data modeling, validation, HTTP behavior, persistence, and deployment.",
    approach:
      "Designed a REST API backed by PostgreSQL and containerized the service with Docker, keeping application logic, persistence, and deployment concerns clearly separated.",
    learned:
      "How small backend systems expose core engineering concepts such as database modeling, API design, validation, configuration, and deployment.",
  },
  {
    number: "03",
    title: "Workout Tracker",
    description:
      "A local-first iPhone workout tracker built to replace an inconvenient notes-based workflow with structured workout logging, history, progression tracking, and reliable data backup.",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "SQLite",
      "XLSX",
    ],
    problem:
      "Recording workouts in a notes app made structured tracking, reviewing progress, and maintaining workout history unnecessarily difficult.",
    approach:
      "Built a native mobile application with SQLite persistence, calendar-based logging, exercise management, progress statistics, streak tracking, and XLSX export/import for data portability.",
    learned:
      "How local persistence, transactional imports, data validation, mobile navigation, and designing around an actual personal workflow shape a useful application.",
  },
];

const cybersecurityProjects: Project[] = [];

type FolderType = "dev" | "cybersecurity";

function DevFolderIcon({ active }: { active: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 100 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-24"
      animate={{ y: active ? -2 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.path
        d="M8 18C8 14.6863 10.6863 12 14 12H39L47 21H86C89.3137 21 92 23.6863 92 27V64C92 67.3137 89.3137 70 86 70H14C10.6863 70 8 67.3137 8 64V18Z"
        stroke="currentColor"
        strokeWidth="2"
        animate={{
          fill: active
            ? "rgba(155, 120, 71, 0.16)"
            : "rgba(155, 120, 71, 0.08)",
        }}
        transition={{ duration: 0.25 }}
      />

      <motion.path
        d="M8 28H92V64C92 67.3137 89.3137 70 86 70H14C10.6863 70 8 67.3137 8 64V28Z"
        stroke="currentColor"
        strokeWidth="2"
        animate={{ y: active ? -1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.path
        d="M28 43L35 49L28 55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ x: active ? 2 : 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.path
        d="M40 55H55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ x: active ? 2 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </motion.svg>
  );
}

function CybersecurityFolderIcon({ active }: { active: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 100 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-24"
      animate={{ y: active ? -2 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.path
        d="M8 18C8 14.6863 10.6863 12 14 12H39L47 21H86C89.3137 21 92 23.6863 92 27V64C92 67.3137 89.3137 70 86 70H14C10.6863 70 8 67.3137 8 64V18Z"
        stroke="currentColor"
        strokeWidth="2"
        animate={{
          fill: active
            ? "rgba(155, 120, 71, 0.16)"
            : "rgba(155, 120, 71, 0.08)",
        }}
        transition={{ duration: 0.25 }}
      />

      <motion.path
        d="M8 28H92V64C92 67.3133 89.3137 70 86 70H14C10.6863 70 8 67.3133 8 64V28Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <motion.path
        d="M50 39L62 43V51C62 58 56.5 62 50 65C43.5 62 38 58 38 51V43L50 39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        animate={{ scale: active ? 1.08 : 1 }}
        style={{ transformOrigin: "50% 52px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <motion.path
        d="M44.5 51L48 54.5L55.5 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: active ? 1 : 0.65 }}
      />
    </motion.svg>
  );
}

function ProjectFolder({
  type,
  title,
  count,
  active,
  onClick,
}: {
  type: FolderType;
  title: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={false}
      animate={{ y: active ? -4 : 0 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative w-full max-w-xs text-left ${
        active ? "text-[#6d512e]" : "text-[#806f59]"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-lg border p-6 transition-all duration-300 ${
          active
            ? "border-[#9b7847] bg-[#f2e9da]/80 shadow-lg"
            : "border-[#c9bda7] bg-[#eee5d5]/45 hover:border-[#9b7847] hover:bg-[#f2e9da]/70"
        }`}
      >
        <div
          className={`absolute right-4 top-4 h-2 w-2 rotate-45 border transition-all duration-300 ${
            active
              ? "border-[#9b7847] bg-[#9b7847]"
              : "border-[#c9bda7] group-hover:border-[#9b7847]"
          }`}
        />

        <div className="mb-5">
          {type === "dev" ? (
            <DevFolderIcon active={active} />
          ) : (
            <CybersecurityFolderIcon active={active} />
          )}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#9b7847]">
              DIRECTORY
            </p>
            <h3 className="mt-2 font-cinzel text-xl tracking-wide">
              {title}
            </h3>
          </div>

          <span className="font-mono text-[9px] tracking-widest text-[#8a755b]">
            {String(count).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-3 font-mono text-[9px] tracking-wide text-[#8a755b]">
          {type === "dev"
            ? "software / systems / experiments"
            : "security / infrastructure / investigations"}
        </p>

        <motion.div
          className="absolute bottom-0 left-0 h-px bg-[#9b7847]"
          initial={{ width: 0 }}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -4 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2 flex items-center gap-2 font-mono text-[8px] tracking-[0.2em] text-[#9b7847]"
      >
        <span>OPEN DIRECTORY</span>
        <span>→</span>
      </motion.div>
    </motion.button>
  );
}

function ProjectEntry({
  project,
  index,
  openProject,
  setOpenProject,
}: {
  project: Project;
  index: number;
  openProject: string | null;
  setOpenProject: (value: string | null) => void;
}) {
  const isOpen = openProject === project.number;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-[#c9bda7] py-8"
    >
      <button
        type="button"
        onClick={() => setOpenProject(isOpen ? null : project.number)}
        className="w-full text-left"
      >
        <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start">
          <div>
            <span className="font-mono text-xs text-[#9b7847]">
              {project.number}
            </span>
            <p className="mt-2 font-mono text-[8px] tracking-widest text-[#b09e84]">
              ENTRY
            </p>
          </div>

          <div>
            <h3 className="font-cinzel text-2xl">{project.title}</h3>

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
            {isOpen ? "CLOSE ENTRY ↑" : "INSPECT ENTRY →"}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
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
}

export default function Projects() {
  const [activeFolder, setActiveFolder] = useState<FolderType>("dev");
  const [openProject, setOpenProject] = useState<string | null>(null);

  const projects =
    activeFolder === "dev" ? devProjects : cybersecurityProjects;

  function changeFolder(folder: FolderType) {
    setActiveFolder(folder);
    setOpenProject(null);
  }

  return (
    <section className="bg-[#e9dfcc] px-6 py-24 text-[#3b3025]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 border-b border-[#c9bda7] pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#9b7847]">
              ARCHIVE
            </p>
            <h2 className="mt-2 font-cinzel text-3xl">Project directory</h2>
          </div>

          <div className="font-mono text-[10px] tracking-widest text-[#8a755b]">
            FIELD ARCHIVE / SELECT A DIRECTORY
          </div>
        </div>

        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#8a755b]">
              DIRECTORIES
            </span>
            <span className="h-px flex-1 bg-[#c9bda7]" />
            <span className="font-mono text-[9px] text-[#b09e84]">02</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <ProjectFolder
              type="dev"
              title="DEV"
              count={devProjects.length}
              active={activeFolder === "dev"}
              onClick={() => changeFolder("dev")}
            />

            <ProjectFolder
              type="cybersecurity"
              title="CYBERSECURITY"
              count={cybersecurityProjects.length}
              active={activeFolder === "cybersecurity"}
              onClick={() => changeFolder("cybersecurity")}
            />
          </div>
        </div>

        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#c9bda7]" />

          <motion.div
            key={activeFolder}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rotate-45 bg-[#9b7847]" />
            <span className="font-mono text-[9px] tracking-[0.22em] text-[#8a755b]">
              / {activeFolder === "dev" ? "DEV" : "CYBERSECURITY"}
            </span>
          </motion.div>

          <div className="h-px flex-1 bg-[#c9bda7]" />
        </div>

        <AnimatePresence mode="wait">
          {projects.length > 0 ? (
            <motion.div
              key={activeFolder}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#9b7847]">
                  DIRECTORY CONTENTS
                </p>

                <p className="font-mono text-[9px] tracking-widest text-[#8a755b]">
                  {String(projects.length).padStart(2, "0")}{" "}
                  {projects.length === 1 ? "ENTRY" : "ENTRIES"}
                </p>
              </div>

              <div className="divide-y divide-[#c9bda7]">
                {projects.map((project, index) => (
                  <ProjectEntry
                    key={project.number}
                    project={project}
                    index={index}
                    openProject={openProject}
                    setOpenProject={setOpenProject}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg border border-dashed border-[#c9bda7] bg-[#eee5d5]/35 px-6 py-20 text-center"
            >
              <div className="pointer-events-none absolute left-5 top-5 font-mono text-[8px] leading-5 tracking-widest text-[#b09e84]">
                RECORD STATUS
                <br />
                NO PUBLIC ENTRIES
              </div>

              <div className="pointer-events-none absolute bottom-5 right-5 font-mono text-[8px] leading-5 tracking-widest text-[#b09e84]">
                ARCHIVE
                <br />
                CYBER / 00
              </div>

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9bda7] bg-[#e9dfcc]">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#9b7847]"
                >
                  <path
                    d="M20 6L30 10V17C30 23 25.5 27.5 20 30C14.5 27.5 10 23 10 17V10L20 6Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 18L18.5 21.5L25 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="font-mono text-[9px] tracking-[0.25em] text-[#9b7847]">
                FIELD NOTE
              </p>

              <h3 className="mt-3 font-cinzel text-2xl">
                The archive is still growing.
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#756957]">
                No cybersecurity projects are publicly documented yet. This
                directory is reserved for future security experiments,
                investigations, and systems.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 border border-[#c9bda7] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b8a487]" />
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#8a755b]">
                  STATUS / IN PROGRESS
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
