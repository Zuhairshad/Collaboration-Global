"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageBlock } from "@/components/media/ImageBlock";
import cgIcon from "@/public/icon.jpg";

type Msg = { id: number; from: "bot" | "user"; text: string };

const CONVERSATION: Msg[] = [
 { id: 1, from: "user", text: "What is Collaboration Global about?" },
 { id: 2, from: "bot", text: "We believe collaboration is humanity's superpower. We connect purpose-driven people to help them build something meaningful together." },
 { id: 3, from: "user", text: "What is the philosophy behind it?" },
 { id: 4, from: "bot", text: "Shifting the world from scarcity and fear to abundance and love. When people unite with shared values, extraordinary outcomes follow." },
 { id: 5, from: "user", text: "How many members are there?" },
 { id: 6, from: "bot", text: "An extended community of thousands across every continent, and growing every week. Each person brings something unique that makes the whole stronger." },
 { id: 7, from: "user", text: "What makes it different from networking?" },
 { id: 8, from: "bot", text: "We do not do surface-level networking. This is about deep trust, real collaboration, and building things that genuinely matter." },
 { id: 9, from: "user", text: "How does it work in practice?" },
 { id: 10, from: "bot", text: "Monthly sessions, shared projects, accountability groups, and a platform where members connect, learn, and grow every day." },
 { id: 11, from: "user", text: "Who founded it?" },
 { id: 12, from: "bot", text: "Gill Tiney, a TEDx speaker with 30 years in business, inspired by Buckminster Fuller to build a movement rooted in abundance." },
 { id: 13, from: "user", text: "Can anyone join?" },
 { id: 14, from: "bot", text: "Absolutely. If you believe in the power of working together and want to grow inside a values-led community, you belong here." },
];

const WORD_DELAY = 0.11; // seconds per word comfortable reading pace
const wordMs = (text: string) => text.split(" ").length * (WORD_DELAY * 1000) + 350;
const tween = { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const };

/**
 * CSS-only animations for the chat (opacity only, compositor friendly).
 * React 19 hoists and de-duplicates this <style> via href/precedence.
 * Everything pauses while the section is off-screen ([data-paused="true"]).
 */
const CHAT_CSS = `
@keyframes cg-word-in { from { opacity: 0 } to { opacity: 1 } }
@keyframes cg-dot { 0%, 100% { opacity: .3; transform: scale(.8) } 50% { opacity: 1; transform: scale(1.15) } }
@keyframes cg-pulse { 0%, 100% { opacity: 1 } 50% { opacity: .4 } }
.cg-word { opacity: 0; animation: cg-word-in .28s ease-out forwards; }
.cg-dot { animation: cg-dot .9s ease-in-out infinite; }
.cg-pulse { animation: cg-pulse 2s ease-in-out infinite; }
[data-paused="true"] .cg-dot, [data-paused="true"] .cg-pulse { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .cg-word { opacity: 1; animation: none; }
  .cg-dot, .cg-pulse { animation: none; }
}
`;

/* Word-by-word streaming text: plain spans with a staggered CSS opacity fade (no filter, no transforms) */
function StreamText({ text }: { text: string }) {
 const words = text.split(" ");
 return (
 <>
  {words.map((word, i) => (
  <span
   key={i}
   className="cg-word"
   style={{ animationDelay: `${(i * WORD_DELAY).toFixed(2)}s` }}
  >
   {word}
   {i < words.length - 1 ? " " : ""}
  </span>
  ))}
 </>
 );
}

function TypingBubble() {
 return (
 <motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, transition: { duration: 0.12 } }}
  transition={tween}
  className="flex items-end gap-2.5"
 >
  <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
  <Image src={cgIcon} alt="CG" width={28} height={28} className="h-full w-full object-cover" />
  </div>
  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#2a2420] px-4 py-3.5">
  {[0, 0.18, 0.36].map((delay, i) => (
   <span
   key={i}
   className="cg-dot block h-[7px] w-[7px] rounded-full bg-white/40"
   style={{ animationDelay: `${delay}s` }}
   />
  ))}
  </div>
 </motion.div>
 );
}

function Bubble({ msg }: { msg: Msg }) {
 const isBot = msg.from === "bot";
 return (
 <motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={tween}
  className={`flex items-end gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}
 >
  {isBot && (
  <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
   <Image src={cgIcon} alt="CG" width={28} height={28} className="h-full w-full object-cover" />
  </div>
  )}
  <div
  className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-[1.7] ${
   isBot
   ? "rounded-bl-md bg-[#2a2420] text-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
   : "bg-brand-gradient-soft rounded-br-md text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
  }`}
  >
  <StreamText text={msg.text} />
  </div>
 </motion.div>
 );
}

/** Precomputed script: [delay from start in ms, action]. */
type Step = [number, { typing: boolean } | { msg: Msg }];
function buildScript(): Step[] {
 const steps: Step[] = [];
 let t = 600;
 for (const msg of CONVERSATION) {
 if (msg.from === "bot") {
  steps.push([t, { typing: true }]);
  t += 1100;
  steps.push([t, { typing: false }]);
  t += 60;
  steps.push([t, { msg }]);
  t += wordMs(msg.text) + 900;
 } else {
  t += 800;
  steps.push([t, { msg }]);
  t += wordMs(msg.text) + 500;
 }
 }
 return steps;
}

