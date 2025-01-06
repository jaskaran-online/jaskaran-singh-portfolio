'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const ZigzagUnderline = ({ isActive }: { isActive: boolean }) => (
  <motion.svg
    height="6"
    viewBox="0 0 100 6"
    initial="hidden"
    animate={isActive ? 'visible' : 'hidden'}
    className="absolute -bottom-2 left-0"
  >
    <motion.path
      d="M 0 3 Q 25 0, 50 3 T 100 3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1 },
      }}
      transition={{ duration: 0.1 }}
    />
  </motion.svg>
);

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ['var(--slate-100)', 'var(--slate-100)', 'var(--slate-100)'];
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 mt-12 text-center text-5xl font-bold"
      >
        App Screen Views
      </motion.h2>

      <motion.div
        // animate={{
        // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        // }}
        className="no-scrollbar relative flex h-[48rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 lg:gap-8"
        ref={ref}
      >
        <div className="div relative flex items-start gap-10 px-4">
          <div className="m">
            {content.map((item, index) => (
              <div key={item.title + index} className="relative my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="relative text-2xl font-bold text-sky-600"
                >
                  {item.title}
                  <ZigzagUnderline isActive={activeCard === index} />
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-sm text-slate-800"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
            // style={{ background: backgroundGradient }}
            className={cn('sticky top-4 hidden h-auto w-80 lg:block', contentClassName)}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};
