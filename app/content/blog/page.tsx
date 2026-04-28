"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
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

export default function BlogPage() {
 const [featured, ...rest] = POSTS;

 return (
 <main>
  <PageHeader
  label="Blog"
  title="Ideas worth sharing."
  description="Practical insights on connection, collaboration, and purposeful growth."
  className="pt-40 pb-28 md:pt-48 md:pb-36 [background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
  />

  <section className="bg-gray-50 py-16 md:py-24">
  <Container>
   <motion.div
   variants={staggerContainer}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, margin: "-60px" }}
   className="mx-auto max-w-[900px]"
   >
   {/* Featured post */}
   <motion.div variants={fadeUp}>
    <SectionLabel>Latest</SectionLabel>
   </motion.div>

   <motion.div variants={fadeUp} className="mt-5">
    <Link href={`/content/blog/${featured.slug}`} className="group block">
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
     <div className="flex flex-wrap items-center gap-3">
     <span className="rounded-full bg-[var(--brand-purple)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
      {featured.category}
     </span>
     <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
      <Calendar className="h-3.5 w-3.5" />
      {featured.date}
     </span>
     </div>
     <h2 className="mt-5 text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold leading-[1.2] tracking-tight text-gray-900 transition-colors group-hover:text-[var(--brand-purple)]">
     {featured.title}
     </h2>
     <p className="mt-3 text-[15px] leading-[1.8] text-gray-500">
     {featured.excerpt}
     </p>
     <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)]">
     Read article
     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
     </span>
    </div>
    </Link>
   </motion.div>

   {/* Rest of posts */}
   <div className="mt-5 grid gap-4 sm:grid-cols-3">
    {rest.map((post) => (
    <motion.div key={post.slug} variants={fadeUp}>
     <Link href={`/content/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
     <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-[var(--brand-purple)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-purple)]">
      {post.category}
      </span>
      <span className="flex items-center gap-1 text-[11px] text-gray-400">
      <Calendar className="h-3 w-3" />
      {post.date}
      </span>
     </div>
     <h3 className="mt-3 flex-1 text-[15px] font-bold leading-[1.35] tracking-tight text-gray-900 transition-colors group-hover:text-[var(--brand-purple)]">
      {post.title}
     </h3>
     <p className="mt-2 text-[13px] leading-[1.75] text-gray-500">
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
