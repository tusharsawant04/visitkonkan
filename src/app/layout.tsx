import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Load Bootstrap CSS globally
import BootstrapClient from "@/components/BootstrapClient"; // Import the Client Component
import Script from 'next/script'; // Add this import
import { AuthProvider } from "@/context/AuthContext";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visit Konkan | Explore Beaches, Forts, Waterfalls & Authentic Konkan Experiences",
  description: "Plan your dream trip to Konkan! Discover pristine beaches, majestic forts, hidden waterfalls, authentic local cuisine, and memorable trekking adventures along India’s scenic western coast.",
  keywords: "Konkan tourism, Konkan travel guide, Konkan beaches, Konkan forts, Konkan waterfalls, Konkan trekking, Maharashtra travel, Visit Konkan, Konkan homestays, Konkan food",
  
  openGraph: {
  title: "Visit Konkan | Explore Scenic Beauty & Authentic Experiences",
      description: "Discover the untouched beauty of Konkan – from serene beaches and historic forts to thrilling treks and local cuisine. Start your Konkan adventure today!",
      type: "website",
      url: "https://www.visitkokan.in/",
      siteName: "Visit Konkan",
    },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover the scenic beauty and rich heritage of Konkan." />
        <meta name="keywords" content="Konkan, tourism, beaches, forts, waterfalls, trekking, travel" />
        <meta property="og:title" content="Visit Konkan" />
        <meta property="og:description" content="Discover the scenic beauty and rich heritage of Konkan." />
        <meta property="og:type" content="website" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <AuthProvider> {/* ✅ Wrap your entire app with AuthProvider */}
          <BootstrapClient />
          {children}
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"
            strategy="lazyOnload"
          />
        </AuthProvider>
            <Analytics/>
      </body>
    </html>
  );
}
