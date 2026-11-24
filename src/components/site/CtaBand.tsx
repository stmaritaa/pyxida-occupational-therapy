import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

/** Repeating closing panel: one call to action, two ways to take it. */
export function CtaBand({
  title = "Το πρώτο βήμα είναι μια κουβέντα.",
  text = "Κλείστε μια δωρεάν 15λεπτη γνωριμία. Χωρίς δέσμευση — μόνο ειλικρινείς απαντήσεις για το παιδί σας.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-14 text-center shadow-glow md:px-16 md:py-18">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 animate-blob bg-blush/50 blur-xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 animate-blob bg-sun/40 blur-xl [animation-delay:-5s]" />
          <img
            src={images.logo}
            alt=""
            className="relative mx-auto h-16 w-16 animate-needle rounded-full bg-card/70 p-2"
          />
          <h2 className="relative mt-5 text-3xl font-medium leading-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">{text}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="blush" size="xl">
              <Link to="/contact">
                Κλείσιμο ραντεβού <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={site.phoneHref}>Καλέστε μας</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
