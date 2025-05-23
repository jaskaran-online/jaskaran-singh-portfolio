import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, children, ...props }: ContainerProps, ref) => {
    return (
      <section
        className={mergeClasses('w-full py-8 md:py-12 md:pt-10 2xl:py-12 z-10', className)}
        ref={ref}
        {...props}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-8 md:gap-12 md:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = 'Container';

export default Container;
