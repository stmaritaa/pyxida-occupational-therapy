import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Hand,
  HeartHandshake,
  MessageCircleHeart,
  Puzzle,
  Shirt,
  Sparkles,
  Waves,
  Brain,
  ClipboardCheck,
  Route as RouteIcon,
  Home,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Πυξίδα — Παιδική Εργοθεραπεία | Κάθε βήμα μετράει" },
      {
        name: "description",
        content:
          "Εξατομικευμένη εργοθεραπεία για παιδιά μέσα από το παιχνίδι: αισθητηριακή επεξεργασία, λεπτή κινητικότητα, αυτοεξυπηρέτηση, συναισθηματική ρύθμιση. Κλείστε δωρεάν γνωριμία.",
      },
      { property: "og:title", content: "Πυξίδα — Παιδική Εργοθεραπεία" },
      {
        property: "og:description",
        content: "Βοηθάμε το παιδί σας να νιώθει πιο ήρεμο, σίγουρο και αυτόνομο. Κάθε βήμα μετράει.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const marquee = [
  "Αισθητηριακή επεξεργασία",
  "Λεπτή κινητικότητα",
  "Γραφοκινητικότητα",
  "Αυτοεξυπηρέτηση",
  "Συναισθηματική ρύθμιση",
  "Προσοχή & οργάνωση",
  "Παιχνίδι & κοινωνικότητα",
];

const signs = [
  "Κινείται συνέχεια και δυσκολεύεται να κάτσει ήσυχα",
  "Ενοχλείται από ήχους, ετικέτες ρούχων ή αγγίγματα",
  "Κρατά δύσκολα το μολύβι ή κουράζεται γρήγορα στη γραφή",
  "Έχει συχνές «εκρήξεις» ή δυσκολεύεται στις μεταβάσεις",
  "Αποφεύγει το ντύσιμο, τα κουμπιά ή ορισμένες τροφές",
  "Φαίνεται αδέξιο, σκοντάφτει ή αποφεύγει την κίνηση",
];

const services = [
  {
    icon: Waves,
    title: "Αισθητηριακή Ολοκλήρωση",
    text: "Βοηθάμε το νευρικό σύστημα να οργανώνει ήχους, αγγίγματα και κίνηση — ώστε το παιδί να νιώθει ασφαλές και ήρεμο στο σώμα του.",
    img: images.sensorySwing,
    pos: "object-[center_20%]",
    tint: "bg-mint-soft",
  },
  {
    icon: Hand,
    title: "Λεπτή Κινητικότητα & Γραφή",
    text: "Δύναμη στα χεράκια, σωστό κράτημα μολυβιού, ψαλίδι, κουμπιά. Δεξιότητες που κάνουν το σχολείο πιο εύκολο και πιο χαρούμενο.",
    img: images.fineMotor,
    pos: "object-center",
    tint: "bg-blush-soft",
  },
  {
    icon: Shirt,
    title: "Αυτοεξυπηρέτηση & Αυτονομία",
    text: "Ντύσιμο, φαγητό, οργάνωση της τσάντας. Μικρές καθημερινές νίκες που χτίζουν μεγάλη αυτοπεποίθηση.",
    img: images.selfCare,
    pos: "object-center",
    tint: "bg-sun-soft",
  },
  {
    icon: Brain,
    title: "Ρύθμιση & Προσοχή",
    text: "Εργαλεία για να ηρεμεί, να συγκεντρώνεται και να εκφράζει όσα νιώθει — στο σπίτι, στο σχολείο, στο παιχνίδι.",
    img: images.regulation,
    pos: "object-center",
    tint: "bg-mint-soft",
  },
];

