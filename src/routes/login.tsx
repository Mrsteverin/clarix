import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Github, Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — FlowReport" },
      { name: "description", content: "Sign in to your FlowReport account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-aurora" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40" />

      <Link to="/" className="absolute left-6 top-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <span className="font-display text-xl">FlowReport</span>
      </Link>

      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border/60 bg-gradient-card p-8 shadow-elevated backdrop-blur-xl"
        >
          <h1 className="font-display text-4xl tracking-tight">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to ship beautiful reports."
              : "Start your free 14-day trial. No card required."}
          </p>

          <div className="mt-8 space-y-2">
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background py-2.5 text-sm font-medium hover:bg-muted">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background py-2.5 text-sm font-medium hover:bg-muted">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
            className="space-y-3"
          >
            <input
              type="email"
              placeholder="you@agency.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              defaultValue="alex@aurora.studio"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              defaultValue="demo-password"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              {mode === "signin" ? "Sign in" : "Create account"}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "New to FlowReport?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="font-medium text-foreground hover:underline"
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
