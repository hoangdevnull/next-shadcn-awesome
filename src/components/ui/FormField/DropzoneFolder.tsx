// eslint-disable-next-line import/no-extraneous-dependencies
import { useToggle } from '@mantine/hooks';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { Icons } from '@/components/icons';
import { useTablet } from '@/hooks/breakpoint';
import { calculateFileSize } from '@/lib/calc';
import { validateFileFormat, validateFileSize, validateFolder } from '@/lib/common';
import { cn, removeItem } from '@/lib/utils';
import type { FCC, IFolder } from '@/types';

// @ts-ignore
import { Show } from '../show';
import { Tooltip } from '../tooltip';

interface Props {
  onDrop: (folder: IFolder[]) => void;
  partsOfLayer: number;
}

interface FolderItemProps {
  folder: IFolder;
  isShow: boolean;
  folderIndex: number;
  sizeFolder: number;
  partsOfLayer: number;
  deleteFolder: () => void;
  deleteItem: (itemIndex: number, folderIndex: number) => void;
}

export const FolderItem: FCC<FolderItemProps> = ({
  folder,
  isShow,
  partsOfLayer,
  folderIndex,
  sizeFolder,
  deleteFolder,
  deleteItem,
}) => {
  const [show, toggleShow] = useToggle([isShow, !isShow]);
  const isTablet = useTablet();

  const previews = useMemo(() => {
    return folder.files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
  }, [folder]);

  useEffect(() => {
    return () => {
      if (previews.length) {
        previews.forEach((x) => URL.revokeObjectURL(x.url));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteItem = (itemIndex: number) => {
    deleteItem(itemIndex, folderIndex);
    URL.revokeObjectURL(previews[itemIndex].url);
  };

  const formatSize = useMemo(() => {
    return calculateFileSize(sizeFolder);
  }, [sizeFolder]);

  return (
    <div className="flex flex-col overflow-hidden">
      <div onClick={() => toggleShow()} className="z-[10] flex cursor-pointer items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icons.chevronDown
            size={14}
            className={cn({ 'rotate-180': !show }, 'transition-all duration-300 ease-in-out')}
          />
          <Icons.folderOpen size={'1.3rem'} />
          <h1 title={folder?.folderName} className="max-w-[50%] truncate text-xs">
            {folder?.folderName}
          </h1>
          <span>/</span>
          <h1 className="text-xs">
            {formatSize.kilobytes > 1000 ? `${formatSize.megabytes} MB` : `${formatSize.kilobytes} KB`}
          </h1>
          <div className="cursor-pointer" onClick={deleteFolder}>
            <Icons.trash size={15} className="text-red-400" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {folder.files.length > partsOfLayer && (
            <Tooltip
              label={
                <p className="max-w-[20rem] whitespace-pre-wrap bg-white">
                  You have reached the maximum of {partsOfLayer} layer parts. Check the Pricing page to increase your
                  limit
                </p>
              }
            >
              <div className="cursor-pointer">
                <Icons.warning size={14} className="text-red-300" />
              </div>
            </Tooltip>
          )}
          <h1 className="whitespace-nowrap text-sm text-gray-500">{`${folder.files.length} trait${
            folder.files.length > 1 ? 's' : ''
          }`}</h1>
        </div>
      </div>
      <Show when={show}>
        <div className="flex flex-col overflow-hidden ">
          {folder?.files?.map((file, i) => (
            <div
              key={file.name}
              className="ml-2 mt-3 flex cursor-pointer items-center space-x-2 before:-mt-3 before:mr-1 before:h-3  before:w-3 before:rounded-bl-sm before:border-b-[2px] before:border-l-[2px] before:border-gray-300"
            >
              <Icons.placeholder size={'1.1rem'} />
              <h1 title={file.name} className="max-w-[50%] truncate text-xs">
                {file.name}
              </h1>
              <span>/</span>
              <h1 className="text-xs">{`${calculateFileSize(file.size).kilobytes} KB`}</h1>

              <Tooltip
                label={
                  <Image
                    // blurDataURL={rgbDataURL(144, 141, 141)}
                    src={previews.find((x) => x.name === file.name)?.url ?? ''}
                    alt=""
                    width={isTablet ? 200 : 400}
                    height={isTablet ? 200 : 400}
                  />
                }
              >
                <div className="cursor-pointer">
                  <Icons.eye size={15} className="text-cyan-300" />
                </div>
              </Tooltip>
              <button onClick={() => handleDeleteItem(i)}>
                <Icons.trash size={15} className="text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </Show>
    </div>
  );
};

const DropzoneFolder: FCC<Props> = ({ onDrop, partsOfLayer }) => {
  const [folders, setFolders] = useState<IFolder[]>([]);
  const dropzoneRef = useRef<any>(null);

  const handleDrop = (e: any) => {
    e.preventDefault();
    try {
      const files: File[] = Array.from(e.target?.files) as File[];

      // Filter files
      const fileFilter = files.filter((x) => {
        return validateFileSize(x) && validateFileFormat(x) && validateFolder(x.webkitRelativePath);
      });
      // Space Sneks Demo/clothes/astronaut-suit.png

      const fileResults = fileFilter.reduce((pre, next) => {
        const [root, child] = next.webkitRelativePath.split('/');

        const index = pre.findIndex((x) => x.folderName === child);

        if (index === -1) {
          pre.push({ folderName: child, files: [next] });
        } else {
          pre[index].files.push(next);
        }

        return pre;
      }, [] as IFolder[]);

      setFolders(fileResults);
      onDrop(fileResults);
    } catch (err: any) {
      console.log('err', err);
    }
  };

  const deleteItem = (itemIndex: number, folderIndex: number) => {
    if (folders[folderIndex].files.length === 1) {
      deleteFolder(folders[folderIndex]);
      return;
    }
    const newFolders = [...folders];
    newFolders[folderIndex].files.splice(itemIndex, 1);
    setFolders(newFolders);
    onDrop(newFolders);
    dropzoneRef.current.value = null;
  };

  const deleteFolder = (folder: IFolder) => {
    setFolders(removeItem(folders!, folder));
    onDrop(removeItem(folders!, folder));
    dropzoneRef.current.value = null;
  };

  return (
    <>
      <label
        onChange={handleDrop}
        id="dropArea"
        className={
          'hover:bg-studio-surface cursor-pointer rounded-lg border-[0.125rem] border-dashed border-[#4b5563] bg-[#1F0F39]'
        }
      >
        {/* @ts-ignore */}
        <input id="dropArea" hidden ref={dropzoneRef} webkitdirectory={''} type={'file'} multiple />
        <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-3">
          <div className="text-center">
            <p className="text-lg">{folders.length ? 'Change folder' : 'Click here to select a folder'}</p>
            <p className="text-gray mt-4 inline text-sm text-gray-300">Attach your folder here</p>
          </div>
        </div>
      </label>

      {folders?.map((folder, i) => (
        <FolderItem
          key={folder.folderName}
          folder={folder}
          isShow={folders.length === 1}
          sizeFolder={folder?.files.reduce((acc, curr) => acc + curr.size, 0) ?? 0}
          partsOfLayer={partsOfLayer}
          deleteFolder={() => deleteFolder(folder)}
          folderIndex={i}
          deleteItem={deleteItem}
        />
      ))}
    </>
  );
};

export { DropzoneFolder };
