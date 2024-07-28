import Container from "@/components/layout/container";
import mycreditbook from "/public/myCreditBook/frame.png";
import Image from "next/image";

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
