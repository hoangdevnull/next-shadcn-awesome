import { useClickOutside } from '@mantine/hooks';
import { format, isValid, parse } from 'date-fns';
import React from 'react';
import type { SelectSingleEventHandler } from 'react-day-picker';
import { toast } from 'sonner';

import { Icons } from '@/assets/icons';
import usePopover from '@/hooks/usePopover';
import { isPastDate } from '@/lib/common';
import { cn } from '@/lib/utils';

import { Calendar, type CalendarProps } from './calendar';
import { Input, type InputProps } from './input';

export interface DatePickerProps extends Omit<InputProps, 'onChange' | 'value'> {
  onChange: (date?: Date) => void;
  value?: Date;
  calendarProps?: CalendarProps;
  disablePast?: boolean;
}
const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ onChange, value, onBlur, calendarProps, disablePast, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [isOpen, floatingStyles, refs, { open, toggle, close }] = usePopover();
    const popoverRef = useClickOutside(close);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setInputValue(e.currentTarget.value);
      const date = parse(e.currentTarget.value, 'dd/MM/yyyy', new Date());
      if (isValid(date)) {
        onChange(date);
      } else {
        onChange(undefined);
      }
    };

    const handleSelect: SelectSingleEventHandler = (date) => {
      if (!date) {
        return;
      }
      onChange(date);
      setInputValue(format(date, 'dd/MM/yyyy'));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
      const date = parse(e.currentTarget.value, 'dd/MM/yyyy', new Date());
      if (disablePast) {
        if (isPastDate(date)) {
          setInputValue('');
          toast.error('Date value must be in the future');
          onChange(undefined);
          return;
        }
      }

      if (!isValid(date)) {
        setInputValue('');
        onChange(undefined);
      }
    };

    return (
      <div>
        <div className="relative" ref={refs.setReference}>
          <Input
            {...props}
            suffix={<Icons.calendar className="cursor-pointer" onClick={toggle} />}
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={cn(
              'bg-popover shadow-popover left-0 z-50 min-h-[40px] w-fit overflow-hidden rounded-md outline-none'
            )}
            onClick={open}
          >
            <div ref={popoverRef}>
              <Calendar
                {...calendarProps}
                mode="single"
                selected={value}
                defaultMonth={value}
                onSelect={handleSelect}
                disablePast={disablePast}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
