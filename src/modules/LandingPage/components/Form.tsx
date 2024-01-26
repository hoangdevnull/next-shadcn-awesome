import React from 'react';
import { useForm } from 'react-hook-form';

import { AutoComplete } from '@/components/ui/autocomplete';
import { Button } from '@/components/ui/button';
import { FormWrapper } from '@/components/ui/form';
import {
  AvatarUploadField,
  DatePickerField,
  SelectField,
  SelectWithSearchField,
  TextAreaField,
  TextField,
} from '@/components/ui/FormField';
import { HStack, VStack } from '@/components/ui/Utilities';
import { LANGUAGE_SELECT_OPTIONS } from '@/lib/json';

const Form = () => {
  const form = useForm({});
  return (
    <div className="container py-12">
      <FormWrapper form={form} formId="test" onSubmit={console.log}>
        <AvatarUploadField control={form.control} name="avatar" />
        <VStack>
          <TextField control={form.control} name="email" fullWidth label="Email" />
          <TextField control={form.control} name="password" fullWidth label="Password" type="password" />
          <TextAreaField control={form.control} name="description" fullWidth label="Description" />
          <DatePickerField control={form.control} name="Birthday" fullWidth label="Birthday" />
          <SelectField
            data={LANGUAGE_SELECT_OPTIONS}
            control={form.control}
            name="language"
            fullWidth
            label="Language"
          />

          <SelectWithSearchField
            data={LANGUAGE_SELECT_OPTIONS}
            control={form.control}
            name="language"
            fullWidth
            label="Language"
          />

          <AutoComplete options={LANGUAGE_SELECT_OPTIONS} label={'Auto complete'} />

          <HStack>
            <Button>Submit</Button>
            <Button>Cancel</Button>
          </HStack>
        </VStack>
      </FormWrapper>
    </div>
  );
};

export default Form;
