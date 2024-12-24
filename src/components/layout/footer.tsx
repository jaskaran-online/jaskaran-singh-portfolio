import { Copyright } from "lucide-react";
import Image from "next/image";

import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/data";
import SocialIcons from "@/components/data-display/social-icons";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-gray-200/30 dark:border-gray-800/30 bg-background/80 backdrop-blur-xl py-8">
      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 grid grid-cols-[1fr,auto,1fr] grid-rows-[1fr,auto,1fr] [&>div]:border-gray-200/30 dark:[&>div]:border-gray-800/30">
        <div className="border-b"></div>
        <div className="border-b border-l border-r"></div>
        <div className="border-b"></div>
        <div className="border-r"></div>
        <div></div>
        <div className="border-l"></div>
        <div className="border-t"></div>
        <div className="border-l border-r border-t"></div>
        <div className="border-t"></div>

      </div> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <Typography variant="body3" className="text-center text-gray-600 dark:text-gray-400">
              Connect with me
            </Typography>
            <SocialIcons />
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Typography className="flex flex-wrap items-center justify-center gap-1" variant="body3">
              <Copyright className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">{new Date().getFullYear()}</span>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-400">|</span>
              <span className="flex flex-wrap items-center justify-center gap-1">
                <span className="text-gray-600 dark:text-gray-400">Designed and</span>
                <Link
                  noCustomization
                  externalLink
                  withUnderline
                  href={EXTERNAL_LINKS.GITHUB_REPO}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                >
                  coded
                </Link>
                <span className="text-gray-600 dark:text-gray-400">with ❤️️ by</span>
                <Link
                  href="/"
                  className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  Jaskaran Singh
                </Link>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
