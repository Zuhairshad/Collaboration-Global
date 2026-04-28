"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
 fadeUp,
 slideInLeft,
 slideInRight,
 staggerContainer,
 staggerItem,
} from "@/lib/animations";

/* ─── Page-local data (from production site) ─── */

const STORY_PARAGRAPHS = [
 "Gill Tiney founded Collaboration Global after a lifetime in business and a growing conviction that the way we measure success needed to change. In her TEDx Talk, \"What Comes Next?\", she challenges how wealth is distributed, why societal injustices persist, and how small and medium businesses are actually positioned to drive the most meaningful change.",
 "Inspired by the ideas of Buckminster Fuller, Gill began envisioning a world where people move away from scarcity, competition, and fear toward a place of love, abundance, and genuine partnership. A world where everyone's talents and resources are used in service of one another.",
 "It's not just about business. It's about creating a world where we all work together and care for each other. That's the belief behind everything Collaboration Global does.",
];

const STORY_QUOTE = {
 text: "Never doubt that a group of committed citizens can change the world. Indeed, it is the only thing that ever has.",
 attribution: "Margaret Mead",
};

const VMPs = [
 {
 label: "Our Purpose",
 heading: "Amplify Collaboration's Impact",
 body: "To inspire and enable collaborations that amplify their impact for the collective good of people, humanity, and our planet. We believe shared purpose unlocks extraordinary potential, and that people working together can achieve what no single person could tackle alone.",
 },
 {
 label: "Our Vision",
 heading: "Millions Collaborating for Good",
 body: "To connect, inspire and empower millions of people to collaborate and positively impact their world, from the personal through the local to the global. Together we raise our individual and collective consciousness, thriving whilst remaining in balance with the planet.",
 },
 {
 label: "Our Mission",
 heading: "A Global Community",
 body: "To create a Collaboration Global community, online and through local groups in towns and cities around the world, that provides a nurturing environment for people to come together, collaborate meaningfully, and realise their individual and collective potential.",
 },
] as const;

const MLECA = [
 {
 word: "Meeting",
 body: "Creating spaces for people to explore, challenge and transform themselves and connect with other like-hearted and like-minded people.",
 },
 {
 word: "Living",
 body: "Demonstrating the values and mindset for collaboration by how we show up in the world, being in action and creating positive impacts.",
 },
 {
 word: "Education",
 body: "Teaching the art of collaboration. With every connection, online and locally, as a community we share our knowledge of collaboration.",
 },
 {
 word: "Creating",
 body: "Providing the tools and infrastructure to build and amplify the impact of collaborations, demonstrating the power of genuine connection.",
 },
 {
 word: "Advocating",
 body: "For collaboration as the natural expression of our humanity and the key to solving our world problems and realising our potential.",
 },
 {
 word: "Growing",
 body: "Nurturing continuous personal and collective growth so that every member becomes more of who they are meant to be through collaboration.",
 },
] as const;

const COMMUNITY_VALUES = [
 {
 heading: "Be Seen",
 body: "Show up authentically. Our community is a space with no pretence simply real people helping each other be bigger and better than they can be alone.",
 },
 {
 heading: "Be Heard",
 body: "No judgement, no ridicule. Ask any question, share any challenge. Every voice matters and every perspective adds to the whole.",
 },
 {
 heading: "Be Understood",
 body: "Growth is a personal journey as individual as you. We create space for each person's unique path, held by a community that truly has your back.",
 },
] as const;

const BOOKS = [
 {
 title: "Together We Can Do Something Wonderful",
 description:
  "Gill's core framework for true collaboration the profiles, patterns, and practices that make it succeed. A guide to creating something of significance with others.",
 amazonUrl: "https://www.amazon.com/",
 },
 {
 title: "Making of a Movement: The BeCollaboration Story",
 description:
  "The journey behind Collaboration Global from first spark to a living community. The story of the 'why' that keeps the movement growing.",
 amazonUrl: "https://www.amazon.com/",
 },
 {
 title: "STEP UP: From Desperation to Inspiration",
 description:
  "A practical book for small business owners ready to move from overwhelm into clarity and momentum. Tools for taking control and building the future you want.",
 amazonUrl: "https://www.amazon.com/",
 },
] as const;

