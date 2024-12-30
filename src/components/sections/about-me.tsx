import Image from "next/image";

import jaskaransingh from "/public/jas.jpg";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import SparklesText from "@/components/ui/sparkles-text";
const AboutMeSection = () => {
  return (
    <>
      <Container className="bg-gray-50/50 z-10 relative" id="about">

        <div className="self-center">
          <Typography variant="h2" className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <SparklesText text="About me" className="text-4xl font-bold text-gray-900 dark:text-white mb-2" sparklesCount={4} />
          </Typography>
        </div>

        <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
          {/* Image */}
          {/* <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={jaskaransingh}
              alt="FullStack Developer Jaskaran Singh"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div> */}

          {/* Content */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <Typography variant="h3" className="text-center">
              Curious about me? Here you have it:
            </Typography>
            <Typography>
              I&apos;m, Jaskaran who specializes in full stack development
              (React.js & Laravel). I am enthusiastic about bringing the technical
              and visual aspects of digital products to life. User experience,
              pixel perfect design, and writing clear, readable, highly performant
              code matters to me.
            </Typography>
            <Typography>
              I began my journey as a web developer in 2020, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. After
              starting my web development journey, I&apos;m building cutting-edge
              web applications using modern technologies such as Next.js,
              TypeScript, Laravel, TailwindCSS, Superbase and much more.
            </Typography>
            <Typography>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </Typography>
            <Typography>Finally, some quick bits about me.</Typography>
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
              <ul className="flex list-inside list-disc flex-col gap-2">
                <Typography component="li">
                  Bachelor of Computer Applications
                </Typography>
                <Typography component="li">Full time Developer</Typography>
              </ul>
              <ul className="flex list-inside list-disc flex-col gap-2">
                <Typography component="li">
                  Avid learner and problem solver
                </Typography>
              </ul>
            </div>
            <Typography>
              One last thing, I&apos;m available for freelance work, so feel free
              to reach out and say hello! I promise I don&apos;t bite 😉
            </Typography>
          </div>
        </div>
      </Container>
      <img src="https://tailwindui.com/plus/img/beams-home@95.jpg" alt="" className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem] opacity-40 z-0" />
    </>
  );
};

export default AboutMeSection;
