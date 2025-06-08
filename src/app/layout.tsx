// src/app/layout.tsx
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const josefin = Josefin_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-josefin",
});
export const metadata: Metadata = {
  title: "Saudade – DJ Saudade Official Site",
  description: "Upcoming events, gallery, and mixes from DJ Saudade",
  openGraph: {
    title: "Saudade – DJ Saudade",
    description: "Official DJ Saudade website",
    url: "https://www.yourdomain.com",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DJ Saudade performing live",
      },
    ],
    siteName: "Saudade",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudade",
    description: "Official site for DJ Saudade",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-gray-900 text-gray-100 antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
