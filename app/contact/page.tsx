"use client";

import { useState, useEffect, useTransition } from "react";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";
import { SITE_META, SOCIAL_LINKS } from "@/lib/constants";
import { sendContactEmail, type ContactResult } from "./actions";

const SOCIAL_SVGS: Record<string, React.ReactNode> = {
  Twitter: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  Instagram: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  Facebook: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  YouTube: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  LinkedIn: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
};

const inputCls =
  "w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-colors";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ContactResult | null>(null);

  /* ── Math captcha — initialized client-side only to avoid SSR mismatch ── */
  const [captcha, setCaptcha] = useState<{ a: number; b: number } | null>(null);
  useEffect(() => {
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
  }, []);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  /* ── Newsletter ── */
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captcha || parseInt(captchaInput, 10) !== captcha.a + captcha.b) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await sendContactEmail(null, formData);
      setResult(res);
    });
  }

  return (
    <main>
      <PageHeader
        label="Contact"
        title="Let's connect."
        description="Ask a question, explore membership, or share an idea for collaboration."
        className="[background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]"
      />

      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[1100px] grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            {/* ── Contact form ── */}
            <RevealOnScroll>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
                <p className="text-sm font-semibold tracking-tight text-gray-900">Email Us</p>

                {result?.success ? (
                  <div className="mt-8 flex flex-col items-center gap-3 py-12 text-center">
                    <CheckCircle className="h-10 w-10 text-brand-teal" />
                    <p className="font-medium text-gray-900">Message sent!</p>
                    <p className="text-sm text-gray-500">We'll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="mt-6 grid gap-3">
                    {result && !result.success && (
                      <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {result.error}
                      </div>
                    )}

                    <input
                      className={cn(inputCls, "h-12")}
                      placeholder="Name"
                      name="name"
                      required
                    />
                    <input
                      className={cn(inputCls, "h-12")}
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      required
                    />
                    <textarea
                      className={cn(inputCls, "min-h-32 py-3")}
                      placeholder="Message"
                      name="message"
                      required
                    />

                    {/* Math captcha — only rendered after client mount */}
                    {captcha && (
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-500">
                        Spam check: {captcha.a} + {captcha.b} = ?
                      </label>
                      <input
                        className={cn(
                          inputCls,
                          "h-12 w-32",
                          captchaError && "border-red-400 focus:ring-red-200",
                        )}
                        placeholder="Answer"
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          setCaptchaError(false);
                        }}
                        required
                      />
                      {captchaError && (
                        <p className="mt-1 text-xs text-red-500">Incorrect — try again.</p>
                      )}
                    </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isPending}
                      variant="accent"
                      className="mt-1 gap-2 normal-case tracking-normal text-sm"
                    >
                      {isPending ? "Sending…" : "Send Message"}
                      <Send className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                    </Button>
                  </form>
                )}
              </div>
            </RevealOnScroll>

            {/* ── Right column ── */}
            <div className="space-y-4">

              {/* Contact details */}
              <RevealOnScroll delay={0.05}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm font-semibold tracking-tight text-gray-900">Contact Details</p>
                  <div className="mt-6 space-y-4">
                    <a
                      href={`tel:${SITE_META.phone.replace(/[^+\d]/g, "")}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-colors group-hover:bg-brand-purple/20">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                        <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          {SITE_META.phone}
                        </p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${SITE_META.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition-colors group-hover:bg-brand-teal/20">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Email</p>
                        <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          {SITE_META.email}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Social links */}
              <RevealOnScroll delay={0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm font-semibold tracking-tight text-gray-900">Let's Get Social</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.platform}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-brand-purple hover:bg-brand-purple/5 hover:text-brand-purple"
                      >
                        {SOCIAL_SVGS[s.platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Newsletter */}
              <RevealOnScroll delay={0.15}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm font-semibold tracking-tight text-gray-900">
                    Subscribe for Event Updates
                  </p>
                  <p className="mt-1.5 text-sm text-gray-500">
                    Stay in the loop on upcoming events and community sessions.
                  </p>
                  {newsletterDone ? (
                    <p className="mt-4 flex items-center gap-2 text-sm text-brand-teal">
                      <CheckCircle className="h-4 w-4" /> You're subscribed!
                    </p>
                  ) : (
                    <form
                      className="mt-4 flex gap-2"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (newsletterEmail) setNewsletterDone(true);
                      }}
                    >
                      <input
                        className={cn(inputCls, "h-11 flex-1")}
                        placeholder="Your email"
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                      />
                      <Button
                        type="submit"
                        variant="accent"
                        className="shrink-0 text-sm normal-case tracking-normal"
                      >
                        Subscribe
                      </Button>
                    </form>
                  )}
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
