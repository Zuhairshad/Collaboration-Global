import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CONTENT_HUB } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function ContentPage() {
 return (
 <main>
  <PageHeader
  label="Content"
  title="Ideas that deepen connection."
  description={CONTENT_HUB.blog.description}
  />

  <section className="py-16 md:py-20">
  <Container>
   <div className="mx-auto max-w-[1100px] grid gap-4 lg:grid-cols-3">
   <RevealOnScroll>
    <Card className="flex h-full flex-col">
    <p className="text-sm font-semibold tracking-tight text-white">
     Podcast
    </p>
    <p className="mt-3 text-sm text-white/65">
     {CONTENT_HUB.podcast.name}
    </p>
    <div className="mt-8">
     <Button href="/content/podcast" variant="outline" className="w-full">
     Explore
     </Button>
    </div>
    </Card>
   </RevealOnScroll>

   <RevealOnScroll delay={0.05}>
    <Card className="flex h-full flex-col">
    <p className="text-sm font-semibold tracking-tight text-white">
     Publication
    </p>
    <p className="mt-3 text-sm text-white/65">
     {CONTENT_HUB.publication.name}
    </p>
    <div className="mt-8">
     <Button
     href="/content/publication"
     variant="outline"
     className="w-full"
     >
     Explore
     </Button>
    </div>
    </Card>
   </RevealOnScroll>

   <RevealOnScroll delay={0.1}>
    <Card className="flex h-full flex-col">
    <p className="text-sm font-semibold tracking-tight text-white">
     Books
    </p>
    <p className="mt-3 text-sm text-white/65">Frameworks and stories</p>
    <div className="mt-8">
     <Button href="/content/books" variant="outline" className="w-full">
     Explore
     </Button>
    </div>
    </Card>
   </RevealOnScroll>
   </div>

   <div className="mx-auto max-w-[1100px] mt-10 text-center">
   <Link
    href="/content/blog"
    className="text-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
   >
    Read the blog
   </Link>
   </div>
  </Container>
  </section>
 </main>
 );
}

