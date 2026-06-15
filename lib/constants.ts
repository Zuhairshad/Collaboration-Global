export const SITE_META = {
  name: "Collaboration Global",
  tagline: "Collaboration is humanity's superpower",
  description:
    "A global community built on connection, collaboration, and growth shifting from scarcity and fear to abundance and love.",
  url: "https://collaborationglobal.org",
  founder: "Gill Tiney",
  email: "team@collaborationglobal.org",
  phone: "+44(0)1279 437710",
} as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Collaborator Pro", href: "/programs/collaborator-pro" },
      { label: "Academy", href: "/programs/academy" },
      { label: "Community Sessions", href: "/programs/community-sessions" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "B1G1", href: "/impact/b1g1" },
      { label: "ORB", href: "/impact/orb" },
      { label: "The Love Foundation", href: "/impact/love-foundation" },
      { label: "World Mental Health Forum", href: "/impact/mental-health" },
      { label: "Arts & Culture Network", href: "/impact/arts-culture" },
      { label: "PinkSocks Life", href: "/impact/pinksocks" },
    ],
  },
  { label: "Blog", href: "/content/blog" },
  { label: "Events", href: "https://www.eventbrite.co.uk/e/collaboration-global-guest-session-online-tickets-192260726007?keep_tld=true" },
  { label: "Contact", href: "/contact" },
] as const satisfies NavLink[];

/** Reunion-style hero: metadata line, split headline, sponsor strip, intro, stats strip */
export const HERO = {
  /** Top line Reunion uses “Date · City”; we use movement + geography */
  metaLine: "United Kingdom · Global Community",
  headingLine1: "Collaboration is",
  headingLine2: "humanity's superpower.",
  /** Kept for SEO / fallbacks; main visual uses split lines above */
  heading: "Collaboration is humanity's superpower.",
  subheading:
    "Connect with purpose-driven people, create meaningful work together, and grow into who you're meant to be.",
  /** Paragraph under sponsor logos (Reunion: event one-liner) */
  intro:
    "Collaboration Global brings together purpose-driven leaders, creators, and collaborators for connection that turns into real projects and growth that lasts.",
  sponsorLabel: "Partners",
  /** Placeholder partner names until real logos are in /public */
  sponsorPlaceholders: ["Partner", "Partner", "Partner"] as const,
  primaryCTA: { label: "Join the Movement", href: "#cta" },
  secondaryCTA: { label: "Our Story", href: "/about" },
} as const;

/** Hero stats strip same pattern as Reunion (“10+ Demos · 1,000+ Attendees · …”) */
export const HERO_STATS_STRIP = [
  { value: "28+", label: "Countries" },
  { value: "500+", label: "Members" },
  { value: "10k+", label: "Impacts" },
  { value: "6+", label: "Years" },
] as const;

export const STATS = [
  { value: 28, suffix: "+", label: "Countries" },
  { value: 500, suffix: "+", label: "Members" },
  { value: 10000, suffix: "+", label: "Impacts" },
  { value: 6, suffix: "+", label: "Years" },
] as const;

export const PHILOSOPHY = {
  sectionLabel: "Philosophy",
  heading: "From scarcity & fear to abundance & love.",
  paragraphs: [
    "Collaboration Global exists to prove that connection beats competition and that we can build thriving businesses and lives together.",
    "Inspired by Buckminster Fuller, Gill founded this movement to help people shift out of fear-based thinking and into values-led, people-first growth.",
  ],
  quote: {
    text: "Never doubt that a group of committed citizens can change the world. Indeed it is the only thing that ever has.",
    attribution: "Margaret Mead",
  },
  blocks: [
    {
      title: "Purpose",
      text: "Create spaces where three or more people can come together to build something of significance.",
    },
    {
      title: "Vision",
      text: "A future where abundance is normal and collaboration becomes a daily practice.",
    },
    {
      title: "Method",
      text: "Connect → Collaborate → Grow supported by learning, accountability, and real community.",
    },
  ],
} as const;

