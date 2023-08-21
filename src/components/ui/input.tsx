import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const inputVariants = cva(
  cn(
    'border-input border bg-transparent ring-offset-background placeholder:text-muted-foreground',
    'focus-visible:ring-ring flex w-full file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-500'
  ),
  {
    variants: {
      variant: {
        default: '',
        filled: 'bg-background',
      },
      inputSize: {
        default: 'h-12 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium',
        sm: 'h-10 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  errorClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', inputSize, type, ...props }, ref) => {
    return <input type={type} className={cn(inputVariants({ variant, inputSize, className }))} ref={ref} {...props} />;
  }
);

Input.displayName = 'Input';

export { Input };
