"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_META, type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Filter out Home (logo handles it) and Contact (CTA button handles it) */
const DESKTOP_NAV = NAV_LINKS.filter(
 (l) => l.href !== "/" && l.href !== "/contact",
);

function LogoMark() {
 return (
 <div className="rounded-lg bg-white px-2.5 py-1.5">
  <Image
  src="/logo.jpg"
  alt={SITE_META.name}
  width={140}
  height={37}
  className="h-[30px] w-auto"
  priority
  />
 </div>
 );
}

function DesktopNavItem({ item, scrolled }: { item: NavLink; scrolled: boolean }) {
 const [open, setOpen] = useState(false);
 const linkCls = scrolled
 ? "text-gray-800 hover:text-gray-900"
 : "text-white hover:text-white/70";

 if (!item.children?.length) {
 return (
  <Link
  href={item.href}
  className={cn("text-sm transition-colors", linkCls)}
  >
  {item.label}
  </Link>
 );
 }

 return (
 <div
  className="relative"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
 >
  <button
  type="button"
  className={cn("inline-flex items-center gap-1 text-sm transition-colors", linkCls)}
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
  >
  {item.label}
  <ChevronDown className="h-4 w-4" />
  </button>

  <AnimatePresence>
  {open ? (
   <motion.div
   initial={{ opacity: 0, y: 8 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: 8 }}
   transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
   className="absolute left-0 top-full z-50 mt-3 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
   >
   {item.children.map((child) => (
    <Link
    key={child.href}
    href={child.href}
    className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
    >
    {child.label}
    </Link>
   ))}
   </motion.div>
  ) : null}
  </AnimatePresence>
 </div>
 );
}

function MobileMenu({
 open,
 onClose,
}: {
 open: boolean;
 onClose: () => void;
}) {
 const items: readonly NavLink[] = NAV_LINKS;

 useEffect(() => {
 if (!open) return;
 const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") onClose();
 };
 window.addEventListener("keydown", onKeyDown);
 return () => window.removeEventListener("keydown", onKeyDown);
 }, [onClose, open]);

 return (
 <AnimatePresence>
  {open ? (
  <motion.div
   className="fixed inset-0 z-60"
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   exit={{ opacity: 0 }}
  >
   <div
   className="absolute inset-0 bg-black/60"
   onClick={onClose}
   aria-hidden="true"
   />
   <motion.div
   initial={{ opacity: 0, y: -12 }}
   animate={{ opacity: 1, y: 0 }}
   exit={{ opacity: 0, y: -12 }}
   transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
   className="absolute inset-x-3 top-3 rounded-2xl border border-brand-border bg-brand-card p-5 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
   role="dialog"
   aria-modal="true"
   aria-label="Navigation menu"
   >
   <div className="flex items-center justify-between">
    <Link href="/" onClick={onClose}>
    <LogoMark />
    </Link>
    <button
    type="button"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100"
    onClick={onClose}
    aria-label="Close menu"
    >
    <X className="h-5 w-5" />
    </button>
   </div>

   <div className="mt-6 space-y-1">
    {items.map((item) => (
    <div key={item.href} className="py-1">
     <Link
     href={item.href}
     className="block rounded-lg px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
     onClick={onClose}
     >
     {item.label}
     </Link>
     {item.children?.length ? (
     <div className="mt-1 space-y-1 pl-2">
      {item.children.map((child) => (
      <Link
       key={child.href}
       href={child.href}
       className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
       onClick={onClose}
      >
       {child.label}
      </Link>
      ))}
     </div>
     ) : null}
    </div>
    ))}
   </div>

   <div className="mt-6">
    <Button href="/contact" variant="accent" className="w-full gap-2 text-sm normal-case tracking-normal">
    Contact Us
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
    </Button>
   </div>
   </motion.div>
  </motion.div>
  ) : null}
 </AnimatePresence>
 );
}

export function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 12);
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
  <header
  className={cn(
   "fixed inset-x-0 top-0 z-50 transition-all duration-300",
   scrolled
   ? "border-b border-gray-200 bg-white/90 backdrop-blur-md"
   : "border-b border-gray-200/50 bg-white md:border-none md:bg-transparent",
  )}
  >
  <Container className="flex h-16 items-center justify-between">
   <Link href="/" aria-label="Go to homepage">
   <LogoMark />
   </Link>

   <nav className="hidden items-center gap-7 md:flex">
   {DESKTOP_NAV.map((item) => (
    <DesktopNavItem key={item.href} item={item} scrolled={scrolled} />
   ))}
   </nav>

   <div className="hidden md:block">
   <Button
    href="/contact"
    variant="accent"
    className="gap-2 text-sm normal-case tracking-normal"
   >
    Contact Us
    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.8} />
   </Button>
   </div>

   <button
   type="button"
   className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 md:hidden"
   onClick={() => setMobileOpen(true)}
   aria-label="Open menu"
   >
   <Menu className="h-5 w-5" />
   </button>
  </Container>
  </header>

  <MobileMenu
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
  />
 </>
 );
}
