import * as React from 'react';

import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textArea?: boolean;
}

const DisplayInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, textArea, label, type, ...props }, ref) => {
    return (
      <>
        {label && <Label className="mb-2 text-sm font-semibold">{label}</Label>}
        {textArea ? <Textarea readOnly /> : <Input readOnly ref={ref} {...props} />}
      </>
    );
  }
);
DisplayInput.displayName = 'Input';

export { DisplayInput };
