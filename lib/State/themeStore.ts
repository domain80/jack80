import { create } from "zustand";

type State = {
    theme: "dark" | "";
};

export type FooterAction = {
    updateTheme: (newTheme: State["theme"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useThemeStore = create<State & FooterAction>((set) => ({
    theme: "dark",
    updateTheme: (newTheme) => set(() => ({ theme: newTheme })),
}));
