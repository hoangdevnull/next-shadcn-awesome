import type { IPaging } from '@/types';

export const env = {
  isProduction: process.env.NODE_ENV === 'production',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
};

export const FILE_FORMAT = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'];

export const allPaging: IPaging = {
  limit: 1000,
  page: 1,
};
