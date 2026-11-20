import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Clock, Instagram, Loader2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { childAges, concernOptions, contactSchema, type ContactInput } from "@/lib/contact.schema";
import { submitContact } from "@/lib/contact.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία & Ραντεβού | Πυξίδα — Παιδική Εργοθεραπεία" },
      {
        name: "description",
        content:
          "Κλείστε δωρεάν 15λεπτη γνωριμία με την Πυξίδα. Πείτε μας τι σας απασχολεί και θα σας καλέσουμε μέσα σε μία εργάσιμη.",
      },
      { property: "og:title", content: "Κλείστε δωρεάν γνωριμία — Πυξίδα" },
      {
        property: "og:description",
        content: "Το πρώτο βήμα είναι μια κουβέντα. Επικοινωνήστε με την Πυξίδα, παιδική εργοθεραπεία.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Πώς καταλαβαίνω αν το παιδί μου χρειάζεται εργοθεραπεία;",
    a: "Αν κάτι στην καθημερινότητα —ντύσιμο, γραφή, ύπνος, φαγητό, εντάσεις, συγκέντρωση— φαίνεται πιο δύσκολο απ' ό,τι περιμένατε, αξίζει μια κουβέντα. Στη δωρεάν γνωριμία σας λέμε ειλικρινά αν προτείνουμε αξιολόγηση.",
  },
  {
    q: "Τι γίνεται στην πρώτη συνάντηση;",
    a: "Γνωριζόμαστε, σας ακούμε και παρατηρούμε το παιδί μέσα από το παιχνίδι. Το παιδί περνά καλά — για εκείνο είναι μια ώρα παιχνιδιού.",
  },
  {
    q: "Χρειάζομαι παραπεμπτικό από γιατρό;",
    a: "Για να ξεκινήσετε δεν χρειάζεται. Αν σκοπεύετε να ζητήσετε αποζημίωση από ασφαλιστικό φορέα, σας ενημερώνουμε για τα δικαιολογητικά.",
  },
  {
    q: "Θα συμμετέχω κι εγώ ως γονιός;",
    a: "Ναι! Η οικογένεια είναι κομμάτι της ομάδας. Σας ενημερώνουμε τακτικά και σας δίνουμε απλές ιδέες για το σπίτι.",
  },
];

const empty: ContactInput = { parentName: "", phone: "", email: "", childAge: "", concerns: [], message: "" };

