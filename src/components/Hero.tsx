import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Droplets, Sparkles, Wind, ShieldCheck } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const features = [
  { icon: Wind, title: "100% Hand Wash", desc: "Every inch by hand." },
  { icon: Droplets, title: "Hand Wax", desc: "Deep shine, long-lasting." },
  { icon: Sparkles, title: "Wheel Polish", desc: "Factory-clean wheels." },
  { icon: ShieldCheck, title: "Leather Care", desc: "Nourish & protect." },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden pt-24">
      {/* car backdrop */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroCar}
          alt="Glossy black SUV emerging from darkness with neon cyan rim lighting and slow-motion water droplets"
          className="absolute inset-0 h-full w-full object-cover mask-fade-b"
          width={1920}
          height={1280}
        />
      </motion.div>

      {/* gradients & atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 mask-fade-b" />

      {/* scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden">
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ animation: "scan 6s linear infinite" }}
        />
      </div>

      <motion.div style={{ opacity: fade }} className="relative mx-auto flex min-h-[80dvh] max-w-7xl flex-col justify-end px-6 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
          >
            <span className="h-px w-12 bg-primary" />
            1950 Firestone Blvd · Los Angeles, CA 90001
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-6 font-display text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-balance"
          >
            Where Hands<br />Meet <span className="neon-text text-glow italic">Perfection.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            100% hand wash experience — hand wax, leather treatments, wheel polish,
            tire dressing, and much more. Your car treated like our own.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/services"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-primary ease-cinematic"
            >
              Wash Packages
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/location"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-primary/40 transition-colors"
            >
              Find Location
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors ease-cinematic"
            >
              Membership Plans
            </Link>
          </motion.div>
        </div>

        {/* floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass group relative overflow-hidden rounded-xl p-5 hover:border-primary/40 transition-all ease-cinematic"
              style={{ animation: `float-y 6s ease-in-out ${i * 0.4}s infinite` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <f.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-display text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span style={{ animation: "pulse-glow 2s ease-in-out infinite" }}>Scroll</span>
      </div>
    </section>
  );
}
