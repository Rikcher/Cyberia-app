import { create } from "zustand";
import { darkTheme, lightTheme } from "../../../shared/styles/theme"; 

interface ThemeState {
    theme: typeof darkTheme;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => {
    const savedTheme = localStorage.getItem("theme") as string;
    const initialTheme = savedTheme === "darkTheme" ? darkTheme : lightTheme;

    return {
        theme: initialTheme, 
        toggleTheme: () =>
            set((state) => {
                const newTheme = state.theme === darkTheme ? lightTheme : darkTheme;
                localStorage.setItem("theme", newTheme === darkTheme ? "darkTheme" : "lightTheme");
                return { theme: newTheme };
            }),
    };
});
