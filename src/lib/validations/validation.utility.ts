/* eslint-disable no-nested-ternary */
import type { ZodTypeAny } from 'zod';
import { z } from 'zod';

import type { MIME_TYPE } from '../mime';

const emptyStringToUndefined = z.literal('').transform(() => undefined);

export function asOptionalField<T extends ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const numberRequired = z
  .number({ required_error: 'This is a required field' })
  .or(z.string().transform(Number))
  .refine((data: any) => {
    if (!data || data === '') return false;
    return true;
  }, 'This is a required field')
  .refine((data) => {
    if (Number.isNaN(Number(data))) return false;
    return true;
  }, 'invalid number');

export function asStringRequired<T extends ZodTypeAny>(schema?: T) {
  return (schema ?? z.string()).refine(
    (u) => {
      const str = u.trim().replace(/\s\s+/g, ' ');
      return str === '' ? false : str;
    },
    {
      params: {
        i18n: 'errors.invalid_type_received_undefined',
      },
    }
  );
}

export function stringRefine<T extends ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const zFileValidator = (size: number, fileType: MIME_TYPE[], isRequired = true) => {
  return isRequired
    ? z
        .any()
        .refine((file) => Boolean(file), { params: { i18n: 'errors.invalid_type_received_undefined' } })
        .refine((file) => (typeof file === 'string' ? true : file?.size <= size), {
          params: { i18n: { key: 'errors.max_file_size', values: { maximum: '5MB' } } },
        })
        .refine((file) => (typeof file === 'string' ? true : fileType.includes(file?.type)), {
          params: { i18n: { key: 'errors.file_type_accepted', values: { fileType: fileType.join(', ') } } },
        })
    : z
        .any()
        .optional()
        .refine((file) => (typeof file === 'string' ? true : file ? file?.size <= size : true), {
          params: { i18n: { key: 'errors.max_file_size', values: { maximum: '5MB' } } },
        })
        .refine((file) => (typeof file === 'string' ? true : file ? fileType.includes(file?.type) : true), {
          params: { i18n: { key: 'errors.file_type_accepted', values: { fileType: fileType.join(', ') } } },
        });
};

export const twitterUrlRegex = /^https?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]{1,15})$/;

export const facebookUrlRegex = /^https?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]{1,})$/;

export const validationMessages = {
  required: (field?: string) => (field ? `${field} field is required` : 'This field is required'),
  number: (field?: string) => (field ? `${field} must be a number` : 'This field must be a number'),
  between: (min: number, max: number, field?: string) =>
    field
      ? `Sorry, your ${field.toLowerCase()} must be between ${min} and ${max} characters long`
      : `Sorry, this field must be between ${min} and ${max} characters long`,
  max: (max: number, field?: string) =>
    field
      ? `Sorry, your ${field.toLowerCase()} must be at most ${max} characters long`
      : `Sorry, this field must be at most ${max} characters long`,
  gt: (min: number, field?: string) =>
    field ? `${field} must be at least ${min} characters` : `This field must be at least ${min} characters`,
  gte: (min: number, field?: string) =>
    field ? `${field} must be greater than or equal to ${min}` : `This field must be greater than or equal to ${min}`,
  lt: (max: number, field?: string) =>
    field ? `${field} must be smaller than ${max}` : `This field must be smaller than ${max}`,
  lte: (max: number, field?: string) =>
    field ? `${field} must be smaller than or equal to ${max}` : `This field must be smaller than or equal ${max}`,
  specialCharacters: () =>
    "This field can only contain the following special characters: '-', '_', ' '. No other special characters are allowed",
  emoji: () => 'No other emoji characters are allowed',
  invalid: (field?: string) => (field ? `This is not a valid ${field}` : 'This is not a valid field'),
};
