"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { LOGO_CLOUD_COMPANIES } from "@/lib/constants";

export function LogoCloud() {
  return (
    <section className="border-y border-slate-800/50 bg-slate-950 py-14">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium uppercase tracking-wider text-slate-500"
        >
          Trusted by finance teams at
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {LOGO_CLOUD_COMPANIES.map((company) => (
            <span
              key={company}
              className="rounded-full border border-slate-800/50 bg-slate-900/50 px-5 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
