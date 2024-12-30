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
  title: "CleanFold - Mobile App for Laundry Management | Jaskaran Singh",
  description: "A mobile app for a cleaning company that allows company employees to see assigned jobs and track their progress. Built with React Native, Expo, Laravel, and more.",
  openGraph: {
    title: "CleanFold - Mobile App for Laundry Management | Jaskaran Singh",
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
    title: "CleanFold - Mobile App for Laundry Management | Jaskaran Singh",
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
          <h1 className="text-3xl font-bold">CleanFold</h1>
          <p className="text-muted-foreground">
            A mobile app for a cleaning company that allows company employees to see
            assigned jobs and track their progress.
          </p>
        </div>

        <div className="relative h-[400px] w-full">
          <Image
            src={cleanfoldframs}
            alt="CleanFold App Preview"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Image
                src={ReactNativeLogo}
                alt="React Native Logo"
                width={24}
                height={24}
              />
              <span>React Native</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={LogoExpo} alt="Expo Logo" width={24} height={24} />
              <span>Expo</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LogoLaravel}
                alt="Laravel Logo"
                width={24}
                height={24}
              />
              <span>Laravel</span>
            </div>
          </div>
        </div>

        <CleanFoldContent />
      </div>
    </Container>
  );
}
