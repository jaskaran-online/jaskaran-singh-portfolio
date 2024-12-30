'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { Code2, Database, Smartphone, Bot, LucideIcon } from 'lucide-react';
import SparklesText from "@/components/ui/sparkles-text";
import { MagicCard } from "@/components/ui/magic-card";

interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
}

const SERVICES: Service[] = [
    {
        title: 'Web Development',
        description: 'Building modern, responsive web applications with cutting-edge technologies like React, Next.js, and Tailwind CSS.',
        icon: Code2,
    },
    {
        title: 'Backend Development',
        description: 'Creating robust and scalable server-side solutions using Laravel, Node.js, and other modern frameworks.',
        icon: Database,
    },
    {
        title: 'Mobile App Development',
        description: 'Developing cross-platform mobile applications using React Native and Expo for both iOS and Android.',
        icon: Smartphone,
    },
    {
        title: 'AI Integration',
        description: 'Integrating AI capabilities and chatbots into applications to enhance user experience and automation.',
        icon: Bot,
    },
];

interface ServiceCardProps extends Service { }

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
    return (
        <MagicCard
            className="h-full border border-gray-200 dark:border-gray-800 rounded-3xl bg-white dark:bg-[#0f192d] z-10"
            gradientSize={300}
            gradientColor="rgba(59, 130, 246, 0.1)"
            gradientOpacity={1}
            gradientFrom="rgba(59, 130, 246, 0.3)"
            gradientTo="rgba(147, 51, 234, 0.6)"
        >
            <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-6 rounded-full bg-blue-100/80 p-3 w-fit dark:bg-blue-900/30">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <Typography variant="h3" className="mb-4 text-xl font-semibold">
                    {title}
                </Typography>
                <Typography className="text-gray-600 dark:text-gray-400">
                    {description}
                </Typography>
            </div>
        </MagicCard>
    );
};

const ServicesSection = () => {
    return (
        <section id="services" className="relative py-20">
            <Container>
                <div className="mb-12 text-center">
                    <Typography variant="h2" className="mb-4">
                        <SparklesText text="Services I Offer" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white" sparklesCount={4} />
                    </Typography>
                    <Typography variant="subtitle" className="text-gray-600 dark:text-gray-400">
                        Comprehensive solutions for your digital needs
                    </Typography>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection; 