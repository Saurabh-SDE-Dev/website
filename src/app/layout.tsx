import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Sonalakar | Software Development Engineer",
  description: "Portfolio of Saurabh Sonalakar, a Software Development Engineer specializing in Python, FastAPI, AI/ML, AWS, GCP, and backend systems.",
  keywords: [
    "Python Developer",
    "Python Backend Developer",
    "FastAPI Developer",
    "Backend Engineer",
    "AI/ML Engineer",
    "Cloud Engineer",
    "AWS Developer",
    "GCP Developer",
    "Software Development Engineer"
  ],
  authors: [{ name: "Saurabh Sonalakar" }],
  creator: "Saurabh Sonalakar",
  metadataBase: new URL('https://saurabhsonalakar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saurabh Sonalakar | Software Development Engineer",
    description: "Backend engineer focused on building robust APIs, scalable production systems, and driving intelligent cloud automation through AI/ML integrations.",
    url: "https://saurabhsonalakar.com",
    siteName: "Saurabh Sonalakar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Sonalakar | Software Development Engineer",
    description: "Portfolio of Saurabh Sonalakar, Backend Engineer specializing in Python, FastAPI, AWS, GCP and AI/ML.",
    creator: "@saurabhsonalakar",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

import { ScrollObserver } from "@/components/layout/ScrollObserver";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1 pt-20 page-transition">
          {children}
        </main>
        <Footer />
        <ScrollObserver />
      </body>
    </html>
  );
}
