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
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowReport — Beautiful marketing reports, on autopilot" },
      {
        name: "description",
        content:
          "Connect your channels and ship presentation-ready client reports in minutes. Less clutter. More clarity.",
      },
      { property: "og:title", content: "FlowReport — Beautiful marketing reports, on autopilot" },
      {
        property: "og:description",
        content: "Connect your channels and ship presentation-ready client reports in minutes.",
      },
    ],
  }),
  component: Landing,
});

const channels = [
  "Google Analytics 4",
  "Search Console",
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "TikTok Ads",
  "Shopify",
  "WooCommerce",
  "YouTube",
  "Custom CSV",
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-50" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-xl">FlowReport</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#channels" className="hover:text-foreground">Channels</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              Start free
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            New — AI insights for every slide
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl font-display text-6xl leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
            Beautiful marketing reports,{" "}
            <span className="italic text-gradient-brand">on autopilot.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Connect your channels. FlowReport turns raw data into presentation-ready dashboards
            and client reports — in seconds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated transition-all hover:opacity-90"
            >
              Open the dashboard
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-muted"
            >
              See a sample report
            </Link>
          </div>
        </motion.div>

        {/* Hero preview */}
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
              <span className="ml-3 text-xs text-muted-foreground">flowreport.app/dashboard</span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { l: "Sessions", v: "184k", d: "+14%" },
                  { l: "Revenue", v: "$184k", d: "+18%" },
                  { l: "ROAS", v: "4.37×", d: "+23%" },
                  { l: "Conv.", v: "3.2k", d: "+22%" },
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
                  <span className="text-xs font-medium">AI insight</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  Traffic increased <span className="font-semibold">14%</span> driven by organic
                  growth on three new blog posts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Logos */}
      <section id="channels" className="border-y border-border/40 bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Connect your favorite channels
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground/80">
            {channels.map((c) => (
              <span key={c} className="font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Built to delight</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight">
            Everything an agency needs. Nothing it doesn't.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Instant onboarding",
              body: "Connect a channel in two clicks. We pre-build the entire dashboard for you.",
            },
            {
              icon: Sparkles,
              title: "AI summaries",
              body: "Every slide ships with plain-English insights. Stop writing the same comment twice.",
            },
            {
              icon: Layers,
              title: "Drag-and-drop reports",
              body: "Reorder slides, swap channels, export to PDF or share a live link in one click.",
            },
            {
              icon: Globe,
              title: "White-label everything",
              body: "Logo, colors, custom domain, client logins. Your brand, end to end.",
            },
            {
              icon: TrendingUp,
              title: "Smart recommendations",
              body: "Where to push budget, which pages to fix, which keywords to revive.",
            },
            {
              icon: ShieldCheck,
              title: "Enterprise-grade",
              body: "SOC 2, SSO, granular roles. Built for agencies serving regulated industries.",
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

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight">Pay for clients, not seats.</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { name: "Solo", price: 29, clients: "Up to 3 clients", featured: false },
            { name: "Studio", price: 79, clients: "Up to 15 clients", featured: true },
            { name: "Agency", price: 199, clients: "Unlimited clients", featured: false },
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
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.clients}</p>
              <p className="mt-6 font-display text-5xl">
                ${p.price}
                <span className="text-base text-muted-foreground">/mo</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Unlimited dashboards",
                  "All channel integrations",
                  "AI insights & recommendations",
                  "White-label & custom domain",
                  "PDF + live share links",
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
                Start free trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-12 text-center shadow-elevated">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-5xl tracking-tight">
              Ship a report your clients will <span className="italic text-gradient-brand">screenshot.</span>
            </h2>
            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-elevated hover:opacity-90"
            >
              Try FlowReport free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>© 2025 FlowReport</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
