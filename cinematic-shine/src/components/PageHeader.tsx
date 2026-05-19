import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 mask-fade-b" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl md:text-8xl font-bold tracking-[-0.04em] text-balance leading-[0.95]">
            {title}
          </h1>
          {subtitle && <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
