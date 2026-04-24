import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Layers,
  Globe,
  TrendingUp,
  ShieldCheck,
  Palette,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  GoogleAnalyticsLogo,
  GoogleSearchConsoleLogo,
  GoogleAdsLogo,
  MetaLogo,
  LinkedInLogo,
  TikTokLogo,
  ShopifyLogo,
  WooLogo,
  YouTubeLogo,
  ExcelLogo,
} from "@/components/brand-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClarityCloud — Vackra marknadsrapporter, på autopilot" },
      {
        name: "description",
        content:
          "Anslut dina kanaler och leverera presentationsfärdiga kundrapporter på minuter. Mindre brus. Mer klarhet.",
      },
      { property: "og:title", content: "ClarityCloud — Vackra marknadsrapporter, på autopilot" },
      {
        property: "og:description",
        content: "Anslut dina kanaler och leverera presentationsfärdiga kundrapporter på minuter.",
      },
    ],
  }),
  component: Landing,
});

const channels: { name: string; Logo: (p: { className?: string }) => React.ReactElement }[] = [
  { name: "Google Analytics 4", Logo: GoogleAnalyticsLogo },
  { name: "Search Console", Logo: GoogleSearchConsoleLogo },
  { name: "Google Ads", Logo: GoogleAdsLogo },
  { name: "Meta Ads", Logo: MetaLogo },
  { name: "LinkedIn Ads", Logo: LinkedInLogo },
  { name: "TikTok Ads", Logo: TikTokLogo },
  { name: "Shopify", Logo: ShopifyLogo },
  { name: "WooCommerce", Logo: WooLogo },
  { name: "YouTube", Logo: YouTubeLogo },
  { name: "Excel / CSV", Logo: ExcelLogo },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-50" />

      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-xl">ClarityCloud</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Funktioner</a>
            <a href="#channels" className="hover:text-foreground">Kanaler</a>
            <a href="#agencies" className="hover:text-foreground">För byråer</a>
            <a href="#pricing" className="hover:text-foreground">Priser</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Logga in
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Kom igång
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            För kommunikatörer, ägare, VD:ar och CFO:er
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl font-display text-6xl font-bold leading-[1.02] sm:text-7xl md:text-8xl" style={{ fontWeight: 800, fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1' }}>
            Förstå din marknadsföring
            <br />
            <span className="italic text-gradient-brand" style={{ fontWeight: 700, fontStyle: "italic" }}>på 30 sekunder.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            ClarityCloud förvandlar rådata från alla dina kanaler till klara, vackra rapporter
            — så enkelt att du inte behöver en byrå för att förstå dem.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated transition-all hover:opacity-90"
            >
              Öppna dashboarden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-muted"
            >
              Se en exempelrapport
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-gradient-card shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/30 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-3 text-xs text-muted-foreground">claritycloud.se/oversikt</span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { l: "Sessioner", v: "184k", d: "+14 %" },
                  { l: "Intäkter", v: "1,8 mn kr", d: "+18 %" },
                  { l: "ROAS", v: "4,37×", d: "+23 %" },
                  { l: "Konv.", v: "3,2k", d: "+22 %" },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl border border-border/60 bg-background/50 p-4 text-left">
                    <p className="text-xs text-muted-foreground">{k.l}</p>
                    <p className="mt-1 font-display text-2xl">{k.v}</p>
                    <p className="text-xs text-success">{k.d}</p>
                  </div>
                ))}
              </div>
              <div className="col-span-12 h-48 rounded-xl border border-border/60 bg-background/50 p-4 sm:col-span-8">
                <div className="flex items-end gap-1.5 h-full">
                  {[40, 55, 48, 62, 70, 58, 75, 82, 78, 88, 95, 110, 102, 118, 130].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent/40 to-accent"
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-12 rounded-xl border border-border/60 bg-background/50 p-4 text-left sm:col-span-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium">AI-insikt</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Trafiken ökade <span className="font-semibold">14 %</span> tack vare organisk
                  tillväxt på tre nya blogginlägg.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="channels" className="border-y border-border/40 bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
            Anslut dina favoritkanaler
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
            Säkra OAuth-anslutningar till plattformarna du redan använder.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {channels.map((c) => (
              <div
                key={c.name}
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-elevated"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-black/5">
                  <c.Logo className="h-6 w-6" />
                </span>
                <span className="truncate text-sm font-semibold text-foreground">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Byggt för klarhet</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight">
            Marknadsdata som vem som helst kan läsa.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Oavsett om du är VD, CFO, kommunikatör eller ägare — få svaren utan att tolka grafer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Snabb onboarding",
              body: "Anslut en kanal med två klick. Vi bygger hela dashboarden åt dig.",
            },
            {
              icon: Sparkles,
              title: "AI-sammanfattningar",
              body: "Varje slide kommer med insikter på enkel svenska. Sluta skriva samma kommentar två gånger.",
            },
            {
              icon: Layers,
              title: "Dra-och-släpp-rapporter",
              body: "Sortera om slides, byt kanal, exportera till PDF eller dela en livelänk med ett klick.",
            },
            {
              icon: Globe,
              title: "Skapad för icke-tekniker",
              body: "Inga GA4-kurser. Inga UTM-mardrömmar. Bara siffrorna som faktiskt påverkar verksamheten.",
            },
            {
              icon: TrendingUp,
              title: "Smarta rekommendationer",
              body: "Var du ska skjuta in budget, vilka sidor du ska fixa, vilka sökord som behöver räddas.",
            },
            {
              icon: ShieldCheck,
              title: "Beslutsklart för ledningen",
              body: "Exportera en CFO-vänlig PDF eller dela en live-länk till styrelsen — på en knapptryckning.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border/60 bg-gradient-card p-6 transition-all hover:shadow-elevated"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="agencies" className="border-y border-border/40 bg-muted/20 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">För byråer</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight">
              Driver du en byrå?
              <br />
              <span className="italic text-gradient-brand">White-label allt.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Vår filosofi: kunder ska inte behöva en byrå för att förstå sin marknadsföring.
              Men om du driver en — gör vi dig till hjälten i rummet. Egen logotyp, färger,
              domän och kundinloggningar.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Eget varumärke på dashboards och rapporter",
                "Eget domännamn (rapport.dinbyra.se)",
                "Obegränsat antal kundkonton",
                "Volymrabatt från 10 kunder",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-success" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Se byråpriser
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-15 blur-3xl" />
            <div className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-elevated backdrop-blur">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">rapport.dinbyra.se</p>
                  <p className="text-xs text-muted-foreground">Eget varumärke aktiverat</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { l: "Klientkonton", v: "24" },
                  { l: "Aktiva rapporter", v: "112" },
                  { l: "Schemalagda PDF", v: "48/mån" },
                  { l: "Domänstatus", v: "Verifierad" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-border/60 bg-muted/30 p-3">
                    <p className="text-xs text-muted-foreground">{s.l}</p>
                    <p className="mt-1 font-display text-xl">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Priser</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight">Enkelt nog för dig. Kraftfullt nog för din byrå.</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: "Personlig", price: 190, clients: "För ägare, VD och CFO", featured: false },
            { name: "Team", price: 490, clients: "För kommunikatörer och team", featured: true },
            { name: "Byrå", price: 1490, clients: "White-label, obegränsat antal kunder", featured: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 ${
                p.featured
                  ? "border-foreground/20 bg-gradient-card shadow-elevated"
                  : "border-border/60 bg-card/40"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-white">
                  Mest populär
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.clients}</p>
              <p className="mt-6 font-display text-5xl">
                {p.price} kr
                <span className="text-base text-muted-foreground">/mån</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Obegränsat antal dashboards",
                  "Alla kanalintegrationer",
                  "AI-insikter och rekommendationer",
                  "White-label och eget domännamn",
                  "PDF + livelänkar",
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-success" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/dashboard"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.featured
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              >
                Starta gratis prövoperiod
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-12 text-center shadow-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-5xl tracking-tight">
              Äntligen rapporter som är både
              <br />
              <span className="italic text-gradient-brand">snygga och tydliga.</span>
            </h2>
            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated hover:opacity-90"
            >
              Prova ClarityCloud gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>© 2025 ClarityCloud</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Integritet</a>
            <a href="#" className="hover:text-foreground">Villkor</a>
            <a href="#" className="hover:text-foreground">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
