import type { FC } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const Burger: FC<Props> = ({ isActive }) => {
  return (
    <div className="flex h-[14px] w-[1.4rem] cursor-pointer flex-col justify-around space-y-1">
      <span
        className={cn('border-light border-b-2 transition-all duration-500 ease-in-out', {
          'translate-y-[4px] rotate-45': isActive,
          'rotate-0': !isActive,
        })}
      />
      <span className={`${isActive ? 'hidden' : 'block'} border-light w-1/2 border-b-2`} />
      <span
        className={cn('border-light border-b-2 transition-all duration-500 ease-in-out', {
          '-translate-y-[4px] -rotate-45': isActive,
          'rotate-0': !isActive,
        })}
      />
    </div>
  );
};

export default Burger;
