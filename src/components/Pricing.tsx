import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const plans = [
  {
    name: "Basic Wash",
    price: 25,
    tag: "Essential clean",
    features: ["100% Hand Wash", "Interior Vacuum", "Window Cleaning", "Mat Wash"],
  },
  {
    name: "Full Detail",
    price: 65,
    tag: "Most popular",
    highlight: true,
    features: ["Everything in Basic", "Hand Wax", "Tire Dressing", "Exterior Dressing", "Wheel Polish & Cleaning"],
  },
  {
    name: "Premium Care",
    price: 120,
    tag: "Showroom finish",
    features: ["Everything in Full Detail", "Leather Treatments", "Dashboard & Console Wipe", "Door Jamb Cleaning", "Headlight Restoration"],
  },
];

export function Pricing() {
  return (
    <section className="relative py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 03 Membership</p>
              <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-balance">
                Unlimited shine,<br />on subscription.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Choose the package that fits your car. Every service done 100% by hand —
              because your vehicle deserves the best.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl p-8 transition-all ease-cinematic duration-500 hover:-translate-y-1 ${
                  p.highlight
                    ? "glass-strong border-primary/40 neon-glow"
                    : "glass hover:border-primary/30"
                }`}
              >
                {p.highlight && (
                  <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                    {p.tag}
                  </div>
                )}
                {!p.highlight && (
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.tag}</p>
                )}
                <h3 className="mt-8 font-display text-3xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-6xl font-bold tracking-tight">${p.price}</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/membership"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ease-cinematic ${
                    p.highlight
                      ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background"
                      : "border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  Choose {p.name}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
