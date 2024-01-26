import { useRouter } from 'next/router';

import type { ObjectLiteral } from '@/types/common.type';

export const useRouterId = <T extends ObjectLiteral<string>>() => {
  const router = useRouter();
  const { id, ...rest } = router.query as T;
  return { id, router, rest };
};
