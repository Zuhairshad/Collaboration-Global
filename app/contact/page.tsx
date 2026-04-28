import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SITE_META } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function ContactPage() {
 return (
 <main>
  <PageHeader
  label="Contact"
  title="Let’s connect."
  description="Ask a question, explore membership, or share an idea for collaboration."
  />

  <section className="py-16 md:py-20">
  <Container>
   <div className="mx-auto max-w-[1100px] grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
   <RevealOnScroll>
    <Card className="p-6 md:p-10">
    <p className="text-sm font-semibold tracking-tight text-white">
     Send a message
    </p>
    <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px] md:leading-[1.8]">
     This is a placeholder form. We’ll wire it to email / a form provider
     during the deployment checklist step.
    </p>

    <form className="mt-8 grid gap-3">
     <input
     className="h-12 rounded-xl border border-brand-border bg-black/30 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
     placeholder="Name"
     name="name"
     />
     <input
     className="h-12 rounded-xl border border-brand-border bg-black/30 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
     placeholder="Email"
     name="email"
     type="email"
     />
     <textarea
     className="min-h-32 rounded-xl border border-brand-border bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
     placeholder="Message"
     name="message"
     />
     <Button>Send</Button>
    </form>
    </Card>
   </RevealOnScroll>

   <RevealOnScroll delay={0.05}>
    <Card className="p-6 md:p-10">
    <p className="text-sm font-semibold tracking-tight text-white">
     Contact details
    </p>
    <div className="mt-6 space-y-3 text-sm text-white/70">
     <p>
     <span className="text-white/50">Email</span>
     <br />
     <a
      className="text-white/80 hover:text-white"
      href={`mailto:${SITE_META.email}`}
     >
      {SITE_META.email}
     </a>
     </p>
     <p>
     <span className="text-white/50">Phone</span>
     <br />
     <a
      className="text-white/80 hover:text-white"
      href={`tel:${SITE_META.phone.replace(/[^+\d]/g, "")}`}
     >
      {SITE_META.phone}
     </a>
     </p>
    </div>

    <div className="mt-10">
     <Button href="/events" variant="outline" className="w-full">
     Attend a free session
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

