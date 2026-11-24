import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, HandHeart, Lightbulb, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { CountUp } from "@/components/site/CountUp";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά με εμένα | Πυξίδα — Παιδική Εργοθεραπεία" },
      {
        name: "description",
        content:
          "Ποια είμαι, πώς δουλεύω και τι δεν υπόσχομαι. Η Πυξίδα είναι μια εργοθεραπίστρια που δουλεύει με παιδιά και οικογένειες μέσα από το παιχνίδι.",
      },
      { property: "og:title", content: "Σχετικά με εμένα — Πυξίδα" },
      {
        property: "og:description",
        content: "Η προσέγγισή μας: παρατήρηση πρώτα, παρέμβαση μετά, οικογένεια πάντα μέσα.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Search,
    title: "Παρατήρηση πρώτα",
    text: "Δεν ξεκινάμε με ασκήσεις. Ξεκινάμε βλέποντας τι κάνει το παιδί όταν κανείς δεν του λέει τι να κάνει.",
  },
  {
    icon: HandHeart,
    title: "Η οικογένεια μέσα",
    text: "Δεν σας δίνουμε οδηγίες, σας μαθαίνουμε. Αν φύγετε χωρίς να καταλαβαίνετε το «γιατί», χάσαμε χρόνο.",
  },
  {
    icon: Lightbulb,
    title: "Μικρά βήματα, συχνά",
    text: "Πέντε λεπτά τη μέρα που γίνονται, παρά μία μεγάλη άσκηση που δεν γίνεται. Έτσι χτίζεται η πρόοδος.",
  },
  {
    icon: Compass,
    title: "Δική σας πυξίδα",
    text: "Οι στόχοι είναι δικοί σας, όχι δικοί μου. Εγώ φέρνω τα εργαλεία, εσείς決定ετε τον δρόμο.",
  },
];

const notDoing = [
  "Δεν βιάζω το παιδί για να προλάβω το πρόγραμμα.",
  "Δεν υπόσχομαι «θα normalize» — υπόσχομαι μέτρηση και ανασκόπηση.",
  "Δεν κάνω τις ασκήσεις εγώ, για να φαίνεται ότι γίνεται πρόοδος.",
  "Δεν μιλάω με ιατρική ορολογία για να ακουστώ σοβαρός.",
  "Δεν κρατάω το παιδί σε πρόγραμμα που δεν δουλεύει.",
];

const gallery = [
  { src: images.sensoryPlay, alt: "Χεράκι παίζει με πολύχρωμες αισθητηριακές χάντρες", pos: "object-center" },
  { src: images.playBlocks, alt: "Παιδιά παίζουν με χρωματιστά τουβλάκια στο πάτωμα", pos: "object-center" },
  { src: images.clayCutters, alt: "Χεράκια κόβουν πλαστελίνη με φόρμες", pos: "object-center" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Σχετικά με εμένα"
        title={
          <>
            Δουλεύω με παιδιά, όχι με <em className="text-gradient-blush">ετικέτες.</em>
          </>
        }
        lead="Ονομάζομαι Μαρίτα Στεφανιά και είμαι εργοθεραπίστρια. Βοηθάω παιδιά να νιώθουν πιο ήρεμα, πιο σίγουρα και πιο αυτόνομα — και οικογένειες να καταλαβαίνουν τι ακριβώς συμβαίνει."
        image={images.playBlocks}
        imageAlt="Παιδιά κάθονται σε χαλάκι και παίζουν με χρωματιστά τουβλάκια"
        badge={
          <div>
            <p className="font-brand text-sm font-bold text-mint-deep">Μαρίτα Στεφανιά</p>
            <p className="text-xs text-muted-foreground">Εργοθεραπίστρια</p>
          </div>
        }
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Κλείστε γνωριμία <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      {/* STORY */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Η ιστορία</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight">
            Γιατί διάλεξα αυτή τη <em className="text-mint-deep">δουλειά.</em>
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ξεκίνησα γιατί με εκνεύριζε μια ερώτηση: «γιατί κανείς δεν εξηγεί στους γονείς τι βλέπει;».
              Πολλά παιδιά δεν έχουν ανάγκη από περισσότερη πίεση — έχουν ανάγκη από κάποιον που θα
              παρατηρήσει προσεκτικά και θα πει, με απλά λόγια, τι ακριβώς δυσκολεύει.
            </p>
            <p>
              Στην πράξη, η δουλειά μου είναι μισή επιστήμη και μισή υπομονή. Μισή, γιατί χρειάζονται
              εργαλεία, μέτρηση και σαφείς στόχοι. Μισή, γιατί καμία πρόοδος δεν γίνεται με το ζόρι: αν το
              παιδί δεν περνά καλά, δεν μαθαίνει.
            </p>
            <p>
              Γι' αυτό η Πυξίδα είναι μικρή και ήρεμη. Προτιμώ λίγα παιδιά, με τα οποία θα δουλέψω
              σταθερά, παρά πολλά με τα οποία θα τρέχω.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-mint-deep">Μαρίτα Στεφανιά</p>
          <p className="font-brand text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Εργοθεραπίστρια
          </p>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <CountUp to={15} suffix="′" label="Δωρεάν γνωριμία" />
          </Reveal>
          <Reveal delay={80}>
            <CountUp to={4} label="Βήματα μέχρι το πρόγραμμα" />
          </Reveal>
          <Reveal delay={160}>
            <CountUp to={100} suffix="%" label="Μέσα από παιχνίδι" />
          </Reveal>
          <Reveal delay={240}>
            <CountUp to={8} label="Εβδομάδες μέχρι την ανασκόπηση" />
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mint-deep">Πώς δουλεύω</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Τέσσερις κανόνες που <em className="text-gradient-blush">δεν αλλάζουν.</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-soft transition-transform duration-500 group-hover:rotate-6">
                  <v.icon className="h-6 w-6 text-mint-deep" />
                </span>
                <h3 className="mt-5 text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HONESTY */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-10 rounded-[2.5rem] border border-border bg-blush-soft p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
            <div>
              <h2 className="text-3xl font-medium leading-tight">
                Αυτό που <em className="text-mint-deep">δεν</em> κάνω.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Προτιμώ να το ακούσετε από εμένα, πριν το ανακαλύψετε μόνοι σας.
              </p>
              <Button asChild variant="blush" size="lg" className="mt-7">
                <a href={site.phoneHref}>Ρωτήστε με ευθέως</a>
              </Button>
            </div>
            <ul className="space-y-3">
              {notDoing.map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-3 rounded-2xl bg-card/80 p-4 text-foreground shadow-soft"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blush">
                    <X className="h-3.5 w-3.5 text-foreground" />
                  </span>
                  <span className="leading-snug">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl font-medium">Μέσα στην αίθουσα</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Χώρος ήρεμος, υλικά γνωστά, τίποτα που να μοιάζει με εξεταστήριο.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.alt} delay={i * 100}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft transition-transform duration-700 hover:scale-[1.02]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="mx-auto max-w-3xl px-6 pb-8 text-center">
        <Reveal>
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mint-soft">
            <Check className="h-7 w-7 text-mint-deep" />
          </span>
          <blockquote className="mt-6 font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
            «Αν δεν ξέρουμε τι δυσκολεύει, δεν βοηθάμε. Απλώς απασχολούμε το παιδί.»
          </blockquote>
          <p className="mt-4 font-brand font-bold text-mint-deep">— Μαρίτα Στεφανιά</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
