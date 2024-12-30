import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { BorderBeam } from "../ui/border-beam";

// Configuration object for easy content updates
const HERO_CONFIG = {
  name: "Jaskaran Singh",
  title: "FullStack Developer",
  description: `with a focus on creating (and occasionally designing) exceptional digital experiences web and mobile that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 5 years, I still love it as if it was something new.`,
  location: "Amritsar, Punjab, India",
  availability: "Available for new projects",
  codeProfile: {
    name: "Jaskaran Singh",
    skills: ["ReactJS", "NextJS", "ReactNative", "PHP", "Laravel"],
    hardWorker: true,
    problemSolver: true,
    traits: ["Hard Worker", "Problem Solver"],
  },
  skills: [
    {
      name: "React Native",
      url: "https://expo.dev/",
      icon: (
        <svg
          fill="dodgerblue"
          width="1.4rem"
          height="1.4rem"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>ionicons-v5_logos</title>
          <path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
          <path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
        </svg>
      )
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      icon: (
        <svg
          width={30}
          height={30}
          viewBox="0 0 65 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_93_112)">
            <mask
              id="mask0_93_112"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={65}
              height={64}
            >
              <path
                d="M32.4399 64C50.1131 64 64.4399 49.6731 64.4399 32C64.4399 14.3269 50.1131 0 32.4399 0C14.7668 0 0.439941 14.3269 0.439941 32C0.439941 49.6731 14.7668 64 32.4399 64Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_93_112)">
              <path
                d="M32.4399 62.9333C49.5239 62.9333 63.3733 49.084 63.3733 32C63.3733 14.916 49.5239 1.06665 32.4399 1.06665C15.3559 1.06665 1.50659 14.916 1.50659 32C1.50659 49.084 15.3559 62.9333 32.4399 62.9333Z"
                fill="black"
                stroke="white"
                strokeWidth={6}
              />
              <path
                d="M53.5983 56.0071L25.0237 19.2H19.6399V44.7893H23.947V24.6697L50.2173 58.6115C51.4027 57.8183 52.532 56.9475 53.5983 56.0071Z"
                fill="url(#paint0_linear_93_112)"
              />
              <path
                d="M45.5955 19.2H41.3289V44.8H45.5955V19.2Z"
                fill="url(#paint1_linear_93_112)"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_93_112"
              x1="39.1954"
              y1="41.4222"
              x2="51.8177"
              y2="57.0666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93_112"
              x1="43.4622"
              y1="19.2"
              x2="43.3907"
              y2={38}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <clipPath id="clip0_93_112">
              <rect
                width={64}
                height={64}
                fill="white"
                transform="translate(0.439941)"
              />
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      name: "Tailwind",
      url: "https://tailwindcss.com/",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="dark:text-gray-300/80 h-7 w-7 text-blue-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Tailwind</title>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
        </svg>
      )
    },
    {
      name: "Laravel",
      url: "https://laravel.com/",
      icon: (
        <svg
          width="1.4rem"
          height="1.4rem"
          viewBox="-4 0 264 264"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M255.855641,59.619717 C255.950565,59.9710596 256,60.3333149 256,60.6972536 L256,117.265345 C256,118.743206 255.209409,120.108149 253.927418,120.843385 L206.448786,148.178786 L206.448786,202.359798 C206.448786,203.834322 205.665123,205.195421 204.386515,205.937838 L105.27893,262.990563 C105.05208,263.119455 104.804608,263.201946 104.557135,263.289593 C104.464333,263.320527 104.376687,263.377239 104.278729,263.403017 C103.585929,263.58546 102.857701,263.58546 102.164901,263.403017 C102.051476,263.372083 101.948363,263.310215 101.840093,263.26897 C101.613244,263.186479 101.376082,263.1143 101.159544,262.990563 L2.07258227,205.937838 C0.7913718,205.201819 0,203.837372 0,202.359798 L0,32.6555248 C0,32.2843161 0.0515567729,31.9234187 0.144358964,31.5728326 C0.175293028,31.454252 0.24747251,31.3459828 0.288717928,31.2274022 C0.366053087,31.0108638 0.438232569,30.7891697 0.55165747,30.5880982 C0.628992629,30.4540506 0.742417529,30.3457814 0.83521972,30.2220451 C0.953800298,30.0570635 1.06206952,29.8869261 1.20127281,29.7425672 C1.31985339,29.6239866 1.4745237,29.5363401 1.60857131,29.4332265 C1.75808595,29.3094903 1.89213356,29.1754427 2.06227091,29.0774848 L2.06742659,29.0774848 L51.6134853,0.551122364 C52.8901903,-0.183535768 54.4613221,-0.183535768 55.7380271,0.551122364 L105.284086,29.0774848 L105.294397,29.0774848 C105.459379,29.1805983 105.598582,29.3094903 105.748097,29.4280708 C105.882144,29.5311844 106.031659,29.6239866 106.15024,29.7374115 C106.294599,29.8869261 106.397712,30.0570635 106.521448,30.2220451 C106.609095,30.3457814 106.727676,30.4540506 106.799855,30.5880982 C106.918436,30.7943253 106.985459,31.0108638 107.06795,31.2274022 C107.109196,31.3459828 107.181375,31.454252 107.212309,31.5779883 C107.307234,31.9293308 107.355765,32.2915861 107.356668,32.6555248 L107.356668,138.651094 L148.643332,114.878266 L148.643332,60.6920979 C148.643332,60.3312005 148.694889,59.9651474 148.787691,59.619717 C148.823781,59.4959808 148.890804,59.3877116 148.93205,59.269131 C149.014541,59.0525925 149.08672,58.8308984 149.200145,58.629827 C149.27748,58.4957794 149.390905,58.3875102 149.478552,58.2637739 C149.602288,58.0987922 149.705401,57.9286549 149.84976,57.7842959 C149.968341,57.6657153 150.117856,57.5780688 150.251903,57.4749553 C150.406573,57.351219 150.540621,57.2171714 150.705603,57.1192136 L150.710758,57.1192136 L200.261973,28.5928511 C201.538395,27.8571345 203.110093,27.8571345 204.386515,28.5928511 L253.932573,57.1192136 C254.107866,57.2223271 254.241914,57.351219 254.396584,57.4697996 C254.525476,57.5729132 254.674991,57.6657153 254.793572,57.7791402 C254.93793,57.9286549 255.041044,58.0987922 255.16478,58.2637739 C255.257582,58.3875102 255.371007,58.4957794 255.443187,58.629827 C255.561767,58.8308984 255.628791,59.0525925 255.711282,59.269131 C255.757683,59.3877116 255.824707,59.4959808 255.855641,59.619717 Z M247.740605,114.878266 L247.740605,67.8378666 L230.402062,77.8192579 L206.448786,91.6106946 L206.448786,138.651094 L247.745761,114.878266 L247.740605,114.878266 Z M198.194546,199.97272 L198.194546,152.901386 L174.633101,166.357704 L107.351512,204.757188 L107.351512,252.27191 L198.194546,199.97272 Z M8.25939501,39.7961379 L8.25939501,199.97272 L99.0921175,252.266755 L99.0921175,204.762344 L51.6392637,177.906421 L51.6237967,177.89611 L51.603174,177.885798 C51.443348,177.792996 51.3093004,177.658949 51.1597857,177.545524 C51.0308938,177.44241 50.8813791,177.359919 50.7679542,177.246494 L50.7576429,177.231027 C50.6235953,177.102135 50.5307931,176.942309 50.4173682,176.79795 C50.3142546,176.658747 50.1905184,176.540167 50.1080276,176.395808 L50.1028719,176.380341 C50.0100697,176.22567 49.9533572,176.040066 49.8863334,175.864773 C49.8193096,175.710103 49.7316631,175.565744 49.6904177,175.400762 L49.6904177,175.395606 C49.6388609,175.19969 49.6285496,174.993463 49.6079269,174.792392 C49.5873041,174.637722 49.5460587,174.483051 49.5460587,174.328381 L49.5460587,174.31807 L49.5460587,63.5689658 L25.5979377,49.7723734 L8.25939501,39.8012935 L8.25939501,39.7961379 Z M53.6809119,8.89300821 L12.3994039,32.6555248 L53.6706006,56.4180414 L94.9469529,32.6503692 L53.6706006,8.89300821 L53.6809119,8.89300821 Z M75.1491521,157.19091 L99.0972731,143.404629 L99.0972731,39.7961379 L81.7587304,49.7775291 L57.8054537,63.5689658 L57.8054537,167.177457 L75.1491521,157.19091 Z M202.324244,36.934737 L161.047891,60.6972536 L202.324244,84.4597702 L243.59544,60.6920979 L202.324244,36.934737 Z M198.194546,91.6106946 L174.24127,77.8192579 L156.902727,67.8378666 L156.902727,114.878266 L180.850848,128.664547 L198.194546,138.651094 L198.194546,91.6106946 Z M103.216659,197.616575 L163.759778,163.052915 L194.023603,145.781396 L152.778185,122.034346 L105.289242,149.374903 L62.0073307,174.292291 L103.216659,197.616575 Z"
              fill="#FF2D20"
            ></path>
          </g>
        </svg>

      )
    },
  ],
};

