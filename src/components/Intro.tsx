import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Hand Wash.", "Wax.", "Polish.", "Drive Clean."];

export function Intro({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("ob_intro")) {
      setShow(false);
      onDone();
      return;
    }
    const interval = setInterval(() => {
      setI((v) => {
        if (v >= words.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            sessionStorage.setItem("ob_intro", "1");
            onDone();
          }, 700);
          return v;
        }
        return v + 1;
      });
    }, 520);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* drops */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, k) => (
              <span
                key={k}
                className="absolute top-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent"
                style={{
                  left: `${(k * 97) % 100}%`,
                  height: `${40 + (k * 13) % 60}px`,
                  animation: `drop ${1.5 + (k % 5) * 0.4}s linear ${(k % 8) * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

          <div className="relative text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-primary/80">Firestone Car Wash</p>
            <div className="relative h-[1.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={i}
                  initial={{ y: "100%", opacity: 0, filter: "blur(12px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(12px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-6xl md:text-8xl font-bold neon-text text-glow"
                >
                  {words[i]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
