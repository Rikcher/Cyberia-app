import { useState, useRef, useEffect } from "react";

export const useHoverWithCircle = () => {
    const hoverRef = useRef<HTMLButtonElement | null>(null);
    const circleRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const hoverElement = hoverRef.current;

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        const handleMouseMove = (event: MouseEvent) => {
            if (hoverElement) {
                const rect = hoverElement.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                setCirclePosition({ x, y });
            }
        };

        if (hoverElement) {
            hoverElement.addEventListener("mouseenter", handleMouseEnter);
            hoverElement.addEventListener("mouseleave", handleMouseLeave);
            hoverElement.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (hoverElement) {
                hoverElement.removeEventListener("mouseenter", handleMouseEnter);
                hoverElement.removeEventListener("mouseleave", handleMouseLeave);
                hoverElement.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return { hoverRef, circleRef, isHovered, circlePosition };
};
