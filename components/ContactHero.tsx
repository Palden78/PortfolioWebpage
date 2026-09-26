"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function ContactHero() {
  const { scrollYProgress } = useScroll();

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.35, 0.55],
    [1, 0.98, 0.65, 0]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, 1.06]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.35],
    [1, 1, 0]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -35]
  );

  return (
    <section className="relative min-h-[125vh] overflow-hidden">
      {/* ---------------------------------------------------------------- */}
      {/* Background image                                                  */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        className="fixed inset-0 -z-10 origin-center"
      >
        <img
          src="/converted-contact-castle.webp"
          alt=""
          className="h-full w-full object-cover"
        />

        {/* Natural darkening for readable text */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom transition into parchment */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#e9dfcc] via-[#e9dfcc]/30 to-transparent" />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Hero content                                                      */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className="relative z-10 flex min-h-screen items-end px-6 pb-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/70">
              FIELD JOURNAL / CORRESPONDENCE
            </p>

            <h1 className="mt-5 font-cinzel text-5xl leading-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
              Send a message.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Whether you want to talk about software, systems,
              cybersecurity, or just something interesting you're
              building, I'd be happy to hear from you.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-white/50" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-white/70">
                OPEN CHANNEL
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* Scroll indicator                                                   */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-[8px] tracking-[0.25em] text-white/60">
            SCROLL TO CORRESPONDENCE
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}