import { createQuery } from 'react-query-kit';

import { getListCourse, getUserProfile } from './requests';
import type { ICourse, IUser } from './types';

export const useUserQuery = createQuery<IUser>({
  primaryKey: '/profile',
  queryFn: getUserProfile,
});
export const useListCourse = createQuery<ICourse[]>({
  primaryKey: '/course',
  queryFn: getListCourse,
});
