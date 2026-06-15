"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Heart, Users, Lightbulb, Palette, Shield } from "lucide-react";
import { IMPACT_PARTNERS } from "@/lib/constants";

const PARTNER_ICONS = [Globe2, Heart, Users, Lightbulb, Palette, Shield] as const;

export function GlobalImpact() {
    const [activeIndex, setActiveIndex] = useState(0);
    const lastActionTimeRef = React.useRef<number>(0);

    // Mental model: "swipe right we move to reight cards we swipe left we move to left cards"
    // Incorporating strict timestamp cooldown gate to completely eliminate desktop wheel/drag card skipping
    const handleNext = () => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < 400) return;
        lastActionTimeRef.current = now;
        setActiveIndex((prev) => (prev + 1) % IMPACT_PARTNERS.length);
    };

    const handlePrev = () => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < 400) return;
        lastActionTimeRef.current = now;
        setActiveIndex((prev) => (prev - 1 + IMPACT_PARTNERS.length) % IMPACT_PARTNERS.length);
    };

    // Helper to calculate arc style transformation offsets declaratively exactly like Framer cards
    const getCardStyles = (offset: number) => {
        if (offset === 0) {
            return {
                x: "0%",
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                zIndex: 40,
            };
        }
        if (offset === 1) {
            return {
                x: "115%",
                y: 28,
                rotate: 15,
                scale: 0.86,
                opacity: 1,
                zIndex: 30,
            };
        }
        if (offset === -1) {
            return {
                x: "-115%",
                y: 28,
                rotate: -15,
                scale: 0.86,
                opacity: 1,
                zIndex: 30,
            };
        }
        if (offset === 2) {
            return {
                x: "225%",
                y: 92,
                rotate: 30,
                scale: 0.72,
                opacity: 1,
                zIndex: 20,
            };
        }
        if (offset === -2) {
            return {
                x: "-225%",
                y: 92,
                rotate: -30,
                scale: 0.72,
                opacity: 1,
                zIndex: 20,
            };
        }
        if (offset > 2) {
            return {
                x: "300%",
                y: 180,
                rotate: 42,
                scale: 0.55,
                opacity: 0,
                zIndex: 10,
            };
        }
        // offset < -2
        return {
            x: "-300%",
            y: 180,
            rotate: -42,
            scale: 0.55,
            opacity: 0,
            zIndex: 10,
        };
    };

    // Drag release handler for swipe animation logic attached directly to each physical card block
    const handleDragEnd = (e: any, { offset }: any) => {
        const threshold = 30;
        if (offset.x > threshold) {
            // swiped right -> move to right cards
            handleNext();
        } else if (offset.x < -threshold) {
            // swiped left -> move to left cards
            handlePrev();
        }
    };

    // Trackpad continuous scrolling support mapped to distinct responsive index transitions
    const handleWheel = (e: React.WheelEvent) => {
        // Recognize predominantly horizontal trackpad scroll gestures
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 12) {
            if (e.deltaX > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
    };

    return (
        <section
            id="impact"
            className="bg-slate-50 py-12 md:py-16 overflow-hidden relative"
        >
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">

                {/* Arc Carousel Dynamic Canvas Plane */}
                <div
                    onWheel={handleWheel}
                    className="relative h-[420px] sm:h-[460px] md:h-[520px] w-full flex justify-center items-start pt-4"
                    aria-label="Arc text carousel. Swipe horizontally to rotate."
                >
                    {IMPACT_PARTNERS.map((partner, idx) => {
                        const Icon = PARTNER_ICONS[idx];
                        // Calculate wrapped shortest offsets to allow seamless infinite circular flow feel
                        let offset = idx - activeIndex;
                        const total = IMPACT_PARTNERS.length;
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        const styles = getCardStyles(offset);
                        const isActive = offset === 0;
                        const borderColor = idx % 2 === 0 ? "#655bb3" : "#31cfc3";

                        return (
                            <motion.div
                                key={partner.name}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                onDragEnd={handleDragEnd}
                                onClick={() => setActiveIndex(idx)}
                                animate={{
                                    x: styles.x,
                                    y: styles.y,
                                    rotate: styles.rotate,
                                    scale: styles.scale,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 420,
                                    damping: 38,
                                    mass: 1,
                                }}
                                style={{ zIndex: styles.zIndex, borderColor, borderWidth: 4 }}
                                className={`absolute top-0 w-[300px] h-[380px] sm:w-[340px] sm:h-[420px] md:w-[380px] md:h-[480px] overflow-hidden border-solid transition-all duration-300 select-none text-left flex flex-col justify-between touch-pan-y cursor-grab active:cursor-grabbing text-gray-900 ${
                                    isActive
                                        ? "bg-white shadow-2xl"
                                        : "bg-white/95 shadow-md"
                                }`}
                            >
                                {/* Card Internal Layout Base */}
                                <div className="p-6 sm:p-7 relative z-10 flex-1 flex flex-col pointer-events-none">
                                    {/* Top Icon Strip */}
                                    <div className="flex items-center gap-3.5 mb-4">
                                        <div className="p-3 rounded-2xl shrink-0 bg-[#655bb3]/10 text-[#655bb3]">
                                            <Icon className="h-6 w-6" strokeWidth={2.2} />
                                        </div>
                                        <h3 className="font-bold text-[18px] sm:text-[20px] leading-snug tracking-tight text-gray-900 line-clamp-1">
                                            {partner.name}
                                        </h3>
                                    </div>

                                    {/* Description Text */}
                                    <p className="text-[14px] sm:text-[15.5px] leading-relaxed mt-2 font-normal flex-1 text-gray-600">
                                        {partner.description}
                                    </p>
                                </div>

                                {/* External URL Action Hook / Bottom strip */}
                                {"url" in partner && partner.url && isActive && (
                                    <a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[12px] font-bold text-[#655bb3] tracking-wide uppercase hover:bg-slate-100 transition-colors"
                                    >
                                        <span>Visit website</span>
                                        <span>→</span>
                                    </a>
                                )}

                                {/* Subtle dimming on inactive cards */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-slate-50/40 pointer-events-none" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core Section Heading & Controls Structured EXACTLY like the Framer Reference Preview Controls Area */}
                <div className="mt-4 sm:mt-6 max-w-3xl mx-auto text-center relative z-40 select-none">

                    {/* Inline row: Left Arrow, Main Center Title, Right Arrow */}
                    <div className="flex items-center justify-center gap-2 sm:gap-6">
                        <button
                            onClick={handlePrev}
                            className="p-2 sm:p-3 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                            aria-label="Swipe left / previous partner"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={activeIndex}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.15 }}
                                className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-bold leading-tight tracking-tight text-brand-text px-1"
                            >
                                Where Changemakers Connect.
                            </motion.h2>
                        </AnimatePresence>

                        <button
                            onClick={handleNext}
                            className="p-2 sm:p-3 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                            aria-label="Swipe right / next partner"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Muted Subtitle directly below */}
                    <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] text-brand-muted max-w-md mx-auto px-4">
                        Collaboration Global brings purpose-driven leaders together to build projects of true significance.
                    </p>

                    {/* CTA pill */}
                    <div className="mt-4 sm:mt-5 flex justify-center">
                        <a
                            href="/programs/collaborator-pro"
                            className="px-6 py-2.5 bg-[var(--brand-purple)] hover:bg-[var(--brand-purple-hover)] text-white text-[13px] sm:text-[14px] font-medium tracking-wide rounded-full transition-all shadow-sm block"
                        >
                            Learn more
                        </a>
                    </div>

                    {/* Indicator Dot Strip at the absolute bottom */}
                    <div className="mt-5 sm:mt-6 flex items-center justify-center gap-1.5">
                        {IMPACT_PARTNERS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    i === activeIndex
                                        ? "w-4 sm:w-5 bg-[var(--brand-purple)]"
                                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                                }`}
                                aria-label={`Select partner ${i + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
