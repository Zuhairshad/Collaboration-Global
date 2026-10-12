import type { Variants } from "framer-motion";

/** Primary reveal: fade + slide up, Framer-style ease. Opacity/transform only so it stays on the compositor. */
export const fadeUp: Variants = {
 hidden: { opacity: 0, y: 14 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
 },
};

export const fadeIn: Variants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
 },
};

/** Stagger parent tighter cadence for card grids */
export const staggerContainer: Variants = {
 hidden: {},
 visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerItem: Variants = fadeUp;

export const slideInLeft: Variants = {
 hidden: { opacity: 0, x: -14 },
 visible: {
 opacity: 1,
 x: 0,
 transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
 },
};

export const slideInRight: Variants = {
 hidden: { opacity: 0, x: 14 },
 visible: {
 opacity: 1,
 x: 0,
 transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
 },
};
