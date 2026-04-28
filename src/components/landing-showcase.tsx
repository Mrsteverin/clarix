import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Layers,
  MousePointerClick,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export function Showcase({
  eyebrow,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl tracking-[-0.035em] sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.6] text-foreground/70">
          {body}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 max-w-5xl"
      >
        <div className="pointer-events-none absolute -inset-12 -z-10">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-brand opacity-15 blur-3xl" />
          <div className="absolute -bottom-10 left-1/4 h-40 w-1/2 rounded-full bg-accent/25 blur-3xl" />
        </div>
        {visual}
      </motion.div>
    </div>
  );
}

function VisualFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/40 bg-gradient-card shadow-[0_50px_120px_-30px_rgba(15,23,42,0.5),0_20px_40px_-20px_rgba(15,23,42,0.3)] ring-1 ring-white/5">
      <div className="flex items-center gap-1.5 border-b border-border/40 bg-gradient-to-b from-muted/40 to-muted/20 px-4 py-3 backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-xs font-medium tracking-tight text-muted-foreground">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export function DashboardKpiVisual() {
  const kpis = [
    { l: "Sessioner", v: "184k", d: "+14 %", icon: TrendingUp },
    { l: "Leads", v: "2 184", d: "+9 %", icon: MousePointerClick },
    { l: "Intäkter", v: "1,8 mn", d: "+18 %", icon: ArrowUpRight },
    { l: "ROAS", v: "4,37×", d: "+23 %", icon: Target },
  ];
  return (
    <VisualFrame label="clarix.se/oversikt">
      <div className="space-y-5 p-7">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.l}
              className="rounded-xl border border-border/60 bg-background/60 p-5 text-left"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">{k.l}</p>
                <k.icon className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <p className="mt-3 font-numeric text-3xl text-foreground">{k.v}</p>
              <p className="mt-1 text-xs font-semibold text-success">{k.d}</p>
            </div>
          ))}
        </div>
        <div className="relative rounded-xl border border-border/60 bg-background/60 p-5">
          <div className="pointer-events-none absolute inset-x-6 bottom-2 h-12 rounded-full bg-accent/30 blur-2xl" />
          <div className="relative flex h-44 items-end gap-1.5">
            {[35, 48, 42, 55, 60, 52, 68, 72, 70, 80, 86, 95, 90, 102, 115, 108, 122].map(
              (h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent shadow-[0_0_20px_-2px_rgba(99,102,241,0.4)]"
                />
              ),
            )}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

export function AiInsightsVisual() {
  const insights = [
    {
      tone: "success" as const,
      title: "Trafiken växer organiskt",
      body: "Tre nya blogginlägg drev +14 % sessioner senaste veckan.",
    },
    {
      tone: "accent" as const,
      title: "Skjut in budget på Meta",
      body: "ROAS 5,2× på kampanj \u201CVår-sale\u201D — höj dagsbudget med 30 %.",
    },
    {
      tone: "warning" as const,
      title: "Konvertering tappar mobilt",
      body: "Checkout-steg 2 har 18 % drop-off. Kolla formuläret på iOS.",
    },
  ];
  const toneMap = {
    success: "bg-success/15 text-success",
    accent: "bg-accent/15 text-accent",
    warning: "bg-warning/20 text-warning-foreground",
  };
  return (
    <VisualFrame label="clarix.se/ai-insikter">
      <div className="space-y-3 p-7">
        <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent/15 to-transparent px-4 py-3">
          <Sparkles className="h-4 w-4 text-accent" />
          <p className="text-sm font-semibold">Veckans 3 viktigaste insikter</p>
        </div>
        {insights.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-border/60 bg-background/60 p-5"
          >
            <div className="flex items-start gap-3.5">
              <span
                className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${toneMap[it.tone]}`}
              >
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-base font-semibold text-foreground">{it.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
                  {it.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function SeoChannelsVisual() {
  const rows = [
    { name: "SEO", icon: Search, value: "62 412", delta: "+12 %", bar: 82 },
    { name: "Google Ads", icon: Target, value: "48 901", delta: "+6 %", bar: 64 },
    { name: "Meta Ads", icon: Layers, value: "38 220", delta: "+21 %", bar: 56 },
    { name: "Direkt", icon: Globe, value: "24 105", delta: "+3 %", bar: 38 },
  ];
  return (
    <VisualFrame label="clarix.se/kanaler">
      <div className="space-y-5 p-7">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold">Trafik & konvertering per kanal</p>
          <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-xs text-muted-foreground">
            Senaste 30 dagar
          </span>
        </div>
        <div className="space-y-3">
          {rows.map((c) => (
            <div
              key={c.name}
              className="rounded-xl border border-border/60 bg-background/60 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
                    <c.icon className="h-4 w-4 text-foreground/80" />
                  </span>
                  <span className="text-sm font-semibold">{c.name}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-numeric text-lg text-foreground">
                    {c.value}
                  </span>
                  <span className="text-xs font-semibold text-success">
                    {c.delta}
                  </span>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted/60">
                <div
                  style={{ width: `${c.bar}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-[0_0_12px_-1px_rgba(99,102,241,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
