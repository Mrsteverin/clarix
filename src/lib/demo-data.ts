// Realistic demo dataset for FlowReport (Svenska)

export const kpis = {
  sessions: { value: 184_293, delta: 14.2, spark: [120, 132, 128, 145, 152, 168, 184] },
  users: { value: 96_812, delta: 11.4, spark: [70, 74, 76, 82, 86, 91, 96] },
  conversions: { value: 3_241, delta: 22.8, spark: [1.8, 2.0, 2.1, 2.4, 2.7, 3.0, 3.2] },
  revenue: { value: 1_845_400, delta: 18.6, spark: [110, 118, 125, 138, 150, 168, 184] },
  adSpend: { value: 421_800, delta: -3.4, spark: [48, 47, 46, 45, 44, 43, 42] },
  roas: { value: 4.37, delta: 23.0, spark: [3.1, 3.3, 3.5, 3.8, 4.0, 4.2, 4.4] },
};

export const trafficTrend = [
  { date: "1 mar", sessions: 4200, users: 2900, conversions: 88 },
  { date: "5 mar", sessions: 4680, users: 3100, conversions: 102 },
  { date: "9 mar", sessions: 5120, users: 3380, conversions: 118 },
  { date: "13 mar", sessions: 4980, users: 3290, conversions: 110 },
  { date: "17 mar", sessions: 5640, users: 3720, conversions: 134 },
  { date: "21 mar", sessions: 6210, users: 4080, conversions: 152 },
  { date: "25 mar", sessions: 6780, users: 4420, conversions: 168 },
  { date: "29 mar", sessions: 7240, users: 4720, conversions: 184 },
  { date: "2 apr", sessions: 7680, users: 5010, conversions: 198 },
  { date: "6 apr", sessions: 8120, users: 5290, conversions: 214 },
  { date: "10 apr", sessions: 8540, users: 5560, conversions: 228 },
  { date: "14 apr", sessions: 9100, users: 5920, conversions: 246 },
];

export const channelBreakdown = [
  { name: "Organiskt sök", value: 38, color: "var(--chart-1)" },
  { name: "Betald sökning", value: 22, color: "var(--chart-2)" },
  { name: "Sociala medier", value: 18, color: "var(--chart-3)" },
  { name: "Direkt", value: 14, color: "var(--chart-4)" },
  { name: "Hänvisning", value: 8, color: "var(--chart-5)" },
];

export const topPages = [
  { path: "/produkter/aurora-pro", views: 24_180, change: 18.4 },
  { path: "/blogg/seo-guide-2025", views: 18_920, change: 32.1 },
  { path: "/priser", views: 14_560, change: 6.8 },
  { path: "/produkter/halo-mini", views: 12_340, change: -2.3 },
  { path: "/om-oss", views: 8_120, change: 4.5 },
];

export const campaigns = [
  { name: "Vårlansering — Sök", channel: "Google Ads", spend: 124_000, roas: 5.8, conv: 412 },
  { name: "Lookalike — Prospektering", channel: "Meta Ads", spend: 98_200, roas: 4.2, conv: 286 },
  { name: "Återmarknadsföring Q2", channel: "Meta Ads", spend: 65_400, roas: 6.9, conv: 318 },
  { name: "Varumärkesskydd", channel: "Google Ads", spend: 41_200, roas: 8.4, conv: 198 },
  { name: "Kreatörspartnerskap", channel: "TikTok Ads", spend: 56_800, roas: 3.1, conv: 142 },
  { name: "B2B Beslutsfattare", channel: "LinkedIn Ads", spend: 36_200, roas: 2.8, conv: 64 },
];

