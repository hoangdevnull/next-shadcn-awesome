import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import type { DatePickerProps } from '../date-picker';
import { DatePicker } from '../date-picker';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import { Show } from '../Utilities';

interface Props<T extends FieldValues = FieldValues> extends Omit<DatePickerProps, 'onChange' | 'value'> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  labelClassName?: string;
  required?: boolean;
}

const DatePickerField = <T extends FieldValues>({
  control,
  name,
  calendarProps,
  disablePast = true,
  label,
  required,
  labelClassName,
  ...props
}: Props<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div>
              <Show when={!!label}>
                <FormLabel className={labelClassName}>
                  {label} {required && <span className="text-error-light">*</span>}
                </FormLabel>
              </Show>
              <DatePicker disablePast={disablePast} calendarProps={calendarProps} {...props} {...field} />
            </div>
          </FormControl>
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { DatePickerField };
