import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink =
    "relative text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-blush after:transition-all hover:after:w-full";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 sm:px-6",
          scrolled && "mx-3 border border-border bg-card/80 shadow-soft backdrop-blur-xl sm:mx-auto",
        )}
      >
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={navLink} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground after:w-full" }}>
            Αρχική
          </Link>
          <Link to="/contact" className={navLink} activeProps={{ className: "text-foreground after:w-full" }}>
            Επικοινωνία
          </Link>
          <a href={site.phoneHref} className={cn(navLink, "inline-flex items-center gap-2")}>
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Κλείστε γνωριμία</Link>
          </Button>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full bg-mint-soft text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "mx-3 mt-2 overflow-hidden rounded-3xl border border-border bg-card/95 shadow-soft backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 p-4">
          <Link to="/" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold hover:bg-mint-soft">
            Αρχική
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold hover:bg-mint-soft">
            Επικοινωνία
          </Link>
          <a href={site.phoneHref} className="rounded-2xl px-4 py-3 font-semibold hover:bg-mint-soft">
            {site.phone}
          </a>
          <Button asChild variant="hero" size="lg" className="mt-2">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Κλείστε δωρεάν γνωριμία
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
