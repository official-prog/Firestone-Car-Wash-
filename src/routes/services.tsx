import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Oakbank Car Wash" },
      { name: "description", content: "Automatic touchless wash, self-serve bays, spot-free rinse, wax & protect, tire cleaner, and vacuum stations." },
      { property: "og:title", content: "Services Oakbank Car Wash" },
      { property: "og:description", content: "Seven precision wash services. Open 24/7 in Oakbank, MB." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Services"
        title={<>Seven services.<br />One <span className="neon-text italic">cinematic</span> finish.</>}
        subtitle="Engineered wash programs for daily commuters, weekend obsessives, and entire fleets."
      />
      <Services />
    </Layout>
  );
}
