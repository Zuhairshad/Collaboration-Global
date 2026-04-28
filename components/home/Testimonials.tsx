"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";

type Testimonial = (typeof TESTIMONIALS)[number];

function QuoteIcon() {
 return (
 <svg
  width="36"
  height="26"
  viewBox="0 0 44 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden
 >
  <path
  d="M0 20.267C0 12.533 5.333 5.867 14.133 0L17.6 4.533C12.267 8.267 9.867 12.8 9.333 16.533H14.667C17.067 16.533 19.2 18.667 19.2 21.067V26.933C19.2 29.333 17.067 31.467 14.667 31.467H5.333C2.4 31.467 0 29.067 0 26.133V20.267ZM24 20.267C24 12.533 29.333 5.867 38.133 0L41.6 4.533C36.267 8.267 33.867 12.8 33.333 16.533H38.667C41.067 16.533 43.2 18.667 43.2 21.067V26.933C43.2 29.333 41.067 31.467 38.667 31.467H29.333C26.4 31.467 24 29.067 24 26.133V20.267Z"
  fill="#2DC7B3"
  />
 </svg>
 );
}

function TestimonialCard({ t }: { t: Testimonial }) {
 return (
 <div className="w-[340px] shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  <QuoteIcon />
  <p className="mt-4 text-[14.5px] leading-[1.7] text-gray-700 italic">
  {t.quote}
  </p>
  <div className="mt-5 flex items-center gap-3">
  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">
   <Image
   src={t.avatar}
   alt={t.name}
   fill
   className="object-cover"
   sizes="36px"
   onError={() => {}}
   />
  </div>
  <div>
   <p className="text-[13px] font-semibold text-gray-900 leading-tight">
   {t.name}
   </p>
   <p className="text-[11.5px] text-gray-500 leading-tight mt-0.5">
   {t.role}
   </p>
  </div>
  </div>
 </div>
 );
}

function MarqueeRow({
 items,
 reverse = false,
}: {
 items: readonly Testimonial[];
 reverse?: boolean;
}) {
 const doubled = [...items, ...items];
 return (
 <div className="relative flex overflow-hidden">
  <div className={`flex gap-4 ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
  {doubled.map((t, i) => (
   <TestimonialCard key={`${t.name}-${i}`} t={t} />
  ))}
  </div>
 </div>
 );
}

export function Testimonials() {
 const row1 = TESTIMONIALS.slice(0, 6);
 const row2 = TESTIMONIALS.slice(6, 12);

 return (
 <section id="testimonials" className="overflow-hidden bg-white py-24 md:py-32">
  <Container>
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="flex flex-col items-center"
  >
   <motion.div variants={fadeUp}>
   <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-white text-sm font-medium shadow-lg">
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <span>Loved by our global community</span>
   </div>
   </motion.div>

   <motion.h2
   variants={fadeUp}
   className="mx-auto mt-7 max-w-[640px] text-center text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-black"
   >
   What our members
   <br />
   are saying.
   </motion.h2>
  </motion.div>
  </Container>

  <div className="mt-14 flex flex-col gap-4">
  <MarqueeRow items={row1} />
  <MarqueeRow items={row2} reverse />
  </div>
 </section>
 );
}
