"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Msg = { id: number; from: "bot" | "user"; text: string };

const CONVERSATION: Msg[] = [
 { id: 1, from: "user", text: "What is Collaboration Global about?" },
 { id: 2, from: "bot", text: "We believe collaboration is humanity's superpower. We connect purpose-driven people to help them build something meaningful together." },
 { id: 3, from: "user", text: "What is the philosophy behind it?" },
 { id: 4, from: "bot", text: "Shifting the world from scarcity and fear to abundance and love. When people unite with shared values, extraordinary outcomes follow." },
 { id: 5, from: "user", text: "How many members are there?" },
 { id: 6, from: "bot", text: "Over 500 members across 28 countries and growing every week. Each person brings something unique that makes the whole stronger." },
 { id: 7, from: "user", text: "What makes it different from networking?" },
 { id: 8, from: "bot", text: "We do not do surface-level networking. This is about deep trust, real collaboration, and building things that genuinely matter." },
 { id: 9, from: "user", text: "How does it work in practice?" },
 { id: 10, from: "bot", text: "Monthly sessions, shared projects, accountability groups, and a platform where members connect, learn, and grow every day." },
 { id: 11, from: "user", text: "Who founded it?" },
 { id: 12, from: "bot", text: "Gill Tiney, a TEDx speaker with 30 years in business, inspired by Buckminster Fuller to build a movement rooted in abundance." },
 { id: 13, from: "user", text: "Can anyone join?" },
 { id: 14, from: "bot", text: "Absolutely. If you believe in the power of working together and want to grow inside a values-led community, you belong here." },
];

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const WORD_DELAY = 0.11; // seconds per word comfortable reading pace
const wordMs = (text: string) => text.split(" ").length * (WORD_DELAY * 1000) + 350;
const spring = { type: "spring" as const, stiffness: 320, damping: 28 };

/* Word-by-word streaming text used for both sides */
function StreamText({ text }: { text: string }) {
 const words = text.split(" ");
 return (
 <>
  {words.map((word, i) => (
  <motion.span
   key={i}
   initial={{ opacity: 0, filter: "blur(5px)", y: 3 }}
   animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
   transition={{ delay: i * WORD_DELAY, duration: 0.28, ease: "easeOut" }}
  >
   {word}
   {i < words.length - 1 ? " " : ""}
  </motion.span>
  ))}
 </>
 );
}

