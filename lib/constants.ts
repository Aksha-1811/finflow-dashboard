export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
];

export type Feature = {
  icon: "TrendingUp" | "RefreshCw" | "Globe2" | "FileBarChart" | "ShieldCheck" | "Plug";
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    icon: "TrendingUp",
    title: "Real-time P&L tracking",
    description:
      "Watch profit and loss update the moment a transaction lands, with drill-downs by team, project, or cost center.",
  },
  {
    icon: "RefreshCw",
    title: "Automated reconciliation",
    description:
      "Match transactions across banks, cards, and ledgers automatically and clear your close in hours, not weeks.",
  },
  {
    icon: "Globe2",
    title: "Multi-currency support",
    description:
      "Track, convert, and report across 150+ currencies with live rates and automatic revaluation.",
  },
  {
    icon: "FileBarChart",
    title: "Custom report builder",
    description:
      "Build the exact board deck or investor update you need with drag-and-drop reports, saved and scheduled.",
  },
  {
    icon: "ShieldCheck",
    title: "Team permissions and audit log",
    description:
      "Granular, role-based access with a full audit trail of every change, export, and approval.",
  },
  {
    icon: "Plug",
    title: "API and ERP integrations",
    description:
      "Connect NetSuite, SAP, QuickBooks, Xero, and your data warehouse with pre-built, two-way syncs.",
  },
];

export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const METRICS: Metric[] = [
  {
    value: "€2.4M",
    label: "average savings",
    description: "Median annual savings finance teams report after switching to FinFlow.",
  },
  {
    value: "94%",
    label: "time saved",
    description: "Reduction in hours spent on manual reconciliation and reporting each month.",
  },
  {
    value: "500+",
    label: "finance teams",
    description: "Finance and accounting teams running their close on FinFlow today.",
  },
  {
    value: "99.9%",
    label: "uptime",
    description: "Guaranteed platform availability, backed by our enterprise SLA.",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Startup",
    price: "Free",
    description: "For early-stage teams getting their financial data under control.",
    features: [
      "Up to 2 team members",
      "Real-time P&L tracking",
      "1 bank and card connection",
      "Single currency",
      "Community support",
    ],
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "€89",
    period: "/mo",
    description: "For growing finance teams that need automation and deeper reporting.",
    features: [
      "Up to 15 team members",
      "Automated reconciliation",
      "Unlimited bank and card connections",
      "Multi-currency support",
      "Custom report builder",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For finance organizations with complex, high-volume requirements.",
    features: [
      "Unlimited team members",
      "Dedicated ERP integrations",
      "Team permissions and audit log",
      "Custom SLAs and onboarding",
      "Single sign-on (SSO)",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "FinFlow cut our monthly close from three weeks to four days. Our board finally gets numbers they can trust in real time.",
    name: "Elena Marsh",
    role: "CFO",
    company: "Northwind Logistics",
    initials: "EM",
  },
  {
    quote:
      "The reconciliation automation alone paid for the platform in the first quarter. It's the tool our finance team actually wanted to use.",
    name: "Daniel Okoye",
    role: "CFO",
    company: "Brightline Health",
    initials: "DO",
  },
  {
    quote:
      "Multi-currency reporting used to be our biggest headache. FinFlow made it a non-issue across all twelve of our entities.",
    name: "Sofia Bertrand",
    role: "CFO",
    company: "Verdant Foods Group",
    initials: "SB",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "How does FinFlow keep our financial data secure?",
    answer:
      "All data is encrypted in transit and at rest using AES-256 and TLS 1.3. FinFlow undergoes annual SOC 2 Type II audits and supports SSO, granular role-based permissions, and a full audit log of every action taken in the platform.",
  },
  {
    question: "Which banks, cards, and ERPs does FinFlow integrate with?",
    answer:
      "FinFlow connects to over 12,000 banks and card providers, plus native two-way syncs with NetSuite, SAP, QuickBooks, Xero, and most major data warehouses via our API.",
  },
  {
    question: "Is our data ever shared with third parties?",
    answer:
      "Never. Your financial data is never sold or shared with third parties, and it is never used to train any models. Data is isolated per organization with strict access controls.",
  },
  {
    question: "Can we control who on our team sees what?",
    answer:
      "Yes. FinFlow supports granular, role-based permissions down to the report and account level, so you can restrict sensitive data to the right people while keeping visibility for the rest of the team.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Most Growth-tier teams are fully connected and reconciling within a day. Enterprise implementations with custom ERP integrations typically take one to three weeks with a dedicated onboarding manager.",
  },
];

export const LOGO_CLOUD_COMPANIES: string[] = [
  "Northwind Logistics",
  "Brightline Health",
  "Verdant Foods Group",
  "Halcyon Robotics",
  "Meridian Capital",
  "Colcord Industries",
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Connect accounts",
    description:
      "Link your banks, cards, payroll, and ERP systems in minutes with secure, read-only connections.",
  },
  {
    step: "02",
    title: "Clarify your data",
    description:
      "FinFlow automatically categorizes, reconciles, and normalizes transactions across every currency and entity.",
  },
  {
    step: "03",
    title: "Act on insights",
    description:
      "Get real-time P&L, cash flow, and custom reports your whole team can trust and act on immediately.",
  },
];

export const SITE = {
  name: "FinFlow",
  tagline: "Real-time financial intelligence for modern finance teams.",
};
