// Realistic demo dataset for FlowReport

export const kpis = {
  sessions: { value: 184_293, delta: 14.2, spark: [120, 132, 128, 145, 152, 168, 184] },
  users: { value: 96_812, delta: 11.4, spark: [70, 74, 76, 82, 86, 91, 96] },
  conversions: { value: 3_241, delta: 22.8, spark: [1.8, 2.0, 2.1, 2.4, 2.7, 3.0, 3.2] },
  revenue: { value: 184_540, delta: 18.6, spark: [110, 118, 125, 138, 150, 168, 184] },
  adSpend: { value: 42_180, delta: -3.4, spark: [48, 47, 46, 45, 44, 43, 42] },
  roas: { value: 4.37, delta: 23.0, spark: [3.1, 3.3, 3.5, 3.8, 4.0, 4.2, 4.4] },
};

export const trafficTrend = [
  { date: "Mar 1", sessions: 4200, users: 2900, conversions: 88 },
  { date: "Mar 5", sessions: 4680, users: 3100, conversions: 102 },
  { date: "Mar 9", sessions: 5120, users: 3380, conversions: 118 },
  { date: "Mar 13", sessions: 4980, users: 3290, conversions: 110 },
  { date: "Mar 17", sessions: 5640, users: 3720, conversions: 134 },
  { date: "Mar 21", sessions: 6210, users: 4080, conversions: 152 },
  { date: "Mar 25", sessions: 6780, users: 4420, conversions: 168 },
  { date: "Mar 29", sessions: 7240, users: 4720, conversions: 184 },
  { date: "Apr 2", sessions: 7680, users: 5010, conversions: 198 },
  { date: "Apr 6", sessions: 8120, users: 5290, conversions: 214 },
  { date: "Apr 10", sessions: 8540, users: 5560, conversions: 228 },
  { date: "Apr 14", sessions: 9100, users: 5920, conversions: 246 },
];

export const channelBreakdown = [
  { name: "Organic Search", value: 38, color: "var(--chart-1)" },
  { name: "Paid Search", value: 22, color: "var(--chart-2)" },
  { name: "Social", value: 18, color: "var(--chart-3)" },
  { name: "Direct", value: 14, color: "var(--chart-4)" },
  { name: "Referral", value: 8, color: "var(--chart-5)" },
];

export const topPages = [
  { path: "/products/aurora-pro", views: 24_180, change: 18.4 },
  { path: "/blog/seo-2025-guide", views: 18_920, change: 32.1 },
  { path: "/pricing", views: 14_560, change: 6.8 },
  { path: "/products/halo-mini", views: 12_340, change: -2.3 },
  { path: "/about", views: 8_120, change: 4.5 },
];

export const campaigns = [
  { name: "Spring Launch — Search", channel: "Google Ads", spend: 12_400, roas: 5.8, conv: 412 },
  { name: "Lookalike — Prospecting", channel: "Meta Ads", spend: 9_820, roas: 4.2, conv: 286 },
  { name: "Retargeting Q2", channel: "Meta Ads", spend: 6_540, roas: 6.9, conv: 318 },
  { name: "Brand Defense", channel: "Google Ads", spend: 4_120, roas: 8.4, conv: 198 },
  { name: "Creator Partnerships", channel: "TikTok Ads", spend: 5_680, roas: 3.1, conv: 142 },
  { name: "B2B Decision Makers", channel: "LinkedIn Ads", spend: 3_620, roas: 2.8, conv: 64 },
];

export const seoQueries = [
  { query: "best analytics dashboard", clicks: 4_280, impressions: 58_400, position: 3.2, ctr: 7.3 },
  { query: "marketing report template", clicks: 3_140, impressions: 41_200, position: 4.1, ctr: 7.6 },
  { query: "agency client reporting", clicks: 2_680, impressions: 32_800, position: 2.8, ctr: 8.2 },
  { query: "google analytics alternative", clicks: 1_920, impressions: 28_600, position: 5.4, ctr: 6.7 },
  { query: "white label dashboard", clicks: 1_540, impressions: 19_200, position: 3.9, ctr: 8.0 },
];

