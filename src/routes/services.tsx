import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Filter, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { images } from "@/lib/images";
import {
  ageGroups,
  ageFocus,
  evaluationService,
  goals,
  sessionFlow,
  services,
  type AgeKey,
  type GoalKey,
} from "@/lib/services.data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες | Πυξίδα — Παιδική Εργοθεραπεία" },
      {
        name: "description",
        content:
          "Αισθητηριακή ολοκλήρωση, λεπτή κινητικότητα και γραφή, αυτοεξυπηρέτηση, ρύθμιση και προσοχή, παιχνίδι και σχολική ετοιμότητα. Δείτε πώς βοηθάει η Πυξίδα, ανά ηλικία.",
      },
      { property: "og:title", content: "Υπηρεσίες — Πυξίδα" },
      {
        property: "og:description",
        content: "Εργοθεραπεία για παιδιά, ανά ηλικία και ανά ανάγκη. Δείτε τι ακριβώς κάνουμε.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [selected, setSelected] = useState<GoalKey[]>([]);
  const [age, setAge] = useState<AgeKey | "all">("all");

  const toggleGoal = (g: GoalKey) =>
    setSelected((s) => (s.includes(g) ? s.filter((x) => x !== g) : [...s, g]));

  const visible = services.filter((s) => {
    const byGoal = selected.length === 0 || selected.includes(s.goal);
    const byAge = age === "all" || s.ages.includes(age);
    return byGoal && byAge;
  });

  const focus = age === "all" ? null : ageFocus[age];
  const active = selected.length > 0 || age !== "all";

  return (
    <>
      <PageHero
        eyebrow="Υπηρεσίες εργοθεραπείας"
        title={
          <>
            Δουλεύουμε με αυτό που <em className="text-gradient-blush">ζορίζει</em> την ημέρα σας.
          </>
        }
        lead="Κάθε πρόγραμμα ξεκινά από μια συγκεκριμένη δυσκολία — το ντύσιμο, το μολύβι, ο ύπνος, η παρέα. Επιλέξτε τι σας απασχολεί και δείτε τι ακριβώς κάνουμε."
        image={images.clayKnife}
        imageAlt="Παιδί πλάθει πλαστελίνη με πλαστικό μαχαίρι σε πορτοκαλί τραπέζι"
        badge={
          <p className="font-brand text-sm font-bold text-mint-deep">🧭 Κάθε βήμα μετράει</p>
        }
      />

      {/* INTERACTIVE FILTER */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-soft">
                  <Filter className="h-5 w-5 text-mint-deep" />
                </span>
                <div>
                  <h2 className="text-2xl font-medium">Τι σας απασχολεί;</h2>
                  <p className="text-sm text-muted-foreground">
                    Επιλέξετε ένα ή περισσότερα — η λίστα κάτω αλλάζει αμέσως.
                  </p>
                </div>
              </div>
              {active && (
                <Button
                  variant="soft"
                  size="sm"
                  onClick={() => {
                    setSelected([]);
                    setAge("all");
                  }}
                >
                  <RotateCcw /> Καθαρισμός
                </Button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {goals.map((g) => {
                const on = selected.includes(g.key);
                return (
                  <button
                    type="button"
                    key={g.key}
                    onClick={() => toggleGoal(g.key)}
                    aria-pressed={on}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                      on
                        ? "scale-[1.03] border-blush bg-blush-soft text-foreground shadow-blush"
                        : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground",
                    )}
                  >
                    {on ? <Check className="-ml-1 mr-1 inline h-3.5 w-3.5" /> : null}
                    {g.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-3 text-sm font-semibold">Ηλικία</p>
              <div className="flex flex-wrap gap-2">
                <AgeChip on={age === "all"} onClick={() => setAge("all")} label="Όλες οι ηλικίες" />
                {ageGroups.map((a) => (
                  <AgeChip
                    key={a.key}
                    on={age === a.key}
                    onClick={() => setAge(a.key)}
                    label={a.label}
                  />
                ))}
              </div>
            </div>

            {focus && (
              <div className="mt-6 grid gap-6 rounded-3xl bg-mint-soft p-6 md:grid-cols-2">
                <div>
                  <p className="font-brand text-sm font-bold uppercase tracking-[0.14em] text-mint-deep">
                    {focus.headline}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Τι προσέχουμε
                  </p>
                  <ul className="mt-3 space-y-2">
                    {focus.watch.map((w) => (
                      <li key={w} className="flex gap-2 text-sm text-foreground">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-blush-deep" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Τι κάνουμε
                  </p>
                  <ul className="mt-3 space-y-2">
                    {focus.weDo.map((w) => (
                      <li key={w} className="flex gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <p className="mt-6 text-sm font-semibold text-muted-foreground">
              {visible.length} {visible.length === 1 ? "υπηρεσία" : "υπηρεσίες"}
              {active ? " ταιριάζουν" : " συνολικά"}
            </p>
          </div>
        </Reveal>
      </section>

      {/* SERVICE CARDS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {visible.length === 0 ? (
          <Reveal>
            <div className="rounded-[2rem] border border-dashed border-border bg-card p-12 text-center">
              <p className="text-xl font-medium">Τίποτα δεν ταιριάζει με αυτές τις επιλογές.</p>
              <p className="mt-2 text-muted-foreground">
                Δοκιμάστε λιγότερα φίλτρα — ή πείτε μας εσείς τι βλέπετε, και θα σας απαντήσουμε.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-6">
                <Link to="/contact">Πείτε μας τι βλέπετε <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((s, i) => (
              <Reveal as="article" key={s.slug} delay={i * 60}>
                <div className="group h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className={cn(
                        "h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105",
                        s.pos,
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl shadow-soft",
                        s.tint,
                      )}
                    >
                      <s.icon className="h-6 w-6 text-mint-deep" />
                    </span>
                  </div>
                  <div className="p-7">
                    <p className="font-brand text-xs font-bold uppercase tracking-[0.14em] text-blush-deep">
                      {s.short}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-deep" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.ages.map((a) => (
                        <span
                          key={a}
                          className="rounded-full bg-mint-soft px-3 py-1 text-xs font-semibold text-mint-deep"
                        >
                          {ageGroups.find((g) => g.key === a)?.label ?? a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* EVALUATION */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-12">
            <img
              src={evaluationService.img}
              alt="Χεράκια κόβουν πλαστελίνη με φόρμες"
              loading="lazy"
              className="h-72 w-full rounded-[2rem] object-cover"
            />
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blush-soft">
                <evaluationService.icon className="h-6 w-6 text-blush-deep" />
              </span>
              <h2 className="mt-5 text-3xl font-medium">{evaluationService.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {evaluationService.text}
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7">
                <Link to="/contact">Κλείστε αξιολόγηση <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SESSION FLOW */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Μια συνεδρία</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Πώς περνάει η <em className="text-mint-deep">ώρα μας.</em>
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {sessionFlow.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </span>
                <p className="mt-4 font-brand text-sm font-bold text-mint-deep">{s.title}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}

function AgeChip({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
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
