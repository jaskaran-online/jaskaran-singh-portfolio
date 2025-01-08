import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader = ({
  title,
  description,
  className,
  align = 'left',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'mb-8',
        {
          'text-center': align === 'center',
          'text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
