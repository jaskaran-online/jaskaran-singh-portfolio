'use client';

import Image from "next/image";
import { Twitter, Linkedin, User, GraduationCap } from "lucide-react";

import { TestimonialDetails as TestimonialDetailsProps } from "@/lib/types";
import Typography from "@/components/general/typography";
import Card from "@/components/layout/card";

const SourceIcon = ({ source }: { source: TestimonialDetailsProps['source'] }) => {
  switch (source) {
    case 'twitter':
      return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
    case 'linkedin':
      return <Linkedin className="h-5 w-5 text-[#0A66C2]" />;
    case 'student':
      return <GraduationCap className="h-5 w-5 text-orange-400" />;
    case 'personal':
      return <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />;
    default:
      return null;
  }
};

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
  source,
}: TestimonialDetailsProps) => {
  return (
    <Card className="group relative h-full p-6 shadow-sm backdrop-blur-sm transition-all dark:bg-gray-800/80 dark:hover:bg-slate-800/95">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200/50 dark:ring-gray-700/50">
            <Image
              src={personAvatar}
              alt={`${personName} avatar`}
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <Typography
              variant="body2"
              className="font-semibold text-gray-900 dark:text-white"
            >
              {personName}
            </Typography>
            <Typography
              variant="body3"
              className="text-gray-500 dark:text-gray-400"
            >
              {title}
            </Typography>
          </div>
        </div>
        <SourceIcon source={source} />
      </div>

      <Typography className="mt-4 text-gray-600 dark:text-gray-300">
        {testimonial}
      </Typography>
    </Card>
  );
};

export default TestimonialDetails;
