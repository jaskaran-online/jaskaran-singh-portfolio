/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "../components/HeroAnimation";
import NavMenu from "@/components/nav-menu";

function Header() {
    return (
        <NavMenu/>
    );
}

const CodeBlock = () => {
    return (
        <code className="code-one-dark">
            <div>
                <span className="text-[#e06c75] mr-2">{"const"}</span>
                <span className="text-white mr-2">{"coder"}</span>
                <span className="text-[#e06c75] mr-2">{"="}</span>
                <span className="text-[#e06c75]">{"{"}</span>
            </div>
            <div className="pl-4">
                <span className="text-[#d19a66]">"name"</span>:{" "}
                <span className="text-[#98c379]">"Jaskaran Singh"</span>,
            </div>
            <div className="pl-4">
                <span className="text-[#d19a66]">"skills"</span>:{" "}
                <span className="text-[#e06c75]">[</span>{" "}
                <span className="text-[#98c379]">"React"</span>,{" "}
                <span className="text-[#98c379]">"ReactNative"</span>,{" "}
                <span className="text-[#98c379]">"Laravel"</span>
                <span className="text-[#e06c75]">]</span>,
            </div>
            <div className="pl-4">
                <span className="text-[#d19a66]">"hardWorker"</span>:{" "}
                <span className="text-[#56b6c2]">true</span>,
                <span className="cursor">|</span>
            </div>
            <div className="pl-4">
                <span className="text-[#d19a66]">"problemSolver"</span>:{" "}
                <span className="text-[#56b6c2]">true</span>,
            </div>
            <div className="pl-4">
                <span className="text-[#d19a66]">"hireable"</span>:
                <span className="text-[#c678dd] ml-2">{"() =>"}</span>
                <span className="text-[#e06c75] ml-2">{"{"}</span>
                <div className="pl-4">
                    <span className="text-[#c678dd]">{"return ("}</span>{" "}
                    <div className="pl-4">
                        <span className="text-[#e06c75]">this.</span>hardWorker{" "}
                        <span className="text-[#d19a66]">&amp;&amp;</span>{" "}
                    </div>
                    <div className="pl-4">
                        <span className="text-[#e06c75]">this.</span>problemSolver{" "}
                        <span className="text-[#d19a66]">&amp;&amp;</span>{" "}
                    </div>
                    <div className="pl-4">
                        <span className="text-[#e06c75]">this.</span>
                        skills.length <span className="text-[#d19a66]"> &gt;= 5</span>
                    </div>
                    <span className="text-[#c678dd]">{");"}</span>
                </div>
                <span className="text-[#e06c75]">{"}"}</span>
            </div>
            <div>
                <span className="text-[#e06c75]">{"}"}</span>
            </div>
        </code>
    );
};

function TwitterCard() {
    return (
        <div
            className="shadow-cyan-900/30 shadow-sm rounded-lg bg-slate-950/90 backdrop-filter backdrop-blur-2xl absolute lg:top-[53%] lg:-right-20 animate-float">
            <section className="max-w-xs rounded-lg border-2 border-gray-400/10 p-4 will-change-transform spacing-2">
                <header className="flex gap-4">
                    <figure className="overflow-hidden rounded-full border-2 border-gray-400/50">
                        <Image
                            width={40}
                            height={40}
                            alt="Jaskaran Singh"
                            src={"https://avatars.githubusercontent.com/u/42887065?v=4"}
                        />{" "}
                    </figure>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-sm heroText font-semibold tracking-wide">
                            Jaskaran Singh
                        </h2>
                        <h3 className="text-sm tracking-tight text-gray-500 d:text-gray-300/90">
                            @jaskaran.singh
                        </h3>
                    </div>
                    <a
                        href="https://twitter.com/FelixTellmann"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="butter-border my-auto ml-auto flex items-center justify-center rounded-full bg-sky-500/90 py-1.5 px-4 text-xs text-white transition-colors hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80"
                    >
                        Follow
                    </a>
                </header>
                <main>
                    <p className=" pr-2 text-[13px] tracking-tight text-slate-300 mt-2 line-clamp-3 d:text-gray-300/90">
                        Hey, I'm new to twitter and not really a social media person 🙃 I'm
                        looking to connect with fellow developers and to learn about the
                        latest in web dev 🤗
                    </p>
                </main>
                <footer className="mt-2">
                    <p className="text-[13px] text-gray-500 d:text-gray-300/90">
            <span className="heroText font-semibold text-slate-200 d:text-gray-200">
              136
            </span>{" "}
                        Following
                        <span className="ml-2 heroText font-semibold text-slate-200 d:text-gray-200">
              8
            </span>{" "}
                        Followers
                    </p>
                </footer>
            </section>
        </div>
    );
}

