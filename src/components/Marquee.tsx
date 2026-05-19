export function Marquee() {
  const items = ["100% Hand Wash", "Hand Wax", "Leather Treatments", "Exterior Dressing", "Tire Dressing", "Mat Wash", "Wheel Polish", "Interior Vacuum", "Window Cleaning"];
  return (
    <section className="relative overflow-hidden border-y border-border py-6">
      <div className="flex whitespace-nowrap" style={{ animation: "shimmer 30s linear infinite", animationName: "marquee" }}>
        <div className="flex animate-[marquee_28s_linear_infinite] gap-12 pr-12">
          {[...items, ...items].map((i, k) => (
            <span key={k} className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-muted-foreground/70">
              {i} <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
