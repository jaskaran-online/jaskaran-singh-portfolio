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

const AnimatedIcon = ({ icon: Icon, className }: { icon: LucideIcon; className?: string }) => {
    return (
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
            className={className}
        >
            <Icon className="h-6 w-6 text-blue-400" />
        </motion.div>
    );
};

const SERVICES: Service[] = [
    {
        title: 'Full Stack Development',
        description: `🚀 Expert in modern web development with React, Next.js, and TypeScript:

• 💻 Frontend Development: Crafting responsive UIs with modern frameworks

• 🔄 State Management: Redux, Context API, Zustand for scalable state

• 🎨 UI/UX: Tailwind CSS, Framer Motion for stunning animations

• 🛠️ Backend Integration: RESTful APIs.

• 🔍 SEO Optimization: Best practices for search engine visibility

• 📱 Responsive Design: Mobile-first approach for all screen sizes

• ⚡ Performance: Code splitting, lazy loading, and optimization

• 🔒 Security: Implementation of authentication and authorization
`,
        icon: Code2,
    },
    {
        title: 'Backend Architecture',
        description: 'Designing robust backend systems using Node.js, Express, and MongoDB. Experienced in RESTful APIs, GraphQL, and microservices architecture. Strong focus on security, performance optimization, and scalable database design.',
        icon: Database,
    },
    {
        title: 'Mobile Development',
        description: 'Creating native-like mobile experiences using React Native and Expo. Skilled in implementing complex UI animations, offline storage, and integrating native device features. Experience with both iOS and Android platforms.',
        icon: Smartphone,
    },
    {
        title: 'AI & ChatBot Integration',
        description: 'Implementing cutting-edge AI solutions using OpenAI, Langchain, and custom ML models. Expertise in building intelligent chatbots, content generation systems, and automated workflows that enhance user experience.',
        icon: Bot,
    },
    {
        title: 'Technical Mentorship',
        description: 'Providing comprehensive guidance in modern web development practices, data structures, algorithms, and software architecture. Helping developers level up their skills through hands-on projects and code reviews.',
        icon: Code2,
    },
];

interface ServiceCardProps extends Service { }

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
    return (
        <MagicCard
            className="h-full rounded-3xl bg-[#0A101F]/80 backdrop-blur border border-[#1a1f2e] hover:border-[#1f2937] transition-colors"
            gradientSize={250}
            gradientColor="#0ea5e9"
            gradientOpacity={0.15}
        >
            <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-6 rounded-full bg-blue-500/10 p-3 w-fit">
                    <AnimatedIcon icon={Icon} />
                </div>
                <Typography variant="h3" className="mb-4 text-2xl font-semibold text-white">
                    {title}
                </Typography>
                <Typography className="text-gray-400 text-md leading-relaxed whitespace-pre-line">
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

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[350px]">
                    {SERVICES.map((service, index) => (
                        <div key={index} className={cn(
                            'transition-transform hover:scale-[1.02]',
                            index === 0 ? 'md:col-span-4 md:row-span-2' : // First card larger
                                index === 1 ? 'md:col-span-2' : // Second card
                                    index === 2 ? 'md:col-span-2' : // Third card
                                        index === 3 ? 'md:col-span-3' : // Fourth card
                                            index === 4 ? 'md:col-span-3' : // Fifth card
                                                'md:col-span-2' // Default size
                        )}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesSection; 