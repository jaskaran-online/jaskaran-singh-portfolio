"use client";
import React from "react";
import Container from "@/components/layout/container";
import cleanfoldframs from "/public/CleanFold/cleanfoldframs.png";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import LogoLaravel from "/public/images/logos/laravel-svgrepo-com.svg";

import ReactNativeLogo from "/public/images/logos/reactjs-svgrepo-com.svg";
import LogoExpo from "/public/images/logos/expo-svgrepo-com.svg";

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
    <>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="mb-8 text-4xl font-bold lg:text-8xl">CleanFold</h1>
            <div className="mb-4 flex justify-center space-x-4">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                width={40}
                height={40}
              />

              <div className="h-12 w-[2px] animate-ping animate-pulse bg-black"></div>

              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                alt="Android Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          <motion.p
            className="my-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cleanfold is a comprehensive laundry management platform designed to
            streamline operations for laundry businesses. It offers features for
            order tracking, customer management, and service categorization,
            enabling efficient handling of laundry services from start to
            finish.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="z-50 flex h-full w-full items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={cleanfoldframs}
                alt="Cleanfold"
                width={900}
                height={500}
                className="w-full/2 z-50 h-full"
              />
            </motion.div>
          </div>
        </div>
      </Container>
      <div className="mb-5 flex flex-col items-center justify-center bg-gray-100 py-5">
        <div className="flex flex-wrap justify-center space-x-12">
          <div className="flex flex-col items-center">
            <Image
              src={ReactNativeLogo}
              alt="React Native Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-center">
            <Image src={LogoExpo} alt="Expo Logo" width={100} height={100} />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={LogoLaravel}
              alt="Laravel Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 351"
              id="firebase"
            >
              <defs>
                <filter
                  id="b"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                  filterUnits="objectBoundingBox"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                    stdDeviation="17.5"
                  ></feGaussianBlur>
                  <feOffset
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    in="shadowInnerInner1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                  ></feColorMatrix>
                </filter>
                <filter
                  id="d"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                  filterUnits="objectBoundingBox"
                >
                  <feGaussianBlur
                    in="SourceAlpha"
                    result="shadowBlurInner1"
                    stdDeviation="3.5"
                  ></feGaussianBlur>
                  <feOffset
                    dx="1"
                    dy="-9"
                    in="shadowBlurInner1"
                    result="shadowOffsetInner1"
                  ></feOffset>
                  <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                    result="shadowInnerInner1"
                  ></feComposite>
                  <feColorMatrix
                    in="shadowInnerInner1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                  ></feColorMatrix>
                </filter>
                <path
                  id="a"
                  d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
                ></path>
                <path
                  id="c"
                  d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z"
                ></path>
              </defs>
              <path
                fill="#FFC24A"
                d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
              ></path>
              <use fill="#FFA712" fillRule="evenodd" xlinkHref="#a"></use>
              <use filter="url(#b)" xlinkHref="#a"></use>
              <path
                fill="#F4BD62"
                d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
              ></path>
              <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#c"></use>
              <use filter="url(#d)" xlinkHref="#c"></use>
              <path
                fill="#F6820C"
                d="M0 282.998l.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
              ></path>
              <path
                fill="#FDE068"
                d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
              ></path>
              <path
                fill="#FCCA3F"
                d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355z"
              ></path>
              <path
                fill="#EEAB37"
                d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <StickyScroll content={content} />
    </>
  );
}
