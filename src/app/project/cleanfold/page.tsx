import React from 'react';
import Container from '@/components/layout/container';
import cleanfoldframs from '/public/CleanFold/cleanfoldframs.png';
import Image from 'next/image';
import LogoLaravel from '/public/images/logos/laravel-svgrepo-com.svg';
import ReactNativeLogo from '/public/images/logos/reactjs-svgrepo-com.svg';
import LogoExpo from '/public/images/logos/expo-svgrepo-com.svg';
import { Metadata } from 'next';
import { CleanFoldContent } from './components/CleanFoldContent';
import './styles.css';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh',
  description:
    'A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.',
  alternates: {
    canonical: 'https://jaskaran.in/project/cleanfold',
  },
  openGraph: {
    title: 'CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh',
    description:
      'A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.',
    images: [
      {
        url: '/CleanFold/cleanfoldframs.png',
        width: 1200,
        height: 630,
        alt: 'CleanFold App Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh',
    description:
      'A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.',
    images: {
      url: '/CleanFold/cleanfoldframs.png',
      alt: 'CleanFold App Preview',
    },
  },
};

const features = [
  {
    title: 'Real-time Order Tracking',
    description: 'Monitor laundry orders in real-time with instant status updates and notifications.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Smart Inventory Management',
    description: 'Efficiently manage inventory with automated stock alerts and usage analytics.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Secure Authentication',
    description: 'Enterprise-grade security with role-based access control and data encryption.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Dynamic Pricing',
    description: 'Flexible pricing models with support for discounts, promotions, and loyalty programs.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Offline Capability',
    description: 'Continue working without internet connection with automatic sync when back online.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Comprehensive Analytics',
    description: 'Gain insights with detailed reports on sales, customer behavior, and operational efficiency.',
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
  },
];

const projectDetails = {
  timeline: '3 months',
  team: '4 developers',
  role: 'Lead Developer',
  challenges: [
    'Implementing offline functionality with data synchronization',
    'Creating an intuitive UI for non-technical staff',
    'Ensuring secure data handling for customer information',
  ],
  solutions: [
    'Used AsyncStorage with custom sync logic for offline capabilities',
    'Conducted user testing with actual laundry staff for UI refinement',
    'Implemented end-to-end encryption for sensitive customer data',
  ],
};

const techStack = [
  {
    name: 'React Native',
    logo: ReactNativeLogo,
    description: 'A powerful framework for building native mobile applications using React. It allows for a smooth user interface and performance comparable to native apps.',
  },
  {
    name: 'Expo',
    logo: LogoExpo,
    description: 'A framework and platform for universal React applications. Expo simplifies the development process by providing a set of tools and services for building, deploying, and iterating on mobile apps.',
    darkInvert: true,
  },
  {
    name: 'Laravel',
    logo: LogoLaravel,
    description: 'A robust PHP framework that provides an elegant syntax and powerful tools for building web applications. Laravel is used for the backend services of the CleanFold app, ensuring secure and efficient data handling.',
  },
];

export default function Cleanfold() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 flex flex-col gap-8 px-6 py-16 md:px-12 lg:flex-row lg:items-center lg:py-20">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                Mobile App
              </Badge>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                React Native
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                Android
              </Badge>
              <Badge variant="secondary" className="bg-gray-900 text-white dark:bg-white dark:text-black">
                iOS
              </Badge>
            </div>

            <h1 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
              CleanFold
            </h1>
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
              Laundry Management Mobile App
            </p>
            <p className="text-muted-foreground">
              A comprehensive mobile application tailored for a cleaning company, empowering employees
              to easily access their assigned jobs, track progress in real-time, and manage their
              daily tasks effectively. This tool enhances operational efficiency and ensures that all
              job details are readily available at their fingertips.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <Button className="group">
                View Demo <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline">
                Download Case Study <Download className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>

          <div className="relative lg:w-1/2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-brp-2 ">
              <div className="absolute inset-0 bg-gradient-to-br  to-cyan-500/20 backdrop-blur-sm"></div>
              <div className="relative overflow-hidden rounded-[1.8rem] ">
                <Image
                  src={cleanfoldframs}
                  alt="CleanFold Mobile App Interface Preview"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Key Features</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            CleanFold is packed with powerful features designed to streamline laundry operations and enhance productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-gray-50 shadow-sm transition-all hover:shadow-md dark:bg-gray-900/50">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="mt-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Technology Stack</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Built with modern technologies to ensure high performance, scalability, and a seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {techStack.map((tech, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-36 items-center justify-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  width={100}
                  height={40}
                  className={  tech.darkInvert ? "dark:invert" : ""}
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Section */}
      <div className="mt-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Project Details</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            An inside look at the development process, challenges faced, and solutions implemented.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Timeline</h4>
                <p className="text-muted-foreground">{projectDetails.timeline}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Team Size</h4>
                <p className="text-muted-foreground">{projectDetails.team}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">My Role</h4>
                <p className="text-muted-foreground">{projectDetails.role}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">Key Challenges</h4>
                <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                  {projectDetails.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">Our Solutions</h4>
                <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                  {projectDetails.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* App Screens Section */}
      <div className="mt-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">App Screens</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore the intuitive interface and powerful features of the CleanFold mobile app.
          </p>
        </div>

        <CleanFoldContent />
      </div>

      {/* Call to Action */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-center text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">Interested in a Similar Solution?</h2>
        <p className="mb-6 text-blue-50">
          Let's discuss how we can create a custom mobile application tailored to your business needs.
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/contact">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
