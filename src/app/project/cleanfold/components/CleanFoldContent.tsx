"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Login",
    description:
      "Secure access for authorized personnel. Employees can easily log in using the credentials provided by the admin. This ensures that only verified staff members can access the system, maintaining data security and operational integrity. The login process is straightforward, allowing quick and efficient entry to start managing laundry orders and customer information.",
    content: (
      <Image
        src="/CleanFold/Login.png"
        alt="alt"
        width={900}
        height={500}
        priority
      />
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
        priority
      />
    ),
  },
  {
    title: "Cart",
    description:
      "The cart page allows admin to view and manage the items in the shopping cart. This includes adding or removing items, updating quantities, and calculating the total price. Admin can also view the order history, track status updates, and make necessary adjustments to the order.",
    content: (
      <Image
        src="/CleanFold/Cart.png"
        alt="alt"
        width={900}
        height={500}
        priority
      />
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
        priority
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
        priority
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
        priority
      />
    ),
  },
];

export function CleanFoldContent() {
  return <StickyScroll content={content} />;
}
