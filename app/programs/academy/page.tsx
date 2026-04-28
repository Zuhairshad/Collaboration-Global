"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
 fadeUp,
 slideInLeft,
 staggerContainer,
 staggerItem,
} from "@/lib/animations";

const VALUE_PROPS = [
 {
 number: "01",
 title: "Short, Practical Videos",
 body: "Instructional content addressing common challenges no fluff, straight to what you need to know and apply.",
 },
 {
 number: "02",
 title: "Built-In Accountability",
 body: "Features and structures that boost productivity and help you follow through because knowing isn't the same as doing.",
 },
 {
 number: "03",
 title: "Recorded Live Sessions",
 body: "Can't make it live? Every session is recorded so you learn on your schedule, not ours.",
 },
 {
 number: "04",
 title: "Supportive Community",
 body: "\"It feels like I'm home.\" A space with no judgement, no ridicule no question is stupid. We're all figuring it out together.",
 },
 {
 number: "05",
 title: "Collaboration Opportunities",
 body: "Connect with entrepreneurial peers who are ready to help you succeed and as passionate as you about making a difference.",
 },
 {
 number: "06",
 title: "Mind-Expanding Discussions",
 body: "Monthly Q&As and group conversations that challenge your thinking and deepen your understanding of collaboration.",
 },
] as const;

export default function AcademyPage() {
 return (
 <main>
  <PageHeader
  label="Membership"
  title="The Collaborator Academy."
  description="Short learning bursts, peer discussion, and accountability built for steady progress and deeper insight into the art of collaboration."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Opening Hook ── gray-50 */}
  <section className="bg-gray-50 py-24 md:py-32">
  <Container>
   <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

   {/* LEFT hook text */}
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <motion.div variants={fadeUp}>
    <SectionLabel>Collaborator Academy</SectionLabel>
    </motion.div>
    <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
    >
    No one has all
    <br />
    the answers.
    </motion.h2>
    <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-gray-600"
    >
    Ever found yourself feeling like you should know something, but don't feel like admitting it in the groups where you're building your reputation as an expert?
    </motion.p>
    <motion.p
    variants={fadeUp}
    className="mt-4 text-[15px] leading-[1.85] text-gray-600"
    >
    We are a community who share their knowledge. No one has all the answers but together we can work out 99.9% of what we need. With 24/7 access via mobile and desktop, Gill Tiney's lifetime of experience in collaborative success is always within reach.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8">
    <Button
     href="#join"
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Join the Academy
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </motion.div>
   </motion.div>

   {/* RIGHT price card */}
   <motion.div
    variants={slideInLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />
    <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Monthly Access
    </p>
    <p className="relative mt-3 text-[2.8rem] font-black leading-none tracking-tight text-gray-900">
     £30
    </p>
    <p className="mt-1 text-sm text-gray-500">per month · cancel anytime</p>
    <p className="mt-5 text-[13.5px] leading-relaxed text-gray-600">
     Start networking immediately with collaborating entrepreneurs who are ready to help you succeed.
    </p>
    <ul className="mt-6 space-y-2.5">
     {[
     "Recorded sessions library",
     "Q&A and monthly discussions",
     "24/7 platform access (mobile & desktop)",
     "Accountability groups",
     "Transformative conversations",
     ].map((f) => (
     <li key={f} className="flex items-center gap-2.5">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
      <Check className="h-2.5 w-2.5 text-[var(--brand-teal)]" strokeWidth={2.5} />
      </span>
      <span className="text-[13.5px] text-gray-700">{f}</span>
     </li>
     ))}
    </ul>
    <Button
     href="#join"
     variant="accent"
     className="mt-8 w-full gap-2 text-sm normal-case tracking-normal"
    >
     Join the Academy
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── Value Props ── white */}
  <section className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>What You Get</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Everything you need
    <br />
    to collaborate better.
   </motion.h2>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
   {VALUE_PROPS.map((item, idx) => (
    <RevealOnScroll key={item.number} delay={0.05 + idx * 0.05}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
     <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />
     <p className="pointer-events-none absolute -right-3 -top-4 select-none text-[88px] font-black leading-none text-gray-100">
     {item.number}
     </p>
     <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     {item.number}
     </p>
     <p className="relative mt-3 text-[15px] font-bold tracking-tight text-gray-900">
     {item.title}
     </p>
     <p className="relative mt-2 text-[13px] leading-[1.75] text-gray-500">
     {item.body}
     </p>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── Community quote ── teal */}
  <section className="bg-[var(--brand-teal)] py-20 md:py-28">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[760px] text-center"
   >
   <motion.div variants={fadeUp} className="flex justify-center">
    <SectionLabel className="text-black/60">Community</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black"
   >
    Together we can work out
    <br />
    99.9% of what we need.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-slate-900"
   >
    The Academy is a place where collaboration entrepreneurs share their knowledge with no pretence simply authentic people helping each other be bigger and better than they can be alone. No judgement. No ridicule. No question is stupid.
   </motion.p>
   <motion.div variants={fadeUp} className="mt-8">
    <Button
    href="#join"
    variant="primary"
    className="gap-2 text-sm normal-case tracking-normal"
    >
    Join the Academy £30/month
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>

  {/* ── Join CTA ── dark */}
  <section
  id="join"
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
    <SectionLabel>Get Started</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mx-auto mt-4 max-w-[600px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
   >
    Want steady momentum
    <br />
    that actually sticks?
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mx-auto mt-5 max-w-[480px] text-[15px] leading-relaxed text-white/55"
   >
    Join the Academy for learning and accountability that fits around real life for just £30 a month.
   </motion.p>
   <motion.div
    variants={fadeUp}
    className="mt-9 flex flex-wrap items-center justify-center gap-3"
   >
    <Button
    href="/contact"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal shadow-[0_0_24px_rgba(45,199,179,0.25)]"
    >
    Contact Us to Join
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
   </motion.div>
  </Container>
  </section>
 </main>
 );
}
