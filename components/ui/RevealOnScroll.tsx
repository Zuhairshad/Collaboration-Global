"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

type Props = {
 delay?: number;
 className?: string;
 children: React.ReactNode;
};

export function RevealOnScroll({ delay = 0, className, children }: Props) {
 const ref = useRef<HTMLDivElement | null>(null);
 const inView = useInView(ref, { once: true, margin: "-80px" });

 return (
 <motion.div
  ref={ref}
  className={cn(className)}
  variants={fadeUp}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  transition={{ delay }}
 >
  {children}
 </motion.div>
 );
}

