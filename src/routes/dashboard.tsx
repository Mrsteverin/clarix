import { createFileRoute } from "@tanstack/react-router";
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
  Sparkles,
  TrendingUp,
  Calendar,
  Download,
  Lightbulb,
  AlertTriangle,
  Trophy,
  Info,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { KpiCard } from "@/components/kpi-card";
import {
  channelBreakdown,
  formatCurrency,
  formatNumber,
  insights,
  kpis,
  topPages,
  trafficTrend,
} from "@/lib/demo-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — FlowReport" },
      { name: "description", content: "Your unified marketing performance dashboard." },
    ],
  }),
  component: DashboardPage,
});

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

function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 lg:px-8 lg:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Aurora Studios
            </p>
            <h1 className="mt-2 font-display text-5xl tracking-tight">Good morning, Alex</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Here's how things have moved in the last 30 days.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-muted">
              <Calendar className="h-4 w-4" />
              Last 30 days
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </motion.div>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
          <KpiCard label="Sessions" value={kpis.sessions.value} delta={kpis.sessions.delta} spark={kpis.sessions.spark} format={formatNumber} accent="var(--chart-1)" delay={0.05} />
          <KpiCard label="Users" value={kpis.users.value} delta={kpis.users.delta} spark={kpis.users.spark} format={formatNumber} accent="var(--chart-2)" delay={0.1} />
          <KpiCard label="Conversions" value={kpis.conversions.value} delta={kpis.conversions.delta} spark={kpis.conversions.spark} format={formatNumber} accent="var(--chart-3)" delay={0.15} />
          <KpiCard label="Revenue" value={kpis.revenue.value} delta={kpis.revenue.delta} spark={kpis.revenue.spark} format={formatCurrency} accent="var(--chart-4)" delay={0.2} />
          <KpiCard label="Ad Spend" value={kpis.adSpend.value} delta={kpis.adSpend.delta} spark={kpis.adSpend.spark} format={formatCurrency} accent="var(--chart-5)" delay={0.25} />
          <KpiCard label="ROAS" value={kpis.roas.value} delta={kpis.roas.delta} spark={kpis.roas.spark} format={(n) => n.toFixed(2) + "×"} accent="var(--chart-1)" delay={0.3} />
        </div>

        {/* AI Insight banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-50" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">AI Insight</p>
              <p className="mt-1 text-lg font-medium leading-snug">
                Traffic increased <span className="text-success">+14%</span> this month — driven
                primarily by organic growth on three new blog posts ranking top-5.
              </p>
            </div>
            <button className="self-start whitespace-nowrap rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-muted sm:self-center">
              See breakdown
            </button>
          </div>
        </motion.div>

        {/* Trend + Channel */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft lg:col-span-2"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-display text-2xl">Traffic trend</h2>
                <p className="text-sm text-muted-foreground">Sessions vs users — last 12 weeks</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-1)" }} />
                  Sessions
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-2)" }} />
                  Users
                </span>
              </div>
            </div>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="sessions" stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#g1)" />
                  <Area type="monotone" dataKey="users" stroke="var(--chart-2)" strokeWidth={2.5} fill="url(#g2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft"
          >
            <h2 className="font-display text-2xl">Channels</h2>
            <p className="text-sm text-muted-foreground">Traffic split this month</p>
            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelBreakdown}
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {channelBreakdown.map((c, i) => (
                      <Cell key={i} fill={c.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-4 space-y-2">
              {channelBreakdown.map((c) => (
                <li key={c.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                    {c.name}
                  </div>
                  <span className="font-medium tabular-nums">{c.value}%</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Top pages + Insights */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl">Top pages</h2>
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topPages} layout="vertical" margin={{ top: 4, right: 16, left: 4, bottom: 0 }}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis dataKey="path" type="category" stroke="var(--muted-foreground)" fontSize={11} width={170} tickLine={false} axisLine={false} />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <h2 className="font-display text-2xl">Recommendations</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {insights.map((ins) => {
                const Icon = insightIcons[ins.type as keyof typeof insightIcons];
                return (
                  <li key={ins.title} className="rounded-xl border border-border/60 bg-background/40 p-3">
                    <div className="flex items-start gap-3">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${insightStyles[ins.type as keyof typeof insightStyles]}`}>
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
          </motion.div>
        </div>
      </div>
    </AppShell>
  );
}
