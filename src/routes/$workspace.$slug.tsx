import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Calendar,
  Clock,
  Lock,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Trophy,
  Lightbulb,
  AlertTriangle,
  Info,
  RefreshCw,
} from "lucide-react";
import {
  channelBreakdown,
  formatCurrency,
  formatNumber,
  insights,
  kpis,
  topPages,
  trafficTrend,
} from "@/lib/demo-data";
import {
  findLink,
  isExpired,
  recordVisit,
  verifyPassword,
  type ShareLink,
} from "@/lib/share-links";

export const Route = createFileRoute("/$workspace/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Rapport — ${params.workspace} | ClarityCloud` },
      {
        name: "description",
        content: `Live marknadsrapport för ${params.workspace} — drivs av ClarityCloud.`,
      },
      { name: "robots", content: "noindex, nofollow" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    ],
  }),
  component: PublicReportPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <CenteredCard>
        <h1 className="font-display text-3xl tracking-tight">Något gick fel</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
        >
          <RefreshCw className="h-4 w-4" />
          Försök igen
        </button>
      </CenteredCard>
    );
  },
  notFoundComponent: () => (
    <CenteredCard>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight">Rapporten hittades inte</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Länken kan vara felstavad, raderad eller utgången.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
      >
        Till ClarityCloud
      </Link>
    </CenteredCard>
  ),
});

function CenteredCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 text-center shadow-soft">
        {children}
      </div>
    </div>
  );
}

function PublicReportPage() {
  const { workspace, slug } = Route.useParams();
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "missing" }
    | { kind: "expired"; link: ShareLink }
    | { kind: "locked"; link: ShareLink }
    | { kind: "ready"; link: ShareLink }
  >({ kind: "loading" });

  useEffect(() => {
    const link = findLink(workspace, slug);
    if (!link) {
      setState({ kind: "missing" });
      return;
    }
    if (isExpired(link)) {
      setState({ kind: "expired", link });
      return;
    }
    if (link.passwordHash) {
      setState({ kind: "locked", link });
      return;
    }
    setState({ kind: "ready", link });
    recordVisit(workspace, slug);
  }, [workspace, slug]);

  if (state.kind === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-foreground" />
      </div>
    );
  }

  if (state.kind === "missing") {
    throw notFound();
  }

  if (state.kind === "expired") {
    return (
      <CenteredCard>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Clock className="h-5 w-5 text-muted-foreground" />
        </div>
        <h1 className="mt-4 font-display text-3xl tracking-tight">Länken har gått ut</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Be avsändaren skapa en ny delbar länk.
        </p>
      </CenteredCard>
    );
  }

  if (state.kind === "locked") {
    return (
      <PasswordGate
        link={state.link}
        onUnlock={() => {
          setState({ kind: "ready", link: state.link });
          recordVisit(workspace, slug);
        }}
      />
    );
  }

  return <BrandedReport link={state.link} />;
}

/* ─────────────────────── Password gate ─────────────────────── */

function PasswordGate({ link, onUnlock }: { link: ShareLink; onUnlock: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const ok = await verifyPassword(link, pw);
    setBusy(false);
    if (ok) onUnlock();
    else setError("Fel lösenord. Försök igen.");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 shadow-soft"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {link.workspaceLabel}
            </p>
            <h1 className="font-display text-2xl tracking-tight">Lösenordsskyddad rapport</h1>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Den här rapporten kräver ett lösenord. Det skickades med inbjudan.
        </p>
        <label className="mt-6 block text-sm font-medium">Lösenord</label>
        <input
          type="password"
          autoFocus
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-foreground focus:outline-none"
          placeholder="••••••••"
        />
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
        <button
          type="submit"
          disabled={busy || !pw}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Verifierar…" : "Visa rapport"}
        </button>
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" />
          Säker, krypterad anslutning. Drivs av ClarityCloud.
        </div>
      </motion.form>
    </div>
  );
}

/* ─────────────────────── Branded report ─────────────────────── */

const insightIcons = {
  win: Trophy,
  opportunity: Lightbulb,
  warning: AlertTriangle,
  info: Info,
};

const insightStyles = {
  win: "bg-success/10 text-success",
  opportunity: "bg-accent/10 text-accent",
  warning: "bg-warning/10 text-warning",
  info: "bg-muted text-muted-foreground",
};

