"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ImpactMap() {
 return (
 <section id="impact-map" className="bg-white py-24 md:py-32">
  <Container>
  {/* Header */}
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="text-center"
  >
   <motion.div variants={fadeUp} className="flex justify-center">
   <SectionLabel>Global Reach</SectionLabel>
   </motion.div>
   <motion.h2
   variants={fadeUp}
   className="mx-auto mt-4 max-w-[600px] text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] text-black"
   >
   28+ Countries.
   <br />
   One Movement.
   </motion.h2>
   <motion.p
   variants={fadeUp}
   className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-gray-500"
   >
   Members across six continents collaborating, growing, and creating
   real-world impact together.
   </motion.p>
  </motion.div>

  {/* World impact map embed */}
  <motion.div
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mt-12 overflow-hidden rounded-2xl border border-gray-200"
  >
   <iframe
   loading="lazy"
   src="https://businessesforgood.com/embed.php?id=13358&id2=Impact&height=600"
   width="100%"
   height="600"
   frameBorder="0"
   className="block w-full"
   title="Collaboration Global World Impact Map"
   />
  </motion.div>

  {/* B1G1 giving widget gradient border: seagreen → pink */}
  <motion.div
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mt-8 flex justify-center"
  >
   {/* Gradient border wrapper */}
   <div className="rounded-2xl bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-purple)] p-[2px] shadow-lg shadow-[#2DC7B3]/20">
   <div className="overflow-hidden rounded-[14px] bg-white">
    <iframe
    loading="lazy"
    src="https://account.b1g1.com/frontgivingwidget/mywidget/b7ce31cea2c1852396c4473b675b6a66"
    width="600"
    height="396"
    frameBorder="0"
    className="block max-w-full"
    title="B1G1 Giving Impact Widget"
    />
   </div>
   </div>
  </motion.div>
  </Container>
 </section>
 );
}
