"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { OFFERINGS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export function Offerings() {
 const paidOfferings = OFFERINGS.filter((o) => o.price !== "Free");
 const freeOffering = OFFERINGS.find((o) => o.price === "Free");

 return (
 <section id="offerings" className="bg-white py-24 md:py-32">
  <Container>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="text-center"
  >
   <motion.div variants={fadeUp} className="flex justify-center">
   <SectionLabel>Membership</SectionLabel>
   </motion.div>
   <motion.h2
   variants={fadeUp}
   className="mx-auto mt-4 max-w-[600px] text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] text-black"
   >
   Choose Your Experience.
   </motion.h2>
   {freeOffering && (
   <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-[500px] text-[15px] leading-relaxed text-gray-500">
    Start with a{" "}
    <a href={freeOffering.cta.href} className="font-semibold text-[var(--reunion-accent)] underline underline-offset-2">
    free Community Session
    </a>{" "}
    then step into the tier that fits your journey.
   </motion.p>
   )}
  </motion.div>

  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto mt-14 grid max-w-[820px] gap-4 md:grid-cols-2"
  >
   {paidOfferings.map((offering) => (
   <motion.div
    key={offering.title}
    variants={staggerItem}
    whileHover={{ scale: 1.015 }}
    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    className={`relative flex flex-col rounded-2xl border p-8 ${
    offering.highlighted
     ? "border-[var(--reunion-accent)]/30 bg-[var(--reunion-accent)]/[0.04]"
     : "border-gray-100 bg-gray-50"
    }`}
   >
    {offering.highlighted && (
    <div className="absolute right-4 top-4 rounded-full bg-[var(--reunion-accent)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
     Popular
    </div>
    )}

    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--reunion-accent)]">
    {offering.tag}
    </p>
    <p className="mt-3 text-xl font-bold tracking-tight text-black">
    {offering.title}
    </p>
    <p className="mt-1 text-3xl font-bold tracking-tight text-black">
    {offering.price}
    </p>
    <p className="mt-4 text-[14px] leading-relaxed text-gray-500">
    {offering.description}
    </p>

    <ul className="mt-6 flex-1 space-y-3">
    {offering.features.map((f) => (
     <li key={f} className="flex items-start gap-3">
     <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--reunion-accent)]" strokeWidth={2.5} />
     <span className="text-[14px] text-gray-600">{f}</span>
     </li>
    ))}
    </ul>

    <div className="mt-8">
    <Button
     href={offering.cta.href}
     variant={offering.highlighted ? "accent" : "outline"}
     className={`w-full gap-2 text-sm normal-case tracking-normal ${!offering.highlighted ? "border-gray-200 text-black hover:bg-gray-100" : ""}`}
    >
     {offering.cta.label}
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </motion.div>
   ))}
  </motion.div>
  </Container>
 </section>
 );
}
