"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const content = [
  {
    title: "Secure Login",
    description: "Quick and secure access with advanced authentication methods.",
    image: "/CleanFold/Login.png",
    alt: "CleanFold mobile login screen"
  },
  {
    title: "Smart Dashboard",
    description: "Get a real-time overview of your laundry orders, track earnings, and manage deliveries all in one place.",
    image: "/CleanFold/Dashboard.png",
    alt: "CleanFold mobile dashboard"
  },
  {
    title: "Easy Cart Management",
    description: "Add items, specify preferences, and schedule pickups effortlessly with our smart cart system.",
    image: "/CleanFold/Cart.png",
    alt: "CleanFold mobile cart interface"
  },
  {
    title: "Dynamic Pricing",
    description: "View and manage comprehensive pricing for all laundry services with real-time updates.",
    image: "/CleanFold/RateListOfItems.png",
    alt: "CleanFold rate list screen"
  },
  {
    title: "Order Tracking",
    description: "Track your orders in real-time and get instant updates on their status.",
    image: "/CleanFold/OrderDetails.png",
    alt: "CleanFold order tracking screen"
  },
  {
    title: "Detailed Management",
    description: "Manage every aspect of your orders with itemized lists and special instructions.",
    image: "/CleanFold/OrderDetailItems.png",
    alt: "CleanFold order details screen"
  }
];

export function CleanFoldContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f192d]">


      {/* App Screenshots Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {content.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full aspect-[8/16] max-w-xs mb-6">
                <motion.div

                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2rem] transform rotate-2"></div>
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg overflow-hidden transform"> */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* </div> */}
                </motion.div>
              </div>
              <div className="text-center max-w-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
