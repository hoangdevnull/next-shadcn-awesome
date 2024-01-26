import type { ReactNode } from 'react';
import React, { useId } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Checkbox } from '../checkbox';
import { FormControl, FormField, FormItem, FormMessage } from '../form';
import { Label } from '../label';

interface CheckboxProps<T extends FieldValues = FieldValues> {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  required?: boolean;
}

const CheckboxField = <T extends FieldValues>({ control, name, label, required, ...props }: CheckboxProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="my-3 flex items-center space-x-2">
            <FormControl>
              <Checkbox id={id} checked={field.value} onCheckedChange={field.onChange} {...props} />
            </FormControl>
            {label && (
              <Label htmlFor={id} className="text-xs leading-none lg:text-sm">
                {label}
                {required && <span className="text-error-light">*</span>}
              </Label>
            )}
          </div>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export { CheckboxField };
