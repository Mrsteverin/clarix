import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { AnimatedCounter } from "./animated-counter";

export function KpiCard({
  label,
  value,
  delta,
  spark,
  format = (n: number) => n.toLocaleString(),
  accent = "var(--chart-1)",
  delay = 0,
}: {
  label: string;
  value: number;
  delta: number;
  spark: number[];
  format?: (n: number) => string;
  accent?: string;
  delay?: number;
}) {
  const positive = delta >= 0;
  const data = spark.map((v, i) => ({ i, v }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-5 shadow-soft transition-all hover:shadow-elevated"
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${
            positive
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {Math.abs(delta).toFixed(1)}%
        </span>
      </div>
      <p className="mt-3 font-display text-4xl tracking-tight">
        <AnimatedCounter value={value} format={format} />
      </p>
      <div className="mt-4 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity={0.3} />
                <stop offset="100%" stopColor={accent} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="v"
              stroke={accent}
              strokeWidth={2}
              fill={`url(#spark-${label})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
