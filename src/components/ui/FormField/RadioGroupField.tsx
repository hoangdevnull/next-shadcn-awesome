import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { ISelectOption } from '@/types/common.type';

import { FormControl, FormField, FormItem, FormMessage } from '../form';

interface RadioGroupFieldProps<T extends FieldValues = FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  data?: ISelectOption<string>[];
  className?: string;
}

const RadioGroupField = <T extends FieldValues>({
  control,
  name,
  data = [],
  className,
  defaultValue,
}: RadioGroupFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="my-3 flex items-center space-x-2">
            <FormControl>
              <RadioGroup
                className={className}
                defaultValue={defaultValue}
                value={field.value}
                onValueChange={field.onChange}
              >
                {data.map(({ label, value }, i) => (
                  <label key={i} className="flex h-14 cursor-pointer items-center space-x-2.5">
                    <RadioGroupItem value={value} />
                    <p>{label}</p>
                  </label>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export { RadioGroupField };
