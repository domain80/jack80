import { create } from "zustand";

type State = {
    current: number;
};

export type FooterAction = {
    updateCurrent: (newFooter: State["current"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useAboutScoller = create<State & FooterAction>((set) => ({
    current: 0,
    updateCurrent: (newCurrent) => set(() => ({ current: newCurrent })),
}));
