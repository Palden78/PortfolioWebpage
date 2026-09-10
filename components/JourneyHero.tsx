"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
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

export default function JourneyHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.8, 1],
    [1, 0.95, 0.45, 0],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -70],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.9, 0],
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Fantasy landscape */}
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
            backgroundImage: "url('/journey-landscape.png')",
          }}
        />

        {/* Readability layer */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/5 to-transparent" />

        {/* Very subtle atmospheric haze */}
        <div className="absolute inset-0 bg-[#493c2c]/10" />
      </motion.div>

      {/* Fade scenery into parchment */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#e9dfcc] via-[#e9dfcc]/75 to-transparent" />

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
              className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-100/80"
            >
              <span className="text-amber-200">✦</span>
              <span>JOURNEY // ARCHIVE</span>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-4 font-mono text-sm text-stone-100/80"
            >
              field notes from the road
            </motion.p>

            <motion.h1
              variants={item}
              className="font-cinzel text-5xl font-medium leading-[0.95] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl"
            >
              The
              <br />
              <span className="text-stone-200">
                Journey.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-100 drop-shadow sm:text-xl"
            >
              Things I&apos;ve learned, experienced, struggled with,
              and thought about along the way.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl leading-relaxed text-stone-200/85 drop-shadow"
            >
              Not everything worth remembering belongs in a
              project README.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-4 font-mono text-xs tracking-widest text-white/70"
            >
              <span>FIELD NOTES</span>
              <span className="text-white/30">×</span>
              <span>REFLECTIONS</span>
              <span className="text-white/30">×</span>
              <span>EXPERIENCES</span>
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
          <span>EXPLORE</span>

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