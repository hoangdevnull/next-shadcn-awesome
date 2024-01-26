import { motion } from 'framer-motion';
import { useId } from 'react';

import { cn } from '@/lib/utils';
import type { IOption } from '@/types/common.type';

interface Props<T extends string | number> {
  data: IOption<T>[];
  onChange: (value: T) => void;
  value: T;
  className?: string;
}

const TabsVertical = <T extends string | number>({ data, className, onChange, value }: Props<T>) => {
  const id = useId();
  return (
    <div className={className}>
      <div className="">
        <ul className="-mb-0.5 flex flex-col">
          {data.map((tab, i) => (
            <li
              onClick={() => onChange(tab.value)}
              className={cn('text-neutral-30 relative cursor-pointer px-6 py-4 text-xl', {
                'text-main bg-main-10': value === tab.value,
              })}
              key={i}
            >
              {tab.name}
              {value === tab.value ? (
                <motion.div
                  layoutId={id}
                  className="bg-main absolute bottom-0 left-0 z-10 h-full w-[5px]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsVertical;
