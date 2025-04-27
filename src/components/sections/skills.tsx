'use client';

import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from '@/components/ui/sparkles-text';
import { AnimatedSection } from '@/components/ui/animated-section';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <Container id="skills" className="py-20">
      <AnimatedSection direction="up" className="mb-16 flex flex-col items-center gap-4">
        <Typography variant="h2" className="mb-4">
          <SparklesText
            text="Tools I Use to Drive Your Success"
            className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
            sparklesCount={4}
          />
        </Typography>
      </AnimatedSection>

      <motion.div
        className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 md:gap-10 lg:grid-cols-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {TECHNOLOGIES.map((technology, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.8,
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                },
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
            }}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white/5 p-6 backdrop-blur-xs transition-all duration-300 hover:border-gray-500/50 dark:border-gray-800 dark:hover:border-gray-500/50"
          >
            <div className="relative">
              <div className="absolute inset-0 transform rounded-full bg-linear-to-r from-gray-500/20 to-gray-500/20 opacity-0 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100 group-hover:blur-xl" />
              <div className="relative z-10">
                <TechDetails {...technology} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection direction="up" delay={0.6} className="mt-16 text-center">
        <Typography className="italic text-gray-600 dark:text-gray-400">
          And many more technologies that I use on a daily basis...
        </Typography>
      </AnimatedSection>
    </Container>
  );
};

export default SkillsSection;
