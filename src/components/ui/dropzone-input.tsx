import { useCallback, useState } from 'react';
import type { FileRejection, FileWithPath } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';

interface RejectedFile {
  file: File;
  errors: FileRejection['errors'];
}

interface Props {
  onDrop: (files: FileWithPath[]) => void;
  className?: string;
  disabled?: boolean;
}

const Dropzone: React.FC<Props> = ({ className, disabled, onDrop }) => {
  const [_rejected, setRejected] = useState<RejectedFile[]>([]);

  const handleDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (disabled) return;
    if (acceptedFiles?.length) {
      onDrop([...acceptedFiles]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [
        ...previousFiles,
        ...rejectedFiles.map((rejectedFile) => ({
          file: rejectedFile.file,
          errors: rejectedFile.errors,
        })),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*' as any,
    maxSize: 1024 * 1000,
    disabled,
    onDrop: handleDrop,
  });

  return (
    <div
      {...getRootProps({ className })}
      className={cn(
        {
          'cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        },
        'bg-dark-surface flex min-h-[10rem] items-center  justify-center rounded-md border-2 border-dashed border-gray-500'
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-4">
        <Icons.upload className="h-5 w-5 fill-current" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="text-center">
            <p>Drag images here or click to select files</p>
            <p className="text-gray-400">Attach your file here, each file should not exceed 5mb</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