const CodeBlock = () => {
  const { name, skills, hardWorker, problemSolver } = HERO_CONFIG.codeProfile;

  return (
    <code className="code-one-dark">
      <BorderBeam />
      <div>
        <span className="mr-2 text-[#e06c75]">{"const"}</span>
        <span className="mr-2 dark:text-white">{"coder"}</span>
        <span className="mr-2 text-[#e06c75]">{"="}</span>
        <span className="text-[#e06c75]">{"{"}</span>
      </div>
      <div className="pl-4">
        <span className="text-[#d19a66]">"name"</span>:{" "}
        <span className="text-purple-500 dark:text-[#98c379]">"{name}"</span>,
      </div>
      <div className="pl-4">
        <span className="text-[#d19a66]">"skills"</span>:{" "}
        <span className="text-[#e06c75]">[</span>
        {skills.map((skill, index) => (
          <span key={index}>
            <span className="text-purple-500 dark:text-[#98c379]">"{skill}"</span>
            {index < skills.length - 1 && ", "}
          </span>
        ))}
        <span className="text-[#e06c75]">]</span>,
      </div>
      <div className="pl-4">
        <span className="text-[#d19a66]">"hardWorker"</span>:{" "}
        <span className="text-green-600 dark:text-[#56b6c2]">{hardWorker.toString()}</span>,
      </div>
      <div className="pl-4">
        <span className="text-[#d19a66]">"problemSolver"</span>:{" "}
        <span className="text-green-600 dark:text-[#56b6c2]">{problemSolver.toString()}</span>,
      </div>
      <div>
        <span className="text-[#e06c75]">{"}"}</span>
      </div>
    </code>
  );
};

