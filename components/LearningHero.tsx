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

export default function LearningHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.9, 1],
    [1, 0.98, 0.65, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.05]
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
      {/* Fantasy study background */}
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
            backgroundImage: "url('/learning-interior.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-[#182d38]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </motion.div>

      {/* Fade into parchment */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#e9dfcc] via-[#e9dfcc]/75 to-transparent" />

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
          <div className="max-w-3xl">
            <motion.div
              variants={item}
              className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-200/80"
            >
              <span className="text-sky-200">✦</span>
              <span>LEARNING // FIELD NOTES</span>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-4 font-mono text-sm text-stone-100/80"
            >
              the things I&apos;m trying to understand
            </motion.p>

            <motion.h1
              variants={item}
              className="font-cinzel text-5xl font-medium leading-[0.95] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl"
            >
              Always
              <br />
              <span className="text-stone-200">learning.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl font-mono text-lg leading-relaxed text-stone-100 drop-shadow sm:text-xl"
            >
              Build it. Break it. Understand it.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl leading-relaxed text-stone-200/85 drop-shadow"
            >
              I&apos;m less interested in collecting technologies
              and more interested in understanding the ideas
              underneath them.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-4 font-mono text-xs text-stone-200/70"
            >
              <span className="h-px w-12 bg-sky-200/50" />
              <span>KNOWLEDGE // IN PROGRESS</span>
            </motion.div>
          </div>
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