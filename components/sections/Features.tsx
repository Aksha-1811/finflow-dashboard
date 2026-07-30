"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  RefreshCw,
  Globe2,
  FileBarChart,
  ShieldCheck,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES, type Feature } from "@/lib/constants";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  TrendingUp,
  RefreshCw,
  Globe2,
  FileBarChart,
  ShieldCheck,
  Plug,
};

export function Features() {
  return (
    <section id="features" className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your finance team needs, in one place"
          description="From daily reconciliation to board-ready reporting, FinFlow replaces the spreadsheets and manual work with one connected platform."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-emerald-500/30 hover:bg-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
