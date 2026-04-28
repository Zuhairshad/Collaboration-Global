"use client";

import { motion } from "framer-motion";
import {
 ArrowRight,
 Calendar,
 Globe2,
 Users,
 Heart,
 Zap,
 ExternalLink,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
 fadeUp,
 slideInRight,
 staggerContainer,
 staggerItem,
} from "@/lib/animations";

const EVENTBRITE_URL =
 "https://www.eventbrite.co.uk/o/collaboration-global-28760629935";

const HOW_IT_WORKS = [
 {
 Icon: Calendar,
 title: "Monthly, Every Month",
 body: "Sessions run once a month via Zoom. Same community, new faces, fresh conversations consistent enough to build on.",
 },
 {
 Icon: Globe2,
 title: "Global & Online",
 body: "Members join from 28+ countries. No travel, no dress code just show up as you are from wherever you are.",
 },
 {
 Icon: Users,
 title: "Open to Anyone",
 body: "Attend as a guest as many times as you like. You don't need to be a member just be curious and open to connection.",
 },
 {
 Icon: Heart,
 title: "Authentically Human",
 body: "No pitching. No pretence. A space to meet like-hearted people, share what you're building, and hear what others are creating.",
 },
] as const;

const WHAT_YOULL_FIND = [
 "Real people doing real work in business, community, and creativity",
 "Conversations that go deeper than the usual networking surface",
 "A community who genuinely want to see each other succeed",
 "The chance to discover what collaboration could open up for you",
 "A warm welcome even if it's your very first time",
] as const;

