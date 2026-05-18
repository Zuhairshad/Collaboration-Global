"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { FOUNDER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

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
    <section id="founder" className="bg-slate-50 py-24 md:py-32">
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
            <SectionLabel>TEDx Talk</SectionLabel>
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
            className="mt-12 w-full max-w-[1100px] overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 40px 120px rgba(49,207,195,0.08), 0 20px 60px rgba(0,0,0,0.7)" }}
          >
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
                  {/* Thumbnail */}
                  <Image
                    src={thumbnailUrl}
                    alt={`${FOUNDER.name} TEDx Talk`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Subtle dark scrim — keeps image visible but adds depth */}
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />

                  {/* Duration */}
                  <div className="absolute right-4 top-4 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white backdrop-blur-sm">
                    19:58
                  </div>

                  {/* TEDx badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#E62B1E]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    TEDxMaidMarianWay
                  </div>

                  {/* Centre play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 scale-[2] rounded-full bg-[var(--brand-teal)]/20 blur-2xl" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                        <Play className="ml-1.5 h-8 w-8 text-white" fill="white" strokeWidth={0} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom overlay: title + speaker */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-6 pb-6 pt-16">
                    <p className="text-[15px] font-bold leading-snug text-white">
                      What Comes Next? How True Collaboration Changes Everything
                    </p>
                    <div className="mt-2.5 flex items-center gap-2.5">
                      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
                        <Image src="/media/gill-portrait.jpeg" alt="Gill Tiney" fill className="object-cover" sizes="28px" />
                      </div>
                      <span className="text-[13px] text-white/70">{FOUNDER.name} · {FOUNDER.title}</span>
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
