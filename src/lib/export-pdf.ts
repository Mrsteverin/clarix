import jsPDF from "jspdf";
import {
  channelBreakdown,
  formatCurrency,
  formatNumber,
  insights,
  kpis,
  topPages,
} from "./demo-data";

type Kpi = {
  label: string;
  value: number;
  delta: number;
  format: (n: number) => string;
};

const kpiList: Kpi[] = [
  { label: "Sessioner", value: kpis.sessions.value, delta: kpis.sessions.delta, format: formatNumber },
  { label: "Användare", value: kpis.users.value, delta: kpis.users.delta, format: formatNumber },
  { label: "Konverteringar", value: kpis.conversions.value, delta: kpis.conversions.delta, format: formatNumber },
  { label: "Intäkter", value: kpis.revenue.value, delta: kpis.revenue.delta, format: formatCurrency },
  { label: "Annonskostnad", value: kpis.adSpend.value, delta: kpis.adSpend.delta, format: formatCurrency },
  { label: "ROAS", value: kpis.roas.value, delta: kpis.roas.delta, format: (n) => n.toFixed(2).replace(".", ",") + "x" },
];

export function generateDashboardPdf(opts: { dateRange: string; company: string }) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 48;
  let y = margin;

  // Brand bar
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageW, 6, "F");

  // Logo + brand
  doc.setFillColor(15, 23, 42);
  doc.circle(margin + 10, y + 14, 10, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("CC", margin + 10, y + 17, { align: "center" });

  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("ClarityCloud", margin + 28, y + 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text("Marknadsrapport", margin + 28, y + 26);

  // Date range right-aligned
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(opts.company, pageW - margin, y + 12, { align: "right" });
  doc.text(opts.dateRange, pageW - margin, y + 26, { align: "right" });

  y += 56;

  // Title
  doc.setTextColor(15, 23, 42);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("Månadsöversikt", margin, y);
  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text("En sammanställning av dina viktigaste resultat och nästa steg.", margin, y + 12);
  y += 36;

  // KPI grid (3 cols x 2 rows)
  const cols = 3;
  const gap = 12;
  const cardW = (pageW - margin * 2 - gap * (cols - 1)) / cols;
  const cardH = 70;
  kpiList.forEach((k, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = margin + col * (cardW + gap);
    const cy = y + row * (cardH + gap);
    doc.setDrawColor(226, 232, 240);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(x, cy, cardW, cardH, 8, 8, "FD");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(k.label.toUpperCase(), x + 12, cy + 18);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(15, 23, 42);
    doc.text(k.format(k.value), x + 12, cy + 42);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    if (k.delta >= 0) doc.setTextColor(16, 163, 127);
    else doc.setTextColor(220, 38, 38);
    const deltaStr = (k.delta >= 0 ? "+" : "") + k.delta.toFixed(1).replace(".", ",") + " % vs föregående";
    doc.text(deltaStr, x + 12, cy + 58);
  });
  y += 2 * (cardH + gap) + 8;

  // AI Summary
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text("AI-sammanfattning", margin, y);
  y += 8;
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(245, 243, 255);
  doc.roundedRect(margin, y + 4, pageW - margin * 2, 70, 8, 8, "FD");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  const summary =
    "Trafiken växte +14 % drivet av tre nya blogginlägg som rankar topp 5 på köpstarka sökord. " +
    "ROAS förbättrades till 4,37x medan annonskostnaden minskade -3,4 %. " +
    "Konverteringarna ökade +22,8 % och organiskt sök står nu för 38 % av all trafik.";
  const lines = doc.splitTextToSize(summary, pageW - margin * 2 - 24);
  doc.text(lines, margin + 12, y + 22);
  y += 90;

  // Charts section: channel breakdown as horizontal bars + top pages
  if (y > pageH - 220) {
    doc.addPage();
    y = margin;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text("Trafikfördelning per kanal", margin, y);
  y += 16;
  const barMax = pageW - margin * 2 - 140;
  const palette = ["#7C3AED", "#0EA5E9", "#10B981", "#F59E0B", "#EF4444"];
  channelBreakdown.forEach((c, i) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    doc.text(c.name, margin, y + 10);
    const w = (c.value / 40) * barMax;
    const hex = palette[i % palette.length];
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    doc.setFillColor(r, g, b);
    doc.roundedRect(margin + 130, y, w, 14, 3, 3, "F");
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.text(c.value + " %", margin + 135 + w + 6, y + 11);
    y += 22;
  });

  y += 12;
  if (y > pageH - 200) {
    doc.addPage();
    y = margin;
  }

  // Top pages
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text("Mest besökta sidor", margin, y);
  y += 14;
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageW - margin, y);
  y += 10;
  topPages.forEach((p) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    doc.text(p.path, margin, y);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(formatNumber(p.views), pageW - margin - 80, y, { align: "right" });
    if (p.change >= 0) doc.setTextColor(16, 163, 127);
    else doc.setTextColor(220, 38, 38);
    doc.setFont("helvetica", "normal");
    doc.text(
      (p.change >= 0 ? "+" : "") + p.change.toFixed(1).replace(".", ",") + " %",
      pageW - margin,
      y,
      { align: "right" }
    );
    y += 18;
  });

  y += 8;
  if (y > pageH - 200) {
    doc.addPage();
    y = margin;
  }

  // Recommendations
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text("Rekommendationer", margin, y);
  y += 14;
  insights.forEach((ins) => {
    if (y > pageH - 80) {
      doc.addPage();
      y = margin;
    }
    const colorMap: Record<string, [number, number, number]> = {
      win: [16, 163, 127],
      opportunity: [124, 58, 237],
      warning: [245, 158, 11],
      info: [100, 116, 139],
    };
    const [r, g, b] = colorMap[ins.type] || [100, 116, 139];
    doc.setFillColor(r, g, b);
    doc.roundedRect(margin, y, 4, 44, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(ins.title, margin + 14, y + 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(71, 85, 105);
    const bodyLines = doc.splitTextToSize(ins.body, pageW - margin * 2 - 18);
    doc.text(bodyLines, margin + 14, y + 26);
    y += 56;
  });

  // Footer on all pages
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`ClarityCloud · ${opts.company} · ${opts.dateRange}`, margin, pageH - 20);
    doc.text(`Sida ${i} av ${pageCount}`, pageW - margin, pageH - 20, { align: "right" });
  }

  doc.save(`claritycloud-rapport-${new Date().toISOString().slice(0, 10)}.pdf`);
}
