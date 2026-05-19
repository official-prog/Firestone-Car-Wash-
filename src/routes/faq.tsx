import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Are you really open 24 hours?", a: "Yes. Every bay and the automatic tunnel run 24/7/365. Members enter via tap card or the mobile app." },
  { q: "Is the automatic wash safe for matte and ceramic-coated paint?", a: "100%. Our touchless system uses zero brushes and high-pressure pre-soak, foam, and rinse completely safe for matte, vinyl wrap, and ceramic." },
  { q: "Do you take credit, debit, or cash?", a: "All major credit, debit, tap, and cash in the self-serve bays. Memberships are billed monthly to your card." },
  { q: "What's included in a membership?", a: "Unlimited washes at your plan tier, free vacuum access, member-only entry lane, and discounts on add-on services." },
  { q: "Can I cancel my membership anytime?", a: "Yes no contracts, no cancellation fees. Cancel in the app or call us and it's done before your next billing date." },
  { q: "Do you offer fleet pricing?", a: "Absolutely. Email fleet@oakbankcarwash.ca or visit our Fleet page for volume pricing and dedicated account management." },
  { q: "What's spot-free rinse?", a: "A final pass of reverse-osmosis purified water (under 5 ppm mineral content) that dries without leaving any water spots or streaks." },
  { q: "Where exactly are you?", a: "643 Main St, Oakbank, Manitoba about 25 minutes east of Winnipeg, just off Highway 15." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ Oakbank Car Wash" },
      { name: "description", content: "Answers to common questions about hours, memberships, payments, and wash safety." },
      { property: "og:title", content: "FAQ Oakbank Car Wash" },
      { property: "og:description", content: "Everything you need to know about our 24/7 touchless wash." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHeader
        eyebrow="/ FAQ"
        title={<>Questions, <span className="neon-text italic">answered.</span></>}
        subtitle="Can't find what you're looking for? Call us at (204) 444-1010 we pick up."
      />
      <section className="relative pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="glass group w-full overflow-hidden rounded-2xl p-6 text-left transition-all hover:border-primary/40 ease-cinematic"
                  aria-expanded={open === i}
                >
                  <div className="flex items-center justify-between gap-6">
                    <h3 className="font-display text-lg md:text-xl font-semibold">{f.q}</h3>
                    <span className="shrink-0 glass rounded-full p-2 text-primary">
                      {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </div>
                  <div
                    className="grid transition-all duration-500 ease-cinematic"
                    style={{ gridTemplateRows: open === i ? "1fr" : "0fr", marginTop: open === i ? 16 : 0 }}
                  >
                    <div className="overflow-hidden text-muted-foreground">{f.a}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
