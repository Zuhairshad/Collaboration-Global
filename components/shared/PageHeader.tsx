"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/** A className that paints its own background (gradient / bg-*) means white text sits on it. */
function hasOwnBackground(className?: string) {
 return !!className && /(^|\s|:)(bg-|\[background)/.test(className);
}

export function PageHeader({
 label,
 title,
 description,
 className,
 tone,
}: {
 label?: string;
 title: string;
 description?: string;
 className?: string;
 /**
  * "dark" = white text for a dark/gradient background, "light" = brand text on the cream page.
  * Defaults to "dark" when `className` sets a background, otherwise "light".
  */
 tone?: Tone;
}) {
 const resolvedTone: Tone = tone ?? (hasOwnBackground(className) ? "dark" : "light");
 const isDark = resolvedTone === "dark";

 return (
 <section className={cn("pt-28 pb-14 md:pt-32 md:pb-20", className)}>
  <Container>
  <div className="mx-auto max-w-[900px] text-center">
   {label ? (
   <RevealOnScroll>
    <SectionLabel>{label}</SectionLabel>
   </RevealOnScroll>
   ) : null}

   <RevealOnScroll delay={0.05}>
   <h1
    className={cn(
    "mt-4 text-[clamp(1.875rem,8.5vw,2.25rem)] font-semibold leading-[1.05] tracking-tight md:text-6xl",
    isDark ? "text-white" : "text-brand-text",
    )}
   >
    {title}
   </h1>
   </RevealOnScroll>

   {description ? (
   <RevealOnScroll delay={0.1}>
    <p
    className={cn(
     "mx-auto mt-5 max-w-[720px] text-base leading-relaxed md:mt-6 md:text-lg md:leading-[1.8]",
     isDark ? "text-white/70" : "text-brand-muted",
    )}
    >
    {description}
    </p>
   </RevealOnScroll>
   ) : null}
  </div>
  </Container>
 </section>
 );
}
