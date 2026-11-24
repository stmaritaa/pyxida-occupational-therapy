import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  image: string;
  imageAlt: string;
  imagePos?: string;
  badge?: ReactNode;
  children?: ReactNode;
};

/** Shared inner-page opener: pastel wash, headline, lead, one photo. */
export function PageHero({ eyebrow, title, lead, image, imageAlt, imagePos, badge, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-hero pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute -left-16 top-32 h-64 w-64 animate-blob bg-mint/40 blur-2xl" />
      <div className="pointer-events-none absolute right-8 top-24 h-40 w-40 animate-blob bg-blush/50 blur-2xl [animation-delay:-6s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-mint-deep backdrop-blur">
              <img src="/favicon.png" alt="" className="h-5 w-5 animate-needle" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          </Reveal>
          {children && (
            <Reveal delay={300}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-0 translate-x-4 translate-y-4 animate-blob rounded-[3rem] bg-blush/60" />
            <img
              src={image}
              alt={imageAlt}
              className={cn("relative h-full w-full rounded-[3rem] object-cover shadow-soft", imagePos)}
            />
            {badge && (
              <div className="absolute -left-5 bottom-10 animate-float rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-soft backdrop-blur">
                {badge}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
