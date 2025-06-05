'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { Globe, Smartphone, Brain, CheckIcon, ArrowRight, GraduationCap } from 'lucide-react';
import SparklesText from '@/components/ui/sparkles-text';
import { MagicCard } from '@/components/ui/magic-card';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description:
      'Building modern, scalable web applications using cutting-edge frameworks and robust database systems.',
    icon: Globe,
    features: ['Next.js Applications', 'Laravel Backend', 'RDBMS Integration'],
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications using React Native with native performance and capabilities.',
    icon: Smartphone,
    features: ['iOS Development', 'Android Development', 'Custom Native Modules'],
  },
  {
    title: 'AI Integration',
    description:
      'Development of intelligent AI solutions and chatbots integrated with modern web applications.',
    icon: Brain,
    features: ['Custom Chatbots', 'AI Agents Development', 'MERN AI Integration'],
  },
  {
    title: 'Technical Mentorship',
    description:
      'Professional web development training and mentorship for students looking to excel in modern web technologies.',
    icon: GraduationCap,
    features: ['React.js Classes', 'JavaScript Fundamentals', 'Career Guidance'],
  },
];

interface ServiceCardProps extends Service {}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <MagicCard
      className="h-full rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-300 dark:border-[#1a1f2e] dark:bg-[#0A101F]/80 dark:hover:border-[#1f2937]"
      gradientSize={250}
      gradientColor="#0ea5e9"
      gradientOpacity={0.15}
      gradientFrom="#3b82f6"
      gradientTo="#06b6d4"
    >
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className="mb-6 w-fit rounded-full bg-linear-to-br from-blue-500 to-blue-600 p-3">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="h3" className="text-lg font-semibold">
            {title}
          </Typography>
        </div>
        <Typography className="mb-6 text-sm text-slate-600 dark:text-gray-400 sm:text-base">
          {description}
        </Typography>
        <ul className="mt-auto space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-slate-600 dark:text-gray-400 sm:text-base"
            >
              <CheckIcon className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </MagicCard>
  );
};

const ServicesSection = () => {
  return (
    <Container id="services" className="py-20">
      <AnimatedSection direction="up" className="mb-12 text-center sm:mb-16">
        <Typography variant="h2" className="mb-4">
          <SparklesText
            text="How I Can Help You Succeed"
            className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
            sparklesCount={4}
          />
        </Typography>
        <Typography variant="subtitle" className="text-slate-600 dark:text-gray-400">
          Comprehensive solutions for your digital needs
        </Typography>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <AnimatedSection
            key={index}
            direction="up"
            delay={index * 0.1}
            className="transition-all duration-300"
          >
            <ServiceCard {...service} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection direction="up" delay={0.4} className="mt-12 text-center sm:mt-16">
        <Link
          href="#contact"
          className="group inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
        >
          Discuss Your Project
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </AnimatedSection>
    </Container>
  );
};

export default ServicesSection;
