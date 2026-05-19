import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LocationCTA } from "@/components/LocationCTA";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Oakbank Car Wash" },
      { name: "description", content: "Questions, fleet inquiries, or membership help? Reach the Oakbank Car Wash team." },
      { property: "og:title", content: "Contact Oakbank Car Wash" },
      { property: "og:description", content: "Call (204) 444-1010 or message us. Open 24/7 at 643 Main St." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Contact"
        title={<>Get in <span className="neon-text italic">touch.</span></>}
        subtitle="Membership help, fleet quotes, lost-and-found, or just to say hi we're around."
      />
      <section className="relative pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong rounded-3xl p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                <input id="name" required className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input id="email" type="email" required className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg transition-colors" />
              </div>
              <div>
                <label htmlFor="msg" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea id="msg" required rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg resize-none transition-colors" />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors ease-cinematic"
              >
                {sent ? "Sent we'll reply soon" : "Send message →"}
              </button>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Phone</p>
                <a href="tel:+12044441010" className="mt-2 block font-display text-3xl font-bold">(204) 444-1010</a>
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Email</p>
                <a href="mailto:hello@oakbankcarwash.ca" className="mt-2 block font-display text-2xl font-semibold">hello@oakbankcarwash.ca</a>
              </div>
              <div className="glass rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit</p>
                <p className="mt-2 font-display text-2xl font-semibold">643 Main St<br />Oakbank, MB R0E 1J0</p>
                <p className="mt-2 text-sm text-muted-foreground">Open 24 hours, every day.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <LocationCTA />
    </Layout>
  );
}
