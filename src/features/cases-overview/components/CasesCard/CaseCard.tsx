// src/components/CaseCard/CaseCard.tsx
import { useRef, useEffect } from "react";
import StyledCaseCard from "./StyledCaseCard";
import CardTitle from "./CardTitle/CardTitle";
import StyledCardHover from "./StyledCardHover";
import StyledDescription from "./StyledDescription";
import useTextAnimation from "../../../../shared/hooks/useTextAnimation";

interface CaseCardProps {
    bgImgUrl: string;
    title: string;
    description: string;
}

const CaseCard: React.FC<CaseCardProps> = ({
    bgImgUrl,
    title,
    description,
}) => {
    const { textWrapperRef, startAnimation } = useTextAnimation();
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cardElement = cardRef.current;

        const handleMouseEnter = () => {
            startAnimation();
        };

        if (cardElement) {
            cardElement.addEventListener("mouseenter", handleMouseEnter);
        }

        return () => {
            if (cardElement) {
                cardElement.removeEventListener("mouseenter", handleMouseEnter);
            }
        };
    }, [startAnimation]);

    return (
        <StyledCaseCard $bgImgUrl={bgImgUrl}>
            <CardTitle text={title} />
            <StyledCardHover ref={cardRef}>
                <StyledDescription ref={textWrapperRef}>
                    {description}
                </StyledDescription>
            </StyledCardHover>
        </StyledCaseCard>
    );
};

export default CaseCard;
