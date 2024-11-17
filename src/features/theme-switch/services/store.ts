import { create } from "zustand";
import { darkTheme, lightTheme } from "../../../shared/styles/theme"; 

interface ThemeState {
    theme: typeof darkTheme; 
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: darkTheme, 
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === darkTheme ? lightTheme : darkTheme,
        })),
}));
