/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Icons } from '@/assets/icons';
import { type MIME_TYPE } from '@/lib/mime';
import { cn } from '@/lib/utils';

import { Avatar } from '../avatar';
import { FormControl, FormField, FormItem, FormMessage } from '../form';

interface Props<T extends FieldValues = FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'accept'> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  accept?: MIME_TYPE[];
}

const AvatarUploadField = <T extends FieldValues>({
  accept = [],
  control,
  name,
  defaultValue,
  className,
  ...props
}: Props<T>) => {
  const ref = useRef<React.ElementRef<'input'>>(null);

  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const img = value
          ? typeof value === 'string'
            ? value
            : URL.createObjectURL(value)
          : '/images/profiles/avatar.webp';

        return (
          <FormItem>
            <div className="relative w-fit">
              <Avatar src={img} className={cn('border-neutral-10 border-3 h-40 w-40', className)} />
              <button
                type="button"
                className="border-neutral-10 bg-neutral-0 absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2"
                onClick={() => ref.current?.click()}
              >
                <Icons.camera />
              </button>
            </div>
            <FormControl>
              <input
                hidden
                accept={accept.length === 0 ? undefined : accept.join(', ')}
                type="file"
                onChange={(e) => onChange(e.target.files?.[0])}
                {...props}
                ref={ref}
              />
            </FormControl>

            <FormMessage className="mt-1 text-xs" />
          </FormItem>
        );
      }}
    />
  );
};

export { AvatarUploadField };
