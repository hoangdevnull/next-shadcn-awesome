/* eslint-disable no-nested-ternary */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { Icons } from '@/assets/icons';
import { cn } from '@/lib/utils';

import { Show } from './Utilities';

export const inputVariants = cva(
  cn(
    'border-input border placeholder:font-light bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-main flex w-full file:border-0 file:bg-transparent',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
    // 'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default'
  ),
  {
    variants: {
      variant: {
        default: 'bg-background',
        filled: 'bg-background',
      },
      size: {
        sm: 'h-11 px-3 py-2 text-sm rounded-sm file:text-sm file:font-medium',
        default: 'h-14 px-3 text-sm rounded-sm file:text-sm file:font-medium',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: any;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', fullWidth, size, type, suffix, id, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className={cn('relative', fullWidth && 'w-full')}>
        <input
          id={id}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
        <Show when={type !== 'password'}>
          {suffix && <div className="absolute right-[10px] top-1/2 -translate-y-1/2">{suffix}</div>}
        </Show>
        <Show when={type === 'password'}>
          <div onClick={() => setShow(!show)} className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer">
            {show ? <Icons.eye /> : <Icons.eyeHidden />}
          </div>
        </Show>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
