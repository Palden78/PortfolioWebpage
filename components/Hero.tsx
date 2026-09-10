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

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // The landscape slowly disappears as we scroll.
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.85, 1],
    [1, 0.92, 0.45, 0]
  );

  // Slight cinematic zoom while leaving the hero.
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  // Hero content gently moves upward.
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  // Content becomes less prominent before the next section.
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 0.9, 0]
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

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
            backgroundImage: "url('/hero-landscape.png')",
          }}
        />

        {/* Dark cinematic veil for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Slight warm atmospheric tint */}
        <div className="absolute inset-0 bg-[#493c2c]/10" />

        {/* Stronger readability around the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </motion.div>

      {/* =========================================================
          TRANSITION INTO THE NEXT SECTION
      ========================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#e9dfcc] via-[#e9dfcc]/70 to-transparent" />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

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
          className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* =====================================================
              LEFT
          ====================================================== */}

          <div>
            <motion.div
              variants={item}
              className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-stone-200/80"
            >
              <span className="text-amber-200">✦</span>
              <span>ARCHIVE // 001</span>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-4 font-mono text-sm text-stone-100/80"
            >
              hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="font-cinzel text-5xl font-medium leading-[0.95] tracking-tight text-white drop-shadow-lg sm:text-7xl lg:text-8xl"
            >
              Palden
              <br />
              <span className="text-stone-200">
                Tamang.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl font-mono text-lg leading-relaxed text-stone-100 drop-shadow sm:text-xl"
            >
              I build things I want to understand.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl leading-relaxed text-stone-200/85 drop-shadow"
            >
              Software engineer interested in backend systems,
              system design, cybersecurity, and the strange problems
              that appear underneath seemingly simple software.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/projects"
                className="group rounded-md bg-[#f2e5ca] px-5 py-3 font-mono text-sm font-medium text-[#3b3025] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                View my work
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/40 bg-black/10 px-5 py-3 font-mono text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-black/20"
              >
                GitHub
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              TERMINAL
          ====================================================== */}

          <motion.div
            variants={item}
            className="relative"
          >
            <div className="absolute -left-6 top-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent lg:block" />

            <div className="overflow-hidden rounded-xl border border-white/30 bg-[#171614]/55 shadow-2xl shadow-black/30 backdrop-blur-md">
              {/* Terminal header */}

              <div className="flex items-center justify-between border-b border-white/15 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                </div>

                <span className="font-mono text-[10px] tracking-widest text-white/50">
                  /home/palden
                </span>
              </div>

              {/* Terminal body */}

              <div className="min-h-[340px] p-6 font-mono text-sm leading-7">
                <div className="text-white/60">
                  <span className="text-amber-200/80">
                    palden@archive
                  </span>
                  <span>:</span>
                  <span>~</span>
                  <span>$</span>{" "}
                  <span className="text-white/90">
                    whoami
                  </span>
                </div>

                <div className="mt-1 text-white/75">
                  palden tamang
                </div>

                <div className="mt-6 text-white/60">
                  <span className="text-amber-200/80">
                    palden@archive
                  </span>
                  <span>:</span>
                  <span>~</span>
                  <span>$</span>{" "}
                  <span className="text-white/90">
                    ./about
                  </span>
                </div>

                <div className="mt-2 space-y-1 text-white/65">
                  <p>
                    <span className="text-white/90">role</span>
                    <span className="text-white/35">
                      {" "}
                      ........{" "}
                    </span>
                    software engineer
                  </p>

                  <p>
                    <span className="text-white/90">focus</span>
                    <span className="text-white/35">
                      {" "}
                      .......{" "}
                    </span>
                    backend / systems
                  </p>

                  <p>
                    <span className="text-white/90">
                      interest
                    </span>
                    <span className="text-white/35">
                      {" "}
                      .....{" "}
                    </span>
                    cybersecurity
                  </p>

                  <p>
                    <span className="text-white/90">status</span>
                    <span className="text-white/35">
                      {" "}
                      ......{" "}
                    </span>
                    learning
                  </p>
                </div>

                <div className="mt-6 text-white/60">
                  <span className="text-amber-200/80">
                    palden@archive
                  </span>
                  <span>:</span>
                  <span>~</span>
                  <span>$</span>{" "}
                  <span className="text-white/90">
                    ./current-project
                  </span>
                </div>

                <div className="mt-1 text-white/75">
                  building systems to understand systems
                  <span className="ml-1 animate-pulse text-white">
                    ▋
                  </span>
                </div>
              </div>

              {/* Terminal footer */}

              <div className="border-t border-white/15 px-4 py-2">
                <div className="flex justify-between font-mono text-[10px] text-white/40">
                  <span>SESSION_001</span>
                  <span>ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

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