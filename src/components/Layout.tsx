import { useState, type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { Intro } from "./Intro";
import { motion, useScroll, useSpring } from "framer-motion";

export function Layout({ children, showIntro = false }: { children: ReactNode; showIntro?: boolean }) {
  const [ready, setReady] = useState(!showIntro);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <>
      <SmoothScroll />
      {showIntro && <Intro onDone={() => setReady(true)} />}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-primary via-accent to-primary"
      />
      <Nav />
      <main className={`relative ${ready ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
