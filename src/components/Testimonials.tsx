import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Carlos R.", role: "Local · Los Angeles", quote: "Best hand wash in LA. My BMW came out spotless — no swirls, no streaks. The leather treatment made my interior feel brand new.", rating: 5 },
  { name: "Michelle T.", role: "Regular Customer", quote: "I've tried every car wash on Firestone Blvd — nothing comes close. 100% hand wash means they actually care about your car.", rating: 5 },
  { name: "David L.", role: "Fleet Owner", quote: "We bring our entire company fleet here. Pricing is fair, every car comes back looking showroom-ready. Highly recommend.", rating: 5 },
  { name: "Ana G.", role: "Loyal Customer", quote: "The wheel polish and tire dressing are unreal. My rims look better than when I bought the car. Won't go anywhere else.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 05 Drivers</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] text-balance">
            Loved by the<br />locals who <span className="neon-text italic">drive by.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-cinematic hover:border-primary/40 hover:-translate-y-1">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl md:text-2xl leading-snug tracking-tight text-balance">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
