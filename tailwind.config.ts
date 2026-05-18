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
                    bg: "#faf8f5",
                    card: "#f5f2ed",
                    "card-hover": "#edeae3",
                    border: "#e0dbd3",
                    text: "#2a2520",
                    muted: "#78716a",
                    dim: "#a39e95",
                    purple: "#655bb3",
                    "purple-hover": "#5a50a8",
                    teal: "#31cfc3",
                    "teal-hover": "#28bdb1",
                },
            },
            fontFamily: {
                sans: ["var(--font-primary)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;

