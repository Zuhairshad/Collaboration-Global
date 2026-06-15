"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { PartnerStory } from "@/lib/partner-stories";

/* ────────── Video block with play overlay ────────── */
function VideoBlock({
 thumb,
 youtubeId,
 alt,
}: {
 thumb: string;
 youtubeId?: string;
 alt: string;
}) {
 const [playing, setPlaying] = useState(false);

 if (playing && youtubeId) {
 return (
  <div className="relative aspect-video w-full overflow-hidden">
  <iframe
   src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
   title={alt}
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   allowFullScreen
   className="absolute inset-0 h-full w-full"
  />
  </div>
 );
 }

 return (
 <button
  onClick={() => youtubeId && setPlaying(true)}
  className="group relative block aspect-video w-full overflow-hidden shadow-sm"
  aria-label={`Play ${alt}`}
  disabled={!youtubeId}
 >
  <Image
  src={thumb}
  alt={alt}
  fill
  sizes="(max-width: 768px) 100vw, 600px"
  className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
  {youtubeId && (
  <div className="absolute inset-0 flex items-center justify-center">
   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-teal)] shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
   <Play className="ml-1 h-7 w-7 text-white" fill="white" strokeWidth={0} />
   </div>
  </div>
  )}
 </button>
 );
}

/* ────────── Parallax wrapper for an image ────────── */
function ParallaxImageBlock({
 src,
 alt,
 className,
 priority,
 sizes,
 intensity = 60,
}: {
 src: string;
 alt: string;
 className?: string;
 priority?: boolean;
 sizes?: string;
 intensity?: number;
}) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ["start end", "end start"],
 });
 const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

 return (
 <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
  <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-12">
  <Image
   src={src}
   alt={alt}
   fill
   priority={priority}
   sizes={sizes}
   className="object-cover"
  />
  </motion.div>
 </div>
 );
}

