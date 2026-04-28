import type { Config } from "tailwindcss";

export default {
 content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
 "./components/**/*.{js,ts,jsx,tsx,mdx}",
 "./lib/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
 extend: {
  colors: {
  brand: {
   bg: "#ffffff",
   card: "#f9fafb",
   "card-hover": "#f3f4f6",
   border: "#e5e7eb",
   text: "#111111",
   muted: "#6b7280",
   dim: "#9ca3af",
   purple: "#6B4FBE",
   "purple-hover": "#5A3EAE",
   teal: "#2DC7B3",
   "teal-hover": "#25B0A0",
  },
  },
  fontFamily: {
  sans: ["var(--font-primary)", "system-ui", "sans-serif"],
  },
 },
 },
 plugins: [],
} satisfies Config;

