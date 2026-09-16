"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "/": "FIELD JOURNAL",
  "/projects": "ARCHIVE",
  "/learning": "FIELD NOTES",
  "/journey": "EXPEDITION LOG",
  "/contact": "CORRESPONDENCE",
};

export default function JournalProgress() {
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  const markerY = useTransform(
    progress,
    [0, 1],
    [0, 108]
  );

  const label = labels[pathname] ?? "FIELD JOURNAL";

  const pageNumber =
  pathname === "/"
    ? "01"
    : pathname === "/projects"
      ? "02"
      : pathname === "/learning"
        ? "03"
        : pathname === "/journey"
          ? "04"
          : "05";

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex items-center gap-3">
        <span className="-rotate-90 whitespace-nowrap font-mono text-[9px] tracking-[0.22em] text-[#8a755b]/80">
          {label}
        </span>

        <div className="relative h-32 w-px bg-[#c9bda7]">
          <motion.div
            style={{ y: markerY }}
            className="absolute -left-[3px] top-0 h-[7px] w-[7px] rotate-45 bg-[#9b7847] shadow-sm"
          />
        </div>

        <motion.span
          className="font-mono text-[9px] text-[#8a755b]"
          style={{ opacity: 0.85 }}
        >
          {pageNumber}
        </motion.span>
      </div>
    </div>
  );
}