export const WHO_ATTENDS = [
  {
    title: "Entrepreneurs & Founders",
    description: "Build your network, find co-founders, and grow a business through meaningful collaboration.",
  },
  {
    title: "Coaches & Consultants",
    description: "Expand your reach, share expertise, and create partnerships that amplify your impact.",
  },
  {
    title: "Creatives & Makers",
    description: "Find collaborators, get inspired, and turn creative ideas into real tangible projects.",
  },
  {
    title: "Community Leaders",
    description: "Connect with purpose-driven leaders building lasting impact in their communities.",
  },
  {
    title: "Academics & Researchers",
    description: "Bridge theory and practice with people who care about ideas, evidence, and truth.",
  },
  {
    title: "Change Makers",
    description: "Find your coalition, build the movement, and create change that actually sticks.",
  },
] as const;

export const PILLARS = [
  {
    number: "01",
    title: "Connect",
    punch: "Find your people.",
    description:
      "Meet purpose-driven humans across the world and build relationships that unlock opportunity.",
  },
  {
    number: "02",
    title: "Collaborate",
    punch: "Build what matters.",
    description:
      "Turn shared ideas into real projects creating value for collaborators and everyone they serve.",
  },
  {
    number: "03",
    title: "Grow",
    punch: "Become who you're meant to be.",
    description:
      "Learn, reflect, and stay accountable with support from a community that wants you to win.",
  },
] as const;

export type Offering = {
  tag: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted: boolean;
};

export const OFFERINGS = [
  {
    tag: "Start here",
    title: "Community Sessions",
    price: "Free",
    description:
      "A monthly meeting of minds and hearts. Join as a guest, meet the community, and explore what collaboration can unlock.",
    features: [
      "Monthly Zoom meeting",
      "Open to anyone",
      "Connect with members",
      "Eventbrite booking",
    ],
    cta: { label: "View Events", href: "/events" },
    highlighted: false,
  },
  {
    tag: "Learn & build",
    title: "Collaborator Academy",
    price: "£30 / month",
    description:
      "Short learning bursts, peer discussion, and accountability built for steady progress and deeper insight.",
    features: [
      "Recorded sessions library",
      "Q&A + discussions",
      "24/7 platform access",
      "Accountability groups",
      "Transformative conversations",
    ],
    cta: { label: "Join Academy", href: "https://collaborationglobal.mn.co/plans/213468" },
    highlighted: false,
  },
  {
    tag: "Full membership",
    title: "Collaborator Pro",
    price: "£50 / month",
    description:
      "Full community access to raise your profile, collaborate on projects, and get coaching support to help you follow through.",
    features: [
      "Profile + visibility boost",
      "Projects + collaborations",
      "Coaching support",
      "Member meetings",
      "Orientation + book included",
    ],
    cta: { label: "Join Pro", href: "https://collaborationglobal.mn.co/landing/" },
    highlighted: true,
  },
] as const satisfies readonly Offering[];

export type ImpactPartner = {
  name: string;
  description: string;
  url?: string;
};

export const IMPACT_PARTNERS = [
  {
    name: "B1G1",
    description:
      "Turning everyday business into global good. Every membership milestone triggers immediate, verified impact aligned with the UN Sustainable Development Goals. By embedding daily giving directly into our operational ecosystem, our global community collectively contributes to providing clean water, fundamental education, and critical environmental renewal programs across underserved regions worldwide.",
    url: "https://bit.ly/B1G1BusinessForGood",
  },
  {
    name: "Organisation for Responsible Businesses",
    description:
      "Championing values-led, ethical commerce. We empower leaders with dynamic frameworks to drive positive societal change and sustainable growth. Our shared advocacy ensures that modern enterprise actively moves away from purely transactional exploitation toward long-term corporate stewardship, prioritizing absolute integrity, fair operational practices, and continuous local community support.",
    url: "https://www.orbuk.org.uk/",
  },
  {
    name: "The Love Foundation",
    description:
      "Inspiring unconditional love since 2018. Our global alliance fosters deep human connections and empowers community-driven philanthropic initiatives. Together, we cultivate open-hearted spaces that actively dismantle systemic fear and scarcity, inspiring collaborative networks to lead with authentic vulnerability, deep mutual empathy, and expansive societal transformation.",
    url: "https://thelovefoundation.com",
  },
  {
    name: "World Mental Health Forum",
    description:
      "Breaking stigmas to build resilient minds. We join forces globally to elevate awareness, empower dedicated advocates, and create supportive environments for holistic well-being. Through strategic outreach, consistent community check-ins, and shared accessible educational resources, we foster inclusive dialogues that champion psychological safety and lasting mental health support.",
    url: "https://www.worldmentalhealthforum.com/",
  },
  {
    name: "Arts & Culture Network",
    description:
      "Uniting creators to ignite local movements. We connect visionary artists, pioneering directors, and cultural innovators to spark meaningful, community-wide collaboration. By bridging diverse artistic mediums, we facilitate dynamic international showcases, collaborative workshops, and shared interdisciplinary exhibitions that celebrate authentic human expression and community heritage.",
    url: "https://www.artsandculturenetwork.com/",
  },
  {
    name: "Pinksocks",
    description:
      "Spreading kindness through human-first moments. By sharing authentic stories and empathy, we create global ripples of positive energy and deep human connection. Wearing the signature pink socks serves as a universal invitation to see the absolute best in one another, turning daily encounters into spontaneous moments of gratitude, joy, and unconditional communal belonging.",
    url: "https://pinksocks.life/",
  },
] as const satisfies readonly ImpactPartner[];

