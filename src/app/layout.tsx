import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';
import ScrollToTop from '@/components/scroll-to-top';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const title = 'Jaskaran Singh - Full Stack Developer & Mentor in India';
const description =
  'Passionate Full Stack Developer specializing in web and mobile apps. Available for new projects in Amritsar, India.';
const url = 'https://jaskaran.in';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

import { cn } from '@/lib/utils';
import ScrollProgress from '@/components/ui/scroll-progress';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: 'Jaskaran Singh Portfolio',
  authors: [{ name: 'Jaskaran Singh', url: 'https://jaskaran.in' }],
  generator: 'Next.js',
  keywords: [
    'Full Stack Developer in Amritsar',
    'React and Next.js Expert',
    'Mobile App Developer in India',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Jaskaran Singh',
    'Amritsar',
    'Punjab',
    'India',
    'Software Engineer',
    'Software Developer',
    'Web Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'React Native Developer',
    'Mobile App Developer',
    'Laravel Developer',
    'Portfolio',
    'Hire Developer',
    'Javascript',
    'Typescript',
    'React',
    'Next.js',
    'React Native',
    'Laravel',
    'Amritsar, Punjab, India',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Jaskaran Singh',
  publisher: 'Jaskaran Singh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    locale: 'en_US',
    images: [
      {
        url: '/images/jas.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaskaran Singh - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@jaskaran_singh',
    images: {
      url: '/images/jas.jpg',
      alt: 'Jaskaran Singh - Full Stack Developer',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          poppins.variable
        )}
      >
        {/* Google Analytics */}
        {googleAnalyticsId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
            <Script id="google-anayltics-script">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${googleAnalyticsId}');
            `}
            </Script>
          </>
        )}

        {/* Schema.org structured data */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://jaskaran.in',
              name: 'Jaskaran Singh',
              givenName: 'Jaskaran',
              familyName: 'Singh',
              jobTitle: 'Full Stack Developer',
              description: 'Passionate Full Stack Developer specializing in web and mobile apps',
              url: 'https://jaskaran.in',
              sameAs: [
                'https://github.com/jaskaran-online',
                'https://linkedin.com/in/jaskaran-5ingh',
                'https://x.com/jaskaran_5ingh',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Amritsar',
                addressRegion: 'Punjab',
                addressCountry: 'India',
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Guru Nanak Dev University',
              },
              knowsAbout: [
                'Full Stack Development',
                'React',
                'Next.js',
                'React Native',
                'Laravel',
                'JavaScript',
                'TypeScript',
                'Web Development',
                'Mobile App Development',
              ],
            }),
          }}
        />
        <Script
          id="schema-portfolio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Collection',
              '@id': 'https://jaskaran.in',
              name: "Jaskaran Singh's Portfolio",
              description: 'A collection of software development projects by Jaskaran Singh',
              author: { '@id': 'https://jaskaran.in' },
              itemListElement: [
                {
                  '@type': 'SoftwareSourceCode',
                  name: 'Portfolio Website',
                  description: 'Personal portfolio website built with Next.js and TailwindCSS',
                  programmingLanguage: ['TypeScript', 'JavaScript'],
                  codeRepository: 'https://github.com/jaskaran-online/jaskaran-singh-portfolio',
                  url: 'https://jaskaran.in',
                },
              ],
            }),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <ScrollToTop />
            </div>
          </Providers>
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
