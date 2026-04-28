import Link from "next/link";
import Image from "next/image";
import { FOOTER, NAV_LINKS, SITE_META, SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
 return (
 <footer className="border-t border-brand-border">
  <Container className="py-20 md:py-24">
  {/* Large logo */}
  <div className="flex flex-col items-center text-center">
   <div className="rounded-2xl bg-white px-8 py-5 shadow-lg">
   <Image
    src="/logo.jpg"
    alt={SITE_META.name}
    width={340}
    height={90}
    className="h-[70px] w-auto md:h-[84px]"
   />
   </div>
   <p className="mt-5 text-[clamp(1.2rem,2.5vw,2rem)] font-medium tracking-tight text-gray-400">
   Shaping Tomorrow.
   </p>
  </div>

  {/* Nav links */}
  <nav className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
   {NAV_LINKS.map((item) => (
   <Link
    key={item.href}
    href={item.href}
    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
   >
    {item.label}
   </Link>
   ))}
  </nav>

  {/* Social links */}
  <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
   {SOCIAL_LINKS.map((link) => (
   <a
    key={link.platform}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-gray-400 transition-colors hover:text-gray-900"
   >
    {link.platform}
   </a>
   ))}
  </div>

  {/* Divider + meta */}
  <div className="mx-auto mt-14 max-w-[600px] border-t border-brand-border pt-8 text-center">
   <div className="flex items-center justify-center">
   <div className="rounded-md bg-white px-2.5 py-1.5">
    <Image
    src="/logo.jpg"
    alt={SITE_META.name}
    width={100}
    height={26}
    className="h-6 w-auto"
    />
   </div>
   </div>
   <p className="mt-3 text-xs text-gray-400">{FOOTER.copyright}</p>
   <p className="mt-1 text-xs text-gray-300">{FOOTER.designerCredit}</p>
  </div>
  </Container>
 </footer>
 );
}
