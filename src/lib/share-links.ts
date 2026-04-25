// Share-link store — browser-side persistence for branded report URLs.
// Persists to localStorage so links survive reloads. In production this
// would be replaced by a server-side store (Lovable Cloud).

export type ShareLinkType = "live" | "snapshot";

export type ShareLinkVisit = {
  ts: number;          // epoch ms
  ua?: string;         // user agent (truncated)
  ref?: string;        // referrer host
};

export type ShareLink = {
  id: string;
  workspace: string;       // slugified workspace, e.g. "citylaser"
  workspaceLabel: string;  // human label, e.g. "City Laser"
  slug: string;            // e.g. "live" or "april-2026"
  type: ShareLinkType;
  period?: string;         // human period, only for snapshot (e.g. "April 2026")
  passwordHash?: string;   // sha-256 hex when password-protected
  expiresAt?: number;      // epoch ms
  createdAt: number;
  createdBy?: string;      // human name or email of creator
  isActive?: boolean;      // defaults true; set false to disable
  lastViewedAt?: number;   // epoch ms of last public visit
  visits: ShareLinkVisit[];
};

const STORAGE_KEY = "claritycloud.share-links.v1";

// Reserved slugs to avoid collisions with app routes.
const RESERVED_SLUGS = new Set([
  "dashboard",
  "clients",
  "connections",
  "reports",
  "settings",
  "login",
  "api",
  "admin",
  "assets",
]);

const RESERVED_WORKSPACES = new Set([
  "dashboard",
  "clients",
  "connections",
  "reports",
  "settings",
  "login",
  "api",
  "admin",
  "assets",
  "_next",
  "favicon.ico",
]);

function isBrowser() {
  return typeof window !== "undefined";
}

function read(): ShareLink[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ShareLink[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(links: ShareLink[]) {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch {
    // ignore quota errors
  }
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export async function hashPassword(pw: string): Promise<string> {
  if (!isBrowser() || !crypto?.subtle) {
    // Fallback (not cryptographically secure, dev-only)
    let h = 0;
    for (let i = 0; i < pw.length; i++) h = (h * 31 + pw.charCodeAt(i)) | 0;
    return `fallback-${h}`;
  }
  const enc = new TextEncoder().encode(pw);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function listLinks(): ShareLink[] {
  return read().sort((a, b) => b.createdAt - a.createdAt);
}

export function findLink(workspace: string, slug: string): ShareLink | undefined {
  return read().find((l) => l.workspace === workspace && l.slug === slug);
}

export function isSlugAvailable(workspace: string, slug: string): boolean {
  if (!slug || RESERVED_SLUGS.has(slug)) return false;
  if (RESERVED_WORKSPACES.has(workspace)) return false;
  return !findLink(workspace, slug);
}

export function suggestSlug(workspace: string, base: string): string {
  const cleaned = slugify(base) || "link";
  if (isSlugAvailable(workspace, cleaned)) return cleaned;
  for (let i = 2; i < 200; i++) {
    const candidate = `${cleaned}-${i}`;
    if (isSlugAvailable(workspace, candidate)) return candidate;
  }
  return `${cleaned}-${Date.now().toString(36)}`;
}

export type CreateLinkInput = {
  workspace: string;
  workspaceLabel: string;
  slug: string;
  type: ShareLinkType;
  period?: string;
  password?: string;
  expiresAt?: number;
};

export async function createLink(input: CreateLinkInput): Promise<ShareLink> {
  const links = read();
  if (!isSlugAvailable(input.workspace, input.slug)) {
    throw new Error("Slug already in use");
  }
  const link: ShareLink = {
    id: `lnk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    workspace: input.workspace,
    workspaceLabel: input.workspaceLabel,
    slug: input.slug,
    type: input.type,
    period: input.period,
    passwordHash: input.password ? await hashPassword(input.password) : undefined,
    expiresAt: input.expiresAt,
    createdAt: Date.now(),
    visits: [],
  };
  links.push(link);
  write(links);
  return link;
}

export function deleteLink(id: string) {
  write(read().filter((l) => l.id !== id));
}

export async function verifyPassword(link: ShareLink, pw: string): Promise<boolean> {
  if (!link.passwordHash) return true;
  const h = await hashPassword(pw);
  return h === link.passwordHash;
}

export function isExpired(link: ShareLink, now = Date.now()): boolean {
  return !!link.expiresAt && link.expiresAt < now;
}

export function recordVisit(workspace: string, slug: string) {
  const links = read();
  const idx = links.findIndex((l) => l.workspace === workspace && l.slug === slug);
  if (idx === -1) return;
  const ua =
    isBrowser() && navigator.userAgent ? navigator.userAgent.slice(0, 120) : undefined;
  const ref =
    isBrowser() && document.referrer
      ? (() => {
          try {
            return new URL(document.referrer).host;
          } catch {
            return undefined;
          }
        })()
      : undefined;
  links[idx] = {
    ...links[idx],
    visits: [...links[idx].visits, { ts: Date.now(), ua, ref }].slice(-500),
  };
  write(links);
}

export function buildShareUrl(link: Pick<ShareLink, "workspace" | "slug">): string {
  const origin = isBrowser() ? window.location.origin : "https://claritycloud.lovable.app";
  return `${origin}/${link.workspace}/${link.slug}`;
}

export function buildShareDisplay(link: Pick<ShareLink, "workspace" | "slug">): string {
  return `claritycloud.app/${link.workspace}/${link.slug}`;
}
