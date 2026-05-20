import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "BKC Engineering | Premium Solar & Renewable Energy Solutions",
  description: "BKC Engineering provides premium solar panel installations, hybrid battery backups, and comprehensive electrical engineering services for homes and businesses across Ghana.",
  keywords: [
    "Solar Energy Ghana", 
    "Solar Installation Accra", 
    "Backup Power Solutions", 
    "Commercial Solar Panels", 
    "BKC Engineering", 
    "Renewable Energy Africa",
    "Lithium Battery Storage"
  ],
  authors: [{ name: "BKC Engineering" }],
  creator: "BKC Engineering",
  publisher: "BKC Engineering",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://www.bkcengineering.com", // Replace with your actual domain
    title: "BKC Engineering | Powering Ghana's Future",
    description: "Reliable, clean, and premium solar energy solutions tailored for your residential or commercial needs.",
    siteName: "BKC Engineering",
    images: [
      {
        url: "/images/og-image.jpg", // Create a beautiful 1200x630px banner image and place it in your public folder
        width: 1200,
        height: 630,
        alt: "BKC Engineering Solar Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BKC Engineering | Premium Solar Solutions",
    description: "Tier-1 solar installations and battery backups for homes and businesses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="">

        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
