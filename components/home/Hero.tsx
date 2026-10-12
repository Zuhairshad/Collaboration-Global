"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, ArrowRight, Ticket,
  Globe2, Users, Zap, CalendarDays,
} from "lucide-react";
import { HERO, IMPACT_PARTNERS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import heroMicImage from "@/public/media/hero-mic.jpg";

const DISPLAY_PARTNERS = IMPACT_PARTNERS.slice(0, 3);

const TICKER_ITEMS = [
  { Icon: Globe2, text: "Every Continent" },
  { Icon: Users, text: "A Community of Thousands" },
  { Icon: Zap, text: "10k+ Impacts" },
  { Icon: CalendarDays, text: "6+ Years Active" },
];

/** Toggles data-paused on the element while it is off-screen (no re-renders). */
function usePauseOffscreen<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function StatsTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const ref = usePauseOffscreen<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-[var(--brand-teal)] py-3.5 md:py-4"
    >
      <div className="flex w-max animate-hero-marquee items-center">
        {items.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= TICKER_ITEMS.length}
            className="flex shrink-0 items-center gap-2 px-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-text md:text-xs"
          >
            <item.Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            {item.text}
            <span className="ml-4 text-brand-text/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn("relative flex min-h-svh flex-col overflow-hidden", className)}
    >
      {/* ── LAYER 1: Full-bleed background image (covers entire section) ── */}
      <Image
        src={heroMicImage}
        alt="Microphone with atmospheric stage lighting"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "70% center" }}
      />

      {/* ── LAYER 2: Gradient overlay solid left, transparent right ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "linear-gradient(to right, rgba(30,22,18,0.80) 0%, rgba(30,22,18,0.72) 25%, rgba(30,22,18,0.54) 45%, rgba(30,22,18,0.24) 65%, rgba(30,22,18,0.06) 80%, transparent 100%)",
          ].join(", "),
        }}
        aria-hidden
      />

      {/* ── LAYER 3: Top & bottom vignette for cinematic depth ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,22,18,0.45) 0%, transparent 20%, transparent 85%, rgba(20,14,10,0.5) 100%)",
        }}
        aria-hidden
      />

      {/* ── LAYER 4: Subtle warm purple ambient glow top-left ── */}
      <div
        className="pointer-events-none absolute -left-[5%] -top-[5%] h-[60vh] w-[50vw] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,95,189,0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* ── Content layer ── */}
      <div className="relative z-10 flex min-h-svh flex-1 flex-col px-8 pb-0 pt-24 sm:px-14 md:min-h-0 lg:px-[11%]">

        {/* Main copy: bottom of the first screen on phones, vertically centred from md */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col justify-end pb-14 md:justify-center md:pb-0"
        >
          {/* Meta line */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-2.5 text-[13px] text-white/50"
          >
            <Calendar className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
            <span>Est. 2019</span>
            <span className="text-white/25">•</span>
            <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
            <span>United Kingdom &amp; Global</span>
          </motion.div>

          {/* Headline */}
          {/* Rendered visible from the first paint (no JS-gated fade) so it never delays LCP */}
          <motion.h1
            variants={staggerItem}
            initial={false}
            className="mt-6 max-w-[640px] text-[clamp(2.6rem,5.6vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white"
          >
            <span className="block">{HERO.headingLine1}</span>
            <span className="block">{HERO.headingLine2}</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
          >
            <Button
              href={HERO.primaryCTA.href}
              variant="accent"
              className="w-full gap-2 px-5 py-3 text-sm normal-case tracking-normal sm:w-auto sm:px-7 sm:py-3.5"
            >
              {HERO.primaryCTA.label}
              <Ticket className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            </Button>
            <Button
              href={HERO.secondaryCTA.href}
              variant="outline"
              className="w-full gap-2 px-5 py-3 text-sm normal-case tracking-normal border-white/20 text-white hover:border-white/40 hover:bg-white/[0.06] sm:w-auto sm:px-7 sm:py-3.5"
            >
              {HERO.secondaryCTA.label}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
            </Button>
          </motion.div>

        </motion.div>

        {/* Bottom row: partners left · description right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hidden flex-wrap items-end justify-between gap-6 pb-5 pt-8 sm:gap-8 sm:pb-6 sm:pt-0 md:flex"
        >
          <motion.div variants={staggerItem}>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35 sm:text-[11px]">
              {HERO.sponsorLabel}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-4 sm:gap-6 md:gap-8">
              {DISPLAY_PARTNERS.map((partner) => (
                <div key={partner.name} className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] sm:h-7 sm:w-7">
                    <span className="text-[10px] font-bold text-[var(--brand-teal)]">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-white/45 sm:text-sm">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="hidden max-w-[360px] text-right text-[13.5px] leading-relaxed text-white/35 md:block"
          >
            {HERO.intro}
          </motion.p>
        </motion.div>
      </div>

      {/* Stats ticker flush bottom */}
      <div className="relative z-10">
        <StatsTicker />
      </div>
    </section>
  );
}
