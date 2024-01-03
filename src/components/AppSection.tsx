import React from "react";
import HeroAnimation from "./HeroAnimation";

export default function AppSection() {
  return (
    <div className="container mx-auto lg:px-28 px-8 lg:pt-2 text-white">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className={"sm:relative"}>
            <HeroAnimation />
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
              :<br className="lg:hidden block" /> Your Vision,
              <br className="hidden lg:block" />
              My
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
              Android. My focus is on delivering seamless functionality and an
              engaging user experience, tailored to your unique business needs.
              Let's transform your vision into a reality with cutting-edge
              mobile solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
