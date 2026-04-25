import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, Reorder } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Search,
  Target,
  ShoppingBag,
  Heart,
  Lightbulb,
  GripVertical,
  Plus,
  Eye,
  Download,
  Share2,
  ArrowLeft,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppShell } from "@/components/app-shell";
import {
  campaigns,
  formatCurrency,
  reportSlides,
  seoQueries,
  trafficTrend,
} from "@/lib/demo-data";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Rapporter — ClarityCloud" },
      {
        name: "description",
        content: "Dra, släpp och leverera presentationsfärdiga kundrapporter.",
      },
    ],
  }),
  component: ReportsPage,
});

const iconMap = {
  Sparkles,
  TrendingUp,
  Search,
  Target,
  ShoppingBag,
  Heart,
  Lightbulb,
};

function ReportsPage() {
  const [slides, setSlides] = useState(reportSlides);
  const [active, setActive] = useState<string | null>(null);

  if (active) {
    return <SlidePreview slideId={active} onBack={() => setActive(null)} />;
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 lg:px-8 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Rapportbyggare</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight">April 2025 — Aurora Studios</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Dra för att sortera. Klicka på en slide för att förhandsgranska presentationen.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium hover:bg-muted">
              <Share2 className="h-4 w-4" />
              Dela länk
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              <Download className="h-4 w-4" />
              Exportera PDF
            </button>
          </div>
        </motion.div>

        <Reorder.Group
          axis="y"
          values={slides}
          onReorder={setSlides}
          className="space-y-3"
        >
          {slides.map((slide, i) => {
            const Icon = iconMap[slide.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <Reorder.Item
                key={slide.id}
                value={slide}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-soft transition-all hover:shadow-elevated cursor-grab active:cursor-grabbing"
              >
                <GripVertical className="h-5 w-5 text-muted-foreground/60" />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{slide.title}</p>
                  <p className="truncate text-sm text-muted-foreground">{slide.description}</p>
                </div>
                <button
                  onClick={() => setActive(slide.id)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  <Eye className="h-3.5 w-3.5" />
                  Förhandsgranska
                </button>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-background/40 py-4 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
          <Plus className="h-4 w-4" />
          Lägg till slide
        </button>
      </div>
    </AppShell>
  );
}

function SlidePreview({ slideId, onBack }: { slideId: string; onBack: () => void }) {
  const slide = reportSlides.find((s) => s.id === slideId)!;

  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-aurora opacity-50" />

      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl lg:px-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till byggaren
        </button>
        <div className="flex items-center gap-2">
          <Link
            to="/reports"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            <Share2 className="h-4 w-4" />
            Dela
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
            <Download className="h-4 w-4" />
            Exportera PDF
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div
          key={slideId}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-elevated lg:p-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{slide.title}</p>
          <h1 className="mt-4 font-display text-6xl tracking-tight">{getSlideHeadline(slideId)}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{slide.description}</p>

          <div className="mt-10">{renderSlideBody(slideId)}</div>

          {slideId !== "conv" && (
            <div className="mt-10 rounded-2xl border border-border/60 bg-background/50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">AI-sammanfattning</p>
                  <p className="mt-1 text-base leading-relaxed">{getSlideSummary(slideId)}</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function getSlideHeadline(id: string) {
  switch (id) {
    case "exec":
      return "En toppmånad, från ände till ände.";
    case "traffic":
      return "Trafiken upp 14 %";
    case "seo":
      return "SEO-momentumet bygger upp";
    case "paid":
      return "Annonseffektivitet på all-time high";
    case "ecom":
      return "Intäkterna växte 18,6 %";
    case "social":
      return "Engagemanget fortsätter klättra";
    case "conv":
      return "3 241 konverteringar senaste 30 dagarna";
    case "opp":
      return "Var du ska investera härnäst";
    default:
      return "Resultatöversikt";
  }
}

function getSlideSummary(id: string) {
  switch (id) {
    case "exec":
      return "Intäkterna växte 18,6 % på en 3,4 % minskning av annonskostnaden, vilket lyfte ROAS till 4,37×. Organiskt sök drev merparten av tillväxten.";
    case "traffic":
      return "Sessioner +18 %, användare +11 %, snittengagemang +7 %. Organiskt sök drev merparten — tre nya inlägg rankar topp 5.";
    case "seo":
      return "Snittpositionen förbättrades från 4,8 till 3,7 över bevakade sökord. \"kundrapportering byrå\" hoppade till position 2,8.";
    case "paid":
      return "ROAS nådde 4,37× på lägre kostnad. Varumärkesskydd levererade 8,4× — vi rekommenderar 25 % budgetökning.";
    case "ecom":
      return "Intäkterna växte 18,6 % till 1,85 mn kr med snittordervärde upp 4,2 %. Aurora Pro fortsätter vara främsta drivkraften.";
    case "social":
      return "Engagemanget upp 12 % med starkast resultat från kreatörsprogrammet på TikTok.";
    case "conv":
      return "3 241 konverteringar, +22,8 %. Konverteringsgraden steg från 1,8 % till 2,2 % med det nya kassaflödet.";
    case "opp":
      return "Tre högavkastande drag: skala Varumärkesskydd, fixa sidhastigheten på Halo Mini, uppdatera fem SEO-sidor som tappar i ranking.";
    default:
      return "";
  }
}

function renderSlideBody(id: string) {
  if (id === "traffic" || id === "exec") {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-1">
          {[
            { l: "Sessioner", v: "184k", d: "+18 %" },
            { l: "Användare", v: "96,8k", d: "+11 %" },
            { l: "Snittengagemang", v: "2 min 14 s", d: "+7 %" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl border border-border/60 bg-background/50 p-4">
              <p className="text-sm text-muted-foreground">{m.l}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-display text-3xl">{m.v}</p>
                <span className="text-xs font-medium text-success">{m.d}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border/60 bg-background/50 p-4 lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="slide-g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="sessions" stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#slide-g)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  if (id === "seo") {
    return (
      <div className="overflow-hidden rounded-xl border border-border/60 bg-background/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Sökord</th>
              <th className="px-4 py-3 text-right">Klick</th>
              <th className="px-4 py-3 text-right">Visningar</th>
              <th className="px-4 py-3 text-right">Snittpos.</th>
              <th className="px-4 py-3 text-right">CTR</th>
            </tr>
          </thead>
          <tbody>
            {seoQueries.map((q) => (
              <tr key={q.query} className="border-t border-border/60">
                <td className="px-4 py-3 font-medium">{q.query}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.clicks.toLocaleString("sv-SE")}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.impressions.toLocaleString("sv-SE")}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.position.toFixed(1).replace(".", ",")}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.ctr.toFixed(1).replace(".", ",")} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (id === "paid") {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-border/60 bg-background/50 p-4">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaigns} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} interval={0} angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="roas" fill="var(--chart-3)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border/60 bg-background/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Kampanj</th>
                <th className="px-4 py-3">Kanal</th>
                <th className="px-4 py-3 text-right">Kostnad</th>
                <th className="px-4 py-3 text-right">Konverteringar</th>
                <th className="px-4 py-3 text-right">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.name} className="border-t border-border/60">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.channel}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{formatCurrency(c.spend)}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{c.conv}</td>
                  <td className="px-4 py-3 text-right tabular-nums font-medium">{c.roas.toFixed(2).replace(".", ",")}×</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (id === "opp") {
    return (
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          { t: "Skala Varumärkesskydd", b: "8,4× ROAS — öka budgeten med 25 % för att fånga ca 82 000 kr extra intäkter.", impact: "+82 000 kr" },
          { t: "Fixa Halo Mini-sidan", b: "Sidhastigheten föll från 92 till 78. Komprimera hjältebild för att återta 2,3 % konv.", impact: "+2,3 %" },
          { t: "Uppdatera 5 SEO-sidor", b: "Tappar i ranking. Uppdatera innehåll och bygg om interna länkar.", impact: "+3,4k klick" },
          { t: "Pausa svaga annonser", b: "Två LinkedIn-annonsset under 2× ROAS — flytta budget till topparna.", impact: "Spara 14 000 kr" },
        ].map((o) => (
          <div key={o.t} className="rounded-xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start justify-between">
              <Lightbulb className="h-5 w-5 text-accent" />
              <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">{o.impact}</span>
            </div>
            <h3 className="mt-3 font-semibold">{o.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{o.b}</p>
          </div>
        ))}
      </div>
    );
  }

  if (id === "conv") {
    return <ConversionsReport />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {[
        { l: "Intäkter", v: "1,85 mn kr", d: "+18,6 %" },
        { l: "Användare", v: "96,8k", d: "+11,4 %" },
        { l: "ROAS", v: "4,37×", d: "+23 %" },
      ].map((m) => (
        <div key={m.l} className="rounded-xl border border-border/60 bg-background/50 p-5">
          <p className="text-sm text-muted-foreground">{m.l}</p>
          <p className="mt-2 font-display text-4xl">{m.v}</p>
          <p className="mt-1 text-xs font-medium text-success">{m.d}</p>
        </div>
      ))}
    </div>
  );
}

function ConversionsReport() {
  const channels = [
    { name: "Google Ads", count: 1124, share: 34.7, value: 642_300, cost: 165_400 },
    { name: "Organiskt sök", count: 892, share: 27.5, value: 498_200, cost: null },
    { name: "Meta Ads", count: 614, share: 18.9, value: 312_800, cost: 142_600 },
    { name: "Direkt", count: 386, share: 11.9, value: 218_400, cost: null },
    { name: "Referral", count: 225, share: 6.9, value: 124_900, cost: null },
  ];

  const types = [
    { name: "Köp", count: 1842, share: 56.8, icon: ShoppingBag, accent: "var(--chart-1)" },
    { name: "Kontaktformulär", count: 742, share: 22.9, icon: Sparkles, accent: "var(--chart-2)" },
    { name: "Bokningar", count: 412, share: 12.7, icon: Target, accent: "var(--chart-3)" },
    { name: "Telefonsamtal", count: 245, share: 7.6, icon: Heart, accent: "var(--chart-4)" },
  ];

  const recommendations = [
    {
      t: "Skala Google Ads · Varumärkesskydd",
      b: "8,4× ROAS — öka budgeten 25 % för cirka 280 extra konverteringar nästa månad.",
      impact: "+280 konv.",
    },
    {
      t: "Optimera kontaktformuläret",
      b: "Avhopp på 38 % i steg 2. Förkorta från 7 till 4 fält för att lyfta konv. ~1,4 %.",
      impact: "+1,4 %",
    },
    {
      t: "Aktivera samtalsspårning",
      b: "Telefonsamtal växer 18 % men spåras inte i Meta Ads. Koppla på för rätt attribuering.",
      impact: "Bättre data",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Top KPI cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { l: "Totala konverteringar", v: "3 241", d: "+22,8 %" },
          { l: "Intäkt från konverteringar", v: "1,79 mn kr", d: "+18,6 %" },
          { l: "Kostnad per konvertering", v: "130 kr", d: "−9,4 %" },
          { l: "Bästa kanal", v: "Google Ads", d: "34,7 % andel" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-2xl border border-border/60 bg-background/50 p-5"
          >
            <p className="text-sm text-muted-foreground">{m.l}</p>
            <p className="mt-2 font-display text-3xl tracking-tight">{m.v}</p>
            <p className="mt-1 text-xs font-medium text-success">{m.d}</p>
          </div>
        ))}
      </div>

      {/* Conversions by channel */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl tracking-tight">Konverteringar per kanal</h2>
          <p className="text-xs text-muted-foreground">Senaste 30 dagarna</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/50">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Kanal</th>
                <th className="px-5 py-3 text-right">Antal</th>
                <th className="px-5 py-3">Andel</th>
                <th className="px-5 py-3 text-right">Värde</th>
                <th className="px-5 py-3 text-right">Kostnad</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c) => (
                <tr key={c.name} className="border-t border-border/60">
                  <td className="px-5 py-4 font-medium">{c.name}</td>
                  <td className="px-5 py-4 text-right tabular-nums">
                    {c.count.toLocaleString("sv-SE")}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-foreground/80"
                          style={{ width: `${c.share}%` }}
                        />
                      </div>
                      <span className="tabular-nums text-muted-foreground">
                        {c.share.toFixed(1).replace(".", ",")} %
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right tabular-nums">
                    {formatCurrency(c.value)}
                  </td>
                  <td className="px-5 py-4 text-right tabular-nums text-muted-foreground">
                    {c.cost ? formatCurrency(c.cost) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conversion types */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl tracking-tight">Typ av konvertering</h2>
          <p className="text-xs text-muted-foreground">Fördelning över alla kanaler</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="rounded-2xl border border-border/60 bg-background/50 p-5"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${t.accent} 14%, transparent)`, color: t.accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t.name}</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="font-display text-3xl tracking-tight">
                    {t.count.toLocaleString("sv-SE")}
                  </p>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {t.share.toFixed(1).replace(".", ",")} %
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI Summary */}
      <section className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              AI-sammanfattning
            </p>
            <p className="mt-2 text-base leading-relaxed">
              Konverteringarna växer 22,8 % månad över månad, drivet av Google Ads och
              starkare organisk trafik. Köp står för 56,8 % av volymen, men
              kontaktformulär växer snabbast (+34 %). Kostnaden per konvertering föll
              till 130 kr — en av era starkaste månader hittills.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-2xl tracking-tight">Rekommendationer</h2>
          <p className="text-xs text-muted-foreground">Tre nästa steg</p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {recommendations.map((r) => (
            <div
              key={r.t}
              className="rounded-2xl border border-border/60 bg-background/50 p-5"
            >
              <div className="flex items-start justify-between">
                <Lightbulb className="h-5 w-5 text-accent" />
                <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                  {r.impact}
                </span>
              </div>
              <h3 className="mt-3 font-semibold">{r.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
