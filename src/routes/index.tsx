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
import {
  Showcase,
  DashboardKpiVisual,
  AiInsightsVisual,
  SeoChannelsVisual,
} from "@/components/landing-showcase";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  GoogleAnalyticsLogo,
  GoogleSearchConsoleLogo,
  GoogleAdsLogo,
  GoogleBusinessLogo,
  MetaLogo,
  LinkedInLogo,
  ShopifyLogo,
  MatomoLogo,
  YouTubeLogo,
  ExcelLogo,
} from "@/components/brand-logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clarix — Vackra marknadsrapporter, på autopilot" },
      {
        name: "description",
        content:
          "Anslut dina kanaler och leverera presentationsfärdiga kundrapporter på minuter. Mindre brus. Mer klarhet.",
      },
      { property: "og:title", content: "Clarix — Vackra marknadsrapporter, på autopilot" },
      {
        property: "og:description",
        content: "Anslut dina kanaler och leverera presentationsfärdiga kundrapporter på minuter.",
      },
    ],
  }),
  component: Landing,
});

type Channel = {
  name: string;
  badge?: string;
  Logo: (p: { className?: string }) => React.ReactElement;
};

const channels: Channel[] = [
  { name: "Google Analytics 4", badge: "Mest vald", Logo: GoogleAnalyticsLogo },
  { name: "Search Console", Logo: GoogleSearchConsoleLogo },
  { name: "Google Ads", Logo: GoogleAdsLogo },
  { name: "Google Business", Logo: GoogleBusinessLogo },
  { name: "Meta", Logo: MetaLogo },
  { name: "LinkedIn", Logo: LinkedInLogo },
  { name: "YouTube", Logo: YouTubeLogo },
  { name: "Shopify", badge: "E-handel", Logo: ShopifyLogo },
  { name: "Matomo", Logo: MatomoLogo },
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
            <span className="font-display text-xl">Clarix</span>
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

      <section className="relative mx-auto max-w-7xl px-6 pb-32 pt-28 text-center sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            För kommunikatörer, ägare, VD:ar och CFO:er
          </div>

          <h1 className="mx-auto mt-10 max-w-5xl font-display text-6xl leading-[1.04] tracking-[-0.04em] text-foreground sm:text-7xl md:text-[6rem]">
            Förstå din marknadsföring
            <span className="mt-3 block font-accent text-gradient-brand">
              på 30 sekunder.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-[1.6] text-foreground/70 sm:text-xl">
            Anslut dina kanaler. Få vackra rapporter och AI-insikter på enkel svenska
            — utan att tolka en enda graf.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[0.95rem] font-semibold text-background shadow-elevated transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Öppna dashboarden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Se en exempelrapport
              <ArrowRight className="h-4 w-4 opacity-60" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-24 max-w-6xl"
        >
          <div className="pointer-events-none absolute -inset-12 -z-10">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-brand opacity-25 blur-3xl" />
            <div className="absolute -bottom-16 left-1/4 h-48 w-1/2 rounded-full bg-accent/30 blur-3xl" />
          </div>
          <DashboardKpiVisual />
        </motion.div>
      </section>

      <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-32 space-y-40 sm:py-40 sm:space-y-48">
        <Showcase
          eyebrow="AI-insikter"
          title="Sluta tolka otydliga grafer och tårtdiagram."
          body="Vår AI skapar pedagogiska, tydliga och enkla sammanfattningar på svenska, som du förstår och kan ta action på."
          visual={<AiInsightsVisual />}
        />
        <Showcase
          eyebrow="Kanaler"
          title="Se vad som faktiskt fungerar."
          body="Följ SEO, annonser och konverteringar i samma vy — och jämför över tid."
          visual={<SeoChannelsVisual />}
        />
      </section>

      {/* Premium AI insight panel */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/40 p-10 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.4)] sm:p-16 dark:border-white/10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.04 300) 0%, oklch(0.96 0.05 260) 50%, oklch(0.97 0.04 350) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.85 0.16 300 / 0.55), transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-10 h-96 w-96 rounded-full opacity-60 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.86 0.14 220 / 0.5), transparent 70%)" }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.7)]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.22 295), oklch(0.65 0.2 255))",
                }}
              >
                <Sparkles className="h-7 w-7" />
              </div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.45_0.18_290)]">
                AI-sammanfattning
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-[-0.035em] text-[oklch(0.18_0.02_280)] sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
                Som att ha en analytiker i fickan.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-[1.6] text-[oklch(0.3_0.03_280)]">
                Få veckans viktigaste händelser sammanfattade på svenska — utan jargong, utan grafer att tolka.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/60 bg-white/70 p-7 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-9 dark:bg-background/40">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.62_0.22_295)]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.45_0.18_290)]">
                    Denna vecka
                  </p>
                </div>
                <p className="mt-5 text-2xl font-medium leading-[1.4] tracking-[-0.01em] text-[oklch(0.18_0.02_280)] sm:text-[1.7rem]">
                  Intäkterna växte{" "}
                  <span className="font-semibold text-success">+18,6 %</span> till{" "}
                  <span className="font-semibold">1,85 mn kr</span>. Snittordervärdet ökade{" "}
                  <span className="font-semibold text-success">+4,2 %</span>. Aurora Pro driver fortsatt störst andel av försäljningen.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Höj Meta-budget +30 %", "Fixa checkout iOS", "Skala blogg-format"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[oklch(0.35_0.15_290)] shadow-sm dark:bg-background/30"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Byggt för klarhet</p>
          <h2 className="mt-4 font-display text-5xl tracking-[-0.035em] sm:text-[3.5rem]">
            Marknadsdata som vem som helst kan läsa.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
            Oavsett om du är VD, CFO, kommunikatör eller ägare — få svaren utan att tolka grafer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
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
              className="rounded-2xl border border-border/60 bg-gradient-card p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-elevated"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{f.title}</h3>
              <p className="mt-2.5 text-[0.975rem] leading-relaxed text-foreground/70">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium integrations grid */}
      <section id="channels" className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Integrationer</p>
          <h2 className="mt-4 font-display text-5xl tracking-[-0.035em] sm:text-[3.5rem]">
            Koppla allt du redan använder.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
            Klart på minuter. Vi sköter resten.
          </p>
        </div>

        {/* Elegant container with subtle lavender-blue gradient */}
        <div
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] border border-[rgba(15,23,42,0.05)] p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.985 0.012 270) 0%, oklch(0.98 0.014 245) 100%)",
            boxShadow:
              "0 1px 2px rgba(15,23,42,0.04), 0 24px 60px -28px rgba(15,23,42,0.18)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 50% at 20% 0%, oklch(0.97 0.025 280) 0%, transparent 70%), radial-gradient(55% 50% at 85% 100%, oklch(0.975 0.022 235) 0%, transparent 72%)",
            }}
          />
          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
            {channels.map((c, i) => (
              <motion.a
                key={c.name}
                href="#pricing"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center justify-between gap-3 rounded-2xl border border-[rgba(15,23,42,0.06)] bg-white/85 px-4 py-5 text-center backdrop-blur-sm shadow-[0_1px_2px_-1px_rgba(15,23,42,0.04),0_6px_18px_-10px_rgba(15,23,42,0.10)] transition-all duration-[240ms] ease-out hover:-translate-y-1 hover:border-[rgba(15,23,42,0.10)] hover:bg-white hover:shadow-[0_8px_18px_-4px_rgba(15,23,42,0.08),0_24px_48px_-16px_rgba(15,23,42,0.16)]"
              >
                {c.badge && (
                  <span className="absolute right-2 top-2 inline-flex items-center rounded-full bg-foreground/[0.06] px-1.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-foreground/70">
                    {c.badge}
                  </span>
                )}
                <c.Logo className="mt-2 h-10 w-10 transition-transform duration-[240ms] ease-out group-hover:scale-[1.04]" />
                <span className="text-[0.875rem] font-semibold tracking-tight text-foreground/90">
                  {c.name}
                </span>
                <span className="inline-flex h-4 items-center gap-0.5 text-[0.7rem] font-semibold tracking-tight text-accent opacity-0 transition-opacity duration-[220ms] group-hover:opacity-100">
                  Koppla <ArrowRight className="h-3 w-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/65">
          {["Säker OAuth", "Ingen kod", "Klar på 2 minuter"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="font-medium">{t}</span>
            </span>
          ))}
        </div>
      </section>



      <section id="agencies" className="border-y border-border/40 bg-muted/20 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">För byråer</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-[3.5rem]">
              Driver du en byrå?
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(100deg, #E83A8E 0%, #EC6B7A 28%, #F58A4F 55%, #F9B73C 78%, #FCD931 100%)",
                }}
              >
                White-labla om du vill
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/70">
              Vår filosofi: kunder ska inte behöva en byrå för att förstå sin marknadsföring.
              Men om du driver en — gör vi dig till hjälten i rummet. Egen logotyp, färger,
              domän och kundinloggningar.
            </p>
            <ul className="mt-9 space-y-3.5 text-[0.975rem]">
              {[
                "Eget varumärke på dashboards och rapporter",
                "Eget domännamn (rapport.dinbyra.se)",
                "Obegränsat antal kundkonton",
                "Volymrabatt från 10 kunder",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-foreground/85">
                  <span
                    className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(100deg, #E83A8E 0%, #F58A4F 55%, #FCD931 100%)",
                    }}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-11 inline-block">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-10 rounded-full opacity-60 blur-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(105deg, #E255A1 0%, #F2A46F 52%, #E9E56B 100%)",
                }}
              />
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[0.95rem] font-semibold text-background shadow-elevated transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Se byråpriser
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
                    <p className="mt-1 font-numeric text-2xl text-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Priser</p>
          <h2 className="mt-4 font-display text-5xl tracking-[-0.035em] sm:text-[3.5rem]">
            Tre paket. <span className="text-foreground/55">Noll förvirring.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
            Välj nivån som matchar din ambition. Uppgradera när du växer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {[
            {
              name: "Bas",
              price: 499,
              tagline: "För ägare, VD och mindre företag som vill få koll snabbt.",
              features: [
                "1 dashboard",
                "3 kopplade kanaler",
                "2 användare",
                "Veckosummering via e-post",
                "AI-insikter varje månad",
                "PDF-export",
                "Kom igång på 5 minuter",
              ],
              cta: "Starta gratis provperiod",
              featured: false,
            },
            {
              name: "Pro",
              price: 899,
              tagline: "För marknadsteam och företag som växer.",
              features: [
                "5 dashboards",
                "6 kopplade kanaler",
                "3 användare",
                "Live-data",
                "AI-chat med din data",
                "Veckovisa rekommendationer",
                "Delbara rapporter",
                "Prioriterad support",
              ],
              cta: "Väx med Clarix",
              featured: true,
            },
            {
              name: "Max",
              price: 1990,
              tagline: "För byråer, konsulter och företag med flera varumärken.",
              features: [
                "Obegränsat antal dashboards",
                "Obegränsat antal kunder",
                "White label",
                "Egen logga och färger",
                "Kundportaler",
                "Team-access",
                "AI-insikter per kund",
                "PDF + live-länkar",
                "Prioriterad onboarding",
              ],
              cta: "Boka demo",
              featured: false,
            },
          ].map((p) => {
            const isPro = p.name === "Pro";
            const isMax = p.name === "Max";
            const isBas = p.name === "Bas";

            const cardClasses = isPro
              ? "border-[oklch(0.78_0.06_295)]/50 bg-[linear-gradient(180deg,oklch(0.985_0.012_295)_0%,oklch(0.965_0.022_290)_55%,oklch(0.955_0.028_285)_100%)] shadow-[0_30px_80px_-30px_oklch(0.55_0.15_290/0.35),0_8px_24px_-12px_oklch(0.55_0.15_290/0.25)] md:-translate-y-6 md:scale-[1.025]"
              : isMax
                ? "border-[oklch(0.82_0.012_270)] bg-[linear-gradient(180deg,oklch(0.97_0.006_270)_0%,oklch(0.945_0.008_265)_100%)] shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)]"
                : "border-border/60 bg-card hover:border-border shadow-[0_10px_30px_-20px_rgba(15,23,42,0.18)]";

            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all ${cardClasses} ${isPro ? "sm:p-10" : ""}`}
              >
                {isPro && (
                  <>
                    <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,oklch(0.92_0.05_295/0.6),transparent_60%)]" />
                    <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-foreground px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background shadow-[0_8px_24px_-6px_rgba(15,23,42,0.35)]">
                      Mest vald
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-foreground/70">{p.tagline}</p>
                </div>

                <div className="relative mt-8 flex items-baseline gap-1.5">
                  <span className="font-display text-6xl font-extrabold tracking-[-0.04em]">{p.price}</span>
                  <span className="text-base text-foreground/60">kr / mån</span>
                </div>

                <div className={`relative my-8 h-px w-full ${isPro ? "bg-[oklch(0.75_0.06_290)]/30" : "bg-border/60"}`} />

                <ul className="relative space-y-3.5 text-[0.975rem]">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${isPro ? "text-[oklch(0.55_0.15_290)]" : "text-success"}`} />
                      <span className="text-foreground/85">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/dashboard"
                  className={`relative mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-[0.95rem] font-semibold transition-all ${
                    isPro
                      ? "bg-foreground text-background shadow-[0_14px_30px_-10px_rgba(15,23,42,0.45)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(15,23,42,0.55)]"
                      : isMax
                        ? "bg-[oklch(0.28_0.015_270)] text-background hover:-translate-y-0.5 hover:bg-[oklch(0.22_0.015_270)]"
                        : "border border-border bg-background hover:bg-muted hover:border-foreground/20"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Alla priser exkl. moms. Avsluta när du vill. Ingen bindningstid.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-12 text-center shadow-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-5xl tracking-[-0.035em] sm:text-[3.5rem]">
              Äntligen rapporter som är både
              <span className="mt-1 block font-accent text-gradient-brand">snygga och tydliga.</span>
            </h2>
            <Link
              to="/dashboard"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[0.95rem] font-semibold text-background shadow-elevated transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Prova Clarix gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>© 2025 Clarix</span>
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
