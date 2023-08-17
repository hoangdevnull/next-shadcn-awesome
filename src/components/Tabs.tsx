import { motion } from 'framer-motion';
import type { FC } from 'react';

import { cn } from '@/lib/utils';

interface Option {
  label: string;
  value: string | number;
}
interface Props {
  data: Option[];
  onChange: (value: string | number) => void;
  value: string | number;
}

const Tabs: FC<Props> = ({ data, onChange, value }) => {
  return (
    <div className="border-b">
      <ul className="flex flex-wrap gap-6 ">
        {data.map((tab) => (
          <li
            onClick={() => onChange(tab.value)}
            className={cn(
              value === tab.value
                ? 'active relative inline-block pb-2 text-white'
                : 'text-dark-gray relative inline-block border-transparent pb-2 hover:text-white',
              'cursor-pointer text-center text-sm font-medium'
            )}
            key={tab.value}
          >
            {tab.label}
            {value === tab.value ? (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 z-10 h-[.125rem] w-full bg-slate-50"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
