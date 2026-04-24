import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Plus, Search } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { integrations } from "@/lib/demo-data";

export const Route = createFileRoute("/connections")({
  head: () => ({
    meta: [
      { title: "Connections — FlowReport" },
      { name: "description", content: "Connect your marketing channels in two clicks." },
    ],
  }),
  component: ConnectionsPage,
});

const categories = ["All", "Analytics", "SEO", "Paid", "Ecommerce", "Social", "Other"];

function ConnectionsPage() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = integrations.filter(
    (i) =>
      (filter === "All" || i.category === filter) &&
      i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 lg:px-8 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Sources</p>
          <h1 className="mt-2 font-display text-5xl tracking-tight">Connect your channels</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Two clicks. We'll handle the rest — schemas, refresh tokens, normalization, all of it.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-xs flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search integrations…"
              className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
          </div>
          <div className="flex gap-1 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === c
                    ? "bg-foreground text-background"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((integ, i) => (
            <motion.div
              key={integ.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft transition-all hover:shadow-elevated"
            >
              <div className="flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white shadow-soft"
                  style={{ background: integ.color }}
                >
                  {integ.name.charAt(0)}
                </div>
                {integ.connected && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                    <Check className="h-3 w-3" />
                    Connected
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold">{integ.name}</h3>
              <p className="text-xs text-muted-foreground">{integ.category}</p>
              <button
                className={`mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  integ.connected
                    ? "border border-border bg-background hover:bg-muted"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {integ.connected ? (
                  "Manage"
                ) : (
                  <>
                    <Plus className="h-3.5 w-3.5" />
                    Connect
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
