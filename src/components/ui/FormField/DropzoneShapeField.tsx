import Image from 'next/image';
import type { ChangeEvent } from 'react';
import React, { useEffect, useId, useState } from 'react';
import type { FileWithPath } from 'react-dropzone';

import type { FCC } from '@/types';

import { Icons } from '../../icons';
import { Button } from '../button';

interface Props {
  onChange: (file: FileWithPath | null) => void;
  className?: string;
  preview?: File | string;
  disabled?: boolean;
}

const DropzoneShapeField: FCC<Props> = ({ onChange, preview, disabled = false, className }) => {
  const [blob, setBlob] = useState('');
  const id = useId();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event?.target?.files![0];

    if (selectedFile) {
      onChange(selectedFile);
      if (blob) {
        URL.revokeObjectURL(blob);
      }
      setBlob(URL.createObjectURL(selectedFile));
    }
  };

  const handleClear = () => {
    setBlob('');
    onChange(null);
    URL.revokeObjectURL(blob);
  };

  useEffect(() => {
    if (typeof preview === 'string') {
      setBlob(preview);
    }

    if (typeof preview === 'object') {
      setBlob(URL.createObjectURL(preview));
    }

    return () => {
      if (blob) {
        URL.revokeObjectURL(blob);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <label
      onClick={(e) => {
        if (blob || disabled) {
          e.preventDefault();
        }
        return null;
      }}
      htmlFor={id}
      className={`${className} relative mb-1 flex h-full w-full cursor-pointer items-center justify-center rounded-xl  border-2 border-dashed border-gray-500 bg-black font-medium`}
    >
      {blob && (
        <Image fill className="z-1 absolute left-0 right-0 top-0 h-full w-full rounded-xl bg-cover" src={blob} alt="" />
      )}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {blob ? (
          <Button variant={'ghost'} onClick={handleClear} size={'sm'}>
            <Icons.trash size={15} />
          </Button>
        ) : (
          <Icons.imagePlus />
        )}
      </div>

      <input
        id={id}
        hidden
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={handleFileChange}
        className="w-full rounded border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
      />
    </label>
  );
};

export { DropzoneShapeField };
