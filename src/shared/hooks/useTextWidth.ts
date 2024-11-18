import { useEffect, useRef, useState } from "react";
const useTextWidth = (text: string | null) => {
    const textMeasureRef = useRef<HTMLSpanElement | null>(null);
    const [textWidth, setTextWidth] = useState<number>(0);

    useEffect(() => {
        if (textMeasureRef.current) {
            const measuredWidth = textMeasureRef.current.offsetWidth;
            setTextWidth(measuredWidth);
        }
    }, [text]);

    return { textWidth, textMeasureRef };
};

export default useTextWidth;
