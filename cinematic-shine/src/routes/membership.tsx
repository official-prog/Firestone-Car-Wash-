import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Pricing } from "@/components/Pricing";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Oakbank Car Wash" },
      { name: "description", content: "Unlimited wash memberships from $19/month. Tap-to-enter, cancel anytime." },
      { property: "og:title", content: "Unlimited Memberships Oakbank Car Wash" },
      { property: "og:description", content: "Wash as often as you want. Essential, Signature, and Cinematic plans." },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="/ Membership"
        title={<>Unlimited shine,<br />on <span className="neon-text italic">subscription.</span></>}
        subtitle="One tap to enter. Cancel anytime. Your car, always cinematic."
      />
      <Pricing />
    </Layout>
  );
}
