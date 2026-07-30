"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Finance leaders trust FinFlow"
          description="Hear from CFOs who replaced spreadsheets and manual reconciliation with FinFlow."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-xl border border-slate-700/50 bg-slate-800/50 p-8"
            >
              <Quote className="h-8 w-8 text-emerald-500/30" />
              <p className="mt-4 flex-1 text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-700/50 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                  {testimonial.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{testimonial.name}</span>
                  <span className="text-xs text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
