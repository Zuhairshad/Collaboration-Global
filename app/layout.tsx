import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const primaryFont = Space_Grotesk({
 variable: "--font-primary",
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: "Collaboration Global",
 description: "Collaboration is humanity's superpower.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" className={`${primaryFont.variable} h-full antialiased`} suppressHydrationWarning>
  <body className="min-h-full flex flex-col font-sans">
  <Navbar />
  <div className="flex-1">{children}</div>
  <Footer />
  </body>
 </html>
 );
}
