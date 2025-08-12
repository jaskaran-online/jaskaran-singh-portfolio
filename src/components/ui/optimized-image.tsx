'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  fallback = '/images/placeholder.webp',
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Early return if no src is provided
  if (!src) {
    return null;
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={error ? fallback : src}
        alt={alt || ''}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'blur-0 scale-100 grayscale-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
