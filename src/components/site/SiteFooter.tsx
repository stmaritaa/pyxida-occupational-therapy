import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-mint-soft">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-blob bg-blush/40 blur-2xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">
            Εργοθεραπεία για παιδιά, μέσα από το παιχνίδι. Βοηθάμε κάθε παιδί να βρει τη δική του πορεία — με
            υπομονή, γνώση και πολλή αγάπη.
          </p>
          <p className="mt-6 font-display text-xl italic text-mint-deep">🧭 {site.tagline}.</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground">Σελίδες</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Αρχική</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Επικοινωνία & ραντεβού</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground">Επικοινωνία</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li><a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4" />{site.email}</a></li>
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{site.address}</li>
            <li><a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Instagram className="h-4 w-4" />{site.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border/70 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Πυξίδα — Παιδική Εργοθεραπεία
      </div>
    </footer>
  );
}
