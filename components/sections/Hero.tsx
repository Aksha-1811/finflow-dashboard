"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "motion/react";
import { ArrowRight, PlayCircle, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

function AnimatedSavingsCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, 2.4, {
      duration: 1.8,
      delay: 0.4,
      ease: "easeOut",
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, []);

  return (
    <span className="tabular-nums">
      {value.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-emerald-500/20 via-slate-950/0 to-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              Trusted by 500+ finance teams
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Your financial data,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
              finally under control
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            FinFlow gives modern finance teams real-time P&L, automated reconciliation, and
            reporting they can trust — so you can close faster and make decisions with
            confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="#pricing" variant="primary" className="w-full sm:w-auto">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#" variant="secondary" className="w-full sm:w-auto">
              <PlayCircle className="h-4 w-4" />
              Watch demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-16 flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/50 px-8 py-6 shadow-2xl shadow-black/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-white">
                €<AnimatedSavingsCounter />M
              </span>
              <span className="text-sm text-slate-400">saved on average per finance team</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
