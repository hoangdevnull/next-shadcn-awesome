import { useMemo } from 'react';

import { gcd } from '@/lib/image';

export const useImageAspect = (w: number, h: number) => {
  return useMemo(() => {
    const r = gcd(w, h);
    return `${w / r}/${h / r}`;
  }, [w, h]);
};
