import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  loading?: boolean;
  fullWidth?: boolean;
}

const SkeletonWrapper = forwardRef<HTMLDivElement, Props>(
  ({ className, fullWidth = false, children, loading, ...props }, ref) => {
    if (!loading) return <>{children}</>;
    return (
      <div
        ref={ref}
        className={cn(
          { 'bg-neutral-10 h-fit w-fit animate-pulse rounded-md [&>*]:!invisible': loading, 'w-auto': fullWidth },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export { SkeletonWrapper };
