import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';

const buttonVariants = cva(
  'inline-flex items-center active:scale-90 justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-border bg-background shadow-sm hover:bg-primary hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'btn-gradient text-white hover:brightness-75',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 rounded-lg px-6',
        icon: 'h-10 w-10 rounded-lg active:scale-100',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
const LoadingIcon = ({ className }: { className?: string }) => {
  return <Icons.spinner size="1rem" className={cn('ml-4 animate-spin', className)} />;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        disabled={props.disabled ?? loading}
        className={cn(fullWidth && 'w-full', buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {loading && <LoadingIcon />}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants, LoadingIcon };
