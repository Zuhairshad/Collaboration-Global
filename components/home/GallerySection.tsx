"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExpandableGallery } from "@/components/ui/gallery-animation";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TOP_IMAGES = [
  "/media/gill-portrait.jpeg",
  "/media/community-colorful-duo.jpg",
  "/media/community-cafe.jpg",
  "/media/member-harold-azmann.jpeg",
];

const BOTTOM_IMAGES = [
  "/media/community-manor.jpeg",
  "/media/cta-gill-laptop.jpg",
  "/media/cta-community-trio.jpeg",
  "/media/member-anne-scottlin.jpg",
];

export function GallerySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-10 text-center"
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>Community</SectionLabel>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-brand-text"
        >
          Real people. Real connections.
        </motion.h2>
      </motion.div>

      <Container>
        {/* Top row, 4 expandable images */}
        <ExpandableGallery images={TOP_IMAGES} />

        {/* Middle, 2 landscape images */}
        <div className="my-3 grid grid-cols-2 gap-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/media/gallery-london-lunch.jpeg"
              alt="Collaboration Global London lunch"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/media/gallery-zoom-session.jpg"
              alt="Collaboration Global online session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom row, 4 expandable images */}
        <ExpandableGallery images={BOTTOM_IMAGES} />
      </Container>
    </section>
  );
}
