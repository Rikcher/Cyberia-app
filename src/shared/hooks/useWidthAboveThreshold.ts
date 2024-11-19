import { useEffect, useState } from "react";
import { useWindowSizeStore } from "../store/useWindowSizeStore"; 

const useWidthAboveThreshold = (threshold: number) => {
    const { width } = useWindowSizeStore();
    const [isAboveThreshold, setIsAboveThreshold] = useState<boolean>(width > threshold);

    useEffect(() => {
        const newWidthState = width > threshold;
        if (newWidthState !== isAboveThreshold) {
            setIsAboveThreshold(newWidthState);
        }
    }, [width, isAboveThreshold, threshold]);

    return isAboveThreshold;
};

export default useWidthAboveThreshold;
