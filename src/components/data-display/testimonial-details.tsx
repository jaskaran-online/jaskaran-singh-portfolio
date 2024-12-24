import Image from "next/image";

import { TestimonialDetails as TestimonialDetailsProps } from "@/lib/types";
import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
        <Image
          src={personAvatar}
          alt={`${personName} avatar`}
          fill
          className="object-cover"
          sizes="100px"
          priority
        />
      </div>
      <Typography>&quot;{testimonial}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900 dark:text-white"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetails;
