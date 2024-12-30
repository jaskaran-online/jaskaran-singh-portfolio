'use client';

import { TESTIMONIALS } from '@/lib/data';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';
import SparklesText from "@/components/ui/sparkles-text";

const TestimonialsSection = () => {
  // Split testimonials into two groups for different scroll directions
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3);

  return (
    <section id="testimonials" className="bg-gray-50 py-12 sm:py-20 dark:bg-[#0f192d]">
      <div className="mb-8 sm:mb-16 flex flex-col items-center gap-4 px-4">
        <Typography variant="h2" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <SparklesText text="What People Are Saying" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2" sparklesCount={4} />
        </Typography>
        <Typography variant="subtitle" className="max-w-2xl text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Don't just take my word for it. Here's what real people are saying about my work.
        </Typography>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-4 sm:py-8 dark:bg-[#0f192d]">
        <div className="flex flex-col gap-4 sm:gap-8">
          {/* First row - scrolling right */}
          <div className="relative">
            {/* Left gradient overlay */}
            <div className="hidden lg:block pointer-events-none absolute left-0 top-0 z-10 h-full w-[100px] sm:w-[250px] bg-gradient-to-r from-gray-50 via-gray-50 to-transparent dark:from-[#0f192d] dark:via-[#0f192d] dark:to-transparent" />
            {/* Right gradient overlay */}
            <div className="hidden lg:block pointer-events-none absolute right-0 top-0 z-10 h-full w-[100px] sm:w-[150px] bg-gradient-to-l from-gray-50 via-gray-50 to-transparent dark:from-[#0f192d] dark:via-[#0f192d] dark:to-transparent" />

            <motion.div
              animate={{
                x: [0, -1035],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-4 px-4 sm:px-[50px]"
            >
              {/* Double the items to create seamless loop */}
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <div key={index} className="w-[300px] sm:w-[400px] flex-shrink-0">
                  <TestimonialDetails {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolling left */}
          <div className="relative">
            {/* Left gradient overlay */}
            <div className="hidden lg:block pointer-events-none absolute left-0 top-0 z-10 h-full w-[100px] sm:w-[250px] bg-gradient-to-r from-gray-50 via-gray-50 to-transparent dark:from-[#0f192d] dark:via-[#0f192d] dark:to-transparent" />
            {/* Right gradient overlay */}
            <div className="hidden lg:block pointer-events-none absolute right-0 top-0 z-10 h-full w-[100px] sm:w-[250px] bg-gradient-to-l from-gray-50/50 via-gray-50/50 to-transparent dark:from-[#0f192d] dark:via-[#0f192d] dark:to-transparent" />

            <motion.div
              animate={{
                x: [-1035, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-4 px-4 sm:px-[50px]"
            >
              {/* Double the items to create seamless loop */}
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <div key={index} className="w-[300px] sm:w-[400px] flex-shrink-0">
                  <TestimonialDetails {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
