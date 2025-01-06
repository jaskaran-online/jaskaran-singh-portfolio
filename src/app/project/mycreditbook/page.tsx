import { Metadata } from "next";
import Container from "@/components/layout/container";
import mycreditbook from "/public/myCreditBook/frame.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MyCreditBook - Credit Management App | Jaskaran Singh",
  description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
  alternates: {
    canonical: 'https://jaskaran.in/project/mycreditbook',
  },
  openGraph: {
    title: "MyCreditBook - Credit Management App | Jaskaran Singh",
    description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
    images: [
      {
        url: "/myCreditBook/frame.png",
        width: 1200,
        height: 630,
        alt: "MyCreditBook App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCreditBook - Credit Management App | Jaskaran Singh",
    description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
    images: {
      url: "/myCreditBook/frame.png",
      alt: "MyCreditBook App Preview",
    },
  },
};

export default function MyCreditBook() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-8xl text-4xl font-bold mb-8">MyCreditBook</h1>
        <p className="text-lg">MyCreditBook is a platform for managing and tracking your credit card statements.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full z-50 items-center justify-center flex">
          <Image src={mycreditbook} alt="MyCreditBook" width={900} height={500} className="w-full/2 h-full z-50" />
        </div>
      </div>
    </Container>
  );
}