export function Philosophy() {
 const [shown, setShown] = useState<Msg[]>([]);
 const [typing, setTyping] = useState(false);
 const [started, setStarted] = useState(false);
 const chatRef = useRef<HTMLDivElement>(null);
 const sectionRef = useRef<HTMLElement>(null);

 /* Start the chat once when ~25% visible; pause CSS loops while off-screen */
 useEffect(() => {
 const el = sectionRef.current;
 if (!el) return;
 const io = new IntersectionObserver(
  ([e]) => {
  el.dataset.paused = e.isIntersecting ? "false" : "true";
  if (e.isIntersecting && e.intersectionRatio >= 0.25) setStarted(true);
  },
  { threshold: [0, 0.25] },
 );
 io.observe(el);
 return () => io.disconnect();
 }, []);

 /* Run the script once (started never resets, so a finished chat stays finished).
    Every timer is tracked and cleared on cleanup. */
 useEffect(() => {
 if (!started) return;
 const timers = buildScript().map(([at, action]) =>
  setTimeout(() => {
  if ("msg" in action) setShown((p) => [...p, action.msg]);
  else setTyping(action.typing);
  }, at),
 );
 return () => timers.forEach(clearTimeout);
 }, [started]);

 /* Keep the newest message in view: instant scroll (smooth scrolling on every update janks on mobile) */
 useEffect(() => {
 const el = chatRef.current;
 if (!el) return;
 el.scrollTop = el.scrollHeight;
 }, [shown, typing]);

 return (
 <section
  ref={sectionRef}
  id="philosophy"
  className="bg-brand-gradient py-16 md:py-32"
 >
  <style href="cg-philosophy-chat" precedence="default">{CHAT_CSS}</style>
  <Container>
  {/* Heading */}
  <motion.div
   initial={{ opacity: 0, y: 24 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-60px" }}
   transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
   className="text-center"
  >
   <SectionLabel className="text-white">Philosophy</SectionLabel>
   <h2 className="mx-auto mt-4 max-w-[680px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
   From scarcity and fear<br />to abundance and love.
   </h2>
   <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-white">
   See how we think about collaboration, community, and what it means to build something that truly matters.
   </p>
  </motion.div>

  {/* Mobile enhancement layer block (outside the heading reveal so the photo shows immediately) */}
  <div className="mt-8 mb-2">
   <ImageBlock id="story-moment-3" variant="landscape" className="mx-auto" captionClassName="text-white border-white/50" />
  </div>

  {/* Chat widget */}
  <motion.div
   initial={{ opacity: 0, y: 24 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-40px" }}
   transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
   className="relative mx-auto mt-10 max-w-[520px] md:mt-16"
  >
   <div
   className="relative overflow-hidden rounded-[28px]"
   style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)" }}
   >
   {/* Header */}
   <div
    className="relative flex items-center gap-3 px-5 py-4"
    style={{ background: "linear-gradient(135deg, #241e18 0%, #2a2420 60%, #1e2e2a 100%)" }}
   >
    {/* macOS dots */}
    <div className="flex items-center gap-1.5 mr-1">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/20 shadow-lg">
    <Image src={cgIcon} alt="Collaboration Global" width={36} height={36} className="h-full w-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
    <p className="text-[13.5px] font-semibold leading-none text-white">Collaboration Global</p>
    <div className="mt-1 flex items-center gap-1.5">
     <span className="cg-pulse block h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)]" />
     <p className="text-[10.5px] text-[var(--brand-teal)] font-medium">Active now</p>
    </div>
    </div>
   </div>

   {/* Messages area */}
   <div
    ref={chatRef}
    className="flex h-[min(420px,60svh)] flex-col md:h-[420px] gap-3.5 overflow-y-auto px-4 py-5 scrollbar-hide"
    style={{ background: "#181410" }}
   >
    {/* Date separator */}
    <div className="flex items-center gap-3 py-1">
    <div className="h-px flex-1 bg-white/[0.06]" />
    <span className="text-[10px] font-medium text-white/60 uppercase tracking-widest">Today</span>
    <div className="h-px flex-1 bg-white/[0.06]" />
    </div>

    <AnimatePresence mode="sync">
    {shown.map((msg) => <Bubble key={msg.id} msg={msg} />)}
    {typing && <TypingBubble key="typing" />}
    </AnimatePresence>
   </div>

   {/* Input bar */}
   <div
    className="flex items-center gap-3 px-4 py-3.5 border-t border-white/[0.06]"
    style={{ background: "#1a1610" }}
   >
    <div className="flex flex-1 items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2.5 border border-white/[0.08]">
    <Smile className="h-4 w-4 shrink-0 text-white/25" />
    <span className="flex-1 text-[13px] text-white/55 select-none">Message...</span>
    </div>
    <button
    className="bg-brand-gradient-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
    tabIndex={-1}
    >
    <Send className="h-3.5 w-3.5 text-white" />
    </button>
   </div>
   </div>
  </motion.div>
  </Container>
 </section>
 );
}