/* ────────── Main template ────────── */
export function PartnerStoryPage({ story }: { story: PartnerStory }) {
 return (
 <main className="relative bg-slate-100">
  {/* ─── SECTION 1, Hero ─── */}
  <section className="sticky top-0 z-10 min-h-[80vh] bg-white pb-12 pt-24 md:pb-16 md:pt-28">
  <Container>
   {story.bannerImage ? (
    <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-14">
    <motion.div
     initial={{ opacity: 0, y: 24 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
     <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Collaboration Global × {story.partnerName}
     </p>
     <h1 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-text">
     {story.heroHeadline.lead}{" "}
     <span className="text-[var(--brand-teal)]">{story.heroHeadline.accent}</span>
     {story.heroHeadline.tail ? <> {story.heroHeadline.tail}</> : null}
     </h1>
     <div className="mt-4 space-y-3 text-[14px] leading-[1.65] text-brand-muted md:text-[15px]">
     {story.heroParagraphs.map((p, i) => (
      <p key={i}>{p}</p>
     ))}
     </div>
     <p className="mt-4 text-[14px] font-semibold italic text-[var(--brand-teal)] md:text-[15px]">
     {story.heroItalicLine}
     </p>
     <div className="mt-6 flex flex-col gap-3 sm:flex-row">
     <a
      href={story.primaryCta.href}
      target={story.primaryCta.href.startsWith("http") ? "_blank" : undefined}
      rel={story.primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-full bg-[var(--brand-teal)] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-teal-hover)] hover:shadow-md"
     >
      {story.primaryCta.label}
     </a>
     <Link
      href={story.secondaryCta.href}
      className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-teal)] bg-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal)] transition-all duration-300 hover:bg-[var(--brand-teal)]/5"
     >
      {story.secondaryCta.label}
     </Link>
     </div>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, scale: 0.97, y: 16 }}
     animate={{ opacity: 1, scale: 1, y: 0 }}
     transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
     className="relative mx-auto w-full overflow-hidden ring-1 ring-black/5"
     style={{
      maxWidth: story.bannerMaxWidth,
      boxShadow: "0 30px 80px rgba(49,207,195,0.18), 0 15px 40px rgba(0,0,0,0.15)",
     }}
    >
     <div
     className="relative w-full bg-slate-100"
     style={{ aspectRatio: story.bannerAspect ?? "666/510" }}
     >
     <Image
      src={story.bannerImage}
      alt={story.bannerAlt ?? story.partnerName}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 600px"
      className="object-cover"
     />
     <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-[rgba(49,207,195,0.10)]" />
     <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-white/20 backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
      {story.partnerName}
     </div>
     </div>
    </motion.div>
    </div>
   ) : (
   <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-20">
   <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
   >
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
    Collaboration Global × {story.partnerName}
    </p>
    <h1 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-text">
    {story.heroHeadline.lead}{" "}
    <span className="text-[var(--brand-teal)]">
    {story.heroHeadline.accent}
    </span>
    {story.heroHeadline.tail ? <> {story.heroHeadline.tail}</> : null}
    </h1>

    <div className="mt-6 space-y-4 text-[16px] leading-[1.7] text-brand-muted md:text-[17px]">
    {story.heroParagraphs.map((p, i) => (
     <p key={i}>{p}</p>
    ))}
    </div>

    <p className="mt-6 text-[16px] font-semibold italic text-[var(--brand-teal)] md:text-[17px]">
    {story.heroItalicLine}
    </p>

    <div className="mt-6 flex flex-col gap-3 sm:max-w-sm">
    <a
     href={story.primaryCta.href}
     target={story.primaryCta.href.startsWith("http") ? "_blank" : undefined}
     rel={
     story.primaryCta.href.startsWith("http")
      ? "noopener noreferrer"
      : undefined
     }
     className="inline-flex items-center justify-center rounded-full bg-[var(--brand-teal)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-teal-hover)] hover:shadow-md"
    >
     {story.primaryCta.label}
    </a>
    <Link
     href={story.secondaryCta.href}
     className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-teal)] bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--brand-teal)] transition-all duration-300 hover:bg-[var(--brand-teal)]/5"
    >
     {story.secondaryCta.label}
    </Link>
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    className="relative mx-auto w-full max-w-[620px]"
   >
    <ParallaxImageBlock
    src={story.portraitImage}
    alt={story.partnerName}
    className="aspect-[4/5] w-full shadow-xl"
    priority
    sizes="(max-width: 768px) 100vw, 620px"
    intensity={40}
    />
   </motion.div>
   </div>
   )}
  </Container>
  </section>

  {/* ─── SECTION 2, Question + video ─── */}
  <section className="sticky top-0 z-20 min-h-[80vh] rounded-t-[2.5rem] bg-slate-50 py-20 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.15)] md:rounded-t-[3rem] md:py-28">
  <Container>
   <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   >
    <p className="text-sm leading-[1.7] text-brand-muted">
    {story.questionIntro}
    </p>
    <h2 className="mt-4 text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.02em] text-brand-text">
    “{story.question.lead}{" "}
    <span className="text-[var(--brand-teal)]">{story.question.accent}”</span>
    </h2>
    <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-brand-muted md:text-base">
    {story.questionParagraphs.map((p, i) => (
     <p key={i}>{p}</p>
    ))}
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
   >
    <VideoBlock
    thumb={story.videoBlock1.thumb}
    youtubeId={story.videoBlock1.youtubeId}
    alt={story.videoBlock1.alt}
    />
   </motion.div>
   </div>
  </Container>
  </section>

  {/* ─── SECTION 3, How it works + video ─── */}
  <section className="sticky top-0 z-30 min-h-[80vh] rounded-t-[2.5rem] bg-white py-20 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.15)] md:rounded-t-[3rem] md:py-28">
  <Container>
   <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   >
    <h2 className="text-[clamp(2.2rem,4.4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--brand-teal)]">
    {story.howTitle}
    </h2>
    <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-brand-muted md:text-base">
    {story.howParagraphs.map((p, i) => (
     <p key={i}>{p}</p>
    ))}
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
   >
    <VideoBlock
    thumb={story.videoBlock2.thumb}
    youtubeId={story.videoBlock2.youtubeId}
    alt={story.videoBlock2.alt}
    />
   </motion.div>
   </div>
  </Container>
  </section>

  {/* ─── SECTION 4, Tinted callout, left-aligned ─── */}
  <section className="sticky top-0 z-40 min-h-[80vh] rounded-t-[2.5rem] bg-[#eef9f7] py-20 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.15)] md:rounded-t-[3rem] md:py-28">
  <Container>
   <motion.div
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-60px" }}
   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   className="mx-auto max-w-3xl bg-[var(--brand-purple)] p-8 shadow-[0_30px_80px_-30px_rgba(101,91,179,0.6)] md:p-14"
   >
   <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-[1.25] tracking-[-0.01em] text-white">
    {story.calloutHeadline}
   </h2>
   <p className="mt-5 text-[15px] leading-[1.7] text-white/85 md:text-base">
    {story.calloutLead}
   </p>
   <p className="mt-5 text-[15px] font-semibold text-white md:text-base">
    What you’ll find when you join us:
   </p>
   <ul className="mt-5 space-y-3">
    {story.calloutBenefits.map((line, i) => (
    <li key={i} className="flex items-start gap-3">
     <Check
     className="mt-1 h-5 w-5 shrink-0 text-white"
     strokeWidth={3}
     />
     <span className="text-[15px] leading-[1.75] text-white/90 md:text-base">
     {line}
     </span>
    </li>
    ))}
   </ul>
   </motion.div>
  </Container>
  </section>

  {/* ─── SECTION 5, Dive deeper + parallax collage ─── */}
  <section className="sticky top-0 z-50 min-h-[80vh] rounded-t-[2.5rem] bg-white py-16 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.15)] md:rounded-t-[3rem] md:py-20">
  <Container>
   <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
   <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
   >
    <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.025em] text-[var(--brand-teal)]">
    {story.deeperTitle}
    </h2>
    <p className="mt-4 text-[15px] font-semibold text-brand-text md:text-base">
    {story.deeperSubtitle}
    </p>
    <div className="mt-3 space-y-2.5 text-[14px] leading-[1.65] text-brand-muted md:text-[15px]">
    {story.deeperParagraphs1.map((p, i) => (
     <p key={i}>{p}</p>
    ))}
    </div>
    <ul className="mt-4 space-y-2.5">
    {story.deeperChecks.map((line, i) => (
     <li key={i} className="flex items-start gap-3">
     <Check
      className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-teal)]"
      strokeWidth={3}
     />
     <span className="text-[14px] text-brand-text md:text-[15px]">
      {line}
     </span>
     </li>
    ))}
    </ul>
    <p className="mt-4 text-[14px] leading-[1.65] text-brand-muted md:text-[15px]">
    {story.deeperClosing}
    </p>
    <div className="mt-6">
    <Link
     href={story.deeperCta.href}
     className="inline-flex items-center justify-center rounded-full bg-[var(--brand-teal)] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-teal-hover)] hover:shadow-md"
    >
     {story.deeperCta.label}
    </Link>
    </div>
   </motion.div>

   <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="grid grid-cols-2 gap-3"
   >
    {story.collageImages.slice(0, 3).map((src, i) => (
    <ParallaxImageBlock
     key={i}
     src={src}
     alt={`${story.partnerName} community moment ${i + 1}`}
     className="aspect-square w-full shadow-sm"
     sizes="(max-width: 768px) 50vw, 260px"
     intensity={30}
    />
    ))}
    <div
     className="relative flex aspect-square items-center justify-center overflow-hidden shadow-sm"
     style={{
     background:
      "linear-gradient(135deg, rgba(49,207,195,1) 0%, rgba(101,91,179,1) 100%)",
     }}
    >
    <p className="px-4 text-center text-base font-bold uppercase tracking-[0.18em] leading-tight text-white drop-shadow-md md:text-lg">
     {story.collageTagline}
    </p>
    </div>
   </motion.div>
   </div>
  </Container>
  </section>

  {/* ─── SECTION 6, Closing CTA, left-aligned ─── */}
  <section className="relative z-[60] min-h-[80vh] rounded-t-[2.5rem] bg-slate-900 py-24 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.25)] md:rounded-t-[3rem] md:py-32">
  <Container>
   <motion.div
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-80px" }}
   transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
   className="mx-auto max-w-3xl"
   >
   <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
    {story.closingHeadline.lead}{" "}
    <span className="text-[var(--brand-teal)]">
    {story.closingHeadline.accent}
    </span>
   </h2>
   <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/70 md:text-base">
    {story.closingBody}
   </p>
   <div className="mt-6">
    <a
    href={story.closingCta.href}
    target={story.closingCta.href.startsWith("http") ? "_blank" : undefined}
    rel={
     story.closingCta.href.startsWith("http")
     ? "noopener noreferrer"
     : undefined
    }
    className="inline-flex items-center justify-center rounded-full bg-[var(--brand-teal)] px-10 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-300 hover:bg-[var(--brand-teal-hover)] hover:shadow-md"
    >
    {story.closingCta.label}
    </a>
   </div>
   </motion.div>

   <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-2 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
   <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
    Collaboration Global × {story.partnerName}
    {story.partnerSince ? `, Partner Since ${story.partnerSince}` : ""}
   </p>
   <Link
    href="/impact"
    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)] hover:text-[var(--brand-teal-hover)]"
   >
    ← Back to all partners
   </Link>
   </div>
  </Container>
  </section>
 </main>
 );
}