export const seoQueries = [
  { query: "bästa analysverktyget", clicks: 4_280, impressions: 58_400, position: 3.2, ctr: 7.3 },
  { query: "rapportmall marknadsföring", clicks: 3_140, impressions: 41_200, position: 4.1, ctr: 7.6 },
  { query: "kundrapportering byrå", clicks: 2_680, impressions: 32_800, position: 2.8, ctr: 8.2 },
  { query: "alternativ till google analytics", clicks: 1_920, impressions: 28_600, position: 5.4, ctr: 6.7 },
  { query: "white label dashboard", clicks: 1_540, impressions: 19_200, position: 3.9, ctr: 8.0 },
];

// Each integration includes the provider, OAuth-style scope/permission list, and a short purpose line.
export const integrations = [
  {
    id: "ga4",
    name: "Google Analytics 4",
    provider: "Google",
    category: "Analys",
    connected: true,
    color: "#F9AB00",
    account: "aurora.studio@gmail.com",
    purpose: "Hämta sessioner, användare, konverteringar och målgrupper.",
    scopes: [
      "Visa och hämta dina Google Analytics-rapporter",
      "Läsa kontostruktur, properties och datavyer",
      "Läsa anpassade dimensioner och händelser",
    ],
  },
  {
    id: "gsc",
    name: "Google Search Console",
    provider: "Google",
    category: "SEO",
    connected: true,
    color: "#4285F4",
    account: "aurora.studio@gmail.com",
    purpose: "Bevaka sökresultat, klick, visningar och positioner.",
    scopes: [
      "Visa data för dina verifierade webbplatser",
      "Läsa sökanalys (frågor, sidor, länder, enheter)",
      "Läsa indexeringsstatus",
    ],
  },
  {
    id: "gads",
    name: "Google Ads",
    provider: "Google",
    category: "Annonser",
    connected: true,
    color: "#34A853",
    account: "aurora.studio@gmail.com",
    purpose: "Hämta kampanjer, kostnader, ROAS och konverteringar.",
    scopes: [
      "Hantera och visa dina Google Ads-konton",
      "Läsa kampanj-, annonsgrupps- och annonsdata",
      "Läsa konverterings- och kostnadsdata",
    ],
  },
  {
    id: "meta",
    name: "Meta Ads",
    provider: "Meta",
    category: "Annonser",
    connected: true,
    color: "#0866FF",
    account: "Aurora Studios · Business Manager",
    purpose: "Hämta annonser från Facebook och Instagram.",
    scopes: [
      "ads_read — läs kampanj- och resultatdata",
      "business_management — åtkomst till Business Manager",
      "read_insights — läs sid- och annonsstatistik",
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn Ads",
    provider: "LinkedIn",
    category: "Annonser",
    connected: false,
    color: "#0A66C2",
    account: "",
    purpose: "B2B-kampanjer, leadgen och företagsinsikter.",
    scopes: [
      "r_ads — läsa annonskonton och kampanjer",
      "r_ads_reporting — läsa kampanjresultat",
      "r_organization_social — läsa företagssida",
    ],
  },
  {
    id: "tiktok",
    name: "TikTok Ads",
    provider: "TikTok",
    category: "Annonser",
    connected: true,
    color: "#FF0050",
    account: "Aurora Studios · TikTok Business",
    purpose: "Hämta kreatörskampanjer och annonsresultat.",
    scopes: [
      "Läsa annonskonton och kampanjer",
      "Läsa resultatstatistik per annons",
      "Läsa målgrupper",
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    provider: "Shopify",
    category: "E-handel",
    connected: true,
    color: "#95BF47",
    account: "aurora-studios.myshopify.com",
    purpose: "Synka order, intäkter och produktdata.",
    scopes: [
      "read_orders — läsa order och intäkter",
      "read_products — läsa produkter och varianter",
      "read_customers — läsa anonymiserad kunddata",
    ],
  },
  {
    id: "woo",
    name: "WooCommerce",
    provider: "WooCommerce",
    category: "E-handel",
    connected: false,
    color: "#7F54B3",
    account: "",
    purpose: "Anslut din WordPress-butik via REST-nyckel.",
    scopes: [
      "Läsa order och kunder",
      "Läsa produkter och kategorier",
      "Läsa rapportstatistik",
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    provider: "Google",
    category: "Sociala medier",
    connected: false,
    color: "#FF0000",
    account: "",
    purpose: "Hämta videovisningar, prenumeranter och engagemang.",
    scopes: [
      "Visa dina YouTube-kanaldata",
      "Läsa analytics för videor och spellistor",
      "Läsa kommentarer och engagemang",
    ],
  },
  {
    id: "csv",
    name: "Egen CSV",
    provider: "FlowReport",
    category: "Övrigt",
    connected: true,
    color: "#6B7280",
    account: "5 uppladdade filer",
    purpose: "Ladda upp valfri data från andra system.",
    scopes: [
      "Lagra dina uppladdade filer säkert",
      "Tolka kolumner och datatyper",
      "Visa data i dina rapporter",
    ],
  },
];

export const clients = [
  { id: "1", name: "Aurora Studios", domain: "aurorastudios.se", reports: 8, status: "Aktiv", color: "from-violet-400 to-fuchsia-500" },
  { id: "2", name: "Halo Commerce", domain: "halo.shop", reports: 12, status: "Aktiv", color: "from-sky-400 to-blue-600" },
  { id: "3", name: "Nordvind AB", domain: "nordvind.io", reports: 5, status: "Aktiv", color: "from-emerald-400 to-teal-600" },
  { id: "4", name: "Atlas Ventures", domain: "atlas.vc", reports: 3, status: "Pausad", color: "from-amber-400 to-orange-600" },
  { id: "5", name: "Lumen Labs", domain: "lumen.dev", reports: 7, status: "Aktiv", color: "from-rose-400 to-pink-600" },
];

export const insights = [
  {
    type: "win",
    title: "Organiskt sök drev 14 % mer trafik",
    body: "Tre nya blogginlägg rankades topp 5 på köpstarka sökord och bidrog med 12 400 extra sessioner i månaden.",
  },
  {
    type: "opportunity",
    title: "Öka budgeten på Varumärkesskydd",
    body: "ROAS på 8,4× — högst av alla kampanjer. En budgetökning på 25 % kan ge cirka 82 000 kr extra intäkter.",
  },
  {
    type: "warning",
    title: "Konvertering på Halo Mini ner 2,3 %",
    body: "Sidans hastighetspoäng föll från 92 till 78. Komprimera hjältebilden och ladda skript senare för att återhämta.",
  },
  {
    type: "info",
    title: "5 SEO-sidor tappar i ranking",
    body: "Uppdatera innehåll och bygg om interna länkar för att återta cirka 3 400 klick per månad.",
  },
];

export const reportSlides = [
  { id: "exec", title: "Sammanfattning", icon: "Sparkles", description: "Översikt och månadens vinster" },
  { id: "traffic", title: "Trafik", icon: "TrendingUp", description: "Sessioner, användare och engagemang" },
  { id: "seo", title: "SEO", icon: "Search", description: "Rankingar, klick och visningar" },
  { id: "paid", title: "Annonser", icon: "Target", description: "Kostnad, ROAS och kampanjer" },
  { id: "ecom", title: "E-handel", icon: "ShoppingBag", description: "Intäkter, snittordervärde och produkter" },
  { id: "social", title: "Sociala medier", icon: "Heart", description: "Räckvidd, engagemang och tillväxt" },
  { id: "conv", title: "Konverteringar", icon: "Target", description: "Mål och trattar" },
  { id: "opp", title: "Möjligheter", icon: "Lightbulb", description: "AI-drivna nästa steg" },
];

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".", ",") + " mn";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".", ",") + " k";
  return n.toString();
}

export function formatCurrency(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2).replace(".", ",") + " mn kr";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".", ",") + " k kr";
  return n.toFixed(0) + " kr";
}
