"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { OFFERINGS, FOUNDER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PROGRAM_META = [
 { time: "Free · Monthly", color: "text-[var(--reunion-accent)]" },
 { time: "£30 · Monthly", color: "text-[var(--reunion-accent)]" },
 { time: "£50 · Monthly", color: "text-[var(--reunion-accent)]" },
] as const;

export function ContentPreview() {
 return (
 <section id="programs" className="bg-gray-50 py-24 md:py-32">
  <Container>
  <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

   {/* LEFT sticky heading + info card + CTA */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="flex flex-col lg:sticky lg:top-28 lg:self-start"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Programs</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Your Path to
    <br />
    Collaboration.
   </motion.h2>

   {/* Info card */}
   <motion.div
    variants={fadeUp}
    className="mt-8 rounded-2xl border border-brand-border bg-brand-card p-6"
   >
    <CalendarDays className="h-6 w-6 text-gray-400" strokeWidth={1.5} />
    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
    Start free and go at your own pace every tier is designed to
    take you deeper into connection, collaboration, and growth.
    </p>
   </motion.div>

   <motion.div variants={fadeUp} className="mt-6">
    <Button
    href="/programs"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    Explore Programs
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
   </motion.div>
   </motion.div>

   {/* RIGHT sticky-stacking program cards */}
   <div className="relative flex flex-col gap-4">
   {OFFERINGS.map((offering, idx) => (
    <a
    key={offering.title}
    href={offering.cta.href}
    className="group block rounded-2xl bg-white border border-gray-100 p-7 transition-colors hover:bg-gray-50 shadow-sm"
    style={{
     position: "sticky",
     top: `${96 + idx * 22}px`,
     zIndex: idx + 1,
    }}
    >
    {/* Time / price badge */}
    <p className={`text-sm font-semibold ${PROGRAM_META[idx].color}`}>
     {PROGRAM_META[idx].time}
    </p>

    {/* Title */}
    <h3 className="mt-3 text-[1.25rem] font-bold leading-snug tracking-tight text-gray-900">
     {offering.title}
    </h3>

    {/* Description */}
    <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
     {offering.description}
    </p>

    {/* Presenter row */}
    <div className="mt-5 flex items-center gap-3">
     <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-[9px] font-bold uppercase text-gray-400">
     GT
     </div>
     <p className="text-sm font-medium text-gray-600">
     {FOUNDER.name}
     </p>
    </div>
    </a>
   ))}
   </div>

  </div>
  </Container>
 </section>
 );
}
