"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
 Calendar, MapPin, ArrowRight, Ticket,
 Globe2, Users, Zap, CalendarDays,
} from "lucide-react";
import { HERO, IMPACT_PARTNERS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HERO_MIC_IMAGE =
 "https://framerusercontent.com/images/HgpsqWbGTb99lYVn0mHuH1oGdI.jpg";

const DISPLAY_PARTNERS = IMPACT_PARTNERS.slice(0, 3);

const TICKER_ITEMS = [
 { Icon: Globe2,  text: "28+ Countries" },
 { Icon: Users,  text: "500+ Members" },
 { Icon: Zap,   text: "10k+ Impacts" },
 { Icon: CalendarDays,text: "6+ Years Active" },
];

function StatsTicker() {
 const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
 return (
 <div className="relative w-full overflow-hidden bg-[var(--brand-teal)] py-3.5 md:py-4">
  <div className="flex w-max animate-hero-marquee items-center">
  {items.map((item, i) => (
   <span
   key={i}
   aria-hidden={i >= TICKER_ITEMS.length}
   className="flex shrink-0 items-center gap-2 px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white md:text-xs"
   >
   <item.Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
   {item.text}
   <span className="ml-4 text-white/40">·</span>
   </span>
  ))}
  </div>
 </div>
 );
}

export function Hero({ className }: { className?: string }) {
 return (
 <section
  className={cn("relative flex min-h-screen flex-col overflow-hidden", className)}
 >
  {/* ── LAYER 1: Full-bleed background image (covers entire section) ── */}
  <Image
  src={HERO_MIC_IMAGE}
  alt="Microphone with atmospheric stage lighting"
  fill
  priority
  sizes="100vw"
  className="object-cover"
  style={{ objectPosition: "70% center" }}
  />

  {/* ── LAYER 2: Gradient overlay solid left, transparent right ── */}
  <div
  className="pointer-events-none absolute inset-0"
  style={{
   background: [
   "linear-gradient(to right, rgba(18,5,38,0.97) 0%, rgba(18,5,38,0.93) 25%, rgba(18,5,38,0.75) 45%, rgba(18,5,38,0.35) 65%, rgba(18,5,38,0.1) 80%, transparent 100%)",
   ].join(", "),
  }}
  aria-hidden
  />

  {/* ── LAYER 3: Top & bottom vignette for cinematic depth ── */}
  <div
  className="pointer-events-none absolute inset-0"
  style={{
   background:
   "linear-gradient(to bottom, rgba(18,5,38,0.5) 0%, transparent 20%, transparent 85%, rgba(6,2,12,0.6) 100%)",
  }}
  aria-hidden
  />

  {/* ── LAYER 4: Subtle warm purple ambient glow top-left ── */}
  <div
  className="pointer-events-none absolute -left-[5%] -top-[5%] h-[60vh] w-[50vw] rounded-full opacity-40"
  style={{
   background:
   "radial-gradient(ellipse at center, rgba(107,79,190,0.25) 0%, transparent 70%)",
  }}
  aria-hidden
  />

  {/* ── Content layer ── */}
  <div className="relative z-10 flex flex-1 flex-col px-8 pb-0 pt-24 sm:px-14 lg:px-[11%]">

  {/* Main copy vertically centred */}
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   animate="visible"
   className="flex flex-1 flex-col justify-center"
  >
   {/* Meta line */}
   <motion.div
   variants={staggerItem}
   className="flex items-center gap-2.5 text-[13px] text-white/50"
   >
   <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
   <span>Est. 2019</span>
   <span className="text-white/25">•</span>
   <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
   <span>United Kingdom &amp; Global</span>
   </motion.div>

   {/* Headline */}
   <motion.h1
   variants={staggerItem}
   className="mt-6 max-w-[640px] text-[clamp(2.6rem,5.6vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white"
   >
   <span className="block">{HERO.headingLine1}</span>
   <span className="block">{HERO.headingLine2}</span>
   </motion.h1>

   {/* CTAs */}
   <motion.div
   variants={staggerItem}
   className="mt-9 flex flex-wrap items-center gap-3.5"
   >
   <Button
    href={HERO.primaryCTA.href}
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal"
   >
    {HERO.primaryCTA.label}
    <Ticket className="h-4 w-4 shrink-0" strokeWidth={1.8} />
   </Button>
   <Button
    href={HERO.secondaryCTA.href}
    variant="outline"
    className="gap-2 text-sm normal-case tracking-normal border-white/20 text-white hover:border-white/40 hover:bg-white/[0.06]"
   >
    {HERO.secondaryCTA.label}
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
   </Button>
   </motion.div>
  </motion.div>

  {/* Bottom row: partners left · description right */}
  <motion.div
   variants={staggerContainer}
   initial="hidden"
   animate="visible"
   className="flex flex-wrap items-end justify-between gap-8 pb-6"
  >
   <motion.div variants={staggerItem}>
   <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
    {HERO.sponsorLabel}
   </p>
   <div className="mt-4 flex flex-wrap items-center gap-6 md:gap-8">
    {DISPLAY_PARTNERS.map((partner) => (
    <div key={partner.name} className="flex items-center gap-2.5">
     <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
     <span className="text-[10px] font-bold text-[var(--brand-teal)]">
      {partner.name.charAt(0)}
     </span>
     </div>
     <span className="text-sm font-medium text-white/45">
     {partner.name}
     </span>
    </div>
    ))}
   </div>
   </motion.div>

   <motion.p
   variants={staggerItem}
   className="hidden max-w-[360px] text-right text-[13.5px] leading-relaxed text-white/35 md:block"
   >
   {HERO.intro}
   </motion.p>
  </motion.div>
  </div>

  {/* Stats ticker flush bottom */}
  <div className="relative z-10">
  <StatsTicker />
  </div>
 </section>
 );
}
