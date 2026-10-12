"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export function FAQ() {
 const [openIdx, setOpenIdx] = useState<number | null>(null);

 return (
 <section id="faq" className="py-20 md:py-32">
  <Container>
  <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
   {/* LEFT heading + CTA */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="lg:sticky lg:top-28 lg:self-start"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>FAQ</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-brand-text"
   >
    Your Questions,
    <br />
    Answered.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-relaxed text-brand-muted"
   >
    Still have questions? We&apos;re happy to help.
   </motion.p>
   <motion.div variants={fadeUp} className="mt-8">
    <Button
    href="/contact"
    variant="outline"
    className="text-sm normal-case tracking-normal"
    >
    Get in Touch
    </Button>
   </motion.div>
   </motion.div>

   {/* RIGHT accordion */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="space-y-2"
   >
   {FAQ_ITEMS.map((item, idx) => {
    const open = openIdx === idx;
    return (
    <motion.div
     key={item.question}
     variants={staggerItem}
     className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card"
    >
     <button
     type="button"
     className="flex w-full items-center justify-between gap-4 p-5 text-left md:gap-6 md:p-6"
     onClick={() => setOpenIdx(open ? null : idx)}
     aria-expanded={open}
     aria-controls={`faq-panel-${idx}`}
     id={`faq-trigger-${idx}`}
     >
     <span className="text-sm font-medium tracking-tight text-brand-text md:text-[15px]">
      {item.question}
     </span>
     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-border bg-brand-card text-brand-muted transition-colors">
      {open ? (
      <Minus className="h-3.5 w-3.5" strokeWidth={2} />
      ) : (
      <Plus className="h-3.5 w-3.5" strokeWidth={2} />
      )}
     </span>
     </button>

     {/* CSS grid-rows trick: animates 0fr -> 1fr without per-frame height animation in JS */}
     <div
      id={`faq-panel-${idx}`}
      role="region"
      aria-labelledby={`faq-trigger-${idx}`}
      inert={!open}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
     >
      <div className="overflow-hidden">
      <div className="px-5 pb-5 text-[14px] leading-relaxed text-brand-muted md:px-6 md:pb-6 md:text-[15px]">
       {item.answer}
      </div>
      </div>
     </div>
    </motion.div>
    );
   })}
   </motion.div>
  </div>
  </Container>
 </section>
 );
}