export const SDGS_SUPPORTED = [2, 3, 4, 6, 10, 11, 16] as const;

export const FOUNDER = {
  name: "Gill Tiney",
  title: "Founder & Collaboration Catalyst",
  bio: "Gill is a speaker, author, entrepreneur, and coach with 30+ years in business. She helps people build collaboration skills that create lasting impact for business, community, and self.",
  credentials: [
    "TEDx Speaker",
    "Author of 3 Books",
    "30+ Years in Business",
    "iMATM Practitioner",
  ],
  tedxUrl: "https://www.youtube.com/watch?v=87REHnkNUMs&t=7s",
} as const;

export const BOOKS = [
  {
    title: "Together We Can Do Something Wonderful",
    description:
      "Gill’s core framework for true collaboration and the profiles, patterns, and practices that make it succeed. A guide to creating something of significance with others.",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    title: "Making of a Movement: The BeCollaboration Story",
    description:
      "The journey behind Collaboration Global from first spark to a living community. A story of the “why” that keeps the movement growing.",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    title: "STEP UP: From Desperation to Inspiration",
    description:
      "A practical book for small business owners ready to move from overwhelm into clarity and momentum. Tools for taking control and building the future you want.",
    amazonUrl: "https://www.amazon.com/",
  },
] as const;

