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
import ProjectFiskil from "/public/images/project-fiskil.png";
import ProjectWingie from "/public/images/project-wingie.png";
import ProjectPepehousing from "/public/images/project-pepehousing.png";
import iVALTLogo from "/public/images/logo-ivalt.png";

import AvatarDummy from "/public/images/avatar-dummy.svg";
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
    label: "Work",
    href: "#work",
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
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Bikramjit Singh",
    personAvatar:
      "https://media.licdn.com/dms/image/C5603AQHtcq_RtqI1PA/profile-displayphoto-shrink_200_200/0/1619476033899?e=1725494400&v=beta&t=we18vPXvgkmQH-IwjS2mUaNBGyqPl8jxV9TJ-rgTQEM",
    title: "Director | Perfect Air Instruments",
    testimonial:
      "I am thrilled to write a recommendation for Jaskaran singh, a truly exceptional full-stack developer and an outstanding individual. He possesses a unique blend of technical expertise, problem-solving skills, and creativity that sets him apart in the world of software development.",
  },
  {
    personName: "Sandeep Singh",
    personAvatar:
      "https://media.licdn.com/dms/image/C5603AQFizKGOjP02Mg/profile-displayphoto-shrink_200_200/0/1625713207871?e=1725494400&v=beta&t=cvqHHziR5mjKZ1YhUtNvLBonZrNEpCml2gSygGGNIBw",
    title: "Full Stack Developer",
    testimonial:
      "Jaskaran is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good and hard working person. Great employee with a very strong problem solving skills. jaskaran is an asset to any company.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Jaskaran was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
