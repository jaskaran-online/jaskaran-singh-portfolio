'use client';

import { TESTIMONIALS } from '@/lib/data';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';
import SparklesText from '@/components/ui/sparkles-text';

const TestimonialsSection = () => {
  // Split testimonials into two groups for different scroll directions
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3);

  return (
    <section id="testimonials" className="bg-gray-50 py-12 sm:py-20 dark:bg-transparent">
      <div className="mb-8 flex flex-col items-center gap-4 px-4 sm:mb-16">
        <Typography
          variant="h2"
          className="mb-2 text-xl font-bold text-gray-900 sm:text-4xl md:text-3xl dark:text-white"
        >
          <SparklesText text="Client Success Stories & Impact" sparklesCount={4} />
        </Typography>
        <Typography
          variant="subtitle"
          className="max-w-2xl text-center text-sm text-gray-600 sm:text-base dark:text-gray-400"
        >
          Don't just take my word for it. Here's what real people are saying about my work.
        </Typography>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-4 sm:py-8 dark:bg-transparent">
        <div className="flex flex-col gap-4 sm:gap-8">
          {/* First row - scrolling right */}
          <div className="relative">
            {/* Left gradient overlay */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 hidden h-full w-[100px] bg-linear-to-r from-gray-50 via-gray-50 to-transparent sm:w-[250px] lg:block dark:from-[#040a17] dark:via-[#040a17] dark:to-transparent" />
            {/* Right gradient overlay */}
            <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-full w-[100px] bg-linear-to-l from-gray-50 via-gray-50 to-transparent sm:w-[150px] lg:block dark:from-[#040a17] dark:via-[#040a17] dark:to-transparent" />

            <motion.div
              animate={{
                x: [0, -1035],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              className="flex gap-4 px-4 sm:px-[50px]"
            >
              {/* Double the items to create seamless loop */}
              {[...firstRow, ...firstRow].map((testimonial, index) => (
                <div key={index} className="w-[300px] shrink-0 sm:w-[400px]">
                  <TestimonialDetails {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolling left */}
          <div className="relative">
            {/* Left gradient overlay */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 hidden h-full w-[100px] bg-linear-to-r from-gray-50 via-gray-50 to-transparent sm:w-[250px] lg:block dark:from-[#040a17] dark:via-[#040a17] dark:to-transparent" />
            {/* Right gradient overlay */}
            <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-full w-[100px] bg-linear-to-l from-gray-50/50 via-gray-50/50 to-transparent sm:w-[250px] lg:block dark:from-[#040a17] dark:via-[#040a17] dark:to-transparent" />

            <motion.div
              animate={{
                x: [-1035, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
              className="flex gap-4 px-4 sm:px-[50px]"
            >
              {/* Double the items to create seamless loop */}
              {[...secondRow, ...secondRow].map((testimonial, index) => (
                <div key={index} className="w-[300px] shrink-0 sm:w-[400px]">
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
