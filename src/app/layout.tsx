import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata, Viewport } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const title = "Jaskaran Singh | Full Stack Developer From Amritsar, India.";
const description =
  "Jaskaran Singh is a software engineer with a passion for building web and mobile applications. He is a full stack developer and has a knack for creating user-friendly and efficient web applications.";
const url = "https://jaskaran.in";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Jaskaran Singh",
    "Amritsar",
    "Punjab",
    "India",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  creator: "Jaskaran Singh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    locale: 'en_US',
    images: [
      {
        url: "/images/jas.jpg",
        width: 1200,
        height: 630,
        alt: "Jaskaran Singh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@jaskaran_singh",
    images: {
      url: "/images/jas.jpg",
      alt: "Jaskaran Singh - Full Stack Developer",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body
        className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen bg-background">
            <Header />
            <main className="relative flex min-h-screen w-full flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
