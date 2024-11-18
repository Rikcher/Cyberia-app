import { useRef } from "react";
import anime from "animejs";

const useTextAnimation = () => {
    const textWrapperRef = useRef<HTMLParagraphElement | null>(null);

    const startAnimation = () => {
        if (textWrapperRef.current) {
            textWrapperRef.current.innerHTML =
                textWrapperRef.current.textContent?.replace(
                    /\S/g,
                    "<span class='letter'>$&</span>"
                ) || "";

            anime.timeline({ loop: false }).add({
                targets: textWrapperRef.current.querySelectorAll(".letter"),
                translateX: [40, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: (_, i) => 25 * i,
            });
        }
    };

    return {
        textWrapperRef,
        startAnimation,
    };
};

export default useTextAnimation;
