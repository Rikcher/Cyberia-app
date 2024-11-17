import { create } from "zustand";

interface LanguageStore {
    language: string;
    setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
    language: localStorage.getItem("language") || "ru", 
    setLanguage: (language: string) => {
        localStorage.setItem("language", language); 
        set({ language });
    },
}));


export default useLanguageStore;
