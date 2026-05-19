import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

const promos = [
  { tag: "Limited", title: "First month free", desc: "Try any unlimited plan free for 30 days. Cancel anytime keep the shine.", cta: "Activate", code: "CINEMATIC30" },
  { tag: "Winter", title: "Salt season survival", desc: "Triple wash credits when you buy a 10-pack of self-serve tokens. Beat the road salt.", cta: "Buy tokens", code: "SALT3X" },
  { tag: "Referral", title: "Bring a friend, both win", desc: "Refer a friend to any membership tier you each get a month free.", cta: "Get referral link", code: "FRIENDOB" },
  { tag: "New", title: "Ceramic shield upgrade", desc: "Add ceramic shield to any Signature membership for $10/mo. Hydrophobic gloss for weeks.", cta: "Upgrade", code: "SHIELD10" },
];

export const Route = createFileRoute("/promotions")({
  head: () => ({
    meta: [
      { title: "Promotions Oakbank Car Wash" },
      { name: "description", content: "Limited-time wash deals, referral rewards, and seasonal membership offers." },
      { property: "og:title", content: "Promotions Oakbank Car Wash" },
      { property: "og:description", content: "First month free. Salt-season tokens. Referral rewards." },
    ],
  }),
  component: PromotionsPage,
});

function PromotionsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Promotions"
        title={<>Current <span className="neon-text italic">offers.</span></>}
        subtitle="Limited-time discounts, seasonal deals, and member-exclusive rewards."
      />
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-4 md:grid-cols-2">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="glass-strong group relative h-full overflow-hidden rounded-3xl p-8 hover:border-primary/40 transition-all ease-cinematic hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.desc}</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <code className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary">{p.code}</code>
                  <Link to="/membership" className="text-xs uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors">
                    {p.cta} →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
