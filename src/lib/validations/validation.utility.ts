import type { ZodTypeAny } from 'zod';
import { z } from 'zod';

const emptyStringToUndefined = z.literal('').transform(() => undefined);

export function asOptionalField<T extends ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const numberRequired = z
  .number()
  .or(z.string().transform(Number))
  .refine((data: any) => {
    if (!data || data === '') return false;
    return true;
  }, 'Required')
  .refine((data) => {
    if (Number.isNaN(Number(data))) return false;
    return true;
  }, 'invalid number');
