export type ImpactItem = {
 id: string;
 title: string;
 subtitle: string;
 type: "video" | "case-study";
 /** YouTube embed ID (only for type === "video") */
 youtubeId?: string;
 /** Unsplash / static image URL (for case-study banners) */
 image?: string;
 description: string;
 details: string;
 /** Key stats to display in the content panel */
 stats?: { label: string; value: string }[];
 /** Highlight bullets for the deep dive section */
 highlights?: string[];
 /** External link */
 url?: string;
};

export const GLOBAL_IMPACT_DATA: ImpactItem[] = [
 {
 id: "b1g1",
 title: "B1G1: Business for Good",
 subtitle: "Turning everyday business actions into global impact",
 type: "video",
 youtubeId: "1ByzCR7jDrQ",
 image:
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80&fit=crop",
 description:
  "B1G1 enables businesses to embed giving into daily operations, creating measurable impact across essential human needs. Rather than writing one cheque a year, B1G1 turns every sale, every meeting, every milestone into a moment of giving, connecting business activity directly to real-world outcomes.",
 details:
  "Founded in 2007, B1G1 has facilitated over 380 million giving impacts across 30+ countries. The model is simple but transformative: businesses choose from 600+ high-impact projects aligned with the UN Sustainable Development Goals, then create 'giving stories' that link specific business activities to specific impacts. A coffee shop might give a day of clean water for every coffee sold. A consultant might plant a tree for every new client onboarded. This isn't charity, it's embedded purpose. The result is a business ecosystem where growth automatically generates positive externalities, creating a flywheel of commercial success and social good. Collaboration Global has been a B1G1 member since 2019, meaning every membership, every session, and every collaboration directly contributes to measurable global impact.",
 stats: [
  { label: "Giving Impacts", value: "380M+" },
  { label: "Countries Reached", value: "30+" },
  { label: "SDG Projects", value: "600+" },
  { label: "Partner Since", value: "2019" },
 ],
 highlights: [
  "Every business action becomes a giving moment: sales, meetings, milestones",
  "600+ curated projects aligned with UN Sustainable Development Goals",
  "Micro-giving model where small, consistent impacts compound into massive change",
  "Transparent tracking: every impact is measured, reported, and verifiable",
  "Transforms the narrative from 'profit vs. purpose' to 'profit through purpose'",
 ],
 url: "https://b1g1.com",
 },
 {
 id: "orb",
 title: "Organisation for Responsible Businesses",
 subtitle: "Building ethical and sustainable businesses",
 type: "case-study",
 image:
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&fit=crop",
 description:
  "ORB supports businesses in aligning profit with responsibility through ethical practices, structured accountability, and a community of like-minded leaders. In a world saturated with performative 'purpose marketing,' ORB provides the framework for genuine, verifiable ethical business practice.",
 details:
  "The Organisation for Responsible Businesses operates on a simple but powerful premise: ethics shouldn't be an afterthought or a marketing strategy. It should be baked into how a business operates at every level. Members go through a structured onboarding process that examines their supply chains, employment practices, environmental footprint, and community engagement. They then make a public pledge that holds them accountable to specific ethical standards. What makes ORB particularly effective is its peer accountability model. Members review each other's practices, share best approaches, and create a culture where cutting corners on ethics isn't just discouraged, it's structurally impossible. The network acts as both a certification body and a support system, helping businesses navigate the genuine complexities of operating ethically in a competitive marketplace. For Collaboration Global, the partnership with ORB reinforces a core belief: that businesses built on values don't just survive, they thrive, attract better talent, and create lasting customer loyalty.",
 stats: [
  { label: "Member Businesses", value: "200+" },
  { label: "Ethical Pledges", value: "100%" },
  { label: "Industries Covered", value: "25+" },
  { label: "Retention Rate", value: "94%" },
 ],
 highlights: [
  "Structured ethical onboarding, not just a badge, but a genuine audit",
  "Peer accountability model prevents superficial 'purpose washing'",
  "Public pledge system creates transparent, verifiable commitment",
  "Cross-industry knowledge sharing on sustainable business practices",
  "Bridges the gap between aspiration and action for responsible businesses",
 ],
 url: "https://www.orbuk.org.uk",
 },
 {
 id: "love-foundation",
 title: "The Love Foundation",
 subtitle: "Promoting unconditional love as a global force",
 type: "case-study",
 image:
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80&fit=crop",
 description:
  "A global initiative focused on expanding awareness, compassion, and human connection. The Love Foundation operates on the belief that love, not as a sentiment, but as a daily practice, is the most powerful catalyst for individual and collective transformation.",
 details:
  "Founded by Harold W. Becker in 1999, The Love Foundation has become one of the most enduring voices for unconditional love as a practical, actionable philosophy. Their flagship initiative, Global Love Day (celebrated on May 1st), has grown into a worldwide movement observed in over 190 countries. But the foundation's work extends far beyond a single day. Through educational programs, published works, and community partnerships, they provide frameworks for integrating love-based thinking into everyday decisions, from parenting and education to business leadership and conflict resolution. The philosophy is deeply pragmatic: when people operate from love rather than fear, they make better decisions, build stronger relationships, and create more resilient communities. This isn't idealism. It's backed by decades of neuroscience research showing that compassion-based decision-making leads to better outcomes across every measurable dimension. Collaboration Global's partnership with The Love Foundation, active since 2018, reflects a shared conviction that human-first values aren't a nice-to-have. They're the foundation of everything meaningful.",
 stats: [
  { label: "Countries Reached", value: "190+" },
  { label: "Founded", value: "1999" },
  { label: "Global Love Days", value: "25+" },
  { label: "Partnership Since", value: "2018" },
 ],
 highlights: [
  "Global Love Day observed annually in 190+ countries worldwide",
  "Educational frameworks for love-based decision-making in business and life",
  "Backed by neuroscience: compassion-based thinking produces better outcomes",
  "Bridges spirituality and pragmatism through actionable daily practices",
  "25+ years of consistent advocacy for unconditional love as a global force",
 ],
 url: "https://thelovefoundation.com",
 },
 {
 id: "mental-health",
 title: "World Mental Health Forum",
 subtitle: "Shifting from awareness to proactive wellbeing",
 type: "case-study",
 image:
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80&fit=crop",
 description:
  "A global platform focused on mental health resilience and early intervention. The World Mental Health Forum goes beyond awareness campaigns to build practical infrastructure for mental wellbeing, creating spaces where people can be genuinely heard before crisis hits.",
 details:
  "Mental health has become one of the defining challenges of the 21st century. The World Health Organization estimates that depression and anxiety cost the global economy $1 trillion per year in lost productivity alone. But the Forum's approach isn't about treating illness. It's about cultivating wellness. Their model centres on three pillars: Listening (creating structured spaces for authentic conversation), Presence (training individuals and organisations in mindful attention), and Peer Support (building networks where early warning signs are caught and addressed by communities, not just professionals). What makes this approach powerful is its scalability. Traditional mental health services are bottlenecked by professional availability. Peer support models multiply the number of touchpoints exponentially. The Forum trains facilitators in trauma-informed listening, equips workplaces with mental health first aid protocols, and advocates for policy changes that treat mental wellness as infrastructure, not luxury. For Collaboration Global, this partnership is personal. Gill Tiney has spoken openly about the role of community in mental resilience, and the Forum's emphasis on connection-as-medicine aligns perfectly with the collaborative philosophy that drives the entire movement.",
 stats: [
  { label: "Global Cost of Anxiety", value: "$1T/yr" },
  { label: "Trained Facilitators", value: "500+" },
  { label: "Support Model", value: "3 Pillars" },
  { label: "Focus", value: "Prevention" },
 ],
 highlights: [
  "Three-pillar model: Listening, Presence, and Peer Support",
  "Addresses the $1 trillion annual economic cost of poor mental health",
  "Scalable peer support multiplies touchpoints beyond professional bottlenecks",
  "Trauma-informed facilitator training for communities and workplaces",
  "Treats mental wellness as infrastructure, not a luxury or afterthought",
 ],
 },
 {
 id: "arts-culture",
 title: "Arts & Culture Network",
 subtitle: "Empowering creativity through collaboration",
 type: "case-study",
 image:
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&fit=crop",
 description:
  "A global network connecting artists, cultural professionals, and creative practitioners to create opportunities, cross-pollinate ideas, and build sustainable creative careers through collaborative practice rather than competitive isolation.",
 details:
  "The creative industries are paradoxically both one of the fastest-growing economic sectors and one of the most isolating professional environments. Artists, musicians, designers, and cultural producers often work in silos, competing for limited funding and attention. The Arts & Culture Network flips this paradigm entirely. Through innovative formats like creative speed networking (where practitioners pitch collaboration ideas in 3-minute rounds), short-form insight talks, and structured co-creation sprints, the network creates conditions where collaboration isn't just encouraged, it's the default mode of operation. Members have co-produced exhibitions, launched joint publications, secured funding for collaborative projects, and built cross-disciplinary practices that none of them could have achieved alone. The network operates across 15+ countries, with particular strength in the UK, Europe, and Southeast Asia. What sets it apart from typical arts organisations is its emphasis on the business of creativity: not just making art, but building sustainable creative careers through strategic partnerships and shared resources. For Collaboration Global, the Arts & Culture Network represents a proof of concept: that collaboration doesn't just work in business, it transforms every field it touches, including the most individually expressive ones.",
 stats: [
  { label: "Countries Active", value: "15+" },
  { label: "Collaborative Projects", value: "120+" },
  { label: "Creative Practitioners", value: "800+" },
  { label: "Formats", value: "4 Types" },
 ],
 highlights: [
  "Creative speed networking with 3-minute collaboration pitches that spark real projects",
  "Cross-disciplinary co-creation sprints producing exhibitions, publications, and shows",
  "Sustainable creative careers through shared resources and strategic partnerships",
  "Active across 15+ countries with strength in UK, Europe, and Southeast Asia",
  "Proof that collaboration transforms even the most individually expressive fields",
 ],
 url: "https://artsandculturenetwork.com",
 },
 {
 id: "pinksocks",
 title: "Pink Socks Movement",
 subtitle: "Creating human connection through simple gestures",
 type: "case-study",
 image:
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&fit=crop",
 description:
  "A global movement encouraging meaningful conversations and kindness through the simple, disarming power of a pair of pink socks. What started as one person's choice to wear something different became a worldwide symbol of openness, vulnerability, and the courage to connect.",
 details:
  "The Pink Socks Movement was born from a beautifully simple observation: when you wear something unexpected, something that invites curiosity, people talk to you differently. Nick Adkins, the movement's founder, started wearing pink socks to healthcare conferences and noticed something remarkable: strangers would approach him, laugh, ask about the socks, and within minutes they'd be having the kind of honest, human conversation that formal networking never produces. The socks became a symbol, a visible signal that says 'I'm approachable, I'm open, I'm here to genuinely connect.' What started as a personal quirk has grown into a movement spanning healthcare, business, education, and community organisations across the globe. The genius of Pink Socks is that it reduces the activation energy for connection to nearly zero. There's no app to download, no membership to join, no complex framework to learn. You just put on a pair of pink socks and let human nature do the rest. The movement has been particularly powerful in healthcare settings, where it has helped break down hierarchical barriers between doctors, nurses, patients, and administrators, creating the kind of psychological safety that research shows is essential for both patient outcomes and professional wellbeing. For Collaboration Global, Pink Socks embodies a core truth: that the most powerful tools for human connection are often the simplest ones. No technology required, just the willingness to be a little different and a lot more open.",
 stats: [
  { label: "Global Reach", value: "40+" },
  { label: "Core Principle", value: "Openness" },
  { label: "Activation Cost", value: "$0" },
  { label: "Sectors Impacted", value: "6+" },
 ],
 highlights: [
  "Zero-barrier entry: no apps, memberships, or frameworks. Just pink socks.",
  "Reduces the activation energy for genuine human connection to nearly zero",
  "Particularly transformative in healthcare, breaking hierarchical barriers",
  "Creates psychological safety essential for patient and professional outcomes",
  "Proof that the simplest tools for connection are often the most powerful",
 ],
 },
];
