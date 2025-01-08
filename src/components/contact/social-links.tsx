'use client';

import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jaskaranpr',
    icon: Github,
    username: '@jaskaranpr',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jaskaranpr',
    icon: Linkedin,
    username: 'Jaskaran Singh',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/jaskaranpr',
    icon: Twitter,
    username: '@jaskaranpr',
  },
  {
    name: 'Website',
    url: 'https://jaskaran.in',
    icon: Globe,
    username: 'jaskaran.in',
  },
] as const;

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((link) => (
        <TooltipProvider key={link.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name} profile`}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.username}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
