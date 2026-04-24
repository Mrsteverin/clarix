import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Globe, Palette, Sparkles, Upload, User } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — FlowReport" },
      { name: "description", content: "Workspace, branding and white-label settings." },
    ],
  }),
  component: SettingsPage,
});

const sections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "brand", label: "White-label", icon: Palette },
  { id: "domain", label: "Custom domain", icon: Globe },
  { id: "ai", label: "AI insights", icon: Sparkles },
] as const;

const accentColors = [
  "oklch(0.65 0.19 265)",
  "oklch(0.7 0.16 195)",
  "oklch(0.72 0.18 155)",
  "oklch(0.78 0.16 75)",
  "oklch(0.65 0.21 330)",
  "oklch(0.6 0.22 25)",
];

function SettingsPage() {
  const [active, setActive] = useState<(typeof sections)[number]["id"]>("profile");
  const [accent, setAccent] = useState(accentColors[0]);

  return (
    <AppShell>
      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Account</p>
          <h1 className="mt-2 font-display text-5xl tracking-tight">Settings</h1>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          <nav className="space-y-1">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                    isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </button>
              );
            })}
          </nav>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-soft lg:p-8"
          >
            {active === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl">Profile</h2>
                  <p className="text-sm text-muted-foreground">How your account appears across FlowReport.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-2xl font-medium text-white">
                    A
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
                    <Upload className="h-3.5 w-3.5" />
                    Upload photo
                  </button>
                </div>
                <Field label="Full name" defaultValue="Alex Chen" />
                <Field label="Email" defaultValue="alex@aurora.studio" type="email" />
                <Field label="Workspace" defaultValue="Aurora Agency" />
              </div>
            )}

            {active === "brand" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl">White-label</h2>
                  <p className="text-sm text-muted-foreground">Add your logo and colors. Reports will inherit them automatically.</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium">Logo</p>
                  <div className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-background/40 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-brand">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Drag & drop or click to upload</p>
                      <p className="text-xs text-muted-foreground">SVG, PNG · max 2MB</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-medium">Accent color</p>
                  <div className="flex flex-wrap gap-2">
                    {accentColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setAccent(color)}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-transparent transition-all hover:scale-105"
                        style={{ background: color, ...(accent === color ? { boxShadow: `0 0 0 2px var(--background), 0 0 0 4px ${color}` } : {}) }}
                      >
                        {accent === color && <Check className="h-4 w-4 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
                <Field label="Brand name on reports" defaultValue="Aurora Studios Reports" />
              </div>
            )}

            {active === "domain" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl">Custom domain</h2>
                  <p className="text-sm text-muted-foreground">Serve client dashboards on your own domain.</p>
                </div>
                <Field label="Domain" defaultValue="reports.aurora.studio" placeholder="reports.youragency.com" />
                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">DNS Configuration</p>
                  <div className="mt-3 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2">
                      <span>CNAME · reports</span>
                      <span className="text-muted-foreground">cname.flowreport.app</span>
                    </div>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-success">
                    <Check className="h-3 w-3" />
                    Verified · SSL active
                  </p>
                </div>
              </div>
            )}

            {active === "ai" && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl">AI insights</h2>
                  <p className="text-sm text-muted-foreground">Tune the tone and depth of generated summaries.</p>
                </div>
                <Toggle label="Auto-generate slide summaries" defaultChecked />
                <Toggle label="Surface recommendations on the dashboard" defaultChecked />
                <Toggle label="Email weekly digest of opportunities" />
                <div>
                  <p className="mb-2 text-sm font-medium">Tone</p>
                  <div className="flex flex-wrap gap-2">
                    {["Concise", "Conversational", "Executive", "Technical"].map((t, i) => (
                      <button
                        key={t}
                        className={`rounded-full border px-3 py-1.5 text-sm ${
                          i === 0
                            ? "border-foreground bg-foreground text-background"
                            : "border-border bg-background hover:bg-muted"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-end gap-2 border-t border-border/60 pt-6">
              <button className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
                Cancel
              </button>
              <button className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
                Save changes
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AppShell>
  );
}

function Field({
  label,
  defaultValue,
  placeholder,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}

function Toggle({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3 text-left text-sm font-medium hover:bg-muted/60"
    >
      <span>{label}</span>
      <span
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          on ? "bg-foreground" : "bg-muted"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-background shadow-soft transition-transform ${
            on ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}
