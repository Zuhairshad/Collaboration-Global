"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Globe2, Heart } from "lucide-react";
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

const WHAT_TO_EXPECT = [
 {
 Icon: Users,
 title: "Meet the Community",
 body: "Come as you are. You'll meet like-hearted and like-minded people from around the world business owners, creatives, coaches, and change-makers.",
 },
 {
 Icon: Globe2,
 title: "Connect at a Deeper Level",
 body: "We nurture authentic relationships and provide a space for genuine connection, building trust and fulfilling aspirations online or off.",
 },
 {
 Icon: Heart,
 title: "No Pressure, Just People",
 body: "Every guest is welcome, no questions asked. Explore what collaboration can unlock for you, with no commitment required.",
 },
 {
 Icon: Calendar,
 title: "Once a Month, Every Month",
 body: "Sessions run monthly via Zoom. Book your free place through Eventbrite and come back as often as you like.",
 },
] as const;

export default function CommunitySessionsPage() {
 return (
 <main>
  <PageHeader
  label="Programs"
  title="Community Sessions."
  description="Once a month we create a space for people to come together in the Zoom room and connect with other like-hearted and like-minded people. Free. Open to anyone."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Intro ── gray-50 */}
  <section className="bg-gray-50 py-24 md:py-32">
  <Container>
   <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

   {/* LEFT pitch */}
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <motion.div variants={fadeUp}>
    <SectionLabel>Be Our Guest</SectionLabel>
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
    Whether connecting online or in-person, we all have a basic desire to be part of something where we can connect at a deeper level. Community Sessions are that space a monthly gathering built for authentic connection, open to everyone.
    </motion.p>
    <motion.p
    variants={fadeUp}
    className="mt-4 text-[15px] leading-[1.85] text-gray-600"
    >
    Come as a guest, meet the community, and explore what collaboration can unlock for you. No commitment needed just bring yourself.
    </motion.p>
    <motion.div
    variants={fadeUp}
    className="mt-8 flex flex-wrap gap-3"
    >
    <Button
     href="/events"
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Book Your Free Place
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
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

   {/* RIGHT free badge card */}
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
     Community Sessions
    </p>
    <p className="relative mt-3 text-[3.2rem] font-black leading-none tracking-tight text-gray-900">
     Free
    </p>
    <p className="mt-1 text-sm text-gray-500">open to anyone · monthly · via Zoom</p>
    <p className="mt-5 text-[13.5px] leading-relaxed text-gray-600">
     Booked through Eventbrite. Attend as a guest as many times as you like no strings attached.
    </p>
    <div className="mt-6 space-y-3">
     {[
     "Monthly Zoom meeting",
     "Open to everyone",
     "Meet current members",
     "Explore membership at your own pace",
     ].map((f) => (
     <div key={f} className="flex items-center gap-2.5">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
      </span>
      <span className="text-[13.5px] text-gray-700">{f}</span>
     </div>
     ))}
    </div>
    <Button
     href="/events"
     variant="accent"
     className="mt-8 w-full gap-2 text-sm normal-case tracking-normal"
    >
     Book Your Place
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── What to Expect ── white */}
  <section className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>What to Expect</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Show up. Connect.
    <br />
    See what opens up.
   </motion.h2>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-2">
   {WHAT_TO_EXPECT.map((item, idx) => (
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

  {/* ── What's Next ── teal */}
  <section className="bg-[var(--brand-teal)] py-20 md:py-28">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[760px]"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel className="text-black/60">What Comes Next</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black"
   >
    Loved the session?
    <br />
    Go deeper with membership.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-slate-900"
   >
    Community Sessions are just the beginning. If you want structured learning, accountability, and real collaboration opportunities explore the Academy or go all-in with Collaborator Pro.
   </motion.p>

   <motion.div
    variants={staggerContainer}
    className="mt-8 grid gap-4 sm:grid-cols-2"
   >
    <motion.div
    variants={staggerItem}
    className="rounded-2xl bg-black/10 p-6"
    >
    <p className="text-sm font-bold text-black">Collaborator Academy</p>
    <p className="mt-2 text-[13px] leading-relaxed text-black/70">
     Learning, Q&As, recorded sessions, and accountability for £30/month.
    </p>
    <Button
     href="/programs/academy"
     variant="primary"
     className="mt-5 gap-2 text-sm normal-case tracking-normal"
    >
     Explore Academy
     <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
    </Button>
    </motion.div>

    <motion.div
    variants={staggerItem}
    className="rounded-2xl bg-black/10 p-6"
    >
    <p className="text-sm font-bold text-black">Collaborator Pro</p>
    <p className="mt-2 text-[13px] leading-relaxed text-black/70">
     Full membership with profile, projects, coaching, and community for £50/month.
    </p>
    <Button
     href="/programs/collaborator-pro"
     variant="primary"
     className="mt-5 gap-2 text-sm normal-case tracking-normal"
    >
     Explore Pro
     <ArrowRight className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
    </Button>
    </motion.div>
   </motion.div>
   </motion.div>
  </Container>
  </section>

  {/* ── CTA ── dark */}
  <section
  className="relative overflow-hidden py-24 md:py-32"
  style={{
   background:
   "linear-gradient(135deg, #6B4FBE 0%, #2d1654 40%, #1a3535 70%, #2DC7B3 100%)",
  }}
  >
  <div
   className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
   style={{ background: "radial-gradient(ellipse, rgba(107,79,190,0.3) 0%, transparent 65%)" }}
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
    No commitment. No cost. Just real people, real connection, and real collaboration.
   </motion.p>
   <motion.div
    variants={fadeUp}
    className="mt-9 flex flex-wrap items-center justify-center gap-3"
   >
    <Button
    href="/events"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal shadow-[0_0_24px_rgba(45,199,179,0.25)]"
    >
    View Upcoming Events
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    <Button
    href="/contact"
    variant="outline"
    className="gap-2 border-white/20 text-sm normal-case tracking-normal text-white hover:border-white/40 hover:bg-white/[0.06]"
    >
    Ask a Question
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>
 </main>
 );
}
