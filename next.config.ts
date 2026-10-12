import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
 // Next 16 requires the allowed quality list; AVIF first, WebP fallback
 qualities: [75],
 formats: ["image/avif", "image/webp"],
 remotePatterns: [
  {
  protocol: "https",
  hostname: "images.unsplash.com",
  pathname: "/**",
  },
  {
  protocol: "https",
  hostname: "framerusercontent.com",
  pathname: "/**",
  },
  {
  protocol: "https",
  hostname: "img.youtube.com",
  pathname: "/**",
  },
 ],
 },
};

export default nextConfig;
