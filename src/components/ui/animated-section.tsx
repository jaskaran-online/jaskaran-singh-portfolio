'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection = ({
    children,
    className,
    delay = 0,
    direction = 'up'
}: AnimatedSectionProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const directionOffset = {
        up: 50,
        down: -50,
        left: 50,
        right: -50
    };

    const getInitialX = () => {
        if (direction === 'left') return directionOffset.left;
        if (direction === 'right') return directionOffset.right;
        return 0;
    };

    const getInitialY = () => {
        if (direction === 'up') return directionOffset.up;
        if (direction === 'down') return directionOffset.down;
        return 0;
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                x: getInitialX(),
                y: getInitialY()
            }}
            animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : getInitialX(),
                y: inView ? 0 : getInitialY()
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 1.02, 0.73, 0.96]
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