function BrandedReport({ link }: { link: ShareLink }) {
  const periodLabel = useMemo(() => {
    if (link.type === "snapshot") return link.period ?? "Vald period";
    return "Senaste 30 dagarna · uppdateras automatiskt";
  }, [link]);

  const initials = link.workspaceLabel
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-sm font-semibold text-white shadow-soft">
              {initials || "C"}
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-lg tracking-tight">{link.workspaceLabel}</p>
              <p className="truncate text-xs text-muted-foreground">Marknadsrapport</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {link.type === "live" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                <Calendar className="h-3 w-3" />
                Snapshot
              </span>
            )}
            <span className="hidden text-xs text-muted-foreground sm:inline">{periodLabel}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {periodLabel}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Marknadsöversikt för{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              {link.workspaceLabel}
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            En sammanfattning av din trafik, intäkter och kanalresultat — i klartext.
          </p>
        </motion.div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <PublicKpi label="Sessioner" value={formatNumber(kpis.sessions.value)} delta={kpis.sessions.delta} />
          <PublicKpi label="Konverteringar" value={formatNumber(kpis.conversions.value)} delta={kpis.conversions.delta} />
          <PublicKpi label="Intäkter" value={formatCurrency(kpis.revenue.value)} delta={kpis.revenue.delta} />
          <PublicKpi label="ROAS" value={kpis.roas.value.toFixed(2).replace(".", ",") + "×"} delta={kpis.roas.delta} />
        </div>
      </section>

      {/* AI insight */}
      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-soft sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">AI-insikt</p>
              <p className="mt-1 text-base leading-snug sm:text-lg">
                Trafiken ökade <span className="text-success">+14 %</span> denna månad — främst
                drivet av organisk tillväxt på tre nya blogginlägg som rankar topp 5.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Charts */}
      <section className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-display text-xl tracking-tight sm:text-2xl">Trafiktrend</h2>
              <p className="text-xs text-muted-foreground">Sessioner och användare</p>
            </div>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-4 h-56 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficTrend} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="pubg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="pubg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="sessions" stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#pubg1)" />
                <Area type="monotone" dataKey="users" stroke="var(--chart-2)" strokeWidth={2.5} fill="url(#pubg2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <h2 className="font-display text-xl tracking-tight sm:text-2xl">Kanaler</h2>
          <p className="text-xs text-muted-foreground">Trafikfördelning</p>
          <div className="mt-2 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelBreakdown}
                  dataKey="value"
                  innerRadius={42}
                  outerRadius={68}
                  paddingAngle={3}
                  stroke="none"
                >
                  {channelBreakdown.map((c, i) => (
                    <Cell key={i} fill={c.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-3 space-y-1.5">
            {channelBreakdown.map((c) => (
              <li key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </div>
                <span className="font-medium tabular-nums">{c.value} %</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Top pages */}
      <section className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <h2 className="font-display text-xl tracking-tight sm:text-2xl">Mest besökta sidor</h2>
          <div className="mt-4 h-48 sm:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPages} layout="vertical" margin={{ top: 4, right: 16, left: 4, bottom: 0 }}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis dataKey="path" type="category" stroke="var(--muted-foreground)" fontSize={10} width={140} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="views" fill="var(--chart-1)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <h2 className="font-display text-xl tracking-tight sm:text-2xl">Rekommendationer</h2>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {insights.map((ins) => {
              const Icon = insightIcons[ins.type as keyof typeof insightIcons];
              return (
                <li key={ins.title} className="rounded-xl border border-border/60 bg-background/40 p-4">
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${insightStyles[ins.type as keyof typeof insightStyles]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-snug">{ins.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ins.body}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-12 max-w-6xl px-4 text-center sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Drivs av <span className="font-medium text-foreground">ClarityCloud</span>
        </Link>
      </footer>
    </div>
  );
}

function PublicKpi({ label, value, delta }: { label: string; value: string; delta: number }) {
  const positive = delta >= 0;
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-soft sm:p-5">
      <p className="text-xs font-medium text-muted-foreground sm:text-sm">{label}</p>
      <p className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">{value}</p>
      <p
        className={`mt-1 text-xs font-medium ${
          positive ? "text-success" : "text-destructive"
        }`}
      >
        {positive ? "▲" : "▼"} {Math.abs(delta).toFixed(1)} %
      </p>
    </div>
  );
}
