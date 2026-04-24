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
      { title: "Reports — FlowReport" },
      {
        name: "description",
        content: "Drag, drop and ship presentation-ready client reports.",
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
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Report builder</p>
            <h1 className="mt-2 font-display text-5xl tracking-tight">April 2025 — Aurora Studios</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Drag to reorder. Click any slide to preview the presentation view.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium hover:bg-muted">
              <Share2 className="h-4 w-4" />
              Share link
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              <Download className="h-4 w-4" />
              Export PDF
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
                  Preview
                </button>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-background/40 py-4 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
          <Plus className="h-4 w-4" />
          Add slide
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
          Back to builder
        </button>
        <div className="flex items-center gap-2">
          <Link
            to="/reports"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Link>
          <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
            <Download className="h-4 w-4" />
            Export PDF
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

          <div className="mt-10 rounded-2xl border border-border/60 bg-background/50 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">AI Summary</p>
                <p className="mt-1 text-base leading-relaxed">{getSlideSummary(slideId)}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function getSlideHeadline(id: string) {
  switch (id) {
    case "exec":
      return "A standout month, end to end.";
    case "traffic":
      return "Traffic up 14%";
    case "seo":
      return "SEO momentum is building";
    case "paid":
      return "Paid efficiency at all-time high";
    case "ecom":
      return "Revenue grew 18.6%";
    case "social":
      return "Engagement keeps climbing";
    case "conv":
      return "3,241 conversions this month";
    case "opp":
      return "Where to invest next";
    default:
      return "Performance overview";
  }
}

function getSlideSummary(id: string) {
  switch (id) {
    case "exec":
      return "Revenue grew 18.6% on a 3.4% reduction in ad spend, lifting ROAS to 4.37×. Organic search drove most of the gains.";
    case "traffic":
      return "Sessions +18%, users +11%, average engagement +7%. Organic search drove most gains, with three new posts ranking top-5.";
    case "seo":
      return "Average position improved from 4.8 to 3.7 across tracked queries. \"agency client reporting\" jumped to position 2.8.";
    case "paid":
      return "ROAS hit 4.37× on lower spend. Brand Defense delivered an 8.4× return — a 25% budget increase is recommended.";
    case "ecom":
      return "Revenue grew 18.6% to $184.5k with AOV up 4.2%. Aurora Pro continues to be the top driver.";
    case "social":
      return "Engagement up 12% with strongest performance from the creator partnership program on TikTok.";
    case "conv":
      return "3,241 conversions, +22.8%. Conversion rate climbed from 1.8% to 2.2% with the new checkout flow.";
    case "opp":
      return "Three high-leverage moves: scale Brand Defense, fix Halo Mini page speed, refresh five SEO pages slipping in rankings.";
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
            { l: "Sessions", v: "184k", d: "+18%" },
            { l: "Users", v: "96.8k", d: "+11%" },
            { l: "Avg engagement", v: "2m 14s", d: "+7%" },
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
              <th className="px-4 py-3">Query</th>
              <th className="px-4 py-3 text-right">Clicks</th>
              <th className="px-4 py-3 text-right">Impressions</th>
              <th className="px-4 py-3 text-right">Avg pos</th>
              <th className="px-4 py-3 text-right">CTR</th>
            </tr>
          </thead>
          <tbody>
            {seoQueries.map((q) => (
              <tr key={q.query} className="border-t border-border/60">
                <td className="px-4 py-3 font-medium">{q.query}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.clicks.toLocaleString()}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.impressions.toLocaleString()}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.position.toFixed(1)}</td>
                <td className="px-4 py-3 text-right tabular-nums">{q.ctr.toFixed(1)}%</td>
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
                <th className="px-4 py-3">Campaign</th>
                <th className="px-4 py-3">Channel</th>
                <th className="px-4 py-3 text-right">Spend</th>
                <th className="px-4 py-3 text-right">Conversions</th>
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
                  <td className="px-4 py-3 text-right tabular-nums font-medium">{c.roas.toFixed(2)}×</td>
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
          { t: "Scale Brand Defense", b: "8.4× ROAS — increase budget by 25% to capture ~$8.2k more revenue.", impact: "+$8.2k" },
          { t: "Fix Halo Mini page", b: "Page speed dropped from 92→78. Compress hero image to recover 2.3% conv.", impact: "+2.3%" },
          { t: "Refresh 5 SEO pages", b: "Slipping in rankings. Refresh content + internal linking.", impact: "+3.4k clicks" },
          { t: "Pause underperforming creative", b: "Two LinkedIn ad sets below 2× ROAS — reallocate to top performers.", impact: "Save $1.4k" },
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

  // Default: ecom / social / conv
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {[
        { l: "Primary metric", v: "184.5k", d: "+18.6%" },
        { l: "Secondary", v: "96.8k", d: "+11.4%" },
        { l: "Tertiary", v: "4.37×", d: "+23%" },
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
