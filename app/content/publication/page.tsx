import { PageHeader } from "@/components/shared/PageHeader";
import { CONTENT_HUB } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function PublicationPage() {
 return (
 <main>
  <PageHeader
  label="Content"
  title="Publication"
  description={CONTENT_HUB.publication.name}
  />

  <section className="py-16 md:py-20">
  <Container>
   <div className="mx-auto max-w-[900px]">
   <RevealOnScroll>
    <Card className="p-6 md:p-10">
    <p className="text-sm font-semibold tracking-tight text-white">
     Read on Issuu
    </p>
    <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-[1.8]">
     The Quest is a quarterly publication exploring collaboration, impact,
     and the stories of people creating change.
    </p>
    <div className="mt-8">
     <Button href={CONTENT_HUB.publication.url} variant="outline">
     Open Issuu
     </Button>
    </div>
    </Card>
   </RevealOnScroll>
   </div>
  </Container>
  </section>
 </main>
 );
}

