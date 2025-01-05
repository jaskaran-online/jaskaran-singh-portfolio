'use client';

import { ArrowRight, CheckCircle2, Clock, Rocket, Users, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from "@/components/ui/sparkles-text";
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
        icon: Clock
    },
    {
        value: '25+',
        label: 'Projects Completed',
        icon: Rocket
    },
    {
        value: '10+',
        label: 'Happy Clients',
        icon: Users
    },
    {
        value: '5+',
        label: 'Students Mentored',
        icon: GraduationCap
    }
];

const SKILLS: Skill[] = [
    {
        title: 'Full Stack Development',
        description: 'End-to-end solutions using Next.js, Laravel, and RDBMS'
    },
    {
        title: 'Mobile Development',
        description: 'Cross-platform mobile applications using React Native'
    },
    {
        title: 'Technical Mentorship',
        description: 'Teaching web development and guiding students in their tech journey'
    }
];

const StatCard = ({ value, label, icon: Icon }: Stat) => {
    return (
        <MagicCard
            className="h-full group"
            gradientSize={150}
            gradientColor="#0ea5e9"
            gradientOpacity={0.15}
            gradientFrom="#3b82f6"
            gradientTo="#06b6d4"
        >
            <div className="relative w-full mx-auto z-20 flex h-full flex-col items-center justify-center p-4 sm:p-6 text-center">
                <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm transform transition-all duration-300 group-hover:blur-md group-hover:scale-110" />
                        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                    </div>
                </div>
                <Typography 
                    variant="h3" 
                    className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent transform transition-transform duration-300 group-hover:scale-110"
                >
                    {value}
                </Typography>
                <Typography className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transform transition-all duration-300 group-hover:text-blue-500">
                    {label}
                </Typography>
            </div>
        </MagicCard>
    );
};

const AboutMeSection = () => {
    return (
        <Container id="about" className="py-16 sm:py-24 my-16">
            <div className="grid gap-8 sm:gap-16 md:grid-cols-2">
                {/* Stats Section */}
                <AnimatedSection direction="left" className="grid grid-cols-2 gap-4 sm:gap-8">
                    {STATS.map((stat, index) => (
                        <AnimatedSection key={index} delay={index * 0.1} className="w-full">
                            <StatCard {...stat} />
                        </AnimatedSection>
                    ))}
                </AnimatedSection>

                {/* Content Section */}
                <AnimatedSection direction="right" className="space-y-6">
                    <Typography variant="h2" className="mb-4">
                        <SparklesText 
                            text="About Me" 
                            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white" 
                            sparklesCount={4} 
                        />
                    </Typography>
                    
                    <Typography className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        I'm Jaskaran, a passionate Full Stack Developer specializing in building robust and scalable web applications.
                        I focus on creating end-to-end solutions using modern technologies like Next.js, Laravel, and React Native, while also
                        implementing cutting-edge AI integrations.
                    </Typography>

                    <div className="space-y-4">
                        {SKILLS.map((skill, index) => (
                            <AnimatedSection key={index} delay={index * 0.1} direction="right">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
                                    <div>
                                        <Typography className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                                            {skill.title}
                                        </Typography>
                                        <Typography className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                            {skill.description}
                                        </Typography>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.3} direction="right">
                        <div className="space-y-2">
                            <Typography className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                Quick bits about me:
                            </Typography>
                            <ul className="list-disc list-inside space-y-1">
                                <Typography component="li" className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    Bachelor of Computer Applications
                                </Typography>
                                <Typography component="li" className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    Full time Developer
                                </Typography>
                                <Typography component="li" className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                                    Avid learner and problem solver
                                </Typography>
                            </ul>
                        </div>

                        <Link
                            href="#experience"
                            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors text-sm sm:text-base group mt-4"
                        >
                            Learn more about my experience
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </AnimatedSection>
            </div>
        </Container>
    );
};

export default AboutMeSection;
