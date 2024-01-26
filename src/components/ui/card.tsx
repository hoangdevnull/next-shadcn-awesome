import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const cardVariants = cva('border transition-all duration-200', {
  variants: {
    variant: {
      default: 'bg-background hover:border-transparent hover:shadow-active cursor-pointer',
      static: 'bg-background cursor-pointer',
    },
    rounded: {
      default: 'rounded-lg p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'default',
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, rounded, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(cardVariants({ variant, rounded }), className)} {...props}>
      {children}
    </div>
  );
});

export { Card, cardVariants };
