"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ImpactMap() {
 const [widgetScale, setWidgetScale] = useState(1);
 const widgetBoxRef = useRef<HTMLDivElement | null>(null);

 // The B1G1 widget renders at a fixed 600x396; scale it down to fit narrow screens instead of clipping.
 useEffect(() => {
 const el = widgetBoxRef.current;
 if (!el || typeof ResizeObserver === "undefined") return;
 const ro = new ResizeObserver(([entry]) => {
  setWidgetScale(Math.min(1, entry.contentRect.width / 600));
 });
 ro.observe(el);
 return () => ro.disconnect();
 }, []);

 return (
 <section id="impact-map" className="bg-white py-20 md:py-32">
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
   className="mx-auto mt-4 max-w-[600px] text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] text-brand-text"
   >
   Every Continent.
   <br />
   One Movement.
   </motion.h2>
   <motion.p
   variants={fadeUp}
   className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-brand-muted"
   >
   An extended community of thousands collaborating, growing, and
   creating real-world impact together.
   </motion.p>
  </motion.div>

  {/* World impact map embed */}
  <div className="mt-12 h-[420px] overflow-hidden rounded-2xl border border-brand-border bg-brand-card md:h-[600px]">
   <iframe
   loading="lazy"
   src="https://businessesforgood.com/embed.php?id=13358&id2=Impact&height=600"
   width="100%"
   height="100%"
   frameBorder="0"
   className="block h-full w-full"
   title="Collaboration Global World Impact Map"
   />
  </div>

  {/* B1G1 giving widget gradient border: seagreen → pink */}
  <div className="mt-8 flex justify-center">
   {/* Gradient border wrapper (600px inner width on desktop, as before) */}
   <div className="w-full max-w-[604px] rounded-2xl bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-purple)] p-[2px] shadow-lg shadow-[#2DC7B3]/20">
   <div
    ref={widgetBoxRef}
    className="relative aspect-[600/396] w-full overflow-hidden rounded-[14px] bg-white"
   >
    <iframe
    loading="lazy"
    src="https://account.b1g1.com/frontgivingwidget/mywidget/b7ce31cea2c1852396c4473b675b6a66"
    width="600"
    height="396"
    frameBorder="0"
    className="absolute left-0 top-0 block h-[396px] w-[600px] max-w-none origin-top-left"
    style={{ transform: widgetScale < 1 ? `scale(${widgetScale})` : undefined }}
    title="B1G1 Giving Impact Widget"
    />
   </div>
   </div>
  </div>
  </Container>
 </section>
 );
}
