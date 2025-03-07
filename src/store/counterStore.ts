"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ICounterStore {
  counter: number;
  increment : ()=> void;
  decrement : ()=> void;
  reset : ()=> void;
  getLatestCountDivided2: ()=> number;
}
export const useCounterStore = create<ICounterStore>()(
  persist(
    (set, get) => ({
      counter: 0,
    
      increment: () => set(state => ({ counter: state.counter + 1 })),
      decrement: () => set(state => ({ counter: state.counter - 1 })),
      reset: () => set({ counter: 0 }),
      getLatestCountDivided2: ()=> get().counter / 2,
    }),
    {
      name: "counter-store",
      storage: createJSONStorage(()=> localStorage),
    }
  )
);
