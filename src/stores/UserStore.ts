import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ILoginResponse, IUser } from '@/api/auth';

export interface IMeQueryStore {
  user: IUser;
  accessToken: string;
  refreshToken?: string;
  setStore: (data: ILoginResponse) => void;
  setAccessToken: (data: string) => void;
  logout: () => void;
}

const useBaseUserStore = create<IMeQueryStore>()(
  persist(
    (set) => ({
      accessToken: '',
      refreshToken: undefined,
      user: {} as IUser,
      setStore: (data) => set((_) => data),
      setAccessToken: (data) => set((state) => ({ ...state, accessToken: data })),
      logout: () => set(() => ({ accessToken: '', refreshToken: undefined, user: {} as IUser })),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUserStore = createSelectorFunctions(useBaseUserStore);
