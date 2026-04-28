"use client";

import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
 target: number;
 suffix?: string;
 duration?: number;
};

function easeOutCubic(t: number) {
 return 1 - Math.pow(1 - t, 3);
}

export function Counter({ target, suffix = "", duration = 900 }: Props) {
 const ref = useRef<HTMLSpanElement | null>(null);
 const inView = useInView(ref, { once: true, margin: "-80px" });
 const [value, setValue] = useState(0);

 const safeTarget = useMemo(() => Math.max(0, Math.floor(target)), [target]);

 useEffect(() => {
 if (!inView) return;

 let raf = 0;
 const start = performance.now();

 const tick = (now: number) => {
  const elapsed = now - start;
  const t = Math.min(1, elapsed / duration);
  const eased = easeOutCubic(t);
  setValue(Math.round(eased * safeTarget));

  if (t < 1) raf = requestAnimationFrame(tick);
 };

 raf = requestAnimationFrame(tick);
 return () => cancelAnimationFrame(raf);
 }, [duration, inView, safeTarget]);

 return (
 <span ref={ref}>
  {value}
  {suffix}
 </span>
 );
}

