"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FOUNDER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";

function parseYouTube(url: string): { id: string; start?: number } {
 const idMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
 const startMatch = url.match(/[?&]t=(\d+)/);
 return {
 id: idMatch?.[1] ?? "",
 start: startMatch ? Number(startMatch[1]) : undefined,
 };
}

export function Founder() {
 const { id: videoId, start } = parseYouTube(FOUNDER.tedxUrl);
 const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1${start ? `&start=${start}` : ""}`;
 const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
 const [playing, setPlaying] = useState(false);

 return (
 <section id="founder" className="bg-gray-50 py-24 md:py-32">
  <Container>
  <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-14">

   {/* LEFT info */}
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="flex flex-col justify-center lg:pt-2"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Community</SectionLabel>
   </motion.div>

   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Meet the Voice of
    <br />
    Collaboration
   </motion.h2>

   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-relaxed text-gray-600"
   >
    {FOUNDER.bio}
   </motion.p>

   <motion.div
    variants={staggerContainer}
    className="mt-8 grid grid-cols-2 gap-2"
   >
    {FOUNDER.credentials.map((c) => (
    <motion.div
     key={c}
     variants={staggerItem}
     className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-gray-700"
    >
     {c}
    </motion.div>
    ))}
   </motion.div>

   <motion.div
    variants={fadeUp}
    className="mt-8 flex flex-wrap items-center gap-3"
   >
    <Button
    href="/about"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    Read Gill&apos;s Story
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    <Button
    href={FOUNDER.tedxUrl}
    variant="outline"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    <Play className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
    Watch on YouTube
    </Button>
   </motion.div>
   </motion.div>

   {/* RIGHT video card */}
   <motion.div
   variants={slideInRight}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
   >
   {/* Thumbnail / Player */}
   <div className="relative aspect-video w-full bg-black">
    {playing ? (
    <iframe
     src={embedSrc}
     title={`${FOUNDER.name} TEDx Talk`}
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
     className="absolute inset-0 h-full w-full"
    />
    ) : (
    <button
     onClick={() => setPlaying(true)}
     className="group absolute inset-0 h-full w-full cursor-pointer"
     aria-label="Play TEDx Talk"
    >
     {/* Thumbnail image */}
     <Image
     src={thumbnailUrl}
     alt={`${FOUNDER.name} TEDx Talk`}
     fill
     className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
     />

     {/* Cinematic scrim */}
     <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 transition-all duration-300 group-hover:from-black/70" />

     {/* Top badges row */}
     <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
     {/* Category pill warm gold */}
     <span className="rounded-full bg-[#d4a843] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-black">
      TEDx Talk
     </span>
     {/* Duration */}
     <span className="rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur-sm">
      19:58
     </span>
     </div>

     {/* Centered play button */}
     <div className="absolute inset-0 flex items-center justify-center">
     <div className="relative">
      {/* Soft glow ring */}
      <div className="absolute inset-0 scale-150 rounded-full bg-[#d4a843]/20 blur-xl" />
      {/* Outer ring */}
      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
      <Play className="ml-1 h-7 w-7 text-white" fill="white" strokeWidth={0} />
      </div>
     </div>
     </div>

     {/* Bottom title overlay */}
     <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
     <p className="text-[13px] font-bold leading-snug text-white drop-shadow-md">
      What Comes Next? How True Collaboration Changes Everything
     </p>
     </div>
    </button>
    )}
   </div>

   {/* Card footer */}
   <div className="flex items-center gap-3 border-t border-gray-200 px-5 py-4">
    {/* Avatar */}
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-purple)] text-[11px] font-bold text-white">
    GT
    </div>
    <div className="min-w-0">
    <p className="text-sm font-semibold text-gray-900">{FOUNDER.name}</p>
    <p className="text-xs text-gray-500">{FOUNDER.title}</p>
    </div>
    <span className="ml-auto rounded-full bg-[#E62B1E]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ff4d3d]">
    TEDxMaidMarianWay
    </span>
   </div>
   </motion.div>

  </div>
  </Container>
 </section>
 );
}
