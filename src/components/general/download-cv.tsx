"use client";

import Button from "@/components/general/button";
import { RainbowButton } from "../ui/rainbow-button";

const DownloadCV = () => {
  return (
    <RainbowButton
      className="w-full py-1"
      onClick={() => window?.open("/files/jaskaran-cv-2024.pdf", "_blank")}
    >
      Download CV
    </RainbowButton>
  );
};

export default DownloadCV;
