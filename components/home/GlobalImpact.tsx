"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Heart, Users, Lightbulb, Palette, Shield } from "lucide-react";
import { IMPACT_PARTNERS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const PARTNER_IMG =
 "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&fit=crop";

const PARTNER_ICONS = [Globe2, Heart, Users, Lightbulb, Palette, Shield] as const;

export function GlobalImpact() {
 const left = IMPACT_PARTNERS.slice(0, 3);
 const right = IMPACT_PARTNERS.slice(3, 6);

 return (
 <section id="impact" className="bg-white py-24 md:py-32">
  <Container>
  {/* Centred label + heading */}
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="text-center"
  >
   <motion.div variants={fadeUp} className="flex justify-center">
   <SectionLabel>Partners</SectionLabel>
   </motion.div>
   <motion.h2
   variants={fadeUp}
   className="mx-auto mt-4 max-w-[600px] text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] text-black"
   >
   Where Changemakers Connect.
   </motion.h2>
  </motion.div>

  {/* Three-column body */}
  <div className="mt-16 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">

   {/* LEFT first 3 partners */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="flex flex-col"
   >
   {left.map((partner, idx) => {
    const Icon = PARTNER_ICONS[idx];
    return (
    <motion.a
     key={partner.name}
     href={"url" in partner ? (partner.url ?? "#") : "#"}
     target={"url" in partner && partner.url ? "_blank" : undefined}
     rel={"url" in partner && partner.url ? "noopener noreferrer" : undefined}
     variants={staggerItem}
     className="group flex flex-col gap-3 border-b border-gray-100 py-7 first:pt-0 last:border-none last:pb-0"
    >
     <Icon
     className="h-6 w-6 text-[var(--reunion-accent)]"
     strokeWidth={1.6}
     />
     <div>
     <p className="text-[17px] font-bold tracking-tight text-black group-hover:text-[var(--reunion-accent)] transition-colors">
      {partner.name}
     </p>
     <p className="mt-1 text-[14px] leading-relaxed text-gray-500">
      {partner.description}
     </p>
     </div>
    </motion.a>
    );
   })}
   </motion.div>

   {/* CENTER community photo */}
   <motion.div
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="w-full overflow-hidden rounded-2xl lg:w-[320px] xl:w-[380px]"
   >
   <div className="relative aspect-[3/4] w-full">
    <Image
    src={PARTNER_IMG}
    alt="Collaboration Global community"
    fill
    sizes="(max-width: 1024px) 100vw, 380px"
    className="object-cover"
    />
   </div>
   </motion.div>

   {/* RIGHT last 3 partners */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="flex flex-col"
   >
   {right.map((partner, idx) => {
    const Icon = PARTNER_ICONS[idx + 3];
    return (
    <motion.div
     key={partner.name}
     variants={staggerItem}
     className="flex flex-col gap-3 border-b border-gray-100 py-7 first:pt-0 last:border-none last:pb-0"
    >
     <Icon
     className="h-6 w-6 text-[var(--reunion-accent)]"
     strokeWidth={1.6}
     />
     <div>
     <p className="text-[17px] font-bold tracking-tight text-black">
      {partner.name}
     </p>
     <p className="mt-1 text-[14px] leading-relaxed text-gray-500">
      {partner.description}
     </p>
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
