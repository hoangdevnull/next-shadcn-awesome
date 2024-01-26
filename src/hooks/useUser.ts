import type { QueryHookOptions } from 'react-query-kit';

import type { IUser } from '@/api/auth';
import { useUserQuery } from '@/api/auth';

export const useUser = (options?: QueryHookOptions<IUser, Error, IUser, any> | undefined) => {
  const { data, ...rest } = useUserQuery(options);

  return {
    isLoggedIn: !!data,
    user: data,
    ...rest,
  };
};
