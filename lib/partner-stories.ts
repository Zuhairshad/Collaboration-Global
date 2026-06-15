/**
 * Per-partner narrative content for the impact storytelling pages.
 * Layout/template lives in components/sections/PartnerStory.tsx.
 */

export type PartnerStory = {
 slug: string;
 partnerName: string;
 partnerSince?: string;
 externalUrl?: string;

 // Section 1, hero
 heroHeadline: { lead: string; accent: string; tail?: string };
 heroParagraphs: string[];
 heroItalicLine: string;
 portraitImage: string;
 bannerImage?: string;
 bannerAlt?: string;
 bannerAspect?: string; // CSS aspect-ratio value, e.g. "666/510" or "2/3"
 bannerMaxWidth?: string; // CSS max-width on the banner column, e.g. "420px"
 primaryCta: { label: string; href: string };
 secondaryCta: { label: string; href: string };

 // Section 2, framing question
 questionIntro: string;
 question: { lead: string; accent: string };
 questionParagraphs: string[];
 videoBlock1: { thumb: string; youtubeId?: string; alt: string };

 // Section 3, how it works
 howTitle: string;
 howParagraphs: string[];
 videoBlock2: { thumb: string; youtubeId?: string; alt: string };

 // Section 4, tinted callout
 calloutHeadline: string;
 calloutLead: string;
 calloutBenefits: string[];

 // Section 5, dive deeper
 deeperTitle: string;
 deeperSubtitle: string;
 deeperParagraphs1: string[];
 deeperChecks: string[];
 deeperClosing: string;
 deeperCta: { label: string; href: string };
 collageImages: string[];
 collageTagline: string;

 // Section 6, closing
 closingHeadline: { lead: string; accent: string };
 closingBody: string;
 closingCta: { label: string; href: string };
};

const B1G1_VIDEO = "1ByzCR7jDrQ";

const SHARED_COLLAGE = [
 "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80&fit=crop",
 "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&fit=crop",
 "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop",
 "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&fit=crop",
];

