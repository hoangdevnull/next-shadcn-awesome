import Image from 'next/image';
import React, { useRef } from 'react';
import type { Control, FieldPath, FieldPathValue, FieldValues } from 'react-hook-form';

import { Icons } from '@/assets/icons';
import { type MIME_TYPE } from '@/lib/mime';

import type { ButtonProps } from '../button';
import { Button } from '../button';
import { FormControl, FormField, FormItem, FormMessage } from '../form';
import { HStack, Show, VStack } from '../Utilities';

interface Props<T extends FieldValues = FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'accept'> {
  control: Control<T>;
  name: FieldPath<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  fullWidth?: boolean;
  readonly?: boolean;
  accept?: MIME_TYPE[];
  btnProps?: ButtonProps;
}

const UploadButtonField = <T extends FieldValues>({
  accept = [],
  control,
  name,
  defaultValue,
  btnProps,
  readonly,
  ...props
}: Props<T>) => {
  const ref = useRef<React.ElementRef<'input'>>(null);

  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        const file = value as File;
        return (
          <FormItem>
            <Show when={!!file}>
              <div className="w-full flex-1">
                <VStack
                  spacing={0}
                  justify="center"
                  align="center"
                  className="border-input min-h-[304px] w-full  max-w-[282px] rounded-lg border px-6"
                >
                  <Image alt="pdf" src="/images/profiles/pdf.png" width={80} height={80} />

                  <p className="mt-6  text-xl font-medium text-neutral-100">{file?.name}</p>
                  <div className="border-input mb-8  mt-10 w-full border" />

                  <HStack className="w-full" pos="apart">
                    <p className="text-neutral-100">
                      Filesize:{' '}
                      <span className="text-neutral-20">{((file?.size ?? 0) / (1024 * 1024)).toFixed(5)} MB</span>
                    </p>
                    {!readonly && (
                      <Button onClick={() => onChange(undefined)} size="mixin" variant="ghost">
                        <Icons.reload className="text-main" />
                      </Button>
                    )}
                  </HStack>
                </VStack>
              </div>
            </Show>

            <Show when={!file}>
              <Button
                className="max-w-[150px]"
                fullWidth
                variant={btnProps?.variant ?? 'secondary'}
                onClick={() => ref.current?.click()}
                {...btnProps}
              >
                <HStack spacing={16}>
                  <Icons.upload />
                  <div>Upload</div>
                </HStack>
              </Button>
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
            </Show>

            <FormMessage className="mt-1 text-xs" />
          </FormItem>
        );
      }}
    />
  );
};

export { UploadButtonField };
