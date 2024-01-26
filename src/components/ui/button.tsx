import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Spinner } from './spinner';

const buttonVariants = cva(
  'inline-flex items-center active:scale-90 justify-center rounded-sm text-sm font-medium ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        filled: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      rounded: {
        default: 'rounded-sm',
        full: 'rounded-full',
        md: 'rounded-md',
        none: 'rounded-none',
      },
      size: {
        md: 'h-11 px-5 py-2',
        sm: 'h-9 px-6 text-sm',
        xs: 'h-8 px-3 text-xs',
        lg: 'h-12 px-3 text-sm',
        mixin: 'p-0',
        icon: 'h-6 w-h-6 rounded-full active:scale-100',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, type = 'button', size, fullWidth, rounded, asChild = false, loading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        disabled={props.disabled ?? loading}
        className={cn(fullWidth && 'w-full', buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        type={type}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {loading && <Spinner className="ml-4" />}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
