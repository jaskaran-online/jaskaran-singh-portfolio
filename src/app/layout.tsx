import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from './../providers/next-ui-provider'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Jaskaran Singh',
    description: ' I am a full stack developer with an experience of over 4 years. I have hands on experience working with frameworks and backend technologies.',
    keywords: 'Jaskaran Singh, Jaskaran, Jaskaran Singh, Amritsar, Punjab, India, 143601, 143606, Laravel, PHP, ReactJS, NEXTJS, HTML, CSS, Javascript, javascript, Html, Webcooks, CoreSolutions, best ',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="keywords"
              content="Developer, React, React Native, Backend, SEO, Amritsar, Punjab, India, Software Development, Frontend, Full Stack, Mobile App Development, Web Development, Programming, IT Services, Digital Marketing, Tech Solutions, Coding, JavaScript, Node.js, MongoDB, Express.js, UI/UX, Search Engine Optimization, App Design, Software Engineer, IT Company, Technology, Innovation"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description"
              content="I am a full stack developer with an experience of over 4 years. I have hands on experience working with frameworks and backend technologies."/>
        <meta name="author" content="Jaskaran Singh"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Jaskaran Singh"/>
        <meta property="og:description"
              content="I am a full stack developer with an experience of over 4 years. I have hands on experience working with frameworks and backend technologies."/>
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/42887065?v=4"/>
        <meta property="og:url" content="https://jaskaransingh.info"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Jaskaran Singh"/>
        <meta name="twitter:description"
              content="I am a full stack developer with an experience of over 4 years. I have hands on experience working with frameworks and backend technologies."/>
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/42887065?v=4"/>
        <meta name="twitter:url" content="https://jaskaransingh.info"/>
        <meta name="theme-color" content="#000"/>
        <meta name="color-scheme" content="dark light"/>
        <meta name="msapplication-TileColor" content="#000"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="Jaskaran Singh"/>
        <meta name="application-name" content="Jaskaran Singh"/>
        <meta name="apple-touch-fullscreen" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="Jaskaran Singh"/>
        <meta name="application-name" content="Jaskaran Singh"/>
        <meta name="msapplication-TileColor" content="#000"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>

        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
