import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Link2,
  Copy,
  Check,
  Lock,
  KeyRound,
  Calendar,
  Sparkles,
  Trash2,
  Eye,
  Activity,
  Mail,
  ShieldCheck,
  AlertCircle,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import {
  buildShareDisplay,
  buildShareUrl,
  createLink,
  deleteLink,
  isExpired,
  isSlugAvailable,
  listLinks,
  slugify,
  suggestSlug,
  type ShareLink,
  type ShareLinkType,
} from "@/lib/share-links";

type Props = {
  onClose: () => void;
  workspaceLabel: string;
  workspaceSlug: string;
  currentPeriod?: string;
};

type Tab = "create" | "manage";

export function ShareLinksModal({
  onClose,
  workspaceLabel,
  workspaceSlug,
  currentPeriod = "April 2026",
}: Props) {
  const [tab, setTab] = useState<Tab>("create");
  const [links, setLinks] = useState<ShareLink[]>([]);

  function refresh() {
    setLinks(listLinks().filter((l) => l.workspace === workspaceSlug));
  }

  useEffect(() => {
    refresh();
  }, [workspaceSlug]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background shadow-elevated"
      >
        <header className="flex items-start justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-display text-2xl tracking-tight">Dela rapport</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Skapa en branded länk till {workspaceLabel} — utan inloggning för mottagaren.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Stäng"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <div className="flex gap-1 border-b border-border bg-muted/30 px-6 pt-3">
          <TabButton active={tab === "create"} onClick={() => setTab("create")}>
            <Plus className="h-3.5 w-3.5" /> Skapa länk
          </TabButton>
          <TabButton active={tab === "manage"} onClick={() => setTab("manage")}>
            <Activity className="h-3.5 w-3.5" /> Hantera ({links.length})
          </TabButton>
        </div>

        <AnimatePresence mode="wait">
          {tab === "create" ? (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <CreateForm
                workspaceLabel={workspaceLabel}
                workspaceSlug={workspaceSlug}
                currentPeriod={currentPeriod}
                onCreated={() => {
                  refresh();
                  setTab("manage");
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="manage"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <ManageList
                links={links}
                onChange={refresh}
                onCreateNew={() => setTab("create")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────── Create form ─────────────────────── */

function CreateForm({
  workspaceLabel,
  workspaceSlug,
  currentPeriod,
  onCreated,
}: {
  workspaceLabel: string;
  workspaceSlug: string;
  currentPeriod: string;
  onCreated: (link: ShareLink) => void;
}) {
  const [type, setType] = useState<ShareLinkType>("live");
  const [slug, setSlug] = useState("live");
  const [touched, setTouched] = useState(false);
  const [usePassword, setUsePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [useExpiry, setUseExpiry] = useState(false);
  const [expiryDays, setExpiryDays] = useState(30);
  const [busy, setBusy] = useState(false);

  // Auto-default slug when type changes (unless user typed something)
  useEffect(() => {
    if (touched) return;
    if (type === "live") setSlug("live");
    else setSlug(slugify(currentPeriod));
  }, [type, currentPeriod, touched]);

  const cleanedSlug = slugify(slug);
  const available = useMemo(
    () => cleanedSlug.length > 0 && isSlugAvailable(workspaceSlug, cleanedSlug),
    [workspaceSlug, cleanedSlug],
  );
  const suggestion = useMemo(
    () => (cleanedSlug && !available ? suggestSlug(workspaceSlug, cleanedSlug) : null),
    [workspaceSlug, cleanedSlug, available],
  );

  const previewUrl = `${buildShareDisplay({ workspace: workspaceSlug, slug: cleanedSlug || "..." })}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!available || busy) return;
    setBusy(true);
    try {
      const link = await createLink({
        workspace: workspaceSlug,
        workspaceLabel,
        slug: cleanedSlug,
        type,
        period: type === "snapshot" ? currentPeriod : undefined,
        password: usePassword && password ? password : undefined,
        expiresAt: useExpiry ? Date.now() + expiryDays * 24 * 60 * 60 * 1000 : undefined,
      });
      const full = buildShareUrl(link);
      await navigator.clipboard?.writeText(full).catch(() => {});
      toast.success("Länk skapad och kopierad", { description: full });
      onCreated(link);
    } catch (err) {
      toast.error("Kunde inte skapa länken", {
        description: err instanceof Error ? err.message : "Försök igen.",
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5 px-6 py-5">
      {/* Type selector */}
      <div className="grid grid-cols-2 gap-2">
        <TypeCard
          active={type === "live"}
          onClick={() => {
            setType("live");
            setTouched(false);
          }}
          icon={<Activity className="h-4 w-4" />}
          title="Live-rapport"
          desc="Uppdateras automatiskt"
          example={`/${workspaceSlug}/live`}
          accent="success"
        />
        <TypeCard
          active={type === "snapshot"}
          onClick={() => {
            setType("snapshot");
            setTouched(false);
          }}
          icon={<Calendar className="h-4 w-4" />}
          title="Snapshot"
          desc={`Låser ${currentPeriod}`}
          example={`/${workspaceSlug}/${slugify(currentPeriod)}`}
          accent="accent"
        />
      </div>

      {/* Slug editor */}
      <div>
        <label className="text-sm font-medium">Länkadress</label>
        <div className="mt-1.5 flex items-stretch overflow-hidden rounded-xl border border-border bg-background focus-within:border-foreground">
          <span className="flex items-center bg-muted/40 px-3 text-xs text-muted-foreground">
            claritycloud.app/{workspaceSlug}/
          </span>
          <input
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setTouched(true);
            }}
            placeholder="april-2026"
            className="flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none"
          />
        </div>
        <div className="mt-1.5 flex min-h-[18px] items-center justify-between text-xs">
          {cleanedSlug && available && (
            <span className="inline-flex items-center gap-1 text-success">
              <Check className="h-3 w-3" /> Tillgänglig
            </span>
          )}
          {cleanedSlug && !available && (
            <span className="inline-flex items-center gap-1 text-destructive">
              <AlertCircle className="h-3 w-3" /> Upptagen
            </span>
          )}
          {suggestion && (
            <button
              type="button"
              onClick={() => {
                setSlug(suggestion);
                setTouched(true);
              }}
              className="text-accent hover:underline"
            >
              Använd <span className="font-medium">{suggestion}</span>
            </button>
          )}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-2">
        <ToggleRow
          icon={<KeyRound className="h-4 w-4" />}
          title="Lösenordsskydd"
          desc="Mottagaren behöver lösenord"
          checked={usePassword}
          onChange={setUsePassword}
        />
        {usePassword && (
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Välj ett lösenord"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-foreground focus:outline-none"
          />
        )}
        <ToggleRow
          icon={<Calendar className="h-4 w-4" />}
          title="Utgångsdatum"
          desc={`Slutar fungera efter ${expiryDays} dagar`}
          checked={useExpiry}
          onChange={setUseExpiry}
        />
        {useExpiry && (
          <div className="flex gap-2">
            {[7, 30, 90].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setExpiryDays(d)}
                className={`flex-1 rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
                  expiryDays === d
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                {d} dagar
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Förhandsgranska
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <Link2 className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="flex-1 truncate text-sm font-medium">{previewUrl}</span>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
          onClick={() => toast.info("E-postintegration kommer snart")}
        >
          <Mail className="h-4 w-4" />
          Skicka via e-post
        </button>
        <button
          type="submit"
          disabled={!available || busy}
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {busy ? "Skapar…" : "Skapa & kopiera länk"}
        </button>
      </div>

      <div className="flex items-center gap-2 border-t border-border pt-3 text-[11px] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" />
        Säker, krypterad anslutning. Mottagare behöver inte konto.
      </div>
    </form>
  );
}

/* ─────────────────────── Manage list ─────────────────────── */

function ManageList({
  links,
  onChange,
  onCreateNew,
}: {
  links: ShareLink[];
  onChange: () => void;
  onCreateNew: () => void;
}) {
  if (links.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Sparkles className="h-5 w-5 text-muted-foreground" />
        </div>
        <p className="mt-4 font-display text-xl tracking-tight">Inga länkar än</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Skapa din första delbara rapport-länk.
        </p>
        <button
          onClick={onCreateNew}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> Skapa länk
        </button>
      </div>
    );
  }

  return (
    <div className="max-h-[60vh] divide-y divide-border overflow-y-auto px-6 py-2">
      {links.map((link) => (
        <LinkRow key={link.id} link={link} onChange={onChange} />
      ))}
    </div>
  );
}

function LinkRow({ link, onChange }: { link: ShareLink; onChange: () => void }) {
  const [copied, setCopied] = useState(false);
  const url = buildShareUrl(link);
  const display = buildShareDisplay(link);
  const expired = isExpired(link);

  function copy() {
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopied(true);
    toast.success("Länk kopierad");
    setTimeout(() => setCopied(false), 1600);
  }

  function remove() {
    deleteLink(link.id);
    toast.success("Länk borttagen");
    onChange();
  }

  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          link.type === "live" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"
        }`}
      >
        {link.type === "live" ? <Activity className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-medium">{display}</p>
          {link.passwordHash && (
            <Lock className="h-3 w-3 shrink-0 text-muted-foreground" aria-label="Lösenordsskyddad" />
          )}
        </div>
        <p className="mt-0.5 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" /> {link.visits.length} visningar
          </span>
          {link.expiresAt && (
            <span className={expired ? "text-destructive" : ""}>
              {expired ? "Utgången" : `Går ut ${formatDate(link.expiresAt)}`}
            </span>
          )}
          {!link.expiresAt && <span>Skapad {formatDate(link.createdAt)}</span>}
        </p>
      </div>
      <button
        onClick={copy}
        className="rounded-full border border-border bg-background p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label="Kopiera"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <button
        onClick={remove}
        className="rounded-full p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        aria-label="Ta bort"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* ─────────────────────── Subcomponents ─────────────────────── */

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center gap-1.5 rounded-t-lg px-3 py-2 text-sm font-medium transition-colors ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="share-tab"
          className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-foreground"
        />
      )}
    </button>
  );
}

function TypeCard({
  active,
  onClick,
  icon,
  title,
  desc,
  example,
  accent,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
  example: string;
  accent: "success" | "accent";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-2xl border px-4 py-3 text-left transition-all ${
        active
          ? "border-foreground bg-muted/40"
          : "border-border bg-background hover:bg-muted/30"
      }`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${
            accent === "success" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"
          }`}
        >
          {icon}
        </span>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">{desc}</p>
      <p className="mt-2 truncate font-mono text-[11px] text-muted-foreground/80">{example}</p>
      {active && (
        <span className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background">
          <Check className="h-3 w-3" />
        </span>
      )}
    </button>
  );
}

function ToggleRow({
  icon,
  title,
  desc,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-center gap-3 rounded-xl border border-border bg-background px-4 py-2.5 text-left transition-colors hover:bg-muted/40"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          checked ? "bg-foreground text-background" : "bg-muted text-foreground"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{desc}</p>
      </div>
      <span
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          checked ? "bg-foreground" : "bg-muted-foreground/30"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-background shadow transition-all ${
            checked ? "left-[18px]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleDateString("sv-SE", { day: "numeric", month: "short" });
}
