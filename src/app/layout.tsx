import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import { Metadata, Viewport } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins'
});

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
import ScrollProgress from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: "Jaskaran Singh Portfolio",
  authors: [{ name: "Jaskaran Singh", url: "https://jaskaran.in" }],
  generator: "Next.js",
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
    "React Native Developer",
    "Mobile App Developer",
    "Laravel Developer",
    "Portfolio",
    "Hire Developer",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Jaskaran Singh",
  publisher: "Jaskaran Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
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
        className="bg-background text-foreground antialiased transition-colors duration-300 font-inter"
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen bg-background">
            <ScrollProgress className="top-[65px]" />
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
