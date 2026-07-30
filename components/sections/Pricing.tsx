"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { PRICING_TIERS } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start for free, upgrade when your team needs more automation and control. No hidden fees."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                tier.highlighted
                  ? "border-emerald-500/50 bg-slate-800/80 shadow-2xl shadow-emerald-500/10 lg:-translate-y-4"
                  : "border-slate-700/50 bg-slate-800/50"
              )}
            >
              {tier.highlighted ? (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-emerald-500/50 bg-emerald-500 text-slate-950">
                  Most popular
                </Badge>
              ) : null}

              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.period ? (
                  <span className="text-sm font-medium text-slate-400">{tier.period}</span>
                ) : null}
              </div>

              <Button
                href="#"
                variant={tier.highlighted ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