const steps = [
  {
    icon: MessageCircleHeart,
    title: "Δωρεάν γνωριμία",
    text: "Μια 15λεπτη τηλεφωνική κουβέντα. Μας λέτε τι σας απασχολεί, σας λέμε ειλικρινά αν και πώς μπορούμε να βοηθήσουμε.",
  },
  {
    icon: ClipboardCheck,
    title: "Αξιολόγηση",
    text: "Παρατηρούμε το παιδί μέσα από το παιχνίδι και με τυποποιημένα εργαλεία. Λαμβάνετε γραπτή αναφορά με σαφή ευρήματα.",
  },
  {
    icon: RouteIcon,
    title: "Εξατομικευμένο πλάνο",
    text: "Στόχοι που έχουν νόημα για τη δική σας καθημερινότητα — όχι γενικές συνταγές. Κάθε παιδί έχει τη δική του πορεία.",
  },
  {
    icon: Home,
    title: "Μαζί με την οικογένεια",
    text: "Τακτική ενημέρωση και απλές ιδέες για το σπίτι, ώστε η πρόοδος να συνεχίζεται και έξω από τις συνεδρίες.",
  },
];

const outcomes = [
  "Πιο ήρεμα πρωινά και λιγότερες εντάσεις",
  "Περισσότερη αυτοπεποίθηση στο σχολείο",
  "Ντύνεται και τρώει πιο αυτόνομα",
  "Παίζει και συνδέεται πιο εύκολα με άλλα παιδιά",
  "Εσείς καταλαβαίνετε τι χρειάζεται — και γιατί",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute -left-20 top-40 h-64 w-64 animate-blob bg-mint/40 blur-2xl" />
        <div className="pointer-events-none absolute right-10 top-24 h-40 w-40 animate-blob bg-blush/50 blur-2xl [animation-delay:-6s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-mint-deep backdrop-blur">
                <Sparkles className="h-4 w-4 text-blush-deep" /> Παιδική Εργοθεραπεία · Αισθητηριακή Ολοκλήρωση
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                Βοηθάμε το παιδί σας να βρει τη <em className="text-gradient-blush">δική του</em> πορεία.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Εξατομικευμένη εργοθεραπεία μέσα από το παιχνίδι — για παιδιά που θέλουν να νιώθουν πιο
                <strong className="font-semibold text-foreground"> ήρεμα</strong>, πιο
                <strong className="font-semibold text-foreground"> σίγουρα</strong> και πιο
                <strong className="font-semibold text-foreground"> αυτόνομα</strong> στο σπίτι, στο σχολείο και
                στο παιχνίδι.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Κλείστε δωρεάν γνωριμία <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <a href="#pos-douleuoume">Πώς δουλεύουμε</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-foreground/80">
                {["Δωρεάν 15λεπτη γνωριμία", "Γραπτή αναφορά αξιολόγησης", "Ιδέες για το σπίτι"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 translate-x-4 translate-y-4 animate-blob rounded-[3rem] bg-blush/60" />
              <img
                src={images.heroChild}
                alt="Κοριτσάκι παίζει με πλαστελίνη και καλουπάκια"
                className="relative h-full w-full animate-blob rounded-[3rem] object-cover shadow-soft [animation-duration:22s]"
                width={1400}
                height={2100}
              />
              <div className="absolute -left-6 top-10 animate-float rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-soft backdrop-blur">
                <p className="font-brand text-sm font-bold text-mint-deep">🧭 {site.tagline}</p>
              </div>
              <div className="absolute -right-4 bottom-12 animate-float-slow rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-blush-soft">
                    <Puzzle className="h-5 w-5 text-blush-deep" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">100% μέσα από παιχνίδι</p>
                    <p className="text-xs text-muted-foreground">Τα παιδιά ανυπομονούν να έρθουν</p>
                  </div>
                </div>
              </div>
              <img
                src={images.logo}
                alt=""
                className="absolute -top-8 right-6 h-20 w-20 animate-needle drop-shadow-md"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-label="Τομείς παρέμβασης" className="overflow-hidden border-y border-border bg-card py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl italic text-foreground/70">
              {m}
              <Star className="h-4 w-4 fill-blush text-blush" />
            </span>
          ))}
        </div>
      </section>

      {/* SIGNS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Μήπως σας θυμίζει κάτι;</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              «Δεν ξέρω πώς να το βοηθήσω» — <em className="text-mint-deep">δεν είστε μόνοι.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Πολλές φορές αυτό που μοιάζει με «δύσκολη συμπεριφορά» είναι στην πραγματικότητα η προσπάθεια του
              παιδιού να ρυθμίσει το σώμα του και να νιώσει ασφαλές. Δεν φταίει το παιδί. Δεν φταίτε εσείς.
              Χρειάζεται απλώς η σωστή πυξίδα.
            </p>
            <Button asChild variant="blush" size="xl" className="mt-8">
              <Link to="/contact">
                Μιλήστε μαζί μας — δωρεάν <ArrowRight />
              </Link>
            </Button>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {signs.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-blush hover:bg-blush-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint-soft font-brand text-sm font-bold text-mint-deep transition-colors group-hover:bg-card">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-medium leading-snug text-foreground">{s}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-gradient-ink py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mint-deep">Πώς βοηθάμε</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Δεξιότητες για <em className="text-gradient-blush">την πραγματική ζωή</em> του παιδιού σας
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Η εργοθεραπεία βοηθά τα παιδιά να συμμετέχουν με περισσότερη αυτονομία στο παιχνίδι, στο σχολείο,
              στην αυτοεξυπηρέτηση και στις σχέσεις τους.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal as="article" key={s.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className={`h-full w-full object-cover ${s.pos} transition-transform duration-[1.2s] group-hover:scale-105`}
                    />
                    <span className={`absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl ${s.tint} shadow-soft`}>
                      <s.icon className="h-6 w-6 text-mint-deep" />
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-medium">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="pos-douleuoume" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush-deep">Πώς ξεκινάμε</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Τέσσερα απλά βήματα. <em className="text-mint-deep">Χωρίς άγχος.</em>
          </h2>
        </Reveal>
        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-0.5 bg-[repeating-linear-gradient(90deg,var(--blush)_0_10px,transparent_10px_20px)] md:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="relative">
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

      {/* OUTCOMES */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-soft md:p-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={images.sensoryPlay} alt="Χεράκι παίζει με πολύχρωμες αισθητηριακές χάντρες" loading="lazy" className="aspect-square w-full rounded-[2rem] object-cover" />
              <img src={images.blocks} alt="Αγοράκι χτίζει πύργο με τουβλάκια γραμμάτων" loading="lazy" className="mt-10 aspect-[3/4] w-full rounded-[2rem] object-cover" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-float rounded-full bg-blush px-5 py-2 font-brand text-sm font-bold text-foreground shadow-blush">
              Μικρές νίκες, κάθε μέρα ✨
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mint-deep">Τι αλλάζει</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight">
              Όταν το παιδί νιώθει καλά στο σώμα του, <em className="text-gradient-blush">όλα γίνονται πιο εύκολα.</em>
            </h2>
            <ul className="mt-8 space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint-soft">
                    <Check className="h-4 w-4 text-mint-deep" />
                  </span>
                  <span className="text-lg text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROMISE */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <HeartHandshake className="mx-auto h-12 w-12 text-blush-deep" />
          <blockquote className="mt-6 font-display text-3xl italic leading-snug text-foreground sm:text-4xl">
            «Η παρατήρηση και η κατανόηση έρχονται πριν από την παρέμβαση. Κάθε παιδί είναι μοναδικό — και κάθε
            μικρό βήμα έχει αξία.»
          </blockquote>
          <p className="mt-6 font-brand font-bold text-mint-deep">— Η ομάδα της Πυξίδας</p>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary px-8 py-16 text-center shadow-glow md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 animate-blob bg-blush/50 blur-xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 animate-blob bg-sun/40 blur-xl [animation-delay:-5s]" />
            <img src={images.logo} alt="" className="relative mx-auto h-20 w-20 animate-needle rounded-full bg-card/70 p-2" />
            <h2 className="relative mt-6 text-4xl font-medium leading-tight text-primary-foreground sm:text-5xl">
              Το πρώτο βήμα είναι μια κουβέντα.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
              Κλείστε μια δωρεάν 15λεπτη γνωριμία. Χωρίς δέσμευση — μόνο ειλικρινείς απαντήσεις για το παιδί σας.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild variant="blush" size="xl">
                <Link to="/contact">
                  Κλείστε γνωριμία τώρα <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <a href={site.phoneHref}>Καλέστε μας</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
