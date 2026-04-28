"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, BookOpen, Gem, Users2, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";

const BLOCKS = [
 {
 label: "Opportunities",
 labelColor: "text-pink-500",
 heading: "Learn, Build, and\nBe Inspired",
 bullets: [
  { Icon: Send, text: "New tools reshaping creative workflows." },
  { Icon: BookOpen, text: "Gain insights that help you stay ahead in AI." },
  { Icon: Gem, text: "Find opportunities to experiment and evolve." },
 ],
 cta: { label: "Reserve Your Seat", href: "#cta" },
 image: "/images/philosophy-speaker.png",
 imageAlt: "Professional speaker at a community event",
 imageFirst: true,
 },
 {
 label: "Impact",
 labelColor: "text-pink-500",
 heading: "Take Ideas From\nStage to Reality",
 bullets: [
  { Icon: Users2, text: "Walk away with practical frameworks." },
  { Icon: Sparkles, text: "Get clarity on where AI is heading." },
  { Icon: TrendingUp, text: "Leave inspired, informed, and ready to create." },
 ],
 cta: { label: "View Agenda", href: "/events" },
 image: "/images/philosophy-crowd.png",
 imageAlt: "Engaged audience at a professional summit",
 imageFirst: false,
 },
] as const;

function CTABlock({ block }: { block: typeof BLOCKS[number] }) {
 const imageVariant = block.imageFirst ? slideInLeft : slideInRight;
 const textVariant = block.imageFirst ? slideInRight : slideInLeft;

 const imageCol = (
 <motion.div
  variants={imageVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  className="overflow-hidden rounded-2xl"
 >
  <div className="relative aspect-[1.15/1] w-full">
  <Image
   src={block.image}
   alt={block.imageAlt}
   fill
   sizes="(max-width: 1024px) 100vw, 50vw"
   className="object-cover transition-transform duration-700 hover:scale-[1.02]"
  />
  </div>
 </motion.div>
 );

 const textCol = (
 <motion.div
  variants={textVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  className="flex flex-col justify-center"
 >
  <p className={`text-[13px] font-bold tracking-[0.05em] ${block.labelColor}`}>
  {block.label}
  </p>

  <h2 className="mt-4 text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-black whitespace-pre-line">
  {block.heading}
  </h2>

  <motion.ul
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-60px" }}
  className="mt-8 space-y-4"
  >
  {block.bullets.map((bullet) => (
   <motion.li
   key={bullet.text}
   variants={staggerItem}
   className="flex items-center gap-3"
   >
   <bullet.Icon
    className={`h-[15px] w-[15px] shrink-0 ${block.labelColor}`}
    strokeWidth={2.5}
   />
   <span className="text-[14px] font-medium text-gray-700">
    {bullet.text}
   </span>
   </motion.li>
  ))}
  </motion.ul>

  <motion.div variants={fadeUp} className="mt-10">
  <Button
   href={block.cta.href}
   variant="outline"
   className="group h-[46px] gap-3 rounded-full border border-gray-300 px-6 text-[14px] font-bold text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
  >
   {block.cta.label}
   <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-gray-100 transition-colors group-hover:bg-gray-800">
    <ArrowRight className="h-3 w-3" strokeWidth={3} />
   </div>
  </Button>
  </motion.div>
 </motion.div>
 );

 return (
 <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
  {block.imageFirst ? (
  <>
   {imageCol}
   {textCol}
  </>
  ) : (
  <>
   {textCol}
   {imageCol}
  </>
  )}
 </div>
 );
}

export function CTASection() {
 return (
 <section id="cta" className="bg-white py-24 md:py-40">
  <Container>
  <div className="flex flex-col gap-32 md:gap-48">
   {BLOCKS.map((block) => (
   <CTABlock key={block.label} block={block} />
   ))}
  </div>
  </Container>
 </section>
 );
}
