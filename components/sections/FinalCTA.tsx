"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-slate-700/50 bg-slate-800/50 px-8 py-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start saving time today
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-400">
            Join 500+ finance teams running their close, reporting, and reconciliation on
            FinFlow. No credit card required.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full flex-1 rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            Free on the Startup plan. Upgrade any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
