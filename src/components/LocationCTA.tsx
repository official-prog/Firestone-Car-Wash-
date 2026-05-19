import { Reveal } from "./Reveal";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function LocationCTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 md:p-16">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
          <div
            className="pointer-events-none absolute -inset-px"
            style={{ background: "radial-gradient(ellipse at top right, oklch(0.82 0.16 210 / 0.18), transparent 60%)" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">/ 06 Location</p>
              <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-[-0.04em] text-balance">
                Pull in, drive out <span className="neon-text italic">cinematic.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Located in the heart of Oakbank, just minutes off Highway 15. Open every
                hour, every day of the year.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-xl p-5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold">Address</p>
                  <p className="text-sm text-muted-foreground">643 Main St<br />Oakbank, MB R0E 1J0</p>
                </div>
                <div className="glass rounded-xl p-5">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold">Hours</p>
                  <p className="text-sm text-muted-foreground">Open 24 / 7 / 365<br />Members enter via app</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+12044441010"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> (204) 444-1010
                </a>
                <a
                  href="https://maps.google.com/?q=643+Main+St+Oakbank+MB"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/60 text-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors ease-cinematic"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass relative aspect-square overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.82 0.16 210 / 0.15), transparent 70%), repeating-linear-gradient(45deg, transparent, transparent 30px, oklch(1 0 0 / 0.02) 30px, oklch(1 0 0 / 0.02) 31px)" }}
                />
                {/* fake animated route */}
                <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                  <defs>
                    <linearGradient id="route" x1="0" x2="1">
                      <stop offset="0" stopColor="oklch(0.82 0.16 210)" />
                      <stop offset="1" stopColor="oklch(0.70 0.18 240)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 30 350 Q 120 280 180 220 T 370 60"
                    stroke="url(#route)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 6"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="-48" dur="2s" repeatCount="indefinite" />
                  </path>
                  <circle cx="30" cy="350" r="6" fill="oklch(0.82 0.16 210)" />
                  <circle cx="370" cy="60" r="8" fill="oklch(0.82 0.16 210)">
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="370" cy="60" r="14" fill="none" stroke="oklch(0.82 0.16 210)" strokeOpacity="0.4">
                    <animate attributeName="r" values="14;30;14" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="absolute bottom-6 left-6 glass-strong rounded-xl p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Now arriving</p>
                  <p className="mt-1 font-display text-lg font-semibold">643 Main St</p>
                  <p className="text-xs text-muted-foreground">Oakbank, Manitoba</p>
                </div>
                <div className="absolute top-6 right-6 glass-strong rounded-xl px-3 py-2 text-[10px] uppercase tracking-wider">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2" style={{ animation: "pulse-glow 1.6s ease-in-out infinite" }} />
                  Live · Open Now
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-border p-8">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-balance">
              Ready to see your car <span className="neon-text">cinematic?</span>
            </h3>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors ease-cinematic"
            >
              Start your membership →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