const TwitterCard = () => (
  <div className="animate-float absolute right-[3%] top-[88%] rounded-sm border border-gray-300/40 bg-white backdrop-blur-[14px] shadow-sm dark:border-gray-700 dark:bg-gray-900/90 lg:right-[-5%] lg:top-[85%]">
    <section className="spacing-2 max-w-xs rounded-lg p-4 will-change-transform">
      <header className="flex gap-4">
        <figure className="overflow-hidden rounded-full border-2 border-gray-400/50 dark:border-gray-600/50">
          <Image
            width={40}
            height={40}
            alt="Jaskaran Singh"
            src="https://avatars.githubusercontent.com/u/42887065?v=4"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
            {HERO_CONFIG.name}
          </h2>
          <h3 className="text-sm tracking-tight text-blue-500 dark:text-blue-400">
            @jaskaran.singh
          </h3>
        </div>
        <a
          href="https://twitter.com/jaskaran_5ingh"
          rel="noopener noreferrer"
          target="_blank"
          className="my-auto ml-auto flex items-center justify-center rounded-full bg-sky-500 px-4 py-1.5 text-xs text-white transition-colors hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500"
        >
          Follow
        </a>
      </header>
      <main>
        <p className="mt-2 line-clamp-3 pr-2 text-[13px] tracking-tight text-gray-600 dark:text-gray-300">
          Hey, I'm new to twitter and not really a social media person 🙃 I'm
          looking to connect with fellow developers and to learn about the
          latest in web dev 🤗
        </p>
      </main>
      <footer className="mt-2">
        <p className="text-[13px] text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-800 dark:text-gray-200">136</span>{" "}
          Following
          <span className="ml-2 font-semibold text-gray-800 dark:text-gray-200">8</span>{" "}
          Followers
        </p>
      </footer>
    </section>
  </div>
);

const SkillBadge = ({ label, className }: { label: string; className: string }) => (
  <span className={cn(
    "heroText inline-flex cursor-pointer select-none items-center whitespace-nowrap rounded-md border-2 px-2.5 py-0.5 text-[13px] font-medium transition-all",
    className
  )}>
    {label}
  </span>
);

