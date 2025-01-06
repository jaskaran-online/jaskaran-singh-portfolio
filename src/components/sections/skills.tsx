'use client';

import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SparklesText from "@/components/ui/sparkles-text";
import { AnimatedSection } from '@/components/ui/animated-section';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <Container id="skills" className="py-20">
      <AnimatedSection direction="up" className="flex flex-col items-center gap-4 mb-16">
        <div className="self-center relative">
          <Typography variant="h3">
            <SparklesText
              text="Tools I Use to Drive Your Success"
              sparklesCount={2}
            />
          </Typography>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-70" />
        </div>
      </AnimatedSection>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8 md:gap-10"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
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
                scale: 0.8
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }
              }
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-gray-500/50 dark:hover:border-gray-500/50 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-500/20 to-gray-500/20 transform transition-all duration-300 group-hover:blur-xl group-hover:scale-150 opacity-0 group-hover:opacity-100" />
              <div className="relative z-10">
                <TechDetails {...technology} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection direction="up" delay={0.6} className="mt-16 text-center">
        <Typography className="text-gray-600 dark:text-gray-400 italic">
          And many more technologies that I use on a daily basis...
        </Typography>
      </AnimatedSection>
    </Container>
  );
};

export default SkillsSection;
