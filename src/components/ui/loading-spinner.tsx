import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
};

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'text-muted-foreground',
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <Loader2 className={cn('animate-spin', sizes[size])} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
