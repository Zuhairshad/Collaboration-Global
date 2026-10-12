import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";

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
 <html lang="en" className="h-full antialiased" suppressHydrationWarning>
  <body className="min-h-full flex flex-col font-sans">
  <MotionProvider>
   <Navbar />
   <div className="flex-1">{children}</div>
   <Footer />
  </MotionProvider>
  </body>
 </html>
 );
}
