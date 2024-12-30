import { Github, Twitter, Figma } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoLaravel from "/public/images/logos/laravel-svgrepo-com.svg";
import LogoPhp from "/public/images/logos/php-svgrepo-com.svg";
import LogoMySQL from "/public/images/logos/mysql-logo-svgrepo-com.svg";
import LogoAWS from "/public/images/logos/aws-svgrepo-com.svg";
import ReactNativeLogo from "/public/images/logos/reactjs-svgrepo-com.svg";
import LogoExpo from "/public/images/logos/expo-svgrepo-com.svg";
import LogoCoreSolutions from "/public/images/core-solution-amritsar-website-development.png";

import PerfectAir from "/public/perfectair.jpeg";
import GameHub from "/public/gamehub.jpeg";
import iVALTLogo from "/public/images/logo-ivalt.png";
import cleanfoldframs from "/public/CleanFold/cleanfoldframs.png";
import MyCreditBook from "/public/myCreditBook/frame.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";
import BikramjitAvatar from "/public/images/bikramjeetsingh.jpeg";
import SandeepAvatar from "/public/images/sandeep.png";
import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/jaskaran-online",
  GITHUB_REPO: "https://github.com/jaskaran-online/jaskaran-singh-portfolio",
  TWITTER: "https://x.com/jaskaran_5ingh",
  FIGMA: "https://www.figma.com/@jaskaran4704",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/jaskaran-online",
  },
  {
    icon: Twitter,
    url: "https://x.com/jaskaran_5ingh",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@jaskaran4704",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "React Native",
    logo: ReactNativeLogo,
    url: "https://reactnative.dev/",
  },
  {
    label: "Expo",
    logo: LogoExpo,
    url: "https://expo.dev/",
  },
  {
    label: "PHP",
    logo: LogoPhp,
    url: "https://www.php.net/",
  },
  {
    label: "Laravel",
    logo: LogoLaravel,
    url: "https://laravel.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "MySQL",
    logo: LogoMySQL,
    url: "https://www.mysql.com/",
  },
  {
    label: "AWS",
    logo: LogoAWS,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  // {
  //   logo: LogoUpwork,
  //   logoAlt: "Upwork logo",
  //   position: "Independent Freelancer",
  //   startDate: new Date(2021, 10),
  //   currentlyWorkHere: true,
  //   summary: [
  //     "Worked for various clients like NAYIA, Bikramjit, and others.",
  //     "Worked with a variety of technologies, including React, Next.js, Typescript, Tailwindcss, Mui, PHP and others.",
  //   ],
  // },
  {
    logo: iVALTLogo,
    darkModeLogo: iVALTLogo,
    logoAlt: "iVALT logo",
    position: "Team Lead",
    startDate: new Date(2022, 5),
    currentlyWorkHere: true,
    summary: [
      "Acted as team lead in different projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    logo: LogoCoreSolutions,
    darkModeLogo: LogoCoreSolutions,
    logoAlt: "Core innovative solutions logo",
    position: "Full Stack Developer",
    startDate: new Date(2020, 0),
    endDate: new Date(2022, 5),
    summary: ["Worked as a full stack developer (React / Laravel)."],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Cleanfold iOS and Android Mobile App",
    description:
      "A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress.",
    url: '/project/cleanfold',
    projectDetails: '/project/cleanfold',
    previewImage: cleanfoldframs,
    technologies: [
      "Expo",
      "React Native",
      "React Query",
      "Firebase Push Notifications",
      "React Navigation",
      "Laravel",
      "MySQL",
    ],
  },
  {
    name: "MyCreditBook iOS and Android Mobile App",
    description:
      "A mobile app for a credit book that allows users to track their credit history and manage their debts.",
    url: '/project/mycreditbook',
    projectDetails: '/project/mycreditbook',
    previewImage: MyCreditBook,
    technologies: [
      "React Native",
      "React Navigation",
      "Typescript",
      "NativeWind",
      "Expo",
      "Laravel",
      "MySQL",
      "React Query",
      "Camera Module",
      "Firebase",
      "Firebase Push Notifications",
      "Native Share",
      "PDF Print",
    ],
  },
  {
    name: "Perfect Air Instruments",
    description:
      "Portfolio website for gas alarm detection company.",
    url: "https://perfectair.com.au/",
    projectDetails: '/project/perfectair',
    previewImage: PerfectAir,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "React Email",
      "SEO",
      "Google Bot Verification",
      "Laravel",
      "MySQL",
      "Filament"
    ],
  },
  {
    name: "Game Hub",
    description:
      "A dynamic portfolio website designed for showcasing game previews, featuring an intuitive user interface and seamless navigation. This static website serves as a comprehensive platform for gamers to explore upcoming titles, read reviews, and access detailed information about each game.",
    url: "https://gamehub.jaskaran.in/",
    projectDetails: '/project/gamehub',
    previewImage: GameHub,
    technologies: [
      "React JS",
      "Typescript",
      "Tailwindcss",
      "React Query",
      "Rawg API",
      "DaisyUI",
      "React Router",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Bikramjit Singh",
    personAvatar: BikramjitAvatar,
    title: "Director | Perfect Air Instruments",
    testimonial:
      "I am thrilled to write a recommendation for Jaskaran singh, a truly exceptional full-stack developer and an outstanding individual. He possesses a unique blend of technical expertise, problem-solving skills, and creativity that sets him apart in the world of software development.",
    source: "linkedin"
  },
  {
    personName: "Sandeep Singh",
    personAvatar: SandeepAvatar,
    title: "Full Stack Developer",
    testimonial:
      "Jaskaran is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good and hard working person. Great employee with a very strong problem solving skills. jaskaran is an asset to any company.",
    source: "personal"
  },
  {
    personName: "Sagar Patil",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Jaskaran was extremely easy and pleasant to work with and he truly cares about the project being a success. Jaskaran has a high level of knowledge and was able to work on my MERN stack application without any issues.",
    source: "twitter"
  },
  {
    personName: "Sarah Johnson",
    personAvatar: AvatarDummy,
    title: "Product Manager",
    testimonial:
      "Working with Jaskaran was a game-changer for our project. His technical expertise and ability to translate complex requirements into elegant solutions made him an invaluable asset to our team.",
    source: "linkedin"
  },
  {
    personName: "Michael Chen",
    personAvatar: AvatarDummy,
    title: "Tech Lead | StartupX",
    testimonial:
      "Jaskaran's full-stack capabilities are impressive. He consistently delivered high-quality code and was always ready to tackle challenging problems with innovative solutions.",
    source: "student"
  },
  {
    personName: "Emma Davis",
    personAvatar: AvatarDummy,
    title: "UX Designer",
    testimonial:
      "I had the pleasure of collaborating with Jaskaran on several projects. His attention to detail and commitment to creating seamless user experiences perfectly complemented our design vision.",
    source: "personal"
  }
];