function CodeEditor() {
    return (
        <div className="flex flex-col gap-2">

            <div className="container mx-auto">
                <div className="flex flex-wrap gap-1 lg:gap-4 justify-end">
                      <span
                          className="heroText inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all px-2.5 py-0.5 text-[13px] cursor-pointer border-cyan-700/20 bg-cyan-100 text-cyan-900 hfa:bg-cyan-200/90 d:border-cyan-400/30 d:bg-gradient-to-b d:from-cyan-900/90 d:to-cyan-900/90 d:text-cyan-100 d:hfa:from-cyan-900/70 d:hfa:to-cyan-900/70">
                        Programmer
                      </span>

                    <span
                        className="heroText inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all px-2.5 py-0.5 text-[13px] cursor-pointer border-green-700/20 bg-green-100 text-green-900 hfa:bg-green-200/90 d:border-green-400/30 d:bg-gradient-to-b d:from-green-900/90 d:to-green-900/90 d:text-green-100 d:hfa:from-green-900/70 d:hfa:to-green-900/70">
                        Problem Solver
                      </span>

                    <span
                        className="heroText inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all px-2.5 py-0.5 text-[13px] cursor-pointer border-orange-700/20 bg-orange-100 text-orange-900 hfa:bg-orange-200/90 d:border-orange-400/30 d:bg-gradient-to-b d:from-orange-900/90 d:to-orange-900/90 d:text-orange-100 d:hfa:from-orange-900/70 d:hfa:to-orange-900/70">
                        Hard Worker
                      </span>

                    <span
                        className="heroText inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all px-2.5 py-0.5 text-[13px] cursor-pointer border-pink-700/20 bg-pink-100 text-pink-900 hfa:bg-pink-200/90 d:border-pink-400/30 d:bg-gradient-to-b d:from-pink-900/90 d:to-pink-900/90 d:text-pink-100 d:hfa:from-pink-900/70 d:hfa:to-pink-900/70">
                          Web Developer
                        </span>

                </div>
            </div>

            <div
                className="ml-4 bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative">
                <div className="flex flex-row">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                    <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                </div>
                <div className="px-8 py-2">
                    <header className="mb-2 flex justify-between items-center border-b border-b-gray-800 py-2 pb-3">
                        <div className="flex flex-row space-x-2">
                            <div className="rounded-full bg-red-400 cursor-pointer hover:bg-red-500 w-3 h-3"></div>
                            <div
                                className="rounded-full bg-orange-400 cursor-pointer hover:bg-orange-500 w-3 h-3"></div>
                            <div className="rounded-full bg-green-400 cursor-pointer hover:bg-green-500 w-3 h-3"></div>
                        </div>
                        <div
                            className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500">
                            /index.tsx
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="text-gray-500 hf:text-white h-5 w-5 transition-colors"
                                type="button"
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                                        clip-rule="evenodd"
                                    ></path>
                                    <path
                                        d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"></path>
                                    <path
                                        d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"></path>
                                </svg>
                            </button>
                        </div>
                    </header>
                </div>
                <div className="px-8 py-8 overflow-hidden ">
                    <CodeBlock/>
                    <TwitterCard/>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <main className={"dark"}>
                <Image
                    alt="background"
                    src="https://codewithmosh.com/_next/static/media/bg-grid-lighter.4c1e8196.svg" // Replace with your image path
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority // This is optional, use it for high-priority images
                />
                <Header/>
                <section className="pt-10 pb-12 relative">
                    <div className="mx-auto px-2 md:px-5 lg:px-8 2xl:max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
                            <div
                                className="lg:px-12 lg:pb-20 sm:px-2 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
                                <section className="col-span-2">
                                    <header>
                                        <div className="heading-pre">Welcome to my site.</div>
                                        <h1 className="sm:text-1xl heading-hero">
                                            I'm{" "}
                                            <span className="inline-grid">
                        <strong
                            className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                                WebkitTextFillColor: "transparent",
                                marginInline: "5px",
                            }}
                            aria-hidden="true"
                        >
                          Jaskaran Singh
                        </strong>
                        <strong
                            className="relative col-start-1 row-start-1 bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                                WebkitTextFillColor: "transparent",
                                marginInline: "5px",
                            }}
                        >
                          Jaskaran Singh
                        </strong>
                      </span>
                                            ,
                                            <br/>
                                            <strong className="inline-grid">
                                                <strong
                                                    className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent"
                                                    aria-hidden="true"
                                                >
                                                    Fullstack developer
                                                </strong>
                                                <strong
                                                    className="relative col-start-1 row-start-1 bg-clip-text text-transparent">
                                                    Fullstack developer
                                                </strong>
                                            </strong>
                                            .
                                        </h1>
                                        <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium flex flex-wrap">
                                            <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                                                <svg
                                                    fill="dodgerblue"
                                                    width="1.4rem"
                                                    height="1.4rem"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>ionicons-v5_logos</title>
                                                    <path
                                                        d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z"/>
                                                    <path
                                                        d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z"/>
                                                </svg>
                                                React Native
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 180 180"
                                                    fill="none"
                                                    className="h-7 w-7 text-gray-100/20 d:text-gray-300/80"
                                                >
                                                    <mask
                                                        id="nextjs_svg__a"
                                                        maskUnits="userSpaceOnUse"
                                                        x="0"
                                                        y="0"
                                                        width="180"
                                                        height="180"
                                                        style={{maskType: "alpha"}}
                                                    >
                                                        <circle cx="90" cy="90" r="90" fill="#000"></circle>
                                                    </mask>
                                                    <g mask="url(#nextjs_svg__a)">
                                                        <circle
                                                            cx="90"
                                                            cy="90"
                                                            r="87"
                                                            fill="currentColor"
                                                            stroke="transparent"
                                                            stroke-width="6"
                                                        ></circle>
                                                        <path
                                                            d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
                                                            fill="url(#nextjs_svg__b)"
                                                        ></path>
                                                        <path
                                                            fill="url(#nextjs_svg__c)"
                                                            d="M115 54h12v72h-12z"
                                                        ></path>
                                                    </g>
                                                    <defs>
                                                        <linearGradient
                                                            id="nextjs_svg__b"
                                                            x1="109"
                                                            y1="116.5"
                                                            x2="144.5"
                                                            y2="160.5"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stop-color="#fff"></stop>
                                                            <stop
                                                                offset="1"
                                                                stop-color="#fff"
                                                                stop-opacity="0"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="nextjs_svg__c"
                                                            x1="121"
                                                            y1="54"
                                                            x2="120.799"
                                                            y2="106.875"
                                                            gradientUnits="userSpaceOnUse"
                                                        >
                                                            <stop stop-color="#fff"></stop>
                                                            <stop
                                                                offset="1"
                                                                stop-color="#fff"
                                                                stop-opacity="0"
                                                            ></stop>
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                Next.js
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    stroke-width="0"
                                                    role="img"
                                                    viewBox="0 0 24 24"
                                                    className="h-7 w-7 text-blue-400 d:text-gray-300/80"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title></title>
                                                    <path
                                                        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                                                </svg>
                                                Tailwind
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                                                <svg
                                                    height="1.6rem"
                                                    viewBox="0 -.11376601 49.74245785 51.31690859"
                                                    width="1.6rem"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                                                        fill="#ff2d20"
                                                    />
                                                </svg>
                                                Laravel
                                            </li>
                                        </ul>
                                    </header>
                                    <main>
                                        <p className="mb-3 max-w-prose font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
                                            I love writing code that takes things next level creating
                                            highly performant websites, automated API integrations,
                                            building my own dev-tools, and creating stunning
                                            user-experiences that makes you feel{" "}
                                            <em className="relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600">
                                                WOW!
                                            </em>
                                            .<span className="mt-4 block"></span>I am always keen to
                                            learn and explore new technologies, frameworks and
                                            programming languages. Currently, I'm learning about{" "}
                                            <a
                                                href="https://www.langchain.com/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="underline hfa:text-sky-500"
                                            >
                                                LangChain
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="https://monorepo.tools/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="underline hfa:text-sky-500"
                                            >
                                                MonoRepo Tools
                                            </a>
                                            .
                                        </p>
                                        <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
                                    </main>
                                    <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
                                        <a
                                            className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12"
                                            href="mailto:hello@flext.dev"
                                        >
                                            Let's Work
                                        </a>
                                        <Link
                                            className="button-border inline-flex whitespace-nowrap bg-white/20 hover:bg-white/50 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12"
                                            href="/resume"
                                        >
                                            Resume
                                        </Link>
                                    </footer>
                                </section>
                            </div>
                            <div className="mt-5">
                                <CodeEditor/>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto lg:px-28 px-8 pt-16 lg:pt-2">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2">
                            <div className={"sm:relative sm:bottom-[150px]"}>
                                <HeroAnimation/>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div>
                                <h1 className="font-title text-[clamp(1rem,4vw,2.5rem)] font-black leading-[1.1]">
                                    Shaping the Future of
                                    <span className="inline-grid">
                    <span
                        className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                            WebkitTextFillColor: "transparent",
                            marginInline: "5px",
                        }}
                        aria-hidden="true"
                    >
                      Mobile Apps
                    </span>
                    <span
                        className="relative col-start-1 row-start-1 bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                            WebkitTextFillColor: "transparent",
                            marginInline: "5px",
                        }}
                    >
                      Mobile Apps
                    </span>
                  </span>
                                    :<br className="lg:hidden block"/> Your Vision,<br className="hidden lg:block"/>
                                    Our
                                    <span className="inline-grid">
                    <span
                        className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                            WebkitTextFillColor: "transparent",
                            marginInline: "5px",
                        }}
                        aria-hidden="true"
                    >
                      React Native
                    </span>
                    <span
                        className="relative col-start-1 row-start-1 bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                            WebkitTextFillColor: "transparent",
                            marginInline: "5px",
                        }}
                    >
                      React Native
                    </span>{" "}
                  </span>
                                    Expertise.
                                </h1>
                                <p className="mt-6 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight">
                                    Discover the power of custom mobile app development with React
                                    Native. As a skilled developer, I specialize in creating
                                    responsive, visually appealing apps optimized for both iOS and
                                    Android. My focus is on delivering seamless functionality and
                                    an engaging user experience, tailored to your unique business
                                    needs. Let's transform your vision into a reality with
                                    cutting-edge mobile solutions.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
