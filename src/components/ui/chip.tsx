import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const chipVariants = cva(
  'inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-main-10 text-main hover:bg-main/20',
        success: 'border-transparent bg-success-light text-success hover:bg-success/50',
        error: 'border-transparent bg-error-light text-error hover:bg-error/50',
        warning: 'border-transparent bg-warning-light text-warning hover:bg-warning/50',
        info: 'border-transparent bg-info-light text-info hover:bg-info/50',
        outline: 'border-main font-medium text-info hover:bg-info/50',
      },
      rounded: {
        default: 'rounded-full',
        sm: 'rounded-sm',
      },
      size: {
        default: 'font-medium text-xs px-4 py-2',
        sm: 'text-xs  py-1 px-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {}

function Chip({ className, variant, size, rounded, ...props }: ChipProps) {
  return <div className={cn(chipVariants({ variant, rounded, size }), className)} {...props} />;
}

export { Chip, chipVariants };
