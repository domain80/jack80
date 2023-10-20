import { create } from "zustand";

type State = {
    footer: {
        linkName: string;
        linkUrl: string;
    };
};

export type FooterAction = {
    updateFooter: (newFooter: State["footer"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useFooterStore = create<State & FooterAction>((set) => ({
    footer: {
        linkName: "",
        linkUrl: "",
    },
    updateFooter: (newFooter) => set(() => ({ footer: newFooter })),
}));
