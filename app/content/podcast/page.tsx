import { PageHeader } from "@/components/shared/PageHeader";
import { CONTENT_HUB } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function PodcastPage() {
 return (
 <main>
  <PageHeader
  label="Content"
  title="Podcast"
  description={CONTENT_HUB.podcast.name}
  />

  <section className="py-16 md:py-20">
  <Container>
   <div className="mx-auto max-w-[900px]">
   <RevealOnScroll>
    <Card className="p-6 md:p-10">
    <p className="text-sm font-semibold tracking-tight text-white">
     Listen now
    </p>
    <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-[1.8]">
     Explore conversations on what it means to build in a human way 
     depth, purpose, and collaboration in practice.
    </p>
    <div className="mt-8">
     <Button href={CONTENT_HUB.podcast.url}>Open on Spotify</Button>
    </div>
    </Card>
   </RevealOnScroll>
   </div>
  </Container>
  </section>
 </main>
 );
}

