import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LocationCTA } from "@/components/LocationCTA";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Hours Oakbank Car Wash" },
      { name: "description", content: "643 Main St, Oakbank, MB. Open 24/7. Find us minutes off Highway 15." },
      { property: "og:title", content: "Find Us Oakbank Car Wash" },
      { property: "og:description", content: "Open 24/7 at 643 Main St, Oakbank, Manitoba." },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Location & Hours"
        title={<>643 Main St.<br /><span className="neon-text italic">Open 24/7.</span></>}
        subtitle="Minutes off Highway 15. Six self-serve bays, two automatic tunnels, free vacuums, and a purified water refill station."
      />
      <LocationCTA />
    </Layout>
  );
}
