"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export function FAQ() {
 const [openIdx, setOpenIdx] = useState<number | null>(null);

 return (
 <section id="faq" className="py-24 md:py-32">
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
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-gray-900"
   >
    Your Questions,
    <br />
    Answered.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-relaxed text-gray-600"
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
     className="flex w-full items-center justify-between gap-6 p-6 text-left"
     onClick={() => setOpenIdx(open ? null : idx)}
     aria-expanded={open}
     >
     <span className="text-sm font-medium tracking-tight text-gray-900 md:text-[15px]">
      {item.question}
     </span>
     <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-colors">
      {open ? (
      <Minus className="h-3.5 w-3.5" strokeWidth={2} />
      ) : (
      <Plus className="h-3.5 w-3.5" strokeWidth={2} />
      )}
     </span>
     </button>

     <AnimatePresence initial={false}>
     {open && (
      <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
      >
      <div className="px-6 pb-6 text-[14px] leading-relaxed text-gray-600 md:text-[15px]">
       {item.answer}
      </div>
      </motion.div>
     )}
     </AnimatePresence>
    </motion.div>
    );
   })}
   </motion.div>
  </div>
  </Container>
 </section>
 );
}
