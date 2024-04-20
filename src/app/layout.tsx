import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./../providers/next-ui-provider";
import Image from "next/image";
import Header from "@/components/nav-menu";
// import StartBackground from "@/components/StarBackground";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaskaran Singh",
  description:
    " I love writing code that takes things next level creating highly performant websites, automated API integrations, building my own dev-tools, and creating stunning user-experiences that makes you feel WOW!.",
  keywords:
    "Jaskaran Singh, Jaskaran, Jaskaran Singh, Amritsar, Punjab, India, 143601, 143606, Laravel, PHP, ReactJS, NEXTJS, HTML, CSS, Javascript, javascript, Html, Webcooks, CoreSolutions, best ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="Developer, React, React Native, Backend, SEO, Amritsar, Punjab, India, Software Development, Frontend, Full Stack, Mobile App Development, Web Development, Programming, IT Services, Digital Marketing, Tech Solutions, Coding, JavaScript, Node.js, MongoDB, Express.js, UI/UX, Search Engine Optimization, App Design, Software Engineer, IT Company, Technology, Innovation"
        />
        <meta
          name="description"
          content="I love writing code that takes things next level creating highly performant websites, automated API integrations, building my own dev-tools, and creating stunning user-experiences that makes you feel WOW!."
        />
        <meta name="author" content="Jaskaran Singh" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jaskaran Singh" />
        <meta
          property="og:description"
          content="I love writing code that takes things next level creating highly performant websites, automated API integrations, building my own dev-tools, and creating stunning user-experiences that makes you feel WOW!."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/42887065?v=4"
        />
        <meta property="og:url" content="https://jaskaransingh.info" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jaskaran Singh" />
        <meta
          name="twitter:description"
          content="I love writing code that takes things next level creating highly performant websites, automated API integrations, building my own dev-tools, and creating stunning user-experiences that makes you feel WOW!."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/42887065?v=4"
        />
        <meta name="twitter:url" content="https://jaskaransingh.info" />
        <Script id="script" async src="https://www.googletagmanager.com/gtag/js?id=G-KGEBTE2XRW"></Script>
        <Script id="G-KGEBTE2XRW">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-KGEBTE2XRW');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          {/* <StartBackground /> */}
          <Image
            alt="background"
            src="/bg-grid-lighter.4c1e8196.svg" // Replace with your image path
            layout="fill"
            objectFit="cover"
            quality={100}
            priority // This is optional, use it for high-priority images
          />
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
