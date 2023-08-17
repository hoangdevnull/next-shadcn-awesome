/* eslint-disable import/no-extraneous-dependencies */
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

type ModalKey = 'email' | string;

export interface IModalStore {
  opens: string[];
  check: (key: ModalKey) => boolean;
  close: (key: ModalKey) => void;
  toggle: (key: ModalKey) => void;
  open: (key: ModalKey) => void;
}

const useBaseModalStore = create<IModalStore>((set, getState) => ({
  opens: [],
  check: (key) => getState().opens.includes(key),
  close: (key) => set((state) => ({ opens: state.opens.filter((x) => x !== key) })),
  toggle: (key) =>
    set((state) => ({
      opens: state.opens.includes(key) ? state.opens.filter((x) => x !== key) : [...state.opens, key],
    })),
  open: (key) => set((state) => ({ opens: [...state.opens, key] })),
}));

export const useModalStore = createSelectorFunctions(useBaseModalStore);
