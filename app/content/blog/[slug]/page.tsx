import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: React.ReactNode;
};

const POSTS: Post[] = [
  {
    slug: "the-building-blocks-of-your-best-collaboration",
    title: "The Building Blocks of Your Best Collaboration!",
    excerpt:
      "The rules for creating an amazing collaboration are also, pretty much, the same rules to lead your best life — discover the principles that make both work.",
    date: "April 30, 2024",
    readTime: "6 min read",
    category: "Collaboration",
    body: (
      <>
        <p>
          What if the things that make a collaboration truly great are the same
          things that make a life truly great? In twenty-plus years of building
          communities and coaching collaborators, that is the pattern I keep
          returning to.
        </p>
        <p>
          Collaboration is not a tool. It is not a tactic you deploy when a
          project gets too big for one person. It is a way of being with other
          humans — and when it works, it is one of the most energising,
          creative, and life-giving experiences available to us.
        </p>

        <h2>1. Clarity of Purpose</h2>
        <p>
          Every remarkable collaboration I have ever witnessed — or been part
          of — began with a shared "why" that was bigger than any individual
          ego. When each person in the room can articulate why this work
          matters, the practical decisions almost make themselves.
        </p>
        <p>
          Purpose is not a mission statement on a slide deck. It is the honest
          answer to the question: "What are we here to create, and for whom?"
          Revisit it often. It is both compass and glue.
        </p>

        <h2>2. Trust Before Tactics</h2>
        <p>
          We spend enormous amounts of time choosing tools, building processes,
          and dividing tasks — often before we have done the simpler, harder
          work of learning to trust each other. Trust is not assumed; it is
          built through small consistent actions over time.
        </p>
        <p>
          In practice this means showing up when you say you will, doing what
          you said you would do, and being honest when something goes sideways.
          Every kept promise deposits into the trust account. Every broken one
          makes a withdrawal. The maths matters.
        </p>

        <h2>3. Diversity as Strength, Not Obstacle</h2>
        <p>
          The best collaborations bring together people who think differently,
          carry different expertise, and come from different backgrounds.
          Differences are the raw material of creativity. The same-minded room
          produces predictable outputs.
        </p>
        <p>
          But diverse teams only outperform homogeneous ones when psychological
          safety is present — when each voice knows it will be heard, not just
          tolerated. Building that safety is a leadership responsibility, shared
          by everyone in the group.
        </p>

        <h2>4. Generosity as Default</h2>
        <p>
          Scarcity thinking convinces us that sharing credit, sharing contacts,
          or sharing ideas diminishes us. Abundance thinking knows the
          opposite: when you help someone else win, the whole ecosystem grows —
          and so do you.
        </p>
        <p>
          In Collaboration Global we talk about this as moving from "what can
          I get?" to "what can we create?" It sounds simple. It changes
          everything.
        </p>

        <h2>5. Honest, Loving Accountability</h2>
        <p>
          Great collaborations hold each other to account — not through fear
          or judgment, but through genuine care. When someone falls behind or
          loses their way, the community does not shame them into performance;
          it asks, "How can we help you get back on track?"
        </p>
        <p>
          This is what separates a real community from a professional
          network. The network applauds your wins. The community is still there
          when you are struggling.
        </p>

        <blockquote>
          "Never doubt that a small group of thoughtful, committed citizens can
          change the world. Indeed, it is the only thing that ever has." —
          Margaret Mead
        </blockquote>

        <p>
          These five building blocks are also, I would argue, the building
          blocks of your best life: purpose, trust, diversity, generosity, and
          honest accountability. The overlap is not a coincidence. How we
          collaborate is how we live.
        </p>
        <p>
          So the question I leave you with is this: which building block needs
          the most attention in your collaborations right now? And what would
          shift if you gave it that attention this week?
        </p>
      </>
    ),
  },
  {
    slug: "are-you-awake-to-the-social-dilemma",
    title: "Are you awake to The Social Dilemma?",
    excerpt:
      "Social media connects us and divides us in equal measure. Gill explores how we can use these tools with intention — not be used by them.",
    date: "March 13, 2024",
    readTime: "5 min read",
    category: "Mindset",
    body: (
      <>
        <p>
          Have you watched The Social Dilemma on Netflix? If you have not, I
          encourage you to do so — not because it will make you delete every app
          on your phone, but because awareness is the beginning of choice.
        </p>
        <p>
          The documentary makes a compelling case that the social platforms we
          use every day were designed, by brilliant engineers and behavioural
          scientists, to capture and hold our attention for as long as
          possible. The business model is not connection; it is engagement.
          And engagement, as it turns out, is most reliably generated by
          outrage, anxiety, and comparison.
        </p>

        <h2>The Connection Paradox</h2>
        <p>
          Here is what I find most troubling: these tools were born from a
          genuine desire to connect people. And they do. I have met remarkable
          humans through LinkedIn, Twitter, and Facebook groups who have
          become real friends, collaborators, and community members. The
          technology is genuinely capable of bridging distances that would have
          been unbridgeable twenty years ago.
        </p>
        <p>
          And yet. The same algorithmic logic that surfaces a message from
          someone in New Zealand who shares your passion for regenerative
          agriculture also surfaces content designed to inflame, divide, and
          send you scrolling for another hour when you meant to check one
          notification.
        </p>

        <h2>Intentional Use vs. Habitual Use</h2>
        <p>
          The antidote is not abstinence — for most of us, these platforms are
          genuinely useful, professionally and personally. The antidote is
          intention.
        </p>
        <p>
          Intentional use means deciding, before you open the app, what you
          are there to do. Are you publishing something? Responding to a
          specific person? Doing research? Great — open it, do the thing,
          close it. Habitual use means opening it because your thumb already
          moved to the icon while your brain was thinking about something else.
        </p>

        <h2>What Collaboration Requires</h2>
        <p>
          Real collaboration — the kind that produces something of significance
          — requires presence. It requires the ability to listen deeply, to sit
          with a problem long enough to see it clearly, and to resist the urge
          to fill every silence with a scroll.
        </p>
        <p>
          Fragmented attention produces fragmented outcomes. The practice of
          putting the phone face-down in a meeting is not a courtesy gesture;
          it is an act of respect for what you are trying to build together.
        </p>

        <blockquote>
          "The most radical act in the modern world is to be fully present to
          the person in front of you."
        </blockquote>

        <h2>A Simple Practice</h2>
        <p>
          This week, try this: before opening any social platform, pause for
          three seconds and name — out loud if possible — why you are opening
          it. What do you need? What are you hoping to find or share?
        </p>
        <p>
          That three-second pause creates a tiny gap between impulse and
          action. In that gap lives your agency. Use it.
        </p>
        <p>
          Social media can be a brilliant tool for the kind of purposeful,
          global collaboration we champion at Collaboration Global. The question
          is whether you are using it — or it is using you.
        </p>
      </>
    ),
  },
  {
    slug: "being-on-holiday",
    title: "Being on holiday",
    excerpt:
      "A reflective walk along the Wey and Arun Canal in West Sussex and what slowing down taught about presence, connection, and what really matters.",
    date: "September 12, 2021",
    readTime: "4 min read",
    category: "Reflection",
    body: (
      <>
        <p>
          Last week I walked a stretch of the Wey and Arun Canal in West
          Sussex. It is one of those places that does not announce itself. No
          Instagram-famous viewpoint, no coffee shop at the trailhead. Just
          water, reeds, the occasional heron, and a towpath that insists you
          slow down.
        </p>
        <p>
          I had my phone with me — because of course I did — but I made a
          deliberate choice not to look at it until I sat down at the end of
          the walk. And something happened in those two hours that I want to
          try to describe, though I suspect words will not quite do it justice.
        </p>

        <h2>The Permission to Simply Be</h2>
        <p>
          Being on holiday — truly on holiday, not "working from a nicer
          location" — requires giving yourself permission to exist without
          output. No deliverables. No check-ins. No inbox. Just you, moving
          through the world at the pace the world was actually designed for.
        </p>
        <p>
          I noticed, somewhere around the second mile, that my thoughts had
          stopped racing. The mental to-do list that normally runs as a
          background programme had gone quiet. I was not planning, reviewing, or
          optimising anything. I was just walking, noticing the sound of the
          water, feeling the sun on the back of my neck.
        </p>

        <h2>What Rest Makes Possible</h2>
        <p>
          We talk a great deal in the collaboration community about being
          fully present — to our partners, our projects, our ideas. What we
          talk about less is the rest that makes presence possible. You cannot
          pour from an empty vessel. You cannot listen deeply when you are
          exhausted. You cannot bring creative energy to a collaboration when
          you have not given your own energy time to replenish.
        </p>
        <p>
          Rest is not the opposite of productivity. It is the condition for it.
          The walk produced nothing. And yet I came home with three ideas I had
          not been able to access when I was "trying."
        </p>

        <h2>Connection Begins with Yourself</h2>
        <p>
          One of the things I have come to believe deeply is that the quality
          of our external connections — with colleagues, collaborators, family,
          friends — is downstream of our connection with ourselves. When we are
          disconnected from our own rhythms, needs, and values, we bring a kind
          of static to our relationships. Other people can feel it, even if
          they cannot name it.
        </p>
        <p>
          The canal walk reminded me what it feels like to be at home in
          myself. Unhurried. Curious. Genuinely glad to be alive and in this
          particular place on this particular afternoon.
        </p>

        <blockquote>
          "Almost everything will work again if you unplug it for a few
          minutes, including you." — Anne Lamott
        </blockquote>

        <p>
          If you are reading this and cannot remember the last time you truly
          switched off — not just reduced your workload, but genuinely rested —
          I want to offer you this: it is not an indulgence. It is a practice.
          It is, in fact, one of the most collaborative things you can do,
          because it makes you more fully available to every person and project
          that matters to you.
        </p>
        <p>
          Find your canal path. Go slow. Leave the phone in your pocket.
        </p>
      </>
    ),
  },
  {
    slug: "welcome-to-collaboration-global",
    title: "Welcome to Collaboration Global",
    excerpt:
      "An introduction to the movement — where we came from, what we stand for, and why collaboration is the most powerful thing we can do together.",
    date: "December 28, 2019",
    readTime: "7 min read",
    category: "Community",
    body: (
      <>
        <p>
          Welcome. I am genuinely glad you are here.
        </p>
        <p>
          I started this movement — originally called BeCollaboration, now
          Collaboration Global — because I had a hunch that was too persistent
          to ignore: that the way most of us had been taught to operate in
          business and in life was leaving enormous potential on the table. Not
          just commercial potential, though that too. Human potential. Creative
          potential. The kind of potential that only emerges when people come
          together with clarity, trust, and a genuine desire to build something
          bigger than themselves.
        </p>

        <h2>Where It Began</h2>
        <p>
          My own journey into collaboration was not, if I am honest, entirely
          graceful. For years I operated from a place of quiet scarcity — not
          that I would have called it that at the time. I worked hard, I
          networked diligently, I competed for attention, contracts, and
          credibility. And while I achieved things I was proud of, something
          always felt unnecessarily difficult. Like I was pushing a boulder
          uphill that could have been carried more easily by a group.
        </p>
        <p>
          The turning point came when I stopped asking "how do I get ahead?"
          and started asking "what can we create together?" The shift sounds
          simple. The experience of it was transformative.
        </p>

        <h2>What We Believe</h2>
        <p>
          At the heart of Collaboration Global is a philosophical commitment:
          that abundance is the truth, and scarcity is a story we tell
          ourselves. When we move from fear to love, from competition to
          co-creation, from isolated effort to genuine partnership, everything
          gets better. Business outcomes improve. Wellbeing improves. The
          quality of the work improves. And the world, in small but real ways,
          improves too.
        </p>
        <p>
          We are inspired by Buckminster Fuller, who understood that
          collaboration is not just a nice thing to do — it is the most
          efficient, most elegant, and most human way to solve problems. We are
          inspired by Margaret Mead, who reminded us that a small group of
          committed people can change the world. Indeed, it is the only thing
          that ever has.
        </p>

        <h2>What We Do</h2>
        <p>
          Collaboration Global is a community, a curriculum, and a practice.
          We run monthly Community Sessions that are open to anyone — a
          meeting of minds and hearts where guests can experience what
          intentional collaboration feels like before they commit to anything.
          We run the Collaborator Academy for those who want structured
          learning and peer accountability. And Collaborator Pro for those who
          are ready to step fully into the community: raising their profile,
          joining and leading projects, and receiving the coaching support that
          helps ideas become reality.
        </p>
        <p>
          We are present in 28 countries. We have supported thousands of
          collaborations. Every membership we sell contributes to real-world
          impact through our partnership with B1G1 — supporting everything
          from clean water in Malawi to education in Nepal.
        </p>

        <h2>An Invitation</h2>
        <p>
          Wherever you are in your journey — whether you are a seasoned
          entrepreneur looking for a community that operates at a higher level,
          a coach or consultant who wants to stop working in isolation, a
          creative who is tired of going it alone, or simply someone who knows
          there must be a better way — there is a place for you here.
        </p>
        <p>
          Start by coming to a Community Session. Come as a guest. Meet some
          of the people. See how it feels. You do not have to decide anything
          else on that day.
        </p>

        <blockquote>
          "Collaboration is not a strategy. It is a way of being — and when you
          practise it, it changes you." — Gill Tiney
        </blockquote>

        <p>
          This is a movement built on the belief that we are better together.
          I hope you will help us prove it.
        </p>
        <p>
          With love and in collaboration,
          <br />
          <strong>Gill</strong>
        </p>
      </>
    ),
  },
];

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Collaboration Global`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 [background:linear-gradient(135deg,#6B4FBE_0%,#2d1654_40%,#1a3535_70%,#2DC7B3_100%)]">
        <Container>
          <div className="mx-auto max-w-[780px]">
            <Link
              href="/content/blog"
              className="mb-8 inline-flex items-center gap-2 text-[13px] font-semibold text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-white/50">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-white/50">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/65 md:text-[17px]">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-teal)] text-[12px] font-bold text-white">
                GT
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Gill Tiney</p>
                <p className="text-[12px] text-white/50">
                  Founder &amp; Collaboration Catalyst
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[780px]">
            <article className="rounded-2xl border border-gray-200 bg-white px-8 py-12 shadow-sm md:px-14 md:py-16 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--brand-purple)] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.85] [&_p]:text-gray-700 first:[&_p]:text-[17px] first:[&_p]:font-medium first:[&_p]:text-gray-800">
              {post.body}
            </article>

            {/* Share / back row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
              <Link
                href="/content/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)] transition-colors hover:text-[var(--brand-purple-hover)]"
              >
                <ArrowLeft className="h-4 w-4" />
                All articles
              </Link>
              <span className="text-sm text-gray-400">
                Written by Gill Tiney · Collaboration Global
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-white py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-[780px]">
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-purple)]">
                More from the blog
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/content/blog/${r.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-purple)]">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-[var(--brand-purple)]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-500 line-clamp-2">
                      {r.excerpt}
                    </p>
                    <span className="mt-4 block text-[13px] font-semibold text-[var(--brand-purple)]">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
