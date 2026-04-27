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
  reverse,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  reverse: boolean;
  visual: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={reverse ? "lg:order-2" : ""}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-[-0.035em] sm:text-5xl md:text-[3.25rem]">
          {title}
        </h2>
        <p className="mt-6 max-w-md text-lg leading-[1.6] text-foreground/75">
          {body}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-15 blur-3xl" />
        {visual}
      </motion.div>
    </div>
  );
}

function VisualFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-gradient-card shadow-elevated">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/30 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-muted-foreground">{label}</span>
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
    <VisualFrame label="claritycloud.se/oversikt">
      <div className="space-y-4 p-5">
        <div className="grid grid-cols-2 gap-3">
          {kpis.map((k) => (
            <div key={k.l} className="rounded-xl border border-border/60 bg-background/60 p-4 text-left">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">{k.l}</p>
                <k.icon className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <p className="mt-2 font-numeric text-3xl text-foreground">{k.v}</p>
              <p className="mt-0.5 text-xs font-semibold text-success">{k.d}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border/60 bg-background/60 p-4">
          <div className="flex items-end gap-1.5 h-32">
            {[35, 48, 42, 55, 60, 52, 68, 72, 70, 80, 86, 95, 90, 102, 115].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent"
              />
            ))}
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
    <VisualFrame label="claritycloud.se/ai-insikter">
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-2 rounded-lg bg-muted/40 px-3 py-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <p className="text-sm font-semibold">Veckans 3 viktigaste insikter</p>
        </div>
        {insights.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-border/60 bg-background/60 p-4"
          >
            <div className="flex items-start gap-3">
              <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${toneMap[it.tone]}`}>
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{it.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">{it.body}</p>
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
    <VisualFrame label="claritycloud.se/kanaler">
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">Trafik & konvertering per kanal</p>
          <span className="rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-xs text-muted-foreground">
            Senaste 30 dagar
          </span>
        </div>
        <div className="space-y-2.5">
          {rows.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/60 bg-background/60 p-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-muted/60">
                    <c.icon className="h-3.5 w-3.5 text-foreground/80" />
                  </span>
                  <span className="text-sm font-semibold">{c.name}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-numeric text-base text-foreground">{c.value}</span>
                  <span className="text-xs font-semibold text-success">{c.delta}</span>
                </div>
              </div>
              <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted/60">
                <div
                  style={{ width: `${c.bar}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
