import { PageHeader } from "@/components/shared/PageHeader";
import { BOOKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function BooksPage() {
 return (
 <main>
  <PageHeader
  label="Content"
  title="Books"
  description="Frameworks, stories, and tools to help you collaborate and grow."
  />

  <section className="py-16 md:py-20">
  <Container>
   <div className="mx-auto max-w-[1100px] grid gap-4 lg:grid-cols-3">
   {BOOKS.map((b, idx) => (
    <RevealOnScroll key={b.title} delay={0.05 + idx * 0.04}>
    <Card className="flex h-full flex-col">
     <p className="text-lg font-semibold tracking-tight text-white">
     {b.title}
     </p>
     <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-[1.8]">
     {b.description}
     </p>
     <div className="mt-8">
     <Button href={b.amazonUrl} variant="outline" className="w-full">
      View on Amazon
     </Button>
     </div>
    </Card>
    </RevealOnScroll>
   ))}
   </div>
  </Container>
  </section>
 </main>
 );
}

