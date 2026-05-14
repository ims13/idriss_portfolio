
// app/layout.tsx

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idriss L – Full Stack Developer | Toronto",
  description: "Full Stack Developer based in Toronto, Ontario. I build fast, production-ready web apps with Next.js, React, TypeScript, AI integrations, and clean UX. Browse 16+ deployed projects.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Toronto", "Software Engineer", "Web Developer"],
  authors: [{ name: "Idriss L" }],
  openGraph: {
    title: "Idriss L – Full Stack Developer | Toronto",
    description: "Full Stack Developer based in Toronto. 16+ production apps built with Next.js, React, TypeScript, AI, and more.",
    url: "https://idriss-portfolio.vercel.app",
    siteName: "Idriss L Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Idriss L – Full Stack Developer" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idriss L – Full Stack Developer | Toronto",
    description: "Full Stack Developer based in Toronto. 16+ production apps built with Next.js, React, TypeScript, AI, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
