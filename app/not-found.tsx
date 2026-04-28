import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NotFound() {
 return (
 <main className="pt-32 pb-24">
  <Container>
  <div className="mx-auto max-w-[900px] text-center">
   <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50">
   404
   </p>
   <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
   Page not found.
   </h1>
   <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-white/70 md:text-lg md:leading-[1.8]">
   The page you’re looking for doesn’t exist but the movement does.
   </p>

   <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
   <Button href="/">Back home</Button>
   <Button href="/programs" variant="outline">
    Explore programs
   </Button>
   </div>

   <div className="mt-14">
   <Card className="mx-auto max-w-[720px] p-6 md:p-8">
    <p className="text-sm font-semibold tracking-tight text-white">
    Quick links
    </p>
    <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
    <Link className="text-white/70 hover:text-white" href="/about">
     About
    </Link>
    <Link className="text-white/70 hover:text-white" href="/impact">
     Impact
    </Link>
    <Link className="text-white/70 hover:text-white" href="/content">
     Content
    </Link>
    <Link className="text-white/70 hover:text-white" href="/contact">
     Contact
    </Link>
    </div>
   </Card>
   </div>
  </div>
  </Container>
 </main>
 );
}

