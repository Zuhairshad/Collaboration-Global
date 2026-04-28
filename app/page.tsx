import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Pillars } from "@/components/home/Pillars";
import { Offerings } from "@/components/home/Offerings";
import { GlobalImpact } from "@/components/home/GlobalImpact";
import { ImpactMap } from "@/components/home/ImpactMap";
import { Founder } from "@/components/home/Founder";
import { Testimonials } from "@/components/home/Testimonials";
import { ContentPreview } from "@/components/home/ContentPreview";
import { CTASection } from "@/components/home/CTASection";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
 return (
 <main>
  <Hero />
  <Founder />
  <Philosophy />
  <Pillars />
  <Offerings />
  <CTASection />
  <GlobalImpact />
  <Testimonials />
  <ContentPreview />
  <FAQ />
  <ImpactMap />
 </main>
 );
}
