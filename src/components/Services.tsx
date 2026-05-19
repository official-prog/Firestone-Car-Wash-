import { Reveal } from "./Reveal";
import { Car, Wrench, Droplets, Sparkles, CircleDot, Wind, GlassWater } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const services = [
  { icon: Car, name: "100% Hand Wash", time: "Full service", desc: "Every inch washed by hand — no machines, no brushes. Just expert hands and premium product." },
  { icon: Sparkles, name: "Hand Wax", time: "Add-on", desc: "Hot carnauba wax applied by hand for a glass-deep gloss and weeks of lasting shine." },
  { icon: Wrench, name: "Leather Treatments", time: "Interior", desc: "Deep-condition and protect all leather surfaces. Restore softness and prevent cracking." },
  { icon: Wind, name: "Exterior Dressing", time: "Add-on", desc: "Premium dressing applied to all exterior trim, leaving a rich, lasting finish." },
  { icon: CircleDot, name: "Tire Dressing", time: "Add-on", desc: "High-gloss tire dressing that brings rubber back to factory black and protects against cracking." },
  { icon: Droplets, name: "Mat Wash", time: "Interior", desc: "Floor mats deep-cleaned, scrubbed, and dried — removed dirt and restored to like-new condition." },
  { icon: GlassWater, name: "Wheel Polish & Cleaning", time: "Detail", desc: "Targeted wheel cleaner strips brake dust and road grime. Hand-polished to a mirror finish." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 02 Services</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-balance">
            Hand-crafted for <span className="neon-text">obsessive</span> detail.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Seven premium hand services — every detail done by expert hands.
            Your car treated with the care it deserves.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <article className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 ease-cinematic hover:border-primary/40 hover:-translate-y-1">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-start justify-between">
                  <div className="glass rounded-xl p-3">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.time}</span>
                </div>
                <h3 className="relative mt-8 font-display text-2xl font-semibold">{s.name}</h3>
                <p className="relative mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="relative mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Available now <span className="h-px w-8 bg-primary" />
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={services.length * 0.04}>
            <Link
              to="/services"
              className="relative flex h-full min-h-[220px] items-end justify-between rounded-2xl border border-primary/40 bg-primary text-primary-foreground p-7 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity ease-cinematic duration-700" />
              <span className="relative font-display text-3xl font-bold tracking-tight">All<br />Services</span>
              <span className="relative text-xs uppercase tracking-[0.3em]">View →</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
