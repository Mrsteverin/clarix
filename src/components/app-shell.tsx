import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Plug,
  FileText,
  Users,
  Settings,
  Sparkles,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { to: "/dashboard", label: "Översikt", icon: LayoutDashboard },
  { to: "/connections", label: "Anslutningar", icon: Plug },
  { to: "/reports", label: "Rapporter", icon: FileText },
  { to: "/clients", label: "Kunder", icon: Users },
  { to: "/settings", label: "Inställningar", icon: Settings },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen w-full bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-aurora opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-pattern opacity-40" />

      <aside className="hidden w-64 shrink-0 border-r border-border/60 bg-sidebar/60 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="flex h-16 items-center gap-2 px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-xl">ClarityCloud</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const active = location.pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-xl bg-sidebar-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className="relative h-4 w-4" />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="m-3 rounded-2xl border border-border/60 bg-gradient-card p-4">
          <p className="text-xs font-medium text-muted-foreground">Tips</p>
          <p className="mt-1 text-sm">
            Tryck <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px]">⌘K</kbd> för att hoppa vart du vill.
          </p>
        </div>

        <div className="flex items-center gap-3 border-t border-border/60 p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 text-sm font-medium text-white">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Alex Lindqvist</p>
            <p className="truncate text-xs text-muted-foreground">Aurora Byrå</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border/60 bg-background/70 px-4 backdrop-blur-xl lg:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-lg">ClarityCloud</span>
          </div>

          <div className="relative hidden max-w-md flex-1 md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Sök rapporter, kunder, kanaler…"
              className="w-full rounded-full border border-border bg-muted/40 py-2 pl-10 pr-12 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
            <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground md:block">
              ⌘K
            </kbd>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Notiser"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/80 transition-all hover:bg-muted"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
            </button>
          </div>
        </header>

        <nav className="sticky top-16 z-20 flex gap-1 overflow-x-auto border-b border-border/60 bg-background/70 px-4 py-2 backdrop-blur-xl lg:hidden">
          {navItems.map((item) => {
            const active = location.pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                  active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
