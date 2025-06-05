'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

interface Stat {
  value: string;
  label: string;
}

interface Skill {
  title: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '50+',
    label: 'Projects Completed',
  },
  {
    value: '30+',
    label: 'Happy Clients',
  },
  {
    value: '15+',
    label: 'AI Integrations',
  },
];

const SKILLS: Skill[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end solutions using MongoDB, Express.js, React, and Node.js',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native',
  },
  {
    title: 'AI Integration',
    description: 'Implementing machine learning solutions and AI-powered features',
  },
];

const AboutSection = () => {
  return (
    <Container id="about" className="py-24 z-20">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl bg-[#18191E] p-6"
            >
              <Typography variant="h3" className="mb-2 text-4xl font-bold text-blue-500">
                {stat.value}
              </Typography>
              <Typography className="text-center text-gray-400">{stat.label}</Typography>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <Typography variant="h2" className="text-4xl font-bold text-white">
            About Me
          </Typography>

          <Typography className="text-gray-400">
            Passionate Full Stack Developer with expertise in the MERN stack, specializing in
            building robust and scalable web applications, mobile solutions with React Native, and
            cutting-edge AI integrations.
          </Typography>

          <div className="space-y-4">
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-500" />
                <div>
                  <Typography className="font-semibold text-white">{skill.title}</Typography>
                  <Typography className="text-gray-400">{skill.description}</Typography>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#experience"
            className="inline-flex items-center text-blue-500 transition-colors hover:text-blue-400"
          >
            Learn more about my experience
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
