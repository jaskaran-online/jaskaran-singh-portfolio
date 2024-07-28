import Container from "@/components/layout/container";
import cleanfoldframs from "/public/CleanFold/cleanfoldframs.png";
import Image from "next/image";

export default function Cleanfold() {
  return (
    <Container>
    <div className="flex flex-col items-center justify-center">
        <h1 className="lg:text-8xl text-4xl font-bold mb-8">Cleanfold</h1>
        <p className="text-lg">Cleanfold is a platform for managing and tracking your credit card statements.</p>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full z-50 items-center justify-center flex">
            <Image src={cleanfoldframs} alt="Cleanfold" width={900} height={500} className="w-full/2 h-full z-50" />
        </div>
    </div>
    </Container>
  );
}
