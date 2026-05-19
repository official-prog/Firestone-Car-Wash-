import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import tireImg from "@/assets/tire-shine.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 01 About</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-balance">
            A neighborhood wash, built for <span className="neon-text italic">obsessives.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Oakbank Car Wash is a modern self-serve and automatic facility built to
            commercial-grade standards. We obsess over water purity, brush quality, and
            wash times so you get a true detail-shop finish in five minutes flat.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-4xl font-bold neon-text">12k+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Annual washes</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold neon-text">4.9★</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Google rating</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold neon-text">6</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Self-serve bays</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold neon-text">2017</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Serving Oakbank since</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div style={{ y }} className="relative">
            <div className="glass overflow-hidden rounded-3xl">
              <img
                src={tireImg}
                alt="Macro shot of glossy clean chrome wheel with water droplets"
                width={1400}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="glass-strong absolute -bottom-6 left-6 max-w-xs rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Detail-grade</p>
              <h3 className="mt-2 font-display text-lg font-semibold">Showroom finish, drive-thru speed.</h3>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
