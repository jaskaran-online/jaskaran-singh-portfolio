import { Metadata } from "next";
import Container from "@/components/layout/container";
import mycreditbook from "/public/myCreditBook/frame.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MyCreditBook - Full Stack Credit Management App Development | Jaskaran Singh",
  description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
  alternates: {
    canonical: 'https://jaskaran.in/project/mycreditbook',
  },
  openGraph: {
    title: "MyCreditBook - Full Stack Credit Management App Development | Jaskaran Singh",
    description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
    images: [
      {
        url: "/myCreditBook/frame.png",
        width: 1200,
        height: 630,
        alt: "MyCreditBook App Interface Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCreditBook - Full Stack Credit Management App Development | Jaskaran Singh",
    description: "A mobile app for credit book management that allows users to track their credit history and manage their debts. Built with React Native, TypeScript, Laravel, and more.",
    images: {
      url: "/myCreditBook/frame.png",
      alt: "MyCreditBook App Interface Preview",
    },
  },
};

export default function MyCreditBook() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-8xl text-4xl font-bold mb-8">MyCreditBook - Smart Credit Management Solution</h1>
        <p className="text-lg text-center max-w-3xl">A comprehensive platform for managing and tracking credit transactions, designed to help businesses and individuals maintain accurate financial records and improve cash flow management.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full z-50 items-center justify-center flex">
          <Image src={mycreditbook} alt="MyCreditBook" width={900} height={500} className="w-full/2 h-full z-50" />
        </div>
      </div>
    </Container>
  );
}
