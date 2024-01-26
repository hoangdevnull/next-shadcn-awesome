import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const labelVariants = cva('text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70');

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

export const floatLabelVariants = cva(cn('transition-all duration-200'), {
  variants: {
    variant: {
      default: cn(
        'text-sm absolute top-1 left-5 text-gray-500',
        'peer-focus:top-1 peer-focus:left-5 peer-focus:text-gray-500 peer-focus:text-sm',
        'peer-placeholder-shown:top-4 peer-placeholder-shown:left-5 peer-placeholder-shown:text-foreground peer-placeholder-shown:text-base'
      ),
      textArea: cn(
        'text-sm absolute top-1 left-6 text-gray-500',
        'peer-focus:top-1 peer-focus:left-6 peer-focus:text-gray-500 peer-focus:text-sm',
        'peer-placeholder-shown:top-5 peer-placeholder-shown:left-5 peer-placeholder-shown:text-foreground peer-placeholder-shown:text-base'
      ),
      selectActive: 'text-base absolute top-1 left-3 text-gray-500 scale-[0.8]',
      selectInActive: 'absolute top-4 left-5 text-foreground scale-100',
    },
    select: {
      default: '',
      active: 'peer-active:top-1 peer-active:left-6 peer-active:text-gray-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
