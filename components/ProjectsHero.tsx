"use client";

import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ProjectsHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.85, 1],
    [1, 0.95, 0.5, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -70]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.9, 0]
  );

  return (
    <section
        ref={heroRef}
        className="relative min-h-[125vh] overflow-hidden"
    >
      {/* Castle interior */}
      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/converted-projects-interior.webp')",
          }}
        />

        {/* Cinematic readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
      </motion.div>

      {/* Fade image into parchment */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#e9dfcc] via-[#e9dfcc]/75 to-transparent" />

      {/* Hero content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 flex min-h-screen items-center px-6 pb-16 pt-28"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-6xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-[0.25em] text-stone-200/80"
          >
            PROJECTS // ARCHIVE
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex items-center gap-4"
          >
            <span className="text-3xl text-amber-200/80">✦</span>

            <div className="h-px w-24 bg-white/30" />
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-4xl font-cinzel text-5xl font-medium leading-[0.95] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl"
          >
            Things I&apos;ve
            <br />
            built.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl font-mono text-base leading-relaxed text-stone-100/85 drop-shadow sm:text-lg"
          >
            Experiments, systems, and projects built to understand
            how things work beneath the surface.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-white/70">
          <span>SCROLL</span>

          <motion.span
            animate={{
              y: [0, 6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}