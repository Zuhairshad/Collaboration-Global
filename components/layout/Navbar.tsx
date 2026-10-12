"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_META, type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import logo from "@/public/logo.jpg";

/** Routes whose top section is dark (photo or brand gradient), so white nav text is readable over it */
const DARK_HERO_ROUTES = ["/", "/about", "/programs", "/events", "/impact", "/contact", "/content/blog"];

/** Every other route (partner stories, content pages, 404s) starts on a light background — use dark-on-light nav styling */
function hasLightHero(pathname: string | null): boolean {
 if (!pathname) return false;
 if (pathname.startsWith("/impact/")) return true;
 if (pathname.startsWith("/programs/") || pathname.startsWith("/content/blog/")) return false;
 return !DARK_HERO_ROUTES.includes(pathname);
}

/** Filter out Home (logo handles it) and Contact (CTA button handles it) */
const DESKTOP_NAV = NAV_LINKS.filter(
 (l) => l.href !== "/" && l.href !== "/contact",
);

/**
 * logo.jpg has a white background. On the solid white header it sits
 * seamlessly; the white "pill" is only drawn when the header is transparent over
 * the dark hero (desktop, top of page). Padding stays constant so nothing shifts.
 */
function LogoMark({ pill = false }: { pill?: boolean }) {
 return (
 <div className={cn("rounded-lg px-2.5 py-1.5", pill && "md:bg-white")}>
  <Image
  src={logo}
  alt={SITE_META.name}
  width={141}
  height={40}
  loading="eager"
  className="h-[30px] w-auto"
  />
 </div>
 );
}

function DesktopNavItem({ item, scrolled }: { item: NavLink; scrolled: boolean }) {
 const [open, setOpen] = useState(false);
 const linkCls = scrolled
 ? "text-brand-text/90 hover:text-brand-text"
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
   className="absolute left-0 top-full z-50 mt-3 w-56 rounded-xl border border-brand-border bg-white p-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
   >
   {item.children.map((child) => (
    <Link
    key={child.href}
    href={child.href}
    className="block rounded-lg px-3 py-2 text-sm text-brand-muted transition-colors hover:bg-brand-card hover:text-brand-text"
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
   className="fixed inset-0 z-[60]"
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
   className="absolute inset-x-3 top-3 rounded-2xl border border-brand-border bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
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
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-text transition-colors hover:bg-brand-card"
    onClick={onClose}
    aria-label="Close menu"
    >
    <X className="h-[18px] w-[18px]" strokeWidth={1.8} />
    </button>
   </div>

   <div className="mt-6 space-y-1">
    {items.map((item) => (
    <div key={item.href} className="py-1">
     <Link
     href={item.href}
     className="block rounded-lg px-3 py-2 text-base font-medium text-brand-text/90 hover:bg-brand-card-hover"
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
       className="block rounded-lg px-3 py-2 text-sm text-brand-muted hover:bg-brand-card-hover hover:text-brand-text"
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
 const pathname = usePathname();
 const forceLight = hasLightHero(pathname);
 const useDarkLinks = scrolled || forceLight;

 useEffect(() => {
 // Functional update returning the same value lets React bail out of re-rendering.
 const onScroll = () => {
  const next = window.scrollY > 12;
  setScrolled((prev) => (prev === next ? prev : next));
 };
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
  <header
  className={cn(
   "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
   useDarkLinks
   ? "border-brand-border/70 bg-white"
   : "border-brand-border/70 bg-white md:border-b-0 md:bg-transparent",
  )}
  >
  <Container className="flex h-16 items-center justify-between">
   <Link href="/" aria-label="Go to homepage">
   <LogoMark pill={!useDarkLinks} />
   </Link>

   <nav className="hidden items-center gap-7 md:flex">
   {DESKTOP_NAV.map((item) => (
    <DesktopNavItem key={item.href} item={item} scrolled={useDarkLinks} />
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
   className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-text transition-colors hover:bg-brand-card md:hidden"
   onClick={() => setMobileOpen(true)}
   aria-label="Open menu"
   >
   <Menu className="h-[18px] w-[18px]" strokeWidth={1.8} />
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
