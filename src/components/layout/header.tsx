'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo: React.FC = () => <Image src="/logo.png" alt="Jaskaran Singh" width={60} height={60} />;

const Header = () => {
  const scrolled = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const size = useWindowSize();
  const pathname = usePathname();

  // Handle scroll and intersection observer for sections
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px',
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    } else {
      setActiveSection('/'); // Default section
    }

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        'bg-background/80 sticky top-0 z-30 w-full border-b shadow-md backdrop-blur-xl transition-colors duration-200 dark:bg-[#0f192d]/80',
        scrolled ? 'border-border/40' : 'border-transparent'
      )}
    >
      <div className="relative">
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
          <Link
            href="/"
            noCustomization
            className="absolute top-5 right-4 drop-shadow-lg md:relative md:top-0 md:right-0 md:drop-shadow-none"
          >
            <Logo />
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <nav className="relative flex list-none items-center">
              {NAV_LINKS.map((link, index) => {
                const isActive = link.href.includes('#')
                  ? activeSection === link.href.replace('#', '')
                  : pathname === link.href;
                return (
                  <Link
                    key={index}
                    href={`${typeof window !== 'undefined' && process.env.NODE_ENV === 'development' ? window.location.origin : 'https://www.jaskaran.in'}${link.href.startsWith('/') ? '' : '/'}${link.href}`}
                    className={mergeClasses(
                      'relative px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-white dark:text-gray-50'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 rounded-md bg-[#1e90ff] dark:bg-[#1e293b]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.1,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {index < NAV_LINKS.length - 1 && (
                      <div className="absolute top-1/2 right-0 h-4 w-[1px] -translate-y-1/2 bg-gray-200/50 dark:bg-gray-800/50" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="h-6 w-[1px] bg-gray-200/50 dark:bg-gray-800/50"></div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <DownloadCV />
            </div>
          </div>

          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild className="flex md:hidden">
              <IconButton>
                <Menu />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800">
                <Logo />
                <DrawerClose asChild>
                  <IconButton>
                    <X />
                  </IconButton>
                </DrawerClose>
              </div>
              <div className="border-b border-gray-100 p-4 dark:border-gray-800">
                <ul className="flex list-none flex-col gap-4">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = link.href.includes('#')
                      ? activeSection === link.href.replace('#', '')
                      : pathname === link.href;
                    return (
                      <li key={index}>
                        <Link
                          href={`${typeof window !== 'undefined' && process.env.NODE_ENV === 'development' ? window.location.origin : 'https://www.jaskaran.in'}${link.href.startsWith('/') ? '' : '/'}${link.href}`}
                          className={mergeClasses(
                            'relative block rounded-md px-4 py-2 text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-gray-100/50 text-gray-900 dark:bg-gray-800/50 dark:text-gray-50'
                              : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50'
                          )}
                          onClick={() => {
                            const timeoutId = setTimeout(() => {
                              setIsOpen(false);
                              clearTimeout(timeoutId);
                            }, 500);
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                  <Typography>Switch Theme</Typography>
                  <ThemeSwitcher />
                </div>
                <DownloadCV />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
