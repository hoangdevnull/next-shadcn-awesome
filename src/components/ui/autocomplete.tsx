/* eslint-disable no-extra-boolean-cast */

'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { Check } from 'lucide-react';
import { type KeyboardEvent, useCallback, useRef, useState } from 'react';

import { Icons } from '@/assets/icons';
import { CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import usePopover from '@/hooks/usePopover';
import { cn } from '@/lib/utils';

import { Label } from './label';
import { Skeleton } from './skeleton';
import { HStack, Show, VStack } from './Utilities';

type Option = {
  value: string;
  label: string;
};
type AutoCompleteProps = {
  options: Option[];
  value?: Option;
  onValueChange?: (value: Option) => void;
  onInputChange?: (value: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  suffix?: any;
  label: string;
  name?: string;
  className?: string;
};

export const AutoComplete = ({
  options,
  placeholder,
  value,
  onValueChange,
  disabled,
  isLoading = false,
  suffix,
  label,
  onInputChange,
  ...props
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, floatingStyles, refs, { open, close }] = usePopover();

  const [selected, setSelected] = useState<Option>(value as Option);
  const [inputValue, setInputValue] = useState<string>(value?.value || '');

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        open();
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value);
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }

      if (event.key === 'Escape') {
        input.blur();
      }
    },
    [isOpen, open, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    close();
    setInputValue(selected?.label ?? inputValue);
  }, [close, inputValue, selected?.label]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onValueChange?.(selectedOption);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange]
  );

  const handleChange = (val: string) => {
    onInputChange?.(val);
    setInputValue(val);
  };

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div ref={refs.setReference} className="relative">
        <Label className="mb-1.5 block">{label}</Label>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={handleChange}
          onBlur={handleBlur}
          onFocus={open}
          placeholder={placeholder}
          disabled={disabled}
          icon={<></>}
          wrapperClassName="border-input rounded-sm ring-offset-background peer border h-14 px-3 text-sm rounded-sm bg-transparent placeholder:font-light"
          {...props}
        />
        <div className="absolute right-[10px] top-1/2 -translate-y-1/2">{suffix || <Icons.arrowDown />}</div>
      </div>
      <div className="relative mt-1">
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(
            'bg-popover shadow-popover z-50 min-h-[40px] w-full rounded-sm outline-none',
            isOpen ? 'visible' : 'invisible'
          )}
        >
          <CommandList>
            {isLoading ? (
              <CommandPrimitive.Loading>
                <VStack spacing={4} className="p-1">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </VStack>
              </CommandPrimitive.Loading>
            ) : null}

            <CommandGroup>
              {(isLoading ? [] : options).map((option) => {
                const isSelected = selected?.value === option.value;
                return (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                    onSelect={() => handleSelectOption(option)}
                    className={cn('flex w-full items-center gap-2', !isSelected ? 'pl-8' : null)}
                  >
                    {isSelected ? <Check className="w-4" /> : null}
                    {option.label}
                  </CommandItem>
                );
              })}

              <Show when={!options.find((x) => x.value === inputValue) && !!inputValue}>
                <CommandItem
                  value={inputValue}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                  onSelect={() => handleSelectOption({ label: inputValue, value: inputValue })}
                  className={cn('flex w-full items-center gap-2')}
                >
                  {inputValue === selected?.value ? (
                    <Icons.check className="text-success w-4" />
                  ) : (
                    <Icons.plus className="text-success w-4" />
                  )}
                  <HStack className="text-success">Suggest &quot;{inputValue}&quot;</HStack>
                </CommandItem>
              </Show>
            </CommandGroup>
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
