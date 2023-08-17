import React from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

interface IData {
  label: string;
  value: string;
  image?: string;
  group?: string;
}

interface Props<T extends FieldValues = FieldValues> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  label?: string;
  required?: boolean;
  data: IData[];
}

const SelectField = <T extends FieldValues>({
  name,
  defaultValue,
  control,
  label,
  required,
  data,
  ...props
}: Props<T>) => {
  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel>
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((x) => (
                <SelectItem key={x.value} value={x.value} className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    {x.image && <img src={x.image!} alt="" className="h-6 w-6" />}
                    <p>{x.label}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="mt-1 text-xs" />
        </FormItem>
      )}
    />
  );
};

export { SelectField };
