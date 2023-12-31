/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "../components/HeroAnimation";
function Nav() {
  return (
    <nav className="bg-transparent">
      <div className="2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex-shrink-0 flex items-center mr-14">
            Jaskaran Singh
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none  focus:bg-blue-750 text-gray-400 hover:bg-blue-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Expand main menu</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="27"
              width="27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          <ul
            className="max-h-0 opacity-0 flex flex-col items-start mt-4 text-sm  md:flex-row md:space-x-1 md:mt-0 md:border-0 w-full md:max-h-screen h-screen md:h-auto md:opacity-100 md:w-auto"
            id="navbar-default"
          >
            <li>
              <a
                className="block px-4 py-2 outline-none no-underline hover:no-underline "
                href="/web/20230908060921/https://codewithmosh.com/courses"
              >
                <div className="text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300">
                  Courses
                </div>
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 outline-none no-underline hover:no-underline "
                href="/web/20230908060921/https://codewithmosh.com/p/learning-paths"
              >
                <div className="text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300">
                  Learning Paths
                </div>
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 outline-none no-underline hover:no-underline "
                href="https://web.archive.org/web/20230908060921/https://forum.codewithmosh.com/"
              >
                <div className="text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300">
                  Forum
                </div>
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 outline-none no-underline hover:no-underline "
                href="/web/20230908060921/https://codewithmosh.com/p/contact"
              >
                <div className="text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300">
                  Contact
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
          <span className="text-[#c678dd]">{"return"}</span>{" "}
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
          <span className="text-[#e06c75]">{");"}</span>
        </div>
        <span className="text-[#e06c75]">{"}"}</span>
      </div>
      <div>
        <span className="text-[#e06c75]">{"}"}</span>
      </div>
    </code>
  );
};

function CodeEditor() {
  return (
    <div className="ml-4 bg-gradient-to-r from-blue-750 to-indigo-900 rounded-lg select-none border border-blue-850 relative">
      <div className="flex flex-row">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
        <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
      </div>
      <div className="px-8 py-2">
        <header className="mb-2 flex justify-between items-center border-b border-b-gray-800 py-2 pb-3">
          <div className="flex flex-row space-x-2">
            <div className="rounded-full bg-red-400 cursor-pointer hover:bg-red-500 w-3 h-3"></div>
            <div className="rounded-full bg-orange-400 cursor-pointer hover:bg-orange-500 w-3 h-3"></div>
            <div className="rounded-full bg-green-400 cursor-pointer hover:bg-green-500 w-3 h-3"></div>
          </div>
          <div className="color select-none text-center text-[13px] leading-none tracking-wide text-gray-500">
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
                <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"></path>
                <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
      <div className="px-8 py-8 overflow-hidden">
        <CodeBlock />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Image
        alt="background"
        src="https://codewithmosh.com/_next/static/media/bg-grid-lighter.4c1e8196.svg" // Replace with your image path
        layout="fill"
        objectFit="cover"
        quality={100}
        priority // This is optional, use it for high-priority images
      />
      <Nav />
      <main>
        <section className="pt-10 pb-12 relative">
          <div className="mx-auto px-2 md:px-5 lg:px-8 2xl:max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
              <div className="px-12 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
                <div className="relative bottom-36 left-0 w-full flex justify-center">
                  <HeroAnimation />
                </div>
                <h1 className="relative bottom-40 font-title text-center text-[clamp(1rem,4vw,2.5rem)] font-black leading-[1.1] xl:w-[115%] xl:text-start ">
                  Developing innovative
                  <span className="inline-grid">
                    <span
                      className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent glow-effect"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                        WebkitTextFillColor: "transparent",
                        marginInline: "5px",
                      }}
                      aria-hidden="true"
                    >
                      Apps
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
                      Apps
                    </span>
                  </span>
                  and
                  <span className="inline-grid">
                    <span
                      className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent glow-effect"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                        WebkitTextFillColor: "transparent",
                        marginInline: "5px",
                      }}
                      aria-hidden="true"
                    >
                      Websites
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
                      Websites
                    </span>
                  </span>
                  with efficiency and
                  <span className="inline-grid">
                    <span
                      className="pointer-events-none col-start-1 row-start-1 bg-clip-text text-transparent glow-effect"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #E60073 0%, #8A2BE2 100%)",
                        WebkitTextFillColor: "transparent",
                        marginInline: "5px",
                      }}
                      aria-hidden="true"
                    >
                      Creativity
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
                      Creativity
                    </span>
                  </span>
                </h1>
              </div>
              <CodeEditor />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
