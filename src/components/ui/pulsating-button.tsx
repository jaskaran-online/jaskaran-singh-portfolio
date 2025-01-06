'use client';

import { ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface PulsatingButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  pulseColor?: string;
  duration?: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
}

const PulsatingButton = ({
  children,
  pulseColor = '#0096ff',
  duration = '1.5s',
  className = '',
  disabled = false,
  bgColor = 'bg-primary-500',
  ...props
}: PulsatingButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`group relative overflow-hidden rounded-lg ${bgColor} hover:bg-primary-600 focus:ring-primary-500/20 dark:hover:bg-primary-400 px-8 py-3 text-sm font-medium text-white transition-all focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      disabled={disabled}
      {...props}
    >
      {/* Pulsing border effect */}
      <span
        className="absolute inset-0 rounded-lg"
        style={{
          border: `2px solid ${pulseColor}`,
          animation: disabled
            ? 'none'
            : `borderPulse ${duration} cubic-bezier(0.4, 0, 0.6, 1) infinite`,
        }}
      />

      {/* Button gradient overlay */}
      <span className="from-primary-600/0 via-primary-600/10 to-primary-600/0 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">{children}</span>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes borderPulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
      `}</style>
    </motion.button>
  );
};

export default PulsatingButton;
