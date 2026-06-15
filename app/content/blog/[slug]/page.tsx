import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
      "The rules for creating an amazing collaboration are also, pretty much, the same rules to lead your best life, discover the principles that make both work.",
    date: "April 30, 2024",
    readTime: "6 min read",
    category: "Collaboration",
    body: (
      <>
        <p>
          What I have come to realise in my studies on collaboration is that the rules for creating an amazing collaboration are also, pretty much, the same rules to lead your best life.
        </p>
        <p>
          I almost feel embarrassed to be sharing the simplicity of these guidelines but then again I have seen so many people attempt collaboration and have absolutely no idea why it collapsed, that I feel a compulsion to spread the word. Basically if you see this article as common sense, you can consider yourself a natural collaborator. If you are curious and don&apos;t necessarily see how what happens in your life can actually connect to how you perform in a collaboration then you have come to the right place.
        </p>

        <h2>1. Show Up!</h2>
        <p>
          First and foremost if you don&apos;t show up consistently for what you believe in you will not be seen as collaboration worthy. By showing up I mean being visible to your audience, either on social media or in person. Being there with a consistent message, being visible for what you believe in, demonstrating your specialist knowledge and being known for your corner of that specialism.
        </p>
        <p>
          Take social media as an example. You don&apos;t have to be on every last platform churning out banal content that is easily ignored. You need to choose your audience and hang out where they hang out. Limit yourself to 3 platforms and BE there, at least 3 times or more a week. By being there I mean posting, commenting, reviewing, supporting and sharing your knowledge.
        </p>
        <p>
          This visibility will bring connections and opportunities, but the work doesn&apos;t stop there. Now you have connected you need to engage and deepen the connection. All of this takes discipline, commitment and consistency. No fast pass to showing up. The same with family and friends, the best relationship is the one you have spent time nurturing and being there for them.
        </p>

        <h2>2. Build Trust</h2>
        <p>
          Once you have done this, usually a 3 month minimum commitment, you can then begin to deepen the connection and build trust. People need to be able to rely on you, utilise your knowledge, try it out, see if it works, to see whether you are deserving of their time. They want to be reassured of your integrity and feel confident that if they chose to engage you they will be able to boast how wonderful you are. A tricky thing to do if you disappear from view. Your reputation is built on trust.
        </p>
        <p>
          It is so easy for all of us to take family and friends for granted, but trust can still be lost if we are not careful. Be respectful of each other&apos;s time.
        </p>

        <h2>3. Confirm Common Goals and Values</h2>
        <p>
          There is no point working with someone if your goals are not aligned. They will quickly see through you if your only goal is to make a heap of money from them. Likewise it is difficult to be inspired by someone and want to show up for them if their only goal is simply to make a ton of cash. There is nothing wrong with making money, but for the good it can do, not simply for the act of having it.
        </p>
        <p>
          Digging deeper to discover your aligned values is also a practical exercise to ensure you will enjoy working with this person. They do not have to be the same, but within the same family of values and aligned with each other&apos;s purpose. If you have been regularly showing up and creating content this will already be evident to the other person, they may not realise it yet but that is why they feel comfortable in your company. They already know subconsciously that you are aligned.
        </p>

        <h2>4. The Grown Up Conversation</h2>
        <p>
          Before you embark on the collaboration you will need to explore each other&apos;s mindset, attitudes and behaviours. Obviously you can embark on a collaboration without this conversation, but much better to have it before there is an issue than wait until later. That is why it is known in our community as &lsquo;the grown up conversation&rsquo;, where ego is put to one side, trust deepens, vulnerability is allowed and the relationship can grow. It explores triggers, limiting beliefs, stress hot spots and resolution responses.
        </p>

        <h2>5. Rules of the Game</h2>
        <p>
          The fun part, where you can choose how you operate for your optimum work flow and understand how others like to be treated. Set it up and no arguments later down the line. If your creativity is best at 5am you won&apos;t necessarily be able to expect your fellow collaborators to be up at the crack of dawn with you.
        </p>

        <h2>6. Set Up the Collaboration Profiles</h2>
        <p>
          In short, the 12 profiles are: Visionary, Catalyst, Driver, Strategist, Financer, Salesperson, Monitor, Nurturer, Tweaker, Technician, Multiplier, Finisher. Not a personality profile at all, but a guideline to the roles required. Anyone can be any of them, but by having each role adopted as a responsibility at different times within the project a more pleasing outcome can be expected.
        </p>
        <p>
          Away from the work environment we all like to know where we add value in a family or friendship group, take on that role and you will be indispensable.
        </p>

        <h2>7. GSD, Get It Done!</h2>
        <p>
          We can talk until we are blue in the face but at some point we have to take action. By spending time in this preparation as described here, the outcome is much more likely to be a success. But sometimes you learn best by just getting started.
        </p>
        <p>
          Whether in business or in your daily life, we all need to collaborate. Each collaboration, whether cooking Christmas dinner together or booking a family holiday, is a thing of joy when following these guidelines.
        </p>

        <blockquote>
          &ldquo;80% of success is showing up.&rdquo;, Woody Allen
        </blockquote>

        <p>
          Is there a part of this process you regularly use in a collaboration? What works for you?
        </p>
      </>
    ),
  },
  {
    slug: "are-you-awake-to-the-social-dilemma",
    title: "Are you awake to The Social Dilemma?",
    excerpt:
      "Social media connects us and divides us in equal measure. Gill explores how we can use these tools with intention, not be used by them.",
    date: "March 13, 2024",
    readTime: "5 min read",
    category: "Mindset",
    body: (
      <>
        <p>
          Social media can be a life saver, but the flip side is a sinister world that will cause a social implosion of our own making. What can we do to prevent it?
        </p>
        <p>
          Have you seen the documentary The Social Dilemma recently on Netflix? Once I saw this powerful and disturbing message, I went searching further. I very quickly discovered The Dissenters podcast and their interview with Observer journalist Carole Cadwalladr, which added meat to the bone. Her TED Talk opens up a hornet&apos;s nest, right in the laps of the people causing the problem.
        </p>

        <h2>What the documentary reveals</h2>
        <p>
          In a nutshell, by using social media we are allowing ourselves to become saleable products and are being manipulated to orchestrate our world for the minority who couldn&apos;t care less for the majority. We are constantly being led by the addictive qualities of the demon that is taking over our lives, social media.
        </p>
        <p>
          The people in the film were all heavily involved at very senior levels during the heyday and yet one by one left the jobs that they were proud of because of the sinister direction that the platforms were taking, without any responsibility being taken by the people at the top.
        </p>
        <p>
          <em>Interestingly, none of the top people in these industries allow their children access to smart technology.</em>
        </p>
        <p>
          We all need to be aware that advertising has been totally personalised, to the extent that false information can, and probably has already been, fed to us to influence our actions, whether that be voting or taking to the streets in protest. These adverts then disappear. We assume everyone has had them, but apparently not. This false information affects not only people&apos;s livelihoods but also huge swathes of populations being ethnically cleansed. The potential for global domination is here.
        </p>

        <h2>What Collaboration Global does about it</h2>
        <p>
          Part of our organisation is about coming together to discover information like this, not to take it at face value, but to research, discuss and consider how it might affect us and what we might be able to do about it. We duly spent our monthly Evolve session considering the future potential for our society in light of this information.
        </p>
        <p>
          This could be a very depressing conversation. Indeed, when asked, the founder of Pinterest believed civil war was the expected outcome, unless we do something about it. No one in the film offered the solution, they seem to be waiting for those at the top to find a conscience and take action.
        </p>
        <p>
          At Collaboration Global our culture is solution focused. Being part of a community means we do not consider this as a fait accompli or that we are defenceless to do anything about it.
        </p>

        <blockquote>
          &ldquo;Never doubt that a small group of committed citizens can change the world. Indeed, it is the only thing that ever has.&rdquo;, Margaret Mead
        </blockquote>

        <p>
          Like no other time we are more connected through social media and yet, due to the global pandemic, it is concurrently one of the most isolating times in history. We identify that being part of a nurturing community is essential to good mental health. At Collaboration Global we work together to help each other and facilitate personal, emotional, physical, and spiritual growth, ensuring we are practising a culture based on love, connection and abundance. A world away from much of social media that promotes fear, scarcity and competition.
        </p>
        <p>
          We don&apos;t always know the solutions to our world&apos;s challenges, but by creating awareness and being proactive to bring these topics to the front of people&apos;s thinking we can be ready to mobilise and provide peaceful solutions. Would you like to be part of the solution?
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
    readTime: "3 min read",
    category: "Reflection",
    body: (
      <>
        <p>
          Being &lsquo;on holiday&rsquo; is a powerful state of mind.
        </p>
        <p>
          I discovered a new walk yesterday and for 2 hours I was &lsquo;on holiday&rsquo;, only a 10-minute drive from where I live. It was along the Wey and Arun Canal in West Sussex and along the way we met and spoke to at least 15 people, 10 dogs, and 1 horse. We still puzzled over how locks actually worked and marvelled at the bravery of the person who suggested building a canal in the first place, what a feat of engineering over a hundred years ago, it just blows my mind.
        </p>
        <p>
          We spent time trying to identify the amazing array of wildflowers and wondered what breed the pure white cows were, refraining from giving it a quick Google, using a phone only as a camera and staying away from social media. We also loved the silence of no traffic noise and only the occasional waterfall to listen to alongside the birds.
        </p>
        <p>
          It was a total break from the norm. We nearly didn&apos;t go because it had looked like rain, but the sun shone just for us and it was beautiful. Just like a full week away, it did wonders for the heart and soul as well as the body.
        </p>

        <h2>The permission to simply be</h2>
        <p>
          Being on holiday, truly on holiday, not &ldquo;working from a nicer location&rdquo;, requires giving yourself permission to exist without output. No deliverables. No check-ins. No inbox. Just you, moving through the world at the pace the world was actually designed for.
        </p>
        <p>
          What pocket of your world have you discovered lately? Can you suspend your everyday life for an hour or two to indulge in a mini holiday?
        </p>

        <blockquote>
          &ldquo;Almost everything will work again if you unplug it for a few minutes, including you.&rdquo;, Anne Lamott
        </blockquote>

        <p>
          Rest is not the opposite of productivity. It is the condition for it. The walk produced nothing. And yet I came home with three ideas I had not been able to access when I was &ldquo;trying.&rdquo;
        </p>
        <p>
          If you are reading this and cannot remember the last time you truly switched off, not just reduced your workload, but genuinely rested, it is not an indulgence. It is a practice. It is, in fact, one of the most collaborative things you can do, because it makes you more fully available to every person and project that matters to you.
        </p>
        <p>
          Find your canal path. Go slow. Leave the phone in your pocket. Have a great week everyone.
        </p>
      </>
    ),
  },
  {
    slug: "welcome-to-collaboration-global",
    title: "Welcome to Collaboration Global",
    excerpt:
      "An introduction to the movement, where we came from, what we stand for, and why collaboration is the most powerful thing we can do together.",
    date: "December 28, 2019",
    readTime: "4 min read",
    category: "Community",
    body: (
      <>
        <p>
          I am so proud to introduce you to the latest incarnation of the movement to transform our world through collaboration.
        </p>
        <p>
          Those of you who have been following my journey, through the birth of BeCollaboration, my book Making of a Movement, online publication and podcast, will know that I am passionate about making a difference, for one and for many. In fact, for as many people as possible. Which is why collaboration is so important.
        </p>

        <h2>Where it began</h2>
        <p>
          At the beginning of the last decade I realised that for anyone to achieve anything it is better to travel with a group of passionate people than to achieve greatness on your own. In fact, no one really does it alone, even the lone marathon runner will have a team of people supporting them.
        </p>
        <p>
          For us to make a dent in this world we need to understand the art of collaboration, the nuances of what influences us, and how we can connect at a deeper level in order to create massive impact through collaboration. That is our mission at Collaboration Global.
        </p>

        <h2>What we are building</h2>
        <p>
          By creating a safe space to meet, share, discuss, develop and take action we become the catalyst for great collaborations. Online and off, there will be like-hearted people who know how to communicate, create, challenge and collaborate. They will share their knowledge so you too can be bigger than you are alone.
        </p>
        <p>
          Collaboration isn&apos;t always a breeze, I have had to learn that the hard way, but what I do know is that by being around people who are passionate to make a difference, who understand themselves and want to support you in your mission, then together we can transform the world.
        </p>

        <h2>An invitation</h2>
        <p>
          No small feat, I know, but just imagine if everyone started by transforming themselves, then collaborated for the good of others and shared what they learn to pay it forward for society. What could our world look like then?
        </p>
        <p>
          You could be part of it. Connect with Collaboration Global and join our community as we grow our movement and empower each other to make a difference, to one and to many.
        </p>

        <blockquote>
          &ldquo;Collaboration is not a strategy. It is a way of being, and when you practise it, it changes you.&rdquo;, Gill Tiney
        </blockquote>

        <p>
          This is a movement built on the belief that we are better together. I hope you will help us prove it.
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
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 [background:linear-gradient(135deg,#4a4396_0%,#655bb3_30%,#31cfc3_60%,#7be0d8_100%)]">
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
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src="/media/gill-portrait.jpeg" alt="Gill Tiney" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Gill Tiney</p>
                <p className="text-[12px] text-white/50">Founder &amp; Collaboration Catalyst</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="bg-brand-card py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[780px]">
            <article className="rounded-2xl border border-brand-border bg-white px-8 py-12 shadow-sm md:px-14 md:py-16 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[1.2rem] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-brand-text [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--brand-purple)] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-brand-muted [&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.85] [&_p]:text-brand-muted first:[&_p]:text-[17px] first:[&_p]:font-medium first:[&_p]:text-brand-text/90">
              {post.body}
            </article>

            {/* Back row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border pt-8">
              <Link
                href="/content/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-purple)] transition-colors hover:text-[var(--brand-purple-hover)]"
              >
                <ArrowLeft className="h-4 w-4" />
                All articles
              </Link>
              <span className="text-sm text-brand-dim">
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
                    className="group rounded-2xl border border-brand-border bg-brand-card p-6 transition-shadow hover:shadow-md"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-purple)]">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-[15px] font-bold leading-snug text-brand-text transition-colors group-hover:text-[var(--brand-purple)]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-brand-muted line-clamp-2">
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
