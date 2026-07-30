"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="integrations" className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in three steps"
          description="No lengthy implementation. Connect your systems and start seeing clean, real-time financials the same day."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-xl border border-slate-700/50 bg-slate-800/50 p-8"
            >
              <span className="text-5xl font-bold text-emerald-500/20">{step.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
