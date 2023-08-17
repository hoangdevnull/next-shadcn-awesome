import dayjs from 'dayjs';
import * as z from 'zod';

export const putOnSaleSchema = z.object({
  salePrice: z.union([z.string().transform((v) => (Number.isNaN(+v) ? undefined : +v)), z.number()]),
  startTime: z.date().transform((v) => {
    return dayjs(v).isValid() ? dayjs(v).valueOf() : undefined;
  }),
  endTime: z.date().transform((v) => (dayjs(v).isValid() ? dayjs(v).valueOf() : undefined)),
});

export type PutOnSaleSchema = z.infer<typeof putOnSaleSchema>;

export const transferNftSchema = z.object({
  receiptAddress: z.string(),
});

export type TransferNftSchema = z.infer<typeof transferNftSchema>;
