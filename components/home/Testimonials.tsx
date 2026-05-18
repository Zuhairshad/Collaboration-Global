"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ImageBlock } from "@/components/media/ImageBlock";

type Testimonial = (typeof TESTIMONIALS)[number];

function QuoteIcon() {
    return (
        <svg
            width="32"
            height="24"
            viewBox="0 0 44 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <path
                d="M0 20.267C0 12.533 5.333 5.867 14.133 0L17.6 4.533C12.267 8.267 9.867 12.8 9.333 16.533H14.667C17.067 16.533 19.2 18.667 19.2 21.067V26.933C19.2 29.333 17.067 31.467 14.667 31.467H5.333C2.4 31.467 0 29.067 0 26.133V20.267ZM24 20.267C24 12.533 29.333 5.867 38.133 0L41.6 4.533C36.267 8.267 33.867 12.8 33.333 16.533H38.667C41.067 16.533 43.2 18.667 43.2 21.067V26.933C43.2 29.333 41.067 31.467 38.667 31.467H29.333C26.4 31.467 24 29.067 24 26.133V20.267Z"
                fill="var(--reunion-accent)"
            />
        </svg>
    );
}

function TestimonialCard({ t }: { t: Testimonial }) {
    return (
        <div className="w-[340px] sm:w-[440px] md:w-[500px] h-[340px] sm:h-[380px] md:h-[420px] shrink-0 rounded-[32px] border border-gray-100 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between select-none hover:shadow-md transition-shadow">
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <QuoteIcon />
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-[15px] sm:text-[16px] md:text-[16.5px] leading-relaxed text-brand-muted italic line-clamp-7">
                        "{t.quote}"
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100">
                        <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                            onError={() => {}}
                        />
                    </div>
                    <div>
                        <p className="text-[16px] font-bold text-brand-text leading-tight">
                            {t.name}
                        </p>
                        <p className="text-[13px] text-brand-muted leading-tight mt-1">
                            {t.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Horizontal scroll translation mapping precisely engineered to replicate Framer Horiscroll pin scrub physics
    // Translating across the panels array to showcase all cards fluidly before releasing the pin
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

    return (
        <section id="testimonials" ref={targetRef} className="relative h-[400vh] bg-brand-bg">
            {/* Sticky screen container pinning the panels layout row precisely like Horiscroll pinned view */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-12">
                
                {/* Header Block exactly mapping premium visual standards */}
                <Container>
                    <div className="mb-8 md:mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#655bb3]/10 border border-[#655bb3]/20 px-4 py-2 text-[#655bb3] font-bold text-xs sm:text-sm shadow-sm">
                                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                <span>Loved by our global community</span>
                            </div>
                            <h2 className="mt-4 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-extrabold leading-tight tracking-tight text-brand-text">
                                What our members are saying.
                            </h2>
                        </div>
                    </div>
                </Container>

                {/* Horizontally scrolling container mapping directly to ScrollTrigger scrub model */}
                <div className="w-full pl-4 sm:pl-8 md:pl-16 lg:pl-24">
                    <motion.div
                        style={{ x }}
                        className="flex gap-5 sm:gap-6 flex-nowrap w-max will-change-transform pr-[30vw]"
                    >
                        {TESTIMONIALS.map((t, idx) => (
                            <TestimonialCard key={`${t.name}-${idx}`} t={t} />
                        ))}
                    </motion.div>
                </div>

                {/* Framer Scroll Progress Indicator Strip */}
                <Container>
                    <div className="mt-10 max-w-xs mx-auto">
                        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 bottom-0 bg-[var(--reunion-accent)] rounded-full"
                                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            />
                        </div>
                    </div>
                </Container>

                {/* Preserved ambient storytelling image injection for mobile/hybrid visual completeness */}
                <div className="hidden">
                    <ImageBlock id="story-crowd" variant="landscape" />
                </div>

            </div>
        </section>
    );
}
