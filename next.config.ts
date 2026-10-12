import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
 // Next 16 requires the allowed quality list. WebP only: AVIF encodes ~50% slower,
 // which makes the first (uncached) request for each image noticeably slower.
 qualities: [75],
 formats: ["image/webp"],
 remotePatterns: [
  {
  // Blog video thumbnails are built from the YouTube video id
  protocol: "https",
  hostname: "img.youtube.com",
  pathname: "/**",
  },
 ],
 },
};

export default nextConfig;
