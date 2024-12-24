'use client';

import { TESTIMONIALS } from '@/lib/data';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  // Split testimonials into two groups for different scroll directions
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3);

  return (
    <Container id="testimonials" className="overflow-hidden bg-gray-100 py-20 dark:bg-gray-900">
      <div className="mb-16 flex flex-col items-center gap-4">
        <Typography variant="h2" className="text-4xl font-bold">
          What People Are Saying
        </Typography>
        <Typography variant="subtitle" className="max-w-2xl text-center text-gray-600 dark:text-gray-400">
          Don't just take our word for it. Here's what real people are saying about my work.
        </Typography>
      </div>

      <div className="flex flex-col gap-4">
        {/* First row - scrolling right */}
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1035],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-4"
          >
            {/* Double the items to create seamless loop */}
            {[...firstRow, ...firstRow].map((testimonial, index) => (
              <div key={index} className="w-[500px] flex-shrink-0">
                <TestimonialDetails {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling left */}
        <div className="relative">
          <motion.div
            animate={{
              x: [-1035, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-4"
          >
            {/* Double the items to create seamless loop */}
            {[...secondRow, ...secondRow].map((testimonial, index) => (
              <div key={index} className="w-[500px] flex-shrink-0">
                <TestimonialDetails {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
