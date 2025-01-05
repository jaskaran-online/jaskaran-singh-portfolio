'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { Globe, Smartphone, Brain, CheckIcon, ArrowRight, GraduationCap } from 'lucide-react';
import SparklesText from "@/components/ui/sparkles-text";
import { MagicCard } from "@/components/ui/magic-card";
import Link from 'next/link';

interface Service {
    title: string;
    description: string;
    icon: any;
    features: string[];
}

const SERVICES: Service[] = [
    {
        title: 'Web Development',
        description: 'Building modern, scalable web applications using cutting-edge frameworks and robust database systems.',
        icon: Globe,
        features: [
            'Next.js Applications',
            'Laravel Backend',
            'RDBMS Integration'
        ]
    },
    {
        title: 'Mobile App Development',
        description: 'Cross-platform mobile applications using React Native with native performance and capabilities.',
        icon: Smartphone,
        features: [
            'iOS Development',
            'Android Development',
            'Custom Native Modules'
        ]
    },
    {
        title: 'AI Integration',
        description: 'Development of intelligent AI solutions and chatbots integrated with modern web applications.',
        icon: Brain,
        features: [
            'Custom Chatbots',
            'AI Agents Development',
            'MERN AI Integration'
        ]
    },
    {
        title: 'Technical Mentorship',
        description: 'Professional web development training and mentorship for students looking to excel in modern web technologies.',
        icon: GraduationCap,
        features: [
            'React.js Classes',
            'JavaScript Fundamentals',
            'Career Guidance'
        ]
    }
];

interface ServiceCardProps extends Service { }

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
    return (
        <MagicCard
            className="h-full rounded-3xl bg-white/90 dark:bg-[#0A101F]/80 backdrop-blur border border-slate-200 dark:border-[#1a1f2e] hover:border-slate-300 dark:hover:border-[#1f2937] transition-all duration-300 hover:scale-[1.02]"
            gradientSize={250}
            gradientColor="#0ea5e9"
            gradientOpacity={0.15}
            gradientFrom="#3b82f6"
            gradientTo="#06b6d4"
        >
            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
                <div className="mb-6 rounded-full from-blue-500 to-blue-600 bg-gradient-to-br p-3 w-fit">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                </div>
                <Typography variant="h3" className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                    {title}
                </Typography>
                <Typography className="mb-6 text-slate-600 dark:text-gray-400 text-sm sm:text-base">
                    {description}
                </Typography>
                <ul className="space-y-2 mt-auto">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-600 dark:text-gray-400 text-sm sm:text-base">
                            <CheckIcon className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
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
        <Container id="services" className="py-16 sm:py-20">
            <div className="mb-12 sm:mb-16 text-center">
                <Typography variant="h2" className="mb-4">
                    <SparklesText 
                        text="Services I Offer" 
                        className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white" 
                        sparklesCount={4} 
                    />
                </Typography>
                <Typography variant="subtitle" className="text-slate-600 dark:text-gray-400">
                    Comprehensive solutions for your digital needs
                </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {SERVICES.map((service, index) => (
                    <div 
                        key={index} 
                        className="transition-all duration-300"
                    >
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
                <Link
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors group"
                >
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </Container>
    );
};

export default ServicesSection; 