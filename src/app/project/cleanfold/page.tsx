import React from "react";
import Container from "@/components/layout/container";
import cleanfoldframs from "/public/CleanFold/cleanfoldframs.png";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoLaravel from "/public/images/logos/laravel-svgrepo-com.svg";
import ReactNativeLogo from "/public/images/logos/reactjs-svgrepo-com.svg";
import LogoExpo from "/public/images/logos/expo-svgrepo-com.svg";
import { Metadata } from "next";
import { CleanFoldContent } from "./components/CleanFoldContent";

export const metadata: Metadata = {
  title: "CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh",
  description: "A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.",
  alternates: {
    canonical: 'https://jaskaran.in/project/cleanfold',
  },
  openGraph: {
    title: "CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh",
    description: "A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.",
    images: [
      {
        url: "/CleanFold/cleanfoldframs.png",
        width: 1200,
        height: 630,
        alt: "CleanFold App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanFold - React Native Mobile App Development Case Study | Jaskaran Singh",
    description: "A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.",
    images: {
      url: "/CleanFold/cleanfoldframs.png",
      alt: "CleanFold App Preview",
    },
  },
};

const content = [
  {
    title: "Login",
    description:
      "Secure access for authorized personnel. Employees can easily log in using the credentials provided by the admin. This ensures that only verified staff members can access the system, maintaining data security and operational integrity. The login process is straightforward, allowing quick and efficient entry to start managing laundry orders and customer information.",
    content: (
      <Image src="/CleanFold/Login.png" alt="alt" width={900} height={500} />
    ),
  },
  {
    title: "Dashboard",
    description:
      "The dashboard provides a comprehensive overview of the system's performance, including key metrics, recent activities, and important notifications. This allows admin to monitor the status of the laundry business at a glance, making informed decisions and ensuring smooth operations.",
    content: (
      <Image
        src="/CleanFold/Dashboard.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
  {
    title: "Cart",
    description:
      "The cart page allows admin to view and manage the items in the shopping cart. This includes adding or removing items, updating quantities, and calculating the total price. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image src="/CleanFold/Cart.png" alt="alt" width={900} height={500} />
    ),
  },
  {
    title: "Rate List",
    description:
      "The rate list page allows admin to set and manage the pricing for various services offered by the laundry business. This includes setting prices for different types of laundry services, such as dry cleaning, washing, and ironing. Admin can also add or remove services, adjust prices, and view the current rate list.",
    content: (
      <Image
        src="/CleanFold/RateListOfItems.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
  {
    title: "Order Details",
    description:
      "The order details page provides a detailed view of a specific laundry order, including all associated items, quantities, and prices. This allows admin to review and manage individual orders, ensuring accuracy and completeness. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/OrderDetails.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
  {
    title: "Order Detail Items",
    description:
      "The order detail items page provides a detailed view of the items included in a specific laundry order. This allows admin to review and manage individual items, ensuring accuracy and completeness. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/OrderDetailItems.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
  {
    title: "List of Order Details",
    description:
      "The list of order details page provides a comprehensive overview of all laundry orders placed by customers. This allows admin to review and manage individual orders, ensuring accuracy and completeness. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/ListOfOrderDetails.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },

  {
    title: "Create Order",
    description:
      "The create order page allows admin to create a new laundry order. This includes selecting the customer, adding items to the order, and specifying any additional requirements or preferences. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/CreateOrder.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
  {
    title: "Category Services",
    description:
      "The category services page allows admin to create a new laundry order. This includes selecting the customer, adding items to the order, and specifying any additional requirements or preferences. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/CategoryServices.png"
        alt="alt"
        width={900}
        height={500}
      />
    ),
  },
];

export default function Cleanfold() {
  return (
    <Container>
      <div className="flex flex-col gap-8 pb-[20px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">CleanFold - Laundry Management Mobile App</h1>
          <p className="text-muted-foreground text-center">
            A comprehensive mobile application tailored for a cleaning company, empowering employees to easily access their assigned jobs, track progress in real-time, and manage their daily tasks effectively. This tool enhances operational efficiency and ensures that all job details are readily available at their fingertips.
          </p>
        </div>

        <div className="relative h-[400px] w-full">
          <Image
            src={cleanfoldframs}
            alt="CleanFold Mobile App Interface Preview"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Modern Technology Stack & Architecture</h2>
          <p className="text-gray-600 dark:text-gray-100">
            Our application is built using a modern tech stack that ensures high performance, scalability, and a seamless user experience. Below are the key technologies utilized in the development of the CleanFold app:
          </p>
          <div className="flex flex-wrap gap-6 mt-4 mb-12">
            <div className="flex items-center gap-6">
              <Image
                src={ReactNativeLogo}
                alt="React Native Logo"
                width={80}
                height={24}
              />
              <span className="font-semibold">React Native</span>
              <p className="text-gray-500 text-sm dark:text-gray-100">
                A powerful framework for building native mobile applications using React. It allows for a smooth user interface and performance comparable to native apps.
              </p>
            </div>
            <div className="flex items-center gap-12">
              <Image src={LogoExpo} alt="Expo Logo" width={140} height={24} className="dark:invert" />
              <p className="text-gray-500 text-sm dark:text-gray-100">
                A framework and platform for universal React applications. Expo simplifies the development process by providing a set of tools and services for building, deploying, and iterating on mobile apps.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Image
                src={LogoLaravel}
                alt="Laravel Logo"
                width={80}
                height={24}
              />
              <span className="font-semibold">Laravel</span>
              <p className="text-gray-500 text-sm dark:text-gray-100">
                A robust PHP framework that provides an elegant syntax and powerful tools for building web applications. Laravel is used for the backend services of the CleanFold app, ensuring secure and efficient data handling.
              </p>
            </div>
          </div>
        </div>


        <h1 className="text-center text-6xl font-bold mt-4 mb-8  bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">Mobile App Screens</h1>
        <CleanFoldContent />
      </div>
    </Container>
  );
}
