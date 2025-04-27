'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const content = [
  {
    title: 'Secure Login',
    description: 'Quick and secure access with advanced authentication methods.',
    image: '/CleanFold/Login.png',
    alt: 'CleanFold mobile login screen',
    features: ['login with password'],
  },
  {
    title: 'Smart Dashboard',
    description:
      'Get a real-time overview of your laundry orders, track earnings, and manage deliveries all in one place.',
    image: '/CleanFold/Dashboard.png',
    alt: 'CleanFold mobile dashboard',
    features: ['Real-time metrics', 'Pending orders count'],
  },
  {
    title: 'Easy Cart Management',
    description:
      'Add items, specify preferences, and schedule pickups effortlessly with our smart cart system.',
    image: '/CleanFold/Cart.png',
    alt: 'CleanFold mobile cart interface',
    features: ['Quick item addition', 'Quantity adjustment', 'Special instructions'],
  },
  {
    title: 'Dynamic Pricing',
    description:
      'View and manage comprehensive pricing for all laundry services with real-time updates.',
    image: '/CleanFold/RateListOfItems.png',
    alt: 'CleanFold rate list screen',
    features: ['Category-based pricing', 'Special offers', 'Bulk discounts'],
  },
  {
    title: 'Order Tracking',
    description: 'Track your orders in real-time and get instant updates on their status.',
    image: '/CleanFold/OrderDetails.png',
    alt: 'CleanFold order tracking screen',
    features: ['Status updates', 'Delivery estimation', 'Order history'],
  },
  {
    title: 'Detailed Management',
    description: 'Manage every aspect of your orders with itemized lists and special instructions.',
    image: '/CleanFold/OrderDetailItems.png',
    alt: 'CleanFold order details screen',
    features: ['Item-level details', 'Service customization', 'Price breakdown'],
  },
];

export function CleanFoldContent() {
  const [activeView, setActiveView] = useState<'grid' | 'carousel'>('grid');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white dark:bg-transparent">
      {/* View Toggle */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
          <button
            onClick={() => setActiveView('grid')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeView === 'grid'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setActiveView('carousel')}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeView === 'carousel'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Carousel View
          </button>
        </div>
      </div>

      {/* Grid View */}
      {activeView === 'grid' && (
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {content.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-6 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-[2rem] p-2  border-[2px] border-gray-200 border-dashed">
                  {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div> */}
                  {/* <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black"></div> */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full overflow-hidden rounded-[1.7rem] bg-white p-2 dark:border-gray-800 dark:bg-gray-800"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="max-w-sm text-center">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-white/80">{item.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {item.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Carousel View */}
      {activeView === 'carousel' && (
        <div className="container mx-auto px-4 pb-20">
          <div className="relative mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 z-10 mr-4 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex w-full flex-col items-center md:flex-row md:items-start md:gap-8">
                  <motion.div
                    key={`image-${currentSlide}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-3 shadow-lg md:mb-0"
                  >
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
                    <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black"></div>
                    <div className="relative z-10 h-full overflow-hidden rounded-[1.7rem] border-[8px] border-white bg-white shadow-inner dark:border-gray-800 dark:bg-gray-800">
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={content[currentSlide].image}
                          alt={content[currentSlide].alt}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    key={`content-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="max-w-md text-center md:text-left"
                  >
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      {content[currentSlide].title}
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-white/80">
                      {content[currentSlide].description}
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">Key Features:</h4>
                      <ul className="space-y-2">
                        {content[currentSlide].features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 z-10 ml-4 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </AnimatePresence>

            {/* Dots navigation */}
            <div className="mt-8 flex justify-center gap-2">
              {content.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentSlide === idx
                      ? 'w-6 bg-blue-500'
                      : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
