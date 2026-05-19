import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Truck, Building2, Wrench, Calculator } from "lucide-react";

const perks = [
  { icon: Truck, title: "Fleet Volume Pricing", desc: "Discounted rates scaling from 5 to 500 vehicles. Single invoice, monthly billing." },
  { icon: Building2, title: "Corporate Accounts", desc: "Branded RFID tap cards for your drivers. Real-time wash reporting." },
  { icon: Wrench, title: "Custom Wash Programs", desc: "Tailored cycles for vans, work trucks, RVs, and trailers up to 10' tall." },
  { icon: Calculator, title: "Tax-Friendly Billing", desc: "Detailed monthly statements designed for accounting and expense reports." },
];

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet Services Oakbank Car Wash" },
      { name: "description", content: "Volume-priced fleet wash programs with corporate accounts, RFID access, and monthly billing." },
      { property: "og:title", content: "Fleet Services Oakbank Car Wash" },
      { property: "og:description", content: "Keep every vehicle in your fleet cinematic clean." },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Fleet"
        title={<>Every vehicle. <span className="neon-text italic">One account.</span></>}
        subtitle="From contractor pickups to delivery vans keep your fleet looking sharp without the paperwork."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
          Request fleet quote →
        </Link>
      </PageHeader>
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass group h-full rounded-2xl p-8 hover:border-primary/40 transition-all ease-cinematic">
                  <div className="glass inline-flex rounded-xl p-3">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
