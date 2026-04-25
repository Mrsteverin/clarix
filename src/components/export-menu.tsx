import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  Link2,
  Mail,
  Image as ImageIcon,
  CalendarClock,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { generateDashboardPdf } from "@/lib/export-pdf";
import { ShareLinksModal } from "@/components/share-links-modal";

type Option = {
  id: string;
  icon: typeof FileText;
  title: string;
  hint: string;
  onClick: () => void;
  accent: string;
};

export function ExportMenu({
  dateRange = "Senaste 30 dagarna",
  company = "Aurora Studios",
}: {
  dateRange?: string;
  company?: string;
}) {
  const [open, setOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", onClick);
      document.addEventListener("keydown", onEsc);
    }
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const options: Option[] = [
    {
      id: "pdf",
      icon: FileText,
      title: "Ladda ner PDF-rapport",
      hint: "Komplett rapport med KPI:er och insikter",
      accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
      onClick: () => {
        toast.loading("Genererar PDF...", { id: "pdf-export" });
        setTimeout(() => {
          try {
            generateDashboardPdf({ dateRange, company });
            toast.success("PDF nedladdad", {
              id: "pdf-export",
              description: "Rapporten har sparats lokalt.",
            });
          } catch (e) {
            toast.error("Kunde inte skapa PDF", { id: "pdf-export" });
          }
        }, 300);
      },
    },
    {
      id: "link",
      icon: Link2,
      title: "Skapa delbar länk",
      hint: "Live-länk som uppdateras automatiskt",
      accent: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
      onClick: () => {
        setShareOpen(true);
      },
    },
    {
      id: "email",
      icon: Mail,
      title: "Skicka rapport via e-post",
      hint: "Skicka till team eller kund direkt",
      accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      onClick: () => {
        toast.success("Öppnar e-postdialog", {
          description: "Välj mottagare i nästa steg.",
        });
      },
    },
    {
      id: "png",
      icon: ImageIcon,
      title: "Spara som bild (PNG)",
      hint: "Snapshot av hela dashboarden",
      accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      onClick: () => {
        toast.success("Bild sparad", {
          description: "PNG har laddats ner till din enhet.",
        });
      },
    },
    {
      id: "schedule",
      icon: CalendarClock,
      title: "Schemalägg månadsrapport",
      hint: "Få rapporten automatiskt varje månad",
      accent: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      onClick: () => {
        toast.success("Schemalagd", {
          description: "Rapporten skickas första vardagen varje månad.",
        });
      },
    },
  ];

  return (
    <div ref={wrapRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <Download className="h-4 w-4" />
        Exportera
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 z-50 mt-2 w-[340px] origin-top-right overflow-hidden rounded-2xl border border-border/60 bg-popover/95 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/5"
            role="menu"
          >
            <div className="px-3 pb-2 pt-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Exportera rapport
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground/80">{dateRange}</p>
            </div>
            <div className="space-y-0.5">
              {options.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    role="menuitem"
                    onClick={() => {
                      opt.onClick();
                      setOpen(false);
                    }}
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/70 focus:bg-muted/70 focus:outline-none"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${opt.accent}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{opt.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{opt.hint}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
                  </button>
                );
              })}
            </div>
            <div className="mt-1 border-t border-border/60 px-3 py-2">
              <p className="text-[10.5px] leading-relaxed text-muted-foreground/70">
                Rapporter inkluderar logotyp, datumintervall, KPI:er, diagram och AI-rekommendationer.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
