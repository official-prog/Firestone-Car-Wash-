import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Oakbank Car Wash" },
      { name: "description", content: "Community-trusted, commercial-grade car wash in Oakbank, MB. Serving locals since 2017." },
      { property: "og:title", content: "About Oakbank Car Wash" },
      { property: "og:description", content: "Detail-shop finish, drive-thru speed. Built for Oakbank." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ About"
        title={<>A neighborhood wash, <span className="neon-text italic">obsessed</span> with clean.</>}
        subtitle="Born in Oakbank, built for Manitoba winters. Commercial-grade equipment, neighborhood pricing, and a team that genuinely cares what your car looks like when you drive away."
      />
      <About />
      <Testimonials />
    </Layout>
  );
}
