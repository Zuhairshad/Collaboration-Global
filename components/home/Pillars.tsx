"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { WHO_ATTENDS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

function AudienceCard({
 title,
 description,
 index,
}: {
 title: string;
 description: string;
 index: number;
}) {
 return (
 <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
  {/* Top accent line */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
  {/* Subtle top glow bloom */}
  <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/10 blur-2xl" />
  {/* Watermark number */}
  <p className="pointer-events-none absolute -right-3 -top-4 select-none text-[88px] font-black leading-none text-gray-100">
  0{index + 1}
  </p>

  {/* Content */}
  <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
  0{index + 1}
  </p>
  <p className="relative mt-3 text-[15px] font-semibold tracking-tight text-gray-900">
  {title}
  </p>
  <p className="relative mt-2 text-[13px] leading-relaxed text-gray-500">
  {description}
  </p>
 </div>
 );
}

type AudienceItem = { readonly title: string; readonly description: string };

function ScrollColumn({
 items,
 direction,
 startIndex,
}: {
 items: AudienceItem[];
 direction: "up" | "down";
 startIndex: number;
}) {
 const doubled = [...items, ...items];
 return (
 <div className="relative flex-1 overflow-hidden">
  <div
  className={`flex flex-col gap-3 ${
   direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
  }`}
  >
  {doubled.map((item, i) => (
   <AudienceCard
   key={`${item.title}-${i}`}
   title={item.title}
   description={item.description}
   index={(startIndex + (i % items.length)) % WHO_ATTENDS.length}
   />
  ))}
  </div>
 </div>
 );
}

export function Pillars() {
 const col1 = WHO_ATTENDS.filter((_, i) => i % 2 === 0); // 0, 2, 4
 const col2 = WHO_ATTENDS.filter((_, i) => i % 2 === 1); // 1, 3, 5

 return (
 <section id="pillars" className="overflow-hidden bg-gray-50 py-24 md:py-32">
  <Container>
  <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">

   {/* ── LEFT: label + heading + info card + CTA ── */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Who It&apos;s For</SectionLabel>
   </motion.div>

   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Made for
    <br />
    Collaborative
    <br />
    Leaders.
   </motion.h2>

   {/* Info card */}
   <motion.div
    variants={fadeUp}
    className="mt-8 rounded-2xl border border-brand-border bg-brand-card p-6"
   >
    <Users className="h-6 w-6 text-gray-400" strokeWidth={1.5} />
    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
    From entrepreneurs to educators if you believe in the power
    of collaboration, this is your community.
    </p>
   </motion.div>

   <motion.div variants={fadeUp} className="mt-6">
    <Button
    href="/programs"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    Explore Membership
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
   </motion.div>
   </motion.div>

   {/* ── RIGHT: two scrolling columns (2/3 viewport) ── */}
   <div
   className="flex h-[520px] gap-3 lg:h-[620px]"
   aria-hidden
   >
   <ScrollColumn items={col1} direction="up" startIndex={0} />
   <ScrollColumn items={col2} direction="down" startIndex={1} />
   </div>

  </div>
  </Container>
 </section>
 );
}