function TypingBubble() {
 return (
 <motion.div
  initial={{ opacity: 0, y: 12, scale: 0.92 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.12 } }}
  transition={spring}
  className="flex items-end gap-2.5"
 >
  <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
  <Image src="/icon.png" alt="CG" width={28} height={28} className="h-full w-full object-cover" />
  </div>
  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#1e1e32] px-4 py-3.5">
  {[0, 0.18, 0.36].map((delay, i) => (
   <motion.span
   key={i}
   className="block h-[7px] w-[7px] rounded-full bg-white/40"
   animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
   transition={{ duration: 0.9, repeat: Infinity, delay, ease: "easeInOut" }}
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
  initial={{ opacity: 0, y: 20, scale: 0.93 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={spring}
  className={`flex items-end gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}
 >
  {isBot && (
  <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full ring-2 ring-white/10">
   <Image src="/icon.png" alt="CG" width={28} height={28} className="h-full w-full object-cover" />
  </div>
  )}
  <div
  className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-[1.7] ${
   isBot
   ? "rounded-bl-md bg-[#1e1e32] text-white/90"
   : "rounded-br-md text-white"
  }`}
  style={
   isBot
   ? { boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }
   : {
    background: "linear-gradient(135deg, #6B4FBE 0%, #2DC7B3 100%)",
    boxShadow: "0 2px 16px rgba(107,79,190,0.45)",
    }
  }
  >
  <StreamText text={msg.text} />
  </div>
 </motion.div>
 );
}

export function Philosophy() {
 const [shown, setShown] = useState<Msg[]>([]);
 const [typing, setTyping] = useState(false);
 const [runId, setRunId] = useState(0);
 const chatRef    = useRef<HTMLDivElement>(null);
 const sectionRef   = useRef<HTMLElement>(null);
 const inViewRef   = useRef(false);

 /* Restart whenever section enters the viewport */
 useEffect(() => {
 const el = sectionRef.current;
 if (!el) return;
 const io = new IntersectionObserver(
  ([e]) => {
  if (e.isIntersecting && !inViewRef.current) {
   inViewRef.current = true;
   setShown([]);
   setTyping(false);
   setRunId((n) => n + 1);
  } else if (!e.isIntersecting) {
   inViewRef.current = false;
  }
  },
  { threshold: 0.25 },
 );
 io.observe(el);
 return () => io.disconnect();
 }, []);

 useEffect(() => {
 if (runId === 0) return;
 let alive = true;

 (async () => {
  await sleep(600);
  for (const msg of CONVERSATION) {
  if (!alive) return;
  if (msg.from === "bot") {
   setTyping(true);
   await sleep(1100);
   if (!alive) return;
   setTyping(false);
   await sleep(60);
   setShown((p) => [...p, msg]);
   await sleep(wordMs(msg.text) + 900);
  } else {
   await sleep(800);
   if (!alive) return;
   setShown((p) => [...p, msg]);
   await sleep(wordMs(msg.text) + 500);
  }
  }
 })();

 return () => { alive = false; };
 }, [runId]);

 useEffect(() => {
 const el = chatRef.current;
 if (!el) return;
 el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
 }, [shown, typing]);

 return (
 <section
  ref={sectionRef}
  id="philosophy"
  className="py-24 md:py-32"
  style={{ background: "linear-gradient(135deg, #6B4FBE 0%, #4A3FA0 30%, #2E8B9A 65%, #2DC7B3 100%)" }}
 >
  <Container>
  {/* Heading */}
  <motion.div
   initial={{ opacity: 0, y: 24 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-60px" }}
   transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
   className="text-center"
  >
   <SectionLabel className="text-white/70">Philosophy</SectionLabel>
   <h2 className="mx-auto mt-4 max-w-[680px] text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
   From scarcity and fear<br />to abundance and love.
   </h2>
   <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-white/70">
   See how we think about collaboration, community, and what it means to build something that truly matters.
   </p>
  </motion.div>

  {/* Chat widget */}
  <motion.div
   initial={{ opacity: 0, y: 48, scale: 0.96 }}
   whileInView={{ opacity: 1, y: 0, scale: 1 }}
   viewport={{ once: true, margin: "-40px" }}
   transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
   className="relative mx-auto mt-16 max-w-[520px]"
  >
   {/* Glow behind widget */}
   <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-black/20 blur-2xl" />

   <div
   className="relative overflow-hidden rounded-[28px]"
   style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)" }}
   >
   {/* Header */}
   <div
    className="relative flex items-center gap-3 px-5 py-4"
    style={{ background: "linear-gradient(135deg, #1a0e2e 0%, #2d1654 60%, #1a2e2e 100%)" }}
   >
    {/* macOS dots */}
    <div className="flex items-center gap-1.5 mr-1">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/20 shadow-lg">
    <Image src="/icon.png" alt="Collaboration Global" width={36} height={36} className="h-full w-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
    <p className="text-[13.5px] font-semibold leading-none text-white">Collaboration Global</p>
    <div className="mt-1 flex items-center gap-1.5">
     <motion.span
     className="block h-1.5 w-1.5 rounded-full bg-emerald-400"
     animate={{ opacity: [1, 0.4, 1] }}
     transition={{ duration: 2, repeat: Infinity }}
     />
     <p className="text-[10.5px] text-emerald-400 font-medium">Active now</p>
    </div>
    </div>
   </div>

   {/* Messages area */}
   <div
    ref={chatRef}
    className="flex h-[420px] flex-col gap-3.5 overflow-y-auto px-4 py-5 scrollbar-hide"
    style={{ background: "#0c0c18" }}
   >
    {/* Date separator */}
    <div className="flex items-center gap-3 py-1">
    <div className="h-px flex-1 bg-white/[0.06]" />
    <span className="text-[10px] font-medium text-white/25 uppercase tracking-widest">Today</span>
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
    style={{ background: "#0e0e1c" }}
   >
    <div className="flex flex-1 items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2.5 border border-white/[0.08]">
    <Smile className="h-4 w-4 shrink-0 text-white/25" />
    <span className="flex-1 text-[13px] text-white/20 select-none">Message...</span>
    </div>
    <button
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
    style={{ background: "linear-gradient(135deg, #6B4FBE, #2DC7B3)" }}
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
