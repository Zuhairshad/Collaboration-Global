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
 slideInRight,
 staggerContainer,
 staggerItem,
} from "@/lib/animations";

const OPPORTUNITIES = [
 "Present in the 'Connect To Me' section at guest meetings videoed and distributed to the community",
 "Host the monthly Members meeting and lead community discussions",
 "Create discussion at the monthly Evolve Meeting",
 "Guest on the 'Being Human – Hidden Depths' podcast",
 "Access to private groups on the Collaboration Global platform",
 "Share articles in 'The Quest' our quarterly publication",
 "Deliver Masterclass sessions directly to members",
 "Host your own online courses on the platform",
] as const;

const BENEFITS = [
 "Raise your profile at monthly meetings",
 "Stretch your learning with full Academy access",
 "Delve deeper at monthly Masterclasses",
 "Get set for success with Orientation sessions",
 "Power up your purpose with 'The Making of a Movement' book",
 "Additional learning through member discounts on events and courses",
] as const;

export default function CollaboratorProPage() {
 return (
 <main>
  <PageHeader
  label="Membership"
  title="Lead as a Collaborator Pro."
  description="Full community access to raise your profile, collaborate on meaningful projects, and get coaching support all for a single monthly subscription."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Intro ── gray-50 */}
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
    <SectionLabel>Collaborator Pro</SectionLabel>
    </motion.div>
    <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
    >
    In business, standing out
    <br />
    takes a community.
    </motion.h2>
    <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-gray-600"
    >
    In business we are all doing a million different things to stand out in our marketplace. As Pro members, we combine our skills and talents to help each other grow and ultimately collaborate on projects together, paying forward our learning to support others in business and beyond.
    </motion.p>
    <motion.p
    variants={fadeUp}
    className="mt-4 text-[15px] leading-[1.85] text-gray-600"
    >
    Being able to ask for support from a community who know your story, your needs, and who genuinely want to see you succeed that's beyond measure. You become part of a growing community operating within a new paradigm of Love, Connection and Abundance.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8">
    <Button
     href="#join"
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Join Collaborator Pro
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </motion.div>
   </motion.div>

   {/* RIGHT price card */}
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
     Monthly Membership
    </p>
    <p className="relative mt-3 text-[2.8rem] font-black leading-none tracking-tight text-gray-900">
     £50
    </p>
    <p className="mt-1 text-sm text-gray-500">per month · cancel anytime</p>
    <p className="mt-5 text-[13.5px] leading-relaxed text-gray-600">
     Coaching and support included across all promotional areas at no additional cost.
    </p>
    <ul className="mt-6 space-y-2.5">
     {["Full Academy access", "Coaching included", "Profile & visibility boost", "Orientation + book included", "Member event discounts"].map((f) => (
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
     Join Pro
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── Opportunities ── white */}
  <section className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>What You Can Do</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    The power of CG is
    <br />
    in the community.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[580px] text-[15px] leading-relaxed text-gray-600"
   >
    Together we are stronger. As a Pro member you get the platform, the audience, and the support to truly shine.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-2">
   {OPPORTUNITIES.map((item, idx) => (
    <RevealOnScroll key={idx} delay={0.04 + idx * 0.04}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/50 to-transparent" />
     <div className="flex items-start gap-3">
     <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
      <Check className="h-3 w-3 text-[var(--brand-teal)]" strokeWidth={2.5} />
     </span>
     <p className="text-[13.5px] leading-[1.75] text-gray-700">{item}</p>
     </div>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── Community Philosophy ── teal */}
  <section className="bg-[var(--brand-purple)] py-20 md:py-28">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[860px]"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel className="text-white/60">Community</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
   >
    Be the BEST YOU <br />reach your full potential.
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-[1.85] text-white/80"
   >
    In other words, we want to help each other reach our full potential so that together we can make a difference in each other's lives and pay it forward to make a difference to the world around us. Living in abundance means a win for you, for our community, and ultimately for our planet.
   </motion.p>

   {/* Margaret Mead quote */}
   <motion.div
    variants={fadeUp}
    className="mt-8 rounded-2xl bg-white/10 p-7"
   >
    <p className="text-[28px] font-black leading-none text-white/30">&ldquo;</p>
    <p className="mt-2 text-[15px] font-medium leading-[1.75] text-white/85">
    Never doubt that a group of committed citizens can change the world. Indeed, it is the only thing that ever has.
    </p>
    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
     Margaret Mead
    </p>
   </motion.div>

   {/* Member benefits */}
   <motion.div variants={staggerContainer} className="mt-8 grid gap-3 sm:grid-cols-2">
    {BENEFITS.map((b) => (
    <motion.div
     key={b}
     variants={staggerItem}
     className="flex items-start gap-2.5"
    >
     <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20">
     <Check className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
     </span>
     <p className="text-[13.5px] leading-relaxed text-white/80">{b}</p>
    </motion.div>
    ))}
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
    <SectionLabel>Join Pro</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mx-auto mt-4 max-w-[600px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
   >
    Ready to build something
    <br />
    of significance?
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mx-auto mt-5 max-w-[480px] text-[15px] leading-relaxed text-white/55"
   >
    Join a community operating within a new paradigm of Love, Connection and Abundance for just £50 per month.
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
    Try a free session first
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>
 </main>
 );
}
