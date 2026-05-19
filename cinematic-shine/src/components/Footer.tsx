import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Firestone Car Wash</p>
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold text-balance">
              Where hands meet <span className="neon-text">perfection.</span>
            </h3>
            <p className="mt-6 max-w-md text-muted-foreground">
              Premium 100% hand wash in Los Angeles, CA. Hand wax, leather treatments,
              wheel polish, tire dressing, and much more — we treat your car like our own.
            </p>
            <div className="mt-6 flex gap-3">
              <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100069033878029" target="_blank" rel="noopener noreferrer" className="glass rounded-full p-3 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" />1950 Firestone Blvd.<br />Los Angeles, CA 90001</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" />310-400-6626</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" />Mon–Sun, 8am–6pm</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/services", "Services"],
                ["/membership", "Membership"],
                ["/fleet", "Fleet"],
                ["/promotions", "Promotions"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-foreground transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Firestone Car Wash. All rights reserved.</p>
          <p className="font-display tracking-[0.4em] uppercase text-primary/80">Hand Wash · Wax · Polish · Drive Clean</p>
        </div>
      </div>
    </footer>
  );
}