export const integrations = [
  { id: "ga4", name: "Google Analytics 4", category: "Analytics", connected: true, color: "#F9AB00" },
  { id: "gsc", name: "Google Search Console", category: "SEO", connected: true, color: "#4285F4" },
  { id: "gads", name: "Google Ads", category: "Paid", connected: true, color: "#34A853" },
  { id: "meta", name: "Meta Ads", category: "Paid", connected: true, color: "#0866FF" },
  { id: "linkedin", name: "LinkedIn Ads", category: "Paid", connected: false, color: "#0A66C2" },
  { id: "tiktok", name: "TikTok Ads", category: "Paid", connected: true, color: "#FF0050" },
  { id: "shopify", name: "Shopify", category: "Ecommerce", connected: true, color: "#95BF47" },
  { id: "woo", name: "WooCommerce", category: "Ecommerce", connected: false, color: "#7F54B3" },
  { id: "youtube", name: "YouTube", category: "Social", connected: false, color: "#FF0000" },
  { id: "csv", name: "Custom CSV", category: "Other", connected: true, color: "#6B7280" },
];

export const clients = [
  { id: "1", name: "Aurora Studios", domain: "aurorastudios.com", reports: 8, status: "Active", color: "from-violet-400 to-fuchsia-500" },
  { id: "2", name: "Halo Commerce", domain: "halo.shop", reports: 12, status: "Active", color: "from-sky-400 to-blue-600" },
  { id: "3", name: "Northwind Co.", domain: "northwind.io", reports: 5, status: "Active", color: "from-emerald-400 to-teal-600" },
  { id: "4", name: "Atlas Ventures", domain: "atlas.vc", reports: 3, status: "Paused", color: "from-amber-400 to-orange-600" },
  { id: "5", name: "Lumen Labs", domain: "lumen.dev", reports: 7, status: "Active", color: "from-rose-400 to-pink-600" },
];

export const insights = [
  {
    type: "win",
    title: "Organic search drove 14% traffic lift",
    body: "Three new blog posts ranked top-5 for high-intent terms, contributing 12.4k incremental sessions this month.",
  },
  {
    type: "opportunity",
    title: "Increase budget on Brand Defense",
    body: "ROAS of 8.4× — the highest across all campaigns. A 25% budget increase could yield ~$8.2k additional revenue.",
  },
  {
    type: "warning",
    title: "Halo Mini page conversion down 2.3%",
    body: "Page speed dropped from 92 to 78. Compress hero image and defer non-critical scripts to recover.",
  },
  {
    type: "info",
    title: "5 SEO pages slipping in rankings",
    body: "Refresh content and rebuild internal links to recover an estimated 3.4k monthly clicks.",
  },
];

export const reportSlides = [
  { id: "exec", title: "Executive Summary", icon: "Sparkles", description: "High-level overview & wins" },
  { id: "traffic", title: "Traffic", icon: "TrendingUp", description: "Sessions, users & engagement" },
  { id: "seo", title: "SEO", icon: "Search", description: "Rankings, clicks & impressions" },
  { id: "paid", title: "Paid Ads", icon: "Target", description: "Spend, ROAS & campaigns" },
  { id: "ecom", title: "Ecommerce", icon: "ShoppingBag", description: "Revenue, AOV & products" },
  { id: "social", title: "Social", icon: "Heart", description: "Reach, engagement & growth" },
  { id: "conv", title: "Conversions", icon: "Target", description: "Goals & funnels" },
  { id: "opp", title: "Opportunities", icon: "Lightbulb", description: "AI-powered next steps" },
];

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "k";
  return n.toString();
}

export function formatCurrency(n: number): string {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return "$" + (n / 1_000).toFixed(1) + "k";
  return "$" + n.toFixed(0);
}
