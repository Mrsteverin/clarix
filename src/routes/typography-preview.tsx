import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/typography-preview")({
  head: () => ({
    meta: [
      { title: "Typografi A/B — ClarityCloud" },
      { name: "description", content: "Jämförelse av nuvarande och ny typografi för ClarityCloud." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TypographyPreview,
});

const FRAUNCES = '"Fraunces", "Times New Roman", serif';
const JAKARTA = '"Plus Jakarta Sans", "Inter", system-ui, sans-serif';
const INTER = '"Inter", system-ui, sans-serif';

function TypographyPreview() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Tillbaka
          </Link>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Typografi · A/B
          </p>
          <span className="w-20" />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Brand system</p>
        <h1 className="mt-3 font-display text-5xl text-foreground sm:text-6xl">
          Nuvarande <span className="font-accent text-muted-foreground">vs</span> Ny
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Två komplett byggda hero-sektioner sida vid sida — samma copy, olika typografi-system.
        </p>
      </section>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 pb-24 lg:grid-cols-2">
        <Variant
          label="A · Nuvarande"
          tone="Fraunces display, blandade vikter"
          cardStyle={{ fontFamily: INTER }}
        >
          <Hero
            badgeText="För kommunikatörer, ägare, VD:ar och CFO:er"
            line1Style={{
              fontFamily: FRAUNCES,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
            }}
            line2Style={{
              fontFamily: FRAUNCES,
              fontStyle: "italic",
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
            bodyStyle={{
              fontFamily: INTER,
              fontSize: "1.0625rem",
              lineHeight: 1.55,
              color: "oklch(0.52 0.02 260)",
            }}
            kpiLabelStyle={{
              fontFamily: INTER,
              fontSize: "0.7rem",
              color: "oklch(0.52 0.02 260)",
            }}
            kpiValueStyle={{
              fontFamily: FRAUNCES,
              fontWeight: 600,
              fontSize: "1.65rem",
              letterSpacing: "-0.02em",
            }}
          />
          <SpecList
            items={[
              ["H1", "Fraunces 700 · italic accent"],
              ["Body", "Inter 400 · 17px · gråare"],
              ["KPI", "Fraunces 600 · 26px"],
              ["Känsla", "Editorial · magasin"],
            ]}
          />
        </Variant>

        <Variant
          label="B · Ny — Premium SaaS"
          tone="Plus Jakarta ExtraBold + Fraunces accent"
          highlight
        >
          <Hero
            badgeText="För kommunikatörer, ägare, VD:ar och CFO:er"
            line1Style={{
              fontFamily: JAKARTA,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
              color: "var(--color-foreground)",
            }}
            line2Style={{
              fontFamily: FRAUNCES,
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
            }}
            bodyStyle={{
              fontFamily: INTER,
              fontSize: "1.125rem",
              lineHeight: 1.65,
              color: "var(--color-foreground)",
              opacity: 0.78,
            }}
            kpiLabelStyle={{
              fontFamily: INTER,
              fontWeight: 500,
              fontSize: "0.75rem",
              color: "var(--color-muted-foreground)",
              letterSpacing: "0.01em",
            }}
            kpiValueStyle={{
              fontFamily: JAKARTA,
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "-0.04em",
              fontFeatureSettings: '"tnum" 1',
            }}
            useGradientLine2
          />
          <SpecList
            items={[
              ["H1", "Plus Jakarta Sans 800 · -0.035em"],
              ["Body", "Inter 400 · 18px · mörkare"],
              ["KPI", "Jakarta 800 · 32px · tabular"],
              ["Accent", "Fraunces italic · gradient"],
              ["Känsla", "Modern · självsäker · SaaS"],
            ]}
          />
        </Variant>
      </div>
    </div>
  );
}

function Variant({
  label,
  tone,
  highlight,
  children,
  cardStyle,
}: {
  label: string;
  tone: string;
  highlight?: boolean;
  children: React.ReactNode;
  cardStyle?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border bg-gradient-card p-1 ${
        highlight ? "border-accent/40 shadow-glow" : "border-border/60 shadow-soft"
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <p
          className="font-display text-sm uppercase tracking-[0.18em]"
          style={{ color: highlight ? "var(--color-accent)" : "var(--color-muted-foreground)" }}
        >
          {label}
        </p>
        <p className="text-xs text-muted-foreground">{tone}</p>
      </div>
      <div
        className="rounded-[1.4rem] border border-border/50 bg-background/70 p-8 sm:p-10"
        style={cardStyle}
      >
        {children}
      </div>
    </div>
  );
}

function Hero({
  badgeText,
  line1Style,
  line2Style,
  bodyStyle,
  kpiLabelStyle,
  kpiValueStyle,
  useGradientLine2,
}: {
  badgeText: string;
  line1Style: React.CSSProperties;
  line2Style: React.CSSProperties;
  bodyStyle: React.CSSProperties;
  kpiLabelStyle: React.CSSProperties;
  kpiValueStyle: React.CSSProperties;
  useGradientLine2?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-success" />
        {badgeText}
      </div>

      <h2 className="mx-auto mt-7 max-w-xl text-[2.5rem] sm:text-[3.25rem]" style={line1Style}>
        Förstå din marknadsföring
        <br />
        <span
          className={useGradientLine2 ? "text-gradient-brand" : ""}
          style={
            useGradientLine2
              ? { ...line2Style }
              : {
                  ...line2Style,
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }
          }
        >
          på 30 sekunder.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-md" style={bodyStyle}>
        ClarityCloud förvandlar rådata från alla dina kanaler till klara, vackra rapporter.
      </p>

      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
          <Sparkles className="h-3 w-3" />
          Kom igång
        </span>
        <span className="rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-foreground/80">
          Se exempel
        </span>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        {[
          { l: "Sessioner", v: "184k" },
          { l: "Intäkter", v: "1,8 mn" },
          { l: "ROAS", v: "4,37×" },
        ].map((k) => (
          <div
            key={k.l}
            className="rounded-xl border border-border/60 bg-background/60 p-4 text-left"
          >
            <p style={kpiLabelStyle}>{k.l}</p>
            <p className="mt-1" style={kpiValueStyle}>
              {k.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpecList({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-2 px-2 pb-2 sm:grid-cols-2">
      {items.map(([k, v]) => (
        <div
          key={k}
          className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/30 px-3 py-2 text-xs"
        >
          <span className="font-medium uppercase tracking-wider text-muted-foreground">{k}</span>
          <span className="text-foreground/85">{v}</span>
        </div>
      ))}
    </div>
  );
}
