"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ImageBlock } from "@/components/media/ImageBlock";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

function PhilosophyCard({
  t,
  idx,
  total,
  progress,
}: {
  t: { quote: string };
  idx: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const ARRIVE = [0.05, 0.38, 0.70];
  const arrive = ARRIVE[idx] ?? idx / total;
  const slideStart = Math.max(0, arrive - 0.14);
  const next = ARRIVE[idx + 1] ?? 1;

  const x = useTransform(progress, [slideStart, arrive], ["110%", "0%"]);
  const scale = useTransform(progress, [arrive, next], [1, idx < total - 1 ? 0.93 : 1]);

  return (
    <motion.div
      style={{ x, scale, zIndex: idx + 1 }}
      className="[grid-area:1/1]"
    >
      <div className="flex h-full flex-col rounded-2xl bg-white px-8 py-9 shadow-xl md:px-12">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[52px] font-black leading-none text-[var(--brand-teal)]/20">&ldquo;</span>
          <span className="mt-2 shrink-0 text-[11px] font-bold tracking-[0.2em] text-[var(--brand-teal-text)]">
            {String(idx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-2 text-[17px] leading-[1.8] text-brand-text">{t.quote}</p>
      </div>
    </motion.div>
  );
}

function StaticPhilosophyCard({
  t,
  idx,
  total,
}: {
  t: { quote: string };
  idx: number;
  total: number;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-lg sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="text-[44px] font-black leading-none text-[var(--brand-teal)]/20">&ldquo;</span>
        <span className="mt-2 shrink-0 text-[11px] font-bold tracking-[0.2em] text-[var(--brand-teal-text)]">
          {String(idx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-1 text-[15px] leading-[1.75] text-brand-text">{t.quote}</p>
    </div>
  );
}

function PhilosophyIntro() {
  return (
    <div>
      <SectionLabel className="text-white">Our Philosophy</SectionLabel>
      <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
        Together we can work out
        <br />99.9% of what we need.
      </h2>
      <p className="mt-5 text-[15px] leading-[1.85] text-white">
        Authentic people helping each other be bigger and better than they can be alone. No judgement. No ridicule. No question is stupid.
      </p>
      <div className="mt-7 rounded-2xl bg-[var(--brand-purple)] px-5 py-5 sm:px-7 sm:py-6">
        <p className="text-[28px] font-black leading-none text-white/25">&ldquo;</p>
        <p className="mt-2 text-[14.5px] font-medium leading-[1.75] text-white/90">
          Never doubt that a group of committed citizens can change the world. Indeed, it is the only thing that ever has.
        </p>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">Margaret Mead</p>
      </div>
    </div>
  );
}

function PhilosophySection() {
  return (
    <>
      {/* Mobile: plain stacked list in normal flow */}
      <section className="bg-brand-gradient py-20 md:hidden">
        <Container>
          <PhilosophyIntro />
          <div className="mt-10 space-y-4">
            {FEATURED_TESTIMONIALS.map((t, idx) => (
              <StaticPhilosophyCard
                key={idx}
                t={t}
                idx={idx}
                total={FEATURED_TESTIMONIALS.length}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* md+: pinned scroll-driven card stack */}
      <PinnedPhilosophySection />
    </>
  );
}

function PinnedPhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="hidden md:block" style={{ height: "300svh" }}>
      <div className="bg-brand-gradient sticky top-0 flex h-svh items-center overflow-hidden">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left: Philosophy text */}
            <PhilosophyIntro />

            {/* Right: Testimonial cards sliding in from right */}
            <div className="grid">
              {FEATURED_TESTIMONIALS.map((t, idx) => (
                <PhilosophyCard
                  key={idx}
                  t={t}
                  idx={idx}
                  total={FEATURED_TESTIMONIALS.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
}

const BENEFITS = [
  {
    title: "Monthly Members Meeting",
    body: "Build genuine relationships with fellow members each month. A consistent, welcoming space to share what's really going on and grow together.",
  },
  {
    title: "Monthly Guest Meeting",
    body: "Meet carefully curated changemakers who share your values. Every session brings fresh energy and new possibilities into your world.",
  },
  {
    title: "Monthly Evolve Session",
    body: "Dedicated time to reflect, reset and evolve your approach each month. Grow with people who truly understand the collaboration journey.",
  },
  {
    title: "Weekly Live Q&A Sessions",
    body: "Get direct answers from Gill and community experts every week. No topic is off-limits and no question is ever too small to ask.",
  },
  {
    title: "Accountability Opportunities",
    body: "Stay on track with committed peers who know your story. Real accountability from real people who celebrate wins and hold you up.",
  },
  {
    title: "Exclusive Early Access",
    body: "Be the first to know about new events, offers and collaborations. Being inside the community opens doors before they open to anyone else.",
  },
  {
    title: "Video Tutorials & Support Materials",
    body: "A growing library of video content covering business, personal development and collaboration, on mobile and desktop, any time you need it.",
  },
  {
    title: "Growing Resource Library",
    body: "Curated tools, guides and materials supporting every stage of your journey. Built by the community and added to constantly as we grow.",
  },
] as const;

const FEATURED_TESTIMONIALS = [TESTIMONIALS[2], TESTIMONIALS[9], TESTIMONIALS[11]] as const;

export default function AcademyPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden">
        <Image
          src="/images/academy-hero.jpg"
          alt="All together different, Collaborator Academy"
          fill
          preload
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,8,6,0.94) 0%, rgba(13,8,6,0.62) 45%, rgba(13,8,6,0.15) 100%)",
          }}
        />
        {/* Copy hugs the left edge of the screen rather than the centred content column */}
        <Container className="relative z-10 max-w-none pb-16 pt-36 lg:px-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={staggerItem}
              className="inline-block rounded-full bg-[var(--brand-teal)]/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
            >
              Changemakers Unite
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="mt-5 max-w-[720px] text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white"
            >
              All together
              <br />
              <span className="italic text-[var(--brand-teal)]">different.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-white/65"
            >
              Join the Collaboration Academy to give you space to stretch, grow, explore and collaborate.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                href="https://collaborationglobal.mn.co/plans/213468"
                variant="accent"
                className="gap-2 text-sm normal-case tracking-normal"
              >
                Try Free
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
              </Button>
              <Button
                href="/programs/community-sessions"
                variant="outline"
                className="gap-2 border-white/20 text-sm normal-case tracking-normal text-white hover:border-white/40 hover:bg-white/[0.06]"
              >
                Attend a free session first
              </Button>
            </motion.div>
            <motion.p variants={staggerItem} className="mt-4 text-[12px] text-white/60">
              You&apos;ll have a chance to review your selection. Cancel anytime.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ── WHAT IS THE ACADEMY ── */}
      <section className="bg-brand-card py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>The Academy</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text"
              >
                No one has all
                <br />the answers.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-[15px] leading-[1.85] text-brand-muted"
              >
                Ever found yourself feeling like you should know something, but don&apos;t feel like admitting it in the groups where you&apos;re building your reputation as an expert?
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-[15px] leading-[1.85] text-brand-muted"
              >
                We are a community who share their knowledge. No one has all the answers, but together we can work out 99.9% of what we need. With 24/7 access via mobile and desktop, Gill Tiney&apos;s lifetime of experience in collaborative success is always within reach.
              </motion.p>

              {/* Mobile image */}
              <motion.div variants={fadeUp}>
                <ImageBlock id="story-community-2" variant="landscape" showCaption={false} />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6">
                <Button
                  href="https://collaborationglobal.mn.co/plans/213468"
                  variant="accent"
                  className="gap-2 text-sm normal-case tracking-normal"
                >
                  Try Free
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Image, desktop */}
            <RevealOnScroll className="hidden md:block">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/media/story-community-2.jpg"
                  alt="Community session in progress"
                  width={1066}
                  height={1600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </RevealOnScroll>

          </div>
        </Container>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What&apos;s Included</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text"
            >
              Everything you need
              <br />to grow together.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-brand-muted"
            >
              The Academy gives you the structure, the people, and the resources to keep moving forward.
            </motion.p>
          </motion.div>

          {/* Sticky stacking benefit cards */}
          <div className="mx-auto max-w-[680px]">
            {BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="sticky"
                style={{
                  top: "96px",
                  zIndex: idx + 1,
                  marginBottom: idx < BENEFITS.length - 1 ? "180px" : "60px",
                }}
              >
                <div className="rounded-2xl border border-brand-border bg-white px-5 py-7 shadow-[0_4px_28px_rgba(0,0,0,0.08)] sm:px-8 md:py-10">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10">
                      <span className="text-[13px] font-black tracking-tight text-[var(--brand-purple)]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[18px] font-bold leading-snug tracking-tight text-brand-text">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[15px] leading-[1.8] text-brand-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMMUNITY PHILOSOPHY + TESTIMONIALS ── */}
      <PhilosophySection />

      {/* ── PRICING + CTA ── */}
      <section className="bg-brand-card py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-[460px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeUp} className="text-center">
                <SectionLabel>Get Started</SectionLabel>
                <h2 className="mt-4 text-[clamp(2rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text">
                  Ready to stretch, grow
                  <br />and collaborate?
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative mt-10 overflow-hidden rounded-2xl border border-brand-border bg-white p-6 shadow-sm md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal-text)]">
                  Collaborator Academy
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-[3.2rem] font-black leading-none tracking-tight text-brand-text">£30</p>
                  <p className="mb-1.5 text-sm text-brand-muted">/ month</p>
                </div>
                <p className="mt-1 text-xs text-brand-dim">Cancel anytime · No contracts</p>
                <p className="mt-5 text-[13.5px] leading-relaxed text-brand-muted">
                  Membership to Collaboration Global, Connect, Collaborate, Grow.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Monthly Members & guest meetings",
                    "Monthly Evolve session",
                    "Weekly live Q & A sessions",
                    "Accountability opportunities",
                    "Video tutorials & resource library",
                    "Special offers & announcements",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
                        <Check className="h-2.5 w-2.5 text-[var(--brand-teal-text)]" strokeWidth={2.5} />
                      </span>
                      <span className="text-[13px] text-brand-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="https://collaborationglobal.mn.co/plans/213468"
                  variant="accent"
                  className="mt-8 w-full gap-2 text-sm normal-case tracking-normal"
                >
                  Try Free
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                </Button>
                <p className="mt-3 text-center text-[11.5px] text-brand-dim">
                  You&apos;ll have a chance to review your selection. Cancel anytime.
                </p>
                <p className="mt-4 text-center text-[12px] text-brand-dim">
                  Want the full experience?{" "}
                  <a
                    href="/programs/collaborator-pro"
                    className="font-medium text-[var(--brand-teal-text)] hover:underline"
                  >
                    Explore Collaborator Pro →
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

    </main>
  );
}
