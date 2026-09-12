"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";

const TransitionContext = createContext<{
  beginTransition: () => void;
}>({
  beginTransition: () => undefined,
});

export function useTransition() {
  return useContext(TransitionContext);
}

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const beginTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 650);

    return () => window.clearTimeout(timeout);
  }, [isTransitioning]);

  return (
    <TransitionContext.Provider value={{ beginTransition }}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.32,
              ease: "easeInOut",
            }}
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#e9dfcc]"
          >
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#8a755b]">
                FIELD JOURNAL
              </p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-2xl text-[#b8a487]">
                  ✦
                </span>

                <span className="h-px w-16 bg-[#c9bda7]" />
              </div>

              <p className="mt-4 font-mono text-[10px] tracking-widest text-[#9b7847]">
                TURNING THE PAGE
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}