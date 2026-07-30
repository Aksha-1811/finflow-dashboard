"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { METRICS } from "@/lib/constants";

export function Metrics() {
  return (
    <section className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 text-center transition-colors hover:border-emerald-500/30"
            >
              <div className="text-4xl font-bold text-emerald-400 sm:text-5xl">
                {metric.value}
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-white">
                {metric.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
