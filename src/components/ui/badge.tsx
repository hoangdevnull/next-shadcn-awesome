import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2 font-medium h-5 text-xxs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/50 ',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/50',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/50',
        outline: 'text-foreground',
        success: 'border-transparent bg-success-light text-success hover:bg-success/50',
        error: 'border-transparent bg-error-light text-error hover:bg-error/50',
        warning: 'border-transparent bg-warning-light text-warning hover:bg-warning/50',
        info: 'border-transparent bg-info-light text-info hover:bg-info/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
