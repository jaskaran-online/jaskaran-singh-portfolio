import { Github, Twitter, Figma } from 'lucide-react';

// Icons
import LogoJavascript from '../../public/images/logos/icon-javascript.svg';
import LogoTypescript from '../../public/images/logos/icon-typescript.svg';
import LogoReact from '../../public/images/logos/icon-react.svg';
import LogoNextjs from '../../public/images/logos/icon-nextjs.svg';
import LogoNodejs from '../../public/images/logos/icon-nodejs.svg';
import LogoTailwindcss from '../../public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '../../public/images/logos/icon-figma.svg';
import LogoGit from '../../public/images/logos/icon-git.svg';

// Logos
import LogoLaravel from '../../public/images/logos/laravel-svgrepo-com.svg';
import LogoPhp from '../../public/images/logos/php-svgrepo-com.svg';
import LogoMySQL from '../../public/images/logos/mysql-logo-svgrepo-com.svg';
import LogoAWS from '../../public/images/logos/aws-svgrepo-com.svg';
import ReactNativeLogo from '../../public/images/logos/reactjs-svgrepo-com.svg';
import LogoCoreSolutions from '../../public/images/core-solution-amritsar-website-development.png';

// [INFO] Projects
import PerfectAir from '../../public/perfectair.jpeg';
import GameHub from '../../public/gamehub.jpeg';
import iVALTLogo from '../../public/images/logo-ivalt.png';
import cleanfoldframs from '../../public/CleanFold/cleanfoldframs.png';
import MyCreditBook from '../../public/myCreditBook/frame.png';
import AvatarDummy from '../../public/images/avatar-dummy.svg';
import BikramjitAvatar from '../../public/images/bikramjeetsingh.jpeg';
import SandeepAvatar from '../../public/images/sandeep.png';
import { ExperienceDetails, ProjectDetails, TechDetails, TestimonialDetails } from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/jaskaran-online',
  GITHUB_REPO: 'https://github.com/jaskaran-online/jaskaran-singh-portfolio',
  TWITTER: 'https://x.com/jaskaran_5ingh',
  FIGMA: 'https://www.figma.com/@jaskaran4704',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '#services',
  },

  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/jaskaran-online',
  },
  {
    icon: Twitter,
    url: 'https://x.com/jaskaran_5ingh',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com/@jaskaran4704',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'React Native',
    logo: ReactNativeLogo,
    url: 'https://reactnative.dev/',
  },
  {
    label: 'PHP',
    logo: LogoPhp,
    url: 'https://www.php.net/',
  },
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://laravel.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    url: 'https://aws.amazon.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
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
    logoAlt: 'iVALT logo',
    position: 'Team Lead',
    startDate: new Date(2022, 5),
    currentlyWorkHere: true,
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Handled sprint planning & task distribution.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Tailwindcss, Mui, PHP and others.',
    ],
  },
  {
    logo: LogoCoreSolutions,
    darkModeLogo: LogoCoreSolutions,
    logoAlt: 'Core innovative solutions logo',
    position: 'Full Stack Developer',
    startDate: new Date(2020, 0),
    endDate: new Date(2022, 5),
    summary: [
      'Worked as a full stack developer (React / Laravel).',
      'Developed responsive and user-friendly interfaces using React.js and Tailwindcss.',
      'Designed and implemented database schemas using Laravel and MySQL.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'AceHaematology',
    description:
      'A comprehensive FRCPath haematology exam preparation platform with 1000+ practice questions, mock exams, and expert-crafted content designed by UK haematologists.',
    url: 'https://www.acehaematology.com/',
    projectDetails: 'https://www.acehaematology.com/',
    previewImage: '/acehaematology/home.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Postgres',
      'Tailwindcss',
      'Shadcn',
      'BetterAuth',
      'Stripe',
      'Vercel',
      'Drizzle ORM',
      'Vercel AI SDK',
    ],
  },
  {
    name: 'HRSolx Frontend + Backend',
    description:
      'Smart hiring platform connecting HR professionals with verified skilled workers across manufacturing, automotive, construction, and logistics industries with AI-powered matching.',
    url: 'https://www.hrsolx.com/',
    projectDetails: 'https://www.hrsolx.com/',
    previewImage: '/hr-solx/web.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'PHP',
      'Laravel',
      'MySQL',
      'Tailwindcss',
      'Shadcn',
      'Google SMTP',
    ],
  },
  {
    name: 'HRSolx Mobile App',
    description:
      'Mobile application for skilled workers to create profiles, manage availability, and connect with employers through secure Aadhaar verification and real-time job matching.',
    url: 'https://play.google.com/store/apps/details?id=com.hrsolx.worker',
    projectDetails: 'https://play.google.com/store/apps/details?id=com.hrsolx.worker',
    previewImage: '/hr-solx/hrsolx-mobile.png',
    technologies: [
      'React Native',
      'TypeScript',
      'Mobile App',
      'Authentication',
      'Real-time',
      'SMS Notification',
    ],
  },
  {
    name: 'Cleanfold iOS and Android Mobile App',
    description:
      'A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress.',
    url: '/project/cleanfold',
    projectDetails: '/project/cleanfold',
    previewImage: cleanfoldframs,
    technologies: [
      'Expo',
      'React Native',
      'React Query',
      'Firebase Push Notifications',
      'React Navigation',
      'Laravel',
      'MySQL',
    ],
  },
  {
    name: 'MyCreditBook iOS and Android Mobile App',
    description:
      'A mobile app for a credit book that allows users to track their credit history and manage their debts.',
    url: '/project/mycreditbook',
    projectDetails: '/project/mycreditbook',
    previewImage: MyCreditBook,
    technologies: [
      'React Native',
      'React Navigation',
      'Typescript',
      'NativeWind',
      'Expo',
      'Laravel',
      'MySQL',
      'React Query',
      'Camera Module',
      'Firebase',
      'Firebase Push Notifications',
      'Native Share',
      'PDF Print',
    ],
  },
  {
    name: 'Perfect Air Instruments',
    description: 'Portfolio website for gas alarm detection company.',
    url: 'https://perfectair.com.au/',
    projectDetails: '/project/perfectair',
    previewImage: PerfectAir,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'React Email',
      'SEO',
      'Google Bot Verification',
      'Laravel',
      'MySQL',
      'Filament',
    ],
  },
  {
    name: 'Game Hub',
    description:
      'A dynamic portfolio website designed for showcasing game previews, featuring an intuitive user interface and seamless navigation. This static website serves as a comprehensive platform for gamers to explore upcoming titles, read reviews, and access detailed information about each game.',
    url: 'https://gamehub.jaskaran.in/',
    projectDetails: '/project/gamehub',
    previewImage: GameHub,
    technologies: [
      'React JS',
      'Typescript',
      'Tailwindcss',
      'React Query',
      'Rawg API',
      'DaisyUI',
      'React Router',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Bikramjit Singh',
    personAvatar: BikramjitAvatar,
    title: 'Director | Perfect Air Instruments',
    testimonial:
      'I am thrilled to write a recommendation for Jaskaran singh, a truly exceptional full-stack developer and an outstanding individual. He possesses a unique blend of technical expertise, problem-solving skills, and creativity that sets him apart in the world of software development.',
    source: 'linkedin',
  },
  {
    personName: 'Sandeep Singh',
    personAvatar: SandeepAvatar,
    title: 'Full Stack Developer',
    testimonial:
      'Jaskaran is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good and hard working person. Great employee with a very strong problem solving skills. jaskaran is an asset to any company.',
    source: 'linkedin',
  },
  {
    personName: 'Rupinder Kaur',
    personAvatar: AvatarDummy,
    title: 'Co-Worker | iVALT',
    testimonial:
      'I had the opportunity to work directly under Jaskaran Singh, and it was a great learning experience. He’s not only a skilled Full Stack Developer but also a supportive mentor who genuinely cares about helping others grow. His clear guidance and thoughtful leadership helped me become more confident and independent. Anyone would be lucky to work with him.',
    source: 'linkedin',
  },
  {
    personName: 'SAURABH SINGH',
    personAvatar: AvatarDummy,
    title: 'Friend | BCA',
    testimonial:
      'I’ve known Jaskaran Singh for a long time, and we studied together during our early tech journey. He has always stood out for his curiosity and drive to explore new technologies. Whether it’s diving deep into complex problems or staying updated with the latest in full stack development, Jaskaran brings both enthusiasm and expertise to the table. He’s a dependable and resourceful developer, and any team would benefit from his innovative mindset and strong technical skills.',
    source: 'linkedin',
  },

  {
    personName: 'Sidharth Kashyap',
    personAvatar: AvatarDummy,
    title: 'Co-Worker | BMN',
    testimonial:
      'I am incredibly grateful for having jaskaran sir as a mentor, friend, and guide. Their contributions to my technical growth and personal development are immeasurable. I wholeheartedly recommend him to anyone seeking not just a skilled software developer, but also a dedicated and caring mentor. Thank you 🙏🏻 ',
    source: 'linkedin',
  },
];
