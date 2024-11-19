import {create} from "zustand";
import { useEffect } from "react";

interface WindowSizeStore {
    width: number;
    updateWindowSize: (width: number) => void;
}

export const useWindowSizeStore = create<WindowSizeStore>((set) => ({
    width: window.innerWidth,
    updateWindowSize: (width) => set({ width }),
}));

export const useResizeListener = () => {
    const updateWindowSize = useWindowSizeStore((state) => state.updateWindowSize);
    
    useEffect(() => {
        const handleResize = () => {
            updateWindowSize(window.innerWidth); 
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [updateWindowSize]);
};
