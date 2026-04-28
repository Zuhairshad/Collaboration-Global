"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const PROGRAMS = [
 {
 tag: "Start here",
 title: "Community Sessions",
 price: "Free",
 description:
  "A monthly meeting of minds and hearts. Join as a guest, meet the community, and explore what collaboration can unlock with no commitment required.",
 features: [
  "Monthly Zoom meeting",
  "Open to anyone",
  "Meet current members",
  "Explore at your own pace",
 ],
 cta: { label: "View Events", href: "/events" },
 ctaSecondary: { label: "Learn More", href: "/programs/community-sessions" },
 accent: false,
 },
 {
 tag: "Learn & build",
 title: "Collaborator Academy",
 price: "£30 / month",
 description:
  "Short learning bursts, peer discussion, and accountability built for steady progress. For entrepreneurs who want to grow without pretence or judgement.",
 features: [
  "Recorded sessions library",
  "Q&A and monthly discussions",
  "24/7 mobile & desktop access",
  "Accountability groups",
  "Transformative conversations",
 ],
 cta: { label: "Join Academy", href: "/programs/academy" },
 ctaSecondary: { label: "Learn More", href: "/programs/academy" },
 accent: false,
 },
 {
 tag: "Full membership",
 title: "Collaborator Pro",
 price: "£50 / month",
 description:
  "Full community access to raise your profile, collaborate on real projects, and get coaching support all within a community built on Love, Connection and Abundance.",
 features: [
  "Profile & visibility boost",
  "Projects & collaborations",
  "Coaching support included",
  "Full Academy access",
  "Orientation + book included",
 ],
 cta: { label: "Join Pro", href: "/programs/collaborator-pro" },
 ctaSecondary: { label: "Learn More", href: "/programs/collaborator-pro" },
 accent: true,
 },
] as const;

export default function ProgramsPage() {
 return (
 <main>
  <PageHeader
  label="Programs"
  title="A simple path: free → learning → full membership."
  description="Start with a Community Session, step into the Academy for structured growth, or join Pro for full support and real collaboration opportunities."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Program cards ── white */}
  <section className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mb-12"
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Choose Your Path</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Every level of
    <br />
    collaboration is welcome.
   </motion.h2>
   </motion.div>

   <div className="grid gap-5 lg:grid-cols-3">
   {PROGRAMS.map((p, idx) => (
    <RevealOnScroll key={p.title} delay={0.05 + idx * 0.06}>
    <div
     className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-md ${
     p.accent
      ? "border-[var(--brand-teal)]/40 bg-white"
      : "border-gray-100 bg-white"
     }`}
    >
     {/* Top accent line stronger on Pro */}
     <div
     className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent to-transparent ${
      p.accent
      ? "via-[var(--brand-teal)]"
      : "via-[var(--brand-teal)]/50"
     }`}
     />
     {/* Glow bloom */}
     <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />

     <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     {p.tag}
     </p>

     <p className="relative mt-3 text-xl font-bold tracking-tight text-gray-900">
     {p.title}
     </p>

     <p
     className={`relative mt-1 text-[1.6rem] font-black leading-none tracking-tight ${
      p.accent ? "text-[var(--brand-teal)]" : "text-gray-700"
     }`}
     >
     {p.price}
     </p>

     <p className="relative mt-4 text-[13.5px] leading-[1.75] text-gray-600">
     {p.description}
     </p>

     <ul className="relative mt-6 flex-1 space-y-2.5">
     {p.features.map((f) => (
      <li key={f} className="flex items-center gap-2.5">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)]/15">
       <Check
       className="h-2.5 w-2.5 text-[var(--brand-teal)]"
       strokeWidth={2.5}
       />
      </span>
      <span className="text-[13px] text-gray-700">{f}</span>
      </li>
     ))}
     </ul>

     <div className="relative mt-8 flex flex-col gap-2">
     <Button
      href={p.cta.href}
      variant={p.accent ? "accent" : "outline"}
      className="gap-2 text-sm normal-case tracking-normal"
     >
      {p.cta.label}
      <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
     </Button>
     </div>
    </div>
    </RevealOnScroll>
   ))}
   </div>

   {/* Not sure strip */}
   <RevealOnScroll delay={0.1}>
   <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-sm">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div>
     <p className="text-[15px] font-semibold text-gray-900">
     Not sure where to start?
     </p>
     <p className="mt-1.5 text-[13.5px] text-gray-500">
     Attend a free Community Session and meet the community first no commitment needed.
     </p>
    </div>
    <div className="flex shrink-0 gap-3">
     <Button
     href="/events"
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
     >
     View Events
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
     </Button>
     <Button
     href="/contact"
     variant="outline"
     className="gap-2 text-sm normal-case tracking-normal"
     >
     Ask a Question
     </Button>
    </div>
    </div>
   </div>
   </RevealOnScroll>
  </Container>
  </section>

  {/* ── Philosophy strip ── teal */}
  <section className="bg-[var(--brand-teal)] py-20 md:py-24">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[860px] text-center"
   >
   <motion.div variants={fadeUp} className="flex justify-center">
    <SectionLabel className="text-black/60">Our Belief</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-black"
   >
    We want to help each other reach our full potential so together we can make a difference.
   </motion.h2>
   <motion.div variants={staggerContainer} className="mt-10 grid gap-4 sm:grid-cols-3">
    {[
    { label: "28+", sub: "Countries represented" },
    { label: "500+", sub: "Members worldwide" },
    { label: "6+", sub: "Years of community" },
    ].map((stat) => (
    <motion.div
     key={stat.label}
     variants={staggerItem}
     className="rounded-2xl bg-black/10 p-6"
    >
     <p className="text-3xl font-black text-black">{stat.label}</p>
     <p className="mt-1 text-[13px] text-black/65">{stat.sub}</p>
    </motion.div>
    ))}
   </motion.div>
   </motion.div>
  </Container>
  </section>
 </main>
 );
}
