import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { isPastDate } from '@/lib/common';
import { cn } from '@/lib/utils';

import { Icons } from '../../assets/icons';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  disablePast?: boolean;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  disablePast,
  ...props
}: CalendarProps): JSX.Element {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('bg-background p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1 bg-background',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2 rounded-md overflow-hidden',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(buttonVariants({ variant: 'ghost' }), 'h-8 w-8 p-0 font-normal aria-selected:opacity-100'),
        day_selected: 'bg-main hover:bg-main focus:bg-main hover:text-white text-white rounded-md',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-40 invisible',
        day_disabled: 'text-muted-foreground opacity-40',
        day_range_middle: 'aria-selected:bg-indigo-100 aria-selected:text-indigo-800 rounded-md',
        day_hidden: 'invisible',
        ...classNames,
      }}
      disabled={disablePast ? isPastDate : props.disabled}
      components={{
        IconLeft: () => <Icons.chevronLeft className="h-4 w-4" />,
        IconRight: () => <Icons.chevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
