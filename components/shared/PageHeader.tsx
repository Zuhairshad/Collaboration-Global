"use client";

import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function PageHeader({
 label,
 title,
 description,
 className,
}: {
 label?: string;
 title: string;
 description?: string;
 className?: string;
}) {
 return (
 <section className={cn("pt-28 pb-16 md:pt-32 md:pb-20", className)}>
  <Container>
  <div className="mx-auto max-w-[900px] text-center">
   {label ? (
   <RevealOnScroll>
    <SectionLabel>{label}</SectionLabel>
   </RevealOnScroll>
   ) : null}

   <RevealOnScroll delay={0.05}>
   <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
    {title}
   </h1>
   </RevealOnScroll>

   {description ? (
   <RevealOnScroll delay={0.1}>
    <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-white/70 md:text-lg md:leading-[1.8]">
    {description}
    </p>
   </RevealOnScroll>
   ) : null}
  </div>
  </Container>
 </section>
 );
}

