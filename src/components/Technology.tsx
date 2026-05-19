import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import waterImg from "@/assets/water-spray.jpg";
import tunnelImg from "@/assets/wash-tunnel.jpg";

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 04 Water & Technology</p>
          <h2 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-balance">
            Purified pressure.<br />
            <span className="neon-text italic">Spot-free</span> physics.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div style={{ y: y1 }} className="relative">
            <div className="glass overflow-hidden rounded-3xl">
              <img
                src={waterImg}
                alt="High pressure water jet hitting glossy black car paint"
                width={1600}
                height={1000}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="glass-strong absolute -bottom-6 -right-6 max-w-xs rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">RO Filtration</p>
              <h3 className="mt-2 font-display text-xl font-semibold">7-stage purified water</h3>
              <p className="mt-2 text-xs text-muted-foreground">Reverse osmosis strips minerals to under 5 ppm. Zero spots. Zero residue.</p>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="relative lg:mt-24">
            <div className="glass overflow-hidden rounded-3xl">
              <img
                src={tunnelImg}
                alt="White SUV exiting modern car wash tunnel with neon blue lighting"
                width={1600}
                height={1000}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="glass-strong absolute -top-6 -left-6 max-w-xs rounded-2xl p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Eco-Engineered</p>
              <h3 className="mt-2 font-display text-xl font-semibold">Water reclamation</h3>
              <p className="mt-2 text-xs text-muted-foreground">85% of process water is recycled on-site. Cleaner cars, lighter footprint.</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 grid gap-12 md:grid-cols-3">
          {[
            { stat: "1400", unit: "psi", label: "Touchless jet pressure" },
            { stat: "<5", unit: "ppm", label: "Mineral content, post-rinse" },
            { stat: "24/7", unit: "", label: "Open every day of the year" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-l border-primary/40 pl-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-6xl md:text-7xl font-bold tracking-tight neon-text">{s.stat}</span>
                  <span className="font-display text-2xl text-muted-foreground">{s.unit}</span>
                </div>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
