import { useEffect, useRef } from 'react';

const useScrambleEffect = (ref: React.RefObject<HTMLElement>, text: string, duration = 30) => {
    const intervalRef = useRef<number | null>(null); 
    const letters = "&?%$#@!абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890";

    useEffect(() => {
        if (!ref.current) return;

        const targetText = text;
        let iteration = 0;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => {
            if (!ref.current) return;

            ref.current.innerText = targetText
                .split("")
                .map((_, index) => {
                    if (index < iteration) {
                        return targetText[index]; 
                    }
                    return letters[Math.floor(Math.random() * 26)]; 
                })
                .join("");

            if (iteration >= targetText.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 2; 
        }, duration);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current); 
        };
    }, [text, duration, ref]); 
};

export default useScrambleEffect;
