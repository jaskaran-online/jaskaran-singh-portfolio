"use client";

import type { TechDetails as TechDetailsType } from "@/lib/types";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  return (
    <div className="group relative flex flex-col items-center justify-center">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Typography variant="body2" className="whitespace-nowrap bg-gray-800 px-2 py-1 text-white rounded">
            {label}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default TechDetails;
