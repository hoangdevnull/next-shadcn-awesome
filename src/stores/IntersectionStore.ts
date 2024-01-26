import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

export interface IModalStore {
  targetInView: string;
  setTargetInView: (target: string) => void;
}

const useBaseIntersectionStore = create<IModalStore>((set) => ({
  targetInView: '',
  setTargetInView: (target) => set(() => ({ targetInView: target })),
}));

export const useIntersectionStore = createSelectorFunctions(useBaseIntersectionStore);
