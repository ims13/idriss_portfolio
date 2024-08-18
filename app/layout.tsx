
// app/layout.tsx

import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
// import StarsCanvas from "@/components/main/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { isMobileDevice } from "@/utils/detectMobile"; // Import the utility function
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

// Dynamically import StarsCanvas with no server-side rendering
const StarsCanvas = dynamic(() => import('@/components/main/StarBackground'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Idriss portfolio",
  description: "This my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      {!isMobileDevice() && <StarsCanvas />} {/* Conditionally render StarsCanvas */}
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
