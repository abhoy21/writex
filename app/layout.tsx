import { Analytics } from "@vercel/analytics/next";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: "WriteX-AI",
  description: "Keep your team aligned in minutes with WriteX-AI.",
};

import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interSans.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
