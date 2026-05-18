"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const POSTS = [
  {
    slug: "the-building-blocks-of-your-best-collaboration",
    title: "The Building Blocks of Your Best Collaboration!",
    excerpt:
      "The rules for creating an amazing collaboration are also, pretty much, the same rules to lead your best life discover the principles that make both work.",
    date: "April 30, 2024",
    category: "Collaboration",
  },
  {
    slug: "are-you-awake-to-the-social-dilemma",
    title: "Are you awake to The Social Dilemma?",
    excerpt:
      "Social media connects us and divides us in equal measure. Gill explores how we can use these tools with intention not be used by them.",
    date: "March 13, 2024",
    category: "Mindset",
  },
  {
    slug: "being-on-holiday",
    title: "Being on holiday",
    excerpt:
      "A reflective walk along the Wey and Arun Canal in West Sussex and what slowing down taught about presence, connection, and what really matters.",
    date: "September 12, 2021",
    category: "Reflection",
  },
  {
    slug: "welcome-to-collaboration-global",
    title: "Welcome to Collaboration Global",
    excerpt:
      "An introduction to the movement where we came from, what we stand for, and why collaboration is the most powerful thing we can do together.",
    date: "December 28, 2019",
    category: "Community",
  },
] as const;

const VIDEOS = [
  {
    id: "R8MEzol5J6g",
    title: "Transforming the Paradigm with Gill Tiney",
    description: "Gill explores how collaboration shifts us from competition to co-creation — and why that shift changes everything.",
    duration: "4:12",
  },
  {
    id: "1MGfCxVU6mc",
    title: "Spreading a Little Wisdom",
    description: "A short, powerful reflection from Gill on the mindset shifts that make collaboration not just possible, but inevitable.",
    duration: "3:58",
  },
] as const;

function VideoCard({ video }: { video: typeof VIDEOS[number] }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className="group overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
      {/* Thumbnail / Player */}
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            {/* Thumbnail */}
            <Image
              src={thumbnail}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(74,67,150,0.92) 0%, rgba(49,207,195,0.3) 60%, rgba(0,0,0,0.15) 100%)",
              }}
            />

            {/* Duration badge */}
            <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white backdrop-blur-sm">
              {video.duration}
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 scale-150 rounded-full bg-[var(--brand-teal)]/30 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <Play className="ml-1 h-6 w-6 text-white" fill="white" strokeWidth={0} />
                </div>
              </div>
            </div>

            {/* Bottom title overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
              <span className="inline-block rounded-full bg-[var(--brand-teal)]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--brand-teal)]">
                Collaboration Global
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Card footer */}
      <div className="bg-[#1e1630] px-5 py-5">
        <p className="text-[15px] font-bold leading-snug text-white">{video.title}</p>
        <p className="mt-1.5 text-[13px] leading-[1.7] text-white/55">{video.description}</p>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <main>
      {/* ── BLOG HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/media/blog-hero.jpg"
          alt="Blog hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-[760px] text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm"
            >
              Blog
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-white"
            >
              Ideas worth sharing.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-[560px] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.8] text-white/75"
            >
              Practical insights on connection, collaboration, and purposeful growth.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── VIDEOS ── */}
      <section className="bg-[#0f0b1a] py-16 md:py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto max-w-[900px]"
          >
            <motion.div variants={fadeUp} className="flex items-end justify-between gap-4">
              <div>
                <SectionLabel className="text-white/50">Videos</SectionLabel>
                <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-white">
                  Collaboration in Action.
                </h2>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-5 sm:grid-cols-2">
              {VIDEOS.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </motion.div>

            {/* Prominent playlist CTA */}
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="https://www.youtube.com/playlist?list=PLX7SwuEapLcRwpdfHZWQmT1rRYj_nVARC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-[15px] font-semibold text-white transition-all duration-200 hover:border-[var(--brand-teal)]/40 hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
                  <Play className="ml-0.5 h-4 w-4 text-[var(--brand-teal)]" fill="currentColor" strokeWidth={0} />
                </div>
                View the full playlist on YouTube
                <ExternalLink className="ml-auto h-4 w-4 text-white/40" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="bg-brand-card py-16 md:py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto max-w-[900px]"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Latest</SectionLabel>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5">
              <Link href={`/content/blog/${featured.slug}`} className="group block">
                <div className="rounded-2xl border border-brand-border bg-white p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--brand-purple)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-brand-dim">
                      <Calendar className="h-3.5 w-3.5" />
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="mt-5 text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold leading-[1.2] tracking-tight text-brand-text transition-colors group-hover:text-[var(--brand-purple)]">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.8] text-brand-muted">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)]">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {rest.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link href={`/content/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--brand-purple)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-purple)]">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-brand-dim">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="mt-3 flex-1 text-[15px] font-bold leading-[1.35] tracking-tight text-brand-text transition-colors group-hover:text-[var(--brand-purple)]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.75] text-brand-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--brand-purple)]">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
