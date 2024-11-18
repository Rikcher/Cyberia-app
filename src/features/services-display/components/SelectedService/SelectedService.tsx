import React, { useRef } from "react";
import useScrambleEffect from "../../../../shared/hooks/useScrambleEffect";
import {
    StyledSelectedService,
    StyledHoverTip,
    InformationWrapper,
} from "./SelectedService.styles";
import getAreaData from "../../utils/getAreaData";

interface SelectedServiceProps {
    isFaded: boolean;
    selectedArea: string | null;
}

const SelectedService: React.FC<SelectedServiceProps> = ({
    isFaded,
    selectedArea,
}) => {
    const { title, description, price } = getAreaData(selectedArea);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const priceRef = useRef<HTMLParagraphElement>(null);

    useScrambleEffect(titleRef, title, 40);
    useScrambleEffect(descriptionRef, description, 30);
    useScrambleEffect(priceRef, price || "Наведите чтобы узнать больше", 60);

    return (
        <StyledSelectedService $isFaded={isFaded}>
            <InformationWrapper>
                <h2 ref={titleRef}></h2>
                <p ref={descriptionRef}></p>
                <StyledHoverTip>
                    {!price && <div></div>}
                    <p ref={priceRef}></p>
                </StyledHoverTip>
            </InformationWrapper>
        </StyledSelectedService>
    );
};

export default SelectedService;
