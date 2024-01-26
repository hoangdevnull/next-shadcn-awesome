import React, { useId } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem } from '../form';
import { Switch } from '../switch';

interface SwitchProps<T extends FieldValues = FieldValues> {
  isChecked?: boolean;
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
}

const SwitchField = <T extends FieldValues>({ control, name, ...props }: SwitchProps<T>) => {
  const id = useId();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Switch id={id} checked={field.value} onCheckedChange={field.onChange} {...props} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export { SwitchField };
