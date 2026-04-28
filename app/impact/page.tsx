"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
 Play, ArrowRight, Sparkles, ChevronLeft, ChevronRight,
 ExternalLink, CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GLOBAL_IMPACT_DATA, type ImpactItem } from "@/lib/impact-videos";

/* ─────────────────────────────────────────────
 Hero media video player OR image banner
 ───────────────────────────────────────────── */
function HeroMedia({
 item,
 playing,
 onPlay,
}: {
 item: ImpactItem;
 playing: boolean;
 onPlay: () => void;
}) {
 const isVideo = item.type === "video" && item.youtubeId;
 const embedSrc = isVideo
 ? `https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`
 : "";

 return (
 <div className="group relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-white/[0.07] shadow-[0_12px_80px_rgba(107,79,190,0.12)]">
  {/* Video playing state */}
  {isVideo && playing ? (
  <iframe
   src={embedSrc}
   title={item.title}
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   allowFullScreen
   className="absolute inset-0 h-full w-full rounded-2xl"
  />
  ) : (
  <button
   onClick={isVideo ? onPlay : undefined}
   className={`absolute inset-0 h-full w-full ${isVideo ? "cursor-pointer" : "cursor-default"}`}
   aria-label={isVideo ? `Play ${item.title}` : item.title}
   tabIndex={isVideo ? 0 : -1}
  >
   {/* Background image */}
   <Image
   src={item.image!}
   alt={item.title}
   fill
   priority
   sizes="(max-width: 768px) 100vw, 920px"
   className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
   />

   {/* Gradient scrim bottom-heavy for text */}
   <div
   className="absolute inset-0"
   style={{
    background:
    "linear-gradient(to top, rgba(6,2,12,0.9) 0%, rgba(6,2,12,0.5) 35%, rgba(6,2,12,0.15) 60%, rgba(6,2,12,0.25) 100%)",
   }}
   />

   {/* Type badge */}
   <div className="absolute left-5 top-5 md:left-6 md:top-6">
   <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur-md ${
    isVideo
     ? "border-red-400/30 bg-red-500/15 text-red-300"
     : "border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/10 text-[var(--brand-teal)]"
    }`}
   >
    {isVideo ? "Video" : "Case Study"}
   </span>
   </div>

   {/* Play button (video only) */}
   {isVideo && (
   <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
    <div className="absolute inset-0 scale-[2] rounded-full bg-white/5 blur-2xl transition-transform duration-500 group-hover:scale-[2.5]" />
    <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-white/25 bg-white/10 backdrop-blur-lg transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/20 md:h-20 md:w-20">
     <Play className="ml-1 h-7 w-7 text-white" fill="white" strokeWidth={0} />
    </div>
    </div>
   </div>
   )}

   {/* Bottom text overlay */}
   <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
   <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
    {item.subtitle}
   </p>
   <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
    {item.title}
   </h2>
   </div>
  </button>
  )}
 </div>
 );
}

/* ─────────────────────────────────────────────
 Content card premium detail panel
 ───────────────────────────────────────────── */
function ContentPanel({ item }: { item: ImpactItem }) {
 return (
 <motion.div
  key={item.id + "-content"}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -12 }}
  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
  className="space-y-5"
 >
  {/* ── Stats row ── */}
  {item.stats && item.stats.length > 0 && (
  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
   {item.stats.map((stat, i) => (
   <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
    delay: 0.12 + i * 0.06,
    }}
    className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-md"
   >
    {/* Corner accent */}
    <div
    className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20"
    style={{
     background:
     i % 2 === 0
      ? "radial-gradient(circle, rgba(45,199,179,0.4) 0%, transparent 70%)"
      : "radial-gradient(circle, rgba(107,79,190,0.4) 0%, transparent 70%)",
    }}
    aria-hidden
    />
    <p className="text-2xl font-bold tracking-tight text-white md:text-3xl">
    {stat.value}
    </p>
    <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/60">
    {stat.label}
    </p>
   </motion.div>
   ))}
  </div>
  )}

  {/* ── Main content card ── */}
  <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-xl md:p-9">
  {/* Inner glow accents */}
  <div
   className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25"
   style={{
   background:
    "radial-gradient(circle, rgba(107,79,190,0.2) 0%, transparent 70%)",
   }}
   aria-hidden
  />
  <div
   className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full opacity-15"
   style={{
   background:
    "radial-gradient(circle, rgba(45,199,179,0.2) 0%, transparent 70%)",
   }}
   aria-hidden
  />

  {/* Description */}
  <p className="relative text-[17px] leading-[1.85] text-white/85 md:text-lg">
   {item.description}
  </p>

  {/* Deep dive section */}
  <div className="relative mt-7 border-t border-white/[0.06] pt-7">
   <div className="flex items-center gap-2">
   <div className="h-1 w-5 rounded-full bg-[var(--brand-teal)]" />
   <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-teal)]">
    Deep Dive
   </p>
   </div>
   <p className="mt-4 text-base leading-[1.9] text-white/75 md:text-[17px]">
   {item.details}
   </p>
  </div>

  {/* Highlights */}
  {item.highlights && item.highlights.length > 0 && (
   <div className="relative mt-7 border-t border-white/[0.06] pt-7">
   <div className="flex items-center gap-2">
    <div className="h-1 w-5 rounded-full bg-[var(--brand-purple)]" />
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
    Key Highlights
    </p>
   </div>
   <ul className="mt-4 space-y-3">
    {item.highlights.map((h, i) => (
    <motion.li
     key={i}
     initial={{ opacity: 0, x: -8 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{
     duration: 0.35,
     ease: [0.16, 1, 0.3, 1],
     delay: 0.2 + i * 0.05,
     }}
     className="flex items-start gap-3"
    >
     <CheckCircle2
     className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--brand-teal)]" 
     strokeWidth={2}
     />
     <span className="text-[15px] leading-[1.75] text-white/75 md:text-base">
     {h}
     </span>
    </motion.li>
    ))}
   </ul>
   </div>
  )}

  {/* External link */}
  {item.url && (
   <div className="relative mt-7 border-t border-white/[0.06] pt-6">
   <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-[var(--brand-teal)]/30 hover:bg-[var(--brand-teal)]/10 hover:text-[var(--brand-teal)]"
   >
    Learn more about {item.title.split(':')[0].trim()}
    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" strokeWidth={2} />
   </a>
   </div>
  )}
  </div>
 </motion.div>
 );
}

/* ─────────────────────────────────────────────
 Navigation tabs horizontal scroll
 ───────────────────────────────────────────── */
function NavTabs({
 items,
 activeId,
 onSelect,
}: {
 items: ImpactItem[];
 activeId: string;
 onSelect: (item: ImpactItem) => void;
}) {
 const scrollRef = useRef<HTMLDivElement>(null);
 const activeRef = useRef<HTMLButtonElement>(null);

 // Auto-scroll active tab into view
 useEffect(() => {
 if (activeRef.current && scrollRef.current) {
  const container = scrollRef.current;
  const el = activeRef.current;
  const left = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
  container.scrollTo({ left, behavior: "smooth" });
 }
 }, [activeId]);

 const scroll = useCallback((dir: "left" | "right") => {
 if (!scrollRef.current) return;
 scrollRef.current.scrollBy({
  left: dir === "left" ? -280 : 280,
  behavior: "smooth",
 });
 }, []);

 return (
 <div className="relative">
  {/* Arrows */}
  <button
  onClick={() => scroll("left")}
  className="absolute -left-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white md:flex"
  aria-label="Scroll left"
  >
  <ChevronLeft className="h-4 w-4" />
  </button>
  <button
  onClick={() => scroll("right")}
  className="absolute -right-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white md:flex"
  aria-label="Scroll right"
  >
  <ChevronRight className="h-4 w-4" />
  </button>

  {/* Scrollable tabs */}
  <div
  ref={scrollRef}
  className="scrollbar-hide flex gap-2 overflow-x-auto px-1 py-1"
  >
  {items.map((item) => {
   const isActive = item.id === activeId;
   return (
   <button
    key={item.id}
    ref={isActive ? activeRef : null}
    onClick={() => onSelect(item)}
    className={`group relative flex-shrink-0 rounded-xl px-5 py-3 text-left transition-all duration-300 ${
    isActive
     ? "bg-white/[0.07] shadow-[0_0_20px_rgba(107,79,190,0.1)]"
     : "bg-transparent hover:bg-white/[0.04]"
    }`}
   >
    {/* Active indicator bar */}
    {isActive && (
    <motion.div
     layoutId="active-tab"
     className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[var(--brand-teal)]"
     transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
    )}

    <span
    className={`block whitespace-nowrap text-[13px] font-semibold tracking-tight transition-colors ${
     isActive ? "text-white" : "text-white/40 group-hover:text-white/60"
    }`}
    >
    {item.title}
    </span>
    <span
    className={`mt-0.5 block whitespace-nowrap text-[11px] transition-colors ${
     isActive ? "text-white/50" : "text-white/20 group-hover:text-white/30"
    }`}
    >
    {item.subtitle}
    </span>
   </button>
   );
  })}
  </div>
 </div>
 );
}

/* ─────────────────────────────────────────────
 Page
 ───────────────────────────────────────────── */
export default function ImpactPage() {
 const [active, setActive] = useState<ImpactItem>(GLOBAL_IMPACT_DATA[0]);
 const [playing, setPlaying] = useState(false);

 const handleSelect = useCallback((item: ImpactItem) => {
 setActive(item);
 setPlaying(false);
 }, []);

 return (
 <main
  className="relative min-h-screen overflow-hidden"
  style={{
  background:
   "linear-gradient(175deg, #120528 0%, #0e0620 30%, #0a0412 65%, #06020c 100%)",
  }}
 >
  {/* Ambient glow */}
  <div
  className="pointer-events-none absolute -left-[15%] top-[5%] h-[60vh] w-[50vw] rounded-full opacity-30"
  style={{
   background:
   "radial-gradient(ellipse, rgba(107,79,190,0.2) 0%, transparent 70%)",
  }}
  aria-hidden
  />
  <div
  className="pointer-events-none absolute -right-[10%] top-[40%] h-[50vh] w-[40vw] rounded-full opacity-20"
  style={{
   background:
   "radial-gradient(ellipse, rgba(45,199,179,0.12) 0%, transparent 70%)",
  }}
  aria-hidden
  />

  {/* ── Page header ── */}
  <section className="relative z-10 pb-6 pt-28 text-center md:pt-36">
  <Container>
   <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   >
   <div className="mx-auto mb-5 flex items-center justify-center gap-2">
    <Sparkles className="h-4 w-4 text-[var(--brand-teal)]" strokeWidth={2} />
    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
    Global Impact
    </span>
   </div>
   <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white">
    Where Purpose Meets Action
   </h1>
   <p className="mx-auto mt-5 max-w-[540px] text-base leading-relaxed text-white/70 md:text-lg">
    Explore the partners and movements that turn collaboration into
    measurable, lasting change across the globe.
   </p>
   </motion.div>
  </Container>
  </section>

  {/* ── Navigation tabs ── */}
  <section className="relative z-10 pb-8 pt-2">
  <Container>
   <NavTabs
   items={GLOBAL_IMPACT_DATA}
   activeId={active.id}
   onSelect={handleSelect}
   />
  </Container>
  </section>

  {/* ── Showcase ── */}
  <section className="relative z-10 pb-24">
  <Container>
   <div className="mx-auto max-w-[920px]">
   <AnimatePresence mode="wait">
    <motion.div
    key={active.id}
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
    <HeroMedia
     item={active}
     playing={playing}
     onPlay={() => setPlaying(true)}
    />
    </motion.div>
   </AnimatePresence>

   {/* Content panel */}
   <div className="mt-6">
    <AnimatePresence mode="wait">
    <ContentPanel item={active} />
    </AnimatePresence>
   </div>

   {/* Quick-nav dots */}
   <div className="mt-8 flex items-center justify-center gap-2">
    {GLOBAL_IMPACT_DATA.map((item) => (
    <button
     key={item.id}
     onClick={() => handleSelect(item)}
     className={`h-2 rounded-full transition-all duration-300 ${
     item.id === active.id
      ? "w-7 bg-[var(--brand-teal)]"
      : "w-2 bg-white/15 hover:bg-white/30"
     }`}
     aria-label={`Go to ${item.title}`}
    />
    ))}
   </div>
   </div>
  </Container>
  </section>
 </main>
 );
}
