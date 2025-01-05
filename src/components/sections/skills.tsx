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
      <AnimatedSection direction="up" className="flex flex-col items-center gap-4 mb-12">
        <div className="self-center">
          <Typography variant="h2" className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <SparklesText 
              text="Skills & Technologies" 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-2" 
              sparklesCount={4} 
            />
          </Typography>
        </div>
        <Typography 
          variant="subtitle" 
          className="max-w-xl text-center text-gray-600 dark:text-gray-400"
        >
          The skills, tools and technologies I am really good at:
        </Typography>
      </AnimatedSection>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
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
                y: 20,
                scale: 0.8
              },
              show: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group relative flex flex-col items-center justify-center p-4 rounded-xl"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full transform transition-all duration-300 group-hover:blur-md group-hover:scale-110" />
              <div className="relative">
                <TechDetails {...technology} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatedSection direction="up" delay={0.4} className="mt-12 text-center">
        <Typography className="text-gray-600 dark:text-gray-400">
          And many more technologies that I use on a daily basis...
        </Typography>
      </AnimatedSection>
    </Container>
  );
};

export default SkillsSection;
