"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function InspectPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md border border-[#c9bda7] bg-[#e9dfcc]/85 px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-[#806f59] shadow-sm backdrop-blur-sm transition-colors hover:border-[#9b7847] hover:text-[#6d512e]"
      >
        {open ? "CLOSE INSPECT" : "INSPECT"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute bottom-12 left-0 w-72 rounded-lg border border-[#c9bda7] bg-[#f2e9da]/95 p-5 font-mono text-[10px] text-[#665846] shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-[#c9bda7] pb-3">
              <span className="tracking-[0.2em] text-[#9b7847]">
                PAGE_INSPECT
              </span>

              <span className="text-[#b8a487]">
                ✦
              </span>
            </div>

            <div className="mt-4 space-y-2 leading-relaxed">
              <p>
                <span className="text-[#3b3025]">
                  framework
                </span>{" "}
                .... Next.js
              </p>

              <p>
                <span className="text-[#3b3025]">
                  interface
                </span>{" "}
                .... React
              </p>

              <p>
                <span className="text-[#3b3025]">
                  motion
                </span>{" "}
                ........ Motion
              </p>

              <p>
                <span className="text-[#3b3025]">
                  theme
                </span>{" "}
                ......... field journal
              </p>

              <p>
                <span className="text-[#3b3025]">
                  architecture
                </span>{" "}
                .. static
              </p>

              <p>
                <span className="text-[#3b3025]">
                  backend
                </span>{" "}
                ....... none
              </p>
            </div>

            <div className="mt-4 border-t border-[#c9bda7] pt-3 text-[#8a755b]">
              built to understand how things work.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}