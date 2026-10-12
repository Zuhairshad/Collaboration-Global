"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExpandableGallery } from "@/components/ui/gallery-animation";
import { fadeUp, staggerContainer } from "@/lib/animations";
import gillPortrait from "@/public/media/gill-portrait.jpeg";
import communityColorfulDuo from "@/public/media/community-colorful-duo.jpg";
import communityCafe from "@/public/media/community-cafe.jpg";
import memberHaroldAzmann from "@/public/media/member-harold-azmann.jpeg";
import communityManor from "@/public/media/community-manor.jpeg";
import ctaGillLaptop from "@/public/media/cta-gill-laptop.jpg";
import ctaCommunityTrio from "@/public/media/cta-community-trio.jpeg";
import memberAnneScottlin from "@/public/media/member-anne-scottlin.jpg";
import galleryLondonLunch from "@/public/media/gallery-london-lunch.jpeg";
import galleryZoomSession from "@/public/media/gallery-zoom-session.jpg";

const TOP_IMAGES = [gillPortrait, communityColorfulDuo, communityCafe, memberHaroldAzmann];

const BOTTOM_IMAGES = [communityManor, ctaGillLaptop, ctaCommunityTrio, memberAnneScottlin];

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
        <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={galleryLondonLunch}
              alt="Collaboration Global London lunch"
              fill
              placeholder="blur"
              sizes="(max-width: 639px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={galleryZoomSession}
              alt="Collaboration Global online session"
              fill
              placeholder="blur"
              sizes="(max-width: 639px) 100vw, 50vw"
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
