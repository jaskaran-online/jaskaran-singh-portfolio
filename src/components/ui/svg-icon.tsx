'use client';

import { SVGProps } from 'react';
import { cn } from '@/lib/utils';

interface SVGIconProps extends SVGProps<SVGSVGElement> {
  src?: string;
  className?: string;
}

const SVGIcon = ({ src, className, ...props }: SVGIconProps) => {
  if (!src) {
    return null;
  }

  // If src is a remote URL
  if (src.startsWith('http') || src.startsWith('//')) {
    return (
      <object
        data={src}
        type="image/svg+xml"
        className={cn('pointer-events-none', className)}
        {...props}
      />
    );
  }

  // For local SVGs, they will be imported as React components by @svgr/webpack
  try {
    // Dynamic import for local SVGs
    const Icon = require(src).default;
    return <Icon className={className} {...props} />;
  } catch (error) {
    console.error(`Error loading SVG: ${src}`, error);
    return null;
  }
};

export default SVGIcon;
