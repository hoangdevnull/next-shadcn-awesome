import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import type { TextareaProps } from '../textarea';
import { Textarea } from '../textarea';

interface Props<T extends FieldValues = FieldValues> extends TextareaProps {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
}

const TextAreaField = <T extends FieldValues>({ className, control, label, required, ...props }: Props<T>) => {
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { TextAreaField };
