import dayjs from 'dayjs';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

import { Calendar } from '../calendar';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import type { InputProps } from '../input';
import { Input } from '../input';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

interface Props<T extends FieldValues = FieldValues> extends InputProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
}

const DatePickerField = <T extends FieldValues>({ control, name, label, required, className, ...props }: Props<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col space-y-2">
            {label && (
              <FormLabel>
                {label} {required && <span className="text-red-500">*</span>}
              </FormLabel>
            )}
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <div className="relative">
                    <Icons.calendar className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                    <Input
                      className={cn('pl-8', className)}
                      value={field.value ? dayjs(field.value).format('MMM DD, YYYY') : ''}
                      placeholder="Pick a date"
                      onChange={() => null}
                      {...props}
                    />
                  </div>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { DatePickerField };
