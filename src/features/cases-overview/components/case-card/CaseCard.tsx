import { useRef, useEffect } from "react";
import {
    StyledCaseCard,
    StyledCardHover,
    StyledDescription,
} from "./CaseCard.styles";
import useTextAnimation from "../../../../shared/hooks/useTextAnimation";
import CardTitle from "./card-title/CardTitle";
import { useWindowSizeStore } from "../../../../store/useWindowSizeStore";

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
    const { width } = useWindowSizeStore();

    useEffect(() => {
        const cardElement = cardRef.current;

        const handleMouseEnter = () => {
            startAnimation();
        };

        if (cardElement && width > 768) {
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
            {width > 768 && <CardTitle text={title} />}
            <StyledCardHover ref={cardRef}>
                <StyledDescription ref={textWrapperRef}>
                    {width <= 768 && <CardTitle text={title} />}
                    {description}
                </StyledDescription>
            </StyledCardHover>
        </StyledCaseCard>
    );
};

export default CaseCard;
