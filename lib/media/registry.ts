export type MediaCategory =
  | "collaborators"
  | "founder"
  | "partners"
  | "lifestyle"
  | "brand";

export type MediaItem = {
  id: string;
  src: string;
  category: MediaCategory;
  title: string;
  caption?: string;
  relatedEntity?: string;
};

export const MEDIA_REGISTRY: readonly MediaItem[] = [
  // ── Collaborators (People Photos) ──
  {
    id: "collab-anne",
    src: "/media/collaborator-anne.jpg",
    category: "collaborators",
    title: "Anne Scottlin",
    caption: "Anne Scottlin building connection frameworks and intentional impact.",
    relatedEntity: "Anne Scottlin",
  },
  {
    id: "collab-harald",
    src: "/media/collaborator-harald.jpg",
    category: "collaborators",
    title: "Harald Walter Azmann",
    caption: "Harald Walter Azmann operating from deep abundance and values-led business growth.",
    relatedEntity: "Harald Walter Azmann",
  },
  {
    id: "collab-alessandro",
    src: "/media/collaborator-alessandro.jpg",
    category: "collaborators",
    title: "Alessandro Ferullo",
    caption: "Alessandro Ferullo bringing holistic energy and human-first alignment.",
    relatedEntity: "Alessandro Ferullo",
  },
  {
    id: "member-anne-scottlin",
    src: "/media/member-anne-scottlin.jpg",
    category: "collaborators",
    title: "Anne Scottlin",
    caption: "Anne Scottlin, community member and collaboration champion.",
    relatedEntity: "Anne Scottlin",
  },
  {
    id: "member-harold-azmann",
    src: "/media/member-harold-azmann.jpeg",
    category: "collaborators",
    title: "Harald Azmann",
    caption: "Harald Azmann, values-led entrepreneur and Collaboration Global member.",
    relatedEntity: "Harald Azmann",
  },
  {
    id: "member-alessandro-ferullo",
    src: "/media/member-alessandro-ferullo.jpg",
    category: "collaborators",
    title: "Alessandro Ferullo",
    caption: "Alessandro Ferullo, holistic business leader and community member.",
    relatedEntity: "Alessandro Ferullo",
  },

  // ── Founder ──
  {
    id: "founder-tedx",
    src: "/media/founder-tedx.jpg",
    category: "founder",
    title: "Gill Tiney TEDx Talk",
    caption: "Founder Gill Tiney sharing the core vision of Collaboration Global.",
    relatedEntity: "Gill Tiney",
  },
  {
    id: "founder-portrait",
    src: "/media/gill-portrait.jpeg",
    category: "founder",
    title: "Gill Tiney",
    caption: "Gill Tiney, founder of Collaboration Global and author of The Making of a Movement.",
    relatedEntity: "Gill Tiney",
  },
  {
    id: "founder-tedx-stage",
    src: "/media/gill-tedx-stage.jpg",
    category: "founder",
    title: "Gill Tiney on TEDx Stage",
    caption: "Gill Tiney delivering her TEDx talk at MaidMarianWay.",
    relatedEntity: "Gill Tiney",
  },
  {
    id: "founder-laptop",
    src: "/media/gill-laptop.jpg",
    category: "founder",
    title: "Gill Tiney, Working",
    caption: "Gill Tiney building the collaboration movement from the ground up.",
    relatedEntity: "Gill Tiney",
  },

  // ── Lifestyle / Story Moments ──
  {
    id: "story-main-event",
    src: "/media/story-main-event.jpg",
    category: "lifestyle",
    title: "Collaboration Global Main Gathering",
    caption: "A room full of dedicated makers coming together to build something of significance.",
  },
  {
    id: "story-london-lunch",
    src: "/media/story-london-lunch.jpg",
    category: "lifestyle",
    title: "London Connection Gathering",
    caption: "Deep human-centered connection over lunch turning ideas into lasting alliances.",
  },
  {
    id: "community-london-dinner",
    src: "/media/community-london-dinner.jpeg",
    category: "lifestyle",
    title: "Community Dinner, London",
    caption: "Members of Collaboration Global gathering over dinner in London.",
  },
  {
    id: "community-colorful-duo",
    src: "/media/community-colorful-duo.jpg",
    category: "lifestyle",
    title: "Community Connection",
    caption: "Two Collaboration Global members celebrating their shared journey.",
  },
  {
    id: "community-trio",
    src: "/media/community-trio.jpeg",
    category: "lifestyle",
    title: "Community Moments",
    caption: "The joy of genuine human connection at Collaboration Global events.",
  },
  {
    id: "community-zoom",
    src: "/media/community-zoom.jpg",
    category: "lifestyle",
    title: "Global Community Online",
    caption: "Collaboration Global members connecting from across the world.",
  },
  {
    id: "community-manor",
    src: "/media/community-manor.jpeg",
    category: "lifestyle",
    title: "Community Retreat",
    caption: "Members gathering for a memorable Collaboration Global event.",
  },
  {
    id: "community-cafe",
    src: "/media/community-cafe.jpg",
    category: "lifestyle",
    title: "Connection Over Coffee",
    caption: "The relationships built through Collaboration Global extend beyond events.",
  },
  {
    id: "community-connection-sunset",
    src: "/media/community-connection-sunset.jpg",
    category: "lifestyle",
    title: "Connection at Sunset",
    caption: "Friendship, joy, and abundance, the heart of Collaboration Global.",
  },
  {
    id: "story-collaboration",
    src: "/media/story-collaboration.jpg",
    category: "lifestyle",
    title: "Shared Purpose Session",
    caption: "Active brainstorming shifting workflows from isolated tasks to unified movement.",
  },
  {
    id: "story-community-1",
    src: "/media/story-community-1.jpg",
    category: "lifestyle",
    title: "Community Synergy Moment",
    caption: "Three or more minds coming together to solve complex global challenges.",
  },
  {
    id: "story-community-2",
    src: "/media/story-community-2.jpg",
    category: "lifestyle",
    title: "Collaborative Workshop Focus",
    caption: "Authentic accountability support groups keeping members focused and growing.",
  },
  {
    id: "story-moment-1",
    src: "/media/story-moment-1.jpg",
    category: "lifestyle",
    title: "Member Breakthrough",
    caption: "Celebrating real tangible outcomes over traditional surface-level networking.",
  },
  {
    id: "story-moment-2",
    src: "/media/story-moment-2.jpg",
    category: "lifestyle",
    title: "Inspiring Dialogue",
    caption: "Bridging theory and real active execution supported by lifelong peers.",
  },
  {
    id: "story-moment-3",
    src: "/media/story-moment-3.jpg",
    category: "lifestyle",
    title: "Coalescing Ideas",
    caption: "A collective mindset shifting from traditional fear-based models to abundance.",
  },

  // ── Partners (Visuals/Logos/Assets) ──
  {
    id: "partner-dday",
    src: "/media/d-day-logo.jpg",
    category: "partners",
    title: "D-Day Commemoration Support",
    caption: "Honoring core shared values and generational global impact initiatives.",
    relatedEntity: "D-Day",
  },
  {
    id: "book-cover",
    src: "/media/book-cover.jpg",
    category: "partners",
    title: "Together We Can Do Something Wonderful",
    caption: "Gill's definitive blueprint mapping the structural practices of true collaboration.",
    relatedEntity: "Books",
  },
  {
    id: "book-together-wonderful",
    src: "/media/book-together-wonderful.jpg",
    category: "partners",
    title: "The Making of a Movement, Book",
    caption: "Gill Tiney's book on building a collaboration movement from the ground up.",
    relatedEntity: "Books",
  },

  // ── Brand Assets ──
  {
    id: "brand-badge",
    src: "/media/brand-badge.png",
    category: "brand",
    title: "Collaboration Global Seal",
    caption: "The certified signature standard marking human-first organizational spaces.",
  },
  {
    id: "brand-proud-member",
    src: "/media/brand-proud-member.png",
    category: "brand",
    title: "Proud Member Seal",
    caption: "Representing purpose, authentic methodology, and long-term coalition integrity.",
  },
  {
    id: "b1g1-proud-member",
    src: "/media/b1g1-proud-member.png",
    category: "brand",
    title: "B1G1 Proud Member",
    caption: "Collaboration Global is a proud B1G1 Business for Good member.",
  },

  // ── Fallback References ──
  {
    id: "story-hero",
    src: "/media/community-london-dinner.jpeg",
    category: "lifestyle",
    title: "Global Collaboration Movement",
    caption: "Leaders and makers uniting to build spaces of true abundance and mutual support.",
  },
  {
    id: "story-crowd",
    src: "/media/story-london-lunch.jpg",
    category: "lifestyle",
    title: "Engaged Community Coalitions",
    caption: "A community that operates purely from love, connection, and long-term follow-through.",
  },
  {
    id: "founder-gill",
    src: "/media/founder-tedx.jpg",
    category: "founder",
    title: "Gill Tiney Speaking",
    caption: "Founder Gill Tiney championing humanity's core superpowers.",
    relatedEntity: "Gill Tiney",
  },
  {
    id: "partner-b1g1",
    src: "/media/brand-proud-member.png",
    category: "partners",
    title: "SDG Footprint Integration",
    caption: "Every interaction drives positive change for community partners worldwide.",
  },
] as const;

/** Helper to look up images securely by ID */
export function getMediaById(id: string): MediaItem | undefined {
  return MEDIA_REGISTRY.find((item) => item.id === id);
}

/** Helper to filter images by category */
export function getMediaByCategory(category: MediaCategory): MediaItem[] {
  return MEDIA_REGISTRY.filter((item) => item.category === category);
}