const PARTNERS = [
 {
 name: "B1G1",
 description:
  "Buy1Give1 every Collaboration Global membership creates real-world impact aligned with the UN Sustainable Development Goals.",
 url: "https://b1g1.com",
 },
 {
 name: "Organisation for Responsible Businesses",
 description:
  "Supporting values-led business practices and responsible leadership across the community.",
 },
 {
 name: "The Love Foundation",
 description:
  "A global mission for unconditional love partnered with Collaboration Global since 2018.",
 url: "https://thelovefoundation.com",
 },
 {
 name: "World Mental Health Forum",
 description:
  "Advocating for mental health awareness and support worldwide.",
 },
 {
 name: "Arts & Culture Network",
 description:
  "Creative collaboration and cultural connection across communities.",
 },
 {
 name: "Pinksocks",
 description:
  "A connection movement built on kindness and human-first moments.",
 },
] as const;

const COMMUNITY_IMG =
 "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop";

/* ─── Page ─── */

export default function AboutPage() {
 return (
 <main>

  {/* ── PageHeader ── dark gradient */}
  <PageHeader
  label="About"
  title="Built on the belief that collaboration changes everything."
  description="In a world filled with daunting challenges it's easy to lose hope. But amidst these challenges, there's a beacon of hope: collaboration."
  className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  {/* ── Origin Story ── gray-50 */}
  <section id="story" className="bg-gray-50 py-24 md:py-32">
  <Container>
   <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

   {/* LEFT narrative */}
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <motion.div variants={fadeUp}>
    <SectionLabel>Our Story</SectionLabel>
    </motion.div>
    <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
    >
    How Collaboration
    <br />
    Global Began
    </motion.h2>
    <motion.div variants={staggerContainer} className="mt-6 space-y-5">
    {STORY_PARAGRAPHS.map((p, i) => (
     <motion.p
     key={i}
     variants={staggerItem}
     className="text-[15px] leading-[1.85] text-gray-600"
     >
     {p}
     </motion.p>
    ))}
    </motion.div>
    <motion.div variants={fadeUp} className="mt-8">
    <Button
     href="/programs"
     variant="accent"
     className="gap-2 text-sm normal-case tracking-normal"
    >
     Join the Movement
     <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    </motion.div>
   </motion.div>

   {/* RIGHT pull-quote card + founder stat cards */}
   <motion.div
    variants={slideInRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="flex flex-col gap-4 lg:pt-4"
   >
    {/* Quote card */}
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
    <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />
    <p className="relative text-[28px] font-black leading-none text-[var(--brand-teal)] opacity-30">&ldquo;</p>
    <p className="relative mt-2 text-[15px] font-medium leading-[1.7] text-gray-800">
     {STORY_QUOTE.text}
    </p>
    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
     {STORY_QUOTE.attribution}
    </p>
    </div>

    {/* Buckminster Fuller callout */}
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/40 to-transparent" />
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     Philosophical Root
    </p>
    <p className="mt-3 text-sm leading-relaxed text-gray-600">
     Inspired by <span className="font-semibold text-gray-900">Buckminster Fuller</span> Gill envisions a world where everyone's unique talents and resources are used to help each other, moving from scarcity and fear toward love and abundance for all.
    </p>
    </div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── Vision, Mission & Purpose ── dark bg */}
  <section
  id="vmp"
  className="relative overflow-hidden py-24 md:py-32"
  style={{
   background:
   "linear-gradient(135deg, #6B4FBE 0%, #2d1654 40%, #1a3535 70%, #2DC7B3 100%)",
  }}
  >
  {/* Atmospheric glows */}
  <div
   className="pointer-events-none absolute -left-[8%] top-[15%] h-[480px] w-[480px] rounded-full opacity-50"
   style={{ background: "radial-gradient(circle, rgba(107,79,190,0.28) 0%, transparent 70%)" }}
   aria-hidden
  />
  <div
   className="pointer-events-none absolute -right-[5%] bottom-[15%] h-[360px] w-[360px] rounded-full opacity-35"
   style={{ background: "radial-gradient(circle, rgba(45,199,179,0.18) 0%, transparent 70%)" }}
   aria-hidden
  />

  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Why We Exist</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 max-w-[640px] text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
   >
    Vision, Mission
    <br />
    &amp; Purpose
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-white/60"
   >
    Our world faces challenges that can only be understood and solved by people coming together. Fortunately, collaboration is what we naturally do as human beings. It is humanity's superpower.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-4 lg:grid-cols-3">
   {VMPs.map((item, idx) => (
    <RevealOnScroll key={item.label} delay={0.06 + idx * 0.07}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-white/[0.14] hover:bg-white/[0.07]">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/50 to-transparent" />
     <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     {item.label}
     </p>
     <p className="mt-3 text-lg font-bold tracking-tight text-white">
     {item.heading}
     </p>
     <p className="mt-3 text-[13.5px] leading-[1.8] text-white/60">
     {item.body}
     </p>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── MLECA Methodology ── white */}
  <section id="methodology" className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Methodology</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    How We Live
    <br />
    Collaboration
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[580px] text-[15px] leading-relaxed text-gray-600"
   >
    Our mission unfolds through five interconnected practices. Together they form a complete approach to building, sustaining, and amplifying collaborative community.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
   {MLECA.map((item, idx) => (
    <RevealOnScroll key={item.word} delay={0.05 + idx * 0.05}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
     <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[var(--brand-purple)]/8 blur-2xl" />
     <p className="pointer-events-none absolute -right-3 -top-4 select-none text-[88px] font-black leading-none text-gray-100">
     0{idx + 1}
     </p>
     <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)]">
     0{idx + 1}
     </p>
     <p className="relative mt-3 text-[15px] font-bold tracking-tight text-gray-900">
     {item.word}
     </p>
     <p className="relative mt-2 text-[15px] leading-[1.75] text-gray-900">
     {item.body}
     </p>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── Community Philosophy ── brand gradient */}
  <section id="community" className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, #6B4FBE 0%, #2d1654 40%, #1a3535 70%, #2DC7B3 100%)" }}>
  <Container>
   <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

   {/* LEFT image */}
   <motion.div
    variants={slideInLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="overflow-hidden rounded-2xl"
   >
    <div className="relative aspect-[4/3] w-full">
    <Image
     src={COMMUNITY_IMG}
     alt="Collaboration Global community connecting"
     fill
     sizes="(max-width: 1024px) 100vw, 50vw"
     className="object-cover"
    />
    </div>
   </motion.div>

   {/* RIGHT values */}
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
   >
    <motion.div variants={fadeUp}>
    <SectionLabel className="text-white/60">Human Being First</SectionLabel>
    </motion.div>
    <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
    >
    A Space to Be
    <br />
    Fully Human
    </motion.h2>
    <motion.p
    variants={fadeUp}
    className="mt-5 text-[15px] leading-relaxed text-white/80"
    >
    Collaboration Global is a place where people can be human with no pretence simply authentic people helping each other to be bigger and better than they can be alone.
    </motion.p>

    <motion.div
    variants={staggerContainer}
    className="mt-8 space-y-4"
    >
    {COMMUNITY_VALUES.map((val) => (
     <motion.div
     key={val.heading}
     variants={staggerItem}
     className="rounded-xl bg-white/10 p-5"
     >
     <p className="text-sm font-bold text-white">
      {val.heading}
     </p>
     <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/70">
      {val.body}
     </p>
     </motion.div>
    ))}
    </motion.div>
   </motion.div>

   </div>
  </Container>
  </section>

  {/* ── Books by Gill ── gray-50 */}
  <section id="books" className="bg-gray-50 py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>The Books</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Written to Help You
    <br />
    Collaborate Better
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-gray-600"
   >
    Gill Tiney's books capture the thinking, frameworks, and stories behind the movement practical guides for anyone ready to build something of significance with others.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-4 md:grid-cols-3">
   {BOOKS.map((book, idx) => (
    <RevealOnScroll key={book.title} delay={0.05 + idx * 0.06}>
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />

     {/* Book icon */}
     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-teal)]/10">
     <BookOpen
      className="h-5 w-5 text-[var(--brand-teal)]"
      strokeWidth={1.8}
     />
     </div>

     <p className="mt-5 text-[15px] font-bold leading-snug tracking-tight text-gray-900">
     {book.title}
     </p>
     <p className="mt-3 flex-1 text-[13px] leading-[1.75] text-gray-500">
     {book.description}
     </p>

     <a
     href={book.amazonUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)] hover:opacity-80"
     >
     View on Amazon
     <ExternalLink className="h-3 w-3" strokeWidth={2} />
     </a>
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── Global Partnerships ── white */}
  <section id="partners" className="bg-white py-24 md:py-32">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   >
   <motion.div variants={fadeUp}>
    <SectionLabel>Global Partners</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mt-4 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-gray-900"
   >
    Building Impact
    <br />
    at Scale
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-gray-600"
   >
    Every membership, every collaboration, every connection creates ripples of positive impact through the organisations we work alongside.
   </motion.p>
   </motion.div>

   <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
   {PARTNERS.map((partner, idx) => (
    <RevealOnScroll key={partner.name} delay={0.04 + idx * 0.04}>
    <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-teal)]/60 to-transparent" />
     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-teal)]/10">
     <span className="text-[13px] font-bold text-[var(--brand-teal)]">
      {partner.name.charAt(0)}
     </span>
     </div>
     <p className="mt-4 text-[14px] font-semibold tracking-tight text-gray-900">
     {partner.name}
     </p>
     <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
     {partner.description}
     </p>
     {"url" in partner && partner.url ? (
     <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-teal)] hover:opacity-80"
     >
      Learn more
      <ExternalLink className="h-2.5 w-2.5" strokeWidth={2} />
     </a>
     ) : null}
    </div>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>

  {/* ── Final CTA ── dark */}
  <section
  id="cta"
  className="relative overflow-hidden py-24 md:py-32"
  style={{
   background:
   "linear-gradient(135deg, #6B4FBE 0%, #2d1654 40%, #1a3535 70%, #2DC7B3 100%)",
  }}
  >
  <div
   className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
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
    <SectionLabel>Get Involved</SectionLabel>
   </motion.div>
   <motion.h2
    variants={fadeUp}
    className="mx-auto mt-4 max-w-[620px] text-[clamp(2rem,4vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
   >
    Ready to build something
    <br />
    of significance?
   </motion.h2>
   <motion.p
    variants={fadeUp}
    className="mx-auto mt-5 max-w-[500px] text-[15px] leading-relaxed text-white/55"
   >
    Once a month we create a space for people to come together, connect with like-hearted and like-minded people, and start turning shared ideas into real impact.
   </motion.p>
   <motion.div
    variants={fadeUp}
    className="mt-9 flex flex-wrap items-center justify-center gap-3"
   >
    <Button
    href="/programs"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal shadow-[0_0_24px_rgba(45,199,179,0.25)]"
    >
    Explore Programs
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
    <Button
    href="/contact"
    variant="outline"
    className="gap-2 border-white/20 text-sm normal-case tracking-normal text-white hover:border-white/40 hover:bg-white/[0.06]"
    >
    Get in Touch
    </Button>
   </motion.div>
   </motion.div>
  </Container>
  </section>

 </main>
 );
}
