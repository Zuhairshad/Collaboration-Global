"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowRight, Check, Heart, Users, Zap, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ImageBlock } from "@/components/media/ImageBlock";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#655bb3 0%,#31cfc3 100%)",
  "linear-gradient(135deg,#31cfc3 0%,#7be0d8 100%)",
  "linear-gradient(135deg,#4a4396 0%,#655bb3 100%)",
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const gradient = AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-2 ring-white/40"
      style={{ background: gradient }}
    >
      <span className="text-[15px] font-black text-white">{initials}</span>
    </div>
  );
}

function ProTestimonialCard({
  t,
  idx,
  total,
  progress,
}: {
  t: { quote: string; name: string; role: string };
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
    <motion.div style={{ x, scale, zIndex: idx + 1 }} className="absolute inset-0">
      <div className="flex h-full flex-col rounded-2xl bg-white px-8 py-9 shadow-2xl md:px-12">
        <span className="text-[52px] font-black leading-none text-[var(--brand-teal)]/20">&ldquo;</span>
        <p className="mt-2 flex-1 text-[17px] leading-[1.8] text-brand-text">{t.quote}</p>
        <div className="mt-6 flex items-center gap-4 border-t border-brand-border pt-5">
          <Avatar name={t.name} />
          <div className="min-w-0">
            <p className="text-[16px] font-bold text-brand-text">{t.name}</p>
            <p className="text-[13px] text-brand-muted">{t.role}</p>
          </div>
          <span className="ml-auto shrink-0 text-[11px] font-bold tracking-[0.2em] text-[var(--brand-teal)]">
            {String(idx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProTestimonialsSection({ testimonials }: { testimonials: typeof FEATURED_TESTIMONIALS }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div
        className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4"
        style={{ background: "linear-gradient(135deg,#4a4396 0%,#31cfc3 60%,#7be0d8 100%)" }}
      >
        <div className="mb-10 text-center">
          <SectionLabel className="text-white/60">Community</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-[560px] text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
            What Pro members say.
          </h2>
        </div>
        <Container>
          <div className="relative mx-auto max-w-[720px]" style={{ height: "420px" }}>
            {testimonials.map((t, idx) => (
              <ProTestimonialCard
                key={t.name}
                t={t}
                idx={idx}
                total={testimonials.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    icon: Heart,
    title: "Connect",
    body: "Connect more deeply to yourself and others. Love is our superpower, but how can we love others if we don't have capacity for ourselves?",
  },
  {
    icon: Users,
    title: "Collaborate",
    body: "Be bigger than you are alone. Join others to create significant things and spark positive ripple effects across your world.",
  },
  {
    icon: Zap,
    title: "Grow",
    body: "Grow in your business, in the number of people you can reach, and in your ability to do what truly matters.",
  },
  {
    icon: Compass,
    title: "Discover",
    body: "Discover what the world looks like when we operate from abundance, partnering with B1G1 to give as we grow.",
  },
] as const;

const INCLUDED = [
  {
    title: "Featured in Connect To Me",
    body: "Presented at guest meetings, videoed and distributed across the full Collaboration Global community.",
  },
  {
    title: "Host the Members Meeting",
    body: "Lead the monthly members meeting and guide the community through discussions that truly matter.",
  },
  {
    title: "Lead Evolve Meeting Discussions",
    body: "Create and facilitate meaningful conversations at the monthly Evolve session for the whole community.",
  },
  {
    title: "Podcast Guest Appearance",
    body: "Be a featured guest on the Being Human, Hidden Depths podcast to share your story and expertise.",
  },
  {
    title: "Private Community Groups",
    body: "Access exclusive private groups on the Collaboration Global platform, reserved for Pro members only.",
  },
  {
    title: "Write for The Quest",
    body: "Contribute articles and insights to The Quest, the community's respected quarterly publication.",
  },
  {
    title: "Deliver Masterclasses",
    body: "Host and deliver Masterclass sessions directly to the community and grow your reputation as a leader.",
  },
  {
    title: "Host Your Own Courses",
    body: "Create and publish your own online courses directly on the Collaboration Global platform.",
  },
  {
    title: "Full Academy Access",
    body: "Everything inside the Collaborator Academy, meetings, resources, Q&As, is fully included.",
  },
  {
    title: "Orientation Sessions",
    body: "Personalised onboarding to set you up for success and make an impact from day one.",
  },
  {
    title: "The Making of a Movement Book",
    body: "Receive a copy of Gill Tiney's foundational book as part of your Pro welcome pack.",
  },
  {
    title: "Member Event Discounts",
    body: "Enjoy exclusive discounts on all member events and courses throughout the year.",
  },
] as const;

const FEATURED_TESTIMONIALS = [TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[6]] as const;

export default function CollaboratorProPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <Image
          src="/media/story-main-event.jpg"
          alt="Collaboration Global community gathering"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,8,6,0.93) 0%, rgba(13,8,6,0.60) 45%, rgba(13,8,6,0.18) 100%)",
          }}
        />
        <Container className="relative z-10 pb-16 pt-36">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={staggerItem}
              className="inline-block rounded-full bg-[var(--brand-teal)]/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-teal)]"
            >
              Full Membership
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="mt-5 max-w-[680px] text-[clamp(2.6rem,5.5vw,5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white"
            >
              Register so we can do
              <br />something wonderful.
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-[500px] text-[16px] leading-relaxed text-white/65"
            >
              Collaborator Pro is full community membership, the platform, the people, and the support to raise your profile and build something of real significance.
            </motion.p>
            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                href="https://collaborationglobal.mn.co/landing/"
                variant="accent"
                className="gap-2 text-sm normal-case tracking-normal"
              >
                Join Collaborator Pro, £50/month
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
              </Button>
              <Button
                href="/programs/community-sessions"
                variant="outline"
                className="gap-2 border-white/20 text-sm normal-case tracking-normal text-white hover:border-white/40 hover:bg-white/[0.06]"
              >
                Try a free session first
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── PILLARS: Connect · Collaborate · Grow · Discover ── */}
      <section className="bg-brand-card py-20 md:py-28">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Why Pro</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[clamp(2rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text"
            >
              Four ways Pro changes
              <br />everything.
            </motion.h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, idx) => (
              <RevealOnScroll key={p.title} delay={0.06 * idx}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-brand-border bg-white p-6 shadow-sm">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/50 to-transparent" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-teal)]/10">
                    <p.icon className="h-5 w-5 text-[var(--brand-teal)]" strokeWidth={1.8} />
                  </div>
                  <p className="text-[15px] font-bold tracking-tight text-brand-text">{p.title}</p>
                  <p className="mt-2 text-[13px] leading-[1.75] text-brand-muted">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── THE TIME FOR CHANGE IS NOW ── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Image, desktop */}
            <RevealOnScroll className="hidden md:block">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/media/story-collaboration.jpg"
                  alt="Collaboration in action"
                  width={640}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </RevealOnScroll>

            {/* Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>The Movement</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text"
              >
                The time for change
                <br />is NOW.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-[15px] leading-[1.85] text-brand-muted"
              >
                In business we are all doing a million different things to stand out in our marketplace. As Pro members, we combine our skills and talents to help each other grow and ultimately collaborate on projects together, paying forward our learning to support others in business and beyond.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-[15px] leading-[1.85] text-brand-muted"
              >
                Being able to ask for support from a community who know your story, your needs, and who genuinely want to see you succeed, that's beyond measure. You become part of a growing community operating within a new paradigm of Love, Connection, and Abundance.
              </motion.p>

              {/* Mobile image */}
              <motion.div variants={fadeUp}>
                <ImageBlock id="story-collaboration" variant="landscape" showCaption={false} />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6">
                <Button
                  href="https://collaborationglobal.mn.co/landing/"
                  variant="accent"
                  className="gap-2 text-sm normal-case tracking-normal"
                >
                  Join the movement
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                </Button>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-card py-20 md:py-28">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Everything Included</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text"
            >
              The platform, the people,
              <br />the support.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-brand-muted"
            >
              As a Pro member you get the platform, the audience, and the support to truly shine.
            </motion.p>
          </motion.div>

          <div className="mx-auto max-w-[680px]">
            {INCLUDED.map((item, idx) => (
              <div
                key={idx}
                className="sticky"
                style={{
                  top: "96px",
                  zIndex: idx + 1,
                  marginBottom: idx < INCLUDED.length - 1 ? "180px" : "60px",
                }}
              >
                <div className="rounded-2xl border border-brand-border bg-white px-8 py-10 shadow-[0_4px_28px_rgba(0,0,0,0.08)]">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-purple)]/10">
                      <span className="text-[13px] font-black tracking-tight text-[var(--brand-purple)]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[18px] font-bold leading-snug tracking-tight text-brand-text">{item.title}</p>
                      <p className="mt-2 text-[15px] leading-[1.8] text-brand-muted">{item.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMMUNITY TESTIMONIALS ── */}
      <ProTestimonialsSection testimonials={FEATURED_TESTIMONIALS} />

      {/* ── PRICING + CTA ── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-[460px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={fadeUp} className="text-center">
                <SectionLabel>Join Today</SectionLabel>
                <h2 className="mt-4 text-[clamp(2rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-brand-text">
                  Ready to build something
                  <br />of significance?
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative mt-10 overflow-hidden rounded-2xl border border-brand-border bg-brand-card p-8 shadow-sm"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
                  Monthly Membership
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-[3.2rem] font-black leading-none tracking-tight text-brand-text">£50</p>
                  <p className="mb-1.5 text-sm text-brand-muted">/ month</p>
                </div>
                <p className="mt-1 text-xs text-brand-dim">Cancel anytime · No contracts</p>
                <p className="mt-5 text-[13.5px] leading-relaxed text-brand-muted">
                  Full community access with coaching and support included across all promotional areas at no extra cost.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["Full Academy access included", "Coaching support", "Profile & visibility boost", "Orientation + book included", "Member event discounts", "Private platform groups"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
                        <Check className="h-2.5 w-2.5 text-[var(--brand-teal)]" strokeWidth={2.5} />
                      </span>
                      <span className="text-[13px] text-brand-muted">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="https://collaborationglobal.mn.co/landing/"
                  variant="accent"
                  className="mt-8 w-full gap-2 text-sm normal-case tracking-normal"
                >
                  Join Collaborator Pro
                  <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                </Button>
                <p className="mt-4 text-center text-[12px] text-brand-dim">
                  Not sure yet?{" "}
                  <a
                    href="/programs/community-sessions"
                    className="font-medium text-[var(--brand-teal)] hover:underline"
                  >
                    Try a free session first →
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
