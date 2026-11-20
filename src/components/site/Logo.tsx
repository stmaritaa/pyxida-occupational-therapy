import { Link } from "@tanstack/react-router";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-3", className)} aria-label="Πυξίδα — αρχική">
      <img
        src={images.logo}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 transition-transform duration-700 group-hover:rotate-[25deg]"
      />
      <span className="leading-none">
        <span className="block font-brand text-2xl font-bold text-mint-deep">Πυξίδα</span>
        <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Παιδική Εργοθεραπεία
        </span>
      </span>
    </Link>
  );
}
