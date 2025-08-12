'use client';

import { ArrowRight, CheckCircle2, Clock, Rocket, Users, GraduationCap, Check } from 'lucide-react';
import Link from 'next/link';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from '@/components/ui/sparkles-text';
import { MagicCard } from '../ui/magic-card';
import { AnimatedSection } from '@/components/ui/animated-section';

interface Stat {
  value: string;
  label: string;
  icon: any;
}

interface Skill {
  title: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: '5+',
    label: 'Years Experience',
    icon: Clock,
  },
  {
    value: '25+',
    label: 'Projects Completed',
    icon: Rocket,
  },
  {
    value: '10+',
    label: 'Happy Clients',
    icon: Users,
  },
  {
    value: '5+',
    label: 'Students Mentored',
    icon: GraduationCap,
  },
];

const SKILLS: Skill[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end solutions using Next.js, Laravel, and RDBMS',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native',
  },
  {
    title: 'Technical Mentorship',
    description: 'Teaching web development and guiding students in their tech journey',
  },
];

const StatCard = ({ value, label, icon: Icon }: Stat) => {
  return (
    <MagicCard
      className="group h-full"
      gradientSize={150}
      gradientColor="#0ea5e9"
      gradientOpacity={0.15}
      gradientFrom="#3b82f6"
      gradientTo="#06b6d4"
    >
      <div className="relative z-20 mx-auto flex h-full w-full flex-col items-center justify-center p-4 text-center sm:p-6">
        <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
          <div className="relative">
            <div className="absolute inset-0 transform rounded-full bg-blue-500/20 blur-xs transition-all duration-300 group-hover:scale-110 group-hover:blur-md" />
            <div className="relative rounded-full bg-linear-to-br from-blue-500 to-blue-600 p-3">
              <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
        <Typography
          variant="h3"
          className="mb-1 transform bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 sm:mb-2 sm:text-4xl"
        >
          {value}
        </Typography>
        <Typography className="transform text-sm text-gray-600 transition-all duration-300 group-hover:text-blue-500 sm:text-base dark:text-gray-400">
          {label}
        </Typography>
      </div>
    </MagicCard>
  );
};

const AboutMeSection = () => {
  return (
    <Container id="about" className="my-16 py-16 sm:py-24">
      <div className="grid gap-8 sm:gap-16 lg:grid-cols-2">
        {/* Stats Section */}
        <AnimatedSection direction="left" className="grid grid-cols-2 gap-4 sm:gap-8">
          {STATS.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="z-10 w-full">
              <StatCard {...stat} />
            </AnimatedSection>
          ))}
        </AnimatedSection>

        {/* Content Section */}
        <AnimatedSection direction="right" className="space-y-6">
          <Typography variant="h2" className="mb-4">
            <SparklesText
              text="How I Help Businesses Grow"
              className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white"
              sparklesCount={4}
            />
          </Typography>

          <Typography className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
            I'm Jaskaran, a passionate Full Stack Developer specializing in building robust and
            scalable web applications. I focus on creating end-to-end solutions using modern
            technologies like Next.js, Laravel, and React Native, while also implementing
            cutting-edge AI integrations.
          </Typography>

          <div className="space-y-4">
            {SKILLS.map((skill, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="right">
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 p-2">
                    <Check className="h-4 w-4 shrink-0 text-blue-500 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <Typography className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                      {skill.title}
                    </Typography>
                    <Typography className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                      {skill.description}
                    </Typography>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} direction="right">
            <div className="space-y-2">
              <Typography className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                Quick bits about me:
              </Typography>
              <ul className="list-inside list-disc space-y-1">
                <Typography
                  component="li"
                  className="text-sm text-gray-600 sm:text-base dark:text-gray-400"
                >
                  Bachelor of Computer Applications
                </Typography>
                <Typography
                  component="li"
                  className="text-sm text-gray-600 sm:text-base dark:text-gray-400"
                >
                  Full time Developer
                </Typography>
                <Typography
                  component="li"
                  className="text-sm text-gray-600 sm:text-base dark:text-gray-400"
                >
                  Avid learner and problem solver
                </Typography>
              </ul>
            </div>

            <Link
              href="#experience"
              className="group mt-4 inline-flex items-center text-sm text-blue-500 transition-colors hover:text-blue-400 sm:text-base"
            >
              Learn more about my experience
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </Container>
  );
};

export default AboutMeSection;