function ContactPage() {
  const send = useServerFn(submitContact);
  const [form, setForm] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const update = <K extends keyof ContactInput>(key: K, value: ContactInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleConcern = (c: ContactInput["concerns"][number]) =>
    update("concerns", form.concerns.includes(c) ? form.concerns.filter((x) => x !== c) : [...form.concerns, c]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof ContactInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await send({ data: parsed.data });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setForm(empty);
    } catch {
      setStatus("idle");
      toast.error("Κάτι πήγε στραβά. Δοκιμάστε ξανά ή καλέστε μας.");
    }
  }

  const field =
    "w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-mint/40";

  return (
    <>
      <section className="relative overflow-hidden bg-hero pb-16 pt-32 md:pt-40">
        <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 animate-blob bg-blush/40 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-mint-deep backdrop-blur">
              <img src={images.logo} alt="" className="h-5 w-5 animate-needle" /> Δωρεάν 15λεπτη γνωριμία
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-medium leading-[1.05] sm:text-6xl">
              Ας κάνουμε μαζί το <em className="text-gradient-blush">πρώτο βήμα.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Πείτε μας λίγα λόγια για το παιδί σας. Θα σας καλέσουμε για μια χαλαρή, δωρεάν κουβέντα — χωρίς
              καμία δέσμευση.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10">
            {status === "done" ? (
              <div className="py-12 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-mint-soft">
                  <Check className="h-10 w-10 text-mint-deep" />
                </span>
                <h2 className="mt-6 text-3xl font-medium">Ευχαριστούμε! 🧭</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας σύντομα. Το πρώτο βήμα έγινε — κάθε βήμα
                  μετράει.
                </p>
                <Button variant="soft" size="lg" className="mt-8" onClick={() => setStatus("idle")}>
                  Στείλτε νέο μήνυμα
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-3xl font-medium">Κλείστε τη γνωριμία σας</h2>
                  <p className="mt-2 text-muted-foreground">Χρειάζεται λιγότερο από ένα λεπτό.</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">Ονοματεπώνυμο γονέα *</span>
                    <input className={field} value={form.parentName} onChange={(e) => update("parentName", e.target.value)} placeholder="π.χ. Μαρία Παπαδοπούλου" autoComplete="name" />
                    {errors.parentName && <span className="mt-1.5 block text-sm text-destructive">{errors.parentName}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">Τηλέφωνο *</span>
                    <input className={field} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="69X XXX XXXX" inputMode="tel" autoComplete="tel" />
                    {errors.phone && <span className="mt-1.5 block text-sm text-destructive">{errors.phone}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">Email</span>
                    <input className={field} type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" autoComplete="email" />
                    {errors.email && <span className="mt-1.5 block text-sm text-destructive">{errors.email}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">Ηλικία παιδιού</span>
                    <select className={field} value={form.childAge} onChange={(e) => update("childAge", e.target.value as ContactInput["childAge"])}>
                      <option value="">Επιλέξτε</option>
                      {childAges.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-semibold">Τι σας απασχολεί; (προαιρετικό)</legend>
                  <div className="flex flex-wrap gap-2">
                    {concernOptions.map((c) => {
                      const on = form.concerns.includes(c);
                      return (
                        <button
                          type="button"
                          key={c}
                          onClick={() => toggleConcern(c)}
                          aria-pressed={on}
                          className={cn(
                            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                            on
                              ? "scale-[1.03] border-blush bg-blush-soft text-foreground shadow-blush"
                              : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground",
                          )}
                        >
                          {on && <Check className="-ml-1 mr-1 inline h-3.5 w-3.5" />}
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Πείτε μας λίγα λόγια</span>
                  <textarea className={cn(field, "min-h-32 resize-y")} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Τι παρατηρείτε στην καθημερινότητα του παιδιού σας;" />
                  {errors.message && <span className="mt-1.5 block text-sm text-destructive">{errors.message}</span>}
                </label>

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <Loader2 className="animate-spin" /> Αποστολή…
                    </>
                  ) : (
                    <>
                      Θέλω να με καλέσετε <ArrowRight />
                    </>
                  )}
                </Button>
                <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-mint-deep" /> Τα στοιχεία σας μένουν απόρρητα.
                </p>
              </form>
            )}
          </div>
        </Reveal>

        <div className="space-y-5">
          {[
            { icon: Phone, label: "Τηλέφωνο", value: site.phone, href: site.phoneHref, tint: "bg-mint-soft" },
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, tint: "bg-blush-soft" },
            { icon: MapPin, label: "Διεύθυνση", value: site.address, tint: "bg-sun-soft" },
            { icon: Clock, label: "Ωράριο", value: site.hours, tint: "bg-mint-soft" },
            { icon: Instagram, label: "Instagram", value: site.instagramHandle, href: site.instagram, tint: "bg-blush-soft" },
          ].map((c, i) => {
            const inner = (
              <div className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary">
                <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6", c.tint)}>
                  <c.icon className="h-5 w-5 text-mint-deep" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{c.label}</span>
                  <span className="mt-0.5 block font-semibold text-foreground">{c.value}</span>
                </span>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 80}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
          <Reveal delay={420}>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={images.coloring} alt="Παιδί χρωματίζει μια πεταλούδα με κηρομπογιά" loading="lazy" className="h-56 w-full object-cover" />
              <p className="absolute inset-x-4 bottom-4 rounded-2xl bg-card/90 px-4 py-3 text-center font-brand text-sm font-bold text-mint-deep backdrop-blur">
                🧭 {site.tagline}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Συχνές ερωτήσεις</p>
          <h2 className="mt-4 text-4xl font-medium">Όσα αναρωτιούνται οι γονείς</h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="rounded-3xl border border-border bg-card px-6 shadow-soft">
                <AccordionTrigger className="py-5 text-left text-lg font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </>
  );
}