const CodeEditor = () => (
  <div className="flex flex-col gap-2">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-end gap-1 lg:gap-4">
        <SkillBadge
          label="Programmer"
          className="border-cyan-700/20 bg-cyan-100 text-cyan-900 hover:bg-cyan-200/90 dark:border-cyan-400/30 dark:bg-gradient-to-b dark:from-cyan-900/90 dark:to-cyan-900/90 dark:text-cyan-100"
        />
        <SkillBadge
          label="Problem Solver"
          className="border-green-700/20 bg-green-100 text-green-900 hover:bg-green-200/90 dark:border-green-400/30 dark:bg-gradient-to-b dark:from-green-900/90 dark:to-green-900/90 dark:text-green-100"
        />
        <SkillBadge
          label="Hard Worker"
          className="border-orange-700/20 bg-orange-100 text-orange-900 hover:bg-orange-200/90 dark:border-orange-400/30 dark:bg-gradient-to-b dark:from-orange-900/90 dark:to-orange-900/90 dark:text-orange-100"
        />
        <SkillBadge
          label="Web Developer"
          className="border-pink-700/20 bg-pink-100 text-pink-900 hover:bg-pink-200/90 dark:border-pink-400/30 dark:bg-gradient-to-b dark:from-pink-900/90 dark:to-pink-900/90 dark:text-pink-100"
        />
      </div>
    </div>

    <div className="relative ml-4 select-none rounded-lg border bg-gradient-to-r from-blue-750 to-indigo-900 backdrop-blur-[3px] dark:bg-gradient-to-r dark:from-blue-750 dark:to-indigo-900">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="py-2">
        <header className="mb-2 flex items-center justify-between border-b border-b-gray-200 py-2 pb-3 px-8 dark:border-b-gray-700 ">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 cursor-pointer rounded-full bg-red-400 hover:bg-red-500"></div>
            <div className="h-3 w-3 cursor-pointer rounded-full bg-orange-400 hover:bg-orange-500"></div>
            <div className="h-3 w-3 cursor-pointer rounded-full bg-green-400 hover:bg-green-500"></div>
          </div>
          <div className="select-none text-center text-[13px] leading-none tracking-wide dark:text-gray-400">
            page.tsx
          </div>
        </header>
      </div>
      <div className="overflow-hidden px-8 pb-8">
        <CodeBlock />
        <TwitterCard />
      </div>
    </div>
  </div>
);

const HeaderSkills = () => (
  <ul className="mt-2 flex flex-wrap items-center justify-start gap-3 overflow-x-auto px-4 pb-2 text-[15px] font-medium sm:scrollbar-none">
    {HERO_CONFIG.skills.map((skill, index) => (
      <Link key={index} href={skill.url} target="_blank" className="bg-gradient-to-r from-blue-750 to-indigo-900 backdrop-blur-[4px]">
        <li className="flex items-center gap-2 text-gray-200 dark:text-white">
          {skill.icon}
          <span className="text-[#000000] dark:text-[#ffffff]">{skill.name}</span>
        </li>
      </Link>
    ))}
  </ul>
);

const HeroSection = () => {
  return (
    <Container id="hero" className="relative flex w-full items-center justify-center overflow-hidden rounded-lg h-[90vh]">
      <div className="z-10">
        <div className="flex flex-col gap-48 flex-col md:flex-row md:gap-8 pb-10">
          {/* Code Editor */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <CodeEditor />
          </div>

          {/* Content */}
          <div className="flex max-w-2xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-medium">Hey there!, I'm -</div>
              <Typography variant="h1">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent bg-blur-lg">
                  {HERO_CONFIG.name}
                </span>{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </Typography>
              <Typography className="bg-gradient-to-r from-blue-750 to-indigo-900 backdrop-blur-[4px]">
                I'm a{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-blur-lg text-xl font-bold">
                  {HERO_CONFIG.title}
                </span>{" "}
                {HERO_CONFIG.description}
              </Typography>
              <div className="border-1 border-gray-200">
                <HeaderSkills />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <Typography>{HERO_CONFIG.location}</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography>{HERO_CONFIG.availability}</Typography>
              </div>
            </div>

            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Dark theme background */}
        <img
          src="https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg"
          alt=""
          className="hidden dark:block absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Light theme background */}
        <img
          src="https://tailwindui.com/plus/img/beams-home@95.jpg"
          alt=""
          className="block dark:hidden absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <AnimatedGridPattern
        numSquares={70}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0 z-[1]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 text-[#1E90FF] dark:text-[#1E90FF]"
        )}
      />
    </Container>
  );
};

export default HeroSection;

