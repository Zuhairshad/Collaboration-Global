import { notFound } from "next/navigation";
import { PartnerStoryPage } from "@/components/sections/PartnerStory";
import { PARTNER_STORIES, getPartnerStory } from "@/lib/partner-stories";

export function generateStaticParams() {
 return PARTNER_STORIES.map((p) => ({ slug: p.slug }));
}

export default async function PartnerPage({
 params,
}: {
 params: Promise<{ slug: string }>;
}) {
 const { slug } = await params;
 const story = getPartnerStory(slug);
 if (!story) notFound();
 return <PartnerStoryPage story={story} />;
}
