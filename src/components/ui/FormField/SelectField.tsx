import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';
import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import type { selectTriggerVariants } from '../select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';
import { Show } from '../Utilities';

interface IData {
  label: string;
  value: string;
  image?: string;
  group?: string;
}

interface Props<T extends FieldValues = FieldValues>
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectTriggerVariants> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: ReactNode;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  labelClassName?: string;
  data: IData[];
}

const SelectField = <T extends FieldValues>({
  name,
  defaultValue,
  control,
  label,
  required,
  data,
  variant,
  inputSize,
  fullWidth,
  className,
  labelClassName,
  placeholder = 'Please select',
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <div className={cn('relative', fullWidth ? 'w-full' : '')}>
            <FormItem>
              <Select onValueChange={field.onChange} value={field.value} disabled={props.disabled}>
                <FormControl>
                  <div>
                    <Show when={!!label}>
                      <FormLabel className={labelClassName}>
                        {label} {required && <span className="text-error-light">*</span>}
                      </FormLabel>
                    </Show>
                    <SelectTrigger
                      variant={variant}
                      inputSize={inputSize}
                      className={cn(className, { 'w-full': fullWidth })}
                    >
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                  </div>
                </FormControl>

                <SelectContent>
                  {data.map((x) => (
                    <SelectItem key={x.value} value={x.value}>
                      {x.image ? (
                        <div className="flex items-center space-x-2">
                          {x.image && <img src={x.image!} alt="" className="h-6 w-6" />}
                          <p>{x.label}</p>
                        </div>
                      ) : (
                        x.label
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="mt-1 text-xs" />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export { SelectField };
