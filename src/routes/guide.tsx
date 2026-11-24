import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { faqGroups, firstVisitChecklist, startingSteps } from "@/lib/guide.data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Οδηγός για γονείς & Συχνές ερωτήσεις | Πυξίδα" },
      {
        name: "description",
        content:
          "Όσα ρωτούν οι γονείς πριν ξεκινήσουν: πώς ξεκινάμε, πόσο κρατά ένα πρόγραμμα, τι ισχύει για κόστος και αποζημίωση, και τι να φέρετε στην πρώτη συνάντηση.",
      },
      { property: "og:title", content: "Οδηγός για γονείς — Πυξίδα" },
      {
        property: "og:description",
        content: "Απαντήσεις χωρίς ιατρική ορολογία: πώς ξεκινάμε, πόσο κρατά, τι κοστίζει.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuidePage,
});

const allGroup = "all";

function GuidePage() {
  const [group, setGroup] = useState<string>(allGroup);
  const shown = group === allGroup ? faqGroups : faqGroups.filter((g) => g.key === group);

  return (
    <>
      <PageHero
        eyebrow="Οδηγός για γονείς"
        title={
          <>
            Όσα ρωτούν οι γονείς, <em className="text-gradient-blush">με ευθύτητα.</em>
          </>
        }
        lead="Πώς ξεκινάμε, πόσο κρατά ένα πρόγραμμα, τι ισχύει για κόστος και αποζημίωση, τι να φέρετε μαζί σας. Αν κάτι λείπει, ρωτήστε μας — απαντάμε πριν κλείσετε οτιδήποτε."
        image={images.coloring}
        imageAlt="Παιδί χρωματίζει μια πεταλούδα με κηρομπογιά"
        badge={<p className="font-brand text-sm font-bold text-mint-deep">🧭 Ρωτήστε τα πάντα</p>}
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Κλείστε γνωριμία <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="soft" size="xl">
            <a href={site.phoneHref}>
              <Phone /> {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* STEPS */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Ξεκινώντας</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Πέντε βήματα, <em className="text-mint-deep">καθαρά.</em>
          </h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--blush)_0_10px,transparent_10px_20px)] md:block" />
          {startingSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110} className="relative">
              <div className="relative grid h-16 w-16 place-items-center rounded-full border-4 border-background bg-gradient-primary shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-blush font-brand text-xs font-bold text-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* MONEY */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal>
          <div className="grid gap-8 rounded-[2.5rem] border border-border bg-mint-soft p-8 md:grid-cols-[1fr_1fr] md:p-12">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card">
                <Info className="h-6 w-6 text-mint-deep" />
              </span>
              <h2 className="mt-5 text-3xl font-medium leading-tight">Κόστος, γραπτά και πριν.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Το κόστος διαμορφώνεται από τη συχνότητα και το είδος του προγράμματος. Δεν ανακαλύπτετε
                ποσό στην πορεία: σας το λέμε γραπτά, πριν δεσμευτείτε.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Δωρεάν γνωριμία 15 λεπτών — χωρίς δέσμευση.",
                "Γραπτή αναφορά αξιολόγησης, με σαφείς στόχους.",
                "Αποζημίωση: οι όροι διαφέρουν ανά φορέα — ρωτήστε μας ποιον έχετε.",
                "Κατ' οίκον συνεδρίες: κόστος μετακίνησης ανακοινωμένο από πριν.",
              ].map((t) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-card/80 p-4 text-foreground shadow-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint-deep" />
                  <span className="leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pt-24">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Συχνές ερωτήσεις</p>
          <h2 className="mt-4 text-4xl font-medium">Διαλέξτε θέμα</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <FaqChip on={group === allGroup} onClick={() => setGroup(allGroup)} label="Όλα" />
            {faqGroups.map((g) => (
              <FaqChip key={g.key} on={group === g.key} onClick={() => setGroup(g.key)} label={g.label} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {shown.flatMap((g) =>
              g.items.map((f, i) => (
                <AccordionItem
                  key={`${g.key}-${i}`}
                  value={`${g.key}-${i}`}
                  className="rounded-3xl border border-border bg-card px-6 shadow-soft"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              )),
            )}
          </Accordion>
        </Reveal>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-6xl px-6 pt-24">
        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-soft md:p-12">
            <h2 className="text-3xl font-medium">Τι να φέρετε στην πρώτη συνάντηση</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Τίποτα επίσημο. Ό,τι μας βοηθάει να καταλάβουμε την ημέρα σας.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {firstVisitChecklist.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-2xl bg-mint-soft p-4 text-foreground transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint">
                    <Check className="h-3.5 w-3.5 text-foreground" />
                  </span>
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Δεν βρήκατε την ερώτησή σας;"
        text="Στείλτε την. Απαντάμε πριν κλείσετε οτιδήποτε — χωρίς δέσμευση."
      />
    </>
  );
}

function FaqChip({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
        on
          ? "border-primary bg-mint-soft text-foreground shadow-soft"
          : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