export const PARTNER_STORIES: PartnerStory[] = [
 /* ────────── B1G1 ────────── */
 {
 slug: "b1g1",
 partnerName: "B1G1",
 partnerSince: "2019",
 externalUrl: "https://b1g1.com",

 heroHeadline: {
  lead: "Doing well in business and",
  accent: "doing good for the world",
  tail: "can be the same act.",
 },
 heroParagraphs: [
  "That conviction is at the heart of how Collaboration Global operates, and it’s why we’ve been proud B1G1 members since 2019.",
  "B1G1: Business For Good was founded in 2007 by Masami Sato in Singapore. It’s a B Corp-certified, 1% for the Planet partner that lets businesses turn everyday business into everyday impact, no campaigns, no annual cheque, just consistent giving baked into daily operations.",
  "Alongside 600+ Impact Partners worldwide, the community has helped create over 395 million giving impacts across 40+ countries, aligned to the UN Sustainable Development Goals.",
 ],
 heroItalicLine: "Turn everyday business into everyday impact.",
 portraitImage: "/gill-tedx.jpg",
 bannerImage: "/media/b1g1-banner.jpg",
 bannerAlt: "Collaboration Global × B1G1",
 bannerAspect: "1066/1600",
 bannerMaxWidth: "420px",
 primaryCta: {
  label: "See How It Works For Your Business",
  href: "https://b1g1.com",
 },
 secondaryCta: { label: "Join The Next Live Info Session", href: "/contact" },

 questionIntro:
  "The thing that first drew us to B1G1 wasn’t a programme or a membership card. It was the question underneath it all:",
 question: {
  lead: "Could the ordinary act of running a business",
  accent: "become a source of measurable good in the world?",
 },
 questionParagraphs: [
  "That question shifted everything about how we think about growth, contribution, and what business is for.",
  "The answer isn’t to do more, it’s to embed purpose into what you’re already doing. Every sale, every new member, every milestone becomes a moment of contribution.",
 ],
 videoBlock1: {
  thumb: "/media/b1g1-meeting.jpg",
  youtubeId: B1G1_VIDEO,
  alt: "B1G1 Business For Good meeting",
 },

 howTitle: "How it actually works",
 howParagraphs: [
  "The model is refreshingly straightforward. There are no audits to pass, no certifications to chase, no heavyweight process to adopt.",
  "You pick a project from B1G1’s catalogue of 450+ vetted high-impact initiatives, aligned to the UN Sustainable Development Goals. You attach it to a routine business activity, a new client, a deal closed, a birthday. Each occurrence triggers a giving impact, automatically. They call these Impact Activators.",
  "The result is a quiet, continuous flywheel: small contributions that compound into something far greater than any one-off gesture could be.",
 ],
 videoBlock2: {
  thumb: "/media/b1g1-cycling.avif",
  youtubeId: B1G1_VIDEO,
  alt: "B1G1 community giving campaign",
 },

 calloutHeadline:
  "Our partnership with B1G1 is about building a business that creates real value, for people, communities, and the long horizon ahead.",
 calloutLead:
  "That’s the reason we share this so openly. There’s something genuinely energising about watching members of our community step into the Business for Good movement and start writing their own impact story.",
 calloutBenefits: [
  "A welcome boost of impact tokens so your giving starts the day you sign up.",
  "Your account connected to ours, so we can track the impact we create together.",
  "A shared community of purpose-led founders walking the same path as you.",
  "Ongoing invitations to events, sessions, and conversations that keep the momentum alive.",
 ],

 deeperTitle: "Curious before you commit?",
 deeperSubtitle: "Jump into a live session with the Collaboration Global team.",
 deeperParagraphs1: [
  "We’ll walk you through how everyday operations can carry real impact, without rebuilding your business or adding more to your plate.",
  "You’ll meet founders from a range of industries who’ve woven this into their day-to-day, and you’ll see what changes for them when they do:",
 ],
 deeperChecks: [
  "A point of difference that customers actually feel",
  "A story their teams take pride in telling",
  "A renewed sense of meaning in the work itself",
 ],
 deeperClosing:
  "None of it relies on big claims or shiny badges. It works because it’s built into the steady habits of how a business already runs.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "Time to Rise",

 closingHeadline: {
  lead: "Already sold? We don’t blame you",
  accent: "we felt it too.",
 },
 closingBody:
  "If you’re ready to start, you can take the next step right now. Pick the membership that fits your business and turn your daily work into measurable global good, from day one.",
 closingCta: { label: "Get Started", href: "https://b1g1.com" },
 },

 /* ────────── ORB ────────── */
 {
 slug: "orb",
 partnerName: "Organisation for Responsible Businesses",
 partnerSince: "2008",
 externalUrl: "https://www.orbuk.org.uk",

 heroHeadline: {
  lead: "Ethics aren’t a marketing layer.",
  accent: "They’re the operating system",
  tail: "of a real business.",
 },
 heroParagraphs: [
  "ORB is the responsible business movement for solo, micro and small businesses, the 99% of the UK private sector that quietly carries communities, employs neighbours, and makes decisions that ripple far beyond their balance sheets.",
  "Founded in 2008 by Jill Poet and Mike Wilson, it’s a member-owned membership organisation for founders who choose People, Planet, Profit. In that order. Not as a slogan, but as a daily working principle.",
  "Members work through the Responsible Business Standard, sign the ORB Pledge, and join a community where kindness and integrity are the default culture.",
 ],
 heroItalicLine: "Let’s change the world, one small business at a time.",
 portraitImage: "/media/orb-founders.jpg",
 bannerImage: "/media/orb-members.png",
 bannerAlt: "ORB member community",
 bannerAspect: "2000/1600",
 primaryCta: { label: "Explore the ORB Standard", href: "https://www.orbuk.org.uk" },
 secondaryCta: { label: "Speak To Our Team", href: "/contact" },

 questionIntro:
  "Inside small and micro businesses sits one of the most overlooked questions in modern commerce:",
 question: {
  lead: "What does it actually look like when",
  accent: "ethics are non-negotiable, not optional?",
 },
 questionParagraphs: [
  "ORB’s answer is structural. A validated Standard. Peer accountability. A public pledge that customers can read. A community that pushes back when someone drifts.",
  "It’s the difference between performing values and operating from them, and you can feel the gap a mile off.",
 ],
 videoBlock1: {
  thumb: "/media/orb-members.png",
  alt: "ORB community of responsible business owners",
 },

 howTitle: "How membership works",
 howParagraphs: [
  "Members work through the Responsible Business Standard, an ESG-aligned framework validated by Anglia Ruskin University in 2011, covering six areas: Workplace, Environment, Community, Marketplace, Ethics Values & Transparency, and Business Processes.",
  "They then sign the ORB Pledge, a public commitment to the standards ORB has been shaping since 2008.",
  "From there, the work is peer-led. Members support each other, share what’s working, and create an environment where ethical shortcuts have nowhere to hide.",
 ],
 videoBlock2: {
  thumb: "/media/orb-founders.jpg",
  alt: "ORB founders Jill Poet and Mike Wilson",
 },

 calloutHeadline:
  "ORB exists to prove that the smallest businesses can be the most principled, and the most resilient.",
 calloutLead:
  "Our partnership with ORB reflects a belief Collaboration Global was built on: that values-driven companies don’t just survive, they outlast their louder competitors.",
 calloutBenefits: [
  "The Responsible Business Standard, an ESG-aligned framework validated by Anglia Ruskin University.",
  "The ORB Pledge, a public commitment customers and employees can actually verify.",
  "A member-owned community of solo, micro and small businesses built around kindness and integrity.",
  "Peer support, shared learning, and a public mark of what you stand for.",
 ],

 deeperTitle: "Want to see the Standard up close?",
 deeperSubtitle: "Sit in on an ORB session via Collaboration Global.",
 deeperParagraphs1: [
  "We’ll walk you through what membership demands, what it gives back, and how ORB-aligned businesses show up differently in their markets.",
  "You’ll hear from founders who’ve built their reputation on these principles, and seen what it does for retention, talent, and pricing power:",
 ],
 deeperChecks: [
  "Customers who choose you for what you stand for, not just what you sell",
  "Employees who recruit their friends because the work means something",
  "A pricing conversation grounded in trust, not race-to-the-bottom",
 ],
 deeperClosing:
  "ORB isn’t a badge you pin on. It’s a discipline you build, quietly, repeatedly, and in public.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "People · Planet · Profit · In That Order",

 closingHeadline: {
  lead: "Ready to take the pledge?",
  accent: "We’ll walk it with you.",
 },
 closingBody:
  "Whether you’re years into ethical practice or just beginning to put structure around it, ORB membership through Collaboration Global gives you a community, a Standard, and a public mark of what you stand for.",
 closingCta: { label: "Begin With ORB", href: "https://www.orbuk.org.uk" },
 },

 /* ────────── Love Foundation ────────── */
 {
 slug: "love-foundation",
 partnerName: "The Love Foundation",
 partnerSince: "2018",
 externalUrl: "https://thelovefoundation.com",

 heroHeadline: {
  lead: "Love isn’t a sentiment.",
  accent: "It’s a daily practice",
  tail: "with measurable consequences.",
 },
 heroParagraphs: [
  "The Love Foundation was founded in 2000 with one organising idea: that unconditional love, practiced, not preached, is the most underrated catalyst for personal and collective change.",
  "Twenty-five years on, that idea anchors Global Love Day, a non-sectarian celebration observed across 190+ countries every 1st of May.",
  "The work is quietly radical: educational programmes, community partnerships, and frameworks that turn love from an abstract value into an everyday practice.",
 ],
 heroItalicLine: "Begin within. Everything else follows.",
 portraitImage: "/gill-tedx.jpg",
 primaryCta: {
  label: "Discover Global Love Day",
  href: "https://thelovefoundation.com",
 },
 secondaryCta: { label: "Join A Live Session", href: "/contact" },

 questionIntro:
  "The Foundation’s philosophy turns on a question most strategy decks never get near:",
 question: {
  lead: "What changes when you make decisions",
  accent: "from love instead of from fear?",
 },
 questionParagraphs: [
  "Neuroscience, ironically, has spent decades arriving at the same answer the Foundation has been offering all along: love-led decisions produce more durable outcomes, in families, classrooms, boardrooms, and communities.",
  "Collaboration Global partnered with The Love Foundation because the work of building real collaboration begins exactly here.",
 ],
 videoBlock1: {
  thumb:
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80&fit=crop",
  alt: "Global Love Day gathering",
 },

 howTitle: "How the work spreads",
 howParagraphs: [
  "An international network of ambassadors and coordinators carries the message into local contexts, classrooms, prisons, hospitals, councils, businesses.",
  "Programmes are deliberately non-sectarian, designed to land in any culture and meet people exactly where they are.",
  "Global Love Day is the heartbeat, a worldwide moment of synchronised intent, but the operating model is the daily, quieter work that happens 365 days a year.",
 ],
 videoBlock2: {
  thumb:
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&fit=crop",
  alt: "Community connection",
 },

 calloutHeadline:
  "When love stops being a sentiment and becomes a habit, every other system around it starts behaving differently.",
 calloutLead:
  "That’s the territory the Foundation has been mapping for 25 years, and it’s the foundation Collaboration Global is built on.",
 calloutBenefits: [
  "Practical frameworks for love-based decision-making in business and life.",
  "Access to a global network active in more than 190 countries.",
  "Educational resources grounded in 25+ years of advocacy and research.",
  "An invitation to be part of Global Love Day every May 1st.",
 ],

 deeperTitle: "Want to feel it in practice?",
 deeperSubtitle: "Spend an evening with our community.",
 deeperParagraphs1: [
  "We host conversations where the philosophy comes alive in real, practical ways, leadership, parenting, conflict, creative work.",
  "You’ll meet people who’ve put this principle to work and seen real shifts:",
 ],
 deeperChecks: [
  "Teams that stop performing trust and start operating from it",
  "Conversations that go further in 30 minutes than they used to in months",
  "A reorientation of what you measure success by",
 ],
 deeperClosing:
  "It isn’t mystical. It’s repeatable. And once it’s installed, you can feel its absence anywhere it’s missing.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "Love in Action",

 closingHeadline: {
  lead: "Ready to start within?",
  accent: "Everything else follows.",
 },
 closingBody:
  "Step into the work the Foundation has been carrying for 25 years, and bring it into the way you lead, build, and connect.",
 closingCta: { label: "Begin Here", href: "https://thelovefoundation.com" },
 },

 /* ────────── World Mental Health Forum ────────── */
 {
 slug: "mental-health",
 partnerName: "World Mental Health Forum",
 externalUrl: "https://www.worldmentalhealthforum.com",

 heroHeadline: {
  lead: "Public mental health and wellbeing",
  accent: "concerns us all.",
 },
 heroParagraphs: [
  "Depression and anxiety cost the global economy an estimated US$1 trillion a year in lost productivity (WHO). The cost of silence, isolation, and untreated distress sits underneath it.",
  "The World Mental Health Forum is a 100% volunteer-run initiative founded by Harald Walter Azmann and Margot Azmann, built to move public conversation past awareness and into outreach, listening, and lasting connection.",
  "Their work centres on listening with the intent to be there, on presence rather than problem-solving, and on the peer connection that catches people before crisis.",
 ],
 heroItalicLine: "Caught early, almost everything is more solvable.",
 portraitImage: "/media/wmhf-founder.jpeg",
 bannerImage: "/media/wmhf-hero.jpg",
 bannerAlt: "World Mental Health Forum 2024 — It’s Not Your Fault",
 bannerAspect: "16/9",
 primaryCta: { label: "Visit the Forum", href: "https://www.worldmentalhealthforum.com" },
 secondaryCta: { label: "Speak To Our Team", href: "/contact" },

 questionIntro:
  "The Forum was founded on a deliberately uncomfortable question:",
 question: {
  lead: "What would it take for mental wellbeing",
  accent: "to be treated as seriously as physical wellbeing?",
 },
 questionParagraphs: [
  "Not awareness ribbons. Not corporate slogans. Real human contact, the kind that catches a struggling colleague before crisis, the kind that teaches a community what to listen for.",
  "Collaboration Global partnered with the Forum because the connective fabric we work to build is precisely what protects people.",
 ],
 videoBlock1: {
  thumb: "/media/wmhf-event-1.jpg",
  alt: "World Mental Health Forum gathering",
 },

 howTitle: "How the Forum shows up",
 howParagraphs: [
  "Annual gathering: each year between 3–10 October the Forum hosts an international gathering in a rotating host city, including Beacon | The Power of One (London, October 2023, Westminster Chapel) and the 2024 edition in the USA.",
  "Listening with presence: trauma-aware conversation practised in workshops and meet-ups, so peers can hold space without making things worse.",
  "Peer connection: a volunteer-led network that multiplies touchpoints far beyond what professional services could ever scale to alone.",
 ],
 videoBlock2: {
  thumb: "/media/wmhf-collage.png",
  alt: "World Mental Health Forum community",
 },

 calloutHeadline:
  "Mental wellness is the substrate under every collaboration we’ve ever helped build.",
 calloutLead:
  "Healthy minds make healthy partnerships, healthy companies, healthy communities. The Forum’s work isn’t adjacent to ours, it’s underneath it.",
 calloutBenefits: [
  "An annual gathering each October you can attend, host, or contribute to.",
  "A volunteer-led peer model designed to scale where professional services can’t.",
  "A library of conversations on listening, presence, and early-warning support.",
  "Advocacy for treating mental wellbeing as a shared public concern, not a private burden.",
 ],

 deeperTitle: "Want to see the work in motion?",
 deeperSubtitle: "Join a Collaboration Global wellbeing session.",
 deeperParagraphs1: [
  "We host sessions where Forum voices walk through the work, share what they’re seeing on the ground, and equip leaders with practical conversation tools.",
  "You’ll leave with material you can actually use this week:",
 ],
 deeperChecks: [
  "A listening pattern you can teach to a team in 20 minutes",
  "Early-warning signals you can notice in a 1:1 next week",
  "Language for raising wellbeing without sounding performative",
 ],
 deeperClosing:
  "This isn’t self-care branding. It’s the slow, structural work of building communities that hold up under pressure.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "Listen · Be Present · Stay Connected",

 closingHeadline: {
  lead: "Ready to put this into practice?",
  accent: "Let’s start the conversation.",
 },
 closingBody:
  "Whether you want to attend the annual gathering, bring the Forum’s work into your community, or simply learn to listen better, Collaboration Global can connect you to the people behind it.",
 closingCta: { label: "Get In Touch", href: "/contact" },
 },

 /* ────────── Arts & Culture Network ────────── */
 {
 slug: "arts-culture",
 partnerName: "Arts & Culture Network",
 externalUrl: "https://www.artsandculturenetwork.com",

 heroHeadline: {
  lead: "Grow your career, clients & creative impact,",
  accent: "globally, connected and supported.",
 },
 heroParagraphs: [
  "The Arts & Culture Network connects over 180,000 professionals across performing arts, visual arts, fine art, literary arts, dance, music, galleries, and museums.",
  "It exists because the creative industries are paradoxically both one of the fastest-growing economic sectors and one of the most isolating professional environments.",
  "The Network’s answer is structural: Speed Introductions, member matchmaking sessions, a members-only directory, and an active community where cross-disciplinary collaboration is the default.",
 ],
 heroItalicLine: "Build a creative career you can actually live on.",
 portraitImage: "/media/acn-testimonial.jpeg",
 bannerImage: "/media/acn-event.jpg",
 bannerAlt: "Arts & Culture Network event at The RSA, London",
 bannerAspect: "988/985",
 primaryCta: { label: "Explore Membership", href: "https://www.artsandculturenetwork.com" },
 secondaryCta: { label: "Join A Live Session", href: "/contact" },

 questionIntro:
  "Inside every creative practice sits a question that polite networking events rarely ask out loud:",
 question: {
  lead: "Can creative people earn sustainably",
  accent: "without compromising the work?",
 },
 questionParagraphs: [
  "The Network’s answer is that collaboration, not competition, is the only path that scales. Artists, curators, writers, and producers who pool reach, resources, and reputation outperform those who fight for the same scraps alone.",
  "Collaboration Global partnered with the Network because the principle is identical: connection is leverage. Gill Tiney is featured on the Network’s own team page, the partnership runs in both directions.",
 ],
 videoBlock1: {
  thumb: "/media/acn-landscape-1.jpg",
  alt: "Arts & Culture Network community",
 },

 howTitle: "How the Network creates opportunities",
 howParagraphs: [
  "Speed Introductions: a 30-minute Zoom round held regularly, where members meet new peers and book follow-ups the same week.",
  "Member matchmaking sessions: curated introductions to professionals chosen for your specific career goals, run by the Network team.",
  "Face-to-face events in London at the Royal Society of Arts, plus a members-only directory, Museletter, and feature opportunities in ART Magazine.",
 ],
 videoBlock2: {
  thumb: "/media/acn-landscape-2.jpg",
  alt: "Arts & Culture Network event moment",
 },

 calloutHeadline:
  "When creative people stop competing and start collaborating, the work, and the careers behind it, both expand.",
 calloutLead:
  "That principle is why Collaboration Global has supported the Network: we share a belief that the future of creative practice is networked, not solitary.",
 calloutBenefits: [
  "Direct introductions to professionals across disciplines and continents.",
  "Curated matchmaking sessions tailored to your career goals.",
  "A members-only directory with enhanced visibility to industry buyers.",
  "RSA House events in London, the Museletter, and feature opportunities in ART Magazine.",
 ],

 deeperTitle: "Want to feel the difference?",
 deeperSubtitle: "Join one Speed Introductions round and see what happens.",
 deeperParagraphs1: [
  "We host taster sessions where you can experience the Network format firsthand, short, sharp introductions, real follow-ups, real outcomes.",
  "Members tell us they leave these sessions with:",
 ],
 deeperChecks: [
  "Two or three serious leads they can follow up on the same week",
  "A clearer sense of where their work fits the market",
  "A peer group that holds them to a bigger version of their practice",
 ],
 deeperClosing:
  "Creative careers aren’t lottery tickets. They’re built, slowly, deliberately, and almost always with other people.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "Globally · Connected · Supported",

 closingHeadline: {
  lead: "Ready to widen your circle?",
  accent: "Step into the Network.",
 },
 closingBody:
  "Whether you’re a curator, producer, gallerist, dancer, musician, or writer, the Arts & Culture Network puts you in the room with peers who treat collaboration as professional infrastructure.",
 closingCta: { label: "Join The Network", href: "https://www.artsandculturenetwork.com" },
 },

 /* ────────── Pink Socks ────────── */
 {
 slug: "pinksocks",
 partnerName: "PinkSocks Life",
 partnerSince: "2015",
 externalUrl: "https://pinksocks.life",

 heroHeadline: {
  lead: "Kindness & connection,",
  accent: "one pair of pink socks",
  tail: "at a time.",
 },
 heroParagraphs: [
  "PinkSocks started with a small gesture, gifting a pair of bright pink socks with black handlebar mustaches, and a quiet observation: when you wear something unexpected, strangers talk to you differently.",
  "Founder Nick first gifted socks at Burning Man in 2010, then watched the gesture detonate at a 2015 healthcare conference in Chicago, where 40,000 attendees turned a fun idea into a global movement.",
  "Today PinkSocks Life is a registered 501(c)(3) nonprofit with 300,000+ smiley people across the world, schools in nine US states, and a community built on heart speak, hugs, and gifting.",
 ],
 heroItalicLine: "The world is full of good.",
 portraitImage: "/media/pinksocks-heart.jpg",
 bannerImage: "/media/pinksocks-meetup.jpg",
 bannerAlt: "PinkSocks Life meetup",
 bannerAspect: "1179/660",
 primaryCta: { label: "Get The Story", href: "https://pinksocks.life" },
 secondaryCta: { label: "Speak To Our Team", href: "/contact" },

 questionIntro:
  "PinkSocks is built on an almost embarrassingly simple question:",
 question: {
  lead: "What if the best tool for human connection",
  accent: "didn’t need an app, a platform, or a pitch?",
 },
 questionParagraphs: [
  "The genius of PinkSocks is that it lowers the cost of being approachable to almost nothing. No membership, no framework, no jargon. Just a visible signal that says: I’m here. I’m open.",
  "Collaboration Global believes the same thing about connection, that most of it is gated by social friction, not by lack of intent.",
 ],
 videoBlock1: {
  thumb: "/media/pinksocks-meetup.jpg",
  alt: "PinkSocks community gathering",
 },

 howTitle: "How a pair of socks changes a room",
 howParagraphs: [
  "The movement has been particularly transformative in healthcare, where hierarchical barriers between doctors, nurses, patients, and administrators usually run deep.",
  "PinkSocks creates a horizontal moment in a vertical room, a single visible thing that resets the social contract for thirty seconds and opens the door to a real conversation.",
  "From there, the work is everyone else’s. The pillars are simple: heart speak, hugs, and gifting. The socks don’t do the connecting; they just make it possible.",
 ],
 videoBlock2: {
  thumb: "/media/pinksocks-heart.jpg",
  alt: "PinkSocks heart and gifting",
 },

 calloutHeadline:
  "The simplest tools for human connection turn out to be the most powerful, and the easiest to ignore.",
 calloutLead:
  "Collaboration Global aligned with PinkSocks because the principle holds across every collaboration we’ve ever helped build: lower the activation energy, and humans will do the rest.",
 calloutBenefits: [
  "Zero-barrier entry, no app, no membership, no learning curve.",
  "A 501(c)(3) nonprofit with 300,000+ community members worldwide.",
  "A growing US kindness curriculum across 30+ schools in nine states.",
  "Three pillars anyone can practise today: heart speak, hugs, and gifting.",
 ],

 deeperTitle: "Want to feel how it works?",
 deeperSubtitle: "Come to a Collaboration Global event wearing pink socks.",
 deeperParagraphs1: [
  "It sounds like a joke. It isn’t. The number of conversations that start at our events because someone noticed someone else’s socks would surprise you.",
  "You’ll see what happens when the social cost of connection drops:",
 ],
 deeperChecks: [
  "Conversations that would never have happened, happening",
  "Strangers swapping ideas they’d normally keep to themselves",
  "A room that warms up about 40% faster than it would otherwise",
 ],
 deeperClosing:
  "Not every solution needs to be sophisticated. Sometimes it just needs to be visible, and a little bit weird.",
 deeperCta: { label: "Save My Seat", href: "/contact" },
 collageImages: SHARED_COLLAGE,
 collageTagline: "Heart Speak · Hugs · Gifting",

 closingHeadline: {
  lead: "Ready to be the first to connect?",
  accent: "Put the socks on.",
 },
 closingBody:
  "The movement is open, free, and global. Find your way in via PinkSocks directly, or come to a Collaboration Global event and we’ll introduce you to the community.",
 closingCta: { label: "Join The Movement", href: "https://pinksocks.life" },
 },
];

export function getPartnerStory(slug: string): PartnerStory | undefined {
 return PARTNER_STORIES.find((p) => p.slug === slug);
}