export default function EventsPage() {
 return (
 <main>
  <PageHeader
  label="Events"
  title="Monthly Community Sessions."
  description="Once a month we create a space for people to come together and connect with other like-hearted and like-minded people. Free. Open to anyone. Just show up."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Intro + Booking Card ── gray-50 */}
  <section className="bg-gray-50 py-24 md:py-32">
  <Container>
   <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

   {/* LEFT pitch */}
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <motion.div variants={fadeUp}>
    <SectionLabel>Community Sessions</SectionLabel>
    </motion.div>
    <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
    >
    A meeting of
    <br />
    minds and hearts.
    </motion.h2>
    <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-gray-600"
    >
    Whether you're an entrepreneur, a creative, a coach, or simply someone who believes in the power of working together Community Sessions are your invitation to step in.
    </motion.p>
    <motion.p
    variants={fadeUp}
    className="mt-4 text-[15px] leading-[1.85] text-gray-600"
    >
    We nurture authentic relationships and provide a space for genuine connection, building trust and fulfilling aspirations. Come as a guest. There's no commitment, no pressure just real people and real conversation.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
    <Button
     href={EVENTBRITE_URL}
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Book Your Free Place
     <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
    </Button>
    <Button
     href="/contact"
     variant="outline"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Ask a Question
    </Button>
    </motion.div>
   </motion.div>

   {/* RIGHT booking card */}
   <motion.div
    variants={slideInRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />

    <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Monthly Community Meeting
    </p>
    <p className="relative mt-3 text-[2.6rem] font-black leading-none tracking-tight text-gray-900">
     Free
    </p>
    <p className="mt-1 text-sm text-gray-500">
     Hosted on Zoom · Booked via Eventbrite
    </p>

    <div className="mt-6 space-y-3">
     {[
     "Open to anyone members and guests welcome",
     "Online via Zoom, once a month",
     "Meet real collaborators from around the world",
     "No sales, no pitch just connection",
     ].map((f) => (
     <div key={f} className="flex items-start gap-2.5">
      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
      <Zap className="h-2.5 w-2.5 text-[var(--brand-teal)]" strokeWidth={2.5} />
      </span>
      <span className="text-[13.5px] leading-relaxed text-gray-700">{f}</span>
     </div>
     ))}
    </div>

    <a
     href={EVENTBRITE_URL}
     target="_blank"
     rel="noopener noreferrer"
     className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-teal)] px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-[var(--brand-teal-hover)]"
    >
     View on Eventbrite
     <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
    </a>

    <p className="mt-4 text-center text-[11px] text-gray-400">
     All sessions listed at the link above. Booking takes under a minute.
    </p>
    </div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── How It Works ── white */}
  <section className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>How It Works</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Simple, open,
    <br />
    and human.
   </motion.h2>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-2">
   {HOW_IT_WORKS.map((item, idx) => (
    <RevealOnScroll key={item.title} delay={0.05 + idx * 0.05}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-teal)]/10">
     <item.Icon
      className="h-5 w-5 text-[var(--brand-teal)]"
      strokeWidth={1.8}
     />
     </div>
     <p className="mt-4 text-[15px] font-bold tracking-tight text-gray-900">
     {item.title}
     </p>
     <p className="mt-2 text-[13px] leading-[1.75] text-gray-500">
     {item.body}
     </p>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── What You'll Find ── teal */}
  <section className="bg-[var(--brand-teal)] py-20 md:py-28">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[820px]"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel className="text-black/60">What to Expect</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black"
   >
    You'll leave with more
    <br />
    than you arrived with.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-slate-900"
   >
    Every session is different because the people in the room are different. But the quality of conversation stays consistent thoughtful, warm, and genuinely useful.
   </motion.p>

   <motion.ul variants={staggerContainer} className="mt-8 space-y-3">
    {WHAT_YOULL_FIND.map((item) => (
    <motion.li
     key={item}
     variants={staggerItem}
     className="flex items-start gap-3"
    >
     <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/15">
     <ArrowRight className="h-3 w-3 text-black/60" strokeWidth={2.5} />
     </span>
     <span className="text-[15px] leading-relaxed text-slate-900">{item}</span>
    </motion.li>
    ))}
   </motion.ul>

   <motion.div variants={fadeUp} className="mt-10">
    <Button
    href={EVENTBRITE_URL}
    variant="primary"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    Book Your Free Place
    <ExternalLink className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>

  {/* ── What Comes Next ── gray-50 */}
  <section className="bg-gray-50 py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>What Comes Next</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Ready to go deeper?
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-gray-600"
   >
    Community Sessions are just the beginning. When you're ready for structured learning, accountability, or full collaboration membership is waiting.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-5 md:grid-cols-2">
   <RevealOnScroll delay={0.06}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/50 to-transparent" />
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Learn &amp; Build
    </p>
    <p className="mt-3 text-xl font-bold tracking-tight text-gray-900">
     Collaborator Academy
    </p>
    <p className="mt-1 text-2xl font-black tracking-tight text-gray-700">
     £30 / month
    </p>
    <p className="mt-4 text-[13.5px] leading-[1.75] text-gray-600">
     Short learning bursts, recorded sessions, accountability groups, and peer Q&As built for steady progress without judgement.
    </p>
    <Button
     href="/programs/academy"
     variant="outline"
     className="mt-6 gap-2 text-sm normal-case tracking-normal"
    >
     Explore Academy
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </RevealOnScroll>

   <RevealOnScroll delay={0.1}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-[var(--brand-teal)]/30 bg-white p-8 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-teal)] to-transparent" />
    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[var(--brand-teal)]/8 blur-2xl" />
    <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Full Membership
    </p>
    <p className="relative mt-3 text-xl font-bold tracking-tight text-gray-900">
     Collaborator Pro
    </p>
    <p className="relative mt-1 text-2xl font-black tracking-tight text-[var(--brand-teal)]">
     £50 / month
    </p>
    <p className="relative mt-4 text-[13.5px] leading-[1.75] text-gray-600">
     Raise your profile, collaborate on real projects, get coaching, and become part of a community operating within a paradigm of Love, Connection and Abundance.
    </p>
    <Button
     href="/programs/collaborator-pro"
     variant="accent"
     className="relative mt-6 gap-2 text-sm normal-case tracking-normal"
    >
     Explore Pro
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </RevealOnScroll>
   </div>
  </Container>
  </section>

  {/* ── Final CTA ── dark */}
  <section
  className="relative overflow-hidden py-24 md:py-32"
  style={{
   background:
   "linear-gradient(135deg, #6B4FBE 0%, #2d1654 40%, #1a3535 70%, #2DC7B3 100%)",
  }}
  >
  <div
   className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
   style={{
   background:
    "radial-gradient(ellipse, rgba(107,79,190,0.3) 0%, transparent 65%)",
   }}
   aria-hidden
  />
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="relative text-center"
   >
   <motion.div variants={fadeUp} className="flex justify-center">
    <SectionLabel>Book Now</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mx-auto mt-4 max-w-[600px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
   >
    Book your FREE place
    <br />
    at the next session.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mx-auto mt-5 max-w-[460px] text-[15px] leading-relaxed text-white/55"
   >
    No commitment. No cost. Just real people, real connection, and real collaboration once a month, every month.
   </motion.p>
   <motion.div
    variants={fadeUp}
    className="mt-9 flex flex-wrap items-center justify-center gap-3"
   >
    <Button
    href={EVENTBRITE_URL}
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal shadow-[0_0_24px_rgba(45,199,179,0.25)]"
    >
    View on Eventbrite
    <ExternalLink className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    <Button
    href="/programs"
    variant="outline"
    className="gap-2 border-white/20 text-sm normal-case tracking-normal text-white hover:border-white/40 hover:bg-white/[0.06]"
    >
    Explore Programs
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>
 </main>
 );
}