export const CONTENT_HUB = {
  podcast: {
    name: "Being Human – Hidden Depths",
    url: "https://bit.ly/BeingHumanHiddenDepthsPodcast",
  },
  publication: {
    name: "The Quest",
    url: "https://issuu.com/collaborationglobal",
  },
  blog: {
    description:
      "Ideas, stories, and practical insights on connection, collaboration, and purposeful growth.",
  },
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Joining Collaboration Global completely shifted how I think about business. I stopped competing and started building with people and everything changed. Having direct access to global peers who prioritize collective well-being over isolated wins has been an absolute game-changer for my growth trajectory.",
    name: "Samantha Johnson",
    role: "Entrepreneur & Coach",
    avatar: "/avatars/samantha.png",
  },
  {
    quote:
      "The community here is unlike anything I've experienced. People genuinely want to see each other succeed it's rare and it's real. Every session provides deep tactical clarity alongside absolute authentic emotional safety, making it easy to share real challenges and find immediate support.",
    name: "Isabella Rodriguez",
    role: "Creative Director",
    avatar: "/avatars/isabella.png",
  },
  {
    quote:
      "I came as a guest to one session and never left. Within three months I had two new collaborators and a project I'm genuinely proud of. The structured methodology frameworks provide reliable systems for launching joint initiatives that deliver sustained community value.",
    name: "Gabrielle Williams",
    role: "Social Impact Consultant",
    avatar: "/avatars/gabrielle.png",
  },
  {
    quote:
      "Gill has created something truly special. The depth of connection in this community is extraordinary and it translates into real outcomes. We regularly exchange high-level strategic feedback that simply isn't accessible within conventional, overly transactional networking circles.",
    name: "Victoria Thompson",
    role: "Leadership Coach",
    avatar: "/avatars/victoria.png",
  },
  {
    quote:
      "The accountability and support I get from Collaborator Pro has done more for my business than any course or mastermind I've paid for. Consistently checking in with dedicated pods keeps my executive execution sharp while providing continuous spaces for mutual celebration.",
    name: "John Peter",
    role: "Founder, Tech Startup",
    avatar: "/avatars/john.png",
  },
  {
    quote:
      "Being part of a community that operates from abundance rather than scarcity has fundamentally changed how I show up in my work and life. Releasing persistent fear-based mental models has opened up massive avenues for continuous creative expression and authentic leadership.",
    name: "Natalie Martinez",
    role: "Author & Speaker",
    avatar: "/avatars/natalie.png",
  },
  {
    quote:
      "I've been in business for 20 years and never found a community this honest, warm, and genuinely collaborative. It's the real deal. Surrounding yourself with visionary leaders who challenge you to lead from absolute integrity elevates everyday strategic decision-making.",
    name: "Marcus Bennett",
    role: "Business Strategist",
    avatar: "/avatars/samantha.png",
  },
  {
    quote:
      "Within weeks of joining I had connected with people across five countries. The global reach of this community is extraordinary. Sharing interdisciplinary cross-border perspectives routinely challenges my local assumptions and uncovers rich, sustainable operational possibilities.",
    name: "Priya Sharma",
    role: "Global Project Manager",
    avatar: "/avatars/isabella.png",
  },
  {
    quote:
      "The sessions are always energising and full of ideas. I leave every meeting with new perspectives and someone new to connect with. Facilitating space where complete strangers seamlessly transition into verified allies speaks volumes about the movement's foundation.",
    name: "Daniel O'Brien",
    role: "Community Builder",
    avatar: "/avatars/gabrielle.png",
  },
  {
    quote:
      "Collaboration Global gave me the confidence to ask for support and the community actually showed up. That's priceless. Knowing you have an entire global family standing behind your mission provides foundational resilience during dynamic, high-stakes project launches.",
    name: "Aisha Okonkwo",
    role: "NGO Founder",
    avatar: "/avatars/victoria.png",
  },
  {
    quote:
      "I joined for networking and stayed for the transformation. The mindset shift alone has been worth every penny. Cultivating daily practices rooted in collective empowerment transforms standard client engagements into deep, long-term transformational partnerships.",
    name: "Tom Whitfield",
    role: "Executive Coach",
    avatar: "/avatars/john.png",
  },
  {
    quote:
      "There's an authenticity here that you don't find in most professional communities. People bring their whole selves and it makes all the difference. It provides the ultimate professional sanctuary where vulnerability is consistently rewarded with genuine mutual respect.",
    name: "Léa Fontaine",
    role: "Creative Entrepreneur",
    avatar: "/avatars/natalie.png",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What’s the difference between Academy and Pro?",
    answer:
      "Academy focuses on learning, discussion, and accountability. Pro includes full membership benefits such as higher visibility, collaboration opportunities, and coaching support.",
  },
  {
    question: "Are Community Sessions really free?",
    answer:
      "Yes. Community Sessions are open to anyone as a monthly guest event, usually booked via Eventbrite.",
  },
  {
    question: "Where does the community live?",
    answer:
      "The community is hosted on Mighty Networks, so you can connect, learn, and collaborate in one place.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Memberships are monthly and you can cancel whenever you need to.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a Community Session, explore Academy if you want structured learning, or join Pro if you want full support and collaboration opportunities.",
  },
  {
    question: "What should I expect in my first month?",
    answer:
      "Expect meaningful connections, clear next steps, and supportive accountability with plenty of space to contribute your expertise too.",
  },
] as const;

export const SOCIAL_LINKS = [
  { platform: "Twitter", url: "https://twitter.com/Coll_Global" },
  { platform: "Instagram", url: "https://instagram.com/collglobal/" },
  { platform: "Facebook", url: "https://facebook.com/groups/1474370782583321/" },
  {
    platform: "YouTube",
    url: "https://youtube.com/channel/UC85Cl3D1YAdslnsGPEnm4MQ",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/collaborationglobal",
  },
] as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Collaboration Global`,
  designerCredit: "Designed by Kay Westrap & Linda Burns",
} as const;

