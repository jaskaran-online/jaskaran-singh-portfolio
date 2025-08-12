'use client';

import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
  username: string;
}

const SocialLink = ({ name, url, icon: Icon, username }: SocialLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg" asChild>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name} profile`}
            >
              <Icon className="h-5 w-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="text-center">
            <p className="font-medium">{name}</p>
            <p className="text-muted-foreground text-xs">{username}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialLink;
