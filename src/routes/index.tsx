import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";
import { LocationCTA } from "@/components/LocationCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oakbank Car Wash Cinematic Touchless & Self-Serve Wash in Oakbank, MB" },
      {
        name: "description",
        content:
          "Premium 24/7 car wash in Oakbank, Manitoba. Touchless automatic, spot-free rinse, self-serve bays, and unlimited memberships. 643 Main St.",
      },
      { property: "og:title", content: "Oakbank Car Wash Where Clean Meets Cinematic." },
      { property: "og:description", content: "Touchless wash, spot-free rinse, and unlimited membership in Oakbank, MB." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout showIntro>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Technology />
      <Pricing />
      <Testimonials />
      <LocationCTA />
    </Layout>
  );
}
