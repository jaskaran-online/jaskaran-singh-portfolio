import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center rounded-xl bg-gray-100 px-5 py-1 dark:bg-gray-800',
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium text-gray-900 dark:text-gray-100">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
