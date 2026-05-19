import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/membership", label: "Membership" },
  { to: "/fleet", label: "Fleet" },
  { to: "/promotions", label: "Promotions" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ease-cinematic ${
          scrolled ? "glass-strong rounded-full px-4 py-2" : ""
        }`}
        style={{ width: scrolled ? "min(92%, 1100px)" : undefined }}
      >
        <Link to="/" className="group flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-sm border border-primary/60 rotate-45 group-hover:rotate-[60deg] transition-transform duration-700 ease-cinematic" />
            <div className="absolute inset-1 rounded-sm bg-gradient-to-br from-primary to-accent" />
          </div>
          <span className="font-display text-base font-bold tracking-tight">
            FIRESTONE<span className="text-primary">/</span>WASH
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {links.slice(1, 7).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-full text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            310-400-6626
          </Link>
          <Link
            to="/membership"
            className="relative overflow-hidden rounded-full bg-foreground text-background px-5 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-primary transition-colors ease-cinematic"
          >
            Join Unlimited
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="lg:hidden glass rounded-full p-2"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-4 top-20 glass-strong rounded-2xl p-6 z-50">
          <nav className="grid gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
