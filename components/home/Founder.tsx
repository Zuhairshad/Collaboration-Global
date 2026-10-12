"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FOUNDER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const VIDEO_SRC = "/media/founder-video.mp4";
const VIDEO_POSTER = "/media/founder-poster.jpg";

export function Founder() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <section id="founder" className="bg-slate-50 py-16 md:py-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Label */}
          <motion.div variants={fadeUp}>
            <SectionLabel>Meet the Founder</SectionLabel>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.07] tracking-tight text-brand-text"
          >
            What Comes Next?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[560px] text-[15px] leading-[1.8] text-brand-muted"
          >
            Gill challenges how wealth is distributed, why societal injustices persist,
            and how small and medium businesses are positioned to drive the most meaningful change.
          </motion.p>

          {/* ── BIG VIDEO PLAYER ── */}
          <motion.div
            variants={fadeUp}
            className="relative mt-8 w-full max-w-[1100px] overflow-hidden rounded-2xl ring-1 ring-white/5 md:mt-12"
            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.22)" }}
          >
            <div className="relative aspect-video w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black">
              {playing ? (
                <video
                  ref={videoRef}
                  src={VIDEO_SRC}
                  poster={VIDEO_POSTER}
                  controls
                  playsInline
                  preload="none"
                  className="absolute inset-0 h-full w-full bg-black"
                />
              ) : (
                <button
                  onClick={handlePlay}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                  aria-label={`Play ${FOUNDER.name} founder video`}
                >
                  {/* Thumbnail */}
                  <Image
                    src={VIDEO_POSTER}
                    alt={`${FOUNDER.name} — founder of Collaboration Global`}
                    fill
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />

                  {/* Soft scrim with teal vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-[rgba(49,207,195,0.18)] transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Brand badge */}
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] ring-1 ring-white/20 md:left-5 md:top-5 md:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
                    Founder Story
                  </div>

                  {/* Centre play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div
                        className="absolute inset-0 scale-[2.4] rounded-full transition-opacity duration-500 group-hover:opacity-80"
                        style={{ background: "radial-gradient(circle, rgba(49,207,195,0.3) 0%, rgba(49,207,195,0.12) 40%, transparent 70%)" }}
                      />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/25 transition-[transform,background-color,border-color] duration-300 group-hover:scale-110 group-hover:border-white/50 group-hover:bg-black/15 md:h-20 md:w-20">
                        <Play className="ml-1 h-6 w-6 text-white drop-shadow-lg md:ml-1.5 md:h-8 md:w-8" fill="white" strokeWidth={0} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom overlay: speaker */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-4 pb-4 pt-10 md:px-6 md:pb-6 md:pt-20">
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/25">
                        <Image src="/media/gill-portrait.jpeg" alt="Gill Tiney" fill className="object-cover" sizes="36px" />
                      </div>
                      <div className="flex flex-col text-left leading-tight">
                        <span className="text-[14px] font-semibold text-white">{FOUNDER.name}</span>
                        <span className="text-[12px] text-white/70">{FOUNDER.title}</span>
                      </div>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          {/* Credentials row */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {FOUNDER.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full border border-brand-border bg-white px-4 py-1.5 text-[12px] font-medium text-brand-muted"
              >
                {c}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
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
      </Container>
    </section>
  );
}
